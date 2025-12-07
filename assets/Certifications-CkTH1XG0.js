import{r as p,c,j as e,m as o}from"./vendor-motion-BoSVoJ0s.js";import{d as i}from"./vendor-styled-Du6AN5G6.js";import{t as r}from"./index-B_riLmWu.js";import{S as f}from"./Section-BLglb4Xr.js";import"./vendor-react-DlBnNAMw.js";const x=i.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${r.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,h=i.div`
  max-width: 1200px;
  margin: 0 auto;
`,m=i(o.div)`
  display: flex;
  flex-direction: column;
`,b=i(o.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.4s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (min-width: ${r.breakpoints.tablet}) {
    padding: 36px 0;
  }
  
  &:first-child {
    padding-top: 0;
  }
  
  &:last-child {
    border-bottom: none;
    
    &::before {
      display: none;
    }
  }
`,g=i(o.div)`
  flex: 1;
`,v=i(o.h3)`
  font-size: 18px;
  font-weight: ${r.typography.fontWeight.semibold};
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  transition: color 0.4s ease;
  
  @media (min-width: ${r.breakpoints.tablet}) {
    font-size: 20px;
  }
`,u=i(o.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
`,y=i(o.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: ${r.typography.fontWeight.medium};
  color: var(--blue);
  text-decoration: none;
  border: 1.5px solid var(--border);
  border-radius: ${r.borderRadius.full};
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent-subtle);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: var(--blue);
    text-decoration: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
  
  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translate(2px, -2px);
  }
`,w={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},j={hidden:{opacity:0,x:-40,filter:"blur(8px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},L=({data:a})=>{const n=p.useRef(null),s=c(n,{once:!0,margin:"-100px"}),d=t=>t.toLowerCase().includes("azure")||t.toLowerCase().includes("microsoft")?"Microsoft":t.toLowerCase().includes("aws")?"Amazon Web Services":"";return e.jsx(x,{id:"certifications",ref:n,children:e.jsxs(h,{children:[e.jsx(f,{number:"05",title:"Certifications",inView:s}),e.jsx(m,{variants:w,initial:"hidden",animate:s?"visible":"hidden",children:a.certificateProps.certificateMetaData.map((t,l)=>e.jsxs(b,{variants:j,whileHover:{x:12,transition:{type:"spring",stiffness:400,damping:25}},children:[e.jsxs(g,{children:[e.jsx(v,{children:t.title}),e.jsx(u,{children:d(t.title)})]}),e.jsxs(y,{href:t.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[e.jsx("span",{children:"Verify"}),e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),e.jsx("polyline",{points:"15,3 21,3 21,9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]},l))})]})})};export{L as Certifications};
