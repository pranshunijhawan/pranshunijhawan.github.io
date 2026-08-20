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

  vec3 dTeal   = vec3(0.086, 0.470, 0.520);
  vec3 dIndigo = vec3(0.105, 0.150, 0.360);
  vec3 dCol = mix(dIndigo, dTeal, hue) * bloom * 0.34;
  dCol += vec3(0.06, 0.34, 0.40) * 0.10 * uMouseActive * exp(-md * 3.0);
  dCol *= edge;
  dCol = max(dCol, vec3(0.0));
  dCol += (gr - 0.5) * 0.012;

  vec3 lBg     = vec3(0.922, 0.925, 0.937);
  vec3 lTeal   = vec3(0.039, 0.404, 0.471);
  vec3 lIndigo = vec3(0.110, 0.160, 0.380);
  vec3 lWave   = mix(lIndigo, lTeal, hue);
  float lTint  = bloom * 0.26 * mix(0.65, 1.0, smoothstep(0.1, 1.3, rad));
  vec3 lCol    = mix(lBg, lWave, lTint);
  lCol = mix(lCol, lTeal, 0.10 * uMouseActive * exp(-md * 3.0));
  lCol += (gr - 0.5) * 0.006;

  gl_FragColor = vec4(mix(lCol, dCol, uDark), 1.0);
}
`;const W=33.333333333333336,Z=500,$=.06,ee=.1,oe=/swiftshader|software|llvmpipe|basic render|microsoft basic/i;function te(r){const i=r.getExtension("WEBGL_debug_renderer_info");if(!i)return!1;const a=r.getParameter(i.UNMASKED_RENDERER_WEBGL);return typeof a=="string"&&oe.test(a)}function X(r,i,a){const o=r.createShader(i);if(!o)throw new Error("shader alloc failed");if(r.shaderSource(o,a),r.compileShader(o),!r.getShaderParameter(o,r.COMPILE_STATUS)){const e=r.getShaderInfoLog(o);throw r.deleteShader(o),new Error(e??"shader compile failed")}return o}function re(r,i){const a=i?.dark!==!1,o=document.createElement("canvas");o.style.display="block",o.style.width="100%",o.style.height="100%";const e=o.getContext("webgl",{alpha:!1,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!0});if(!e)throw new Error("webgl unavailable");if(te(e))throw e.getExtension("WEBGL_lose_context")?.loseContext(),new Error("software renderer");const t=e.createProgram();if(!t)throw new Error("program alloc failed");const _=X(e,e.VERTEX_SHADER,J),L=X(e,e.FRAGMENT_SHADER,Q);if(e.attachShader(t,_),e.attachShader(t,L),e.linkProgram(t),e.deleteShader(_),e.deleteShader(L),!e.getProgramParameter(t,e.LINK_STATUS)){const n=e.getProgramInfoLog(t);throw e.deleteProgram(t),new Error(n??"program link failed")}e.useProgram(t);const T=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,T),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const C=e.getAttribLocation(t,"aPos");e.enableVertexAttribArray(C),e.vertexAttribPointer(C,2,e.FLOAT,!1,0,0);const O=e.getUniformLocation(t,"uTime"),q=e.getUniformLocation(t,"uRes"),V=e.getUniformLocation(t,"uMouse"),Y=e.getUniformLocation(t,"uMouseActive"),K=e.getUniformLocation(t,"uScroll"),j=e.getUniformLocation(t,"uDark");r.appendChild(o);let u=.75,y=1,v=0,f=0,x=0,g=0,b=a?1:0,w=0,M=0,F=0,E=0,h=0,R=0,p=!1;const P=()=>{y=Math.max(1,document.documentElement.scrollHeight-window.innerHeight)},A=()=>{const n=r.clientWidth||window.innerWidth,c=r.clientHeight||window.innerHeight;let s=.75;const N=n*c*s*s;N>9e5&&(s*=Math.sqrt(9e5/N)),u=s;const d=Math.max(1,Math.round(n*s)),m=Math.max(1,Math.round(c*s));o.width=d,o.height=m,e.viewport(0,0,d,m),e.uniform2f(q,d,m),v=d*.5,f=m*.6,P()};A();const D=()=>{e.uniform1f(O,F),e.uniform2f(V,v,f),e.uniform1f(Y,x),e.uniform1f(K,g),e.uniform1f(j,b),e.drawArrays(e.TRIANGLES,0,3)},B=n=>{h=requestAnimationFrame(B);const c=n-E;c<W-1||(E=n,F+=Math.min(c,100)/1e3,x+=(w-x)*$,g+=(M-g)*ee,D())},S=()=>{p||(p=!0,E=performance.now()-W,h=requestAnimationFrame(B))},l=()=>{p=!1,cancelAnimationFrame(h)},I=n=>{v=n.clientX*u,f=(window.innerHeight-n.clientY)*u,w=1},U=()=>{w=0},z=()=>{M=window.scrollY/y},G=()=>{document.hidden?l():S()},k=()=>l();window.addEventListener("mousemove",I,{passive:!0}),window.addEventListener("mouseout",U,{passive:!0}),window.addEventListener("scroll",z,{passive:!0}),window.addEventListener("resize",A,{passive:!0}),document.addEventListener("visibilitychange",G),o.addEventListener("webglcontextlost",k);const H=new ResizeObserver(P);return H.observe(document.documentElement),S(),{setDark(n){b=n?1:0,D(),l(),window.clearTimeout(R),R=window.setTimeout(()=>{document.hidden||S()},Z)},destroy(){window.clearTimeout(R),l(),window.removeEventListener("mousemove",I),window.removeEventListener("mouseout",U),window.removeEventListener("scroll",z),window.removeEventListener("resize",A),document.removeEventListener("visibilitychange",G),o.removeEventListener("webglcontextlost",k),H.disconnect(),e.deleteBuffer(T),e.deleteProgram(t),e.getExtension("WEBGL_lose_context")?.loseContext(),o.remove()}}}export{re as initSheen};
