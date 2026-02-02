import{el as T,r as o,d as W,em as X,u as b,cd as B,en as Y,j as t,eo as z,ep as E,eq as I,z as L,cr as A,er as U,s as p,a7 as j,a8 as G,i as q,bO as K,es as Q,ab as N,a1 as P,et as M,eu as $,aA as J,aB as V,cu as Z,H,bU as ee,I as _,ev as m,ew as te,ex as ne,ey as se,ez as re,M as oe,O as ie,N as ae,eA as ce,eB as S}from"./main.D-W_HyrW.js";const de=(e,n,s)=>{const r=new Date,a=T.stringify({utm_source:"tonkeeper",utm_campaign:n==="recommendation"?"recom":`feat-${r.getMonth()+1}-${r.getFullYear()}`,utm_medium:s}),d=e.includes("?")?"&":"?";return`${e}${d}${a}`};function k(e,n,s,r){const a=o.useRef(n);o.useLayoutEffect(()=>{a.current=n},[n]),o.useEffect(()=>{if(!e)return;const d=s?.current??window;if(!(d&&d.addEventListener))return;const i=c=>a.current(c);return d.addEventListener(e,i,r),()=>{d.removeEventListener(e,i,r)}},[e,s,r])}function le({callback:e,precisionXPx:n,precisionYPx:s}){const r=o.useRef({clientX:0,clientY:0}),a=o.useRef(null),d=o.useCallback(c=>{r.current={clientY:c.clientY,clientX:c.clientX}},[]),i=o.useCallback(c=>{const f=Math.abs(c.clientX-r.current.clientX)<(n??10),l=Math.abs(c.clientY-r.current.clientY)<(s??10);f&&l&&e()},[e,n,s]);return k("mousedown",d,a),k("mouseup",i,a),a}function O(e,n){const s=W(),r=X(),{tonendpoint:a}=b(),d=B();return o.useCallback(()=>{r(i=>new Y({from:n==="featured"?"banner":"browser",url:e,location:i})),s.openPage(de(e,n,d.tonkeeper_utm_track),{forceExternalBrowser:!0})},[e,s,r,a])}function ue(){const e=o.useRef(!1);return o.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),o.useCallback(()=>e.current,[])}const R={width:void 0,height:void 0};function pe(e){const{ref:n,box:s="content-box"}=e,[{width:r,height:a},d]=o.useState(R),i=ue(),c=o.useRef({...R}),f=o.useRef(void 0);return f.current=e.onResize,o.useEffect(()=>{if(!n.current||typeof window>"u"||!("ResizeObserver"in window))return;const l=new ResizeObserver(([u])=>{const h=s==="border-box"?"borderBoxSize":s==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",x=v(u,h,"inlineSize"),g=v(u,h,"blockSize");if(c.current.width!==x||c.current.height!==g){const C={width:x,height:g};c.current.width=x,c.current.height=g,f.current?f.current(C):i()&&d(C)}});return l.observe(n.current,{box:s}),()=>{l.disconnect()}},[s,n,i]),{width:r,height:a}}function v(e,n,s){return e[n]?Array.isArray(e[n])?e[n][0][s]:e[n][s]:n==="contentBoxSize"?e.contentRect[s==="inlineSize"?"width":"height"]:void 0}function he(){const e=o.useRef(null),[n,s]=o.useState({width:0,height:0,scrollWidth:0,scrollHeight:0}),r=o.useCallback(()=>{s({width:e.current?.offsetWidth||0,height:e.current?.offsetHeight||0,scrollWidth:e.current?.scrollWidth||0,scrollHeight:e.current?.scrollHeight||0})},[]);return pe({ref:e,onResize:r}),[e,n]}const fe=p.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 1rem;
    gap: 1rem;
`,me=p.button`
    border: none;
    background: transparent;
    height: fit-content;
    width: fit-content;
    color: ${e=>e.theme.textAccent};
    cursor: pointer;
    padding: 4px 8px;
`,xe=p.div`
    padding-left: 1rem;
    padding-right: 1rem;
`,y=p(j)`
    width: ${e=>e.width} !important;
    margin-left: ${e=>e.marginLeft} !important;
    margin-bottom: 0;
`,D=p.div`
    margin-left: auto;
    margin-right: 1rem;
    color: ${e=>e.theme.iconTertiary};
    transition: transform 0.15s ease;
`,ge=p(G)`
    padding-left: 1rem;

    &:hover ${D} {
        transform: translateX(2px);
    }
`,je=({category:e,className:n})=>{const{t:s}=q(),{browserLength:r}=b(),[a,{width:d}]=he(),i=o.useMemo(()=>e.apps.reduce((l,u,h)=>(h%(r??3)===0?l.push([u]):l[l.length-1].push(u),l),[]),[e.apps]),c=o.useMemo(()=>i.map(l=>l.map(u=>u.url).join("")),[i]),f=i.length>1;return t.jsxs("div",{className:n,ref:a,children:[t.jsxs(fe,{children:[t.jsx(K,{children:e.title}),f&&t.jsx(Q,{to:P.browser+M.category+"/"+e.id,children:t.jsx(me,{children:t.jsx(N,{children:s("browser_apps_all")})})})]}),f?t.jsx($,{gap:"8px",infinite:!1,children:i.map((l,u)=>t.jsx(y,{children:l.map(h=>t.jsx(w,{item:h},h.url))},c[u]))}):i.map((l,u)=>t.jsx(xe,{children:t.jsx(y,{width:"100%",children:l.map(h=>t.jsx(w,{item:h},h.url))},c[u])},c[u]))]})},w=({item:e})=>{const n=O(e.url,"recommendation");return t.jsx(ge,{onClick:n,children:t.jsxs(z,{children:[t.jsx(E,{src:e.icon}),t.jsxs(I,{children:[t.jsx(L,{children:e.name}),t.jsx(A,{children:e.description})]}),t.jsx(D,{children:t.jsx(U,{})})]})},e.url)};function we(e){let n=e.length;for(;n!=0;){const s=Math.floor(Math.random()*n);n--,[e[n],e[s]]=[e[s],e[n]]}}function F(){const{tonendpoint:e}=b();return J([V.featuredRecommendations],async()=>{const n=await e.appsPopular();return n.categories=n.categories.filter(s=>s.id!=="featured"),n.apps&&we(n.apps),n})}const be=()=>{const{id:e}=Z(),{data:n}=F(),s=n?.categories.find(r=>r.id===e);return t.jsxs(H,{children:[t.jsx(ee,{title:s?.title}),t.jsx(_,{children:s?t.jsx(j,{children:s.apps.map(r=>t.jsx(w,{item:r},r.url))}):t.jsxs(j,{children:[t.jsx(m,{}),t.jsx(m,{}),t.jsx(m,{}),t.jsx(m,{}),t.jsx(m,{})]})})]})},Ce=p.div`
    width: 100%;
    aspect-ratio: 2 / 1;

    background-image: ${e=>`url(${e.img})`};
    background-size: cover;
    border-radius: ${e=>e.theme.cornerSmall};

    display: inline-flex !important;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
`,Se=p(z)`
    margin-left: 1rem;
`,ke=({apps:e,onClickApp:n,className:s,...r})=>{const d=B().featured_play_interval;return t.jsx($,{className:s,gap:"8px",centerPadding:"16px",autoplaySpeed:d,...r,children:e.map(i=>t.jsx(Re,{item:i,onClickApp:n},i.url))})},Re=({item:e,onClickApp:n})=>{const s=O(e.url,"featured"),r=o.useCallback(()=>{n?n(e):s()},[n,s,e]),a=le({callback:r});return t.jsx(Ce,{img:e.poster,ref:a,children:t.jsxs(Se,{children:[t.jsx(E,{src:e.icon}),t.jsxs(I,{color:e.textColor,children:[t.jsx(L,{children:e.name}),t.jsx(A,{children:e.description})]})]})})},ve=p(_)`
    padding: 0;
`,ye=p(ke)`
    margin-bottom: 1rem;
`,Be=p(je)`
    margin-bottom: 1rem;
`,ze=p.div`
    padding: 0 1rem;
`,Ee=()=>{const{data:e}=F();return te(),t.jsxs(H,{children:[t.jsx(ne,{}),t.jsx(ve,{children:e?t.jsxs(t.Fragment,{children:[e.apps.length>0?t.jsx(ye,{apps:e.apps}):null,e.categories.map(n=>t.jsx(Be,{category:n},n.id))]}):t.jsx(ze,{children:t.jsx(se,{})})})]})},Ae=()=>{const{path:e}=re();return oe(ie.DAPPS_LIST)?t.jsxs(ce,{children:[t.jsx(S,{path:e+`${M.category}/:id`,component:be}),t.jsx(S,{path:"*",component:Ee})]}):t.jsx(ae,{to:P.home})};export{Ae as default};
