import{r as s,c as l,j as i,m as e}from"./vendor-motion-BoSVoJ0s.js";import{d as t,m as j}from"./vendor-styled-Du6AN5G6.js";import{t as n}from"./index-9Y-dfYCa.js";import{S as C}from"./SectionHeader-DoAHa-ia.js";import"./vendor-react-DlBnNAMw.js";const T=j`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,$=t.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,z=t.div`
  max-width: 1200px;
  margin: 0 auto;
`,V=t(e.div)`
  margin-bottom: 48px;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,H=t(e.div)`
  position: relative;
  padding-left: 36px;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    padding-left: 56px;
  }
`,I=t(e.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient);
  background-size: 100% 200%;
  animation: ${T} 3s ease infinite;
  border-radius: 2px;
  transform-origin: top;
`,R=t(e.p)`
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: ${n.typography.fontWeight.regular};
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-style: italic;
  transition: color 0.4s ease;
`,A=t(e.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 64px;
  }
`,f=t(e.div)``,b=t(e.h3)`
  font-size: 13px;
  font-weight: ${n.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
  transition: color 0.4s ease, border-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`,u=t(e.p)`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.85;
  transition: color 0.4s ease;
`,S=t(e.div)`
  margin-bottom: 48px;
`,W=t(e.h3)`
  font-size: 13px;
  font-weight: ${n.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  transition: color 0.4s ease;
`,P=t(e.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: ${n.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    transition: background-color 0.4s ease, border-color 0.4s ease;
  }
`,L=t(e.div)`
  background: var(--bg-primary);
  padding: 36px;
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (min-width: ${n.breakpoints.mobile}) {
    padding: 48px 36px;
  }
  
  @media (min-width: ${n.breakpoints.tablet}) {
    padding: 56px 44px;
  }
`,M=t(e.h4)`
  font-size: 19px;
  font-weight: ${n.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 18px;
  line-height: 1.35;
  transition: color 0.4s ease;
`,X=t(e.p)`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color 0.4s ease;
`,E=t(e.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding-top: 56px;
  border-top: 1px solid var(--border);
  transition: border-color 0.4s ease;
  
  @media (min-width: ${n.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,B=t(e.p)`
  font-size: 19px;
  color: var(--text-secondary);
  transition: color 0.4s ease;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    font-size: 21px;
  }
`,D=t(e.a)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${n.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: ${n.borderRadius.full};
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,Q={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},q={hidden:{opacity:0,y:50,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:20,mass:1}}},K={hidden:{scaleY:0},visible:{scaleY:1,transition:{type:"spring",stiffness:100,damping:20,delay:.2}}},y={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:r=>({opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,delay:r*.15}})},O={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},Y={hidden:{opacity:0,y:40,scale:.95,filter:"blur(6px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},G=({data:r})=>{const d=s.useRef(null),c=l(d,{once:!0,margin:"-100px"}),g=s.useRef(null),v=l(g,{once:!0,margin:"-50px"}),m=s.useRef(null),o=l(m,{once:!0,margin:"-50px"}),h=s.useRef(null),x=l(h,{once:!0,margin:"-50px"}),p=r.content.slice(0,3).map(a=>a.replace(/^🔹\s*/,"").trim()),w=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}];return i.jsx($,{id:"about",ref:d,children:i.jsxs(z,{children:[i.jsx(C,{number:"01",title:"About",inView:c}),i.jsx(V,{ref:g,children:i.jsxs(H,{initial:"hidden",animate:v?"visible":"hidden",variants:Q,children:[i.jsx(I,{variants:K}),i.jsx(R,{variants:q,children:p[0]})]})}),i.jsxs(A,{ref:m,children:[i.jsxs(f,{variants:y,custom:0,initial:"hidden",animate:o?"visible":"hidden",children:[i.jsx(b,{initial:{opacity:0,x:-20},animate:o?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Transformation"}),i.jsx(u,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:p[1]})]}),i.jsxs(f,{variants:y,custom:1,initial:"hidden",animate:o?"visible":"hidden",children:[i.jsx(b,{initial:{opacity:0,x:-20},animate:o?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.15},children:"Philosophy"}),i.jsx(u,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.25},children:p[2]})]})]}),i.jsxs(S,{ref:h,children:[i.jsx(W,{initial:{opacity:0,y:20},animate:x?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Key Highlights"}),i.jsx(P,{variants:O,initial:"hidden",animate:x?"visible":"hidden",children:w.map((a,k)=>i.jsxs(L,{variants:Y,whileHover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},children:[i.jsx(M,{children:a.title}),i.jsx(X,{children:a.text})]},k))})]}),i.jsxs(E,{initial:{opacity:0,y:30},animate:c?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[i.jsx(B,{children:"Want to know more?"}),i.jsxs(D,{href:r.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[i.jsx("span",{children:r.buttonProps.name}),i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})})};export{G as About};
