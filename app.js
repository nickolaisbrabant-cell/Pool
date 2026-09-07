/* ============ THE LEAGUE ============ */
const LEAGUES = {
  chandni: {
    id:"chandni", name:"Chandni", full:"The Chandni", est:"est. 2011", fee:10,
    admins:["brodsky","corey","nick"],
    adminHint:"Brodsky, Corey or Nick can clear it for you.",
    theme:{ page:"#E7EFEC", sand:"#EFE4CE", panel:"#FDFCF7", ink:"#0F3B44", blue:"#1C7C8C",
            gold:"#EE8A3C", muted:"#65807F", line:"#D6DFD9", win:"#177E63", loss:"#C4523F",
            crest:"#0F3B44" },
    features:{ trophy:true, ledger:true, lore:true, sass:true, wendell:true, blast:"chandni", badge:"word" },
    copy:{ empty:"Nobody has picked yet. Drop the link in the GroupMe and watch who moves first.",
           missing:"Is this man alive?",
           missingSub:" not touched the card.",
           tie:"Send your entry to Holden. Meme off, anonymous, group votes." },
    members:[
      { id:"brodsky", name:"Zachary Brodsky", short:"Brodsky", role:"Commissioner, Stats Chair", rings:4, fan:"NYG" },
      { id:"holden",  name:"Holden Bridge",   short:"Holden",  role:"Vice President, Meme Chair", rings:5, fan:"DEN" },
      { id:"cam",     name:"Cameron Carlson", short:"Cam",     role:"Rules Chair, League Historian", rings:1, tag:"Champ", fan:"NE" },
      { id:"corey",   name:"Corey Shamley",   short:"Corey",   role:"Debt Collector, Gambling Chair", rings:1, tag:"Sacko", books:true, fan:"IND" },
      { id:"roberts", name:"Zachery Roberts", short:"Roberts", role:"Is This Man Alive Chair", rings:3, fan:"NO" },
      { id:"nick",    name:"Nick Brabant",    short:"Nick",    role:"Sacko Punishment, On The Clock", rings:1, fan:"SEA" },
      { id:"milan",   name:"Milan Maggio",    short:"Milfdog", role:"Arts and Crafts Chair", rings:0, fan:"TB" },
      { id:"eric",    name:"Eric Wendell",    short:"Eric",    role:"Backup Sacko Chair", rings:0, tag:"Rule 7", fan:"CHI" },
      { id:"jon",     name:"Jonathan Corning", short:"Jon",    role:"The Rookie", rings:0, tag:"Rookie", fan:"NE" }
    ]
  },
  omw: {
    id:"omw", name:"OMWC", full:"Old Man Working C****", est:"", fee:0,
    admins:["nick","kyle-m"],
    adminHint:"Nick or Kyle M can clear it for you.",
    theme:{ page:"#F3EEE4", sand:"#EDE5D6", panel:"#FFFFFF", ink:"#3A1620", blue:"#782F40",
            gold:"#CEB888", muted:"#7A6B66", line:"#E0D6C6", win:"#2E6B54", loss:"#A8342C",
            crest:"#782F40" },
    features:{ trophy:false, ledger:false, lore:false, sass:false, wendell:false, blast:"photo", badge:"shield" },
    copy:{ empty:"Nobody has picked yet. Send the link around.",
           missing:"Still out",
           missingSub:" not picked yet.",
           tie:"Tie at the top. Sort it out amongst yourselves." },
    members:[
      { id:"kyle-m", name:"Kyle Moran",     short:"Kyle M", fan:"DET" },
      { id:"kyle-b", name:"Kyle Blaschuk",  short:"Kyle B", fan:"MIA" },
      { id:"kevin",  name:"Kevin",          short:"Kevin",  fan:"JAX" },
      { id:"nick",   name:"Nick Brabant",   short:"Nick",   fan:"TB" },
      { id:"seth",   name:"Seth",           short:"Seth",   fan:"ATL" },
      { id:"evan",   name:"Evan",           short:"Evan",   fan:"TB" },
      { id:"maddux", name:"Maddux",         short:"Maddux", fan:"TB" },
      { id:"willem", name:"Willem Durkson", short:"Willem", fan:"GB" }
    ]
  }
};
const OMW_IMG = "data:image/jpeg;base64,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";
const SWITCHERS = ["nick"];            // member ids allowed to change leagues
const canSwitch = () => S.me && SWITCHERS.indexOf(S.me) > -1;
const LG = () => LEAGUES[S.lg] || LEAGUES.chandni;
const CP = k => (LG().copy || {})[k] || "";
function shield(size) {
  size = size || 40;
  return '<svg width="'+size+'" height="'+(size*1.18)+'" viewBox="0 0 100 120" style="display:block;flex-shrink:0">'+
    '<path d="M50 3 C32 12 16 14 7 14 C7 58 16 95 50 117 C84 95 93 58 93 14 C84 14 68 12 50 3 Z" '+
      'fill="#782F40" stroke="#CEB888" stroke-width="5" stroke-linejoin="round"/>'+
    '<path d="M50 12 C35 19 22 21 14 21 C14 57 22 88 50 107 C78 88 86 57 86 21 C78 21 65 19 50 12 Z" '+
      'fill="none" stroke="rgba(255,255,255,.22)" stroke-width="2"/>'+
    '<g fill="#CEB888"><circle cx="34" cy="33" r="3.4"/><circle cx="50" cy="30" r="3.4"/><circle cx="66" cy="33" r="3.4"/></g>'+
    '<text x="50" y="66" text-anchor="middle" fill="#FFFFFF" font-size="27" font-weight="900" font-style="italic" '+
      'letter-spacing="-1.5" font-family="-apple-system,Helvetica,sans-serif">OMWC</text>'+
    '<ellipse cx="50" cy="86" rx="15" ry="9" fill="none" stroke="#CEB888" stroke-width="3"/>'+
    '<path d="M42 86 h16 M50 81 v10" stroke="#CEB888" stroke-width="2.4" stroke-linecap="round"/></svg>';
}
const MEMBERS_OF = () => LG().members;
const FEAT = () => LG().features;
const M = id => ROSTER().find(m => m.id === id);
const ADMINS_OF = () => LG().admins;
const ADMIN_HINT_OF = () => LG().adminHint;
const FEE_OF = () => LG().fee;

const HISTORY = [
  {y:2025,champ:"cam",over:"eric",score:"326.2 - 314.0",sacko:"corey"},
  {y:2024,champ:"holden",over:"brodsky",score:"361 - 294",sacko:"eric"},
  {y:2023,champ:"holden",over:"roberts",score:"307 - 255",sacko:"corey"},
  {y:2022,champ:"brodsky",over:"cam",score:"264 - 244",sacko:"nick"},
  {y:2021,champ:"holden",over:"roberts",score:"313 - 313",sacko:"brodsky"},
  {y:2020,champ:"nick",over:"eric",score:"337 - 291",sacko:"milan"},
  {y:2019,champ:"brodsky",over:"corey",score:"355 - 291",sacko:"milan"},
  {y:2018,champ:"corey",over:"milan",score:"308 - 306",sacko:"nick"},
  {y:2017,champ:"brodsky",over:"cam",score:"232 - 208",sacko:"eric"},
  {y:2016,champ:"holden",over:"nick",score:"304 - 224",sacko:"brodsky"},
  {y:2015,champ:"roberts",overName:"Cameron Carlson",sacko:"corey"},
  {y:2014,champ:"roberts",over:"holden",sacko:"corey"},
  {y:2013,champ:"roberts",overName:"Shane Beyer",sacko:"brodsky"},
  {y:2012,champ:"holden",overName:"Carlee Wendell"},
  {y:2011,champ:"brodsky",overName:"Jacob Hudson"}
];

const LORE = [
  "Holden has five Chandni titles. The other eight of you have five combined.",
  "The 2021 final ended 313 to 313. Holden over Roberts. A tie decided the whole thing.",
  "Corey holds both ends of it: 229 points in a week in 2020, and 52 in a week in 2016.",
  "Roberts three-peated from 2013 to 2015 and has not been back to a final since 2023.",
  "Cam put up 397 in the 2025 semifinal, the largest playoff number ever recorded here.",
  "Cam also owns the smallest, 208 in the 2017 championship. Same man, opposite ends.",
  "Milan scored 1,324 points across all of 2017. Cam scored 2,155 in 2019.",
  "In 2016 Holden beat Corey by 113 points, 165 to 52. Still the widest margin on record.",
  "The Taysom Hill ruling of 2020 cost Holden a week of pick'em and the matchup. Rule 1 stands.",
  "In 2021 Nick benched his starters to keep Cam out of the playoffs, then lost in round one.",
  "The Damar Hamlin game was replayed as a one week final with scores reset. Nobody was satisfied.",
  "Best pick'em rate all time is Brodsky at 57 percent, 154 and 116 with 2 pushes.",
  "The pick'em ceiling is 13 correct. Three men have touched it. None of them twice.",
  "Eric has never won a Chandni. He has a rule named after him instead."
];

