import{bG as U,eC as We,ax as ce,av as H,ay as de,az as P,as as z,aA as le,aI as G,aE as ue,aC as fe,aF as xe,aL as me,r as x,eD as he,i as b,eE as Be,j as e,au as J,eF as pe,f as X,eG as ge,F as T,e as K,eH as Ve,dm as $e,ac as $,h as F,aK as M,eI as Me,ar as Ue,dp as Y,ah as je,eh as we,dq as Z,eJ as ke,a8 as V,a9 as E,eK as He,eL as Pe,eM as _e,ap as be,s as l,aJ as Ae,aG as Se,E as O,bN as ye,bI as Ce,T as Te,dr as ze,G as Ge,b7 as Ke,d as W,H as Qe,R as qe,eN as Je,cd as Ne,bO as ve,a7 as Le,ab as C,eO as Xe,eP as Ye,eQ as Ze,eR as Ie,eS as es,cO as ss,eT as ts,c2 as ns,a3 as as,a4 as se,eU as rs,c3 as os,eV as is,cp as cs,eW as ds,eX as Q,eY as ls,eZ as us,e_ as fs,e$ as xs,f0 as ms,f1 as te,a2 as hs,df as ps}from"./main.D-W_HyrW.js";import{u as I}from"./useTonRecipient.BwhAQOi0.js";import{u as Ee,t as gs,a as js,I as ws}from"./Nfts.DK_01cEK.js";function ne(s){return!!s.dns}function ee(s){const t=U();return s.sale!==void 0||!We(t.rawAddress,s.owner?.address)}const De=s=>{const t=ce(H),n=de(t),a=P(),o=z().activeTonWallet.rawAddress;return le(["estimate-link-nft",s.nftAddress,s.linkToAddress,a,n,o],async()=>{const i=new G(o);return a.estimate(await t(),i.encodeNftLink(s))},{enabled:!!t})},Re=s=>{const t=ue(),n=P(),a=z(),r=fe(),o=a.activeTonWallet.rawAddress;return xe(async()=>{const i=new G(o);return await n.send(await t(H),me,i.encodeNftLink(s)),r("link-dns"),!0})};function Fe(s,t){const[n,a]=x.useState(!1),[r,o]=x.useState(!1),[i,u]=x.useState(!1),d=x.useRef(s.data),c=async()=>{const m=await s.refetch();if(i&&a(!1),t(m.data,d.current)){a(!1),o(!0);return}d.current=m.data,setTimeout(c,1e3)};return x.useEffect(()=>()=>u(!0),[]),{isLoading:n,isCompleted:r,data:s.data,refetch:(m=1e4)=>{d.current=s.data,a(!0),u(!1),o(!1),setTimeout(()=>{n&&u(!0)},m),c()}}}const ae=({nft:s})=>{const t=he(),{t:n}=b(),a=Be(s),{data:r,isLoading:o}=a,i=r?.wallet?.address||"",{refetch:u,isLoading:d,isCompleted:c}=Fe(a,(m,f)=>!!f?.wallet?.address!=!!m?.wallet?.address);return x.useEffect(()=>{c&&t(n(i?"dns_address_linked":"dns_address_unlinked"))},[c,i]),i?e.jsx(Ts,{nft:s,linkedAddress:i,isLoading:d,refetch:u}):e.jsx(bs,{nft:s,isLoading:o||d,refetch:u})},ks=l(O)`
    cursor: pointer;
    color: ${s=>s.isDisabled?s.theme.textSecondary:s.theme.textAccent};
    pointer-events: ${s=>s.isDisabled?"none":"unset"};
`,_s=new Ae(.02),Oe=je.fromRelativeAmount({asset:Se,amount:_s}),bs=({nft:s,isLoading:t,refetch:n})=>{const a=J(),{t:r}=b(),[o,i]=x.useState(),u=U(),[d,c]=x.useState(u.rawAddress),m=v=>{if(o==="wallet")return i("confirm");i(void 0),v?n():c(u.rawAddress)},{recipient:f,isLoading:h}=I(s.address),{refetch:p,...g}=De({nftAddress:s.address,linkToAddress:d}),j=x.useCallback(async v=>{c(v),await p(),i("confirm")},[p,s.address]),w=Re({nftAddress:s.address,linkToAddress:d}),A=pe(d,u.rawAddress),S=X(),k=()=>e.jsxs(Y,{onClose:m,recipient:f,assetAmount:Oe,fitContent:!0,estimation:g,...w,children:[e.jsx(we,{}),e.jsx(Z,{}),e.jsxs(ke,{children:[e.jsx(V,{hover:!1,children:e.jsxs(E,{children:[e.jsx(He,{children:r(A?"dns_current_address":"wallet_address")}),e.jsx(Pe,{right:!0,text:$(F(d,S)),secondary:e.jsx(ks,{isDisabled:w.isLoading,onClick:()=>i("wallet"),children:r("replace")})})]})}),e.jsx(_e,{}),e.jsx(be,{})]})]}),_=x.useCallback(()=>e.jsx(ys,{onSave:j,isLoading:g.isFetching,domain:s.dns}),[j,g.isFetching]),D=ee(s),N=()=>{if(g.error){a(g.error);return}i("confirm")},y=ge(s.dns);return e.jsxs(e.Fragment,{children:[e.jsx(T,{type:"button",size:"large",secondary:!0,fullWidth:!0,disabled:D,loading:g.isFetching||h||t,onClick:N,children:r(y?"nft_link_username_button":"nft_link_domain_button")}),e.jsx(K,{title:r(o==="wallet"?"wallet_address":"nft_link_domain_button"),isOpen:!!o,handleClose:()=>m(),backShadow:!0,children:o==="wallet"?_:k})]})},As=l(ye)`
    color: ${s=>s.theme.textSecondary};
    margin-bottom: 1.5rem;
`,Ss=l(Ce)`
    align-items: flex-start;
`,ys=({onSave:s,isLoading:t,domain:n})=>{const{t:a}=b(),[r,o]=x.useState(""),[i,u]=x.useState(!1),d=x.useMemo(()=>{if(!i)return!0;try{return M.Address.parse(r),!0}catch{return!1}},[i,r]),c=m=>{m.stopPropagation(),m.preventDefault(),u(!0);try{s(M.Address.parse(r).toRawString())}catch(f){console.error(f)}};return e.jsxs(Ss,{onSubmit:c,children:[e.jsx(As,{children:a("add_dns_address").replace("%1%",n)}),e.jsx(Me,{id:"dns-address",disabled:t,isValid:d,value:r,onChange:o,label:a("wallet_address"),clearButton:!0}),e.jsx(Ue,{}),e.jsx(T,{fullWidth:!0,size:"large",primary:!0,disabled:!r,loading:t,children:"Save"})]})},Cs=l(O)`
    text-align: center;
    color: ${s=>s.theme.accentOrange};
`,re="",Ts=({nft:s,linkedAddress:t,isLoading:n,refetch:a})=>{const r=J(),{t:o}=b(),i=U(),[u,d]=x.useState(!1),c=_=>{d(!1),_===!0&&a()},{recipient:m,isLoading:f}=I(s.address),h=De({nftAddress:s.address,linkToAddress:re}),p=Re({nftAddress:s.address,linkToAddress:re}),g=()=>e.jsxs(Y,{onClose:c,recipient:m,assetAmount:Oe,fitContent:!0,estimation:h,...p,children:[e.jsx(we,{}),e.jsx(Z,{}),e.jsxs(ke,{children:[e.jsx(_e,{}),e.jsx(be,{})]})]}),j=ee(s),w=ge(s.dns),A=()=>{if(h.error){r(h.error);return}d(!0)},S=X(),k=Object.values($e(i)?Ve(i.publicKey,S):{}).every(({address:_})=>!pe(_.toRawString(),t));return e.jsxs(e.Fragment,{children:[e.jsx(T,{type:"button",size:"large",secondary:!0,fullWidth:!0,disabled:j,loading:h.isFetching||f||n,onClick:A,children:o("nft_unlink_domain_button").replace("{{address}}",$(F(t,S)))}),k&&!n&&e.jsx(Cs,{children:o(w?"tme_linked_with_another_address_warn":"dns_linked_with_another_address_warn")}),e.jsx(K,{title:o("confirm_unlink"),isOpen:u,hideButton:!0,handleClose:()=>c(),backShadow:!0,children:g})]})},Ns=s=>{const t=ce(H),n=de(t),a=P(),o=z().activeTonWallet.rawAddress;return le(["estimate-nft-renew",s.nftAddress,a,n,o],async()=>{const i=new G(o);return a.estimate(await t(),i.encodeNftRenew(s))},{enabled:!!t})},vs=s=>{const t=ue(),n=P(),a=z(),r=fe(),o=a.activeTonWallet.rawAddress;return xe(async()=>{const i=new G(o);return await n.send(await t(H),me,i.encodeNftRenew(s)),r("renew-dns"),!0})},Ls=l.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Es=l(T)`
    margin-bottom: 0.75rem;
`,Ds=l(O)`
    color: ${s=>s.danger?s.theme.accentRed:s.theme.textSecondary};
`,Rs=je.fromRelativeAmount({asset:Se,amount:new Ae(.02)}),Fs=1e3*60*60*24*366,Os={year:"numeric",hour:void 0,minute:void 0},Ws=({nft:s})=>{const t=he(),n=ee(s),a=J(),{t:r,i18n:{language:o}}=b(),i=new Intl.RelativeTimeFormat(Ge(o),{style:"long"}),u=Te(s),{data:d,isLoading:c}=u,{refetch:m,isLoading:f,isCompleted:h}=Fe(u,(y,v)=>!!y?.getTime()&&y.getTime()!==v?.getTime());x.useEffect(()=>{h&&t(r("renew_nft_renewed"))},[h]);const p=Ee(Date.now()+Fs,Os),[g,j]=x.useState(!1),w=y=>{j(!1),y&&m()},{recipient:A,isLoading:S}=I(s.address),k=Ns({nftAddress:s.address}),_=vs({nftAddress:s.address}),D=()=>{if(k.error){a(k.error);return}j(!0)};if(!c&&!d)return null;const N=gs(d);return e.jsxs(e.Fragment,{children:[e.jsxs(Ls,{children:[e.jsx(Es,{type:"button",disabled:n||f,loading:c||k.isFetching||S,onClick:D,size:"large",secondary:!0,fullWidth:!0,children:f?r("renew_nft_in_progress"):r("dns_renew_until_btn").replace("%{untilDate}",p)}),N!==""&&e.jsx(Ds,{danger:Number(N)<=30,children:r("renew_nft_expiration_date").replace("%1%",i.format(Number(N),"days"))})]}),e.jsx(K,{isOpen:g,hideButton:!0,handleClose:()=>w,backShadow:!0,children:()=>e.jsx(Y,{onClose:w,recipient:A,assetAmount:Rs,fitContent:!0,estimation:k,..._,children:e.jsx(Z,{children:e.jsx(ze,{title:r("dns_renew_title")})})})})]})},oe=s=>{const{marketplace:t}=s.metadata,n=M.Address.parse(s.address).toString();switch(t){case"getgems.io":return`https://getgems.io/nft/${n}`;default:return`https://getgems.io/nft/${n}`}},R=({url:s})=>{const{t}=b(),n=W();return e.jsx(Qe,{children:e.jsx(T,{size:"large",secondary:!0,fullWidth:!0,onClick:a=>{a.preventDefault(),a.stopPropagation(),n.openPage(s)},children:t("nft_open_in_marketplace")})})},B=({nftItem:s})=>{const t=W(),{t:n}=b(),a=U();return e.jsxs(e.Fragment,{children:[e.jsx(T,{primary:!0,size:"large",fullWidth:!0,disabled:s.sale!==void 0||s.owner?.address!==a.rawAddress,onClick:r=>{r.preventDefault(),r.stopPropagation(),t.uiEvents.emit("transferNft",{method:"transferNft",params:s})},children:n("nft_transfer_nft")}),s.sale&&e.jsx(Vs,{children:n("nft_on_sale_text")})]})},Bs=l(O)`
    width: 100%;
    color: ${s=>s.theme.textSecondary};
`,Vs=l(Bs)`
    width: 100%;
    padding: 0 1rem;
    text-align: left;
`,$s=({kind:s,nftItem:t})=>{if(Ke())return e.jsx(e.Fragment,{children:e.jsx(R,{url:oe(t)})});switch(s){case"token":return e.jsxs(e.Fragment,{children:[e.jsx(B,{nftItem:t}),e.jsx(R,{url:oe(t)})]});case"ton.dns":return e.jsxs(e.Fragment,{children:[e.jsx(B,{nftItem:t}),e.jsx(R,{url:`https://dns.ton.org/#${t.dns?.slice(0,-4)}`}),ne(t)&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{nft:t}),e.jsx(Ws,{nft:t})]})]});case"telegram.number":{const a=t.metadata.name.replace(/\s/g,"").slice(1);return e.jsxs(e.Fragment,{children:[e.jsx(B,{nftItem:t}),e.jsx(R,{url:`https://fragment.com/number/${a}`})]})}case"telegram.name":return e.jsxs(e.Fragment,{children:[e.jsx(B,{nftItem:t}),e.jsx(R,{url:`https://fragment.com/username/${t.dns?.slice(0,-5)}`}),ne(t)&&e.jsx(ae,{nft:t})]})}},Ms=l.div`
    width: 100%;
`,Us=l.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.625rem;
`,Hs=l(C)`
    cursor: pointer;
    color: ${s=>s.theme.textAccent};
