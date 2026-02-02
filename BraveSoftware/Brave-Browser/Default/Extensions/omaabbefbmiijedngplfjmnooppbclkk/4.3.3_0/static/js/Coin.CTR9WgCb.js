import{bR as he,bS as be,b7 as je,aK as z,bn as ge,r as u,j as e,bT as y,bU as A,I as v,b9 as V,B as x,bb as W,O as B,u as Te,a as _e,b as ye,A as H,S as Ae,bV as L,bi as k,bW as O,bX as S,bY as N,bZ as J,i as b,b_ as Y,bj as Z,b$ as Q,d as $,c0 as D,c1 as ee,c2 as ve,J as Se,c3 as G,e as Ne,c4 as R,c5 as g,K as p,c6 as Re,s as i,c7 as te,c8 as Fe,c9 as Ce,ca as Be,cb as we,cc as se,cd as ke,ce as Oe,cf as $e,cg as De,ch as Ie,M as Ee,ci as ne,a1 as w,cj as Pe,ck as Ue,cl as ae,cm as Me,cn as We,aG as He,bL as Le,co as re,cp as Je,cq as Ge,cr as oe,F as Ke,cs as qe,b3 as K,b4 as Xe,b5 as ze,bF as ie,ct as Ve,cu as Ye,bB as Ze,N as Qe,be as et}from"./main.D-W_HyrW.js";import{u as tt,M as st}from"./MobileActivityList.CAJRTrKr.js";import{S as nt,R as at,a as rt,H as ce}from"./TonActions.dvzfGosf.js";import{u as ot}from"./useSwapAssets.DGCCkmDf.js";import it from"./EmptyActivity.CCr1r4mm.js";import{e as q}from"./useSwapMobileNotification.B1rUZ3HN.js";const F=({assetAddress:t,innerRef:s})=>{const{standalone:n}=Te(),{refetch:r,isFetched:a,fetchNextPage:o,hasNextPage:l,isFetchingNextPage:c,data:d}=_e(t);ye(r,5e3,s);const m=c;return tt(l,m,o,n,s),!a||!d?e.jsx(H,{}):d.length===0?e.jsx(u.Suspense,{fallback:e.jsx(H,{}),children:e.jsx(it,{})}):e.jsxs(e.Fragment,{children:[e.jsx(st,{items:d}),m&&e.jsx(Ae,{size:3})]})},ct=({info:t,balance:s})=>{const[n,r]=u.useMemo(()=>[L(s).relativeAmount.toNumber(),z.Address.parse(s.jetton.address).toString()],[t,s]),{data:a}=k(r),o=O(n,t.metadata.decimals),{fiatAmount:l}=S(a,n),{description:c,image:d}=t.metadata,m=L(s);return e.jsx(N,{amount:o,symbol:t.metadata.symbol,price:l,description:c,image:m.image??d,noImageCorners:m.asset.noImageCorners})},lt=({jettonAddress:t})=>{const{data:s}=he(t),{data:n}=be(t),r=je(),{data:a}=ot(),o=z.Address.parse(t),l=o.toRawString(),c=r?void 0:a?.find(m=>ge(m.address)===l),d=u.useRef(null);return!s||!n||!a?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsx(A,{title:s.metadata.name}),e.jsxs(v,{ref:d,children:[e.jsx(ct,{balance:n,info:s}),e.jsxs(V,{children:[!r&&e.jsx(nt,{asset:s.metadata.address,chain:x.TON}),e.jsx(at,{jetton:s.metadata.address}),e.jsx(W,{feature:B.SWAPS,children:e.jsx(W,{feature:B.ETHENA,applied:q(o,J.USDe)||q(o,J.tsUSDe),children:c&&e.jsx(rt,{fromAsset:c})})})]}),e.jsx(F,{assetAddress:n.jetton.address,innerRef:d})]})]})},dt=({info:{balance:t}})=>{const{t:s}=b(),n=u.useMemo(()=>Q(t),[t]),r=O(n),{data:a}=k(Z.TON),{fiatAmount:o}=S(a,n);return e.jsx(N,{amount:r,symbol:"TON",price:o,description:s("Ton_page_description"),image:"https://wallet.tonkeeper.com/img/toncoin.svg"})},ut=()=>{const{t}=b(),s=u.useRef(null),{data:n}=Y();return n?e.jsxs(e.Fragment,{children:[e.jsx(A,{title:t("Toncoin")}),e.jsxs(v,{ref:s,children:[e.jsx(dt,{info:n}),e.jsx(ce,{chain:x.TON}),e.jsx(F,{innerRef:s,assetAddress:Z.TON})]})]}):e.jsx(y,{activity:4})},mt=()=>{const t=$(),s=D(),{onOpen:n}=ee();return{onOpen:u.useCallback(a=>{if(a?.chain===x.TRON&&s.total===0)return n();t.uiEvents.emit("transfer",{method:"transfer",id:Date.now(),params:{...a,from:"wallet"}})},[t])}},pt=i.div`
    width: 100%;
    height: 1px;
    background-color: ${t=>t.theme.separatorCommon};

    ${t=>t.theme.displayType==="compact"&&p`
            display: none;
        `}
`,ft=i.div`
    display: grid;
    padding: 12px 16px;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    gap: 6px;

    ${R};
    grid-template-areas: 'a b c';

    ${t=>(t.theme.proDisplayType==="mobile"||t.theme.displayType==="compact")&&p`
            ${g};
            padding: 16px;
            grid-template-columns: auto 1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
                'a b'
                'c b';
        `}

    ${t=>t.theme.displayType==="compact"&&p`
            ${Re};
            background-color: ${t.theme.backgroundContent};
            border-radius: ${t.theme.cornerSmall};
            margin: 16px 0;
        `}

    > *:first-child {
        grid-area: a;
    }
    > *:nth-child(2) {
        grid-area: b;
    }
    > *:nth-child(3) {
        grid-area: c;
    }
`,xt=i(re)`
    ${R};
    justify-self: end;
    color: ${t=>t.theme.textSecondary};

    ${t=>(t.theme.proDisplayType==="mobile"||t.theme.displayType==="compact")&&p`
            ${g};
            justify-self: start;
            color: ${t.theme.accentBlue};
        `}

    ${t=>t.theme.displayType==="compact"&&p`
            ${ae};
        `}
`,ht=i.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`,bt=i(Je)`
    .tron-fee-info-container {
        max-height: unset;
        width: 280px;
        right: -120px;
        top: 24px;
    }

    > *:first-child {
        height: 12px;
    }
