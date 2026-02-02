import{i as b,r as i,G as v,K as l,s as r,d as j,M as k,O as w,j as t,R as E,u as N,Q as D,T as y,V as F,W as C,X as S,Y as T}from"./main.D-W_HyrW.js";function O(e,n){const{i18n:s}=b();return i.useMemo(()=>e?new Intl.DateTimeFormat(v(s.language),{month:"short",day:"numeric",year:new Date().getFullYear()-1===new Date(e).getFullYear()?"numeric":void 0,hour:"numeric",minute:"numeric",...n}).format(e):"",[e,s.language,n])}function I(e){if(!e)return"";const n=Math.floor((new Date(e).getTime()-Date.now())/(1e3*60*60*24));return n<0?"0":n.toString()}const $=r.div`
    display: grid;
    margin: 0 0 2rem 0;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`,L=r.div`
    position: relative;
    user-select: none;
    width: 100%;
    display: flex;
    flex-direction: column;

    background-color: ${e=>e.theme.backgroundContent};
    transition: background-color 0.1s ease;

    border-radius: ${e=>e.theme.cornerSmall};

    overflow: hidden;

    ${e=>{if(e.ios){if(e.isHover)return l`
                    background-color: ${e.theme.backgroundContentTint};
                `}else return e.hover?l`
                    cursor: pointer;

                    &:hover {
                        background-color: ${e.theme.backgroundContentTint};
                    }
                `:void 0}}
`,A=r.div`
    width: 100%;
    position: relative;
`,B=r.div`
    width: 100%;
    padding-bottom: 100%;

    ${e=>e.url&&l`
            background-image: url('${e.url}');
        `}
    background-size: cover;
`,H=r.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.75rem 0.5rem;
    white-space: nowrap;
`,R=r.div`
    position: absolute;
    top: 10px;
    right: 8px;
`,G=r.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 32px;
    width: 32px;
`,M=E.memo(({nft:e,resolution:n,onOpen:s,hideText:d})=>{const o=e.sale!==void 0,f=e.previews?.find(p=>p.resolution===n),{ios:x}=N(),[g,u]=i.useState(!1),a=i.useRef(null),c=i.useContext(D),{data:m}=y(e);i.useLayoutEffect(()=>{a.current&&c&&a.current.contains(c)?u(!0):u(!1)},[a.current,c,u]);const h=m&&Number(I(m))<=30;return t.jsxs(L,{hover:!0,isHover:g,ios:x,ref:a,onClick:()=>s(e),children:[t.jsxs(A,{children:[t.jsx(B,{url:f?.url}),o&&t.jsx(R,{children:t.jsx(F,{})}),h&&t.jsx(G,{children:t.jsx(C,{})})]}),!d&&t.jsxs(H,{children:[t.jsx(S,{nft:e}),t.jsx(T,{nft:e})]})]})}),V=({nfts:e,className:n})=>{const s=j();return k(w.NFT)?t.jsx($,{className:n,children:(e??[]).map(o=>o.metadata?.render_type==="hidden"?t.jsx(t.Fragment,{}):t.jsx(M,{nft:o,resolution:"500x500",onOpen:()=>s.openNft(o)},o.address))}):null};export{B as I,V as N,L as a,I as t,O as u};
