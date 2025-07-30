import{j as o,m}from"./framer-motion-DLV44IgS.js";import{C as d,B as p,a as g,o as f,c as x,g as u,S as s,b as c,e as h}from"./portfolio-home-CK3_rX1Z.js";import{d as n}from"./styled-components-BG4sEAvZ.js";import{S as j,T as b}from"./portfolio-skills-B7ABMwsI.js";const C=n(m.img)`
    border-radius: 8px;
`,$=({height:e,width:t,source:i,href:r,onClick:l})=>{const a=o.jsx(C,{src:i,height:e,width:t,onClick:l,alt:`Portfolio Image - ${i}`,animate:{opacity:1,scale:1},whileHover:{scale:1.05},transition:{duration:.5}});return r?o.jsx("a",{href:r,children:a}):a},w=n.div`
    position: relative;
    background-color: ${({theme:e})=>e.containerColor};
    border-radius: ${({theme:e})=>e.common.spacing.space05};
    box-shadow: 0 2px 6px rgba(38, 38, 38, 0.1);
    display: flex;
    flex: 1;
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
`,P=({certificateMetaData:e})=>o.jsx(o.Fragment,{children:e.map(t=>o.jsxs(w,{children:[o.jsx(v,{children:o.jsx($,{...t.imageProps})}),o.jsxs(S,{children:[o.jsx(y,{children:t.title}),o.jsx(I,{children:o.jsx(p,{...t.buttonProps,clickHandler:()=>f(t.buttonProps.link||""),icon:g.CertificateRightIcon,small:!0})})]})]},t.title))}),T=n.div`
    ${x}
    ${u}
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
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
`,_=({sectionTitle:e,certificateProps:t})=>{const{certificateMetaData:i=[]}=t||{};return o.jsxs(s,{id:"certifications",children:[o.jsx(c,{content:e}),o.jsx(h,{children:o.jsx(T,{children:o.jsx(P,{certificateMetaData:i})})})]})},F=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),k=({title:e,timeline:t})=>o.jsxs(s,{id:"professionalexperience",children:[o.jsx(c,{content:e}),t.map((i,r)=>o.jsx(j,{children:o.jsx(b,{...i})},r))]}),L=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{F as C,$ as I,L as P};
