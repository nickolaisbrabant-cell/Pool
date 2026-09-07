const URL_BASE = process.env.KV_REST_API_URL || process.env.kv_KV_REST_API_URL ||
                 process.env.UPSTASH_REDIS_REST_URL || process.env.KV_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.kv_KV_REST_API_TOKEN ||
              process.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = "pool:state";

async function redis(command) {
  const r = await fetch(URL_BASE, {
    method: "POST",
    headers: { Authorization: "Bearer " + TOKEN, "Content-Type": "application/json" },
    body: JSON.stringify(command),
  });
  if (!r.ok) throw new Error("redis " + r.status);
  return r.json();
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (!URL_BASE || !TOKEN) {
    return res.status(200).json({
      ok: false,
      reason: "Database not connected. Connect the Redis store, then redeploy.",
    });
  }

  try {
    if (req.method === "GET") {
      const out = await redis(["GET", KEY]);
      let state = out.result ? JSON.parse(out.result) : {};
      let dirty = false;

      if (!state.lg && (state.picks || state.surv || state.pin)) {
        state = { lg: { chandni: state } };
        dirty = true;
      }
      if (!state.lg) { state.lg = {}; dirty = true; }

      if (!state.lg.omw) {
        try {
          const old = await redis(["GET", "omw:state"]);
          if (old.result) {
            const parsed = JSON.parse(old.result);
            if (parsed && (parsed.picks || parsed.surv || parsed.pin)) {
              state.lg.omw = parsed;
              dirty = true;
            }
          }
        } catch (e) { /* nothing to bring over */ }
      }

      if (dirty) await redis(["SET", KEY, JSON.stringify(state)]);
      return res.status(200).json({ ok: true, state: state });
    }

    if (req.method === "POST") {
      let body = req.body;
      if (typeof body === "string") body = JSON.parse(body);
      if (!body) {
        const chunks = [];
        for await (const c of req) chunks.push(c);
        body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
      }
      const { path, value } = body;
      if (!path) return res.status(400).json({ ok: false, reason: "no path" });

      const current = await redis(["GET", KEY]);
      const state = current.result ? JSON.parse(current.result) : {};
      const parts = String(path).split(".");
      let node = state;
      for (let i = 0; i < parts.length - 1; i++) {
        if (typeof node[parts[i]] !== "object" || node[parts[i]] === null) node[parts[i]] = {};
        node = node[parts[i]];
      }
      if (value === null) delete node[parts[parts.length - 1]];
      else node[parts[parts.length - 1]] = value;

      await redis(["SET", KEY, JSON.stringify(state)]);
      return res.status(200).json({ ok: true, state });
    }

    return res.status(405).json({ ok: false, reason: "bad method" });
  } catch (e) {
    return res.status(200).json({ ok: false, reason: String((e && e.message) || e) });
  }
};