const SASS = {
  empty:["Nothing on the card. Corey is not chasing you yet, but he will.",
         "Blank card. Sixteen taps stands between you and the pot.",
         "You opened the app and picked nothing. Bold strategy."],
  partial:["Half a card is a whole fee. Finish it.","You bailed halfway. The board notices.",
           "Unfinished. Rule 7 does not care how tired you were."],
  ready:["Full card in. Now go be wrong quietly.",
         "Sixteen locked. Thirteen correct is the record, in case you were curious.",
         "Card complete. Brodsky's career mark is 57 percent. Beat it."],
  awful:["Somewhere Nick's 2 point week in 2020 is feeling better about itself.",
         "This is Sacko form and it is only September.",
         "Corey will still take your ten dollars. He does not grade on effort."],
  poor:["Below the water line. The Gulf is warmer than this card.",
        "Chalk exists for a reason and you ignored all of it.",
        "You are paying for the privilege of being wrong."],
  fine:["Perfectly average. Nobody writes a fun fact about average.",
        "Respectable. Forgettable. Both.",
        "You cleared half. Brodsky's career rate is 57 percent, so keep climbing."],
  good:["Real card. That is contender territory.","Two more and you are knocking on the record.",
        "Keep this up and the Stats Chair has to mention you."],
  elite:["Thirteen is the all time high. You are in that conversation.",
         "This is how Holden's 2020 started. Do not get comfortable.",
         "Print it. The League Historian is watching."],
  dead:["Survivor over. Your team let you down and everyone saw it.",
        "Eliminated. Burn that logo out of your profile."]
};
const seeded = (arr, seed) => { let h=0; for (const c of String(seed)) h=(h*31+c.charCodeAt(0))>>>0; return arr[h%arr.length]; };
function sassFor(m, w, l, made, total, alive) {
  if (alive === false) return seeded(SASS.dead, m.id);
  if (w + l > 0) { const t = w<=4?"awful":w<=7?"poor":w<=9?"fine":w<=11?"good":"elite"; return seeded(SASS[t], m.id + w); }
  if (made === 0) return seeded(SASS.empty, m.id);
  if (made < total) return seeded(SASS.partial, m.id + made);
  return seeded(SASS.ready, m.id);
}

const COLORS = {ARI:"#97233F",ATL:"#A71930",BAL:"#241773",BUF:"#00338D",CAR:"#0085CA",CHI:"#0B162A",
CIN:"#FB4F14",CLE:"#5A2D14",DAL:"#041E42",DEN:"#FB4F14",DET:"#0076B6",GB:"#203731",HOU:"#03202F",
IND:"#002C5F",JAX:"#006778",KC:"#E31837",LV:"#111111",LAC:"#0080C6",LAR:"#003594",MIA:"#008E97",
MIN:"#4F2683",NE:"#002244",NO:"#8C7434",NYG:"#0B2265",NYJ:"#125740",PHI:"#004C54",PIT:"#B58500",
SF:"#AA0000",SEA:"#69BE28",TB:"#D50A0A",TEN:"#2C6FA8",WSH:"#5A1414"};
const NAMES = {ARI:"Cardinals",ATL:"Falcons",BAL:"Ravens",BUF:"Bills",CAR:"Panthers",CHI:"Bears",
CIN:"Bengals",CLE:"Browns",DAL:"Cowboys",DEN:"Broncos",DET:"Lions",GB:"Packers",HOU:"Texans",
IND:"Colts",JAX:"Jaguars",KC:"Chiefs",LV:"Raiders",LAC:"Chargers",LAR:"Rams",MIA:"Dolphins",
MIN:"Vikings",NE:"Patriots",NO:"Saints",NYG:"Giants",NYJ:"Jets",PHI:"Eagles",PIT:"Steelers",
SF:"49ers",SEA:"Seahawks",TB:"Buccaneers",TEN:"Titans",WSH:"Commanders"};
const nameOf = t => NAMES[t] || t;
const col = t => COLORS[t] || "#555";
const shade = (hex, amt) => {
  const n = parseInt(String(hex).slice(1),16), cl = v => Math.max(0,Math.min(255,v));
  return "#" + ((1<<24) + (cl((n>>16)+amt)<<16) + (cl(((n>>8)&255)+amt)<<8) + cl((n&255)+amt)).toString(16).slice(1);
};
const logo = t => "https://a.espncdn.com/i/teamlogos/nfl/500/" + String(t||"").toLowerCase() + ".png";
const CHANDNI_IMG = "data:image/jpeg;base64,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";

/* ============ STATE ============ */
const S = { lg:localStorage.getItem("lg")||null, me:null, tab:"picks", view:"standings", state:{},
            games:[], weekLabel:"", weekKey:"w0", weekNum:1, ready:false, ok:true, why:"", auth:null, peek:false, sched:null, schedFor:"", schedWeeks:[], copiedLg:false, justPicked:null, paint:"", statsWho:"", join:null, lastInvite:"", copied:"",
            toast:"", sheet:false };
const $ = h => { document.getElementById("app").innerHTML = h; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

async function loadGames() {
  const r = await fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard");
  const d = await r.json();
  S.weekNum = d.week ? d.week.number : 1;
  S.weekLabel = "Week " + S.weekNum;
  S.weekKey = "w" + S.weekNum + "-" + ((d.season && d.season.year) || new Date().getFullYear());
  const games = (d.events||[]).map(function(ev){
    const c = ev.competitions[0];
    const home = c.competitors.find(x => x.homeAway === "home");
    const away = c.competitors.find(x => x.homeAway === "away");
    const o = (c.odds && c.odds[0]) || null;
    let fav = null, line = null;
    if (o && o.details && o.details.indexOf(" -") > -1) {
      const b = o.details.split(" -"); fav = b[0].trim(); line = parseFloat(b[1]);
    }
    return { id:ev.id, kick:ev.date, state:c.status.type.state, done:!!c.status.type.completed,
      home:home.team.abbreviation, away:away.team.abbreviation,
      homeName:home.team.shortDisplayName, awayName:away.team.shortDisplayName,
      hs:home.score!=null?Number(home.score):null, as:away.score!=null?Number(away.score):null,
      fav:fav, line:line };
  }).filter(g => g.fav && g.line != null).sort((a,b) => new Date(a.kick) - new Date(b.kick));

  const sunday = games.find(g => new Date(g.kick).getDay() === 0);
  const cutoff = sunday ? new Date(sunday.kick).getTime() : Infinity;
  games.forEach(g => { g.wendell = new Date(g.kick).getTime() < cutoff; });
  S.games = games;
}

async function loadSchedule() {
  if (S.sched && S.schedFor === S.weekKey) return;
  const year = (S.weekKey.split("-")[1]) || new Date().getFullYear();
  const out = {};
  const weeks = [];
  for (let w = S.weekNum + 1; w <= 18; w++) weeks.push(w);
  const grab = async function(w){
    try {
      const r = await fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?seasontype=2&week=" + w + "&dates=" + year);
      const d = await r.json();
      (d.events||[]).forEach(function(ev){
        const c = ev.competitions[0];
        const home = c.competitors.find(function(x){ return x.homeAway === "home"; });
        const away = c.competitors.find(function(x){ return x.homeAway === "away"; });
        if (!home || !away) return;
        const H = home.team.abbreviation, A = away.team.abbreviation;
        (out[H] = out[H] || {})[w] = A;
        (out[A] = out[A] || {})[w] = "@" + H;
      });
    } catch (e) { /* week not posted yet */ }
  };
  for (let i = 0; i < weeks.length; i += 6) {
    await Promise.all(weeks.slice(i, i + 6).map(grab));
    S.sched = out; S.schedWeeks = weeks; render();   // fill in as they land
  }
  S.sched = out; S.schedFor = S.weekKey; S.schedWeeks = weeks;
  render();
}
function weekChips(t) {
  if (!S.sched) return '<span class="wk dim">loading…</span>';
  return (S.schedWeeks || []).map(function(n){
    const o = (S.sched[t]||{})[n];
    if (!o) return '<span class="wk dim"><i>W'+n+'</i>BYE</span>';
    const away = o.charAt(0) === "@";
    const opp = away ? o.slice(1) : o;
    return '<span class="wk"><i>W'+n+'</i>'+(away?"@":"")+opp+'</span>';
  }).join("");
}

async function loadState() {
  try {
    const r = await fetch("/api/state");
    if (!r.ok) { S.ok=false; S.why="server said "+r.status; return; }
    const d = await r.json();
    if (!d.ok) { S.ok=false; S.why=d.reason||"unknown"; return; }
    S.ok=true; S.why=""; S.state=d.state||{};
  } catch(e) { S.ok=false; S.why=String(e.message||e); }
}
function applyLocal(path, value) {
  const parts = String(path).split(".");
  let node = S.state;
  for (let i = 0; i < parts.length - 1; i++) {
    if (typeof node[parts[i]] !== "object" || node[parts[i]] === null) node[parts[i]] = {};
    node = node[parts[i]];
  }
  const key = parts[parts.length - 1], had = node[key];
  if (value === null) delete node[key]; else node[key] = value;
  return function revert(){ if (had === undefined) delete node[key]; else node[key] = had; };
}
async function put(path, value) {
  const revert = applyLocal(path, value);   // show it immediately
  try {
    const r = await fetch("/api/state", { method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ path:path, value:value }) });
    const d = await r.json();
    if (!d.ok) { revert(); S.ok=false; S.why=d.reason||"unknown"; say("Not saved. " + S.why); render(); return false; }
    S.state = d.state; S.ok = true; S.why = ""; return true;
  } catch(e) {
    revert(); S.ok=false; S.why=String(e.message||e); say("Not saved. " + S.why); render(); return false;
  }
}

