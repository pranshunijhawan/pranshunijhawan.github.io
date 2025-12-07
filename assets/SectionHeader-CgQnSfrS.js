import{d as t,m as p}from"./vendor-styled-Du6AN5G6.js";import{t as i}from"./index-BX89pkpC.js";import{j as e,m as n}from"./vendor-motion-BoSVoJ0s.js";t.div`
  width: 100%;
  max-width: ${({$wide:a})=>a?i.maxWidth.full:i.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${i.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${i.breakpoints.tablet}) {
    padding: 0 48px;
  }
`;const o=p`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,c=t(n.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${i.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,l=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${i.breakpoints.tablet}) {
    gap: 32px;
  }
`,m=t(n.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.15) 0%,
    rgba(67, 97, 165, 0.1) 100%
  );
  border: 1px solid rgba(42, 157, 143, 0.2);
  flex-shrink: 0;
  
  @media (min-width: ${i.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }
`,b=t.span`
  font-size: 14px;
  font-weight: ${i.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${o} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  
  @media (min-width: ${i.breakpoints.tablet}) {
    font-size: 16px;
  }
`,x=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,g=t(n.span)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  font-weight: ${i.typography.fontWeight.medium};
  transition: color 0.4s ease;
  
  @media (min-width: ${i.breakpoints.tablet}) {
    font-size: 12px;
    letter-spacing: 0.18em;
  }
`,h=t(n.h2)`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: ${i.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
  transition: color 0.4s ease;
  margin: 0;
`,f=t(n.div)`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 2px;
  width: 60px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${o} 3s ease infinite;
  border-radius: 1px;
  transform-origin: left;
  
  @media (min-width: ${i.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},y={hidden:{opacity:0,scale:.8,filter:"blur(4px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},w={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:150,damping:20}}},k={hidden:{opacity:0,y:20,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},v={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},$={About:"Who I Am",Skills:"Technical Expertise",Experience:"Career Journey",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background",Contact:"Get In Touch"},C=({number:a,title:r,inView:s=!0})=>{const d=$[r]||"Section";return e.jsxs(c,{variants:u,initial:"hidden",animate:s?"visible":"hidden",children:[e.jsxs(l,{children:[e.jsx(m,{variants:y,children:e.jsx(b,{children:a})}),e.jsxs(x,{children:[e.jsx(g,{variants:w,children:d}),e.jsx(h,{variants:k,children:r})]})]}),e.jsx(f,{variants:v})]})};export{C as S};
