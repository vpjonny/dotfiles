import{K as h,s as c,i as x,j as t,ab as f,de as M,df as V,E as B,r as l,c7 as y,ct as H,bX as C,ad as A,a8 as v,a1 as L,aG as p,a7 as E,bi as K,bj as D,dg as G,u as q,bl as z,dh as J,bn as Q,a0 as X,di as Y,bk as Z,as as ee,aA as te,aB as se,dj as ne,e as ie,bG as ae,dk as oe,dl as re,d as ce,dm as k,dn as _,aK as le,dp as de,ah as ue,dq as me,dr as he,co as fe,ds as xe,dt as ge,du as pe,dv as be,dw as je,B as ye,M as Ce,O as Ae}from"./main.D-W_HyrW.js";import{N as $}from"./Nfts.DK_01cEK.js";import{e as N}from"./useSwapMobileNotification.B1rUZ3HN.js";import{H as ve}from"./TonActions.dvzfGosf.js";const w=c.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
    box-sizing: border-box;
    gap: 1rem;
    width: 100%;

    ${e=>e.theme.proDisplayType==="mobile"&&h`
            padding: 0.5rem 1rem 0.5rem 0;
        `}
`,S=c(M)`
    width: 44px;
    height: 44px;
    border-radius: ${e=>e.theme.cornerFull};

    pointer-events: none;

    ${e=>e.theme.proDisplayType==="mobile"&&h`
            width: 40px;
            height: 40px;
        `}
