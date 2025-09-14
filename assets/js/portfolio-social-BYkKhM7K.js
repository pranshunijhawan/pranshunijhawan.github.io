import{j as o,r as p}from"./framer-motion-cumc6SSu.js";import{I as a,c as g,g as u,C as $,S as x,b as h,e as j,a as r,f as C,h as b,d as y}from"./portfolio-home-D6Nu10WD.js";import{S as v,E as w,a as M,B as S}from"./portfolio-skills-C-aJbrlE.js";import{d as e,l as T}from"./styled-components-CFN5Od9r.js";const z=e.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem; /* Better spacing than margin-left */
`,B=e.span`
  font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallerFont};
  color: ${({theme:n})=>n.textColor};
  word-break: break-word; /* break-word is more readable than break-all */

  a {
    color: inherit;
    transition: color 0.3s ease, letter-spacing 0.2s ease;
    text-decoration: none; /* Removes default underline */
  }

  @media screen and (min-width: 968px) {
    font-size: ${({theme:n})=>n.common.fontMinWidth968.smallerFont};
  }

  @media (hover: hover) { /* Only apply hover on supported devices */
    &:hover a {
      color: ${({theme:n})=>n.common.firstColor};
      letter-spacing: 0.01rem;
    }
  }
`,F=e.a`
  text-decoration: none;
  cursor: pointer;
`,I=({content:n,href:t="#",icon:i})=>!n||!t?null:o.jsxs(z,{children:[o.jsx(a,{iconType:i}),o.jsx(B,{children:o.jsx(F,{href:t,target:"_blank",rel:"noopener noreferrer","aria-label":`Contact via ${n}`,children:n})})]}),O=e.div`
    ${g}
    ${u}

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;

        grid-template-columns: repeat(4, 1fr);
    }
`,_=e.div`
    ${$}
    margin-top: 5rem;
    align-items: center;
    margin-bottom: 3rem;
    padding-top: 1rem;
`,l=e.p`
    text-align: center;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallerFont};
    margin-bottom: 0;

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallerFont};
    }
`,W=e.p`
    text-align: center;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallerFont};
    margin-top: -0.2rem;

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallerFont};
    }
`,d=e.div`
    display: flex;
    text-align: center;
`,A=e.div`
    margin-top: -0.15rem;
`,P=e.div`
    margin-top: ${({theme:n})=>n.common.spacing.space025};
`,k="2",D=1,Q=58,m={major:k,minor:D,build:Q},R=()=>o.jsx(P,{children:o.jsxs(d,{children:[o.jsx(W,{children:"Built Using"}),[r.React,r.TypeScript,r.StyledComponents,r.Framer,r.Vite,r.GitHub].map((n,t)=>o.jsx(a,{iconType:n},t))]})}),q=({sectionTitle:n,contactMetaData:t=[]})=>o.jsxs(x,{id:"contactme",children:[o.jsx(h,{content:n}),o.jsx(O,{children:t?.map((i,s)=>o.jsx(j,{children:o.jsx(I,{icon:i.icon,content:i.content,href:i.href})},s))}),o.jsx(_,{children:[o.jsxs(d,{children:[o.jsx(l,{children:"Designed & Built With "}),o.jsx(A,{children:o.jsx(a,{iconType:r.Heart})}),o.jsxs(l,{children:[" By Pranshu! © ",new Date().getFullYear()]})]},"copyright"),o.jsx(R,{},"built-by"),o.jsxs(d,{children:[o.jsx(a,{iconType:r.Version}),o.jsxs(l,{children:["v ",m.major,".",m.minor,".",m.build]})]},"version")].map((i,s)=>o.jsx(v,{children:i},s))})]}),$n=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),E=e.div`
    margin-top: ${({theme:n})=>n.common.spacing.space075};
    border-radius: ${({theme:n})=>n.common.spacing.space05};
    box-shadow: 0 2px 6px rgba(38, 38, 38, 0.1);
    position: relative;
    background-color: ${({theme:n})=>n.containerColor};
    padding: ${({theme:n,$isopen:t})=>`${n.common.spacing.space10} ${n.common.spacing.space10} ${t?n.common.spacing.space15:n.common.spacing.space10}`};
    border-left: 0.4rem solid ${({theme:n})=>n.common.firstColor};
    border-right: 0.4rem solid ${({theme:n})=>n.common.firstColor};

    @supports not (-webkit-overflow-scrolling: touch) {
        &:hover {
            h3, svg {
                color: ${({theme:n})=>n.common.firstColor};
                letter-spacing: 0.025rem;
            }
        }
    }