const LGS = () => ((S.state.lg||{})[S.lg]||{});
const P = path => "lg." + S.lg + "." + path;
const picksOf = w => ((LGS().picks||{})[S.weekKey]||{})[w] || {};
const survOf  = w => ((LGS().surv ||{})[S.weekKey]||{})[w] || null;
const lockOf  = w => !!((LGS().lock ||{})[S.weekKey]||{})[w];
const slockOf = w => !!((LGS().slock||{})[S.weekKey]||{})[w];
const paidOf  = w => !!((LGS().paid ||{})[S.weekKey]||{})[w];
const mlockOf = w => ((LGS().mlock||{})[S.weekKey]||{})[w] || null;
const inPool  = () => ROSTER().filter(m => Object.keys(picksOf(m.id)).length || survOf(m.id));
const kicked  = g => Date.now() >= new Date(g.kick).getTime();

function graded(g) {
  if (!g.done || g.hs == null) return null;
  const fh = g.fav === g.home;
  const margin = (fh?g.hs:g.as) - (fh?g.as:g.hs);
  const ats = margin > g.line ? g.fav : margin < g.line ? (fh?g.away:g.home) : "PUSH";
  const su = g.hs > g.as ? g.home : g.as > g.hs ? g.away : "PUSH";
  return { ats:ats, su:su };
}
function record(who) {
  let w=0,l=0,p=0,pts=0; const pk = picksOf(who); const ml = mlockOf(who);
  S.games.forEach(function(g){ const r = graded(g); if (!r || !pk[g.id]) return;
    if (r.ats === "PUSH") { p++; return; }
    if (r.ats === pk[g.id]) { w++; pts += (g.id === ml ? 2 : 1); } else { l++; }
  });
  return { w:w, l:l, p:p, pts:pts };
}
function aliveState(who) {
  const sp = survOf(who); if (!sp) return null;
  const g = S.games.find(x => x.home === sp || x.away === sp); if (!g) return null;
  const r = graded(g); if (!r) return null;
  return r.su === sp || r.su === "PUSH";
}
const kickText = iso => { const d = new Date(iso);
  return d.toLocaleDateString([], {weekday:"short"}) + " " + d.toLocaleTimeString([], {hour:"numeric",minute:"2-digit"}); };

function blast() {
  const el = document.getElementById("blast");
  if (FEAT().blast === "chandni") {
    el.innerHTML = '<div class="fl"></div><div class="vl"></div><div class="bl">' +
      '<div class="mark t1">Chandni</div><div class="mark t2">Blast</div>' +
      '<div class="frame"><img src="' + CHANDNI_IMG + '" alt="" /></div></div>';
  } else {
    el.innerHTML = '<div class="fl"></div><div class="vl"></div>' +
      '<div class="bl"><div class="frame"><img src="' + OMW_IMG + '" alt="" /></div></div>';
  }
  el.classList.add("on");
  setTimeout(function(){ el.classList.remove("on"); el.innerHTML = ""; }, 1550);
}
function say(t) { S.toast = t; render(); setTimeout(function(){ S.toast=""; render(); }, 2000); }

/* ============ VIEWS ============ */
function crest(m, size) {
  size = size || 34;
  if (!m.fan) {
    const t = m.tint || "#0F3B44";
    return '<span class="crest" style="width:'+size+'px;height:'+size+'px;border-radius:'+(size/2)+
      'px;background:'+t+';color:#fff;font-size:'+(size*0.34)+'px;font-weight:800">'+
      esc(m.short.replace(/[^A-Za-z]/g,"").slice(0,2).toUpperCase())+'</span>';
  }
  const c = col(m.fan);
  return '<span class="crest" style="width:'+size+'px;height:'+size+'px;border-radius:'+(size/2)+'px;box-shadow:inset 0 0 0 2px '+c+'">'+
    '<img src="'+logo(m.fan)+'" style="width:'+(size*0.64)+'px;height:'+(size*0.64)+'px;object-fit:contain" onerror="this.style.visibility=\'hidden\'" />'+
    '<span class="badge" style="background:'+c+'">'+esc(m.short.replace(/[^A-Za-z]/g,"").slice(0,2).toUpperCase())+'</span></span>';
}
const tabBtn = (k,l) => '<button class="tab '+(S.tab===k?"on":"")+'" onclick="go(\''+k+'\')">'+l+'</button>';
const stat = (l,v) => '<div class="card" style="flex:1;padding:12px 13px;margin:0"><div style="font-size:19px;font-weight:800">'+esc(v)+'</div><div style="font-size:11.5px;color:var(--muted)">'+l+'</div></div>';

function applyTheme() {
  const t = LG().theme, r = document.documentElement;
  Object.keys(t).forEach(function(k){ r.style.setProperty("--"+k, t[k]); });
}
function leagueGate() {
  return '<main style="padding:56px 20px">'+
    '<div style="font-size:10px;letter-spacing:3px;font-weight:800;color:var(--muted)">CHOOSE YOUR LEAGUE</div>'+
    Object.keys(LEAGUES).map(function(k){
      const L = LEAGUES[k];
      return '<button onclick="setLeague(\''+k+'\')" style="width:100%;margin-top:14px;padding:22px 18px;'+
        'border:1px solid '+L.theme.line+';border-radius:14px;background:'+L.theme.panel+';text-align:left;'+
        'display:flex;align-items:center;gap:14px">'+
        '<span style="width:44px;height:44px;border-radius:22px;flex-shrink:0;background:'+L.theme.crest+';'+
        'color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;'+
        'font-style:italic">'+esc(L.name.slice(0,4).toUpperCase())+'</span>'+
        '<span><span style="display:block;font-size:17px;font-weight:800;color:'+L.theme.ink+'">'+esc(L.full)+'</span>'+
        '<span style="display:block;font-size:11.5px;color:'+L.theme.muted+';margin-top:3px">'+
        L.members.length+' players'+(L.est?" · "+L.est:"")+'</span></span></button>';
    }).join("")+
    '<div class="note">One link, both pools. Your pick stays on this device and you can switch any time.</div></main>';
}
window.setLeague = function(k){
  S.lg = k; localStorage.setItem("lg", k);
  S.me = localStorage.getItem("me:"+k) || null;
  S.tab = "picks"; S.view = "standings"; applyTheme(); render();
};
window.backToLeagues = function(){
  if (localStorage.getItem("lgLock")) return;
  S.lg = null; S.me = null; localStorage.removeItem("lg"); render();
};
window.switchLeague = function(){
  if (!canSwitch()) return;
  S.lg = null; S.me = null; S.sheet = false;
  localStorage.removeItem("lg"); localStorage.removeItem("lgLock");
  render();
};

function sizeRings(animateId) {
  document.querySelectorAll(".seg.on").forEach(function(sg){
    const svg = sg.querySelector(".pring"); if (!svg) return;
    const rc = svg.querySelector("rect");
    const w = sg.clientWidth, h = sg.clientHeight;
    svg.setAttribute("viewBox","0 0 "+w+" "+h);
    rc.setAttribute("x",1); rc.setAttribute("y",1);
    rc.setAttribute("width",w-2); rc.setAttribute("height",h-2);
    const len = 2*((w-2)+(h-2));
    if (sg.id === animateId) {
      rc.style.transition="none"; rc.style.strokeDasharray=len; rc.style.strokeDashoffset=len;
      requestAnimationFrame(function(){
        rc.style.transition="stroke-dashoffset 420ms cubic-bezier(.3,.7,.3,1)";
        rc.style.strokeDashoffset=0;
      });
    } else { rc.style.strokeDasharray="none"; rc.style.strokeDashoffset=0; }
  });
}
function celebrate(gid, team, prefix) {
  const target = document.getElementById((prefix||"seg-")+gid+"-"+team);
  if (!target) return;
  const gl = document.createElement("span");
  gl.className = "glint"; target.appendChild(gl);
  setTimeout(function(){ gl.remove(); }, 560);
  const st = document.createElement("span");
  st.className = "stamp";
  st.innerHTML = '<img src="'+logo(team)+'" alt="" onerror="this.style.display=\'none\'" />';
  target.appendChild(st);
  setTimeout(function(){ st.remove(); }, 920);
}

