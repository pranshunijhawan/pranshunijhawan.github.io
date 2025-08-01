import{j as o,m as p,r as d}from"./framer-motion-DLV44IgS.js";import{c as h,g,A as f,F as w,I as x,a as b,S as $,b as u,p as y,d as j}from"./portfolio-home-BiNLgEWC.js";import{d as i}from"./styled-components-BG4sEAvZ.js";const v=({children:n,delay:e=0})=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0}};return o.jsx(p.div,{initial:"hidden",whileInView:"visible",viewport:{amount:"some"},transition:{duration:1.25,delay:e,type:"spring",stiffness:30,damping:15,mass:2},variants:t,children:n})},k=i.div`
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
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    }
`,W=i.div`
    ${h}
    ${g}
    row-gap: 0;

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`,z=i.div`
    display: flex;
    grid-template-columns: 1fr;
    column-gap: 0.75rem;

    @media screen and (max-width: 349px) {
        gap: 0.5rem;
    }
`,F=i.div`
    display: flex;
    align-items: center;
    margin-top: -0.5rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space05};
`,T=i.div`
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
`,D=i.h3`
    margin: -0.1rem 0 ${({theme:n})=>n.common.spacing.space05} 0;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};
    color: ${({theme:n})=>n.common.firstColor};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    }
`,I=i.span`
    display: inline-block;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    margin: 0 0 ${({theme:n})=>n.common.spacing.space05} 0;

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,O=i.span`
    display: block;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallFont};
    font-style: italic;
    margin: 0 0 ${({theme:n})=>n.common.spacing.space05} 0;

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallFont};
    }
`,R=i.div`
    margin-top: 0.25rem;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallerFont};
    color: ${({theme:n})=>n.textColor};
    margin: ${({theme:n})=>n.common.spacing.space05} 0 0 ${({theme:n})=>n.common.spacing.space05};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallerFont};
    }
`,_=i.p`
    margin: 0 0 ${({theme:n})=>n.common.spacing.space10};
    line-height: ${({theme:n})=>n.common.spacing.space20};
