import{i as j,r as n,k as P,l as A,d as y,j as s,n as B,o as O,p as L,U as S,e as R,s as E,L as U}from"./main.D-W_HyrW.js";const _=E.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`,F=E(U)`
    margin: 1rem 0;
`,z=E.div`
    margin-top: 1rem;
    display: flex;
    gap: 8px;
    width: 100%;

    > * {
        flex: 1;
    }
`,D=({ledgerParams:e,onClose:d})=>{const{t:c}=j(),[u,t]=n.useState(!1),[l,i]=n.useState(0),{mutateAsync:f,data:a,isLoading:m,isError:r,isDeviceConnected:p,reset:k}=P(),x=async I=>{try{const g=await f(I);try{if("tonProof"in e){const h=await g.getAddressProof(e.path,e.tonProof);t(!0),setTimeout(()=>e.onSubmit(h),500);return}const o=[];for(const h of e.transactions){const q=await g.signTransaction(e.path,h);o.push(q),i(N=>N+1)}t(!0),setTimeout(()=>e.onSubmit(o),500)}catch(o){console.error(o),typeof o=="object"&&o&&"message"in o&&o.message.includes("0x6985")?d(new S("Cancel auth request")):d(o)}}catch(g){console.debug(g)}};n.useEffect(()=>{x()},[]);const T=n.useCallback(()=>{k(),x({skipOpenConnectionPage:!0})},[]);A(T);const b=y();n.useEffect(()=>()=>{b.ledgerConnectionPage?.close()},[]);const v=()=>{k(),x()};let C="connect";p&&(C="open-ton"),a&&(C="confirm-tx"),u&&(C="all-completed");const w="transactions"in e?{transactionsToSign:e.transactions.length,signingTransactionIndex:l,action:"transaction"}:{action:"ton-proof"};return s.jsxs(_,{children:[s.jsx(F,{...w,currentStep:C,isErrored:r}),s.jsx(B,{children:s.jsx(O,{children:s.jsxs(z,{children:[s.jsx(L,{secondary:!0,onClick:()=>d(new S("Cancel auth request")),children:c("cancel")}),s.jsx(L,{primary:!0,loading:m||!!a||u,onClick:v,children:c("try_again")})]})})})]})},W=()=>{const e=y(),{t:d}=j(),[c,u]=n.useState(void 0),[t,l]=n.useState(void 0),i=n.useCallback(()=>{u(void 0),l(void 0)},[]),f=n.useCallback(r=>{e.uiEvents.emit("response",{method:"response",id:t,params:r}),i()},[e,t,i]),a=n.useCallback(r=>{t&&e.uiEvents.emit("response",{method:"response",id:t,params:r??new Error("Unknown Ledger error")}),i()},[t,e,i]);n.useEffect(()=>{const r=p=>{u(p.params),l(p.id)};return e.uiEvents.on("ledger",r),()=>{e.uiEvents.off("ledger",r)}},[e]);const m=n.useCallback(()=>{if(!(!c||!t))return s.jsx(D,{ledgerParams:{...c,onSubmit:f},onClose:a})},[e,c,t,a,f]);return s.jsx(R,{isOpen:c!=null&&t!=null,handleClose:()=>a(new S("Cancel auth request")),title:d("ledger_connect_header"),children:m})};export{D as LedgerContent,W as default};
