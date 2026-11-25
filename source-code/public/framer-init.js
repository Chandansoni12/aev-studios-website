// AEV Studios - Framer Client Initialization
(function() {
  if (typeof document === 'undefined') return;

  // 0. Always start at Hero section on reload (disable browser scroll restoration)
  try {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      document.addEventListener('framer:pageview', function() {
        if (!window.location.hash) window.scrollTo(0, 0);
      }, { once: true });
    }
  } catch(e) {}

  // 1. Environment definition
  window.process = { ...window.process, env: { ...window.process?.env, NODE_ENV: 'production' } };

  // 2. Intl formatting cache
  try {
    ((()=>{function d(e){let t=Date.prototype.toLocaleString,o=Date.prototype.toLocaleDateString;t&&(Date.prototype.toLocaleString=function(r,n){let i=s(this,r,n);return u(e.current.Date.toLocaleString,i,()=>t.call(this,r,n))}),o&&(Date.prototype.toLocaleDateString=function(r,n){let i=s(this,r,n);return u(e.current.Date.toLocaleDateString,i,()=>o.call(this,r,n))});let a=Object.getOwnPropertyDescriptors(Intl.DateTimeFormat.prototype).format.get,c=Intl.DateTimeFormat.prototype.formatRange,b=Intl.DateTimeFormat.prototype.formatToParts,D=Intl.DateTimeFormat.prototype.formatRangeToParts;a&&Object.defineProperty(Intl.DateTimeFormat.prototype,"format",{get(){function m(r){let n=p(this),i=s(r,n);return u(e.current.DateTimeFormat.format,i,()=>a.call(this)(r))}return m.bind(this)}}),c&&(Intl.DateTimeFormat.prototype.formatRange=function(r,n){let i=p(this),l=s(r,n,i);return u(e.current.DateTimeFormat.formatRange,l,()=>c.call(this,r,n))}),b&&(Intl.DateTimeFormat.prototype.formatToParts=function(r){let n=p(this),i=s(r,n);return u(e.current.DateTimeFormat.formatToParts,i,()=>b.call(this,r)).map(g)}),D&&(Intl.DateTimeFormat.prototype.formatRangeToParts=function(r,n){let i=p(this),l=s(r,n,i);return u(e.current.DateTimeFormat.formatRangeToParts,l,()=>D.call(this,r,n)).map(g)});let y=Number.prototype.toLocaleString;y&&(Number.prototype.toLocaleString=function(r,n){let i=s(this,r,n);return u(e.current.Number.toLocaleString,i,()=>y.call(this,r,n))});let h=Object.getOwnPropertyDescriptors(Intl.NumberFormat.prototype).format.get,F=Intl.NumberFormat.prototype.formatRange,T=Intl.NumberFormat.prototype.formatToParts,I=Intl.NumberFormat.prototype.formatRangeToParts;h&&Object.defineProperty(Intl.NumberFormat.prototype,"format",{get(){function m(r){let n=f(this),i=s(r,n);return u(e.current.NumberFormat.format,i,()=>h.call(this)(r))}return m.bind(this)}}),F&&(Intl.NumberFormat.prototype.formatRange=function(r,n){let i=f(this),l=s(r,n,i);return u(e.current.NumberFormat.formatRange,l,()=>F.call(this,r,n))}),T&&(Intl.NumberFormat.prototype.formatToParts=function(r){let n=f(this),i=s(r,n);return u(e.current.NumberFormat.formatToParts,i,()=>T.call(this,r)).map(g)}),I&&(Intl.NumberFormat.prototype.formatRangeToParts=function(r,n){let i=f(this),l=s(r,n,i);return u(e.current.NumberFormat.formatRangeToParts,l,()=>I.call(this,r,n)).map(g)})}function P(e,t){return typeof t=="bigint"?`${t}n`:t instanceof Date?t.getTime():t}function s(...e){let t=JSON.stringify(e,P),o=0;for(let a=0;a<t.length;a++)o+=t.charCodeAt(a),o+=o<<10,o^=o>>6;return o+=o<<3,o^=o>>11,o+=o<<15,o>>>0}function u(e,t,o){let a=e[t];if(typeof a<"u")return a;let c=o();return e[t]=c,c}function g(e){return{...e}}function p(e){let t=e.resolvedOptions(),o={locale:t.locale,calendar:t.calendar,numberingSystem:t.numberingSystem,timeZone:t.timeZone,hour12:t.hour12,weekday:t.weekday,era:t.era,year:t.year,month:t.month,day:t.day,hour:t.hour,minute:t.minute,second:t.second,timeZoneName:t.timeZoneName};for(let a in t)a in o||(o[a]=t[a]);return o}function f(e){let t=e.resolvedOptions(),o={locale:t.locale,numberingSystem:t.numberingSystem,style:t.style,currency:t.currency,currencyDisplay:t.currencyDisplay,currencySign:t.currencySign,unit:t.unit,unitDisplay:t.unitDisplay,minimumIntegerDigits:t.minimumIntegerDigits,minimumFractionDigits:t.minimumFractionDigits,maximumFractionDigits:t.maximumFractionDigits,minimumSignificantDigits:t.minimumSignificantDigits,maximumSignificantDigits:t.maximumSignificantDigits,useGrouping:t.useGrouping===!0?"auto":t.useGrouping,notation:t.notation,compactDisplay:t.compactDisplay,signDisplay:t.signDisplay,roundingIncrement:t.roundingIncrement??1,roundingMode:t.roundingMode??"halfExpand",roundingPriority:t.roundingPriority??"auto",trailingZeroDisplay:t.trailingZeroDisplay??"auto"};for(let a in t)a in o||(o[a]=t[a]);return o}return d})()({current:{"Date":{"toLocaleString":{},"toLocaleDateString":{}},"DateTimeFormat":{"format":{},"formatRange":{},"formatToParts":{},"formatRangeToParts":{}},"Number":{"toLocaleString":{}},"NumberFormat":{"format":{},"formatRange":{},"formatToParts":{"565829592":[{"type":"integer","value":"499"}],"1568575145":[{"type":"integer","value":"299"}],"3965125556":[{"type":"integer","value":"999"}]},"formatRangeToParts":{}}}}));
  } catch(e) {
    console.warn('Intl cache init:', e);
  }

  // 3. Nested links
  try {
    ((()=>{function u(){function n(t,e,i){let r=document.createElement("a");r.href=t,r.target=i,r.rel=e,document.body.appendChild(r),r.click(),r.remove()}function o(t){if(this.dataset.hydrated){this.removeEventListener("click",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;if(/Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)?t.metaKey:t.ctrlKey)return n(e,"","_blank");let r=this.getAttribute("rel")??"",c=this.getAttribute("target")??"";n(e,r,c)}function a(t){if(this.dataset.hydrated){this.removeEventListener("auxclick",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");e&&n(e,"","_blank")}function s(t){if(this.dataset.hydrated){this.removeEventListener("keydown",s);return}if(t.key!=="Enter")return;t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;let i=this.getAttribute("rel")??"",r=this.getAttribute("target")??"";n(e,i,r)}document.querySelectorAll("[data-nested-link]").forEach(t=>{t instanceof HTMLElement&&(t.addEventListener("click",o),t.addEventListener("auxclick",a),t.addEventListener("keydown",s))})}return u})()());
  } catch(e) {
    console.warn('Nested link init:', e);
  }

  // 4. Preserve query parameters
  try {
    (!function(){var w="framer_variant";function u(a,r){let e=r.indexOf("#"),t=e===-1?r:r.substring(0,e),o=e===-1?"":r.substring(e),n=t.indexOf("?"),h=n===-1?t:t.substring(0,n),d=n===-1?"":t.substring(n),s=new URLSearchParams(d),m=new URLSearchParams(a);for(let[i,l]of m)s.has(i)||i!==w&&s.append(i,l);let c=s.toString();return c===""?t+o:h+"?"+c+o}var g='div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',f="div#main a[data-framer-preserve-params]",S=document.currentScript?.hasAttribute("data-preserve-internal-params");if(window.location.search&&!navigator.webdriver&&!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)){let a=document.querySelectorAll(S?`${g},${f}`:f);for(let r of a){let e=u(window.location.search,r.href);r.setAttribute("href",e)}}
}());
  } catch(e) {
    console.warn('Preserve params init:', e);
  }

  // 5. Animator & Appear Animation
  try {
    var animator=(()=>{var Y=(e,t,r)=>r>t?t:r<e?e:r;var H=()=>{};function Z(e){let t;return()=>(t===void 0&&(t=e()),t)}var q=e=>e;var D=e=>e*1e3,P=e=>e/1e3;var U=e=>Array.isArray(e)&&typeof e[0]=="number";var F=(e,t,r=10)=>{let n="",o=Math.max(Math.round(t/r),2);for(let i=0;i<o;i++)n+=Math.round(e(i/(o-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`};function N(e,t=50,r=2e4,n){let o=0,i=e.next(o);for(n?.push(i.value);!i.done&&o<r;)o+=t,i=e.next(o),n?.push(i.value);return o>=r?1/0:o}function xe(e,t=100,r){let{keyframes:n,velocity:o}=e,i=n&&n[n.length-1]-n[0],a=r({...e,velocity:o&&i?o*t/i:o,keyframes:[0,t]}),f=Math.min(N(a),2e4);return{type:"keyframes",ease:s=>a.next(f*s).value/t,duration:P(f)}}var A={stiffness:100,damping:10,mass:1,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05},ge=e=>e<0?1/Math.max(1+e,A.minDamping):Math.max(1-e,A.minDamping);function ye(e,t){if(!(e>1))return 1;let r=Math.sqrt(e*e-1),n=e-r,o=e+r,i=2*r*Math.exp(-t)*(1+t);return Ae(a=>o*Math.exp(-n*a)-n*Math.exp(-o*a)-i,a=>Math.exp(-o*a)-Math.exp(-n*a),t)/t}function ee(e,t){return e*Math.sqrt(1-t*t)}var Be=12;function Ae(e,t,r){let n=r;for(let o=1;o<Be;o++)n=n-e(n)/t(n);return n}var Q=.001;function Ke({duration:e=A.duration,bounce:t=A.bounce}){let r,n;H(e<=D(A.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let o=ge(t);e=Y(A.minDuration,A.maxDuration,P(e)),o<1?(r=m=>{let p=m*o,c=p*e,x=ee(m,o),g=Math.exp(-c);return Q-p/x*g},n=m=>{let c=m*o*e,x=o*o*m*m*e,g=Math.exp(-c),y=ee(m*m,o);return(-r(m)+Q>0?-1:1)*-x*g/y}):(r=m=>{let p=Math.exp(-m*e),c=m*e+1;return-Q+p*c},n=m=>{let p=Math.exp(-m*e),c=-m*(e*e);return p*c});let i=5/e,a=Ae(r,n,i),f=a*ye(o,a*e),s=f*f;return{stiffness:s,damping:o*2*Math.sqrt(s),duration:D(e)}}var te=(e,t)=>(t?e>=0:e>0)&&e<1/0;function J(e,t){if(te(e,t))return e}function Ge(e){let t=J(e.stiffness),r=J(e.damping,!0),n=J(e.mass),o={...e,stiffness:t??A.stiffness,damping:r??A.damping,mass:n??A.mass,isResolvedFromDuration:!1,isTimeDefined:(t??r??n)===void 0&&(e.duration!==void 0||e.bounce!==void 0)};if(o.isTimeDefined){if(e.visualDuration){let i=ge(e.bounce||0),a=2*Math.PI/(e.visualDuration*1.2)*ye(i,2*Math.PI/1.2);o.stiffness=a*a,o.damping=2*i*Math.sqrt(o.stiffness)}else Object.assign(o,Ke(o)),o.isResolvedFromDuration=!0;(!te(o.stiffness)||!te(o.damping,!0))&&(o.stiffness=A.stiffness,o.damping=A.damping)}return o}function E(e=A.visualDuration,t=A.bounce){let r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e,n=r.keyframes[0],o=r.keyframes[r.keyframes.length-1],i={done:!1,value:n},{stiffness:a,damping:f,mass:s,duration:m,isResolvedFromDuration:p,isTimeDefined:c}=Ge({...r}),x=d=>c?0:-P(d),g=f/(2*Math.sqrt(a*s)),y=P(Math.sqrt(a/s)),h=g*y,u={target:o,delta:o-n,velocity:x(r.velocity||0)||0,restSpeed:0,restDelta:0},K=()=>{let d=Math.abs(u.delta)<5;u.restSpeed=r.restSpeed||(d?A.restSpeed.granular:A.restSpeed.default),u.restDelta=r.restDelta||(d?A.restDelta.granular:A.restDelta.default)};K();let O,v,b;if(g<1){let d=ee(y,g),l={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};b=()=>{l.A=(u.velocity+h*u.delta)/d,l.sinC=h*l.A+u.delta*d,l.cosC=h*u.delta-l.A*d};let V=S=>{S!==l.t&&(l.t=S,l.env=Math.exp(-h*S),l.sin=Math.sin(d*S),l.cos=Math.cos(d*S))};O=S=>(V(S),u.target-l.env*(l.A*l.sin+u.delta*l.cos)),v=S=>(V(S),l.env*(l.sinC*l.sin+l.cosC*l.cos))}else if(g===1){O=l=>u.target-Math.exp(-y*l)*(u.delta+(u.velocity+y*u.delta)*l);let d={C:0};b=()=>{d.C=u.velocity+y*u.delta},v=l=>Math.exp(-y*l)*(y*d.C*l-u.velocity)}else{let d=y*Math.sqrt(g*g-1),l=h-d,V=h+d,S=c?1/0:300/d,z=(T,X)=>Math.exp(X>S?-T*S-h*(X-S):-T*X),C={S:0,F:0};b=()=>{let T=(u.velocity+h*u.delta)/d;C.S=(u.delta+T)/2,C.F=(u.delta-T)/2},O=T=>u.target-C.S*z(l,T)-C.F*z(V,T),v=T=>l*C.S*z(l,T)+V*C.F*z(V,T)}b();let de=p&&m||null,R={calculatedDuration:de,retarget:(d,l)=>{u.target=d[d.length-1],u.delta=u.target-d[0],u.velocity=x(l),r.restSpeed&&r.restDelta||K(),R.calculatedDuration=de,i.done=!1,b()},velocity:d=>D(v(d)),next:d=>{let l=O(d);if(p)i.done=d>=m;else{let V=D(v(d));i.done=Math.abs(V)<=u.restSpeed&&Math.abs(u.target-l)<=u.restDelta}return i.value=i.done?u.target:l,i},toString:()=>{let d=Math.min(N(R),2e4),l=F(V=>R.next(d*V).value,d,30);return d+"ms "+l},toTransition:()=>{}};return R}E.applyToOptions=e=>{let t=xe(e,100,E);return e.ease=t.ease,e.duration=D(t.duration),e.type="keyframes",e};var he=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],re=new Set([...he,"pathRotation"]);var Se={};function Te(e,t){let r=Z(e);return()=>Se[t]??r()}var Ve=Te(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");var w=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`;var oe={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:w([0,.65,.55,1]),circOut:w([.55,0,1,.45]),backIn:w([.31,.01,.66,-.59]),backOut:w([.33,1.53,.69,.99])};function ne(e,t){if(e)return typeof e=="function"?Ve()?F(e,t):"ease-out":U(e)?w(e):Array.isArray(e)?e.map(r=>ne(r,t)||oe.easeOut):oe[e]}function $(e,t,r,{delay:n=0,duration:o=300,repeat:i=0,repeatType:a="loop",ease:f="easeOut",times:s}={},m=void 0){let p={[t]:r};s&&(p.offset=s);let c=ne(f,o);Array.isArray(c)&&(p.easing=c);let x={delay:n,duration:o,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:i+1,direction:a==="reverse"?"alternate":"normal"};return m&&(x.pseudoElement=m),e.animate(p,x)}function Me(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}var j="framerAppearId",ie="data-"+Me(j);function ae(e){return e.props[ie]}var M=new Map,k=new Map;var I=(e,t)=>{let r=re.has(t)?"transform":t;return`${e}: ${r}`};function se(e,t,r){let n=I(e,t),o=M.get(n);if(!o)return null;let{animation:i,startTime:a}=o;function f(){window.MotionCancelOptimisedAnimation?.(e,t,r)}return i.onfinish=f,a===null||window.MotionHandoffIsComplete?.(e)?(f(),null):a}var W,B,pe=new Set;function Le(){pe.forEach(e=>{e.animation.play(),e.animation.startTime=e.startTime}),pe.clear()}function me(e,t,r,n,o){if(window.MotionIsMounted)return;let i=e.dataset[j];if(!i)return;window.MotionHandoffAnimation=se;let a=I(i,t);B||(B=$(e,t,[r[0],r[0]],{duration:1e4,ease:"linear"}),M.set(a,{animation:B,startTime:null}),window.MotionHandoffAnimation=se,window.MotionHasOptimisedAnimation=(s,m)=>{if(!s)return!1;if(!m)return k.has(s);let p=I(s,m);return!!M.get(p)},window.MotionHandoffMarkAsComplete=s=>{k.has(s)&&k.set(s,!0)},window.MotionHandoffIsComplete=s=>k.get(s)===!0,window.MotionCancelOptimisedAnimation=(s,m,p,c)=>{let x=I(s,m),g=M.get(x);g&&(p&&c===void 0?p.postRender(()=>{p.postRender(()=>{g.animation.cancel()})}):g.animation.cancel(),p&&c?(pe.add(g),p.render(Le)):(M.delete(x),M.size||(window.MotionCancelOptimisedAnimation=void 0)))},window.MotionCheckAppearSync=(s,m,p)=>{let c=ae(s);if(!c)return;let x=window.MotionHasOptimisedAnimation?.(c,m),g=s.props.values?.[m];if(!x||!g)return;let y=p.on("change",h=>{g.get()!==h&&(window.MotionCancelOptimisedAnimation?.(c,m),y())});return y});let f=()=>{B.cancel();let s=$(e,t,r,n);W===void 0&&(W=performance.now()),s.startTime=W,M.set(a,{animation:s,startTime:W}),o&&o(s)};k.set(i,!1),B.ready?B.ready.then(f).catch(q):f()}var fe=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Re={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ze={translateX:"px",translateY:"px",translateZ:"px",x:"px",y:"px",z:"px",perspective:"px",transformPerspective:"px",rotate:"deg",rotateX:"deg",rotateY:"deg"};function ve(e,t){let r=ze[e];return!r||typeof t=="string"&&t.endsWith(r)?t:`${t}${r}`}function ce(e){return fe.includes(e)}var Fe=(e,t)=>fe.indexOf(e)-fe.indexOf(t);function be({transform:e,transformKeys:t},r){let n={},o=!0,i="";t.sort(Fe);for(let a of t){let f=e[a],s=!0;typeof f=="number"?s=f===(a.startsWith("scale")?1:0):s=parseFloat(f)===0,s||(o=!1,i+=`${Re[a]||a}(${e[a]}) `),r&&(n[a]=e[a])}return i=i.trim(),r?i=r(n,i):o&&(i="none"),i}function le(e,t){let r=new Set(Object.keys(e));for(let n in t)r.add(n);return Array.from(r)}function ue(e,t){let r=t-e.length;if(r<=0)return e;let n=new Array(r).fill(e[e.length-1]);return e.concat(n)}function G(e){return e*1e3}var Ee={duration:.001},L={opacity:1,scale:1,translateX:0,translateY:0,translateZ:0,x:0,y:0,z:0,rotate:0,rotateX:0,rotateY:0};function we(e,t,r,n,o){return r.delay&&(r.delay=G(r.delay)),r.type==="spring"?$e(e,t,r,n,o):We(e,t,r,n,o)}function Ne(e,t,r){let n={},o=0,i=0;for(let a of le(e,t)){let f=e[a]??L[a],s=t[a]??L[a];if(f===void 0||s===void 0||a!=="transformPerspective"&&f===s&&f===L[a])continue;a==="transformPerspective"&&(n[a]=[f,s]);let m=qe(f,s,r),{duration:p,keyframes:c}=m;p===void 0||c===void 0||(p>o&&(o=p,i=c.length),n[a]=c)}return{keyframeValuesByProps:n,longestDuration:o,longestLength:i}}function $e(e,t,r,n,o){let i={},{keyframeValuesByProps:a,longestDuration:f,longestLength:s}=Ne(e,t,r);if(!s)return i;let m={ease:"linear",duration:f,delay:r.delay},p=o?Ee:m,c={};for(let[g,y]of Object.entries(a))ce(g)?c[g]=ue(y,s):i[g]={keyframes:ue(y,s),options:g==="opacity"?m:p};let x=Ce(c,n);return x&&(i.transform={keyframes:x,options:p}),i}function je(e){let{type:t,duration:r,...n}=e;return{duration:G(r),...n}}function We(e,t,r,n,o){let i=je(r);if(!i)return;let a={},f=o?Ee:i,s={};for(let p of le(e,t)){let c=e[p]??L[p],x=t[p]??L[p];c===void 0||x===void 0||p!=="transformPerspective"&&c===x||(ce(p)?s[p]=[c,x]:a[p]={keyframes:[c,x],options:p==="opacity"?i:f})}let m=Ce(s,n);return m&&(a.transform={keyframes:m,options:f}),a}var Xe=["duration","bounce"],Ye=["stiffness","damping","mass"];function Oe(e){return Ye.some(t=>t in e)?!1:Xe.some(t=>t in e)}function He(e,t,r){return Oe(r)?`${e}-${t}-${r.duration}-${r.bounce}`:`${e}-${t}-${r.damping}-${r.stiffness}-${r.mass}`}function Ze(e){return Oe(e)?{...e,duration:G(e.duration)}:e}var De=new Map,Pe=10;function qe(e,t,r){let n=He(e,t,r),o=De.get(n);if(o)return o;let i=[e,t],a=E({...Ze(r),keyframes:i}),f={done:!1,value:i[0]},s=[],m=0;for(;!f.done&&m<G(10);)f=a.next(m),s.push(f.value),m+=Pe;i=s;let p=m-Pe,x={keyframes:i,duration:p,ease:"linear"};return De.set(n,x),x}function Ce(e,t){let r=[],n=Object.values(e)[0]?.length;if(!n)return;let o=Object.keys(e);for(let i=0;i<n;i++){let a={};for(let[s,m]of Object.entries(e)){let p=m[i];p!==void 0&&(a[s]=ve(s,p))}let f=be({transform:a,transformKeys:o},t);r.push(f)}return r}function Ue(e,t){if(!t)for(let r in e){let n=e[r];return n?.legacy===!0?n:void 0}}function ke(e,t,r,n,o,i){for(let[a,f]of Object.entries(e)){let s=i?f[i]:void 0;if(s===null||!s&&f.default===null)continue;let m=s??f.default??Ue(f,i);if(!m)continue;let{initial:p,animate:c,transformTemplate:x}=m;if(!p||!c)continue;let{transition:g,...y}=c,h=we(p,y,g,_e(x,n),o);if(!h)continue;let u={},K={};for(let[v,b]of Object.entries(h))u[v]=b.keyframes,K[v]=b.options;let O=i?`:not(.hidden-${i}) `:"";t(`${O}[${r}="${a}"]`,u,K)}}function _e(e,t){if(!(!e||!t))return(r,n)=>e.replace(t,n)}function Ie(e){return e?e.find(r=>r.mediaQuery?window.matchMedia(r.mediaQuery).matches===!0:!1)?.hash:void 0}var br={animateAppearEffects:ke,getActiveVariantHash:Ie,spring:E,startOptimizedAppearAnimation:me};return br})()
    window.animator = animator;

    // Create or expose data objects for appear animation
    var appearContentStr = "{\"drn9mx\":{\"default\":{\"initial\":{\"opacity\":0.001,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":0,\"skewX\":0,\"skewY\":0,\"x\":0,\"y\":0},\"animate\":{\"opacity\":1,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":1,\"skewX\":0,\"skewY\":0,\"transition\":{\"bounce\":0,\"delay\":1,\"duration\":1,\"type\":\"spring\"},\"x\":0,\"y\":0},\"transformTemplate\":\"translate(-50%, -50%) __Appear_Animation_Transform__\"},\"7hwwvd\":{\"initial\":{\"opacity\":0.001,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":0,\"skewX\":0,\"skewY\":0,\"x\":0,\"y\":0},\"animate\":{\"opacity\":1,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":1,\"skewX\":0,\"skewY\":0,\"transition\":{\"bounce\":0,\"delay\":1,\"duration\":1,\"type\":\"spring\"},\"x\":0,\"y\":0},\"transformTemplate\":\"translate(-50%, -50%) __Appear_Animation_Transform__\"},\"otwvw4\":{\"initial\":{\"opacity\":0.001,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":0,\"skewX\":0,\"skewY\":0,\"x\":0,\"y\":0},\"animate\":{\"opacity\":1,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":1,\"skewX\":0,\"skewY\":0,\"transition\":{\"bounce\":0,\"delay\":1,\"duration\":1,\"type\":\"spring\"},\"x\":0,\"y\":0}}},\"tqofvi\":{\"default\":{\"initial\":{\"opacity\":0.001,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":0,\"skewX\":0,\"skewY\":0,\"x\":0,\"y\":0},\"animate\":{\"opacity\":1,\"rotate\":-32,\"rotateX\":0,\"rotateY\":0,\"scale\":1,\"skewX\":0,\"skewY\":0,\"transition\":{\"bounce\":0,\"delay\":1.4,\"duration\":1,\"type\":\"spring\"},\"x\":0,\"y\":0},\"transformTemplate\":\"translate(-50%, -50%) __Appear_Animation_Transform__\"},\"7hwwvd\":{\"initial\":{\"opacity\":0.001,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":0,\"skewX\":0,\"skewY\":0,\"x\":0,\"y\":0},\"animate\":{\"opacity\":1,\"rotate\":-32,\"rotateX\":0,\"rotateY\":0,\"scale\":1,\"skewX\":0,\"skewY\":0,\"transition\":{\"bounce\":0,\"delay\":1.4,\"duration\":1,\"type\":\"spring\"},\"x\":0,\"y\":0},\"transformTemplate\":\"translate(-50%, -50%) __Appear_Animation_Transform__\"},\"otwvw4\":{\"initial\":{\"opacity\":0.001,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":0,\"skewX\":0,\"skewY\":0,\"x\":0,\"y\":0},\"animate\":{\"opacity\":1,\"rotate\":-32,\"rotateX\":0,\"rotateY\":0,\"scale\":1,\"skewX\":0,\"skewY\":0,\"transition\":{\"bounce\":0,\"delay\":1.4,\"duration\":1,\"type\":\"spring\"},\"x\":0,\"y\":0}}},\"1h224it\":{\"default\":{\"initial\":{\"opacity\":0.001,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":0,\"skewX\":0,\"skewY\":0,\"x\":0,\"y\":0},\"animate\":{\"opacity\":1,\"rotate\":-30,\"rotateX\":0,\"rotateY\":0,\"scale\":1,\"skewX\":0,\"skewY\":0,\"transition\":{\"bounce\":0,\"delay\":1.2,\"duration\":1,\"type\":\"spring\"},\"x\":0,\"y\":0},\"transformTemplate\":\"translate(-50%, -50%) __Appear_Animation_Transform__\"},\"7hwwvd\":{\"initial\":{\"opacity\":0.001,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":0,\"skewX\":0,\"skewY\":0,\"x\":0,\"y\":0},\"animate\":{\"opacity\":1,\"rotate\":-30,\"rotateX\":0,\"rotateY\":0,\"scale\":1,\"skewX\":0,\"skewY\":0,\"transition\":{\"bounce\":0,\"delay\":1.2,\"duration\":1,\"type\":\"spring\"},\"x\":0,\"y\":0}},\"otwvw4\":{\"initial\":{\"opacity\":0.001,\"rotate\":0,\"rotateX\":0,\"rotateY\":0,\"scale\":0,\"skewX\":0,\"skewY\":0,\"x\":0,\"y\":0},\"animate\":{\"opacity\":1,\"rotate\":-30,\"rotateX\":0,\"rotateY\":0,\"scale\":1,\"skewX\":0,\"skewY\":0,\"transition\":{\"bounce\":0,\"delay\":1.2,\"duration\":1,\"type\":\"spring\"},\"x\":0,\"y\":0},\"transformTemplate\":\"translate(-50%, -50%) __Appear_Animation_Transform__\"}}}";
    var breakpointsStr = "[{\"hash\":\"zgsw7e\",\"mediaQuery\":\"(min-width: 1200px)\"},{\"hash\":\"7hwwvd\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1199.98px)\"},{\"hash\":\"otwvw4\",\"mediaQuery\":\"(max-width: 809.98px)\"},{\"hash\":\"1yv164u\",\"mediaQuery\":\"(min-width: 1200px)\"},{\"hash\":\"1xm6n8w\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1199.98px)\"},{\"hash\":\"1wgwu20\",\"mediaQuery\":\"(max-width: 809.98px)\"}]";

    // Also inject script tags if any code checks document.getElementById
    if (!document.getElementById('__framer__appearAnimationsContent')) {
      var sApp = document.createElement('script');
      sApp.type = 'framer/appear';
      sApp.id = '__framer__appearAnimationsContent';
      sApp.textContent = appearContentStr; window.__framer__appearAnimationsContent = sApp;
      document.head.appendChild(sApp);
    }

    if (!document.getElementById('__framer__breakpoints')) {
      var sBp = document.createElement('script');
      sBp.type = 'framer/appear';
      sBp.id = '__framer__breakpoints';
      sBp.textContent = breakpointsStr; window.__framer__breakpoints = sBp;
      document.head.appendChild(sBp);
    }

    // Trigger appear animation
    ((()=>{function c(i,o,s){if(window.__framer_disable_appear_effects_optimization__||typeof animator>"u")return;let e={detail:{bg:document.hidden}};requestAnimationFrame(()=>{let a="framer-appear-start";performance.mark(a,e),animator.animateAppearEffects(JSON.parse(window.__framer__appearAnimationsContent.text),(m,p,d)=>{let t=document.querySelector(m);if(t)for(let[r,f]of Object.entries(p))animator.startOptimizedAppearAnimation(t,r,f,d[r])},i,o,s&&window.matchMedia("(prefers-reduced-motion:reduce)").matches===!0,animator.getActiveVariantHash(JSON.parse(window.__framer__breakpoints.text)));let n="framer-appear-end";performance.mark(n,e),performance.measure("framer-appear",{start:a,end:n,detail:e.detail})})}return c})()("data-framer-appear-id","__Appear_Animation_Transform__",false));
  } catch(e) {
    console.warn('Framer appear animation init:', e);
  }

  // 6. Wire homepage contact form directly to aevstudio.mail9@gmail.com via FormSubmit AJAX
  try {
    document.addEventListener('click', function(e) {
      var btn = e.target && e.target.closest ? e.target.closest('form.framer-w7mhd2 button[type="submit"], form.framer-w7mhd2 a.framer-1p5om0o') : null;
      if (!btn) return;
      var anchor = btn.tagName === 'A' ? btn : btn.querySelector('a');
      if (anchor) {
        anchor.removeAttribute('href');
        anchor.removeAttribute('target');
      }
    }, true);

    document.addEventListener('submit', function(e) {
      var form = e.target;
      if (!form || !form.classList || !form.classList.contains('framer-w7mhd2')) return;
      e.preventDefault();
      e.stopPropagation();

      var submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
      var labelEl = submitBtn ? (submitBtn.querySelector('p') || submitBtn) : null;
      var origText = labelEl ? (labelEl.tagName === 'INPUT' ? labelEl.value : labelEl.textContent) : '';
      if (submitBtn && labelEl) {
        submitBtn.disabled = true;
        if (labelEl.tagName === 'INPUT') labelEl.value = 'Sending...';
        else labelEl.textContent = 'Sending...';
      }

      var formData = new FormData(form);
      formData.append('_subject', 'New AEV Studios Project Enquiry');
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      var timer = controller ? setTimeout(function() { controller.abort(); }, 6000) : null;

      fetch('https://formsubmit.co/ajax/aevstudio.mail9@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
        signal: controller ? controller.signal : undefined
      })
      .then(function(res) {
        if (timer) clearTimeout(timer);
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(function() {
        form.reset();
        if (submitBtn && labelEl) {
          submitBtn.disabled = false;
          if (labelEl.tagName === 'INPUT') labelEl.value = 'Message Sent ✓';
          else labelEl.textContent = 'Message Sent ✓';
          setTimeout(function() {
            if (labelEl.tagName === 'INPUT') labelEl.value = origText;
            else labelEl.textContent = origText;
          }, 4000);
        }
      })
      .catch(function() {
        if (timer) clearTimeout(timer);
        if (submitBtn && labelEl) {
          submitBtn.disabled = false;
          if (labelEl.tagName === 'INPUT') labelEl.value = origText;
          else labelEl.textContent = origText;
        }
        // Fallback to mailto so the enquiry always reaches aevstudio.mail9@gmail.com
        var name = formData.get('Name') || formData.get('name') || '';
        var email = formData.get('Email') || formData.get('email') || '';
        var phone = formData.get('Phone') || formData.get('phone') || '';
        var msg = formData.get('Message') || formData.get('message') || '';
        var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\n' + msg);
        window.location.href = 'mailto:aevstudio.mail9@gmail.com?subject=' + encodeURIComponent('New AEV Studios Project Enquiry') + '&body=' + body;
      });
    }, true);
  } catch(e) {
    console.warn('Contact form init:', e);
  }
})();