function render() {
  if (!S.lg && localStorage.getItem("lgLock")) S.lg = localStorage.getItem("lgLock");
  if (!S.lg) return $(leagueGate());
  applyTheme();
  if (!S.ready) return $('<main><div class="note">Pulling this week from ESPN...</div></main>');
  if (S.join) return $(joinView());
  if (S.auth) return $(authView());
  if (!S.me) { S.me = localStorage.getItem("me:"+S.lg) || null; }
  if (!S.me) return gate();
  const me = M(S.me);
  if (!me) { localStorage.removeItem("me"); S.me = null; return gate(); }

  const head =
   '<header><div>'+
     (canSwitch()
       ? '<button onclick="switchLeague()" style="background:none;border:none;padding:0;text-align:left">'+
         '<div class="mark" style="font-size:26px;text-shadow:1.4px 1.4px 0 var(--gold)">'+esc(LG().name)+'</div>'+
         '<div class="sub">'+(LG().est?esc(LG().est)+" · ":"")+esc(S.weekLabel)+' · tap to switch league</div></button>'
       : '<div style="display:flex;align-items:center;gap:9px">'+(FEAT().badge==="shield"?shield(28):"")+
         '<div><div class="mark" style="font-size:26px;text-shadow:1.4px 1.4px 0 var(--gold)">'+esc(LG().name)+'</div>'+
         '<div class="sub">'+(LG().est?esc(LG().est)+" · ":"")+esc(S.weekLabel)+'</div></div></div>')+
   '</div>'+
   '<button style="background:none;border:none;display:flex;align-items:center;gap:8px" onclick="openSheet()">'+
     '<span style="font-size:13px;font-weight:700">'+esc(me.short)+'</span>'+crest(me,30)+'</button></header>'+
   '<nav><div class="tabs">'+tabBtn("picks","Spreads")+tabBtn("surv","Survivor")+tabBtn("board","The Board")+'</div></nav>';

  const warn = S.ok ? "" :
    '<div style="margin:10px 12px 0"><div class="warn"><b>Nothing is saving.</b><br>'+esc(S.why)+
    '<br>Connect the database in Vercel, then redeploy.</div></div>';
  const body = warn + (S.tab==="picks" ? picksView(me) : S.tab==="surv" ? survView(me) : boardView(me));
  S.paint = head + body + (S.toast ? '<div class="toast">'+esc(S.toast)+'</div>' : "") + (S.sheet ? sheet(me) : "");
  $(S.paint);
  if (S.tab === "picks" || S.tab === "surv") sizeRings(S.justPicked);
  S.justPicked = null;
}

function gate() {
  $('<main style="padding:44px 18px">'+
    (FEAT().badge === "shield"
      ? '<div style="display:flex;justify-content:center;margin-bottom:6px">'+shield(78)+'</div>'
      : '<div class="mark" style="font-size:46px;text-shadow:2.6px 2.6px 0 var(--gold)">'+esc(LG().name)+'</div>')+
    '<div style="font-size:9.5px;letter-spacing:2.6px;font-weight:800;color:var(--muted);margin-top:10px">SELECT YOUR NAME</div>'+
    (S.ok ? "" : '<div class="warn"><b>Storage is not connected.</b><br>'+esc(S.why)+'</div>')+
    '<div class="card" style="margin-top:18px">'+
      ROSTER().map(function(m){
        return '<button class="row" style="width:100%;background:none;border:none;text-align:left" onclick="pickMe(\''+m.id+'\')">'+
        crest(m,38)+'<div style="flex:1;min-width:0"><div style="font-weight:700;font-size:15.5px">'+esc(m.name)+'</div>'+
        '<div style="font-size:12px;color:var(--muted)"><b style="color:'+col(m.fan)+'">'+esc(m.fan||"")+'</b>'+(m.role?" · "+esc(m.role):"")+'</div></div>'+
        '<div style="text-align:right">'+(m.tag ? '<div style="font-size:10.5px;font-weight:800;color:'+(m.tag==="Sacko"?"var(--loss)":"var(--gold)")+'">'+esc(m.tag)+'</div>' : "")+
        (m.rings ? '<div style="font-size:12px;color:var(--muted)">'+m.rings+' rings</div>' : "")+'</div></button>';
      }).join("")+
    '</div>'+
    (localStorage.getItem("lgLock") ? "" :
      '<button onclick="backToLeagues()" style="width:100%;margin-top:12px;background:none;border:none;'+
      'color:var(--muted);font-size:12.5px;padding:8px">Wrong league? Go back</button>')+
    '<div class="note">Everyone opens this same link. Picks land on one shared board and stay hidden until kickoff. Unit shaming is still not tolerated.</div>'+
  '</main>');
}

function picksView(me) {
  const mine = picksOf(me.id);
  const ml = mlockOf(me.id);
  const lockedIn = lockOf(me.id);
  const made = S.games.filter(function(g){ return mine[g.id]; }).length;
  const hooked = FEAT().wendell && S.games.some(function(g){ return g.wendell && mine[g.id]; });

  const rows = S.games.map(function(g){
    const shut = kicked(g) || lockedIn, r = graded(g);
    function side(t, tag) {
      const on = mine[g.id] === t, off = mine[g.id] && !on, fav = g.fav === t, good = r && r.ats === t;
      const vars = "--team:"+col(t)+";--teamHi:"+shade(col(t),32)+";--teamLo:"+shade(col(t),-28)+";--teamMid:"+shade(col(t),-6);
      return '<button class="seg '+(on?"on":"")+' '+(off?"off":"")+'" id="seg-'+g.id+'-'+t+'" style="'+vars+'" '+
        (shut?"disabled":"")+' onclick="tap(\''+g.id+'\',\''+t+'\')">'+
        '<span class="pface"></span><span class="psheen"></span><span class="phair"></span>'+
        (on ? '<svg class="pring"><rect></rect></svg>' : '')+
        '<span class="pinner">'+
          '<img class="plogo" src="'+logo(t)+'" onerror="this.style.visibility=\'hidden\'" />'+
          '<span style="text-align:left"><span class="pabbr" style="display:block">'+t+'</span>'+
          '<span class="ptag" style="display:block">'+tag+'</span></span>'+
          '<span class="pval">'+(fav?"-"+g.line:"+"+g.line)+(r?(r.ats==="PUSH"?" P":good?" ✓":""):"")+'</span>'+
        '</span></button>';
    }
    const isLock = ml === g.id, canLock = !shut && !!mine[g.id];
    const lockBtn = isLock
      ? '<button class="mlock on" onclick="setLock(\''+g.id+'\')">★ MORTAL LOCK · 2 PTS</button>'
      : (canLock ? '<button class="mlock" onclick="setLock(\''+g.id+'\')">☆ MORTAL LOCK</button>' : '');
    return '<div class="plates"><div class="pkick">'+kickText(g.kick).toUpperCase()+
      (g.done?" · "+g.as+"-"+g.hs+" FINAL":g.state!=="pre"?" · LIVE":"")+'</div>'+
      '<div class="bug" id="bug-'+g.id+'">'+side(g.away,"AWAY")+
      '<div class="pmid"><b>'+g.line+'</b><span>SPREAD</span></div>'+
      side(g.home,"HOME")+'</div>'+
      (lockBtn?'<div style="padding:5px 2px 0">'+lockBtn+'</div>':"")+'</div>';
  }).join("");

  return '<main>'+
    (S.ok ? "" : '<div class="warn"><b>Picks are not saving.</b><br>'+esc(S.why)+'</div>')+
    (!FEAT().wendell ? "" : hooked
      ? '<div class="flag"><b>The Wendell Rule is live</b><br>You touched an opener, so you are in for $'+FEE_OF()+' whether or not you finish the card. Pay Corey.</div>'
      : '<div class="card" style="padding:12px 14px"><b style="font-size:13.5px">No pick, no fee</b><br><span style="font-size:12.5px;color:var(--muted)">Touch either opener and Rule 7 puts you in for the full $'+FEE_OF()+', finished card or not.</span></div>')+
    (rows || '<div class="note">ESPN has not posted lines for this week yet. They usually land a few days out.</div>')+
    '<div class="note">One mortal lock per week. Right and it counts double. Wrong and it counts nothing.</div>'+
    '<div class="bar"><div class="inner">'+
      (lockedIn
        ? '<div class="locked"><span>⚡ Locked in, '+made+' of '+S.games.length+'</span><button class="ghost" onclick="unlock()">Edit</button></div>'
        : '<button class="btn '+(made===S.games.length?"go":"")+'" '+(made?"":"disabled")+' onclick="lockIn()">'+
          (made===S.games.length?"⚡ Lock in your picks":"⚡ Lock in "+made+" of "+S.games.length)+'</button>')+
    '</div></div></main>';
}