`,Le=c.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    white-space: nowrap;
`,we=c.div`
    display: grid;
    grid-template-columns: auto 1fr 0fr;
    gap: 0.25rem;
    width: 100%;
`,Se=c(f)`
    text-overflow: ellipsis;
    overflow: hidden;

    display: flex;
    align-items: center;
`,Te=c(V)`
    display: inline-block;
    margin-left: 8px;
    padding: 3px 4px;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.displayType==="full-width"?e.theme.backgroundContentTint:e.theme.backgroundContentAttention};
    color: ${e=>e.theme.textSecondary};
`,Ee=c.div`
    display: flex;
    justify-content: space-between;
`,R=c(B)`
    color: ${e=>e.theme.textSecondary};
`,ke=c(f)`
    color: ${e=>e.theme.textSecondary};
`,_e=c.span`
    color: ${e=>e.theme.accentOrange};
`,T=({name:e,symbol:s,balance:i,secondary:n,fiatAmount:a,label:o,rate:r,verification:d})=>{const{t:m}=x();return t.jsxs(Le,{children:[t.jsxs(we,{children:[t.jsxs(Se,{children:[s??e,o?t.jsx(Te,{className:"coin-label",children:o}):null]}),t.jsx(ke,{}),t.jsx(f,{children:i})]}),t.jsxs(Ee,{children:[t.jsx(R,{children:d&&d!=="whitelist"?t.jsx(_e,{children:m("approval_unverified_token")}):t.jsxs(t.Fragment,{children:[n," ",t.jsx(Re,{data:r})]})}),t.jsx(R,{children:a})]})]})},Ne=c.span`
  margin-left: 0.5rem;
  opacity: 0.64;

  ${e=>e.positive?h`
                color: ${e.theme.accentGreen};
            `:h`
                color: ${e.theme.accentRed};
            `}}
`,Re=({data:e})=>{if(!e||!e.diff24h||e.diff24h==="0.00%")return null;const s=e.diff24h.startsWith("+");return t.jsx(Ne,{positive:s,children:e.diff24h})},Fe=l.forwardRef(({assetAmount:e,className:s},i)=>{const n=y(),{data:a}=H(),{fiatPrice:o,fiatAmount:r}=C(a,e.relativeAmount),d=A();return t.jsx(v,{onClick:()=>n(L.coins+"/"+e.asset.id,{replace:!1}),className:s,ref:i,backgroundHighlighted:d,children:t.jsxs(w,{children:[t.jsx(S,{src:e.image,noRadius:e.asset.noImageCorners}),t.jsx(T,{name:e.asset.name,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:o,fiatAmount:r,label:"TRC20",rate:a})]})})}),Be=l.forwardRef(({balance:e,className:s},i)=>{const{t:n}=x(),a=y(),{data:o}=K(D.TON),{fiatPrice:r,fiatAmount:d}=C(o,e.relativeAmount),m=A();return t.jsx(v,{onClick:()=>a(L.coins+"/ton",{replace:!1}),className:s,ref:i,backgroundHighlighted:m,children:t.jsxs(w,{children:[t.jsx(S,{src:p.image,noRadius:p.noImageCorners}),t.jsx(T,{name:n("Toncoin"),symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:r,fiatAmount:d,rate:o})]})})}),$e=l.forwardRef(({balance:e,className:s},i)=>G(e.asset)?t.jsx(Fe,{ref:i,assetAmount:e,className:s}):t.jsx(Ie,{ref:i,balance:e,className:s})),Ie=l.forwardRef(({balance:e,className:s},i)=>{const{t:n}=x(),a=y(),{fiat:o}=q(),{data:r}=z(),d=l.useMemo(()=>{const b=r?.balances.find(U=>N(U.jetton.address,e.asset.address));return b?.price?J(b.price,o):void 0},[r,o]),{fiatPrice:m,fiatAmount:O}=C(d,e.relativeAmount),W=l.useMemo(()=>r?.balances.find(b=>N(b.jetton.address,e.asset.address))?.jetton.verification,[r,o]),P=A();return t.jsx(v,{onClick:()=>a(L.coins+`/${encodeURIComponent(Q(e.asset.address))}`,{replace:!1}),className:s,ref:i,backgroundHighlighted:P,children:t.jsxs(w,{children:[t.jsx(S,{src:e.asset.image,noRadius:e.asset.noImageCorners}),t.jsx(T,{name:e.asset.name??n("Unknown_COIN"),verification:W,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:m,fiatAmount:O,rate:d})]})})}),I=({assets:e})=>{const[s,i]=l.useMemo(()=>[e.find(n=>n.asset.id===p.id),e.filter(n=>n.asset.id!==p.id)],[e]);return t.jsxs(t.Fragment,{children:[t.jsx(E,{noUserSelect:!0,children:t.jsx(Be,{balance:s})}),t.jsx(E,{noUserSelect:!0,children:i.map(n=>t.jsx($e,{balance:n},n.asset.id))})]})},Oe=({assets:e,nfts:s})=>t.jsxs(t.Fragment,{children:[t.jsx(I,{assets:e}),t.jsx($,{nfts:s})]}),We=c.div`
    display: flex;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    justify-content: center;
    gap: 2.25rem;

    user-select: none;
`,F=c.div`
    cursor: pointer;

    padding: 0.5rem;
    margin: -0.5rem;
    box-sizing: border-box;

    ${e=>e.active?h`
                  color: ${e.theme.textPrimary};
              `:h`
                  color: ${e.theme.textSecondary};
              `}
`,Pe=c.div`
    position: absolute;
    height: 3px;
    width: 0px;
    bottom: -0.5rem;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.accentBlue};
`;var u;(function(e){e[e.TOKENS=0]="TOKENS",e[e.COLLECTIBLES=1]="COLLECTIBLES"})(u||(u={}));const Ue=({tab:e,onTab:s})=>{const{t:i}=x(),n=l.useRef(null),a=l.useRef(null);return l.useEffect(()=>{if(n.current&&a.current){const o=n.current.childNodes[e],r=40;a.current.style.width=r+"px",a.current.style.left=o.offsetLeft+(o.clientWidth-r)/2+"px",window.requestAnimationFrame(()=>{a.current&&(a.current.style.transition="all 0.3s ease-in-out")})}},[n,a,e]),t.jsxs(We,{ref:n,children:[t.jsx(F,{active:e===u.TOKENS,onClick:()=>s(u.TOKENS),children:t.jsx(f,{children:i("jettons_list_title")})}),t.jsx(F,{active:e===u.COLLECTIBLES,onClick:()=>s(u.COLLECTIBLES),children:t.jsx(f,{children:i("wallet_collectibles_tab_lable")})}),t.jsx(Pe,{ref:a})]})},g="collectibles",Me=({assets:e,nfts:s})=>{const i=X(),[n,a]=Y(),o=l.useMemo(()=>new URLSearchParams(n).get(g)==="open"?u.COLLECTIBLES:u.TOKENS,[n,i]),r=l.useCallback(d=>{d===u.COLLECTIBLES?n.has(g)||n.append(g,"open"):n.has(g)&&n.delete(g),a(n,{replace:!0})},[n,a]);return t.jsxs(t.Fragment,{children:[t.jsx(Ue,{tab:o,onTab:r}),o===u.COLLECTIBLES?t.jsx($,{nfts:s}):t.jsx(I,{assets:e})]})},Ve=()=>{const e=Z(),s=ee(),i=s.activeTonWallet,n=s.type==="mnemonic"||s.type==="mam";return te([se.legacyPlugins,n,i.rawAddress,e],async()=>n?(await new ne(e.tonApiV2).getWalletInfo({accountId:i.rawAddress})).plugins.filter(o=>o.type==="subscription_v1"):[],{refetchInterval:a=>a?.length?3e4:0})},He=({onClose:e,pluginAddress:s})=>t.jsx(ie,{isOpen:!!s,handleClose:e,hideButton:!0,children:()=>!!s&&t.jsx(De,{onClose:e,pluginAddress:s})}),j=le.toNano(.05).toString(),Ke=new ue({weiAmount:j,asset:p}),De=({pluginAddress:e,onClose:s})=>{const i=ae(),n=oe(),a=re(),o=ce(),{t:r}=x(),d=l.useCallback(()=>{if(!k(i)||i.version!==_.V4R2)throw new Error("Unexpected wallet is used to unsubscribe from legacy subscription");return a.mutateAsync({selectedWallet:i,extensionContract:e,destroyValue:j}).then(m=>(m&&o.topMessage(r("unsubscribe_legacy_plugin_success_toast")),m))},[i,e,r]);return l.useEffect(()=>{if(!k(i)||i.version!==_.V4R2)return console.error("Unexpected wallet is used to unsubscribe from legacy subscription"),s();n.mutate({selectedWallet:i,extensionContract:e,destroyValue:j})},[]),t.jsx(de,{assetAmount:Ke,onClose:s,estimation:n,...a,mutateAsync:d,children:t.jsx(me,{children:t.jsx(he,{title:r("cancel_subscription"),caption:r("confirm_action")})})})},Ge=c.div`
    width: 100%;
    box-sizing: border-box;
    margin: 8px 0;

    background: ${e=>e.theme.accentOrange};
    border-radius: ${e=>e.theme.cornerSmall};
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: ${e=>e.theme.constantBlack};
`,qe=c.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
`,ze=c(fe)`
    color: ${e=>e.theme.constantBlack};
