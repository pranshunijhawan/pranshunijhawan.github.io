import{j as o,r as p,m as $}from"./framer-motion-D14opXiI.js";import{I as a,c as g,g as f,C,S as x,b as h,e as u,a as r,f as b,h as y,d as v}from"./portfolio-home-DNoVetHB.js";import{S as w,B as M}from"./portfolio-skills-DW1pc6Cj.js";import{d as e,l as S}from"./styled-components-DyNG11jZ.js";const T=e.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem; /* Better spacing than margin-left */
`,z=e.span`
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
`,B=e.a`
  text-decoration: none;
  cursor: pointer;
`,F=({content:n,href:t="#",icon:i})=>!n||!t?null:o.jsxs(T,{children:[o.jsx(a,{iconType:i}),o.jsx(z,{children:o.jsx(B,{href:t,target:"_blank",rel:"noopener noreferrer","aria-label":`Contact via ${n}`,children:n})})]}),I=e.div`
    ${g}
    ${f}

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;

        grid-template-columns: repeat(4, 1fr);
    }
`,O=e.div`
    ${C}
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
`,_=e.p`
    text-align: center;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallerFont};
    margin-top: -0.2rem;

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallerFont};
    }
`,d=e.div`
    display: flex;
    text-align: center;
`,W=e.div`
    margin-top: -0.15rem;
`,A=e.div`
    margin-top: ${({theme:n})=>n.common.spacing.space025};
`,P="2",k=1,D=54,m={major:P,minor:k,build:D},Q=()=>o.jsx(A,{children:o.jsxs(d,{children:[o.jsx(_,{children:"Built Using"}),[r.React,r.TypeScript,r.StyledComponents,r.Framer,r.Vite,r.GitHub].map((n,t)=>o.jsx(a,{iconType:n},t))]})}),R=({sectionTitle:n,contactMetaData:t=[]})=>o.jsxs(x,{id:"contactme",children:[o.jsx(h,{content:n}),o.jsx(I,{children:t?.map((i,s)=>o.jsx(u,{children:o.jsx(F,{icon:i.icon,content:i.content,href:i.href})},s))}),o.jsx(O,{children:[o.jsxs(d,{children:[o.jsx(l,{children:"Designed & Built With "}),o.jsx(W,{children:o.jsx(a,{iconType:r.Heart})}),o.jsxs(l,{children:[" By Pranshu! © ",new Date().getFullYear()]})]},"copyright"),o.jsx(Q,{},"built-by"),o.jsxs(d,{children:[o.jsx(a,{iconType:r.Version}),o.jsxs(l,{children:["v ",m.major,".",m.minor,".",m.build]})]},"version")].map((i,s)=>o.jsx(w,{children:i},s))})]}),jn=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),q=e.div`
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
`,G=S`
    font-weight: 400;
    transition: 0.5s;
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.normalFont};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.normalFont};
    }
`,V=e.h3`
    ${G}
    color: ${({theme:n,$isopen:t})=>t?n.common.firstColor:n.titleColor};
    margin-bottom: 0;
    margin-left: ${({theme:n})=>n.common.spacing.space05};
    letter-spacing: ${({$isopen:n})=>n?"0.025rem":"0"};
`,H=e.div`
    margin-top: ${({theme:n})=>n.common.spacing.space15};
`,E=e.p`
    font-size: ${({theme:n})=>n.common.fontMaxWidth967.smallFont};
    margin-top: 0;
    line-height: ${({theme:n})=>n.common.spacing.space15};

    @media screen and (min-width: 968px) {
        font-size: ${({theme:n})=>n.common.fontMinWidth968.smallFont};
    }
`,L=e.div`
    display: flex;
    margin-top: ${({theme:n})=>n.common.spacing.space10};
    margin-right: ${({theme:n})=>n.common.spacing.space15};
`,X=e.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`,J=e.div`
    display: flex;
    align-items: center;
`,N=e.div`
    margin-top: 0.25rem;
    transition: all 0.25s ease;
    transform: rotate(${({$isopen:n})=>n?"45deg":"0deg"});
    color: ${({theme:n,$isopen:t})=>t?n.common.firstColor:n.titleColor};
    display: flex;
    align-items: center;
`,U=e(b)`
    font-weight: 400;
`,Y=({title:n,content:t})=>{const[i,s]=p.useState(!1);return o.jsxs(q,{$isopen:i,children:[o.jsxs(X,{onClick:()=>s(c=>!c),children:[o.jsx(J,{children:o.jsx(N,{$isopen:i,children:o.jsx(U,{children:"+"})})}),o.jsx("div",{children:o.jsx(V,{$isopen:i,children:n})})]}),i&&o.jsx(H,{children:t.map((c,j)=>o.jsx($.div,{initial:{translateX:-20,opacity:0},whileInView:{translateX:0,opacity:1},viewport:{amount:"some"},transition:{type:"spring",stiffness:75,damping:15,mass:2},children:o.jsxs(L,{children:[o.jsx(M,{}),o.jsx(E,{children:c})]})},j))})]})},K=({content:n})=>o.jsx(o.Fragment,{children:n.map(({id:t,title:i,content:s})=>o.jsx(u,{children:o.jsx(Y,{id:t,title:i,content:s})},t))}),Z=p.memo(K),nn=e.div`
    ${g}
    row-gap: 0;

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`,on=({sectionTitle:n,content:t})=>o.jsxs(x,{id:"mostproudof",children:[o.jsx(h,{content:n}),o.jsx(nn,{children:o.jsx(Z,{content:t})})]}),en=p.memo(on),$n=Object.freeze(Object.defineProperty({__proto__:null,default:en},Symbol.toStringTag,{value:"Module"})),tn=e.div`
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
`,rn=e.div`
    margin: ${({theme:n})=>n.common.spacing.space10} 0;
`,sn=e.p`
    font-style: italic;
    margin: 0;
`,an=e.h3`
    color: ${({theme:n})=>n.titleColor};
    margin-bottom: 0.25rem;
`,cn=e.h4`
    font-weight: 400;
    opacity: 0.6;
    font-size: 0.875rem;
`,ln=e.span`
    font-size: 0.875rem;
    color: ${({theme:n})=>n.common.firstColor};
    float: right;

    @media screen and (min-width: 968px) {
        font-size: 0.75rem;
    }
`,mn=e(y)`
    font-size: 2.5rem;
    color: ${({theme:n})=>n.common.firstColor};
    display: block;
    margin-bottom: 0.5rem;
`,dn=({quoteMetaData:n=[]})=>n.map((t,i)=>o.jsxs(tn,{children:[o.jsx(mn,{"aria-label":"Quote Icon"}),o.jsx(rn,{children:o.jsx(sn,{children:t.quote})}),o.jsx(an,{children:t.givenBy}),o.jsx(cn,{children:t.subTitleGivenBy}),o.jsxs(ln,{children:["Source: ",t.source]})]},i)),pn=e.div`
    ${g}
    ${f}
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
`,gn=({sectionTitle:n,quoteProps:t={quoteMetaData:[]}})=>o.jsxs(x,{id:"testimonials",children:[o.jsx(h,{content:n}),o.jsx(v,{children:o.jsx(pn,{children:o.jsx(dn,{quoteMetaData:t?.quoteMetaData})})})]}),Cn=Object.freeze(Object.defineProperty({__proto__:null,default:gn},Symbol.toStringTag,{value:"Module"}));export{jn as C,$n as M,Cn as T};
