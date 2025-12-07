import{r as m,c as f,j as t,m as n}from"./vendor-motion-BoSVoJ0s.js";import{d as e,m as d}from"./vendor-styled-Du6AN5G6.js";import{t as a}from"./index-BX89pkpC.js";import{S as b}from"./SectionHeader-CgQnSfrS.js";import"./vendor-react-DlBnNAMw.js";const x=d`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,v=d`
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 157, 143, 0.2);
  }
`,y=e.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${a.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,u=e.div`
  max-width: 1200px;
  margin: 0 auto;
`,k=e(n.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 72px;
  
  @media (min-width: ${a.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`,w=e(n.div)``,j=e(n.h3)`
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: ${a.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  transition: color 0.4s ease;
`,C=e(n.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color 0.4s ease;
`,z=e(n.a)`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-size: 19px;
  font-weight: ${a.typography.fontWeight.medium};
  text-decoration: none;
  
  span {
    background: var(--gradient);
    background-size: 200% 200%;
    animation: ${x} 4s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  svg {
    width: 22px;
    height: 22px;
    color: var(--accent);
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover svg {
    transform: translateX(8px);
  }
`,L=e(n.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,W=e(n.a)`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient);
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: var(--gradient);
    background-size: 200% 200%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    border-color: transparent;
    text-decoration: none;
  }
  
  &:hover::after {
    opacity: 0.8;
    animation: ${x} 3s ease infinite;
  }
`,I=e(n.div)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-subtle);
  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  animation: ${v} 4s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: var(--gradient);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.4;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--cyan);
    position: relative;
    z-index: 1;
  }
`,M=e(n.div)`
  position: relative;
  z-index: 1;
`,$=e(n.span)`
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  transition: color 0.4s ease;
`,T=e(n.span)`
  font-size: 17px;
  font-weight: ${a.typography.fontWeight.medium};
  color: var(--text-primary);
  transition: color 0.4s ease;
`,p={mail:t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[t.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),t.jsx("path",{d:"M22 6L12 13 2 6"})]}),phone:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:t.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),linkedin:t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[t.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),t.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),t.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),location:t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[t.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),t.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},V={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},B={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},A={hidden:{opacity:0,x:30,scale:.95,filter:"blur(4px)"},visible:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},F=({data:c})=>{const l=m.useRef(null),o=f(l,{once:!0,margin:"-100px"}),h=i=>p[i.toLowerCase()]||p.mail,g=i=>({mail:"Email",phone:"Phone",linkedin:"LinkedIn",location:"Location"})[i.toLowerCase()]||i,s=c.contactMetaData.find(i=>i.icon.toLowerCase()==="mail");return t.jsx(y,{id:"contact",ref:l,children:t.jsxs(u,{children:[t.jsx(b,{number:"08",title:"Contact",inView:o}),t.jsxs(k,{variants:V,initial:"hidden",animate:o?"visible":"hidden",children:[t.jsxs(w,{variants:B,children:[t.jsx(j,{initial:{opacity:0,y:30},animate:o?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:18},children:"Let's work together"}),t.jsx(C,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:18,delay:.1},children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."}),s&&t.jsxs(z,{href:s.href,initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:18,delay:.2},whileHover:{scale:1.02},whileTap:{scale:.98},children:[t.jsx("span",{children:s.content}),t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),t.jsx(L,{children:c.contactMetaData.filter(i=>i.icon.toLowerCase()!=="phone").map((i,r)=>t.jsxs(W,{href:i.href,target:i.href.startsWith("http")?"_blank":void 0,rel:i.href.startsWith("http")?"noopener noreferrer":void 0,variants:A,custom:r,initial:"hidden",animate:o?"visible":"hidden",transition:{delay:.3+r*.1},whileHover:{x:12,scale:1.02,transition:{type:"spring",stiffness:400,damping:25}},whileTap:{scale:.98},children:[t.jsx(I,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:20},children:h(i.icon)}),t.jsxs(M,{children:[t.jsx($,{children:g(i.icon)}),t.jsx(T,{children:i.content})]})]},r))})]})]})})};export{F as Contact};