`,B=i.blockquote`
    font-style: italic;
    margin: ${({theme:n})=>n.common.spacing.space10} 0;
    padding: 0 ${({theme:n})=>n.common.spacing.space10};
    color: ${({theme:n})=>n.textColor};
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    line-height: ${({theme:n})=>n.common.spacing.space175};
    
    a {
        color: ${({theme:n})=>n.common.firstColor};
        text-decoration: none;
        font-weight: ${({theme:n})=>n.common.fontWeight.medium};
        text-decoration: underline;
    }
    
    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,L=i.div`
    display: flex;
`,P=i.div`
    width: 100%;
    margin-top: 0.04rem;
    position: relative;
`,A=i.div`
    font-size: 1.4rem;
    color: ${({theme:n})=>n.common.firstColor};
    margin-left: auto;
    transition: transform 0.5s;
    transform: ${({$isopen:n})=>n?"rotate(-180deg)":"rotate(0)"};
    display: flex;
    align-items: center;
`,E=i(f)`
    font-size: inherit;
    color: inherit;
`,V=i.span`
    color: ${({theme:n})=>n.common.firstColor};
    margin-right: ${({theme:n})=>n.common.spacing.space05};
    margin-top: ${({theme:n})=>n.common.spacing.space025};
`,H=({symbol:n="→"})=>o.jsx(V,{children:n}),q=({description:n,isOpenState:e})=>o.jsx(k,{$isopen:e,children:!!n?.length&&n.map((t,s)=>o.jsx(p.div,{initial:{translateX:-20,opacity:0},whileInView:{translateX:0,opacity:1},viewport:{amount:"some"},transition:{type:"spring",stiffness:75,damping:15,mass:2},children:o.jsxs(L,{children:[o.jsx(H,{}),o.jsx(_,{children:t})]})},s))}),K=({description:n})=>{const[e,t]=d.useState(!1),s=()=>t(a=>!a);return n?.length?o.jsxs(o.Fragment,{children:[o.jsxs(C,{onClick:s,children:[o.jsx(S,{children:e?"Hide Key contributions":"Show Key contributions"}),o.jsx(A,{$isopen:e,children:o.jsx(E,{})})]}),o.jsx(q,{description:n,isOpenState:e})]}):null},Q=({title:n,url:e,subTitle:t,date:s,description:a,last:r,lineBreak:c,previously:m,descriptionSummary:l})=>o.jsx(W,{children:o.jsxs(z,{children:[o.jsxs("div",{children:[o.jsx(w,{children:o.jsx(T,{})}),!r&&o.jsx(M,{})]}),o.jsxs(P,{lineBreak:c,children:[o.jsx(D,{children:e?o.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:n}):n}),o.jsx(I,{children:t}),m&&o.jsx(O,{children:`Previously: ${m}`}),o.jsxs(F,{children:[o.jsx(x,{iconType:b.Calendar}),o.jsx(R,{children:s})]}),l&&o.jsx(B,{dangerouslySetInnerHTML:{__html:`"${l}"`}}),a?.length?o.jsx(K,{description:a}):null]})]})}),X=({title:n,timeline:e})=>o.jsxs($,{id:"educationalqualifications",children:[o.jsx(u,{content:n}),e.map(t=>o.jsx(v,{children:o.jsx(Q,{...t})},t.title))]}),hn=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),N=i.div`
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
`,G=i.div`
    height: 5px;
    border-radius: 0.25rem;
    background-color: ${({theme:n})=>n.common.firstColorLighter};
    width: 100%;
`,J=i.div`
    width: 100%;
    height: 100%;
`,U=i.div`
    row-gap: 1.5rem;
    padding: 0 1rem 0 2.7rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space15};
    display: ${({$isOpen:n})=>n?"block":"none"};
    overflow: ${({$isOpen:n})=>n?"visible":"hidden"};
    transition: max-height 2s ease-out;
`,Y=i(f)`
    font-size: 2rem;
    color: ${({theme:n})=>n.common.firstColor};
    margin-left: auto;
    transition: transform 0.8s ease;
    transform: ${({$isOpen:n})=>n?"rotate(-180deg)":"rotate(0)"};
`,Z=i.div`
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
`,nn=i.h1`
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
`,on=i.h3`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};
`,en=i.h3`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,tn=i.span`
    height: 5px;
    border-radius: 0.25rem;
    width: ${({$percentage:n})=>n}%;
    display: block;
    background-color: ${({theme:n})=>n.common.firstColor};
    animation: ${({$percentage:n})=>y(n)} 3s normal forwards;
`,sn=({name:n,percentage:e})=>o.jsxs(o.Fragment,{children:[o.jsxs(N,{children:[o.jsx(on,{children:n}),o.jsxs(en,{children:[e,"%"]})]}),o.jsx(G,{children:o.jsx(J,{role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100,children:o.jsx(tn,{$percentage:e})})})]}),an=d.memo(sn),rn=({category:n,skills:e,icon:t})=>{const[s,a]=d.useState(!1),r=d.useCallback(()=>{a(c=>!c)},[]);return o.jsxs(o.Fragment,{children:[o.jsxs(Z,{onClick:r,children:[o.jsx(x,{iconType:t}),o.jsx(nn,{$isOpen:s,children:n}),o.jsx(Y,{$isOpen:s})]}),o.jsx(U,{$isOpen:s,children:e.map(({name:c,percentage:m},l)=>o.jsx(j,{children:o.jsx(an,{name:c,percentage:m})},l))})]})},cn=i.div`
    ${h}
    ${g}
    row-gap: 0;

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`,mn=({sectionTitle:n,skills:e})=>o.jsxs($,{id:"technologyproficiency",children:[o.jsx(u,{content:n}),o.jsx(cn,{children:e.map(({category:t,skills:s,icon:a},r)=>o.jsx(j,{children:o.jsx(rn,{category:t,skills:s,icon:a})},r))})]}),gn=Object.freeze(Object.defineProperty({__proto__:null,default:mn},Symbol.toStringTag,{value:"Module"}));export{H as B,hn as E,v as S,Q as T,gn as a};
