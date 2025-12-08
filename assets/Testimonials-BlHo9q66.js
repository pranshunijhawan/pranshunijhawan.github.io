import{r as d,c,j as i,m as e}from"./vendor-motion-BoSVoJ0s.js";import{d as t,m as l}from"./vendor-styled-Du6AN5G6.js";import{t as n}from"./index-9Y-dfYCa.js";import{S as m}from"./SectionHeader-DoAHa-ia.js";import"./vendor-react-DlBnNAMw.js";const x=l`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,b=t.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,g=t.div`
  max-width: 1200px;
  margin: 0 auto;
`,f=t(e.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
`,u=t(e.blockquote)`
  padding: 44px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 24px;
  margin: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: var(--gradient);
    background-size: 200% 200%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 0.5;
    animation: ${x} 3s ease infinite;
  }
  
  &:hover {
    border-color: transparent;
  }
  
  @media (min-width: ${n.breakpoints.tablet}) {
    padding: 52px;
  }
`,y=t(e.div)`
  font-size: 56px;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 24px;
  font-weight: bold;
`,h=t(e.p)`
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 28px;
  font-style: italic;
  transition: color 0.4s ease;
  
  @media (min-width: ${n.breakpoints.tablet}) {
    font-size: 18px;
  }
`,v=t(e.footer)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,k=t(e.cite)`
  font-size: 16px;
  font-weight: ${n.typography.fontWeight.semibold};
  color: var(--text-primary);
  font-style: normal;
  transition: color 0.4s ease;
`,w=t(e.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
`,j={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},T={hidden:{opacity:0,y:50,scale:.95,filter:"blur(10px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},V={hidden:{opacity:0,scale:.5,filter:"blur(4px)"},visible:{opacity:.5,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:150,damping:15}}},z={hidden:{opacity:0,y:15,filter:"blur(4px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18,delay:.1}}},R=({data:p})=>{const s=d.useRef(null),o=c(s,{once:!0,margin:"-100px"});return i.jsx(b,{id:"testimonials",ref:s,children:i.jsxs(g,{children:[i.jsx(m,{number:"06",title:"Testimonials",inView:o}),i.jsx(f,{variants:j,initial:"hidden",animate:o?"visible":"hidden",children:p.quoteProps.quoteMetaData.map((a,r)=>i.jsxs(u,{variants:T,whileHover:{y:-10,scale:1.02,transition:{type:"spring",stiffness:300,damping:20}},children:[i.jsx(y,{variants:V,children:'"'}),i.jsx(h,{variants:z,children:a.quote}),i.jsxs(v,{children:[i.jsx(k,{initial:{opacity:0,x:-10},animate:o?{opacity:1,x:0}:{},transition:{delay:.3+r*.1},children:a.givenBy}),i.jsx(w,{initial:{opacity:0,x:-10},animate:o?{opacity:1,x:0}:{},transition:{delay:.35+r*.1},children:a.subTitleGivenBy})]})]},r))})]})})};export{R as Testimonials};
