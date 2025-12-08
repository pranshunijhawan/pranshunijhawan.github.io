import{r as d,c as g,j as t,m as i,A as y}from"./vendor-motion-BoSVoJ0s.js";import{d as e,l as b,m as v}from"./vendor-styled-Du6AN5G6.js";import{t as o}from"./index-naQFyp8r.js";import{S as u}from"./SectionHeader-Bwlbrd_D.js";import"./vendor-react-DlBnNAMw.js";const w=v`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(42, 157, 143, 0);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(42, 157, 143, 0.15);
  }
`,j=e.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${o.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,k=e.div`
  max-width: 1200px;
  margin: 0 auto;
`,E=e(i.div)``,$=e(i.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: border-color 0.4s ease;
  position: relative;
  
  @media (min-width: ${o.breakpoints.tablet}) {
    grid-template-columns: 200px 1fr;
    gap: 56px;
    padding: 48px 0;
  }
  
  &:first-child {
    padding-top: 0;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::before {
    transform: scaleY(1);
  }
  
  @media (min-width: ${o.breakpoints.tablet}) {
    &::before {
      left: -48px;
    }
  }
`,z=e(i.div)``,C=e(i.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color 0.4s ease;
`,S=e(i.div)``,V=e(i.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 10px;
`,I=e(i.h3)`
  font-size: 22px;
  font-weight: ${o.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.01em;
  transition: color 0.4s ease;
  
  @media (min-width: ${o.breakpoints.tablet}) {
    font-size: 24px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--gradient);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    
    &:hover {
      color: var(--accent);
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`,P=e(i.div)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({$isOpen:r})=>r?"var(--accent)":"transparent"};
  border: 1.5px solid ${({$isOpen:r})=>r?"var(--accent)":"var(--border)"};
  flex-shrink: 0;
  will-change: transform, background, border-color;
  
  ${({$isOpen:r})=>r&&b`
    animation: ${w} 2s ease-in-out infinite;
  `}
  
  svg {
    width: 14px;
    height: 14px;
    color: ${({$isOpen:r})=>r?"var(--bg-primary)":"var(--text-secondary)"};
    will-change: transform;
  }
`,H=e(i.p)`
  font-size: 16px;
  color: var(--accent);
  font-weight: ${o.typography.fontWeight.medium};
  margin-bottom: 6px;
  transition: color 0.4s ease;
`,R=e(i.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`,T=e.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: ${o.typography.fontWeight.medium};
`,W=e.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
  transition: color 0.4s ease;
`,A=e(i.p)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color 0.4s ease;
  
  a {
    color: var(--blue);
    text-decoration: none;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--blue);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`,M=e(i.div)`
  overflow: hidden;
  will-change: height, opacity;
`,X=e(i.div)`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  will-change: transform, opacity;
  transition: border-color 0.4s ease;
`,L=e(i.ul)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,_=e(i.li)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  padding-left: 20px;
  position: relative;
  will-change: transform, opacity;
  transition: color 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: 50%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 10px var(--accent);
  }
`,Y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12}}},B={hidden:{opacity:0,y:50,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},D={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35,mass:1},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},G={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.08}}},O={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.12}}},q={collapsed:{opacity:0,x:-15,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},U=({data:r})=>{const[x,h]=d.useState(new Set),c=d.useRef(null),l=g(c,{once:!0,margin:"-100px"}),m=n=>{h(s=>{const a=new Set(s);return a.has(n)?a.delete(n):a.add(n),a})};return t.jsx(j,{id:"professionalexperience",ref:c,children:t.jsxs(k,{children:[t.jsx(u,{number:"03",title:"Experience",inView:l}),t.jsx(E,{variants:Y,initial:"hidden",animate:l?"visible":"hidden",children:r.timeline.map((n,s)=>{const a=x.has(s);return t.jsxs($,{variants:B,onClick:()=>m(s),whileHover:{x:8,transition:{type:"spring",stiffness:300,damping:25}},children:[t.jsx(z,{children:t.jsx(C,{initial:{opacity:0,x:-20},animate:l?{opacity:1,x:0}:{},transition:{delay:.2+s*.1},children:n.date})}),t.jsxs(S,{children:[t.jsxs(V,{children:[t.jsxs("div",{children:[t.jsx(I,{children:t.jsx("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",onClick:p=>p.stopPropagation(),children:n.title})}),t.jsx(H,{children:n.subTitle}),n.previously&&t.jsxs(R,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1},children:[t.jsx(T,{children:"Previously:"}),t.jsx(W,{children:n.previously})]})]}),t.jsx(P,{$isOpen:a,animate:{rotate:a?45:0,scale:a?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:t.jsx(i.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),t.jsx(A,{dangerouslySetInnerHTML:{__html:n.descriptionSummary}}),t.jsx(y,{initial:!1,children:a&&t.jsx(M,{variants:D,initial:"collapsed",animate:"expanded",exit:"collapsed",children:t.jsx(X,{variants:G,children:t.jsx(L,{variants:O,initial:"collapsed",animate:"expanded",exit:"collapsed",children:n.description.map((p,f)=>t.jsx(_,{variants:q,children:p},f))})})},"content")})]})]},s)})})]})})};export{U as ProfessionalExperience};
