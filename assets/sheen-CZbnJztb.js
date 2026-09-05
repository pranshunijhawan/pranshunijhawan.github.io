const J=`
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,Q=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float uTime;
uniform vec2  uRes;
uniform vec2  uMouse;
uniform float uMouseActive;
uniform float uScroll;
uniform float uDark;

vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec2 mod289(vec2 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec3 permute(vec3 x){ return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
float fbm(vec2 p){
  float s = 0.0;
  float a = 0.55;
  for (int i = 0; i < 4; i++) {
    s += a * snoise(p);
    p *= 1.9;
    a *= 0.5;
  }
  return s;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  uv *= 0.5;
  uv.y += uScroll * 0.18;
  float t = uTime * 0.012;

  vec2 q = vec2(fbm(uv + vec2(0.0, t)), fbm(uv + vec2(4.2, -t)));
  float f = fbm(uv + 1.3 * q + vec2(0.0, 0.3 * t));
  float v = f * 0.5 + 0.5;

  float hue   = smoothstep(0.35, 0.85, v);
  float bloom = smoothstep(0.52, 0.96, v);

  vec2 m = (uMouse - 0.5 * uRes) / uRes.y * 0.5;
  float md = length(uv - m);
  float rad = length(uv * vec2(uRes.x / uRes.y, 1.0) * 1.4);
  float edge = mix(0.58, 1.0, smoothstep(0.1, 1.3, rad));
  float gr = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453 + uTime);

  // The mark's stroke: steel #3E97C9 at the top, navy #22377D at the bottom.
  vec3 dSteel  = vec3(0.243, 0.592, 0.788);
  vec3 dNavy   = vec3(0.133, 0.216, 0.490);
  vec3 dCol = mix(dNavy, dSteel, hue) * bloom * 0.30;
  dCol += vec3(0.24, 0.59, 0.79) * 0.10 * uMouseActive * exp(-md * 3.0);
  dCol *= edge;
  dCol = max(dCol, vec3(0.0));
  dCol += (gr - 0.5) * 0.012;

  vec3 lBg     = vec3(0.922, 0.925, 0.937);
  vec3 lSteel  = vec3(0.243, 0.592, 0.788);
  vec3 lNavy   = vec3(0.133, 0.216, 0.490);
  vec3 lWave   = mix(lNavy, lSteel, hue);
  float lTint  = bloom * 0.26 * mix(0.65, 1.0, smoothstep(0.1, 1.3, rad));
  vec3 lCol    = mix(lBg, lWave, lTint);
  lCol = mix(lCol, lSteel, 0.10 * uMouseActive * exp(-md * 3.0));
  lCol += (gr - 0.5) * 0.006;

  gl_FragColor = vec4(mix(lCol, dCol, uDark), 1.0);
}
`;const W=33.333333333333336,Z=500,$=.06,ee=.1,te=/swiftshader|software|llvmpipe|basic render|microsoft basic/i;function oe(r){const i=r.getExtension("WEBGL_debug_renderer_info");if(!i)return!1;const a=r.getParameter(i.UNMASKED_RENDERER_WEBGL);return typeof a=="string"&&te.test(a)}function X(r,i,a){const t=r.createShader(i);if(!t)throw new Error("shader alloc failed");if(r.shaderSource(t,a),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS)){const e=r.getShaderInfoLog(t);throw r.deleteShader(t),new Error(e??"shader compile failed")}return t}function re(r,i){const a=i?.dark!==!1,t=document.createElement("canvas");t.style.display="block",t.style.width="100%",t.style.height="100%";const e=t.getContext("webgl",{alpha:!1,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!0});if(!e)throw new Error("webgl unavailable");if(oe(e))throw e.getExtension("WEBGL_lose_context")?.loseContext(),new Error("software renderer");const o=e.createProgram();if(!o)throw new Error("program alloc failed");const _=X(e,e.VERTEX_SHADER,J),y=X(e,e.FRAGMENT_SHADER,Q);if(e.attachShader(o,_),e.attachShader(o,y),e.linkProgram(o),e.deleteShader(_),e.deleteShader(y),!e.getProgramParameter(o,e.LINK_STATUS)){const n=e.getProgramInfoLog(o);throw e.deleteProgram(o),new Error(n??"program link failed")}e.useProgram(o);const L=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,L),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const C=e.getAttribLocation(o,"aPos");e.enableVertexAttribArray(C),e.vertexAttribPointer(C,2,e.FLOAT,!1,0,0);const O=e.getUniformLocation(o,"uTime"),q=e.getUniformLocation(o,"uRes"),V=e.getUniformLocation(o,"uMouse"),Y=e.getUniformLocation(o,"uMouseActive"),K=e.getUniformLocation(o,"uScroll"),j=e.getUniformLocation(o,"uDark");r.appendChild(t);let v=.75,b=1,u=0,f=0,x=0,h=0,T=a?1:0,E=0,M=0,F=0,w=0,g=0,R=0,p=!1;const P=()=>{b=Math.max(1,document.documentElement.scrollHeight-window.innerHeight)},S=()=>{const n=r.clientWidth||window.innerWidth,c=r.clientHeight||window.innerHeight;let s=.75;const I=n*c*s*s;I>9e5&&(s*=Math.sqrt(9e5/I)),v=s;const m=Math.max(1,Math.round(n*s)),d=Math.max(1,Math.round(c*s));t.width=m,t.height=d,e.viewport(0,0,m,d),e.uniform2f(q,m,d),u=m*.5,f=d*.6,P()};S();const D=()=>{e.uniform1f(O,F),e.uniform2f(V,u,f),e.uniform1f(Y,x),e.uniform1f(K,h),e.uniform1f(j,T),e.drawArrays(e.TRIANGLES,0,3)},B=n=>{g=requestAnimationFrame(B);const c=n-w;c<W-1||(w=n,F+=Math.min(c,100)/1e3,x+=(E-x)*$,h+=(M-h)*ee,D())},A=()=>{p||(p=!0,w=performance.now()-W,g=requestAnimationFrame(B))},l=()=>{p=!1,cancelAnimationFrame(g)},N=n=>{u=n.clientX*v,f=(window.innerHeight-n.clientY)*v,E=1},U=()=>{E=0},k=()=>{M=window.scrollY/b},z=()=>{document.hidden?l():A()},G=()=>l();window.addEventListener("mousemove",N,{passive:!0}),window.addEventListener("mouseout",U,{passive:!0}),window.addEventListener("scroll",k,{passive:!0}),window.addEventListener("resize",S,{passive:!0}),document.addEventListener("visibilitychange",z),t.addEventListener("webglcontextlost",G);const H=new ResizeObserver(P);return H.observe(document.documentElement),A(),{setDark(n){T=n?1:0,D(),l(),window.clearTimeout(R),R=window.setTimeout(()=>{document.hidden||A()},Z)},destroy(){window.clearTimeout(R),l(),window.removeEventListener("mousemove",N),window.removeEventListener("mouseout",U),window.removeEventListener("scroll",k),window.removeEventListener("resize",S),document.removeEventListener("visibilitychange",z),t.removeEventListener("webglcontextlost",G),H.disconnect(),e.deleteBuffer(L),e.deleteProgram(o),e.getExtension("WEBGL_lose_context")?.loseContext(),t.remove()}}}export{re as initSheen};