`,G=T`
    font-weight: 400;
    transition: 0.5s;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,H=e.h3`
    ${G}
    color: ${({theme:n,$isopen:t})=>t?n.common.firstColor:n.titleColor};
    margin-bottom: 0;
    margin-left: ${({theme:n})=>n.common.spacing.space05};
    letter-spacing: ${({$isopen:n})=>n?"0.025rem":"0"};
`,V=e.div`
    margin-top: ${({theme:n})=>n.common.spacing.space15};
`,L=e.p`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallFont};
    margin-top: 0;
    line-height: ${({theme:n})=>n.common.spacing.space15};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallFont};
    }
`,J=e.div`
    display: flex;
    margin-top: ${({theme:n})=>n.common.spacing.space10};
    margin-right: ${({theme:n})=>n.common.spacing.space15};
`,N=e.div`
    display: flex;
    align-items: flex-start;
    cursor: pointer;
`,U=e.div`
    display: flex;
    align-items: center;
`,Y=e.div`
    margin-top: 0.22rem;
    transition: all 0.25s ease;
    transform: rotate(${({$isopen:n})=>n?"45deg":"0deg"});
    color: ${({theme:n,$isopen:t})=>t?n.common.firstColor:n.titleColor};
    display: flex;
    align-items: center;
`,K=e(C)`
    font-weight: 400;
`,X=({title:n,content:t})=>{const[i,s]=p.useState(!1);return o.jsxs(E,{$isopen:i,children:[o.jsxs(N,{onClick:()=>s(c=>!c),children:[o.jsx(U,{children:o.jsx(Y,{$isopen:i,children:o.jsx(K,{children:"+"})})}),o.jsx("div",{children:o.jsx(H,{$isopen:i,children:n})})]}),o.jsx(w,{isOpen:i,children:o.jsx(V,{children:t.map((c,f)=>o.jsx(M,{delay:f*.1,direction:"left",children:o.jsxs(J,{children:[o.jsx(S,{}),o.jsx(L,{children:c})]})},f))})})]})},Z=({content:n})=>o.jsx(o.Fragment,{children:n.map(({id:t,title:i,content:s})=>o.jsx(j,{children:o.jsx(X,{id:t,title:i,content:s})},t))}),nn=p.memo(Z),on=e.div`
    ${g}
    row-gap: 0;

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`,en=({sectionTitle:n,content:t})=>o.jsxs(x,{id:"mostproudof",children:[o.jsx(h,{content:n}),o.jsx(on,{children:o.jsx(nn,{content:t})})]}),tn=p.memo(en),Cn=Object.freeze(Object.defineProperty({__proto__:null,default:tn},Symbol.toStringTag,{value:"Module"})),rn=e.div`
    border-radius: ${({theme:n})=>n.common.spacing.space05};
    box-shadow: 0 2px 6px rgba(38, 38, 38, 0.1);
    color: ${({theme:n})=>n.titleColor};
    font-size: 1rem;
    line-height: 1.6;
    border-left: 0.4rem solid ${({theme:n})=>n.common.firstColor};
    border-right: 0.4rem solid ${({theme:n})=>n.common.firstColor};
    margin-top: ${({theme:n})=>n.common.spacing.space10};
    padding: 1.5rem;
    background-color: ${({theme:n})=>n.containerColor};

    @media screen and (min-width: 968px) {
        font-size: 1.125rem;
    }
`,sn=e.div`
    margin: ${({theme:n})=>n.common.spacing.space10} 0;
`,an=e.p`
    font-style: italic;
    margin: 0;
`,cn=e.h3`
    color: ${({theme:n})=>n.titleColor};
    margin-bottom: 0.25rem;
`,ln=e.h4`
    font-weight: 400;
    opacity: 0.6;
    font-size: 0.875rem;
`,mn=e.span`
    font-size: 0.875rem;
    color: ${({theme:n})=>n.common.firstColor};
    float: right;

    @media screen and (min-width: 968px) {
        font-size: 0.75rem;
    }
`,dn=e(b)`
    font-size: 2.5rem;
    color: ${({theme:n})=>n.common.firstColor};
    display: block;
    margin-bottom: 0.5rem;
`,pn=({quoteMetaData:n=[]})=>n.map((t,i)=>o.jsxs(rn,{children:[o.jsx(dn,{"aria-label":"Quote Icon"}),o.jsx(sn,{children:o.jsx(an,{children:t.quote})}),o.jsx(cn,{children:t.givenBy}),o.jsx(ln,{children:t.subTitleGivenBy}),o.jsxs(mn,{children:["Source: ",t.source]})]},i)),gn=e.div`
    ${g}
    ${u}
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 349px) {
        grid-template-columns: max-content;
          justify-content: center;
    }

    @media screen and (min-width: 350px) and (max-width: 567px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`,xn=({sectionTitle:n,quoteProps:t={quoteMetaData:[]}})=>o.jsxs(x,{id:"testimonials",children:[o.jsx(h,{content:n}),o.jsx(y,{children:o.jsx(gn,{children:o.jsx(pn,{quoteMetaData:t?.quoteMetaData})})})]}),bn=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"}));export{$n as C,Cn as M,bn as T};
