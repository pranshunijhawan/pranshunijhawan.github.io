import{d as i,l as o,m as g}from"./vendor-styled-Du6AN5G6.js";import{t}from"./index-BqjguVdZ.js";import{m as r,j as n}from"./vendor-motion-BoSVoJ0s.js";i.div`
  width: 100%;
  max-width: ${({$wide:e})=>e?t.maxWidth.full:t.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${t.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${t.breakpoints.tablet}) {
    padding: 0 48px;
  }
`;const s={primary:o`
    color: ${t.colors.bgPrimary};
    background: ${t.colors.textPrimary};
    
    &:hover {
      background: ${t.colors.textSecondary};
    }
  `,secondary:o`
    color: ${t.colors.textPrimary};
    background: transparent;
    border: 1px solid ${t.colors.border};
    
    &:hover {
      border-color: ${t.colors.textSecondary};
    }
  `,ghost:o`
    color: ${t.colors.accent};
    background: transparent;
    
    &:hover {
      text-decoration: underline;
    }
  `},p={sm:o`
    padding: 8px 16px;
    font-size: 13px;
  `,md:o`
    padding: 12px 24px;
    font-size: 14px;
  `,lg:o`
    padding: 16px 32px;
    font-size: 16px;
  `};i(r.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${t.typography.fontFamily};
  font-weight: ${t.typography.fontWeight.medium};
  border-radius: ${t.borderRadius.full};
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  
  ${({$size:e="md"})=>p[e]}
  ${({$variant:e="primary"})=>s[e]}
`;i(r.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${t.typography.fontFamily};
  font-weight: ${t.typography.fontWeight.medium};
  border-radius: ${t.borderRadius.full};
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  
  ${({$size:e="md"})=>p[e]}
  ${({$variant:e="primary"})=>s[e]}
`;const d=g`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,m=i(r.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${t.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,h=i.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${t.breakpoints.tablet}) {
    gap: 32px;
  }
`,x=i(r.div)`
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
  
  @media (min-width: ${t.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }
`,b=i.span`
  font-size: 14px;
  font-weight: ${t.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${d} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  
  @media (min-width: ${t.breakpoints.tablet}) {
    font-size: 16px;
  }
`,y=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f=i(r.span)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  font-weight: ${t.typography.fontWeight.medium};
  transition: color 0.4s ease;
  
  @media (min-width: ${t.breakpoints.tablet}) {
    font-size: 12px;
    letter-spacing: 0.18em;
  }
`,u=i(r.h2)`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: ${t.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
  transition: color 0.4s ease;
  margin: 0;
`,$=i(r.div)`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 2px;
  width: 60px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${d} 3s ease infinite;
  border-radius: 1px;
  transform-origin: left;
  
  @media (min-width: ${t.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,w={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},k={hidden:{opacity:0,scale:.8,filter:"blur(4px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},v={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:150,damping:20}}},z={hidden:{opacity:0,y:20,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},j={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},W={About:"Who I Am",Skills:"Technical Expertise",Experience:"Career Journey",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background",Contact:"Get In Touch"},E=({number:e,title:a,inView:l=!0})=>{const c=W[a]||"Section";return n.jsxs(m,{variants:w,initial:"hidden",animate:l?"visible":"hidden",children:[n.jsxs(h,{children:[n.jsx(x,{variants:k,children:n.jsx(b,{children:e})}),n.jsxs(y,{children:[n.jsx(f,{variants:v,children:c}),n.jsx(u,{variants:z,children:a})]})]}),n.jsx($,{variants:j})]})};i.section`
  padding: 64px 24px;
  
  @media (min-width: ${t.breakpoints.tablet}) {
    padding: ${t.space.section} 80px;
  }
`;i.p`
  font-size: ${t.typography.fontSize.caption};
  font-weight: ${t.typography.fontWeight.medium};
  color: ${t.colors.textTertiary};
  letter-spacing: ${t.typography.letterSpacing.wide};
  text-transform: uppercase;
  margin-bottom: ${t.space.sm};
`;i.h2`
  font-size: ${t.typography.fontSize.headline};
  font-weight: ${t.typography.fontWeight.semibold};
  color: ${t.colors.textPrimary};
  letter-spacing: ${t.typography.letterSpacing.tight};
  line-height: ${t.typography.lineHeight.tight};
`;export{E as S};
