import{Z as C,i as j,r as s,d as y,k as w,$ as E,a0 as k,a1 as S,j as e,L,n as v,o as P,p as l,s as c,a2 as _}from"./main.D-W_HyrW.js";async function b(t){const n=await t.get(C.EXTENSION_POPUP_ID);if(n)return n}const A=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    height: 100%;
    padding: 20px;
`,N=c(_)`
    margin-bottom: 1rem;
`,T=c.div`
    margin-top: 1rem;
    display: flex;
    gap: 8px;
    width: 100%;

    > * {
        flex: 1;
    }
`,O=()=>{const{t}=j(),[n,p]=s.useState(!1),u=y(),{isDeviceConnected:a,mutate:f,reset:x,data:g,isError:m}=w(),o=s.useCallback(async()=>{try{const r=await b(u.storage);r?.id!==void 0&&await E.windows.update(r.id,{focused:!0})}catch(r){console.error(r)}window.close()},[]),d=k();s.useEffect(()=>{d.pathname!==S.connectLedger&&o()},[d.pathname,o]),s.useEffect(()=>{a&&o()},[o,a]);const h=s.useCallback(()=>{x(),f(),p(!0)},[]);let i="connect";return a&&(i="open-ton"),g&&(i="all-completed"),e.jsxs(A,{children:[e.jsx(N,{children:t("ledger_connect_header")}),e.jsx(L,{currentStep:i,isErrored:m,pristine:!n}),e.jsx(v,{children:e.jsx(P,{children:e.jsxs(T,{children:[e.jsx(l,{secondary:!0,onClick:o,children:t("cancel")}),e.jsx(l,{primary:!0,onClick:h,children:t(n?"try_again":"continue")})]})})})]})};export{O as default};