`,q=l(ye)`
    color: ${s=>s.theme.textSecondary};
`,Ps=qe.memo(({nftItem:s})=>{const{t}=b(),{data:n}=Je(s.address),{data:a,isLoading:r}=Te(s),o=Ee(a,{year:"numeric",hour:void 0,minute:void 0}),i=n??s,u=W(),d=Ne(),c=i.owner?.address,m=M.Address.parse(i.address).toString(),f=X(),h=d.NFTOnExplorerUrl,p=F(m,f,!0);return e.jsxs(Ms,{children:[e.jsxs(Us,{children:[e.jsx(ve,{children:t("nft_details")}),e.jsx(Hs,{onClick:()=>u.openPage(h.replace("%s",m)),children:t("view_transaction")})]}),e.jsxs(Le,{margin:!1,children:[c&&e.jsx(V,{onClick:()=>u.copyToClipboard(F(c,f)),children:e.jsxs(E,{children:[e.jsx(q,{children:t("nft_owner_address")}),e.jsx(C,{children:$(F(c,f))})]})}),!!(a||r)&&e.jsx(V,{hover:!1,children:e.jsxs(E,{children:[e.jsx(q,{children:t("dns_expiration_date")}),a?e.jsx(C,{children:o}):e.jsx(Xe,{})]})}),e.jsx(V,{onClick:()=>u.copyToClipboard(p),children:e.jsxs(E,{children:[e.jsx(q,{children:t("nft_contract_address")}),e.jsx(C,{children:$(p)})]})})]})]})}),ie=l.div`
    display: flex;
    flex-direction: column;
    padding: 0.875rem 1rem;