function survView(me) {
  const mine = survOf(me.id), lockedIn = slockOf(me.id);
  const used = [];
  Object.keys(LGS().surv||{}).forEach(function(wk){
    const by = LGS().surv[wk]; if (wk !== S.weekKey && by[me.id]) used.push(by[me.id]); });
  const alive = aliveState(me.id);

  // one row per team, sorted by how big a favorite they are
  const teams = [];
  S.games.forEach(function(g){
    teams.push({ t:g.away, g:g, opp:"AT " + g.home, fav:g.fav===g.away });
    teams.push({ t:g.home, g:g, opp:"VS " + g.away, fav:g.fav===g.home });
  });
  teams.sort(function(a,b){
    const av = a.fav ? -a.g.line : a.g.line, bv = b.fav ? -b.g.line : b.g.line;
    return av - bv;
  });

  const rows = teams.map(function(x){
    const t = x.t, g = x.g;
    const on = mine === t;
    const isUsed = used.indexOf(t) > -1;
    const shut = isUsed || kicked(g) || (lockedIn && !on);
    const vars = "--team:"+col(t)+";--teamHi:"+shade(col(t),32)+";--teamLo:"+shade(col(t),-28)+";--teamMid:"+shade(col(t),-6);
    return '<div class="plates">'+
      '<div class="bug"><button class="seg '+(on?"on":"")+' '+(mine&&!on?"off":"")+'" id="sv-'+g.id+'-'+t+'" '+
      'style="'+vars+'" '+(shut?"disabled":"")+' onclick="pickSurv(\''+t+'\')">'+
        '<span class="pface"></span><span class="psheen"></span><span class="phair"></span>'+
        (on ? '<svg class="pring"><rect></rect></svg>' : '')+
        '<span class="pinner">'+
          '<img class="plogo" src="'+logo(t)+'" onerror="this.style.visibility=\'hidden\'" '+(isUsed?'style="opacity:.3"':'')+' />'+
          '<span style="text-align:left"><span class="pabbr" style="display:block'+(isUsed?";text-decoration:line-through":"")+'">'+nameOf(t)+'</span>'+
          '<span class="ptag" style="display:block">'+(isUsed?"ALREADY USED":x.opp)+'</span></span>'+
          '<span class="pval">'+(x.fav?"-"+g.line:"+"+g.line)+'</span>'+
        '</span></button></div>'+
      (S.peek ? '<div class="peek">'+weekChips(t)+'</div>' : "")+
    '</div>';
  }).join("");

  return '<main>'+
    '<div class="card" style="padding:14px;display:flex;align-items:center;gap:12px">'+
      (mine ? '<img src="'+logo(mine)+'" width="38" height="38" style="object-fit:contain" onerror="this.style.visibility=\'hidden\'" />' : "")+
      '<div><div style="font-weight:700">'+(mine?esc(nameOf(mine))+" to win outright":"One team. Straight up. No line.")+'</div>'+
      '<div style="font-size:12.5px;color:'+(alive===false?"var(--loss)":"var(--muted)")+';margin-top:3px">'+
      (alive===false?"Eliminated":alive===true?"Still breathing":"Burn a team and it is gone for the season.")+'</div></div></div>'+
    '<button onclick="togglePeek()" style="width:100%;margin:2px 0 10px;padding:11px;border-radius:12px;'+
      'border:1px dashed var(--line);background:none;color:var(--muted);font-size:11px;font-weight:800;letter-spacing:1.6px">'+
      (S.peek ? (S.sched ? "HIDE UPCOMING GAMES" : "LOADING...") : "SHOW UPCOMING GAMES")+'</button>'+
    (rows || '<div class="note">No games with lines posted yet.</div>')+
    '<div class="note">Sorted by the biggest favorite. Survivor grades straight up, the spread is only there to show you how safe a team is.</div>'+
    '<div class="bar"><div class="inner">'+
      (lockedIn
        ? '<div class="locked"><span>⚡ '+esc(nameOf(mine))+' locked</span><button class="ghost" onclick="unlockSurv()">Edit</button></div>'
        : '<button class="btn '+(mine?"go":"")+'" '+(mine?"":"disabled")+' onclick="lockSurv()">'+
          (mine?"⚡ Lock in "+nameOf(mine):"Pick a team first")+'</button>')+
    '</div></div></main>';
}

function boardView(me) {
  const base = [["standings","Board"],["reveal","Reveal"],["stats","Stats"]];
  if (FEAT().trophy) base.push(["history","Trophy"]);
  if (FEAT().ledger) base.push(["ledger","Ledger"]);
  const pills = base
    .map(function(x){ return '<button class="pill '+(S.view===x[0]?"on":"")+'" onclick="setView(\''+x[0]+'\')">'+x[1]+'</button>'; }).join("");
  let body = "";
  if (!body) body = "";
  if (S.view === "standings") body = standings(me);
  if (S.view === "reveal") body = reveal(me);
  if (S.view === "stats") body = statsView(me);
  if (S.view === "history" && FEAT().trophy) body = trophy();
  if (S.view === "ledger" && FEAT().ledger) body = ledger(me);
  return '<main><div style="display:flex;gap:6px;margin-bottom:12px">'+pills+'</div>'+body+'</main>';
}

function standings(me) {
  const anyGraded = S.games.some(graded);
  const rows = inPool().map(function(m){
    return { m:m, r:record(m.id), sp:survOf(m.id), al:aliveState(m.id),
             made:Object.keys(picksOf(m.id)).length, lock:lockOf(m.id) };
  }).sort(function(a,b){ return b.r.w-a.r.w || a.r.l-b.r.l || b.made-a.made; });

  const missing = ROSTER().filter(function(m){ return !rows.some(function(r){ return r.m.id===m.id; }); });
  const top = rows.length ? rows[0].r.w : 0;
  const tied = rows.filter(function(r){ return r.r.w===top && top>0; }).length > 1;

  const list = rows.length ? rows.map(function(x,i){
    return '<div class="row"><span style="width:16px;font-size:13px;color:var(--muted);font-weight:800">'+(i+1)+'</span>'+
    crest(x.m,32)+'<div style="flex:1;min-width:0"><div style="font-weight:700">'+esc(x.m.short)+'</div>'+
    '<div style="font-size:11.5px;color:var(--muted)">'+x.made+'/'+S.games.length+' in'+
      (x.lock&&!anyGraded?" · locked":"")+
      (x.sp ? (x.m.id===me.id ? " · "+x.sp : " · survivor in") : "")+
      (x.al===false?" · out":"")+'</div></div>'+
    '<div class="rec" style="text-align:right">'+(anyGraded
      ? x.r.pts+'<div style="font-size:11px;color:var(--muted);font-weight:500">'+x.r.w+'-'+x.r.l+(x.r.p?"-"+x.r.p:"")+'</div>'
      : '<span style="color:var(--win);font-size:13px">ready</span>')+'</div></div>';
  }).join("") : '<div class="note" style="padding:18px">'+esc(CP("empty"))+'</div>';

  return '<div class="card">'+list+'</div>'+
    (missing.length ? '<div style="border:1px dashed var(--line);border-radius:14px;padding:12px 14px;margin-top:12px">'+
      '<b style="font-size:13px">'+esc(CP("missing"))+'</b><div style="font-size:12.5px;color:var(--muted);margin-top:3px">'+
      missing.map(function(m){return esc(m.short);}).join(", ")+(missing.length===1?" has":" have")+esc(CP("missingSub"))+'</div></div>' : "")+
    (tied ? '<div class="flag" style="margin-top:12px"><b>Tie at the top</b><br>'+esc(CP("tie"))+'</div>' : "")+
    (FEAT().lore && M("brodsky") ? '<div class="card" style="padding:14px;margin-top:14px">'+
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'+crest(M("brodsky"),26)+
      '<span style="font-size:12.5px;font-weight:700;color:var(--muted)">From the Stats Chair</span></div>'+
      '<div class="serif" style="font-size:15.5px;line-height:1.5">'+esc(LORE[(S.weekNum-1)%LORE.length])+'</div></div>' : "")+
    (ADMINS_OF().indexOf(me.id) > -1 ? leagueLinkPanel() + invitePanel() + adminPins() : "")+
    '<div class="note">Spreads, scores and grading all come from ESPN. Nobody enters anything.</div>';
}

function adminPins() {
  const set = ROSTER().filter(function(m){ return pinOf(m.id); });
  if (!set.length) return "";
  return '<div class="card" style="padding:14px;margin-top:14px">'+
    '<div style="font-size:12.5px;font-weight:700;color:var(--muted);margin-bottom:8px">PIN resets</div>'+
    set.map(function(m){
      return '<div style="display:flex;align-items:center;gap:9px;margin-bottom:7px">'+crest(m,26)+
      '<span style="flex:1;font-weight:600;font-size:14px">'+esc(m.short)+'</span>'+
      '<button onclick="resetPin(\''+m.id+'\')" style="background:none;border:1px solid var(--line);border-radius:999px;padding:5px 11px;font-size:12px;color:var(--muted)">Clear</button></div>';
    }).join("")+
    '<div style="font-size:11.5px;color:var(--muted);line-height:1.45">Clearing lets that person set a new PIN next time they sign in.</div></div>';
}

