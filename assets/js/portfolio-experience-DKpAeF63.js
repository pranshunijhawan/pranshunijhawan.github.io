import{j as t,m}from"./framer-motion-cumc6SSu.js";import{C as d,e as p,B as g,a as f,o as x,c as u,g as h,S as s,b as c}from"./portfolio-home-D6Nu10WD.js";import{d as n}from"./styled-components-CFN5Od9r.js";import{S as j,T as b}from"./portfolio-skills-C-aJbrlE.js";const C=n(m.img)`
    border-radius: 8px;
`,$=({height:e,width:o,source:i,href:r,onClick:l})=>{const a=t.jsx(C,{src:i,height:e,width:o,onClick:l,alt:`Portfolio Image - ${i}`,animate:{opacity:1,scale:1},whileHover:{scale:1.05},transition:{duration:.5}});return r?t.jsx("a",{href:r,children:a}):a},w=n.div`
    position: relative;
    background-color: ${({theme:e})=>e.containerColor};
    border-radius: ${({theme:e})=>e.common.spacing.space05};
    box-shadow: 0 2px 6px rgba(38, 38, 38, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    border-left: 0.4rem solid ${({theme:e})=>e.common.firstColor};
    border-right: 0.4rem solid ${({theme:e})=>e.common.firstColor};
    padding: ${({theme:e})=>e.common.spacing.space10};
`,v=n.div`
    ${d}
    padding-right: ${({theme:e})=>e.common.spacing.space10};
    transition: transform 0.5s ease-in-out;
    cursor: default;

    @supports not (-webkit-overflow-scrolling: touch) {
        &:hover {
            transform: scale(1.1);
        }
    }
`,S=n.div`
    padding-top: ${({theme:e})=>e.common.spacing.space05};
`,y=n.h3`
    font-size: clamp(
        ${({theme:e})=>e.common.fontMaxWidth967.normalFont}, 
        2vw, 
        ${({theme:e})=>e.common.fontMinWidth968.normalFont}
    );
    margin-bottom: ${({theme:e})=>e.common.spacing.space20};
    transition: text-shadow 0.5s ease-in-out;

    @supports not (-webkit-overflow-scrolling: touch) {
        &:hover {
            text-shadow: 0 0 20px ${({theme:e})=>e.titleColor};
        }
    }
    cursor: default;
`,I=n.div`
    padding-bottom: ${({theme:e})=>e.common.spacing.space10};
    padding-top: ${({theme:e})=>e.common.spacing.space15};
`,P=({certificateMetaData:e})=>t.jsx(t.Fragment,{children:e.map(o=>t.jsx(p,{children:t.jsxs(w,{children:[t.jsx(v,{children:t.jsx($,{...o.imageProps})}),t.jsxs(S,{children:[t.jsx(y,{children:o.title}),t.jsx(I,{children:t.jsx(g,{...o.buttonProps,clickHandler:()=>x(o.buttonProps.link||""),icon:f.CertificateRightIcon,small:!0})})]})]},o.title)}))}),T=n.div`
    ${u}
    ${h}
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    margin-bottom: ${({theme:e})=>e.common.spacing.space25};

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
`,_=({sectionTitle:e,certificateProps:o})=>{const{certificateMetaData:i=[]}=o||{};return t.jsxs(s,{id:"certifications",children:[t.jsx(c,{content:e}),t.jsx(T,{children:t.jsx(P,{certificateMetaData:i})})]})},F=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),k=({title:e,timeline:o})=>t.jsxs(s,{id:"professionalexperience",children:[t.jsx(c,{content:e}),o.map((i,r)=>t.jsx(j,{children:t.jsx(b,{...i})},r))]}),L=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{F as C,$ as I,L as P};
