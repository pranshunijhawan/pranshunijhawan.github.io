import{j as o,m,r as c}from"./framer-motion-DLV44IgS.js";import{c as d,g as p,A as h,F as w,I as g,a as b,S as f,b as x,p as y,d as u}from"./portfolio-home-CK3_rX1Z.js";import{d as i}from"./styled-components-BG4sEAvZ.js";const v=({children:n,delay:e=0})=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0}};return o.jsx(m.div,{initial:"hidden",whileInView:"visible",viewport:{amount:"some"},transition:{duration:1.25,delay:e,type:"spring",stiffness:30,damping:15,mass:2},variants:t,children:n})},k=i.div`
    row-gap: 1.5rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space05};
    margin-top: ${({theme:n})=>n.common.spacing.space10};
    display: ${({$isopen:n})=>n?"block":"none"};
    overflow: ${({$isopen:n})=>n?"visible":"hidden"};
    transition: max-height 2s ease-out;
`,C=i.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${({theme:n})=>n.common.spacing.space075};
    width: auto;
    cursor: pointer;

    @supports not (-webkit-overflow-scrolling: touch) {
        &:hover {
            letter-spacing: 0.025rem;
        }
    }
`,S=i.p`
    padding: 0;
    background-color: transparent;
    color: ${({theme:n})=>n.common.firstColor};
    transition: 0.5s;
    display: inline-flex;
    align-items: center;
    border-radius: 0.5rem;
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};
`,T=i.div`
    ${d}
    ${p}
    row-gap: 0;

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`,W=i.div`
    display: flex;
    grid-template-columns: 1fr;
    column-gap: 0.75rem;

    @media screen and (max-width: 349px) {
        gap: 0.5rem;
    }
`,z=i.div`
    display: flex;
    align-items: center;
    margin-top: -0.5rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space05};
`,F=i.div`
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: ${({theme:n})=>n.common.firstColor};
    border-radius: 50%;
    margin-top: 0.3rem;
    transition: 0.5s;
`,M=i.div`
    display: block;
    width: 1px;
    height: 100%;
    background-color: ${({theme:n})=>n.common.firstColor};
    transform: translate(6px, -7px);
`,R=i.h3`
    margin: 0 0 ${({theme:n})=>n.common.spacing.space05} 0;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    }
`,O=i.span`
    display: inline-block;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallFont};
    margin: 0 0 ${({theme:n})=>n.common.spacing.space05} 0;
    color: ${({theme:n})=>n.common.firstColor};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallFont};
    }
`,I=i.div`
    margin-top: 0.25rem;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallerFont};
    color: ${({theme:n})=>n.textColor};
    margin: ${({theme:n})=>n.common.spacing.space05} 0 0 ${({theme:n})=>n.common.spacing.space05};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallerFont};
    }
`,D=i.p`
    margin: 0 0 ${({theme:n})=>n.common.spacing.space10};
    line-height: ${({theme:n})=>n.common.spacing.space20};
`,B=i.div`
    display: flex;
`,_=i.div`
    width: 100%;
    margin-top: 0.04rem;
    position: relative;
    padding-bottom: ${({lineBreak:n,theme:e})=>n?e.common.spacing.space15:"0"};

    &::after {
        content: ${({lineBreak:n})=>n?'""':"none"};
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({theme:n})=>n.common.firstColor};
        margin-top: ${({theme:n})=>n.common.spacing.space10};
        transition: background-color 0.3s ease;
    }
`,A=i.div`
    font-size: 1.4rem;
    color: ${({theme:n})=>n.common.firstColor};
    margin-left: auto;
    transition: transform 0.5s;
    transform: ${({$isopen:n})=>n?"rotate(-180deg)":"rotate(0)"};
    display: flex;
    align-items: center;
`,V=i(h)`
    font-size: inherit;
    color: inherit;
`,E=i.span`
    color: ${({theme:n})=>n.common.firstColor};
    margin-right: ${({theme:n})=>n.common.spacing.space05};
    margin-top: ${({theme:n})=>n.common.spacing.space025};