function reveal(me) {
  const open = S.games.filter(kicked);
  if (!open.length) return '<div class="card" style="padding:18px"><div style="font-size:14px;color:var(--muted);line-height:1.5">Sealed until kickoff. Every card opens here the second its game starts, one game at a time.</div></div>';
  return open.map(function(g){
    const votes = inPool().map(function(m){ return { m:m, p:picksOf(m.id)[g.id] }; }).filter(function(v){ return v.p; });
    const total = votes.length || 1, r = graded(g);
    function c(t) {
      const l = votes.filter(function(v){ return v.p===t; });
      const won = r && r.ats===t, lost = r && r.ats!==t && r.ats!=="PUSH";
      return '<div style="flex:1;padding:10px;border-radius:11px;border:1px solid '+(won?"var(--win)":"var(--line)")+';'+
        (won?"background:rgba(23,126,99,.09);":"")+(lost?"opacity:.55;":"")+'">'+
        '<div style="display:flex;align-items:center;gap:6px"><img src="'+logo(t)+'" width="20" height="20" style="object-fit:contain" onerror="this.style.visibility=\'hidden\'" />'+
        '<b>'+t+'</b><span style="font-size:11.5px;color:var(--muted)">'+(g.fav===t?"-"+g.line:"+"+g.line)+'</span>'+
        '<span style="margin-left:auto;font-weight:800;color:var(--muted)">'+Math.round(l.length/total*100)+'%</span></div>'+
        '<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:9px;min-height:26px">'+
        (l.length ? l.map(function(v){ return crest(v.m,26) + (mlockOf(v.m.id)===g.id?'<span style="font-size:12px;align-self:center">★</span>':''); }).join("") : '<span style="font-size:12px;color:var(--muted)">nobody</span>')+'</div>'+
        (l.length===1 && total>=4 ? '<div style="font-size:11px;font-weight:700;color:var(--gold);margin-top:7px">Alone on the island</div>' : "")+
        '</div>';
    }
    return '<div class="card" style="padding:12px"><div style="font-size:11.5px;color:var(--muted);margin-bottom:8px">'+
      kickText(g.kick)+(g.done?" · "+g.as+"-"+g.hs+" final":" · in progress")+'</div>'+
      '<div style="display:flex;gap:8px">'+c(g.away)+c(g.home)+'</div></div>';
  }).join("");
}

function trophy() {
  const rings = {}, sackos = {};
  HISTORY.forEach(function(h){ rings[h.champ]=(rings[h.champ]||0)+1; if (h.sacko) sackos[h.sacko]=(sackos[h.sacko]||0)+1; });
  const label = id => M(id) ? M(id).short : id;
  return '<div class="card" style="padding:14px">'+
    '<div style="font-size:12.5px;font-weight:700;color:var(--muted);margin-bottom:10px">Titles since 2011</div>'+
    Object.keys(rings).sort(function(a,b){ return rings[b]-rings[a]; }).map(function(id){
      return '<div style="display:flex;align-items:center;gap:9px;margin-bottom:8px">'+crest(M(id),28)+
      '<span style="flex:1;font-weight:700">'+esc(label(id))+'</span><b>'+rings[id]+'</b>'+
      '<span style="width:64px;text-align:right;font-size:11.5px;color:var(--loss)">'+(sackos[id]?sackos[id]+" sacko"+(sackos[id]>1?"s":""):"")+'</span></div>';
    }).join("")+'</div>'+
    HISTORY.map(function(h){
      return '<div class="card" style="padding:11px 13px;display:flex;align-items:center;gap:11px">'+
      '<span class="mark" style="font-size:19px;color:var(--muted);width:46px">'+h.y+'</span>'+crest(M(h.champ),30)+
      '<div style="flex:1;min-width:0"><div style="font-weight:700;font-size:14px">'+esc(label(h.champ))+
      '<span style="color:var(--muted);font-weight:500"> over '+esc(h.over?label(h.over):h.overName)+'</span></div>'+
      '<div style="font-size:11.5px;color:var(--muted)">'+(h.score||"score not recorded")+(h.sacko?" · sacko "+esc(label(h.sacko)):"")+'</div></div></div>';
    }).join("")+
    '<div class="note">League founded 2011. Recorded history begins 2016, so early scores are missing.</div>';
}

function ledger(me) {
  const collector = me.books || me.id === "brodsky";
  const sunday = S.games.find(function(g){ return new Date(g.kick).getDay() === 0; });
  const late = sunday ? Date.now() > new Date(sunday.kick).getTime() : false;
  const rows = inPool().map(function(m){
    const paid = paidOf(m.id);
    return { m:m, paid:paid, amt:(late && !paid) ? FEE_OF()*1.1 : FEE_OF() };
  }).sort(function(a,b){ return Number(a.paid) - Number(b.paid); });
  const collected = rows.filter(function(r){ return r.paid; }).length * FEE_OF();
  const out = rows.filter(function(r){ return !r.paid; }).reduce(function(s,r){ return s + r.amt; }, 0);
  const owe = rows.filter(function(r){ return !r.paid; }).map(function(r){ return esc(r.m.short); });

  return '<div style="display:flex;gap:8px;margin-bottom:12px">'+
      stat("Collected", "$"+collected)+stat("Outstanding", "$"+(out%1?out.toFixed(2):out))+'</div>'+
    '<div class="card">'+(rows.length ? rows.map(function(r){
      return '<button class="row" style="width:100%;background:none;border:none;text-align:left" '+(collector?"":"disabled")+' onclick="togglePaid(\''+r.m.id+'\')">'+
      crest(r.m,30)+'<div style="flex:1"><div style="font-weight:700">'+esc(r.m.short)+'</div>'+
      '<div style="font-size:11.5px;color:'+(r.paid?"var(--win)":late?"var(--loss)":"var(--muted)")+'">'+
      (r.paid?"paid":late?"late, Rule 6 tax applied":"outstanding")+'</div></div>'+
      '<span style="font-weight:800;'+(r.paid?"text-decoration:line-through;color:var(--muted)":"")+'">$'+(r.amt%1?r.amt.toFixed(2):r.amt)+'</span></button>';
    }).join("") : '<div class="note" style="padding:18px">Nobody is in yet, so nobody owes anything.</div>')+'</div>'+
    (owe.length ? '<div class="flag" style="margin-top:10px"><b>For the group chat</b><div class="serif" style="font-size:14.5px;margin-top:4px">'+
      esc(S.weekLabel)+', still owed: '+owe.join(", ")+'. Corey is not asking twice.</div></div>' : "")+
    '<div class="note">'+(collector?"Tap a name to mark it paid. Only you and the Commissioner can.":"Only the Debt Collector and the Commissioner can mark these paid.")+
    ' Fees are due at the Sunday one o\'clock kickoff. After that Rule 6 adds ten percent to the Chandni League Fund.</div>';
}

function sheet(me) {
  const mine = picksOf(me.id), made = S.games.filter(function(g){ return mine[g.id]; }).length;
  const r = record(me.id), al = aliveState(me.id);
  const line = FEAT().sass ? sassFor(me, r.w, r.l, made, S.games.length, al) : null;
  const hooked = FEAT().wendell && S.games.some(function(g){ return g.wendell && mine[g.id]; });
  return '<div class="veil" onclick="closeSheet()"><div class="sheet" onclick="event.stopPropagation()">'+
    '<div style="width:38px;height:4px;border-radius:2px;background:var(--line);margin:0 auto 16px"></div>'+
    '<div style="display:flex;align-items:center;gap:14px">'+crest(me,58)+
      '<div><div style="font-size:20px;font-weight:800">'+esc(me.name)+'</div>'+
      '<div style="font-size:13px;font-weight:700;color:'+col(me.fan)+'">'+esc(me.fan)+'</div>'+
      '<div style="font-size:12.5px;color:var(--muted);margin-top:2px">'+esc(me.role)+'</div></div></div>'+
    '<div style="display:flex;gap:8px;margin-top:16px">'+
      stat("Card", made+"/"+S.games.length)+stat("Survivor", survOf(me.id)||"none")+stat("Rings", me.rings)+'</div>'+
    '<div class="serif" style="margin-top:14px;padding:13px 15px;border-radius:12px;background:var(--ink);color:#F6F1E4"><i>'+esc(line)+'</i></div>'+
    '<div style="margin-top:12px;padding:12px 14px;border-radius:12px;font-size:13px;border:1px solid '+(hooked?"var(--gold);background:#FDF0DE":"var(--line)")+'">'+
      (hooked ? "Rule 7 has you. $"+FEE_OF()+" to Corey this week." : "Nothing owed yet. Touch an opener and that changes.")+'</div>'+
    '<div style="display:flex;gap:8px;margin-top:16px">'+
      '<button class="btn" style="flex:1" onclick="closeSheet()">Back to the card</button>'+
      '<button class="btn" style="width:auto;background:transparent;border:1px solid var(--line);color:var(--muted);font-size:14px;font-weight:500;padding:14px 16px" onclick="signOut()">Switch player</button>'+
    '</div></div></div>';
}

