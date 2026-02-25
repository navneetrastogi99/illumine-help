import { useState } from "react"
import {
  SEARCH_SUGGESTIONS, SEARCH_HINTS,
  PERSONAS, GS_STEPS, MODULES,
  VIDEOS, VIDEO_TABS, RELEASES,
  POPULAR, CONTACT_OPTIONS, REGIONS, FOOTER_LINKS,
} from "./CONTENT.js"

// ── TOKENS — extracted directly from help.illumine.app screenshot ──
const C = {
  // The exact lavender page gradient in the screenshot
  gradTop:   "#EDE9FF",
  gradBot:   "#FFFFFF",
  // Purple icon bg — matches the collection card icon squares exactly
  purple:    "#6C3FC5",
  purpleHov: "#5A32A3",
  purplePill:"rgba(108,63,197,0.08)",
  // Text
  textHead:  "#1A1A2E",
  textBody:  "#3D3D50",
  textMuted: "#8080A0",
  textMeta:  "#9898B2",
  // Cards — exactly as in screenshot
  cardBg:    "#FFFFFF",
  cardBorder:"#E8E4F3",
  cardHov:   "rgba(108,63,197,0.06)",
  // Misc
  line:      "#EEE9FC",
  inputBg:   "#FFFFFF",
  white:     "#FFFFFF",
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  html,body{
    font-family:'Mulish',sans-serif;
    background:${C.gradTop};
    color:${C.textHead};
    -webkit-font-smoothing:antialiased;
  }
  a{text-decoration:none;color:inherit;}

  .page{
    min-height:100vh;
    background:linear-gradient(180deg, ${C.gradTop} 0%, #F5F2FF 30%, #FAF8FF 60%, ${C.gradBot} 100%);
  }

  /* ─── NAV — matches existing portal exactly ─── */
  .nav{
    background:transparent;
    padding:0 48px;
    height:64px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .nav-logo{
    display:flex;align-items:center;gap:0;text-decoration:none;
  }
  .nav-logo-img{height:28px;width:auto;display:block;}
  .nav-right{display:flex;align-items:center;gap:20px;}
  .nav-link-text{
    font-size:13px;font-weight:600;color:${C.textMuted};
    padding:6px 10px;border-radius:7px;transition:all .15s;
  }
  .nav-link-text:hover{color:${C.textBody};background:rgba(108,63,197,0.06);}
  .nav-lang{
    display:flex;align-items:center;gap:5px;
    font-size:13px;font-weight:600;color:${C.textBody};cursor:pointer;
  }

  /* ─── HERO — centered, minimal, matches portal ─── */
  .hero{
    text-align:center;
    padding:52px 40px 44px;
  }
  .hero-title{
    font-size:30px;
    font-weight:800;
    color:${C.textHead};
    letter-spacing:-0.4px;
    margin-bottom:24px;
    line-height:1.25;
  }

  /* Search — exact pill shape from portal */
  .search-wrap{max-width:500px;margin:0 auto;position:relative;}
  .search-inner{
    display:flex;align-items:center;
    background:${C.white};
    border:1.5px solid ${C.cardBorder};
    border-radius:100px;
    padding:0 18px;
    height:50px;
    box-shadow:0 2px 12px rgba(108,63,197,0.08);
    transition:border-color .15s, box-shadow .15s;
  }
  .search-inner:focus-within{
    border-color:${C.purple};
    box-shadow:0 2px 20px rgba(108,63,197,0.14);
  }
  .search-input{
    flex:1;border:none;background:transparent;
    font-family:'Mulish',sans-serif;font-size:14px;font-weight:500;
    color:${C.textHead};outline:none;padding:0 10px;
  }
  .search-input::placeholder{color:#B0A8CC;}
  .search-drop{
    position:absolute;top:calc(100% + 8px);left:0;right:0;
    background:${C.white};border-radius:14px;
    border:1.5px solid ${C.cardBorder};
    box-shadow:0 8px 32px rgba(108,63,197,0.1);
    overflow:hidden;z-index:200;
  }
  .search-row{
    display:flex;align-items:center;justify-content:space-between;
    padding:12px 18px;border-bottom:1px solid ${C.line};cursor:pointer;transition:background .1s;
  }
  .search-row:last-child{border-bottom:none;}
  .search-row:hover{background:${C.cardHov};}
  .sr-title{font-size:13px;font-weight:700;color:${C.textHead};}
  .sr-mod{font-size:11px;font-weight:600;color:${C.textMuted};}

  .hints{display:flex;gap:8px;justify-content:center;margin-top:14px;flex-wrap:wrap;}
  .hint{
    background:rgba(108,63,197,0.07);border:1px solid rgba(108,63,197,0.12);
    border-radius:100px;padding:4px 14px;
    font-size:12px;font-weight:600;color:${C.purple};cursor:pointer;transition:all .13s;
  }
  .hint:hover{background:rgba(108,63,197,0.13);}

  /* ─── MAIN ─── */
  .main{max-width:920px;margin:0 auto;padding:8px 40px 100px;}

  /* ─── SECTION HEADER ─── */
  .sh{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:16px;margin-top:48px;}
  .sh-title{font-size:15px;font-weight:800;color:${C.textHead};}
  .sh-sub{font-size:12px;font-weight:500;color:${C.textMuted};margin-left:8px;}
  .sh-link{font-size:12px;font-weight:700;color:${C.purple};}
  .sh-link:hover{text-decoration:underline;}

  /* ─── COLLECTION CARD — exact match to portal cards ─── */
  /* Purple icon square | title + description + meta row */
  .coll-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  .coll-card{
    background:${C.cardBg};
    border:1px solid ${C.cardBorder};
    border-radius:12px;
    padding:24px;
    display:flex;flex-direction:column;gap:0;
    text-decoration:none;
    transition:all .18s;
    cursor:pointer;
  }
  .coll-card:hover{
    border-color:rgba(108,63,197,0.28);
    box-shadow:0 4px 20px rgba(108,63,197,0.09);
    transform:translateY(-1px);
  }
  .coll-icon{
    width:40px;height:40px;border-radius:9px;
    background:${C.purple};
    display:flex;align-items:center;justify-content:center;
    margin-bottom:16px;flex-shrink:0;
  }
  .coll-title{font-size:14px;font-weight:800;color:${C.textHead};margin-bottom:6px;}
  .coll-desc{font-size:13px;font-weight:500;color:${C.textBody};line-height:1.55;flex:1;margin-bottom:14px;}
  .coll-meta{font-size:12px;font-weight:600;color:${C.textMeta};}
  .coll-meta span{color:${C.purple};}

  /* ─── GS BANNER — inline with card language ─── */
  .gs-card{
    background:${C.white};border:1px solid ${C.cardBorder};border-radius:12px;
    padding:24px 28px;display:grid;grid-template-columns:auto 1fr;gap:28px;align-items:center;
    margin-top:16px;
  }
  .gs-lbl{font-size:10px;font-weight:800;color:${C.purple};text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;}
  .gs-title{font-size:15px;font-weight:800;color:${C.textHead};line-height:1.35;white-space:nowrap;}
  .gs-steps{display:flex;border:1px solid ${C.line};border-radius:9px;overflow:hidden;background:#FAFAFE;}
  .gs-step{
    flex:1;display:flex;flex-direction:column;align-items:center;padding:11px 6px;
    text-decoration:none;transition:background .12s;border-right:1px solid ${C.line};
  }
  .gs-step:last-child{border-right:none;}
  .gs-step:hover{background:rgba(108,63,197,0.06);}
  .gs-num{font-size:9px;font-weight:800;color:${C.textMeta};letter-spacing:0.4px;margin-bottom:3px;}
  .gs-lbl2{font-size:11px;font-weight:700;color:${C.textBody};text-align:center;line-height:1.3;}
  .gs-step:hover .gs-lbl2{color:${C.purple};}

  /* ─── VIDEO CARDS — same card shell, different thumb ─── */
  .vtabs{display:flex;gap:6px;margin-bottom:14px;}
  .vtab{
    padding:5px 14px;border-radius:100px;
    border:1.5px solid ${C.cardBorder};background:${C.white};
    font-size:12px;font-weight:700;color:${C.textMuted};
    cursor:pointer;transition:all .14s;font-family:'Mulish',sans-serif;
  }
  .vtab.on{background:${C.purple};border-color:${C.purple};color:${C.white};}
  .vtab:hover:not(.on){border-color:${C.purple};color:${C.purple};}
  .vgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
  .vcard{
    background:${C.cardBg};border:1px solid ${C.cardBorder};border-radius:12px;
    overflow:hidden;text-decoration:none;transition:all .18s;display:block;
  }
  .vcard:hover{border-color:rgba(108,63,197,0.28);box-shadow:0 4px 18px rgba(108,63,197,0.09);transform:translateY(-1px);}
  .vthumb{
    height:100px;background:linear-gradient(135deg,#EDE9FF 0%,#DDD5F5 100%);
    display:flex;align-items:center;justify-content:center;position:relative;
  }
  .vplay-btn{
    width:38px;height:38px;border-radius:50%;background:${C.white};
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 2px 10px rgba(108,63,197,0.15);transition:all .15s;border:1px solid ${C.cardBorder};
  }
  .vcard:hover .vplay-btn{background:${C.purple};border-color:${C.purple};}
  .vdur{position:absolute;bottom:8px;right:8px;background:rgba(20,10,50,0.6);color:${C.white};font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;}
  .vpop{position:absolute;top:8px;left:8px;background:#C2185B;color:${C.white};font-size:9px;font-weight:800;padding:2px 7px;border-radius:4px;text-transform:uppercase;letter-spacing:0.3px;}
  .vbody{padding:12px 14px;}
  .vmod{font-size:10px;font-weight:800;color:${C.purple};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;}
  .vtitle{font-size:12px;font-weight:700;color:${C.textHead};line-height:1.45;}
  .vpills{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;}
  .vpill{
    display:flex;align-items:center;gap:5px;
    border:1px solid ${C.cardBorder};border-radius:7px;padding:6px 11px;
    font-size:12px;font-weight:600;color:${C.textBody};text-decoration:none;
    background:${C.white};transition:all .13s;
  }
  .vpill:hover{border-color:rgba(108,63,197,0.3);color:${C.purple};background:${C.cardHov};}
  .vpill-dur{font-size:10px;color:${C.textMeta};margin-left:2px;}

  /* ─── RELEASE NOTES ─── */
  .rel-wrap{
    display:grid;grid-template-columns:200px 1fr;
    border:1px solid ${C.cardBorder};border-radius:12px;overflow:hidden;background:${C.white};
  }
  .rel-nav{background:#FAFAFE;border-right:1px solid ${C.line};padding:8px;}
  .rel-ni{padding:11px 13px;border-radius:8px;cursor:pointer;transition:background .12s;margin-bottom:2px;}
  .rel-ni:hover{background:rgba(108,63,197,0.06);}
  .rel-ni.on{background:rgba(108,63,197,0.07);}
  .rel-ni-tag{font-size:11px;font-weight:800;color:${C.textMuted};margin-bottom:2px;}
  .rel-ni.on .rel-ni-tag{color:${C.purple};}
  .rel-ni-title{font-size:11px;font-weight:500;color:${C.textMuted};line-height:1.4;}
  .rel-body{padding:26px 30px;}
  .rel-hdr{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid ${C.line};}
  .rel-badge{display:inline-flex;align-items:center;gap:5px;background:rgba(108,63,197,0.08);border-radius:100px;padding:3px 10px;margin-bottom:8px;}
  .rel-badge-dot{width:5px;height:5px;border-radius:50%;background:${C.purple};}
  .rel-badge-text{font-size:10px;font-weight:800;color:${C.purple};text-transform:uppercase;letter-spacing:0.5px;}
  .rel-title{font-size:15px;font-weight:800;color:${C.textHead};line-height:1.35;}
  .rel-btn{background:${C.purple};color:${C.white};border:none;border-radius:8px;padding:8px 16px;font-family:'Mulish',sans-serif;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;text-decoration:none;display:inline-block;transition:background .15s;flex-shrink:0;}
  .rel-btn:hover{background:${C.purpleHov};}
  .rel-items{display:flex;flex-direction:column;gap:8px;}
  .rel-row{display:flex;align-items:flex-start;gap:10px;padding:11px 13px;border-radius:8px;border:1px solid ${C.line};background:#FAFAFE;}
  .rel-dot{width:6px;height:6px;border-radius:50%;background:${C.purple};flex-shrink:0;margin-top:6px;}
  .rel-text{font-size:13px;font-weight:500;color:${C.textBody};line-height:1.5;}
  .rel-footer{margin-top:16px;padding-top:14px;border-top:1px solid ${C.line};display:flex;align-items:center;justify-content:space-between;}
  .rel-all{font-size:12px;font-weight:700;color:${C.purple};text-decoration:none;}
  .rel-all:hover{text-decoration:underline;}
  .rel-rss{font-size:11px;font-weight:600;color:${C.textMeta};display:flex;align-items:center;gap:4px;cursor:pointer;}

  /* ─── POPULAR + SIDEBAR ─── */
  .bot{display:grid;grid-template-columns:1fr 280px;gap:16px;margin-top:48px;}
  .pop-list{border:1px solid ${C.cardBorder};border-radius:12px;overflow:hidden;background:${C.white};}
  .pop-row{display:flex;align-items:center;padding:13px 18px;gap:13px;border-bottom:1px solid ${C.line};text-decoration:none;transition:background .12s;}
  .pop-row:last-child{border-bottom:none;}
  .pop-row:hover{background:rgba(108,63,197,0.04);}
  .pop-n{width:20px;height:20px;border-radius:5px;background:#F3F0FC;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:${C.textMeta};flex-shrink:0;transition:all .12s;}
  .pop-row:hover .pop-n{background:${C.purple};color:${C.white};}
  .pop-t{font-size:13px;font-weight:700;color:${C.textHead};flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:color .12s;}
  .pop-row:hover .pop-t{color:${C.purple};}
  .pop-meta{display:flex;gap:6px;}
  .pop-m{font-size:11px;color:${C.textMeta};font-weight:500;}
  .pop-chev{color:#D8D0EE;flex-shrink:0;transition:color .12s;}
  .pop-row:hover .pop-chev{color:${C.purple};}

  .sidebar{display:flex;flex-direction:column;gap:14px;}
  .sc{background:${C.white};border:1px solid ${C.cardBorder};border-radius:12px;padding:18px;}
  .sc-title{font-size:11px;font-weight:800;color:${C.textHead};text-transform:uppercase;letter-spacing:0.6px;margin-bottom:12px;}
  .sc-opts{display:flex;flex-direction:column;gap:7px;}
  .sc-opt{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;padding:10px 12px;border-radius:8px;border:1px solid ${C.line};text-decoration:none;transition:all .13s;}
  .sc-opt:hover{border-color:rgba(108,63,197,0.25);background:rgba(108,63,197,0.04);}
  .sc-opt-l{font-size:12px;font-weight:700;color:${C.textHead};}
  .sc-opt-s{font-size:11px;color:${C.textMuted};font-weight:500;margin-top:1px;}
  .sc-reg{display:flex;align-items:center;gap:9px;padding:9px 11px;border-radius:8px;border:1px solid ${C.line};text-decoration:none;transition:all .13s;margin-bottom:7px;}
  .sc-reg:last-child{margin-bottom:0;}
  .sc-reg:hover{border-color:rgba(108,63,197,0.25);background:rgba(108,63,197,0.04);}
  .sc-reg-l{font-size:12px;font-weight:700;color:${C.textHead};}
  .sc-reg-s{font-size:11px;color:${C.textMuted};font-weight:500;}

  /* ─── FOOTER ─── */
  .footer{border-top:1px solid ${C.line};padding:22px 48px;display:flex;justify-content:space-between;align-items:center;}
  .footer-l{font-size:12px;color:${C.textMeta};}
  .footer-links{display:flex;gap:18px;}
  .footer-link{font-size:12px;color:${C.textMeta};font-weight:600;}
  .footer-link:hover{color:${C.purple};}

  /* ─── RESPONSIVE ─── */
  @media(max-width:860px){
    .coll-grid{grid-template-columns:1fr;}
    .vgrid{grid-template-columns:repeat(2,1fr);}
    .bot{grid-template-columns:1fr;}
    .rel-wrap{grid-template-columns:1fr;}
    .rel-nav{border-right:none;border-bottom:1px solid ${C.line};}
    .gs-card{grid-template-columns:1fr;gap:18px;}
    .main{padding:0 20px 80px;}
    .nav{padding:0 20px;}
    .footer{padding:18px 20px;}
    .hero{padding:36px 20px 32px;}
  }
  @media(max-width:560px){
    .vgrid{grid-template-columns:1fr;}
    .hero-title{font-size:22px;}
  }
`

// ─── ICONS (white SVGs for purple icon squares) ───────────────
const Ico = ({ d, vb = "0 0 24 24", fill = false }) => (
  <svg width="18" height="18" viewBox={vb} fill={fill ? "white" : "none"} stroke={fill ? "none" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

const ICONS = {
  admin:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>,
  teacher:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  director: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  parent:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  video:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  book:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  billing:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  enroll:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>,
  chat:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  reports:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  staff:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  clock:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  building: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  form:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>,
  settings: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
}

const MODULE_ICONS = {
  "Getting Started": ICONS.book,
  "Attendance": ICONS.admin,
  "Billing & Payments": ICONS.billing,
  "Enrollment & Admissions": ICONS.enroll,
  "Parent Communication": ICONS.chat,
  "Reports & Analytics": ICONS.reports,
  "Learning & Assessments": ICONS.book,
  "Staff Management": ICONS.staff,
  "Programs & Scheduling": ICONS.clock,
  "Multi-Center": ICONS.building,
  "Forms & Applications": ICONS.form,
  "Settings & Access": ICONS.settings,
}

const MODULE_DESCS = {
  "Getting Started":          "Set up your school on illumine. New admin? Start here.",
  "Attendance":               "Check-in, check-out, QR codes, kiosk mode and reports.",
  "Billing & Payments":       "Fee plans, invoices, online payments and billing reports.",
  "Enrollment & Admissions":  "Enquiry pipeline, admissions, forms and waitlists.",
  "Parent Communication":     "Newsletters, announcements and messaging.",
  "Reports & Analytics":      "Attendance, billing, occupancy and learning reports.",
  "Learning & Assessments":   "Lesson plans, observations, portfolios and assessments.",
  "Staff Management":         "Staff profiles, scheduling, leaves and payroll.",
  "Programs & Scheduling":    "Programs, timetables and curriculum planning.",
  "Multi-Center":             "Cross-center dashboard, reporting and management.",
  "Forms & Applications":     "Custom forms, checklists and digital signatures.",
  "Settings & Access":        "Roles, permissions, integrations and account settings.",
}

const PERSONA_DESCS = {
  admin:    "Billing, enrollment, invoices, reports and center settings.",
  teacher:  "Attendance, daily activities and parent communication.",
  director: "Analytics, staff management and multi-center overview.",
  parent:   "App setup, viewing updates, payments and messaging.",
}

const Chev = ({ size = 14, color = "#D8D0EE" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)
const SearchIco = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B0A8CC" strokeWidth="2.2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)
const PlayIco = ({ hovered }) => (
  <svg width="13" height="13" viewBox="0 0 24 24">
    <polygon points="6,4 20,12 6,20" fill={hovered ? "#FFFFFF" : C.purple}/>
  </svg>
)
const RssIco = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1" fill="currentColor"/>
  </svg>
)

// ─── APP ──────────────────────────────────────────────────────
export default function App() {
  const [query, setQuery]           = useState("")
  const [showDrop, setShowDrop]     = useState(false)
  const [activeVTab, setActiveVTab] = useState("All")
  const [activeRel, setActiveRel]   = useState(0)
  const [hovV, setHovV]             = useState(null)

  const filteredSearch = SEARCH_SUGGESTIONS.filter(s =>
    query.length > 1 && s.title.toLowerCase().includes(query.toLowerCase())
  )
  const filteredVideos = activeVTab === "All"
    ? VIDEOS
    : VIDEOS.filter(v => v.module.toLowerCase().includes(activeVTab.toLowerCase()))
  const mainVids = (filteredVideos.length ? filteredVideos : VIDEOS).slice(0, 4)
  const pillVids = VIDEOS.slice(4)
  const rel = RELEASES[activeRel]

  return (
    <div className="page">
      <style>{css}</style>

      {/* ── NAV — matches existing portal: logo left, language right ── */}
      <nav className="nav">
        <a className="nav-logo" href="/">
          <img
            className="nav-logo-img"
            src="https://cdn.prod.website-files.com/66d29a238e58012365d58156/66d29dc73d23d8421dab50fa_Navbar%20Brand.svg"
            alt="illumine"
          />
        </a>
        <div className="nav-right">
          <a className="nav-link-text" href="https://help.illumine.app/en/collections/product-training-videos" target="_blank" rel="noreferrer">Training Videos</a>
          <a className="nav-link-text" href="https://help.illumine.app/en/collections/product-updates" target="_blank" rel="noreferrer">Product Updates</a>
          <a className="nav-link-text" href="https://help.illumine.app/en/" target="_blank" rel="noreferrer">All Articles</a>
        </div>
      </nav>

      {/* ── HERO — centered, matches existing portal ── */}
      <section className="hero">
        <h1 className="hero-title">Advice and answers from the illumine Team</h1>

        <div className="search-wrap">
          <div className="search-inner">
            <SearchIco />
            <input
              className="search-input"
              placeholder="Search for articles..."
              value={query}
              onChange={e => { setQuery(e.target.value); setShowDrop(true) }}
              onFocus={() => setShowDrop(true)}
              onBlur={() => setTimeout(() => setShowDrop(false), 160)}
            />
          </div>
          {showDrop && query.length > 1 && filteredSearch.length > 0 && (
            <div className="search-drop">
              {filteredSearch.map((r, i) => (
                <a key={i} className="search-row" href={r.href}>
                  <div>
                    <div className="sr-title">{r.title}</div>
                    <div className="sr-mod">{r.module}</div>
                  </div>
                  <Chev size={13} color="#C0B8D8" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="hints">
          {SEARCH_HINTS.map(h => (
            <span key={h} className="hint" onClick={() => { setQuery(h); setShowDrop(true) }}>{h}</span>
          ))}
        </div>
      </section>

      <div className="main">

        {/* ── BROWSE BY ROLE — same card shell as existing collection cards ── */}
        <div className="sh">
          <div>
            <span className="sh-title">Browse by role</span>
            <span className="sh-sub">Jump to what's relevant for you</span>
          </div>
        </div>
        <div className="coll-grid">
          {PERSONAS.map(p => (
            <a key={p.id} className="coll-card" href={p.href}>
              <div className="coll-icon">{ICONS[p.id]}</div>
              <div className="coll-title">{p.label}</div>
              <div className="coll-desc">{PERSONA_DESCS[p.id]}</div>
              <div className="coll-meta">
                {p.links.slice(0, 2).map((l, i) => (
                  <span key={i}>{i > 0 ? " · " : ""}{l.text}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* ── GETTING STARTED ── */}
        <div className="sh" style={{ marginTop: 40 }}>
          <span className="sh-title">New to illumine?</span>
        </div>
        <div className="gs-card">
          <div>
            <div className="gs-lbl">Onboarding guide</div>
            <div className="gs-title">7 steps to go live.</div>
          </div>
          <div className="gs-steps">
            {GS_STEPS.map(s => (
              <a key={s.num} className="gs-step" href={s.href}>
                <div className="gs-num">{s.num}</div>
                <div className="gs-lbl2">{s.label}</div>
              </a>
            ))}
          </div>
        </div>

        {/* ── ALL MODULES — same card layout as existing portal ── */}
        <div className="sh">
          <div>
            <span className="sh-title">Browse by module</span>
            <span className="sh-sub">All features documented</span>
          </div>
          <a className="sh-link" href="https://help.illumine.app/en/">View all →</a>
        </div>
        <div className="coll-grid">
          {MODULES.map(m => (
            <a key={m.label} className="coll-card" href={m.href}>
              <div className="coll-icon">{MODULE_ICONS[m.label] || ICONS.book}</div>
              <div className="coll-title">{m.label}</div>
              <div className="coll-desc">{MODULE_DESCS[m.label]}</div>
              <div className="coll-meta"><span>{m.count} articles</span></div>
            </a>
          ))}
        </div>

        {/* ── TRAINING VIDEOS ── */}
        <div className="sh">
          <div>
            <span className="sh-title">Training videos</span>
            <span className="sh-sub">Walkthroughs of key features</span>
          </div>
          <a className="sh-link" href="https://help.illumine.app/en/collections/product-training-videos">View all 16 →</a>
        </div>
        <div className="vtabs">
          {VIDEO_TABS.map(t => (
            <button key={t} className={`vtab${activeVTab === t ? " on" : ""}`} onClick={() => setActiveVTab(t)}>{t}</button>
          ))}
        </div>
        <div className="vgrid">
          {mainVids.map(v => (
            <a key={v.id} className="vcard" href={v.href} target="_blank" rel="noreferrer"
              onMouseEnter={() => setHovV(v.id)} onMouseLeave={() => setHovV(null)}>
              <div className="vthumb">
                <div className="vplay-btn"><PlayIco hovered={hovV === v.id} /></div>
                <span className="vdur">{v.duration}</span>
                {v.popular && <span className="vpop">Popular</span>}
              </div>
              <div className="vbody">
                <div className="vmod">{v.module}</div>
                <div className="vtitle">{v.title}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="vpills">
          {pillVids.map(v => (
            <a key={v.id} className="vpill" href={v.href} target="_blank" rel="noreferrer">
              <PlayIco />
              {v.title.length > 40 ? v.title.slice(0, 40) + "…" : v.title}
              <span className="vpill-dur">{v.duration}</span>
            </a>
          ))}
        </div>

        {/* ── PRODUCT UPDATES ── */}
        <div className="sh">
          <div>
            <span className="sh-title">Product updates</span>
            <span className="sh-sub">What's new in illumine</span>
          </div>
          <a className="sh-link" href="https://help.illumine.app/en/collections/product-updates">Full history →</a>
        </div>
        <div className="rel-wrap">
          <div className="rel-nav">
            {RELEASES.map((r, i) => (
              <div key={i} className={`rel-ni${activeRel === i ? " on" : ""}`} onClick={() => setActiveRel(i)}>
                <div className="rel-ni-tag">{r.tag}{r.latest ? " · Latest" : ""}</div>
                <div className="rel-ni-title">{r.title}</div>
              </div>
            ))}
          </div>
          <div className="rel-body">
            <div className="rel-hdr">
              <div>
                {rel.latest && (
                  <div className="rel-badge" style={{ marginBottom: 8 }}>
                    <span className="rel-badge-dot"/><span className="rel-badge-text">Latest release</span>
                  </div>
                )}
                <div className="rel-title">{rel.title}</div>
              </div>
              <a className="rel-btn" href={rel.href} target="_blank" rel="noreferrer">Read notes</a>
            </div>
            <div className="rel-items">
              {rel.highlights.map((h, i) => (
                <div key={i} className="rel-row">
                  <div className="rel-dot"/>
                  <div className="rel-text">{h}</div>
                </div>
              ))}
            </div>
            <div className="rel-footer">
              <a className="rel-all" href="https://help.illumine.app/en/collections/product-updates">← All release notes</a>
              <span className="rel-rss"><RssIco /> RSS feed</span>
            </div>
          </div>
        </div>

        {/* ── POPULAR + SIDEBAR ── */}
        <div className="bot">
          <div>
            <div className="sh" style={{ marginTop: 0, marginBottom: 14 }}>
              <div><span className="sh-title">Most viewed</span><span className="sh-sub" style={{ marginLeft: 8 }}>What others are reading</span></div>
            </div>
            <div className="pop-list">
              {POPULAR.map((a, i) => (
                <a key={i} className="pop-row" href={a.href}>
                  <div className="pop-n">{i + 1}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="pop-t">{a.title}</div>
                    <div className="pop-meta">
                      <span className="pop-m">{a.views} views</span>
                      <span className="pop-m">·</span>
                      <span className="pop-m">{a.time} read</span>
                    </div>
                  </div>
                  <span className="pop-chev"><Chev /></span>
                </a>
              ))}
            </div>
          </div>

          <div className="sidebar">
            <div className="sc">
              <div className="sc-title">Need help?</div>
              <div className="sc-opts">
                {CONTACT_OPTIONS.map(o => (
                  <a key={o.label} className="sc-opt" href={o.href} target="_blank" rel="noreferrer">
                    <div>
                      <div className="sc-opt-l">{o.label}</div>
                      <div className="sc-opt-s">{o.sub}</div>
                    </div>
                    <Chev size={13} />
                  </a>
                ))}
              </div>
            </div>
            <div className="sc">
              <div className="sc-title">Your region</div>
              {REGIONS.map(r => (
                <a key={r.label} className="sc-reg" href={r.href}>
                  <span style={{ fontSize: 17 }}>{r.flag}</span>
                  <div>
                    <div className="sc-reg-l">{r.label}</div>
                    <div className="sc-reg-s">{r.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div className="footer">
        <span className="footer-l">© {new Date().getFullYear()} illumine Technology Inc.</span>
        <div className="footer-links">
          {FOOTER_LINKS.map(l => (
            <a key={l.label} className="footer-link" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      </div>
    </div>
  )
}
