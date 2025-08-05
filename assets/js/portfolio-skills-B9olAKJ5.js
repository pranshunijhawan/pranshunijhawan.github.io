import{j as o,m as p,A as y,r as d}from"./framer-motion-cumc6SSu.js";import{c as h,g,A as f,F as b,I as x,a as v,S as $,b as u,p as C,d as k}from"./portfolio-home-D6Nu10WD.js";import{d as i}from"./styled-components-CFN5Od9r.js";const S=({children:n,delay:e=0})=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0}};return o.jsx(p.div,{initial:"hidden",whileInView:"visible",viewport:{amount:"some"},transition:{duration:1.25,delay:e,type:"spring",stiffness:30,damping:15,mass:2},variants:t,children:n})},W=i.div`
    row-gap: 1.5rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space05};
    margin-top: ${({theme:n})=>n.common.spacing.space10};
`,z=i.div`
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
`,F=i.p`
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
`,T=i.div`
    ${h}
    ${g}
    row-gap: 0;

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`,M=i.div`
    display: flex;
    grid-template-columns: 1fr;
    column-gap: 0.75rem;

    @media screen and (max-width: 349px) {
        gap: 0.5rem;
    }
`,I=i.div`
    display: flex;
    align-items: center;
    margin-top: -0.5rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space05};
`,O=i.div`
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: ${({theme:n})=>n.common.firstColor};
    border-radius: 50%;
    margin-top: 0.3rem;
    transition: 0.5s;
`,D=i.div`
    display: block;
    width: 1px;
    height: 100%;
    background-color: ${({theme:n})=>n.common.firstColor};
    transform: translate(6px, -7px);
`,R=i.h3`
    margin: -0.1rem 0 ${({theme:n})=>n.common.spacing.space05} 0;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};
    color: ${({theme:n})=>n.common.firstColor};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    }
`,_=i.span`
    display: inline-block;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    margin: 0 0 ${({theme:n})=>n.common.spacing.space05} 0;

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,A=i.span`
    display: block;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallFont};
    font-style: italic;
    margin: 0 0 ${({theme:n})=>n.common.spacing.space05} 0;

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallFont};
    }
`,B=i.div`
    margin-top: 0.25rem;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallerFont};
    color: ${({theme:n})=>n.textColor};
    margin: ${({theme:n})=>n.common.spacing.space05} 0 0 ${({theme:n})=>n.common.spacing.space05};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallerFont};
    }
`,P=i.p`
    margin: 0 0 ${({theme:n})=>n.common.spacing.space10};
    line-height: ${({theme:n})=>n.common.spacing.space20};
`,L=i.blockquote`
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
`,E=i.div`
    display: flex;
    margin-right: ${({theme:n})=>n.common.spacing.space15};
    
    &:first-child {
        margin-top: 0;
    }
`,V=i.div`
    width: 100%;
    margin-top: 0.04rem;
    position: relative;
`,H=i.div`
    font-size: 1.4rem;
    color: ${({theme:n})=>n.common.firstColor};
    margin-left: auto;
    transition: transform 0.5s;
    transform: ${({$isopen:n})=>n?"rotate(-180deg)":"rotate(0)"};
    display: flex;
    align-items: center;
`,q=i(f)`
    font-size: inherit;
    color: inherit;
`,Q=i.span`
    color: ${({theme:n})=>n.common.firstColor};
    margin-right: ${({theme:n})=>n.common.spacing.space05};
    margin-top: ${({theme:n})=>n.common.spacing.space025};
