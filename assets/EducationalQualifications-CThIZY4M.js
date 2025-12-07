import{r as d,c as l,j as t,m as e}from"./vendor-motion-BoSVoJ0s.js";import{d as i}from"./vendor-styled-Du6AN5G6.js";import{t as n}from"./index-B_riLmWu.js";import{S as c}from"./Section-BLglb4Xr.js";import"./vendor-react-DlBnNAMw.js";const m=i.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,x=i.div`
  max-width: 1200px;
  margin: 0 auto;
`,f=i(e.div)`
  display: flex;
  flex-direction: column;
`,h=i(e.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.4s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: var(--gradient);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (min-width: ${n.breakpoints.tablet}) {
    grid-template-columns: 200px 1fr;
    gap: 56px;
    
    &::before {
      left: 185px;
    }
  }
  
  &:first-child {
    padding-top: 0;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,b=i(e.span)`
  font-size: 15px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color 0.4s ease;
  font-weight: ${n.typography.fontWeight.medium};
`,g=i(e.div)``,u=i(e.h3)`
  font-size: 20px;
  font-weight: ${n.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color 0.4s ease;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    font-size: 22px;
  }
`,y=i(e.p)`
  font-size: 16px;
  color: var(--text-secondary);
  transition: color 0.4s ease;
`,v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12}}},w={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},j={hidden:{opacity:0,x:-20,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18,delay:.1}}},E=({data:p})=>{const r=d.useRef(null),o=l(r,{once:!0,margin:"-100px"});return t.jsx(m,{id:"educationalqualifications",ref:r,children:t.jsxs(x,{children:[t.jsx(c,{number:"07",title:"Education",inView:o}),t.jsx(f,{variants:v,initial:"hidden",animate:o?"visible":"hidden",children:p.timeline.map((a,s)=>t.jsxs(h,{variants:w,whileHover:{x:16,transition:{type:"spring",stiffness:400,damping:25}},children:[t.jsx(b,{initial:{opacity:0,y:10},animate:o?{opacity:1,y:0}:{},transition:{delay:.2+s*.1},children:a.date}),t.jsxs(g,{variants:j,children:[t.jsx(u,{children:a.title}),t.jsx(y,{children:a.subTitle})]})]},s))})]})})};export{E as EducationalQualifications};