`,zs=l.div`
    border-top: 1px solid ${s=>s.theme.separatorCommon};
`,Gs=l(C)`
    margin-bottom: 0.5rem;
`,Ks=l.span`
    position: relative;
    top: 3px;
    margin-left: 4px;
`,Qs="0:b774d95eb20543f186c06b371ab88ad704f7e256130caf96189368a7d0cb6ccf",qs="0:80d78a35f955a14b679faa887ff4cd5bfc0f43b4a4eea2a7e6927f3701b273c2",Js="0:0e41dc1dc3c9067ed24248580e12b3359818d83dee0304fabcf80845eafafdb2",Xs=l(hs)`
    word-break: break-word;

    user-select: none;
`,Ys=l(ps)`
    color: ${s=>s.theme.textSecondary};
    border: 1px solid ${s=>s.theme.buttonTertiaryBackground};
    border-radius: 6px;
    padding: 3.5px 6px 4.5px;
    text-transform: uppercase;

    position: relative;
    top: -3px;

    white-space: nowrap;
`,Zs=l(O)`
    color: ${s=>s.isTrusted?s.theme.textSecondary:s.theme.accentOrange};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Is=l.div`
    text-align: center;
`,et=l.div`
    display: flex;
    gap: 8px;
    width: 100%;

    > * {
        flex: 1;
    }
`,st=l.div`
    .drop-down-container {
        z-index: 100;
        top: calc(100% + 12px);
        right: 0;
    }
`,tt=l(Le)`
    margin: 0;

    svg {
        color: ${s=>s.theme.accentBlue};
    }
`,nt=({onClose:s,nftItem:t})=>{const{mutateAsync:n,isLoading:a}=Ye(),{mutate:r,isLoading:o}=Ze(),{mutateAsync:i}=Ie(),{data:u}=es(),d=t.trust!==ss.Whitelist,c=!!u?.trustedNfts.includes(t.collection?.address||t.address),m=x.useRef(null),{t:f}=b(),{data:h}=ts(t),{description:p}=t.metadata,g=t.dns??t.metadata.name,j=x.useMemo(()=>{switch(t.collection?.address){case Qs:return"ton.dns";case qs:return"telegram.name";case Js:return"telegram.number";default:return"token"}},[t]),w=t?.collection?.name,A=t.previews?.find(L=>L.resolution==="1500x1500"),{isOpen:S,onClose:k,onOpen:_}=ns(),D=L=>{L==="mark_spam"?n(t).then(s):L==="mark_trusted"&&r(t),k()},N=Ne(),y=W(),v=N.NFTOnExplorerUrl;return e.jsxs(Ce,{children:[s&&e.jsxs(as,{children:[e.jsx(se,{onClick:s,children:e.jsx(rs,{})}),e.jsxs(Is,{children:[e.jsx(ve,{children:t.dns??t.metadata.name}),d&&e.jsxs(Zs,{isTrusted:c,onClick:_,children:[f("suspicious_label_full")," ",e.jsx(os,{color:c?"textSecondary":"accentOrange"})]})]}),e.jsx(is,{isOpen:S,onClose:D,isTrusted:c}),e.jsx(st,{children:e.jsx(cs,{containerClassName:"drop-down-container",payload:L=>e.jsxs(tt,{children:[e.jsx(Q,{onClick:()=>{L(),i(t).then(s)},children:e.jsxs(E,{children:[e.jsx(C,{children:f("nft_actions_hide_nft")}),e.jsx(ls,{})]})}),e.jsx(Q,{onClick:()=>{L(),n(t).then(s)},children:e.jsxs(E,{children:[e.jsx(C,{children:f("nft_actions_hide_and_report")}),e.jsx(us,{})]})}),e.jsx(Q,{onClick:()=>y.openPage(v.replace("%s",t.address)),children:e.jsxs(E,{children:[e.jsx(C,{children:f("nft_actions_view_on_explorer")}),e.jsx(fs,{})]})})]}),children:e.jsx(se,{children:e.jsx(ds,{})})})})]}),d&&!c&&e.jsxs(et,{children:[e.jsx(T,{warn:!0,type:"button",onClick:()=>n(t).then(s),loading:a,children:f("suspicious_buttons_report")}),e.jsx(T,{type:"button",onClick:()=>r(t),loading:o,children:f("suspicious_buttons_not_spam")})]}),e.jsxs(js,{children:[A&&e.jsx(ws,{ref:m,url:A.url}),e.jsxs(ie,{children:[e.jsxs(Xs,{children:[g,t.sale&&e.jsxs(e.Fragment,{children:["  ",e.jsx(Ys,{children:f("nft_on_sale")})]})]}),w&&e.jsxs(xs,{open:!0,margin:"small",children:[w,t.approvedBy&&t.approvedBy.length>0&&e.jsx(Ks,{children:e.jsx(ms,{})})]}),p&&e.jsx(te,{text:p,margin:"last",contentColor:!0})]}),h&&h.metadata?.description&&e.jsxs(e.Fragment,{children:[e.jsx(zs,{}),e.jsxs(ie,{children:[e.jsx(Gs,{children:f("nft_about_collection")}),e.jsx(te,{text:h.metadata.description,margin:"last",contentColor:!0})]})]})]}),e.jsx($s,{nftItem:t,kind:j}),e.jsx(Ps,{nftItem:t,kind:j})]})},it=()=>{const s=W(),[t,n]=x.useState(void 0),a=x.useCallback(()=>{n(void 0)},[n]);x.useEffect(()=>{const o=i=>{n(i.params)};return s.uiEvents.on("nft",o),()=>{s.uiEvents.off("nft",o)}},[s,n]);const r=x.useCallback(()=>{if(t)return e.jsx(nt,{onClose:a,nftItem:t})},[t,a]);return e.jsx(K,{isOpen:t!==void 0,hideButton:!0,handleClose:a,backShadow:!0,mobileFullScreen:!0,children:r})};export{it as default};