`,X=({symbol:n="→"})=>o.jsx(Q,{children:n}),j=({children:n,isOpen:e,duration:t=.3})=>o.jsx(y,{initial:!1,children:e&&o.jsx(p.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:t,ease:"easeInOut",opacity:{duration:t*.67}},children:n},"expand-collapse-content")}),w=({children:n,delay:e=0,direction:t="left"})=>{const s=t==="left"?-20:20;return o.jsx(p.div,{initial:{translateX:s,opacity:0},animate:{translateX:0,opacity:1},transition:{type:"spring",stiffness:75,damping:15,mass:2,delay:e},children:n})},K=({description:n,isOpenState:e})=>o.jsx(j,{isOpen:e,children:o.jsx(W,{$isopen:e,children:!!n?.length&&n.map((t,s)=>o.jsx(w,{delay:s*.1,direction:"left",children:o.jsxs(E,{children:[o.jsx(X,{}),o.jsx(P,{children:t})]})},s))})}),N=({description:n})=>{const[e,t]=d.useState(!1),s=()=>t(a=>!a);return n?.length?o.jsxs(o.Fragment,{children:[o.jsxs(z,{onClick:s,children:[o.jsxs(F,{children:[e?"Hide":"Show"," Key contributions"]}),o.jsx(H,{$isopen:e,children:o.jsx(q,{})})]}),o.jsx(K,{description:n,isOpenState:e})]}):null},G=({title:n,url:e,subTitle:t,date:s,description:a,last:r,lineBreak:c,previously:l,descriptionSummary:m})=>o.jsx(T,{children:o.jsxs(M,{children:[o.jsxs("div",{children:[o.jsx(b,{children:o.jsx(O,{})}),!r&&o.jsx(D,{})]}),o.jsxs(V,{lineBreak:c,children:[o.jsx(R,{children:e?o.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:n}):n}),o.jsx(_,{children:t}),l&&o.jsx(A,{children:`Previously: ${l}`}),o.jsxs(I,{children:[o.jsx(x,{iconType:v.Calendar}),o.jsx(B,{children:s})]}),m&&o.jsx(L,{dangerouslySetInnerHTML:{__html:`"${m}"`}}),a?.length?o.jsx(N,{description:a}):null]})]})}),J=({title:n,timeline:e})=>o.jsxs($,{id:"educationalqualifications",children:[o.jsx(u,{content:n}),e.map(t=>o.jsx(S,{children:o.jsx(G,{...t})},t.title))]}),xn=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),U=i.div`
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
`,Y=i.div`
    height: 5px;
    border-radius: 0.25rem;
    background-color: ${({theme:n})=>n.common.firstColorLighter};
    width: 100%;
`,Z=i.div`
    width: 100%;
    height: 100%;
`,nn=i.div`
    row-gap: 1.5rem;
    padding: 0 1rem 0 2.7rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space15};
`,on=i(f)`
    font-size: 2rem;
    color: ${({theme:n})=>n.common.firstColor};
    margin-left: auto;
    transition: transform 0.8s ease;
    transform: ${({$isOpen:n})=>n?"rotate(-180deg)":"rotate(0)"};
`,en=i.div`
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
`,tn=i.h1`
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
`,sn=i.h3`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};
`,an=i.h3`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,rn=i.span`
    height: 5px;
    border-radius: 0.25rem;
    width: ${({$percentage:n})=>n}%;
    display: block;
    background-color: ${({theme:n})=>n.common.firstColor};
    animation: ${({$percentage:n})=>C(n)} 3s normal forwards;
`,cn=({name:n,percentage:e})=>o.jsxs(o.Fragment,{children:[o.jsxs(U,{children:[o.jsx(sn,{children:n}),o.jsxs(an,{children:[e,"%"]})]}),o.jsx(Y,{children:o.jsx(Z,{role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100,children:o.jsx(rn,{$percentage:e})})})]}),mn=d.memo(cn),ln=({category:n,skills:e,icon:t})=>{const[s,a]=d.useState(!1),r=d.useCallback(()=>{a(c=>!c)},[]);return o.jsxs(o.Fragment,{children:[o.jsxs(en,{onClick:r,children:[o.jsx(x,{iconType:t}),o.jsx(tn,{$isOpen:s,children:n}),o.jsx(on,{$isOpen:s})]}),o.jsx(j,{isOpen:s,children:o.jsx(nn,{$isOpen:s,children:e.map(({name:c,percentage:l},m)=>o.jsx(w,{delay:m*.1,direction:"left",children:o.jsx(mn,{name:c,percentage:l})},m))})})]})},dn=i.div`
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
`,pn=({sectionTitle:n,skills:e})=>o.jsxs($,{id:"technologyproficiency",children:[o.jsx(u,{content:n}),o.jsx(dn,{children:e.map(({category:t,skills:s,icon:a},r)=>o.jsx(k,{children:o.jsx(ln,{category:t,skills:s,icon:a})},r))})]}),$n=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"}));export{X as B,j as E,S,G as T,w as a,xn as b,$n as c};