`,jt=()=>{const{t}=b(),{onOpen:s}=ee(),{total:n}=D(),{isOpen:r,onClose:a,onOpen:o}=ve(),l=Se();if(n===void 0)return null;const c=l.displayType==="full-width"&&l.proDisplayType==="desktop";return e.jsxs(e.Fragment,{children:[e.jsxs(ft,{children:[e.jsx("span",{children:t("tron_fee_banner_available_label",{transfers:n})}),e.jsx(ht,{children:c?e.jsx(bt,{payload:()=>e.jsx(X,{}),trigger:"click",containerClassName:"tron-fee-info-container",children:e.jsx(G,{})}):e.jsx(gt,{onClick:o,children:e.jsx(G,{})})}),e.jsx(xt,{onClick:s,children:t("tron_fee_banner_fee_options")})]}),e.jsx(pt,{}),e.jsx(Ne,{title:t("tron_fee_banner_available_fee_options"),isOpen:r,handleClose:a,children:()=>e.jsx(X,{})})]})},gt=i(Ge)`
    padding: 8px;

    > svg {
        width: 16px;
        height: 16px;
    }
`,Tt=i.div`
    border-radius: ${t=>t.theme.corner2xSmall};
    background-color: ${t=>t.theme.prodisplayType==="mobile"||t.theme.displayType==="compact"?t.theme.backgroundContent:t.theme.backgroundContentTint};
