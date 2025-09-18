import{j as o,m as p,r as m,A as w}from"./framer-motion-cumc6SSu.js";import{c as h,g,A as f,F as b,I as x,a as v,S as u,b as $,p as C,d as k}from"./portfolio-home-CXeKaE-g.js";import{d as e}from"./styled-components-CFN5Od9r.js";const S=({children:n,delay:i=0})=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0}};return o.jsx(p.div,{initial:"hidden",whileInView:"visible",viewport:{amount:"some"},transition:{duration:1.25,delay:i,type:"spring",stiffness:30,damping:15,mass:2},variants:t,children:n})},T=e.div`
    row-gap: 1.5rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space05};
    margin-top: ${({theme:n})=>n.common.spacing.space10};
`,W=e.div`
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
`,z=e.p`
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
`,F=e.div`
    ${h}
    ${g}
    row-gap: 0;

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`,M=e.div`
    display: flex;
    grid-template-columns: 1fr;
    column-gap: 0.75rem;

    @media screen and (max-width: 349px) {
        gap: 0.5rem;
    }
`,R=e.div`
    display: flex;
    align-items: center;
    margin-top: -0.5rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space05};
`,D=e.div`
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: ${({theme:n})=>n.common.firstColor};
    border-radius: 50%;
    margin-top: 0.3rem;
    transition: 0.5s;
`,I=e.div`
    display: block;
    width: 1px;
    height: 100%;
    background-color: ${({theme:n})=>n.common.firstColor};
    transform: translate(6px, -7px);
`,_=e.h3`
    margin: -0.1rem 0 ${({theme:n})=>n.common.spacing.space05} 0;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};
    color: ${({theme:n})=>n.common.firstColor};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    }
`,A=e.span`
    display: inline-block;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    margin: 0 0 ${({theme:n})=>n.common.spacing.space05} 0;

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,B=e.span`
    display: block;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallFont};
    font-style: italic;
    margin: 0 0 ${({theme:n})=>n.common.spacing.space05} 0;

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallFont};
    }
`,O=e.div`
    margin-top: 0.25rem;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallerFont};
    color: ${({theme:n})=>n.textColor};
    margin: ${({theme:n})=>n.common.spacing.space05} 0 0 ${({theme:n})=>n.common.spacing.space05};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallerFont};
    }
`,P=e.p`
    margin: -0.25rem 0 ${({theme:n})=>n.common.spacing.space10};
    line-height: ${({theme:n})=>n.common.spacing.space20};
`,E=e.blockquote`
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
`,L=e.div`
    display: flex;
    margin-right: ${({theme:n})=>n.common.spacing.space15};
    
    &:first-child {
        margin-top: 0;
    }
`,H=e.div`
    width: 100%;
    margin-top: 0.04rem;
    position: relative;
`,V=e.div`
    font-size: 1.4rem;
    color: ${({theme:n})=>n.common.firstColor};
    margin-left: auto;
    transition: transform 0.5s;
    transform: ${({$isopen:n})=>n?"rotate(-180deg)":"rotate(0)"};
    display: flex;
    align-items: center;
`,q=e(f)`
    font-size: inherit;
    color: inherit;
`,Q=e.span`
    color: ${({theme:n})=>n.common.firstColor};
    margin-right: ${({theme:n})=>n.common.spacing.space05};