`,P=({symbol:n="→"})=>o.jsx(E,{children:n}),L=({description:n,isOpenState:e})=>o.jsx(k,{$isopen:e,children:!!n?.length&&n.map((t,s)=>o.jsx(m.div,{initial:{translateX:-20,opacity:0},whileInView:{translateX:0,opacity:1},viewport:{amount:"some"},transition:{type:"spring",stiffness:75,damping:15,mass:2},children:o.jsxs(B,{children:[o.jsx(P,{}),o.jsx(D,{children:t})]})},s))}),H=({description:n})=>{const[e,t]=c.useState(!1),s=()=>t(a=>!a);return n?.length?o.jsxs(o.Fragment,{children:[o.jsxs(C,{onClick:s,children:[o.jsx(S,{children:e?"Hide Roles and Responsibilities":"View Roles and Responsibilities"}),o.jsx(A,{$isopen:e,children:o.jsx(V,{})})]}),o.jsx(L,{description:n,isOpenState:e})]}):null},Q=({title:n,subTitle:e,date:t,description:s,last:a,lineBreak:r})=>o.jsx(T,{children:o.jsxs(W,{children:[o.jsxs("div",{children:[o.jsx(w,{children:o.jsx(F,{})}),!a&&o.jsx(M,{})]}),o.jsxs(_,{lineBreak:r,children:[o.jsx(R,{children:n}),e&&o.jsx(O,{children:e}),o.jsxs(z,{children:[o.jsx(g,{iconType:b.Calendar}),o.jsx(I,{children:t})]}),s?.length?o.jsx(H,{description:s}):null]})]})}),X=({title:n,timeline:e})=>o.jsxs(f,{id:"educationalqualifications",children:[o.jsx(x,{content:n}),e.map(t=>o.jsx(v,{children:o.jsx(Q,{...t})},t.title))]}),dn=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),q=i.div`
    margin-top: ${({theme:n})=>n.common.spacing.space125};
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({theme:n})=>n.common.spacing.space10};

    @media screen and (max-width: 349px) {
        font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    }

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.h3Font};
    }
`,N=i.div`
    height: 5px;
    border-radius: 0.25rem;
    background-color: ${({theme:n})=>n.common.firstColorLighter};
    width: 100%;
`,G=i.div`
    width: 100%;
    height: 100%;
`,J=i.div`
    row-gap: 1.5rem;
    padding: 0 1rem 0 2.7rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space15};
    display: ${({$isOpen:n})=>n?"block":"none"};
    overflow: ${({$isOpen:n})=>n?"visible":"hidden"};
    transition: max-height 2s ease-out;
`,K=i(h)`
    font-size: 2rem;
    color: ${({theme:n})=>n.common.firstColor};
    margin-left: auto;
    transition: transform 0.8s ease;
    transform: ${({$isOpen:n})=>n?"rotate(-180deg)":"rotate(0)"};
`,U=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${({theme:n})=>n.common.spacing.space15} 0;
    cursor: pointer;

    @supports not (-webkit-overflow-scrolling: touch) {
        &:hover {
            h1 {
                color: ${({theme:n})=>n.common.firstColor};
                letter-spacing: 0.025rem;
            }
        }
    }
`,Y=i.h1`
    margin-top: 0.5rem;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({theme:n})=>n.common.spacing.space05};
    transition: color 0.5s, letter-spacing 0.5s;
    color: ${({$isOpen:n,theme:e})=>n?e.common.firstColor:e.titleColor};
    letter-spacing: ${({$isOpen:n})=>n?"0.025rem":"0"};

    @media screen and (max-width: 349px) {
        font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    }

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.h3Font};
    }
`,Z=i.h3`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};
`,nn=i.h3`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,on=i.span`
    height: 5px;
    border-radius: 0.25rem;
    width: ${({$percentage:n})=>n}%;
    display: block;
    background-color: ${({theme:n})=>n.common.firstColor};
    animation: ${({$percentage:n})=>y(n)} 3s normal forwards;
`,en=({name:n,percentage:e})=>o.jsxs(o.Fragment,{children:[o.jsxs(q,{children:[o.jsx(Z,{children:n}),o.jsxs(nn,{children:[e,"%"]})]}),o.jsx(N,{children:o.jsx(G,{role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100,children:o.jsx(on,{$percentage:e})})})]}),tn=c.memo(en),sn=({category:n,skills:e,icon:t})=>{const[s,a]=c.useState(!1),r=c.useCallback(()=>{a(l=>!l)},[]);return o.jsxs(o.Fragment,{children:[o.jsxs(U,{onClick:r,children:[o.jsx(g,{iconType:t}),o.jsx(Y,{$isOpen:s,children:n}),o.jsx(K,{$isOpen:s})]}),o.jsx(J,{$isOpen:s,children:e.map(({name:l,percentage:$},j)=>o.jsx(u,{children:o.jsx(tn,{name:l,percentage:$})},j))})]})},an=i.div`
    ${d}
    ${p}
    row-gap: 0;

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`,rn=({sectionTitle:n,skills:e})=>o.jsxs(f,{id:"technologyproficiency",children:[o.jsx(x,{content:n}),o.jsx(an,{children:e.map(({category:t,skills:s,icon:a},r)=>o.jsx(u,{children:o.jsx(sn,{category:t,skills:s,icon:a})},r))})]}),pn=Object.freeze(Object.defineProperty({__proto__:null,default:rn},Symbol.toStringTag,{value:"Module"}));export{P as B,dn as E,v as S,Q as T,pn as a};