`,I=i.div`
    padding: 10px 16px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    flex-direction: column;

    *:nth-child(2),
    *:nth-child(4) {
        justify-self: flex-end;
    }

    &:not(:last-child) {
        border-bottom: 1px solid ${t=>t.theme.separatorAlternate};
    }
`,_t=i(I)`
    display: block;
`,_=()=>e.jsx(We,{width:"100px",height:"14px",marginTop:"2px"}),yt=i(re)`
    ${R};
`,j=i.span`
    ${R};

    ${t=>t.theme.proDisplayType==="mobile"&&p`
            ${g};
        `}

    ${t=>t.theme.displayType==="compact"&&p`
            ${ae};
        `}
}
`,h=i(oe)`
    color: ${t=>t.theme.textSecondary};

    ${t=>t.theme.displayType==="compact"&&p`
            ${g};
        `}
`,At=i(oe)`
    white-space: nowrap;
    ${t=>t.theme.displayType==="compact"&&p`
            ${g};
        `}
`,X=()=>{const{t}=b(),s=$(),n=te(),{data:r}=Fe(),{batterySenderFee:a,tonSenderFee:o,trxSenderFee:l}=Ce(),{batteryTransfers:c,tonTransfers:d,trxTransfers:m}=D(),{data:E}=Be(),{data:le}=we(),{data:de}=se(),{faq_tron_fee_url:P}=ke(),{data:f}=Oe(),ue=$e(),{onOpen:me}=De(),{onOpen:pe}=Ie(),T=Ee(B.TRON),fe=typeof c=="number"&&c>0,U=M=>{s.uiEvents.emit("receive",{method:"receive",params:{chain:M==="ton"?x.TON:x.TRON,jetton:M==="ton"?He.id:Le.id}})},xe=()=>{Me(r)?pe():me()};return e.jsxs(Tt,{children:[T&&e.jsxs(I,{children:[e.jsx(j,{children:t("tron_fee_table_free_transfer_title")}),f===void 0?e.jsx("span",{}):f.type==="inactive"?e.jsx(vt,{primary:!0,size:"small",onClick:xe,children:t("pro_subscription_get_pro")}):f.availableTransfersNumber>0?e.jsx(j,{children:t("tron_fee_table_free_transfer_transfers_left",{number:f.availableTransfersNumber})}):e.jsx(j,{children:t("tron_fee_table_free_transfer_no_transfers_left")}),f===void 0?e.jsx(_,{}):f.type==="inactive"?e.jsx(h,{children:t("tron_fee_table_free_transfer_subtitle_inactive")}):f.availableTransfersNumber>0?e.jsx(h,{children:t("tron_fee_table_free_transfer_subtitle_active")}):e.jsxs("span",{children:[e.jsx(h,{children:t("tron_fee_table_free_transfer_subtitle_active")}),e.jsx(ne,{}),e.jsx(h,{children:t("tron_fee_table_free_transfer_subtitle_used_next_on_date",{date:ue(f.rechargeDate,{day:"numeric",month:"long"})})})]}),e.jsx("span",{})]}),(T||fe)&&e.jsx(C,{heading:"Tonkeeper Battery",formattedBalance:E?t("battery_charges",{charges:E?.batteryUnitsBalance.toString()??0}):void 0,transfersNumber:c,fiatPerTransfer:a.charges!==void 0?t("battery_charges",{charges:a.charges}):void 0,onRefill:T?()=>n(w.walletSettings+Pe.battery,{disableMobileAnimation:!0}):null}),T&&e.jsx(C,{heading:"Toncoin",formattedBalance:le?.stringAssetRelativeAmount,transfersNumber:d,fiatPerTransfer:o.fiatAmount,onRefill:()=>U("ton")}),e.jsx(C,{heading:"TRX",formattedBalance:de?.trx.stringAssetRelativeAmount,transfersNumber:m,fiatPerTransfer:l.fiatAmount,onRefill:()=>U("trx")}),!!P&&e.jsxs(_t,{children:[e.jsx(h,{children:t("tron_fee_table_disclaimer")})," ",e.jsx(Ue,{colored:!0,href:P,children:e.jsx(At,{children:t("learn_more")})})]})]})},C=({heading:t,transfersNumber:s,formattedBalance:n,fiatPerTransfer:r,onRefill:a})=>{const{t:o}=b();return e.jsxs(I,{children:[e.jsx(j,{children:t}),s===void 0?e.jsx(_,{}):e.jsx(j,{children:o("tron_fee_table_transfers",{transfers:s})}),n===void 0?e.jsx(_,{}):e.jsxs("span",{children:[e.jsx(h,{children:n}),!!a&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),e.jsx(yt,{onClick:a,children:o("tron_fee_start_banner_button")})]})]}),r===void 0?e.jsx(_,{}):e.jsx(h,{children:o("tron_fee_table_charges_per_one",{fiat:r})})]})},vt=i(Ke)`
    grid-row: span 2;
    height: 32px;