/* ============ ACTIONS ============ */
window.go = function(t){ S.tab = t; render(); };
window.setView = function(v){ S.view = v; render(); };
window.openSheet = function(){ S.sheet = true; render(); };
window.closeSheet = function(){ S.sheet = false; render(); };
window.signOut = function(){
  if (S.me) localStorage.removeItem("trust:"+S.lg+":"+S.me);
  localStorage.removeItem("me:"+S.lg); S.me = null; S.sheet = false; render();
};
window.tap = async function(gid, team) {
  if (lockOf(S.me)) return;
  const g = S.games.find(function(x){ return x.id === gid; });
  if (g && kicked(g)) return;
  const cur = picksOf(S.me);
  const clearing = cur[gid] === team;
  await put(P("picks."+S.weekKey+"."+S.me+"."+gid), clearing ? null : team);
  if (clearing && mlockOf(S.me) === gid) await put(P("mlock."+S.weekKey+"."+S.me), null);
  S.justPicked = clearing ? null : ("seg-"+gid+"-"+team);
  render();
  if (!clearing) celebrate(gid, team);
};
window.lockIn = async function(){ await put(P("lock."+S.weekKey+"."+S.me), Date.now()); blast(); render(); };
window.unlock = async function(){ await put(P("lock."+S.weekKey+"."+S.me), null); render(); };
window.togglePeek = function(){
  S.peek = !S.peek;
  render();
  if (S.peek) loadSchedule();
};
window.pickSurv = async function(t){
  if (slockOf(S.me)) return;
  const sg = S.games.find(function(x){ return x.home === t || x.away === t; });
  if (sg && kicked(sg)) return;
  const burned = Object.keys(LGS().surv||{}).some(function(wk){
    return wk !== S.weekKey && (LGS().surv[wk]||{})[S.me] === t;
  });
  if (burned) return;
  const c = survOf(S.me);
  const clearing = c === t;
  await put(P("surv."+S.weekKey+"."+S.me), clearing ? null : t);
  S.justPicked = clearing || !sg ? null : ("sv-"+sg.id+"-"+t);
  render();
  if (!clearing && sg) celebrate(sg.id, t, "sv-");
};
window.lockSurv = async function(){ await put(P("slock."+S.weekKey+"."+S.me), Date.now()); blast(); render(); };
window.unlockSurv = async function(){ await put(P("slock."+S.weekKey+"."+S.me), null); render(); };
window.setLock = async function(gid){
  if (lockOf(S.me)) return;
  const gg = S.games.find(function(x){ return x.id === gid; });
  if (gg && kicked(gg)) return;
  const cur = mlockOf(S.me);
  await put(P("mlock."+S.weekKey+"."+S.me), cur === gid ? null : gid);
  render();
};
window.togglePaid = async function(id){ await put(P("paid."+S.weekKey+"."+id), paidOf(id) ? null : true); render(); };


/* ============ SIGN IN ============ */
const pinOf = id => (LGS().pin || {})[id] || null;
async function sha(s) {
  const b = new TextEncoder().encode("pk1:" + s);
  const h = await crypto.subtle.digest("SHA-256", b);
  return Array.from(new Uint8Array(h)).map(x => x.toString(16).padStart(2, "0")).join("");
}
function authView() {
  const a = S.auth, m = M(a.id);
  const dots = [0,1,2,3].map(function(i){
    return '<span style="width:14px;height:14px;border-radius:7px;'+
      (i < a.entry.length ? 'background:var(--ink)' : 'background:transparent;box-shadow:inset 0 0 0 2px var(--line)')+'"></span>';
  }).join("");
  const keys = [1,2,3,4,5,6,7,8,9,"",0,"del"].map(function(k){
    if (k === "") return '<div></div>';
    if (k === "del") return '<button class="key" onclick="del()">⌫</button>';
    return '<button class="key" onclick="key('+k+')">'+k+'</button>';
  }).join("");
  const prompt = a.mode === "new" ? "Choose a 4 digit PIN"
    : a.mode === "confirm" ? "Enter it again" : "Enter your PIN";
  const sub = a.mode === "new"
    ? "This locks your picks to you. You only enter it once on this device."
    : a.mode === "confirm" ? "Just to be sure you will remember it."
    : "One time on this device, then it remembers you.";

  return '<main style="padding:36px 20px 40px;text-align:center">'+
    '<button onclick="authBack()" style="background:none;border:none;color:var(--muted);font-size:14px;float:left;padding:0">‹ Back</button>'+
    '<div style="clear:both;height:14px"></div>'+
    '<div style="display:flex;justify-content:center">'+crest(m, 56)+'</div>'+
    '<div style="font-size:19px;font-weight:800;margin-top:12px">'+esc(m.name)+'</div>'+
    '<div style="font-size:15px;font-weight:600;margin-top:16px">'+prompt+'</div>'+
    '<div style="font-size:12.5px;color:var(--muted);margin-top:5px;line-height:1.45;max-width:290px;margin-left:auto;margin-right:auto">'+sub+'</div>'+
    '<div style="display:flex;gap:14px;justify-content:center;margin:22px 0 6px">'+dots+'</div>'+
    (a.err ? '<div style="color:var(--loss);font-size:13px;font-weight:600;height:18px">'+esc(a.err)+'</div>' : '<div style="height:18px"></div>')+
    '<div class="pad">'+keys+'</div>'+
    (a.mode === "enter" ? '<div style="font-size:12px;color:var(--muted);margin-top:18px">Forgot it? '+ADMIN_HINT_OF()+'</div>' : "")+
  '</main>';
}
window.authBack = function(){ S.auth = null; render(); };
window.del = function(){ if (S.auth) { S.auth.entry = S.auth.entry.slice(0,-1); S.auth.err=""; render(); } };
window.key = async function(n) {
  const a = S.auth; if (!a || a.entry.length >= 4) return;
  a.entry += String(n); a.err = "";
  render();
  if (a.entry.length < 4) return;
  await new Promise(function(r){ setTimeout(r, 120); });

  if (a.mode === "new") { a.first = a.entry; a.entry = ""; a.mode = "confirm"; return render(); }
  if (a.mode === "confirm") {
    if (a.entry !== a.first) { a.mode = "new"; a.first = ""; a.entry = ""; a.err = "Those did not match"; return render(); }
    const h = await sha(a.entry);
    await put(P("pin."+a.id), h);
    return signIn(a.id);
  }
  const h = await sha(a.entry);
  if (h === pinOf(a.id)) return signIn(a.id);
  a.entry = ""; a.err = "Wrong PIN"; render();
};
function signIn(id) {
  S.me = id; S.auth = null;
  localStorage.setItem("lgLock", S.lg);   // locked to this league from here on
  localStorage.setItem("me:"+S.lg, id);
  localStorage.setItem("trust:" + S.lg + ":" + id, "1");
  render();
}
window.pickMe = function(id) {
  if (localStorage.getItem("trust:" + S.lg + ":" + id)) { S.me = id; localStorage.setItem("me:"+S.lg, id); return render(); }
  S.auth = { id:id, mode: pinOf(id) ? "enter" : "new", entry:"", first:"", err:"" };
  render();
};
window.resetPin = async function(id) {
  await put(P("pin."+id), null);
  render();
};

/* ============ INVITES ============ */
const extra = () => Object.keys(LGS().roster || {}).map(function(k){ return LGS().roster[k]; });
const ROSTER = () => MEMBERS_OF().concat(extra());
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,24);
const TINTS = ["#2E6B54","#1F5F7A","#7A4B1F","#5B3B76","#8A2F3F","#2A5A8C","#6B6A25","#2F5F5C"];

function newCode() {
  const a = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i++) out += a[Math.floor(Math.random() * a.length)];
  return out;
}
window.makeInvite = async function() {
  const code = newCode();
  await put(P("invites."+code), { at: Date.now(), by: S.me, used: false });
  S.lastInvite = code;
  render();
};
window.copyInvite = function(code) {
  const url = location.origin + "/?join=" + code + "&lg=" + S.lg;
  if (navigator.clipboard) navigator.clipboard.writeText(url);
  S.copied = code; render();
  setTimeout(function(){ S.copied = ""; render(); }, 2000);
};
window.killInvite = async function(code) { await put(P("invites."+code), null); render(); };

function leagueLinkPanel() {
  const url = location.origin + "/?lg=" + S.lg;
  return '<div class="card" style="padding:14px;margin-top:14px">'+
    '<div style="font-size:12.5px;font-weight:700;color:var(--muted);margin-bottom:6px">League link</div>'+
    '<div style="font-size:12.5px;word-break:break-all;line-height:1.5">'+esc(url)+'</div>'+
    '<button onclick="copyLeagueLink()" style="width:100%;margin-top:10px;border:1px dashed var(--line);'+
    'background:none;border-radius:12px;padding:11px;font-size:13.5px;color:var(--muted)">'+
    (S.copiedLg ? "Copied" : "Copy this league's link")+'</button>'+
    '<div style="font-size:11.5px;color:var(--muted);line-height:1.45;margin-top:8px">'+
    'Send this to this pool only. It drops them straight in and they never see the other league.</div></div>';
}
window.copyLeagueLink = function(){
  const url = location.origin + "/?lg=" + S.lg;
  if (navigator.clipboard) navigator.clipboard.writeText(url);
  S.copiedLg = true; render();
  setTimeout(function(){ S.copiedLg = false; render(); }, 2000);
};