`,Je=({className:e,children:s})=>{const{data:i}=Ve(),{t:n}=x(),[a,o]=l.useState();return i?.length?t.jsxs(t.Fragment,{children:[s,t.jsxs(Ge,{className:e,children:[t.jsxs(qe,{children:[t.jsx(f,{children:n("unsubscribe_legacy_plugin_banner_title",{count:i.length})}),t.jsx(B,{children:n(i.length===1?"unsubscribe_legacy_plugin_banner_subtitle":"unsubscribe_legacy_plugin_many_banner_subtitle")})]}),t.jsx(ze,{onClick:()=>o(i[0].address),children:n("disable")})]}),t.jsx(l.Suspense,{children:t.jsx(He,{pluginAddress:a,onClose:()=>o(void 0)})})]}):null},Qe=({assets:e,nfts:s})=>{const i=Ce(Ae.NFT);return e.length+s.length<11||e.length<4||!i?t.jsx(Oe,{assets:e,nfts:s}):t.jsx(Me,{assets:e,nfts:s})},tt=()=>{const{isFetched:e}=xe(),{assets:s,error:i}=ge(),{data:n,isFetching:a}=pe(),o=!s||a;return!n||!s||!e?t.jsx(be,{}):t.jsxs(t.Fragment,{children:[t.jsx(Je,{}),t.jsx(je,{error:i,isFetching:o}),t.jsx(ve,{chain:ye.TON}),t.jsx(Qe,{assets:s,nfts:n})]})};export{tt as default};