`,St=({assetAmount:t})=>{const{data:s}=Ve(),{fiatAmount:n}=S(s,t.relativeAmount);return e.jsx(N,{amount:t.stringRelativeAmount,symbol:t.asset.symbol,price:n,image:t.asset.image,noImageCorners:t.asset.noImageCorners})},Nt=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Rt=()=>{const t=se().data?.usdt,s=u.useRef(null),n=$(),{onOpen:r}=mt();return t===void 0?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsx(A,{title:e.jsxs(Nt,{children:[t.asset.name,e.jsx(qe,{children:"TRC20"})]})}),e.jsxs(v,{ref:s,children:[e.jsx(St,{assetAmount:t}),e.jsxs(V,{children:[e.jsx(K,{icon:e.jsx(Xe,{}),title:"wallet_send",action:()=>r({chain:x.TRON})}),e.jsx(K,{icon:e.jsx(ze,{}),title:"wallet_receive",action:()=>n.uiEvents.emit("receive",{method:"receive",params:{chain:x.TRON,jetton:t.asset.id}})})]}),e.jsx(jt,{}),e.jsx(F,{assetAddress:ie.address,innerRef:s})]})]})},Ft=({extra:t})=>{const s=u.useMemo(()=>Q(t.amount,t.preview.decimals),[t]),n=O(s),{data:r}=k(t.preview.symbol),{fiatAmount:a}=S(r,s);return e.jsx(N,{amount:n,symbol:t.preview.symbol,price:a,image:t.preview.image})},Ct=({name:t})=>{const{t:s}=b(),n=u.useRef(null),{data:r}=Y(),a=r?.extraBalance?.find(o=>o.preview.symbol===t);return a?e.jsxs(e.Fragment,{children:[e.jsx(A,{title:t}),e.jsxs(v,{ref:n,children:[e.jsx(Ft,{extra:a}),e.jsx(ce,{chain:x.TON}),e.jsx(F,{innerRef:n,assetAddress:a.preview.symbol})]})]}):e.jsx(y,{activity:4})},It=()=>{const t=te(),{name:s}=Ye(),n=Ze();return u.useEffect(()=>{s||t(w.home)},[s]),s?s===ie.id?n?e.jsx(Rt,{}):e.jsx(Qe,{to:w.home}):s==="ton"?e.jsx(ut,{}):et(decodeURIComponent(s))?e.jsx(lt,{jettonAddress:decodeURIComponent(s)}):e.jsx(Ct,{name:s}):e.jsx(e.Fragment,{})};export{It as default};
