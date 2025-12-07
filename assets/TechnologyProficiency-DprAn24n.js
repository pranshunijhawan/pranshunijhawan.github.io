import{r as d,c as m,j as i,m as e}from"./vendor-motion-BoSVoJ0s.js";import{d as t}from"./vendor-styled-Du6AN5G6.js";import{t as r}from"./index-BqjguVdZ.js";import{S as g}from"./Section-BGkULATQ.js";import"./vendor-react-DlBnNAMw.js";const f=t.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${r.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,x=t.div`
  max-width: 1200px;
  margin: 0 auto;
`,h=t(e.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  
  @media (min-width: ${r.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 72px;
  }
  
  @media (min-width: ${r.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 56px 88px;
  }
`,y=t(e.div)``,u=t(e.h3)`
  font-size: 13px;
  font-weight: ${r.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 28px;
  position: relative;
  transition: color 0.4s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`,b=t(e.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,v=t(e.li)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,w=t(e.div)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,j=t(e.span)`
  font-size: 15px;
  color: var(--text-primary);
  transition: color 0.4s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`,k=t(e.span)`
  font-size: 13px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: ${r.typography.fontWeight.medium};
  transition: color 0.4s ease;
`,S=t(e.div)`
  width: 100%;
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
  transition: background-color 0.4s ease;
  position: relative;
`,C=t(e.div)`
  height: 100%;
  background: var(--gradient-horizontal);
  border-radius: 2px;
  transform-origin: left;
`,V={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},$={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18,staggerChildren:.06,delayChildren:.1}}},z={hidden:{opacity:0,x:-20,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:120,damping:20}}},X={hidden:{scaleX:0,opacity:0},visible:o=>({scaleX:o/100,opacity:1,transition:{scaleX:{type:"spring",stiffness:50,damping:15,mass:1},opacity:{duration:.3}}})},G=({data:o})=>{const l=d.useRef(null),n=m(l,{once:!0,margin:"-100px"});return i.jsx(f,{id:"technologyproficiency",ref:l,children:i.jsxs(x,{children:[i.jsx(g,{number:"02",title:"Skills",inView:n}),i.jsx(h,{variants:V,initial:"hidden",animate:n?"visible":"hidden",children:o.skills.map((p,s)=>i.jsxs(y,{variants:$,custom:s,children:[i.jsx(u,{initial:{opacity:0,x:-20},animate:n?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.2+s*.08},children:p.category}),i.jsx(b,{children:p.skills.map((a,c)=>i.jsxs(v,{variants:z,whileHover:{x:8,transition:{type:"spring",stiffness:400,damping:25}},children:[i.jsxs(w,{children:[i.jsx(j,{children:a.name}),i.jsxs(k,{initial:{opacity:0,scale:.8},animate:n?{opacity:1,scale:1}:{},transition:{type:"spring",stiffness:150,damping:20,delay:.4+s*.1+c*.05},children:[a.percentage,"%"]})]}),i.jsx(S,{children:i.jsx(C,{variants:X,custom:a.percentage,initial:"hidden",animate:n?"visible":"hidden",transition:{delay:.5+s*.1+c*.06},style:{width:`${a.percentage}%`}})})]},a.name))})]},p.category))})]})})};export{G as TechnologyProficiency};
