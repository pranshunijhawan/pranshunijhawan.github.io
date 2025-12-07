import{r as x,c as j,j as e,A as m,m as a}from"./vendor-motion-BoSVoJ0s.js";import{d as n,l as $,m as v}from"./vendor-styled-Du6AN5G6.js";import{t as s}from"./index-sDINhADT.js";import{S as C}from"./Section-CwT4PFr4.js";import"./vendor-react-DlBnNAMw.js";const y=v`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,T=v`
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 157, 143, 0.2);
  }
`,E=n.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  
  @media (min-width: ${s.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,z=n.div`
  max-width: 1200px;
  margin: 0 auto;
`,H=n(a.div)`
  position: relative;
`,I=n.div`
  position: relative;
  perspective: 1000px;
`,V=n(a.article)`
  border-radius: 24px;
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${T} 4s ease-in-out infinite;
  
  /* Glass morphism */
  background: var(--glass-bg);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  transition: background 0.4s ease;
  
  /* Border gradient */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1.5px;
    background: var(--gradient);
    background-size: 200% 200%;
    animation: ${y} 4s ease infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.6;
  }
  
  @media (min-width: ${s.breakpoints.tablet}) {
    border-radius: 28px;
    
    &::before {
      border-radius: 28px;
    }
  }
`,M=n(a.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 32px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      var(--glass-bg-hover),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  @media (min-width: ${s.breakpoints.tablet}) {
    padding: 32px 40px;
  }
`,P=n(a.h3)`
  font-size: 20px;
  font-weight: ${s.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.35;
  flex: 1;
  transition: color 0.4s ease;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${s.breakpoints.tablet}) {
    font-size: 24px;
  }
`,B=n(a.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid ${({$isExpanded:t})=>t?"var(--accent)":"var(--border)"};
  background: ${({$isExpanded:t})=>t?"var(--accent-subtle)":"transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  will-change: transform, background, border-color;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: var(--gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$isExpanded:t})=>t?"var(--accent)":"var(--text-secondary)"};
    will-change: transform;
  }
`,S=n(a.div)`
  overflow: hidden;
  will-change: height;
`,W=n(a.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--border);
  padding-top: 28px;
  transition: border-color 0.4s ease;
  
  @media (min-width: ${s.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,A=n(a.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${s.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,Y=n(a.li)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  padding-left: 22px;
  position: relative;
  transition: color 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    background: var(--gradient);
    border-radius: 50%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 12px var(--accent);
  }
  
  @media (min-width: ${s.breakpoints.tablet}) {
    font-size: 16px;
  }
`,D=n(a.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${s.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,u=n(a.button)`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--glass-bg);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }
  
  &:hover:not(:disabled)::before {
    opacity: 1;
  }
  
  &:hover:not(:disabled) {
    border-color: var(--text-secondary);
    color: var(--text-primary);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  svg {
    width: 22px;
    height: 22px;
    position: relative;
    z-index: 1;
  }
`,R=n(a.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,G=n(a.button)`
  width: ${({$isActive:t})=>t?"36px":"12px"};
  height: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${({$isActive:t})=>t?"var(--gradient)":"var(--border)"};
  background-size: 200% 200%;
  ${({$isActive:t})=>t&&$`
    animation: ${y} 3s ease infinite;
  `}
  will-change: width, background;
  
  &:hover {
    background: ${({$isActive:t})=>t?"var(--gradient)":"var(--text-tertiary)"};
  }
`,N={enter:t=>({x:t>0?100:-100,opacity:0,scale:.95,rotateY:t>0?5:-5,filter:"blur(10px)"}),center:{x:0,opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:30}},exit:t=>({x:t<0?100:-100,opacity:0,scale:.95,rotateY:t<0?5:-5,filter:"blur(10px)",transition:{type:"spring",stiffness:300,damping:30}})},X={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},_={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.1}}},F={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.15}}},L={collapsed:{opacity:0,x:-20,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},ee=({data:t})=>{const[[r,g],h]=x.useState([0,0]),[d,l]=x.useState(!1),f=x.useRef(null),c=j(f,{once:!0,margin:"-100px"}),p=o=>{const i=r+o;i>=0&&i<t.content.length&&(h([i,o]),l(!1))},w=o=>{const i=o>r?1:-1;h([o,i]),l(!1)},k=(o,i)=>{i.offset.x>50||i.velocity.x>500?r>0&&p(-1):(i.offset.x<-50||i.velocity.x<-500)&&r<t.content.length-1&&p(1)},b=t.content[r];return e.jsx(E,{id:"mostproudof",ref:f,children:e.jsxs(z,{children:[e.jsx(C,{number:"04",title:"Projects",inView:c}),e.jsxs(H,{initial:{opacity:0,y:40},animate:c?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[e.jsx(I,{children:e.jsx(m,{initial:!1,custom:g,mode:"wait",children:e.jsxs(V,{custom:g,variants:N,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.2,onDragEnd:k,transition:{x:{type:"spring",stiffness:350,damping:30},opacity:{duration:.25},scale:{type:"spring",stiffness:350,damping:30},rotateY:{type:"spring",stiffness:350,damping:30},filter:{duration:.3}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.02},children:[e.jsxs(M,{$isExpanded:d,onClick:()=>l(!d),whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[e.jsx(P,{children:b.title}),e.jsx(B,{$isExpanded:d,animate:{rotate:d?45:0,scale:d?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:e.jsx(a.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),e.jsx(m,{initial:!1,children:d&&e.jsx(S,{variants:X,initial:"collapsed",animate:"expanded",exit:"collapsed",children:e.jsx(W,{variants:_,children:e.jsx(A,{variants:F,initial:"collapsed",animate:"expanded",exit:"collapsed",children:b.content.map((o,i)=>e.jsx(Y,{variants:L,children:o},i))})})})})]},r)})}),e.jsxs(D,{initial:{opacity:0,y:20},animate:c?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[e.jsx(u,{onClick:()=>p(-1),disabled:r===0,whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),e.jsx(R,{children:t.content.map((o,i)=>e.jsx(G,{$isActive:r===i,onClick:()=>w(i),whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:r===i?36:12},transition:{type:"spring",stiffness:400,damping:25}},i))}),e.jsx(u,{onClick:()=>p(1),disabled:r===t.content.length-1,whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})};export{ee as MostProudOf};