function invitePanel() {
  const inv = LGS().invites || {};
  const open = Object.keys(inv).filter(function(c){ return inv[c] && !inv[c].used; });
  return '<div class="card" style="padding:14px;margin-top:14px">'+
    '<div style="font-size:12.5px;font-weight:700;color:var(--muted);margin-bottom:8px">Invite a player</div>'+
    open.map(function(c){
      return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'+
        '<code style="flex:1;font-size:15px;font-weight:700;letter-spacing:1px">'+c+'</code>'+
        '<button onclick="copyInvite(\''+c+'\')" style="background:none;border:1px solid var(--line);border-radius:999px;padding:6px 12px;font-size:12px">'+
        (S.copied===c?"Copied":"Copy link")+'</button>'+
        '<button onclick="killInvite(\''+c+'\')" style="background:none;border:none;color:var(--muted);font-size:12px">Cancel</button></div>';
    }).join("")+
    '<button onclick="makeInvite()" style="width:100%;border:1px dashed var(--line);background:none;border-radius:12px;padding:11px;font-size:13.5px;color:var(--muted)">Create an invite link</button>'+
    '<div style="font-size:11.5px;color:var(--muted);line-height:1.45;margin-top:8px">Each link works once. Whoever opens it picks a name and a PIN, then they are in.</div></div>';
}

function joinView() {
  const inv = (LGS().invites || {})[S.join] || null;
  if (!inv || inv.used) {
    return '<main style="padding:52px 20px"><div style="font-size:22px;font-weight:800">That invite is not valid</div>'+
      '<div class="note">It may have been used already. Ask for a fresh link.</div>'+
      '<button class="btn" style="margin-top:14px" onclick="dropJoin()">Back to sign in</button></main>';
  }
  return '<main style="padding:48px 20px">'+
    '<div style="font-size:26px;font-weight:800;letter-spacing:-.5px">You are in, almost.</div>'+
    '<div class="note" style="padding:10px 0 0">Put your name in as you want it on the board. You will set a PIN next.</div>'+
    '<input type="text" id="jn" placeholder="Your name" autocomplete="name" style="margin-top:18px" />'+
    '<button class="btn go" style="margin-top:10px" onclick="claimInvite()">Join the pool</button></main>';
}
window.dropJoin = function(){ S.join = null; history.replaceState({}, "", location.pathname); render(); };
window.claimInvite = async function() {
  const v = (document.getElementById("jn").value || "").trim();
  if (!v) return;
  let id = slug(v) || ("player" + Date.now());
  if (M(id)) id = id + "-" + Math.floor(Math.random()*90+10);
  const tint = TINTS[ROSTER().length % TINTS.length];
  await put(P("roster."+id), { id:id, name:v, short:v.split(/\s+/)[0], tint:tint, added:true });
  await put(P("invites."+S.join + ".used"), true);
  S.join = null;
  history.replaceState({}, "", location.pathname);
  S.auth = { id:id, mode:"new", entry:"", first:"", err:"" };
  render();
};

/* ============ SEASON ARCHIVE AND STATS ============ */
async function archive() {
  const have = (LGS().res || {})[S.weekKey] || {};
  for (const g of S.games) {
    const r = graded(g);
    if (!r || have[g.id]) continue;
    await put(P("res."+S.weekKey + "." + g.id), {
      ats: r.ats, su: r.su, home: g.home, away: g.away, fav: g.fav, line: g.line
    });
  }
}
function teamRecords() {
  const res = LGS().res || {}, out = {};
  Object.keys(res).forEach(function(wk){
    Object.keys(res[wk]).forEach(function(gid){
      const r = res[wk][gid];
      [r.home, r.away].forEach(function(t){
        if (!out[t]) out[t] = { w:0, l:0, p:0 };
        if (r.ats === "PUSH") out[t].p++;
        else if (r.ats === t) out[t].w++;
        else out[t].l++;
      });
    });
  });
  return out;
}
function playerTeams(who) {
  const picks = LGS().picks || {}, res = LGS().res || {}, out = {};
  Object.keys(picks).forEach(function(wk){
    const mine = (picks[wk] || {})[who]; if (!mine) return;
    Object.keys(mine).forEach(function(gid){
      const t = mine[gid];
      if (!out[t]) out[t] = { n:0, w:0, l:0, p:0 };
      out[t].n++;
      const r = ((res[wk] || {})[gid]) || null;
      if (!r) return;
      if (r.ats === "PUSH") out[t].p++;
      else if (r.ats === t) out[t].w++;
      else out[t].l++;
    });
  });
  return out;
}
function statsView(me) {
  const who = S.statsWho || me.id;
  const person = M(who) || me;
  const mine = playerTeams(who);
  const teams = Object.keys(mine).sort(function(a,b){ return mine[b].n - mine[a].n || mine[b].w - mine[a].w; });
  const tr = teamRecords();
  const league = Object.keys(tr).filter(function(t){ return tr[t].w + tr[t].l > 0; })
    .sort(function(a,b){
      const pa = tr[a].w/(tr[a].w+tr[a].l), pb = tr[b].w/(tr[b].w+tr[b].l);
      return pb - pa || tr[b].w - tr[a].w;
    });

  const picker = ROSTER().map(function(m){
    return '<button onclick="setStatsWho(\'' + m.id + '\')" style="background:' + (m.id===who?"var(--ink)":"transparent") +
      ';color:' + (m.id===who?"#fff":"var(--muted)") + ';border:1px solid var(--line);border-radius:999px;padding:6px 11px;font-size:12px;font-weight:600;white-space:nowrap">' +
      esc(m.short) + '</button>';
  }).join("");

  const mineRows = teams.length ? teams.map(function(t){
    const x = mine[t], done = x.w + x.l + x.p;
    return '<div class="row"><img src="' + logo(t) + '" width="24" height="24" style="object-fit:contain" onerror="this.style.visibility=\'hidden\'" />' +
      '<div style="flex:1"><div style="font-weight:700;font-size:14px">' + t + '</div>' +
      '<div style="font-size:11.5px;color:var(--muted)">taken ' + x.n + (x.n===1?" time":" times") + '</div></div>' +
      '<div style="font-weight:800;font-variant-numeric:tabular-nums">' +
      (done ? x.w + '<span style="color:var(--muted);font-weight:500">-' + x.l + (x.p?"-"+x.p:"") + '</span>'
            : '<span style="color:var(--muted);font-size:12px">pending</span>') + '</div></div>';
  }).join("") : '<div class="note" style="padding:18px">No picks on record yet. This fills in as weeks finish.</div>';

  const leagueRows = league.length ? league.map(function(t){
    const x = tr[t], pct = Math.round(x.w/(x.w+x.l)*100);
    return '<div class="row"><img src="' + logo(t) + '" width="24" height="24" style="object-fit:contain" onerror="this.style.visibility=\'hidden\'" />' +
      '<div style="flex:1;font-weight:700;font-size:14px">' + t + '</div>' +
      '<div style="font-size:12px;color:var(--muted);width:52px;text-align:right">' + pct + '%</div>' +
      '<div style="font-weight:800;width:56px;text-align:right;font-variant-numeric:tabular-nums">' + x.w +
      '<span style="color:var(--muted);font-weight:500">-' + x.l + (x.p?"-"+x.p:"") + '</span></div></div>';
  }).join("") : '<div class="note" style="padding:18px">Nothing graded yet this season.</div>';

  return '<div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:10px;-webkit-overflow-scrolling:touch">' + picker + '</div>' +
    '<div style="font-size:12.5px;font-weight:700;color:var(--muted);padding:4px 4px 8px">' + esc(person.short) + ' by team</div>' +
    '<div class="card">' + mineRows + '</div>' +
    '<div style="font-size:12.5px;font-weight:700;color:var(--muted);padding:16px 4px 8px">NFL against the spread</div>' +
    '<div class="card">' + leagueRows + '</div>' +
    '<div class="note">Records build week by week as games finish. Nobody has to enter anything.</div>';
}
window.setStatsWho = function(id){ S.statsWho = id; render(); };

(async function(){
  const q = new URLSearchParams(location.search);
  if (q.get("lg") && LEAGUES[q.get("lg")]) {
    S.lg = q.get("lg");
    localStorage.setItem("lg", S.lg);
    localStorage.setItem("lgLock", S.lg);
    history.replaceState({}, "", location.pathname + (q.get("join") ? "?join=" + q.get("join") : ""));
  }
  if (!S.lg && localStorage.getItem("lgLock")) S.lg = localStorage.getItem("lgLock");
  if (q.get("join")) S.join = q.get("join").toUpperCase();
  render();
  try { await loadGames(); } catch(e) {}
  await loadState();
  await archive();
  S.ready = true;
  render();
  setInterval(async function(){
    if (document.hidden) return;
    await Promise.all([loadGames().catch(function(){}), loadState()]);
    await archive();
    render();
  }, 60000);
})();