`,X=({symbol:n="→"})=>o.jsx(Q,{children:n}),j=({children:n,isOpen:i,duration:t=.3})=>{const s=m.useRef(null),[a,r]=m.useState(0);return m.useEffect(()=>{if(i&&s.current){const d=s.current.scrollHeight;r(d);const c=setTimeout(()=>{i&&r("auto")},t*1e3);return()=>clearTimeout(c)}},[i,n,t]),o.jsx(w,{children:i&&o.jsx(p.div,{initial:{height:0,opacity:0},animate:{height:a,opacity:1},exit:{height:0,opacity:0},transition:{type:"spring",stiffness:200,damping:40,mass:1,opacity:{duration:t*.1}},style:{overflow:"hidden"},children:o.jsx(p.div,{ref:s,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.3},children:n})},"expand-collapse")})},y=({children:n,delay:i=0,direction:t="left"})=>{const s=t==="left"?-20:20;return o.jsx(p.div,{initial:{translateX:s,opacity:0},animate:{translateX:0,opacity:1},transition:{type:"spring",stiffness:75,damping:15,mass:2,delay:i},children:n})},K=({description:n,isOpenState:i})=>o.jsx(j,{isOpen:i,children:o.jsx(T,{$isopen:i,children:!!n?.length&&n.map((t,s)=>o.jsx(y,{delay:s*.1,direction:"left",children:o.jsxs(L,{children:[o.jsx(X,{}),o.jsx(P,{children:t})]})},s))})}),N=({description:n})=>{const[i,t]=m.useState(!1),s=()=>t(a=>!a);return n?.length?o.jsxs(o.Fragment,{children:[o.jsxs(W,{onClick:s,children:[o.jsxs(z,{children:[i?"Hide":"Show"," Key contributions"]}),o.jsx(V,{$isopen:i,children:o.jsx(q,{})})]}),o.jsx(K,{description:n,isOpenState:i})]}):null},G=({title:n,url:i,subTitle:t,date:s,description:a,last:r,lineBreak:l,previously:d,descriptionSummary:c})=>o.jsx(F,{children:o.jsxs(M,{children:[o.jsxs("div",{children:[o.jsx(b,{children:o.jsx(D,{})}),!r&&o.jsx(I,{})]}),o.jsxs(H,{lineBreak:l,children:[o.jsx(_,{children:i?o.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:n}):n}),o.jsx(A,{children:t}),d&&o.jsx(B,{children:`Previously: ${d}`}),o.jsxs(R,{children:[o.jsx(x,{iconType:v.Calendar}),o.jsx(O,{children:s})]}),c&&o.jsx(E,{dangerouslySetInnerHTML:{__html:`"${c}"`}}),a?.length?o.jsx(N,{description:a}):null]})]})}),J=({title:n,timeline:i})=>o.jsxs(u,{id:"educationalqualifications",children:[o.jsx($,{content:n}),i.map(t=>o.jsx(S,{children:o.jsx(G,{...t})},t.title))]}),xn=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),U=e.div`
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
`,Y=e.div`
    height: 5px;
    border-radius: 0.25rem;
    background-color: ${({theme:n})=>n.common.firstColorLighter};
    width: 100%;
`,Z=e.div`
    width: 100%;
    height: 100%;
`,nn=e.div`
    row-gap: 1.5rem;
    padding: 0 1rem 0 2.7rem;
    margin-bottom: ${({theme:n})=>n.common.spacing.space15};
`,on=e(f)`
    font-size: 2rem;
    color: ${({theme:n})=>n.common.firstColor};
    margin-left: auto;
    transition: transform 0.8s ease;
    transform: ${({$isOpen:n})=>n?"rotate(-180deg)":"rotate(0)"};
`,en=e.div`
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
`,tn=e.h1`
    margin-top: 0.5rem;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.h3Font};
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({theme:n})=>n.common.spacing.space05};
    transition: color 0.5s, letter-spacing 0.5s;
    color: ${({$isOpen:n,theme:i})=>n?i.common.firstColor:i.titleColor};
    letter-spacing: ${({$isOpen:n})=>n?"0.025rem":"0"};

    @media screen and (max-width: 349px) {
        font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    }

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.h3Font};
    }
`,sn=e.h3`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};
`,an=e.h3`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};
    font-weight: ${({theme:n})=>n.common.fontWeight.medium};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,rn=e.span`
    height: 5px;
    border-radius: 0.25rem;
    width: ${({$percentage:n})=>n}%;
    display: block;
    background-color: ${({theme:n})=>n.common.firstColor};
    animation: ${({$percentage:n})=>C(n)} 3s normal forwards;
`,cn=({name:n,percentage:i})=>o.jsxs(o.Fragment,{children:[o.jsxs(U,{children:[o.jsx(sn,{children:n}),o.jsxs(an,{children:[i,"%"]})]}),o.jsx(Y,{children:o.jsx(Z,{role:"progressbar","aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,children:o.jsx(rn,{$percentage:i})})})]}),mn=m.memo(cn),ln=({category:n,skills:i,icon:t})=>{const[s,a]=m.useState(!1),r=m.useCallback(()=>{a(l=>!l)},[]);return o.jsxs(o.Fragment,{children:[o.jsxs(en,{onClick:r,children:[o.jsx(x,{iconType:t}),o.jsx(tn,{$isOpen:s,children:n}),o.jsx(on,{$isOpen:s})]}),o.jsx(j,{isOpen:s,children:o.jsx(nn,{$isOpen:s,children:i.map(({name:l,percentage:d},c)=>o.jsx(y,{delay:c*.1,direction:"left",children:o.jsx(mn,{name:l,percentage:d})},c))})})]})},dn=e.div`
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
`,pn=({sectionTitle:n,skills:i})=>o.jsxs(u,{id:"technologyproficiency",children:[o.jsx($,{content:n}),o.jsx(dn,{children:i.map(({category:t,skills:s,icon:a},r)=>o.jsx(k,{children:o.jsx(ln,{category:t,skills:s,icon:a})},r))})]}),un=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"}));export{X as B,j as E,S,G as T,y as a,xn as b,un as c};
