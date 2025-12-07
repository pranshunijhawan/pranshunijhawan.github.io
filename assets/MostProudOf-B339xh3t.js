import{r as o,c as H,j as t,A as C,m as s}from"./vendor-motion-BoSVoJ0s.js";import{d as a,l as V,m as E}from"./vendor-styled-Du6AN5G6.js";import{t as d}from"./index-BqjguVdZ.js";import{S as W}from"./Section-BGkULATQ.js";import"./vendor-react-DlBnNAMw.js";const M=E`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,A=E`
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 157, 143, 0.2);
  }
`,S=a.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,B=a.div`
  max-width: 1200px;
  margin: 0 auto;
`,R=a(s.div)`
  position: relative;
`,D=a.div`
  position: relative;
  perspective: 1000px;
`,G=a(s.article)`
  border-radius: 24px;
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${A} 4s ease-in-out infinite;
  
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
    animation: ${M} 4s ease infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.6;
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    border-radius: 28px;
    
    &::before {
      border-radius: 28px;
    }
  }
`,N=a(s.div)`
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
  
  @media (min-width: ${d.breakpoints.tablet}) {
    padding: 32px 40px;
  }
`,X=a(s.h3)`
  font-size: 20px;
  font-weight: ${d.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.35;
  flex: 1;
  transition: color 0.4s ease;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    font-size: 24px;
  }
`,L=a(s.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid ${({$isExpanded:e})=>e?"var(--accent)":"var(--border)"};
  background: ${({$isExpanded:e})=>e?"var(--accent-subtle)":"transparent"};
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
    color: ${({$isExpanded:e})=>e?"var(--accent)":"var(--text-secondary)"};
    will-change: transform;
  }
`,Y=a(s.div)`
  overflow: hidden;
  will-change: height;
`,F=a(s.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--border);
  padding-top: 28px;
  transition: border-color 0.4s ease;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,O=a(s.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,_=a(s.li)`
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
  
  @media (min-width: ${d.breakpoints.tablet}) {
    font-size: 16px;
  }
`,q=a(s.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,$=a(s.button)`
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
`,J=a(s.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,K=a(s.button)`
  width: ${({$isActive:e})=>e?"36px":"12px"};
  height: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${({$isActive:e})=>e?"var(--gradient)":"var(--border)"};
  background-size: 200% 200%;
  ${({$isActive:e})=>e&&V`
    animation: ${M} 3s ease infinite;
  `}
  will-change: width, background;
  
  &:hover {
    background: ${({$isActive:e})=>e?"var(--gradient)":"var(--text-tertiary)"};
  }
`,Q={enter:e=>({x:e>0?80:-80,opacity:0,scale:.98}),center:{x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:500,damping:35,mass:.8}},exit:e=>({x:e<0?80:-80,opacity:0,scale:.98,transition:{type:"spring",stiffness:500,damping:35,mass:.8}})},U={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},Z={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.1}}},ee={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.15}}},te={collapsed:{opacity:0,x:-20,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},le=({data:e})=>{const[[n,m],v]=o.useState([0,0]),[p,b]=o.useState(!1),[x,h]=o.useState(!1),y=o.useRef(null),w=o.useRef(null),k=o.useRef(0),u=H(y,{once:!0,margin:"-100px"}),c=o.useCallback(r=>{if(x)return;const i=n+r;i>=0&&i<e.content.length&&(h(!0),v([i,r]),b(!1),setTimeout(()=>h(!1),350))},[n,e.content.length,x]),P=o.useCallback(r=>{if(x||r===n)return;const i=r>n?1:-1;h(!0),v([r,i]),b(!1),setTimeout(()=>h(!1),350)},[n,x]);o.useEffect(()=>{const r=w.current;if(!r)return;const i=l=>{const g=Date.now();if(g-k.current<300)return;const f=Math.abs(l.deltaX)>Math.abs(l.deltaY)?l.deltaX:l.deltaY;if(Math.abs(f)>20){const z=n<e.content.length-1,I=n>0;(f>0&&z||f<0&&I)&&(l.preventDefault(),l.stopPropagation(),k.current=g,f>0?c(1):c(-1))}};return r.addEventListener("wheel",i,{passive:!1}),()=>r.removeEventListener("wheel",i)},[n,e.content.length,c]);const T=o.useCallback((r,i)=>{if(x)return;const l=30,g=200;i.velocity.x>g||i.offset.x>l?n>0&&c(-1):(i.velocity.x<-g||i.offset.x<-l)&&n<e.content.length-1&&c(1)},[n,e.content.length,x,c]),j=e.content[n];return t.jsx(S,{id:"mostproudof",ref:y,children:t.jsxs(B,{children:[t.jsx(W,{number:"04",title:"Projects",inView:u}),t.jsxs(R,{initial:{opacity:0,y:40},animate:u?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[t.jsx(D,{ref:w,children:t.jsx(C,{initial:!1,custom:m,mode:"wait",children:t.jsxs(G,{custom:m,variants:Q,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.1,dragMomentum:!1,onDragEnd:T,transition:{x:{type:"spring",stiffness:500,damping:35,mass:.8},opacity:{duration:.2},scale:{type:"spring",stiffness:500,damping:35,mass:.8}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.01},children:[t.jsxs(N,{$isExpanded:p,onClick:()=>b(!p),whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[t.jsx(X,{children:j.title}),t.jsx(L,{$isExpanded:p,"aria-label":p?"Collapse project details":"Expand project details","aria-expanded":p,animate:{rotate:p?45:0,scale:p?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:t.jsx(s.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:t.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),t.jsx(C,{initial:!1,children:p&&t.jsx(Y,{variants:U,initial:"collapsed",animate:"expanded",exit:"collapsed",children:t.jsx(F,{variants:Z,children:t.jsx(O,{variants:ee,initial:"collapsed",animate:"expanded",exit:"collapsed",children:j.content.map((r,i)=>t.jsx(_,{variants:te,children:r},i))})})})})]},n)})}),t.jsxs(q,{initial:{opacity:0,y:20},animate:u?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[t.jsx($,{onClick:()=>c(-1),disabled:n===0,"aria-label":"Previous project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:t.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),t.jsx(J,{role:"tablist","aria-label":"Project navigation",children:e.content.map((r,i)=>t.jsx(K,{$isActive:n===i,onClick:()=>P(i),role:"tab","aria-selected":n===i,"aria-label":`Go to project ${i+1}: ${r.title}`,whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:n===i?36:12},transition:{type:"spring",stiffness:400,damping:25}},i))}),t.jsx($,{onClick:()=>c(1),disabled:n===e.content.length-1,"aria-label":"Next project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:t.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})};export{le as MostProudOf};
