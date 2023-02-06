(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function sl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function rl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?Uy(s):rl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(qe(t))return t;if(Ie(t))return t}}const Py=/;(?![^(]*\))/g,My=/:([^]+)/,Ly=/\/\*.*?\*\//gs;function Uy(t){const e={};return t.replace(Ly,"").split(Py).forEach(n=>{if(n){const s=n.split(My);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function il(t){let e="";if(qe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=il(t[n]);s&&(e+=s+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$y=sl(Fy);function cd(t){return!!t||t===""}function Vy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=$o(t[s],e[s]);return n}function $o(t,e){if(t===e)return!0;let n=Ku(t),s=Ku(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dr(t),s=Dr(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?Vy(t,e):!1;if(n=Ie(t),s=Ie(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!$o(t[o],e[o]))return!1}}return String(t)===String(e)}function By(t,e){return t.findIndex(n=>$o(n,e))}const gt=t=>qe(t)?t:t==null?"":z(t)||Ie(t)&&(t.toString===hd||!ne(t.toString))?JSON.stringify(t,ld,2):String(t),ld=(t,e)=>e&&e.__v_isRef?ld(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Bo(e)?{[`Set(${e.size})`]:[...e.values()]}:Ie(e)&&!z(e)&&!fd(e)?String(e):e,Ae={},Ds=[],kt=()=>{},qy=()=>!1,jy=/^on[^a-z]/,Vo=t=>jy.test(t),ol=t=>t.startsWith("onUpdate:"),ze=Object.assign,al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hy=Object.prototype.hasOwnProperty,fe=(t,e)=>Hy.call(t,e),z=Array.isArray,Ns=t=>ni(t)==="[object Map]",Bo=t=>ni(t)==="[object Set]",Ku=t=>ni(t)==="[object Date]",ne=t=>typeof t=="function",qe=t=>typeof t=="string",Dr=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",ud=t=>Ie(t)&&ne(t.then)&&ne(t.catch),hd=Object.prototype.toString,ni=t=>hd.call(t),Ky=t=>ni(t).slice(8,-1),fd=t=>ni(t)==="[object Object]",cl=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wi=sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zy=/-(\w)/g,zt=qo(t=>t.replace(zy,(e,n)=>n?n.toUpperCase():"")),Wy=/\B([A-Z])/g,tr=qo(t=>t.replace(Wy,"-$1").toLowerCase()),jo=qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fa=qo(t=>t?`on${jo(t)}`:""),Nr=(t,e)=>!Object.is(t,e),Gi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$s=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zu;const Gy=()=>zu||(zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ut;class Qy{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Yy(t,e=Ut){e&&e.active&&e.effects.push(t)}const ll=t=>{const e=new Set(t);return e.w=0,e.n=0,e},dd=t=>(t.w&On)>0,pd=t=>(t.n&On)>0,Xy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=On},Jy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];dd(r)&&!pd(r)?r.delete(t):e[n++]=r,r.w&=~On,r.n&=~On}e.length=n}},fc=new WeakMap;let gr=0,On=1;const dc=30;let Ct;const is=Symbol(""),pc=Symbol("");class ul{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yy(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,Cn=!0,On=1<<++gr,gr<=dc?Xy(this):Wu(this),this.fn()}finally{gr<=dc&&Jy(this),On=1<<--gr,Ct=this.parent,Cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(Wu(this),this.onStop&&this.onStop(),this.active=!1)}}function Wu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cn=!0;const gd=[];function nr(){gd.push(Cn),Cn=!1}function sr(){const t=gd.pop();Cn=t===void 0?!0:t}function vt(t,e,n){if(Cn&&Ct){let s=fc.get(t);s||fc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=ll()),md(r)}}function md(t,e){let n=!1;gr<=dc?pd(t)||(t.n|=On,n=!dd(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function rn(t,e,n,s,r,i){const o=fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=$s(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?cl(n)&&a.push(o.get("length")):(a.push(o.get(is)),Ns(t)&&a.push(o.get(pc)));break;case"delete":z(t)||(a.push(o.get(is)),Ns(t)&&a.push(o.get(pc)));break;case"set":Ns(t)&&a.push(o.get(is));break}if(a.length===1)a[0]&&gc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);gc(ll(c))}}function gc(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Gu(s);for(const s of n)s.computed||Gu(s)}function Gu(t,e){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Zy=sl("__proto__,__v_isRef,__isVue"),yd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr)),ev=hl(),tv=hl(!1,!0),nv=hl(!0),Qu=sv();function sv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let i=0,o=this.length;i<o;i++)vt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr();const s=pe(this)[e].apply(this,n);return sr(),s}}),t}function hl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?wv:bd:e?Ed:_d).get(s))return s;const o=z(s);if(!t&&o&&fe(Qu,r))return Reflect.get(Qu,r,i);const a=Reflect.get(s,r,i);return(Dr(r)?yd.has(r):Zy(r))||(t||vt(s,"get",r),e)?a:tt(a)?o&&cl(r)?a:a.value:Ie(a)?t?Id(a):si(a):a}}const rv=vd(),iv=vd(!0);function vd(t=!1){return function(n,s,r,i){let o=n[s];if(Vs(o)&&tt(o)&&!tt(r))return!1;if(!t&&(!co(r)&&!Vs(r)&&(o=pe(o),r=pe(r)),!z(n)&&tt(o)&&!tt(r)))return o.value=r,!0;const a=z(n)&&cl(s)?Number(s)<n.length:fe(n,s),c=Reflect.set(n,s,r,i);return n===pe(i)&&(a?Nr(r,o)&&rn(n,"set",s,r):rn(n,"add",s,r)),c}}function ov(t,e){const n=fe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&rn(t,"delete",e,void 0),s}function av(t,e){const n=Reflect.has(t,e);return(!Dr(e)||!yd.has(e))&&vt(t,"has",e),n}function cv(t){return vt(t,"iterate",z(t)?"length":is),Reflect.ownKeys(t)}const wd={get:ev,set:rv,deleteProperty:ov,has:av,ownKeys:cv},lv={get:nv,set(t,e){return!0},deleteProperty(t,e){return!0}},uv=ze({},wd,{get:tv,set:iv}),fl=t=>t,Ho=t=>Reflect.getPrototypeOf(t);function Ni(t,e,n=!1,s=!1){t=t.__v_raw;const r=pe(t),i=pe(e);n||(e!==i&&vt(r,"get",e),vt(r,"get",i));const{has:o}=Ho(r),a=s?fl:n?gl:Or;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Oi(t,e=!1){const n=this.__v_raw,s=pe(n),r=pe(t);return e||(t!==r&&vt(s,"has",t),vt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Pi(t,e=!1){return t=t.__v_raw,!e&&vt(pe(t),"iterate",is),Reflect.get(t,"size",t)}function Yu(t){t=pe(t);const e=pe(this);return Ho(e).has.call(e,t)||(e.add(t),rn(e,"add",t,t)),this}function Xu(t,e){e=pe(e);const n=pe(this),{has:s,get:r}=Ho(n);let i=s.call(n,t);i||(t=pe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Nr(e,o)&&rn(n,"set",t,e):rn(n,"add",t,e),this}function Ju(t){const e=pe(this),{has:n,get:s}=Ho(e);let r=n.call(e,t);r||(t=pe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&rn(e,"delete",t,void 0),i}function Zu(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&rn(t,"clear",void 0,void 0),n}function Mi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=pe(o),c=e?fl:t?gl:Or;return!t&&vt(a,"iterate",is),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Li(t,e,n){return function(...s){const r=this.__v_raw,i=pe(r),o=Ns(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?fl:e?gl:Or;return!e&&vt(i,"iterate",c?pc:is),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function pn(t){return function(...e){return t==="delete"?!1:this}}function hv(){const t={get(i){return Ni(this,i)},get size(){return Pi(this)},has:Oi,add:Yu,set:Xu,delete:Ju,clear:Zu,forEach:Mi(!1,!1)},e={get(i){return Ni(this,i,!1,!0)},get size(){return Pi(this)},has:Oi,add:Yu,set:Xu,delete:Ju,clear:Zu,forEach:Mi(!1,!0)},n={get(i){return Ni(this,i,!0)},get size(){return Pi(this,!0)},has(i){return Oi.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Mi(!0,!1)},s={get(i){return Ni(this,i,!0,!0)},get size(){return Pi(this,!0)},has(i){return Oi.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Li(i,!1,!1),n[i]=Li(i,!0,!1),e[i]=Li(i,!1,!0),s[i]=Li(i,!0,!0)}),[t,n,e,s]}const[fv,dv,pv,gv]=hv();function dl(t,e){const n=e?t?gv:pv:t?dv:fv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(fe(n,r)&&r in s?n:s,r,i)}const mv={get:dl(!1,!1)},yv={get:dl(!1,!0)},vv={get:dl(!0,!1)},_d=new WeakMap,Ed=new WeakMap,bd=new WeakMap,wv=new WeakMap;function _v(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ev(t){return t.__v_skip||!Object.isExtensible(t)?0:_v(Ky(t))}function si(t){return Vs(t)?t:pl(t,!1,wd,mv,_d)}function bv(t){return pl(t,!1,uv,yv,Ed)}function Id(t){return pl(t,!0,lv,vv,bd)}function pl(t,e,n,s,r){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ev(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Os(t){return Vs(t)?Os(t.__v_raw):!!(t&&t.__v_isReactive)}function Vs(t){return!!(t&&t.__v_isReadonly)}function co(t){return!!(t&&t.__v_isShallow)}function Td(t){return Os(t)||Vs(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Sd(t){return ao(t,"__v_skip",!0),t}const Or=t=>Ie(t)?si(t):t,gl=t=>Ie(t)?Id(t):t;function Cd(t){Cn&&Ct&&(t=pe(t),md(t.dep||(t.dep=ll())))}function Ad(t,e){t=pe(t),t.dep&&gc(t.dep)}function tt(t){return!!(t&&t.__v_isRef===!0)}function le(t){return kd(t,!1)}function Iv(t){return kd(t,!0)}function kd(t,e){return tt(t)?t:new Tv(t,e)}class Tv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Or(e)}get value(){return Cd(this),this._value}set value(e){const n=this.__v_isShallow||co(e)||Vs(e);e=n?e:pe(e),Nr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Or(e),Ad(this))}}function Bt(t){return tt(t)?t.value:t}const Sv={get:(t,e,n)=>Bt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return tt(r)&&!tt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Rd(t){return Os(t)?t:new Proxy(t,Sv)}var xd;class Cv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[xd]=!1,this._dirty=!0,this.effect=new ul(e,()=>{this._dirty||(this._dirty=!0,Ad(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=pe(this);return Cd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}xd="__v_isReadonly";function Av(t,e,n=!1){let s,r;const i=ne(t);return i?(s=t,r=kt):(s=t.get,r=t.set),new Cv(s,r,i||!r,n)}function An(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ko(i,e,n)}return r}function Et(t,e,n,s){if(ne(t)){const i=An(t,e,n,s);return i&&ud(i)&&i.catch(o=>{Ko(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Et(t[i],e,n,s));return r}function Ko(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){An(c,null,10,[t,o,a]);return}}kv(t,n,r,s)}function kv(t,e,n,s=!0){console.error(t)}let Pr=!1,mc=!1;const Ze=[];let $t=0;const Ps=[];let Jt=null,Xn=0;const Dd=Promise.resolve();let ml=null;function Nd(t){const e=ml||Dd;return t?e.then(this?t.bind(this):t):e}function Rv(t){let e=$t+1,n=Ze.length;for(;e<n;){const s=e+n>>>1;Mr(Ze[s])<t?e=s+1:n=s}return e}function yl(t){(!Ze.length||!Ze.includes(t,Pr&&t.allowRecurse?$t+1:$t))&&(t.id==null?Ze.push(t):Ze.splice(Rv(t.id),0,t),Od())}function Od(){!Pr&&!mc&&(mc=!0,ml=Dd.then(Md))}function xv(t){const e=Ze.indexOf(t);e>$t&&Ze.splice(e,1)}function Dv(t){z(t)?Ps.push(...t):(!Jt||!Jt.includes(t,t.allowRecurse?Xn+1:Xn))&&Ps.push(t),Od()}function eh(t,e=Pr?$t+1:0){for(;e<Ze.length;e++){const n=Ze[e];n&&n.pre&&(Ze.splice(e,1),e--,n())}}function Pd(t){if(Ps.length){const e=[...new Set(Ps)];if(Ps.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,s)=>Mr(n)-Mr(s)),Xn=0;Xn<Jt.length;Xn++)Jt[Xn]();Jt=null,Xn=0}}const Mr=t=>t.id==null?1/0:t.id,Nv=(t,e)=>{const n=Mr(t)-Mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Md(t){mc=!1,Pr=!0,Ze.sort(Nv);const e=kt;try{for($t=0;$t<Ze.length;$t++){const n=Ze[$t];n&&n.active!==!1&&An(n,null,14)}}finally{$t=0,Ze.length=0,Pd(),Pr=!1,ml=null,(Ze.length||Ps.length)&&Md()}}function Ov(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ae;f&&(r=n.map(g=>qe(g)?g.trim():g)),h&&(r=n.map($s))}let a,c=s[a=Fa(e)]||s[a=Fa(zt(e))];!c&&i&&(c=s[a=Fa(tr(e))]),c&&Et(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(l,t,6,r)}}function Ld(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=Ld(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):ze(o,i),Ie(t)&&s.set(t,o),o)}function zo(t,e){return!t||!Vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,tr(e))||fe(t,e))}let mt=null,Wo=null;function lo(t){const e=mt;return mt=t,Wo=t&&t.type.__scopeId||null,e}function Go(t){Wo=t}function Qo(){Wo=null}function Dt(t,e=mt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&uh(-1);const i=lo(e);let o;try{o=t(...r)}finally{lo(i),s._d&&uh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function $a(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:v}=t;let C,A;const N=lo(t);try{if(n.shapeFlag&4){const W=r||s;C=Ft(u.call(W,W,h,i,g,f,m)),A=c}else{const W=e;C=Ft(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),A=e.props?c:Pv(c)}}catch(W){Ir.length=0,Ko(W,t,1),C=ke(xt)}let P=C;if(A&&v!==!1){const W=Object.keys(A),{shapeFlag:ce}=P;W.length&&ce&7&&(o&&W.some(ol)&&(A=Mv(A,o)),P=Pn(P,A))}return n.dirs&&(P=Pn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),C=P,lo(N),C}const Pv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vo(n))&&((e||(e={}))[n]=t[n]);return e},Mv=(t,e)=>{const n={};for(const s in t)(!ol(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Lv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?th(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!zo(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?th(s,o,l):!0:!!o;return!1}function th(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!zo(n,i))return!0}return!1}function Uv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Fv=t=>t.__isSuspense;function $v(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Dv(t)}function Qi(t,e){if(Ke){let n=Ke.provides;const s=Ke.parent&&Ke.parent.provides;s===n&&(n=Ke.provides=Object.create(s)),n[t]=e}}function Rt(t,e,n=!1){const s=Ke||mt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ne(e)?e.call(s.proxy):e}}const Ui={};function Er(t,e,n){return Ud(t,e,n)}function Ud(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ae){const a=Ke;let c,l=!1,u=!1;if(tt(t)?(c=()=>t.value,l=co(t)):Os(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(P=>Os(P)||co(P)),c=()=>t.map(P=>{if(tt(P))return P.value;if(Os(P))return ts(P);if(ne(P))return An(P,a,2)})):ne(t)?e?c=()=>An(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Et(t,a,3,[f])}:c=kt,e&&s){const P=c;c=()=>ts(P())}let h,f=P=>{h=A.onStop=()=>{An(P,a,4)}},g;if($r)if(f=kt,e?n&&Et(e,a,3,[c(),u?[]:void 0,f]):c(),r==="sync"){const P=Dw();g=P.__watcherHandles||(P.__watcherHandles=[])}else return kt;let m=u?new Array(t.length).fill(Ui):Ui;const v=()=>{if(A.active)if(e){const P=A.run();(s||l||(u?P.some((W,ce)=>Nr(W,m[ce])):Nr(P,m)))&&(h&&h(),Et(e,a,3,[P,m===Ui?void 0:u&&m[0]===Ui?[]:m,f]),m=P)}else A.run()};v.allowRecurse=!!e;let C;r==="sync"?C=v:r==="post"?C=()=>ht(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),C=()=>yl(v));const A=new ul(c,C);e?n?v():m=A.run():r==="post"?ht(A.run.bind(A),a&&a.suspense):A.run();const N=()=>{A.stop(),a&&a.scope&&al(a.scope.effects,A)};return g&&g.push(N),N}function Vv(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?Fd(s,t):()=>s[t]:t.bind(s,s);let i;ne(e)?i=e:(i=e.handler,n=e);const o=Ke;Bs(this);const a=Ud(r,i.bind(s),n);return o?Bs(o):os(),a}function Fd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ts(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),tt(t))ts(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)ts(t[n],e);else if(Bo(t)||Ns(t))t.forEach(n=>{ts(n,e)});else if(fd(t))for(const n in t)ts(t[n],e);return t}function $d(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wl(()=>{t.isMounted=!0}),Kd(()=>{t.isUnmounting=!0}),t}const _t=[Function,Array],Bv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},setup(t,{slots:e}){const n=ip(),s=$d();let r;return()=>{const i=e.default&&vl(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==xt){o=v;break}}const a=pe(t),{mode:c}=a;if(s.isLeaving)return Va(o);const l=nh(o);if(!l)return Va(o);const u=Lr(l,a,s,n);Ur(l,u);const h=n.subTree,f=h&&nh(h);let g=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,g=!0)}if(f&&f.type!==xt&&(!Jn(l,f)||g)){const v=Lr(f,a,s,n);if(Ur(f,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Va(o);c==="in-out"&&l.type!==xt&&(v.delayLeave=(C,A,N)=>{const P=Bd(s,f);P[String(f.key)]=f,C._leaveCb=()=>{A(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},Vd=Bv;function Bd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Lr(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:C,onAfterAppear:A,onAppearCancelled:N}=e,P=String(t.key),W=Bd(n,t),ce=(L,Q)=>{L&&Et(L,s,9,Q)},Ee=(L,Q)=>{const se=Q[1];ce(L,Q),z(L)?L.every(be=>be.length<=1)&&se():L.length<=1&&se()},re={mode:i,persisted:o,beforeEnter(L){let Q=a;if(!n.isMounted)if(r)Q=v||a;else return;L._leaveCb&&L._leaveCb(!0);const se=W[P];se&&Jn(t,se)&&se.el._leaveCb&&se.el._leaveCb(),ce(Q,[L])},enter(L){let Q=c,se=l,be=u;if(!n.isMounted)if(r)Q=C||c,se=A||l,be=N||u;else return;let U=!1;const Z=L._enterCb=xe=>{U||(U=!0,xe?ce(be,[L]):ce(se,[L]),re.delayedLeave&&re.delayedLeave(),L._enterCb=void 0)};Q?Ee(Q,[L,Z]):Z()},leave(L,Q){const se=String(t.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return Q();ce(h,[L]);let be=!1;const U=L._leaveCb=Z=>{be||(be=!0,Q(),Z?ce(m,[L]):ce(g,[L]),L._leaveCb=void 0,W[se]===t&&delete W[se])};W[se]=t,f?Ee(f,[L,U]):U()},clone(L){return Lr(L,e,n,s)}};return re}function Va(t){if(Yo(t))return t=Pn(t),t.children=null,t}function nh(t){return Yo(t)?t.children?t.children[0]:void 0:t}function Ur(t,e){t.shapeFlag&6&&t.component?Ur(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vl(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===at?(o.patchFlag&128&&r++,s=s.concat(vl(o.children,e,a))):(e||o.type!==xt)&&s.push(a!=null?Pn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function qd(t){return ne(t)?{setup:t,name:t.name}:t}const Yi=t=>!!t.type.__asyncLoader,Yo=t=>t.type.__isKeepAlive;function qv(t,e){jd(t,"a",e)}function jv(t,e){jd(t,"da",e)}function jd(t,e,n=Ke){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Yo(r.parent.vnode)&&Hv(s,e,n,r),r=r.parent}}function Hv(t,e,n,s){const r=Xo(e,t,s,!0);zd(()=>{al(s[e],r)},n)}function Xo(t,e,n=Ke,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nr(),Bs(n);const a=Et(e,n,t,o);return os(),sr(),a});return s?r.unshift(i):r.push(i),i}}const hn=t=>(e,n=Ke)=>(!$r||t==="sp")&&Xo(t,(...s)=>e(...s),n),Kv=hn("bm"),wl=hn("m"),zv=hn("bu"),Hd=hn("u"),Kd=hn("bum"),zd=hn("um"),Wv=hn("sp"),Gv=hn("rtg"),Qv=hn("rtc");function Yv(t,e=Ke){Xo("ec",t,e)}function kn(t,e){const n=mt;if(n===null)return t;const s=ea(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ae]=e[i];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&ts(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Hn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(nr(),Et(c,n,8,[t.el,a,t,e]),sr())}}const Wd="components";function fs(t,e){return Jv(Wd,t,!0,e)||t}const Xv=Symbol();function Jv(t,e,n=!0,s=!1){const r=mt||Ke;if(r){const i=r.type;if(t===Wd){const a=kw(i,!1);if(a&&(a===e||a===zt(e)||a===jo(zt(e))))return i}const o=sh(r[t]||i[t],e)||sh(r.appContext[t],e);return!o&&s?i:o}}function sh(t,e){return t&&(t[e]||t[zt(e)]||t[jo(zt(e))])}function Gd(t,e,n,s){let r;const i=n&&n[s];if(z(t)||qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const yc=t=>t?op(t)?ea(t)||t.proxy:yc(t.parent):null,br=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yc(t.parent),$root:t=>yc(t.root),$emit:t=>t.emit,$options:t=>_l(t),$forceUpdate:t=>t.f||(t.f=()=>yl(t.update)),$nextTick:t=>t.n||(t.n=Nd.bind(t.proxy)),$watch:t=>Vv.bind(t)}),Ba=(t,e)=>t!==Ae&&!t.__isScriptSetup&&fe(t,e),Zv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ba(s,e))return o[e]=1,s[e];if(r!==Ae&&fe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&fe(l,e))return o[e]=3,i[e];if(n!==Ae&&fe(n,e))return o[e]=4,n[e];vc&&(o[e]=0)}}const u=br[e];let h,f;if(u)return e==="$attrs"&&vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&fe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ba(r,e)?(r[e]=n,!0):s!==Ae&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&fe(t,o)||Ba(e,o)||(a=i[0])&&fe(a,o)||fe(s,o)||fe(br,o)||fe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let vc=!0;function ew(t){const e=_l(t),n=t.proxy,s=t.ctx;vc=!1,e.beforeCreate&&rh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:v,deactivated:C,beforeDestroy:A,beforeUnmount:N,destroyed:P,unmounted:W,render:ce,renderTracked:Ee,renderTriggered:re,errorCaptured:L,serverPrefetch:Q,expose:se,inheritAttrs:be,components:U,directives:Z,filters:xe}=e;if(l&&tw(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const ve=o[Te];ne(ve)&&(s[Te]=ve.bind(n))}if(r){const Te=r.call(n,n);Ie(Te)&&(t.data=si(Te))}if(vc=!0,i)for(const Te in i){const ve=i[Te],It=ne(ve)?ve.bind(n,n):ne(ve.get)?ve.get.bind(n,n):kt,jn=!ne(ve)&&ne(ve.set)?ve.set.bind(n):kt,Tt=ft({get:It,set:jn});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:ut=>Tt.value=ut})}if(a)for(const Te in a)Qd(a[Te],s,n,Te);if(c){const Te=ne(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(ve=>{Qi(ve,Te[ve])})}u&&rh(u,t,"c");function De(Te,ve){z(ve)?ve.forEach(It=>Te(It.bind(n))):ve&&Te(ve.bind(n))}if(De(Kv,h),De(wl,f),De(zv,g),De(Hd,m),De(qv,v),De(jv,C),De(Yv,L),De(Qv,Ee),De(Gv,re),De(Kd,N),De(zd,W),De(Wv,Q),z(se))if(se.length){const Te=t.exposed||(t.exposed={});se.forEach(ve=>{Object.defineProperty(Te,ve,{get:()=>n[ve],set:It=>n[ve]=It})})}else t.exposed||(t.exposed={});ce&&t.render===kt&&(t.render=ce),be!=null&&(t.inheritAttrs=be),U&&(t.components=U),Z&&(t.directives=Z)}function tw(t,e,n=kt,s=!1){z(t)&&(t=wc(t));for(const r in t){const i=t[r];let o;Ie(i)?"default"in i?o=Rt(i.from||r,i.default,!0):o=Rt(i.from||r):o=Rt(i),tt(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function rh(t,e,n){Et(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qd(t,e,n,s){const r=s.includes(".")?Fd(n,s):()=>n[s];if(qe(t)){const i=e[t];ne(i)&&Er(r,i)}else if(ne(t))Er(r,t.bind(n));else if(Ie(t))if(z(t))t.forEach(i=>Qd(i,e,n,s));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&Er(r,i,t)}}function _l(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>uo(c,l,o,!0)),uo(c,e,o)),Ie(e)&&i.set(e,c),c}function uo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&uo(t,i,n,!0),r&&r.forEach(o=>uo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=nw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nw={data:ih,props:Qn,emits:Qn,methods:Qn,computed:Qn,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Qn,directives:Qn,watch:rw,provide:ih,inject:sw};function ih(t,e){return e?t?function(){return ze(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function sw(t,e){return Qn(wc(t),wc(e))}function wc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Qn(t,e){return t?ze(ze(Object.create(null),t),e):e}function rw(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const s in e)n[s]=ot(t[s],e[s]);return n}function iw(t,e,n,s=!1){const r={},i={};ao(i,Zo,1),t.propsDefaults=Object.create(null),Yd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:bv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ow(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=pe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(zo(t.emitsOptions,f))continue;const g=e[f];if(c)if(fe(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const m=zt(f);r[m]=_c(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Yd(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=tr(h))===h||!fe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=_c(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],l=!0)}l&&rn(t,"set","$attrs")}function Yd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Wi(c))continue;const l=e[c];let u;r&&fe(r,u=zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:zo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=pe(n),l=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=_c(r,c,h,l[h],t,!fe(l,h))}}return o}function _c(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ne(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Bs(r),s=l[n]=c.call(null,e),os())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===tr(n))&&(s=!0))}return s}function Xd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=h=>{c=!0;const[f,g]=Xd(h,e,!0);ze(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ie(t)&&s.set(t,Ds),Ds;if(z(i))for(let u=0;u<i.length;u++){const h=zt(i[u]);oh(h)&&(o[h]=Ae)}else if(i)for(const u in i){const h=zt(u);if(oh(h)){const f=i[u],g=o[h]=z(f)||ne(f)?{type:f}:Object.assign({},f);if(g){const m=lh(Boolean,g.type),v=lh(String,g.type);g[0]=m>-1,g[1]=v<0||m<v,(m>-1||fe(g,"default"))&&a.push(h)}}}const l=[o,a];return Ie(t)&&s.set(t,l),l}function oh(t){return t[0]!=="$"}function ah(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ch(t,e){return ah(t)===ah(e)}function lh(t,e){return z(e)?e.findIndex(n=>ch(n,t)):ne(e)&&ch(e,t)?0:-1}const Jd=t=>t[0]==="_"||t==="$stable",El=t=>z(t)?t.map(Ft):[Ft(t)],aw=(t,e,n)=>{if(e._n)return e;const s=Dt((...r)=>El(e(...r)),n);return s._c=!1,s},Zd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Jd(r))continue;const i=t[r];if(ne(i))e[r]=aw(r,i,s);else if(i!=null){const o=El(i);e[r]=()=>o}}},ep=(t,e)=>{const n=El(e);t.slots.default=()=>n},cw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),ao(e,"_",n)):Zd(e,t.slots={})}else t.slots={},e&&ep(t,e);ao(t.slots,Zo,1)},lw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Zd(e,r)),o=e}else e&&(ep(t,e),o={default:1});if(i)for(const a in r)!Jd(a)&&!(a in o)&&delete r[a]};function tp(){return{app:null,config:{isNativeTag:qy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uw=0;function hw(t,e){return function(s,r=null){ne(s)||(s=Object.assign({},s)),r!=null&&!Ie(r)&&(r=null);const i=tp(),o=new Set;let a=!1;const c=i.app={_uid:uw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Nw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ke(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,ea(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Ec(t,e,n,s,r=!1){if(z(t)){t.forEach((f,g)=>Ec(f,e&&(z(e)?e[g]:e),n,s,r));return}if(Yi(s)&&!r)return;const i=s.shapeFlag&4?ea(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(qe(l)?(u[l]=null,fe(h,l)&&(h[l]=null)):tt(l)&&(l.value=null)),ne(c))An(c,a,12,[o,u]);else{const f=qe(c),g=tt(c);if(f||g){const m=()=>{if(t.f){const v=f?fe(h,c)?h[c]:u[c]:c.value;r?z(v)&&al(v,i):z(v)?v.includes(i)||v.push(i):f?(u[c]=[i],fe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,fe(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ht(m,n)):m()}}}const ht=$v;function fw(t){return dw(t)}function dw(t,e){const n=Gy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=kt,insertStaticContent:m}=t,v=(d,p,y,w=null,b=null,k=null,O=!1,S=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Jn(d,p)&&(w=D(d),ut(d,b,k,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:I,ref:H,shapeFlag:$}=p;switch(I){case Jo:C(d,p,y,w);break;case xt:A(d,p,y,w);break;case Xi:d==null&&N(p,y,w,O);break;case at:U(d,p,y,w,b,k,O,S,R);break;default:$&1?ce(d,p,y,w,b,k,O,S,R):$&6?Z(d,p,y,w,b,k,O,S,R):($&64||$&128)&&I.process(d,p,y,w,b,k,O,S,R,he)}H!=null&&b&&Ec(H,d&&d.ref,k,p||d,!p)},C=(d,p,y,w)=>{if(d==null)s(p.el=a(p.children),y,w);else{const b=p.el=d.el;p.children!==d.children&&l(b,p.children)}},A=(d,p,y,w)=>{d==null?s(p.el=c(p.children||""),y,w):p.el=d.el},N=(d,p,y,w)=>{[d.el,d.anchor]=m(d.children,p,y,w,d.el,d.anchor)},P=({el:d,anchor:p},y,w)=>{let b;for(;d&&d!==p;)b=f(d),s(d,y,w),d=b;s(p,y,w)},W=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),r(d),d=y;r(p)},ce=(d,p,y,w,b,k,O,S,R)=>{O=O||p.type==="svg",d==null?Ee(p,y,w,b,k,O,S,R):Q(d,p,b,k,O,S,R)},Ee=(d,p,y,w,b,k,O,S)=>{let R,I;const{type:H,props:$,shapeFlag:K,transition:J,dirs:oe}=d;if(R=d.el=o(d.type,k,$&&$.is,$),K&8?u(R,d.children):K&16&&L(d.children,R,null,w,b,k&&H!=="foreignObject",O,S),oe&&Hn(d,null,w,"created"),$){for(const we in $)we!=="value"&&!Wi(we)&&i(R,we,null,$[we],k,d.children,w,b,M);"value"in $&&i(R,"value",null,$.value),(I=$.onVnodeBeforeMount)&&Lt(I,w,d)}re(R,d,d.scopeId,O,w),oe&&Hn(d,null,w,"beforeMount");const Se=(!b||b&&!b.pendingBranch)&&J&&!J.persisted;Se&&J.beforeEnter(R),s(R,p,y),((I=$&&$.onVnodeMounted)||Se||oe)&&ht(()=>{I&&Lt(I,w,d),Se&&J.enter(R),oe&&Hn(d,null,w,"mounted")},b)},re=(d,p,y,w,b)=>{if(y&&g(d,y),w)for(let k=0;k<w.length;k++)g(d,w[k]);if(b){let k=b.subTree;if(p===k){const O=b.vnode;re(d,O,O.scopeId,O.slotScopeIds,b.parent)}}},L=(d,p,y,w,b,k,O,S,R=0)=>{for(let I=R;I<d.length;I++){const H=d[I]=S?_n(d[I]):Ft(d[I]);v(null,H,p,y,w,b,k,O,S)}},Q=(d,p,y,w,b,k,O)=>{const S=p.el=d.el;let{patchFlag:R,dynamicChildren:I,dirs:H}=p;R|=d.patchFlag&16;const $=d.props||Ae,K=p.props||Ae;let J;y&&Kn(y,!1),(J=K.onVnodeBeforeUpdate)&&Lt(J,y,p,d),H&&Hn(p,d,y,"beforeUpdate"),y&&Kn(y,!0);const oe=b&&p.type!=="foreignObject";if(I?se(d.dynamicChildren,I,S,y,w,oe,k):O||ve(d,p,S,null,y,w,oe,k,!1),R>0){if(R&16)be(S,p,$,K,y,w,b);else if(R&2&&$.class!==K.class&&i(S,"class",null,K.class,b),R&4&&i(S,"style",$.style,K.style,b),R&8){const Se=p.dynamicProps;for(let we=0;we<Se.length;we++){const Me=Se[we],St=$[Me],Ts=K[Me];(Ts!==St||Me==="value")&&i(S,Me,St,Ts,b,d.children,y,w,M)}}R&1&&d.children!==p.children&&u(S,p.children)}else!O&&I==null&&be(S,p,$,K,y,w,b);((J=K.onVnodeUpdated)||H)&&ht(()=>{J&&Lt(J,y,p,d),H&&Hn(p,d,y,"updated")},w)},se=(d,p,y,w,b,k,O)=>{for(let S=0;S<p.length;S++){const R=d[S],I=p[S],H=R.el&&(R.type===at||!Jn(R,I)||R.shapeFlag&70)?h(R.el):y;v(R,I,H,null,w,b,k,O,!0)}},be=(d,p,y,w,b,k,O)=>{if(y!==w){if(y!==Ae)for(const S in y)!Wi(S)&&!(S in w)&&i(d,S,y[S],null,O,p.children,b,k,M);for(const S in w){if(Wi(S))continue;const R=w[S],I=y[S];R!==I&&S!=="value"&&i(d,S,I,R,O,p.children,b,k,M)}"value"in w&&i(d,"value",y.value,w.value)}},U=(d,p,y,w,b,k,O,S,R)=>{const I=p.el=d?d.el:a(""),H=p.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:K,slotScopeIds:J}=p;J&&(S=S?S.concat(J):J),d==null?(s(I,y,w),s(H,y,w),L(p.children,y,H,b,k,O,S,R)):$>0&&$&64&&K&&d.dynamicChildren?(se(d.dynamicChildren,K,y,b,k,O,S),(p.key!=null||b&&p===b.subTree)&&np(d,p,!0)):ve(d,p,y,H,b,k,O,S,R)},Z=(d,p,y,w,b,k,O,S,R)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?b.ctx.activate(p,y,w,O,R):xe(p,y,w,b,k,O,R):dn(d,p,R)},xe=(d,p,y,w,b,k,O)=>{const S=d.component=Iw(d,w,b);if(Yo(d)&&(S.ctx.renderer=he),Tw(S),S.asyncDep){if(b&&b.registerDep(S,De),!d.el){const R=S.subTree=ke(xt);A(null,R,p,y)}return}De(S,d,p,y,b,k,O)},dn=(d,p,y)=>{const w=p.component=d.component;if(Lv(d,p,y))if(w.asyncDep&&!w.asyncResolved){Te(w,p,y);return}else w.next=p,xv(w.update),w.update();else p.el=d.el,w.vnode=p},De=(d,p,y,w,b,k,O)=>{const S=()=>{if(d.isMounted){let{next:H,bu:$,u:K,parent:J,vnode:oe}=d,Se=H,we;Kn(d,!1),H?(H.el=oe.el,Te(d,H,O)):H=oe,$&&Gi($),(we=H.props&&H.props.onVnodeBeforeUpdate)&&Lt(we,J,H,oe),Kn(d,!0);const Me=$a(d),St=d.subTree;d.subTree=Me,v(St,Me,h(St.el),D(St),d,b,k),H.el=Me.el,Se===null&&Uv(d,Me.el),K&&ht(K,b),(we=H.props&&H.props.onVnodeUpdated)&&ht(()=>Lt(we,J,H,oe),b)}else{let H;const{el:$,props:K}=p,{bm:J,m:oe,parent:Se}=d,we=Yi(p);if(Kn(d,!1),J&&Gi(J),!we&&(H=K&&K.onVnodeBeforeMount)&&Lt(H,Se,p),Kn(d,!0),$&&ie){const Me=()=>{d.subTree=$a(d),ie($,d.subTree,d,b,null)};we?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Me()):Me()}else{const Me=d.subTree=$a(d);v(null,Me,y,w,d,b,k),p.el=Me.el}if(oe&&ht(oe,b),!we&&(H=K&&K.onVnodeMounted)){const Me=p;ht(()=>Lt(H,Se,Me),b)}(p.shapeFlag&256||Se&&Yi(Se.vnode)&&Se.vnode.shapeFlag&256)&&d.a&&ht(d.a,b),d.isMounted=!0,p=y=w=null}},R=d.effect=new ul(S,()=>yl(I),d.scope),I=d.update=()=>R.run();I.id=d.uid,Kn(d,!0),I()},Te=(d,p,y)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,ow(d,p.props,w,y),lw(d,p.children,y),nr(),eh(),sr()},ve=(d,p,y,w,b,k,O,S,R=!1)=>{const I=d&&d.children,H=d?d.shapeFlag:0,$=p.children,{patchFlag:K,shapeFlag:J}=p;if(K>0){if(K&128){jn(I,$,y,w,b,k,O,S,R);return}else if(K&256){It(I,$,y,w,b,k,O,S,R);return}}J&8?(H&16&&M(I,b,k),$!==I&&u(y,$)):H&16?J&16?jn(I,$,y,w,b,k,O,S,R):M(I,b,k,!0):(H&8&&u(y,""),J&16&&L($,y,w,b,k,O,S,R))},It=(d,p,y,w,b,k,O,S,R)=>{d=d||Ds,p=p||Ds;const I=d.length,H=p.length,$=Math.min(I,H);let K;for(K=0;K<$;K++){const J=p[K]=R?_n(p[K]):Ft(p[K]);v(d[K],J,y,null,b,k,O,S,R)}I>H?M(d,b,k,!0,!1,$):L(p,y,w,b,k,O,S,R,$)},jn=(d,p,y,w,b,k,O,S,R)=>{let I=0;const H=p.length;let $=d.length-1,K=H-1;for(;I<=$&&I<=K;){const J=d[I],oe=p[I]=R?_n(p[I]):Ft(p[I]);if(Jn(J,oe))v(J,oe,y,null,b,k,O,S,R);else break;I++}for(;I<=$&&I<=K;){const J=d[$],oe=p[K]=R?_n(p[K]):Ft(p[K]);if(Jn(J,oe))v(J,oe,y,null,b,k,O,S,R);else break;$--,K--}if(I>$){if(I<=K){const J=K+1,oe=J<H?p[J].el:w;for(;I<=K;)v(null,p[I]=R?_n(p[I]):Ft(p[I]),y,oe,b,k,O,S,R),I++}}else if(I>K)for(;I<=$;)ut(d[I],b,k,!0),I++;else{const J=I,oe=I,Se=new Map;for(I=oe;I<=K;I++){const pt=p[I]=R?_n(p[I]):Ft(p[I]);pt.key!=null&&Se.set(pt.key,I)}let we,Me=0;const St=K-oe+1;let Ts=!1,qu=0;const hr=new Array(St);for(I=0;I<St;I++)hr[I]=0;for(I=J;I<=$;I++){const pt=d[I];if(Me>=St){ut(pt,b,k,!0);continue}let Mt;if(pt.key!=null)Mt=Se.get(pt.key);else for(we=oe;we<=K;we++)if(hr[we-oe]===0&&Jn(pt,p[we])){Mt=we;break}Mt===void 0?ut(pt,b,k,!0):(hr[Mt-oe]=I+1,Mt>=qu?qu=Mt:Ts=!0,v(pt,p[Mt],y,null,b,k,O,S,R),Me++)}const ju=Ts?pw(hr):Ds;for(we=ju.length-1,I=St-1;I>=0;I--){const pt=oe+I,Mt=p[pt],Hu=pt+1<H?p[pt+1].el:w;hr[I]===0?v(null,Mt,y,Hu,b,k,O,S,R):Ts&&(we<0||I!==ju[we]?Tt(Mt,y,Hu,2):we--)}}},Tt=(d,p,y,w,b=null)=>{const{el:k,type:O,transition:S,children:R,shapeFlag:I}=d;if(I&6){Tt(d.component.subTree,p,y,w);return}if(I&128){d.suspense.move(p,y,w);return}if(I&64){O.move(d,p,y,he);return}if(O===at){s(k,p,y);for(let $=0;$<R.length;$++)Tt(R[$],p,y,w);s(d.anchor,p,y);return}if(O===Xi){P(d,p,y);return}if(w!==2&&I&1&&S)if(w===0)S.beforeEnter(k),s(k,p,y),ht(()=>S.enter(k),b);else{const{leave:$,delayLeave:K,afterLeave:J}=S,oe=()=>s(k,p,y),Se=()=>{$(k,()=>{oe(),J&&J()})};K?K(k,oe,Se):Se()}else s(k,p,y)},ut=(d,p,y,w=!1,b=!1)=>{const{type:k,props:O,ref:S,children:R,dynamicChildren:I,shapeFlag:H,patchFlag:$,dirs:K}=d;if(S!=null&&Ec(S,null,y,d,!0),H&256){p.ctx.deactivate(d);return}const J=H&1&&K,oe=!Yi(d);let Se;if(oe&&(Se=O&&O.onVnodeBeforeUnmount)&&Lt(Se,p,d),H&6)E(d.component,y,w);else{if(H&128){d.suspense.unmount(y,w);return}J&&Hn(d,null,p,"beforeUnmount"),H&64?d.type.remove(d,p,y,b,he,w):I&&(k!==at||$>0&&$&64)?M(I,p,y,!1,!0):(k===at&&$&384||!b&&H&16)&&M(R,p,y),w&&Is(d)}(oe&&(Se=O&&O.onVnodeUnmounted)||J)&&ht(()=>{Se&&Lt(Se,p,d),J&&Hn(d,null,p,"unmounted")},y)},Is=d=>{const{type:p,el:y,anchor:w,transition:b}=d;if(p===at){Di(y,w);return}if(p===Xi){W(d);return}const k=()=>{r(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:O,delayLeave:S}=b,R=()=>O(y,k);S?S(d.el,k,R):R()}else k()},Di=(d,p)=>{let y;for(;d!==p;)y=f(d),r(d),d=y;r(p)},E=(d,p,y)=>{const{bum:w,scope:b,update:k,subTree:O,um:S}=d;w&&Gi(w),b.stop(),k&&(k.active=!1,ut(O,d,p,y)),S&&ht(S,p),ht(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},M=(d,p,y,w=!1,b=!1,k=0)=>{for(let O=k;O<d.length;O++)ut(d[O],p,y,w,b)},D=d=>d.shapeFlag&6?D(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),j=(d,p,y)=>{d==null?p._vnode&&ut(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,y),eh(),Pd(),p._vnode=d},he={p:v,um:ut,m:Tt,r:Is,mt:xe,mc:L,pc:ve,pbc:se,n:D,o:t};let Ne,ie;return e&&([Ne,ie]=e(he)),{render:j,hydrate:Ne,createApp:hw(j,Ne)}}function Kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function np(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=_n(r[i]),a.el=o.el),n||np(o,a)),a.type===Jo&&(a.el=o.el)}}function pw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const gw=t=>t.__isTeleport,at=Symbol(void 0),Jo=Symbol(void 0),xt=Symbol(void 0),Xi=Symbol(void 0),Ir=[];let At=null;function de(t=!1){Ir.push(At=t?null:[])}function mw(){Ir.pop(),At=Ir[Ir.length-1]||null}let Fr=1;function uh(t){Fr+=t}function sp(t){return t.dynamicChildren=Fr>0?At||Ds:null,mw(),Fr>0&&At&&At.push(t),t}function Oe(t,e,n,s,r,i){return sp(F(t,e,n,s,r,i,!0))}function on(t,e,n,s,r){return sp(ke(t,e,n,s,r,!0))}function bc(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const Zo="__vInternal",rp=({key:t})=>t??null,Ji=({ref:t,ref_key:e,ref_for:n})=>t!=null?qe(t)||tt(t)||ne(t)?{i:mt,r:t,k:e,f:!!n}:t:null;function F(t,e=null,n=null,s=0,r=null,i=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rp(e),ref:e&&Ji(e),scopeId:Wo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:mt};return a?(bl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Fr>0&&!o&&At&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&At.push(c),c}const ke=yw;function yw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Xv)&&(t=xt),bc(t)){const a=Pn(t,e,!0);return n&&bl(a,n),Fr>0&&!i&&At&&(a.shapeFlag&6?At[At.indexOf(t)]=a:At.push(a)),a.patchFlag|=-2,a}if(Rw(t)&&(t=t.__vccOpts),e){e=vw(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=il(a)),Ie(c)&&(Td(c)&&!z(c)&&(c=ze({},c)),e.style=rl(c))}const o=qe(t)?1:Fv(t)?128:gw(t)?64:Ie(t)?4:ne(t)?2:0;return F(t,e,n,s,r,o,i,!0)}function vw(t){return t?Td(t)||Zo in t?ze({},t):t:null}function Pn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?_w(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rp(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Ji(e)):[r,Ji(e)]:Ji(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function nn(t=" ",e=0){return ke(Jo,null,t,e)}function ww(t,e){const n=ke(Xi,null,t);return n.staticCount=e,n}function ct(t="",e=!1){return e?(de(),on(xt,null,t)):ke(xt,null,t)}function Ft(t){return t==null||typeof t=="boolean"?ke(xt):z(t)?ke(at,null,t.slice()):typeof t=="object"?_n(t):ke(Jo,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function bl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Zo in e)?e._ctx=mt:r===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),s&64?(n=16,e=[nn(e)]):n=8);t.children=e,t.shapeFlag|=n}function _w(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=il([e.class,s.class]));else if(r==="style")e.style=rl([e.style,s.style]);else if(Vo(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Lt(t,e,n,s=null){Et(t,e,7,[n,s])}const Ew=tp();let bw=0;function Iw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ew,i={uid:bw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xd(s,r),emitsOptions:Ld(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ov.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const ip=()=>Ke||mt,Bs=t=>{Ke=t,t.scope.on()},os=()=>{Ke&&Ke.scope.off(),Ke=null};function op(t){return t.vnode.shapeFlag&4}let $r=!1;function Tw(t,e=!1){$r=e;const{props:n,children:s}=t.vnode,r=op(t);iw(t,n,r,e),cw(t,s);const i=r?Sw(t,e):void 0;return $r=!1,i}function Sw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sd(new Proxy(t.ctx,Zv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Aw(t):null;Bs(t),nr();const i=An(s,t,0,[t.props,r]);if(sr(),os(),ud(i)){if(i.then(os,os),e)return i.then(o=>{hh(t,o,e)}).catch(o=>{Ko(o,t,0)});t.asyncDep=i}else hh(t,i,e)}else ap(t,e)}function hh(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Rd(e)),ap(t,n)}let fh;function ap(t,e,n){const s=t.type;if(!t.render){if(!e&&fh&&!s.render){const r=s.template||_l(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ze(ze({isCustomElement:i,delimiters:a},o),c);s.render=fh(r,l)}}t.render=s.render||kt}Bs(t),nr(),ew(t),sr(),os()}function Cw(t){return new Proxy(t.attrs,{get(e,n){return vt(t,"get","$attrs"),e[n]}})}function Aw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Cw(t))},slots:t.slots,emit:t.emit,expose:e}}function ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rd(Sd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in br)return br[n](t)},has(e,n){return n in e||n in br}}))}function kw(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function Rw(t){return ne(t)&&"__vccOpts"in t}const ft=(t,e)=>Av(t,e,$r);function Il(t,e,n){const s=arguments.length;return s===2?Ie(e)&&!z(e)?bc(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&bc(n)&&(n=[n]),ke(t,e,n))}const xw=Symbol(""),Dw=()=>Rt(xw),Nw="3.2.45",Ow="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,dh=Zn&&Zn.createElement("template"),Pw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Zn.createElementNS(Ow,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{dh.innerHTML=s?`<svg>${t}</svg>`:t;const a=dh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Mw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Lw(t,e,n){const s=t.style,r=qe(n);if(n&&!r){for(const i in n)Ic(s,i,n[i]);if(e&&!qe(e))for(const i in e)n[i]==null&&Ic(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ph=/\s*!important$/;function Ic(t,e,n){if(z(n))n.forEach(s=>Ic(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Uw(t,e);ph.test(n)?t.setProperty(tr(s),n.replace(ph,""),"important"):t[s]=n}}const gh=["Webkit","Moz","ms"],qa={};function Uw(t,e){const n=qa[e];if(n)return n;let s=zt(e);if(s!=="filter"&&s in t)return qa[e]=s;s=jo(s);for(let r=0;r<gh.length;r++){const i=gh[r]+s;if(i in t)return qa[e]=i}return e}const mh="http://www.w3.org/1999/xlink";function Fw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mh,e.slice(6,e.length)):t.setAttributeNS(mh,e,n);else{const i=$y(e);n==null||i&&!cd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function $w(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=cd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function es(t,e,n,s){t.addEventListener(e,n,s)}function Vw(t,e,n,s){t.removeEventListener(e,n,s)}function Bw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=qw(e);if(s){const l=i[e]=Kw(s,r);es(t,a,l,c)}else o&&(Vw(t,a,o,c),i[e]=void 0)}}const yh=/(?:Once|Passive|Capture)$/;function qw(t){let e;if(yh.test(t)){e={};let s;for(;s=t.match(yh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tr(t.slice(2)),e]}let ja=0;const jw=Promise.resolve(),Hw=()=>ja||(jw.then(()=>ja=0),ja=Date.now());function Kw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Et(zw(s,n.value),e,5,[s])};return n.value=t,n.attached=Hw(),n}function zw(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const vh=/^on[a-z]/,Ww=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Mw(t,s,r):e==="style"?Lw(t,n,s):Vo(e)?ol(e)||Bw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gw(t,e,s,r))?$w(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Fw(t,e,s,r))};function Gw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vh.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vh.test(e)&&qe(n)?!1:e in t}const gn="transition",fr="animation",ta=(t,{slots:e})=>Il(Vd,lp(t),e);ta.displayName="Transition";const cp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qw=ta.props=ze({},Vd.props,cp),zn=(t,e=[])=>{z(t)?t.forEach(n=>n(...e)):t&&t(...e)},wh=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function lp(t){const e={};for(const U in t)U in cp||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,m=Yw(r),v=m&&m[0],C=m&&m[1],{onBeforeEnter:A,onEnter:N,onEnterCancelled:P,onLeave:W,onLeaveCancelled:ce,onBeforeAppear:Ee=A,onAppear:re=N,onAppearCancelled:L=P}=e,Q=(U,Z,xe)=>{vn(U,Z?u:a),vn(U,Z?l:o),xe&&xe()},se=(U,Z)=>{U._isLeaving=!1,vn(U,h),vn(U,g),vn(U,f),Z&&Z()},be=U=>(Z,xe)=>{const dn=U?re:N,De=()=>Q(Z,U,xe);zn(dn,[Z,De]),_h(()=>{vn(Z,U?c:i),Xt(Z,U?u:a),wh(dn)||Eh(Z,s,v,De)})};return ze(e,{onBeforeEnter(U){zn(A,[U]),Xt(U,i),Xt(U,o)},onBeforeAppear(U){zn(Ee,[U]),Xt(U,c),Xt(U,l)},onEnter:be(!1),onAppear:be(!0),onLeave(U,Z){U._isLeaving=!0;const xe=()=>se(U,Z);Xt(U,h),hp(),Xt(U,f),_h(()=>{U._isLeaving&&(vn(U,h),Xt(U,g),wh(W)||Eh(U,s,C,xe))}),zn(W,[U,xe])},onEnterCancelled(U){Q(U,!1),zn(P,[U])},onAppearCancelled(U){Q(U,!0),zn(L,[U])},onLeaveCancelled(U){se(U),zn(ce,[U])}})}function Yw(t){if(t==null)return null;if(Ie(t))return[Ha(t.enter),Ha(t.leave)];{const e=Ha(t);return[e,e]}}function Ha(t){return $s(t)}function Xt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function vn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function _h(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Xw=0;function Eh(t,e,n,s){const r=t._endId=++Xw,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=up(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=g=>{g.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function up(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${gn}Delay`),i=s(`${gn}Duration`),o=bh(r,i),a=s(`${fr}Delay`),c=s(`${fr}Duration`),l=bh(a,c);let u=null,h=0,f=0;e===gn?o>0&&(u=gn,h=o,f=i.length):e===fr?l>0&&(u=fr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?gn:fr:null,f=u?u===gn?i.length:c.length:0);const g=u===gn&&/\b(transform|all)(,|$)/.test(s(`${gn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:g}}function bh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Ih(n)+Ih(t[s])))}function Ih(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function hp(){return document.body.offsetHeight}const fp=new WeakMap,dp=new WeakMap,Jw={name:"TransitionGroup",props:ze({},Qw,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ip(),s=$d();let r,i;return Hd(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!s_(r[0].el,n.vnode.el,o))return;r.forEach(e_),r.forEach(t_);const a=r.filter(n_);hp(),a.forEach(c=>{const l=c.el,u=l.style;Xt(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,vn(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=pe(t),a=lp(o);let c=o.tag||at;r=i,i=e.default?vl(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Ur(u,Lr(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];Ur(u,Lr(u,a,s,n)),fp.set(u,u.el.getBoundingClientRect())}return ke(c,null,i)}}},Zw=Jw;function e_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function t_(t){dp.set(t,t.el.getBoundingClientRect())}function n_(t){const e=fp.get(t),n=dp.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function s_(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=up(s);return r.removeChild(s),i}const ho=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Gi(e,n):e};function r_(t){t.target.composing=!0}function Th(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const as={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ho(r);const i=s||r.props&&r.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=$s(a)),t._assign(a)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",r_),es(t,"compositionend",Th),es(t,"change",Th))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ho(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&$s(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},i_={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Bo(e);es(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$s(fo(o)):fo(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=ho(s)},mounted(t,{value:e}){Sh(t,e)},beforeUpdate(t,e,n){t._assign=ho(n)},updated(t,{value:e}){Sh(t,e)}};function Sh(t,e){const n=t.multiple;if(!(n&&!z(e)&&!Bo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=fo(i);if(n)z(e)?i.selected=By(e,o)>-1:i.selected=e.has(o);else if($o(fo(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fo(t){return"_value"in t?t._value:t.value}const o_=["ctrl","shift","alt","meta"],a_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>o_.some(n=>t[`${n}Key`]&&!e.includes(n))},pp=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=a_[e[r]];if(i&&i(n,e))return}return t(n,...s)},c_=ze({patchProp:Ww},Pw);let Ch;function l_(){return Ch||(Ch=fw(c_))}const u_=(...t)=>{const e=l_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=h_(s);if(!r)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function h_(t){return qe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},f_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):f_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},d_=function(t){const e=gp(t);return mp.encodeByteArray(e,!0)},po=function(t){return d_(t).replace(/\./g,"")},yp=function(t){try{return mp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function p_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function g_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y_(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function v_(){try{return typeof indexedDB=="object"}catch{return!1}}function w_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function __(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=()=>__().__FIREBASE_DEFAULTS__,b_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},I_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yp(t[1]);return e&&JSON.parse(e)},Tl=()=>{try{return E_()||b_()||I_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vp=t=>{var e,n;return(n=(e=Tl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},T_=t=>{const e=vp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},S_=()=>{var t;return(t=Tl())===null||t===void 0?void 0:t.config},wp=t=>{var e;return(e=Tl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[po(JSON.stringify(n)),po(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="FirebaseError";class fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=k_,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?R_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new fn(r,a,s)}}function R_(t,e){return t.replace(x_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const x_=/\{\$([^}]+)}/g;function D_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function go(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ah(i)&&Ah(o)){if(!go(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ah(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function yr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function N_(t,e){const n=new O_(t,e);return n.subscribe.bind(n)}class O_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");P_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ka),r.error===void 0&&(r.error=Ka),r.complete===void 0&&(r.complete=Ka);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ka(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class ds{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new C_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U_(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:L_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L_(t){return t===Yn?void 0:t}function U_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new M_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const $_={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},V_=ge.INFO,B_={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},q_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=B_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=V_,this._logHandler=q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const j_=(t,e)=>e.some(n=>t instanceof n);let kh,Rh;function H_(){return kh||(kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K_(){return Rh||(Rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _p=new WeakMap,Tc=new WeakMap,Ep=new WeakMap,za=new WeakMap,Cl=new WeakMap;function z_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_p.set(n,t)}).catch(()=>{}),Cl.set(e,t),e}function W_(t){if(Tc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Tc.set(t,e)}let Sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ep.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function G_(t){Sc=t(Sc)}function Q_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wa(this),e,...n);return Ep.set(s,e.sort?e.sort():[e]),Rn(s)}:K_().includes(t)?function(...e){return t.apply(Wa(this),e),Rn(_p.get(this))}:function(...e){return Rn(t.apply(Wa(this),e))}}function Y_(t){return typeof t=="function"?Q_(t):(t instanceof IDBTransaction&&W_(t),j_(t,H_())?new Proxy(t,Sc):t)}function Rn(t){if(t instanceof IDBRequest)return z_(t);if(za.has(t))return za.get(t);const e=Y_(t);return e!==t&&(za.set(t,e),Cl.set(e,t)),e}const Wa=t=>Cl.get(t);function X_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Rn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rn(o.result),c.oldVersion,c.newVersion,Rn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const J_=["get","getKey","getAll","getAllKeys","count"],Z_=["put","add","delete","clear"],Ga=new Map;function xh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ga.get(e))return Ga.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Z_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||J_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ga.set(e,i),i}G_(t=>({...t,get:(e,n,s)=>xh(e,n)||t.get(e,n,s),has:(e,n)=>!!xh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cc="@firebase/app",Dh="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Sl("@firebase/app"),nE="@firebase/app-compat",sE="@firebase/analytics-compat",rE="@firebase/analytics",iE="@firebase/app-check-compat",oE="@firebase/app-check",aE="@firebase/auth",cE="@firebase/auth-compat",lE="@firebase/database",uE="@firebase/database-compat",hE="@firebase/functions",fE="@firebase/functions-compat",dE="@firebase/installations",pE="@firebase/installations-compat",gE="@firebase/messaging",mE="@firebase/messaging-compat",yE="@firebase/performance",vE="@firebase/performance-compat",wE="@firebase/remote-config",_E="@firebase/remote-config-compat",EE="@firebase/storage",bE="@firebase/storage-compat",IE="@firebase/firestore",TE="@firebase/firestore-compat",SE="firebase",CE="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",AE={[Cc]:"fire-core",[nE]:"fire-core-compat",[rE]:"fire-analytics",[sE]:"fire-analytics-compat",[oE]:"fire-app-check",[iE]:"fire-app-check-compat",[aE]:"fire-auth",[cE]:"fire-auth-compat",[lE]:"fire-rtdb",[uE]:"fire-rtdb-compat",[hE]:"fire-fn",[fE]:"fire-fn-compat",[dE]:"fire-iid",[pE]:"fire-iid-compat",[gE]:"fire-fcm",[mE]:"fire-fcm-compat",[yE]:"fire-perf",[vE]:"fire-perf-compat",[wE]:"fire-rc",[_E]:"fire-rc-compat",[EE]:"fire-gcs",[bE]:"fire-gcs-compat",[IE]:"fire-fst",[TE]:"fire-fst-compat","fire-js":"fire-js",[SE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map,kc=new Map;function kE(t,e){try{t.container.addComponent(e)}catch(n){ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qs(t){const e=t.name;if(kc.has(e))return ps.debug(`There were multiple attempts to register component ${e}.`),!1;kc.set(e,t);for(const n of mo.values())kE(n,t);return!0}function Al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xn=new ri("app","Firebase",RE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=CE;function bp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw xn.create("bad-app-name",{appName:String(r)});if(n||(n=S_()),!n)throw xn.create("no-options");const i=mo.get(r);if(i){if(go(n,i.options)&&go(s,i.config))return i;throw xn.create("duplicate-app",{appName:r})}const o=new F_(r);for(const c of kc.values())o.addComponent(c);const a=new xE(n,s,o);return mo.set(r,a),a}function Ip(t=Ac){const e=mo.get(t);if(!e&&t===Ac)return bp();if(!e)throw xn.create("no-app",{appName:t});return e}function Dn(t,e,n){var s;let r=(s=AE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ps.warn(a.join(" "));return}qs(new ds(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="firebase-heartbeat-database",NE=1,Vr="firebase-heartbeat-store";let Qa=null;function Tp(){return Qa||(Qa=X_(DE,NE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vr)}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),Qa}async function OE(t){try{return(await Tp()).transaction(Vr).objectStore(Vr).get(Sp(t))}catch(e){if(e instanceof fn)ps.warn(e.message);else{const n=xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ps.warn(n.message)}}}async function Nh(t,e){try{const s=(await Tp()).transaction(Vr,"readwrite");return await s.objectStore(Vr).put(e,Sp(t)),s.done}catch(n){if(n instanceof fn)ps.warn(n.message);else{const s=xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ps.warn(s.message)}}}function Sp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=1024,ME=30*24*60*60*1e3;class LE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Oh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ME}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Oh(),{heartbeatsToSend:n,unsentEntries:s}=UE(this._heartbeatsCache.heartbeats),r=po(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Oh(){return new Date().toISOString().substring(0,10)}function UE(t,e=PE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ph(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ph(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class FE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v_()?w_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ph(t){return po(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){qs(new ds("platform-logger",e=>new eE(e),"PRIVATE")),qs(new ds("heartbeat",e=>new LE(e),"PRIVATE")),Dn(Cc,Dh,t),Dn(Cc,Dh,"esm2017"),Dn("fire-js","")}$E("");function kl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Cp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VE=Cp,Ap=new ri("auth","Firebase",Cp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new Sl("@firebase/auth");function Zi(t,...e){Mh.logLevel<=ge.ERROR&&Mh.error(`Auth (${oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw Rl(t,...e)}function qt(t,...e){return Rl(t,...e)}function BE(t,e,n){const s=Object.assign(Object.assign({},VE()),{[e]:n});return new ri("auth","Firebase",s).create(e,{appName:t.name})}function Rl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ap.create(t,...e)}function G(t,e,...n){if(!t)throw Rl(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zi(e),new Error(e)}function an(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Map;function en(t){an(t instanceof Function,"Expected a class definition");let e=Lh.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t,e){const n=Al(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(go(i,e??{}))return r;Nt(r,"already-initialized")}return n.initialize({options:e})}function jE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HE(){return Uh()==="http:"||Uh()==="https:"}function Uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HE()||g_()||"connection"in navigator)?navigator.onLine:!0}function zE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=p_()||m_()}get(){return KE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=new ai(3e4,6e4);function ci(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,s,r={}){return Rp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ii(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kp.fetch()(xp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Rp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},WE),e);try{const r=new QE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw BE(t,u,l);Nt(t,u)}}catch(r){if(r instanceof fn)throw r;Nt(t,"network-request-failed")}}async function li(t,e,n,s,r={}){const i=await rr(t,e,n,s,r);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function xp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?xl(t.config,r):`${t.config.apiScheme}://${r}`}class QE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qt(this.auth,"network-request-failed")),GE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=qt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function XE(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JE(t,e=!1){const n=$e(t),s=await n.getIdToken(e),r=Dl(s);G(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Tr(Ya(r.auth_time)),issuedAtTime:Tr(Ya(r.iat)),expirationTime:Tr(Ya(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ya(t){return Number(t)*1e3}function Dl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const r=yp(n);return r?JSON.parse(r):(Zi("Failed to decode base64 JWT payload"),null)}catch(r){return Zi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ZE(t){const e=Dl(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof fn&&e0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function e0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await js(t,XE(n,{idToken:s}));G(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?r0(i.providerUserInfo):[],a=s0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Dp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function n0(t){const e=$e(t);await yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function r0(t){return t.map(e=>{var{providerId:n}=e,s=kl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(t,e){const n=await Rp(t,{},async()=>{const s=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=xp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await i0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Br;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new t0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await js(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JE(this,e)}reload(){return n0(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await yo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await js(this,YE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:W,isAnonymous:ce,providerData:Ee,stsTokenManager:re}=n;G(P&&re,e,"internal-error");const L=Br.fromJSON(this.name,re);G(typeof P=="string",e,"internal-error"),mn(h,e.name),mn(f,e.name),G(typeof W=="boolean",e,"internal-error"),G(typeof ce=="boolean",e,"internal-error"),mn(g,e.name),mn(m,e.name),mn(v,e.name),mn(C,e.name),mn(A,e.name),mn(N,e.name);const Q=new cs({uid:P,auth:e,email:f,emailVerified:W,displayName:h,isAnonymous:ce,photoURL:m,phoneNumber:g,tenantId:v,stsTokenManager:L,createdAt:A,lastLoginAt:N});return Ee&&Array.isArray(Ee)&&(Q.providerData=Ee.map(se=>Object.assign({},se))),C&&(Q._redirectEventId=C),Q}static async _fromIdTokenResponse(e,n,s=!1){const r=new Br;r.updateFromServerResponse(n);const i=new cs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await yo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Np.type="NONE";const Fh=Np;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=eo(this.userKey,r.apiKey,i),this.fullPersistenceKey=eo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ms(en(Fh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||en(Fh);const o=eo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=cs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ms(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ms(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Op(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Up(e))return"Blackberry";if(Fp(e))return"Webos";if(Nl(e))return"Safari";if((e.includes("chrome/")||Pp(e))&&!e.includes("edge/"))return"Chrome";if(Lp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Op(t=rt()){return/firefox\//i.test(t)}function Nl(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pp(t=rt()){return/crios\//i.test(t)}function Mp(t=rt()){return/iemobile/i.test(t)}function Lp(t=rt()){return/android/i.test(t)}function Up(t=rt()){return/blackberry/i.test(t)}function Fp(t=rt()){return/webos/i.test(t)}function na(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function o0(t=rt()){var e;return na(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function a0(){return y_()&&document.documentMode===10}function $p(t=rt()){return na(t)||Lp(t)||Fp(t)||Up(t)||/windows phone/i.test(t)||Mp(t)}function c0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t,e=[]){let n;switch(t){case"Browser":n=$h(rt());break;case"Worker":n=`${$h(rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vh(this),this.idTokenSubscription=new Vh(this),this.beforeStateQueue=new l0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ap,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ui(t){return $e(t)}class Vh{constructor(e){this.auth=e,this.observer=null,this.addObserver=N_(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function h0(t,e,n){const s=ui(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Bp(e),{host:o,port:a}=f0(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||d0()}function Bp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function f0(t){const e=Bp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Bh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Bh(o)}}}function Bh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function d0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function p0(t,e){return rr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e){return li(t,"POST","/v1/accounts:signInWithPassword",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t,e){return li(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}async function y0(t,e){return li(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Ol{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new qr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new qr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return g0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return m0(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return p0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return y0(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e){return li(t,"POST","/v1/accounts:signInWithIdp",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="http://localhost";class gs extends Ol{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=kl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new gs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ls(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:v0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _0(t){const e=mr(yr(t)).link,n=e?mr(yr(e)).deep_link_id:null,s=mr(yr(t)).deep_link_id;return(s?mr(yr(s)).link:null)||s||n||e||t}class Pl{constructor(e){var n,s,r,i,o,a;const c=mr(yr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=w0((r=c.mode)!==null&&r!==void 0?r:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_0(e);try{return new Pl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,n){return qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Pl.parseLink(n);return G(s,"argument-error"),qr._fromEmailAndCode(e,s.code,s.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends qp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends hi{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return In.credential(n,s)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends hi{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends hi{constructor(){super("twitter.com")}static credential(e,n){return gs._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t,e){return li(t,"POST","/v1/accounts:signUp",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await cs._fromIdTokenResponse(e,s,r),o=qh(s);return new ms({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=qh(s);return new ms({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function qh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends fn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new vo(e,n,s,r)}}function jp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vo._fromErrorAndOperation(t,i,e,s):i})}async function b0(t,e,n=!1){const s=await js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await js(t,jp(s,r,e,t),n);G(i.idToken,s,"internal-error");const o=Dl(i.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),ms._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t,e,n=!1){const s="signIn",r=await jp(t,s,e),i=await ms._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function T0(t,e){return Hp(ui(t),e)}async function S0(t,e,n){const s=ui(t),r=await E0(s,{returnSecureToken:!0,email:e,password:n}),i=await ms._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function C0(t,e,n){return T0($e(t),ir.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(t,e){return rr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=$e(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await js(s,A0(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function R0(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function x0(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function D0(t,e,n,s){return $e(t).onAuthStateChanged(e,n,s)}function N0(t){return $e(t).signOut()}const wo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wo,"1"),this.storage.removeItem(wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(){const t=rt();return Nl(t)||na(t)}const P0=1e3,M0=10;class zp extends Kp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=O0()&&c0(),this.fallbackToPolling=$p(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);a0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,M0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},P0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zp.type="LOCAL";const L0=zp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends Kp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wp.type="SESSION";const Gp=Wp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new sa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await U0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ml("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function $0(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function V0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function q0(){return Qp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="firebaseLocalStorageDb",j0=1,_o="firebaseLocalStorage",Xp="fbase_key";class fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ra(t,e){return t.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function H0(){const t=indexedDB.deleteDatabase(Yp);return new fi(t).toPromise()}function xc(){const t=indexedDB.open(Yp,j0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_o,{keyPath:Xp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_o)?e(s):(s.close(),await H0(),e(await xc()))})})}async function jh(t,e,n){const s=ra(t,!0).put({[Xp]:e,value:n});return new fi(s).toPromise()}async function K0(t,e){const n=ra(t,!1).get(e),s=await new fi(n).toPromise();return s===void 0?null:s.value}function Hh(t,e){const n=ra(t,!0).delete(e);return new fi(n).toPromise()}const z0=800,W0=3;class Jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>W0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sa._getInstance(q0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await V0(),!this.activeServiceWorker)return;this.sender=new F0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await jh(e,wo,"1"),await Hh(e,wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>jh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>K0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ra(r,!1).getAll();return new fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jp.type="LOCAL";const G0=Jp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Y0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Q0().appendChild(s)})}function X0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t,e){return e?en(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends Ol{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Z0(t){return Hp(t.auth,new Ll(t),t.bypassAuthState)}function eb(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),I0(n,new Ll(t),t.bypassAuthState)}async function tb(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),b0(n,new Ll(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z0;case"linkViaPopup":case"linkViaRedirect":return tb;case"reauthViaPopup":case"reauthViaRedirect":return eb;default:Nt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new ai(2e3,1e4);class Rs extends Zp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,nb.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="pendingRedirect",to=new Map;class rb extends Zp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const s=await ib(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ib(t,e){const n=cb(e),s=ab(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function ob(t,e){to.set(t._key(),e)}function ab(t){return en(t._redirectPersistence)}function cb(t){return eo(sb,t.config.apiKey,t.name)}async function lb(t,e,n=!1){const s=ui(t),r=J0(s,e),o=await new rb(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=10*60*1e3;class hb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!eg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ub&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kh(e))}saveEventToCache(e){this.cachedEventUids.add(Kh(e)),this.lastProcessedEventTime=Date.now()}}function Kh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gb=/^https?/;async function mb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await db(t);for(const n of e)try{if(yb(n))return}catch{}Nt(t,"unauthorized-domain")}function yb(t){const e=Rc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gb.test(n))return!1;if(pb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new ai(3e4,6e4);function zh(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wb(t){return new Promise((e,n)=>{var s,r,i;function o(){zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zh(),n(qt(t,"network-request-failed"))},timeout:vb.get()})}if(!((r=(s=jt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)o();else{const a=X0("iframefcb");return jt()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},Y0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw no=null,e})}let no=null;function _b(t){return no=no||wb(t),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=new ai(5e3,15e3),bb="__/auth/iframe",Ib="emulator/auth/iframe",Tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cb(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xl(e,Ib):`https://${t.config.authDomain}/${bb}`,s={apiKey:e.apiKey,appName:t.name,v:oi},r=Sb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ii(s).slice(1)}`}async function Ab(t){const e=await _b(t),n=jt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Cb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=jt().setTimeout(()=>{i(o)},Eb.get());function c(){jt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rb=500,xb=600,Db="_blank",Nb="http://localhost";class Wh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ob(t,e,n,s=Rb,r=xb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kb),{width:s.toString(),height:r.toString(),top:i,left:o}),l=rt().toLowerCase();n&&(a=Pp(l)?Db:n),Op(l)&&(e=e||Nb,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(o0(l)&&a!=="_self")return Pb(e||"",a),new Wh(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new Wh(h)}function Pb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb="__/auth/handler",Lb="emulator/auth/handler";function Gh(t,e,n,s,r,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:oi,eventId:r};if(e instanceof qp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",D_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof hi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Ub(t)}?${ii(a).slice(1)}`}function Ub({config:t}){return t.emulator?xl(t,Lb):`https://${t.authDomain}/${Mb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="webStorageSupport";class Fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gp,this._completeRedirectFn=lb,this._overrideRedirectResult=ob}async _openPopup(e,n,s,r){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Gh(e,n,s,Rc(),r);return Ob(e,o,Ml())}async _openRedirect(e,n,s,r){return await this._originValidation(e),$0(Gh(e,n,s,Rc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(an(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Ab(e),s=new hb(e);return n.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xa,{type:Xa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Xa];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $p()||Nl()||na()}}const $b=Fb;var Qh="@firebase/auth",Yh="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qb(t){qs(new ds("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vp(t)},u=new u0(a,c,l);return jE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qs(new ds("auth-internal",e=>{const n=ui(e.getProvider("auth").getImmediate());return(s=>new Vb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Qh,Yh,Bb(t)),Dn(Qh,Yh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=5*60,Hb=wp("authIdTokenMaxAge")||jb;let Xh=null;const Kb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Hb)return;const r=n==null?void 0:n.token;Xh!==r&&(Xh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function jr(t=Ip()){const e=Al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qE(t,{popupRedirectResolver:$b,persistence:[G0,L0,Gp]}),s=wp("authTokenSyncURL");if(s){const i=Kb(s);x0(n,i,()=>i(n.currentUser)),R0(n,o=>i(o))}const r=vp("auth");return r&&h0(n,`http://${r}`),n}qb("Browser");/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Cs=typeof window<"u";function zb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Ja(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ot(r)?r.map(t):t(r)}return n}const Sr=()=>{},Ot=Array.isArray,Wb=/\/$/,Gb=t=>t.replace(Wb,"");function Za(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Jb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Qb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Yb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Hs(e.matched[s],n.matched[r])&&tg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Xb(t[n],e[n]))return!1;return!0}function Xb(t,e){return Ot(t)?Zh(t,e):Ot(e)?Zh(e,t):t===e}function Zh(t,e){return Ot(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Jb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Hr;(function(t){t.pop="pop",t.push="push"})(Hr||(Hr={}));var Cr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Cr||(Cr={}));function Zb(t){if(!t)if(Cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gb(t)}const eI=/^[^#]+#/;function tI(t,e){return t.replace(eI,"#")+e}function nI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ia=()=>({left:window.pageXOffset,top:window.pageYOffset});function sI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=nI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ef(t,e){return(history.state?history.state.position-e:-1)+t}const Dc=new Map;function rI(t,e){Dc.set(t,e)}function iI(t){const e=Dc.get(t);return Dc.delete(t),e}let oI=()=>location.protocol+"//"+location.host;function ng(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Jh(c,"")}return Jh(n,t)+s+r}function aI(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=ng(t,location),m=n.value,v=e.value;let C=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}C=v?f.position-v.position:0}else s(g);r.forEach(A=>{A(n.value,m,{delta:C,type:Hr.pop,direction:C?C>0?Cr.forward:Cr.back:Cr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ye({},f.state,{scroll:ia()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function tf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ia():null}}function cI(t){const{history:e,location:n}=window,s={value:ng(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:oI()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ye({},e.state,tf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ye({},r.value,e.state,{forward:c,scroll:ia()});i(u.current,u,!0);const h=ye({},tf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function lI(t){t=Zb(t);const e=cI(t),n=aI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ye({location:"",base:t,go:s,createHref:tI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function uI(t){return typeof t=="string"||t&&typeof t=="object"}function sg(t){return typeof t=="string"||typeof t=="symbol"}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rg=Symbol("");var nf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nf||(nf={}));function Ks(t,e){return ye(new Error,{type:t,[rg]:!0},e)}function Yt(t,e){return t instanceof Error&&rg in t&&(e==null||!!(t.type&e))}const sf="[^/]+?",hI={sensitive:!1,strict:!1,start:!0,end:!0},fI=/[.+*?^${}()[\]/\\]/g;function dI(t,e){const n=ye({},hI,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(fI,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:v,optional:C,regexp:A}=f;i.push({name:m,repeatable:v,optional:C});const N=A||sf;if(N!==sf){g+=10;try{new RegExp(`(${N})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+W.message)}}let P=v?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(P=C&&l.length<2?`(?:/${P})`:"/"+P),C&&(P+="?"),r+=P,g+=20,C&&(g+=-8),v&&(g+=-20),N===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:v,optional:C}=g,A=m in l?l[m]:"";if(Ot(A)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=Ot(A)?A.join("/"):A;if(!N)if(C)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function pI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gI(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=pI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(rf(s))return 1;if(rf(r))return-1}return r.length-s.length}function rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mI={type:0,value:""},yI=/[a-zA-Z0-9_]/;function vI(t){if(!t)return[[]];if(t==="/")return[[mI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:yI.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function wI(t,e,n){const s=dI(vI(t.path),n),r=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function _I(t,e){const n=[],s=new Map;e=cf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,m=EI(u);m.aliasOf=f&&f.record;const v=cf(e,u),C=[m];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of P)C.push(ye({},m,{components:f?f.record.components:m.components,path:W,aliasOf:f?f.record:m}))}let A,N;for(const P of C){const{path:W}=P;if(h&&W[0]!=="/"){const ce=h.record.path,Ee=ce[ce.length-1]==="/"?"":"/";P.path=h.record.path+(W&&Ee+W)}if(A=wI(P,h,v),f?f.alias.push(A):(N=N||A,N!==A&&N.alias.push(A),g&&u.name&&!af(A)&&o(u.name)),m.children){const ce=m.children;for(let Ee=0;Ee<ce.length;Ee++)i(ce[Ee],A,f&&f.children[Ee])}f=f||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return N?()=>{o(N)}:Sr}function o(u){if(sg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&gI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ig(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!af(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},m,v;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ks(1,{location:u});v=f.record.name,g=ye(of(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&of(u.params,f.keys.map(N=>N.name))),m=f.stringify(g)}else if("path"in u)m=u.path,f=n.find(N=>N.re.test(m)),f&&(g=f.parse(m),v=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw Ks(1,{location:u,currentLocation:h});v=f.record.name,g=ye({},h.params,u.params),m=f.stringify(g)}const C=[];let A=f;for(;A;)C.unshift(A.record),A=A.parent;return{name:v,path:m,params:g,matched:C,meta:II(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function of(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function EI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function af(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function II(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function cf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ig(t,e){return e.children.some(n=>n===t||ig(t,n))}const og=/#/g,TI=/&/g,SI=/\//g,CI=/=/g,AI=/\?/g,ag=/\+/g,kI=/%5B/g,RI=/%5D/g,cg=/%5E/g,xI=/%60/g,lg=/%7B/g,DI=/%7C/g,ug=/%7D/g,NI=/%20/g;function Ul(t){return encodeURI(""+t).replace(DI,"|").replace(kI,"[").replace(RI,"]")}function OI(t){return Ul(t).replace(lg,"{").replace(ug,"}").replace(cg,"^")}function Nc(t){return Ul(t).replace(ag,"%2B").replace(NI,"+").replace(og,"%23").replace(TI,"%26").replace(xI,"`").replace(lg,"{").replace(ug,"}").replace(cg,"^")}function PI(t){return Nc(t).replace(CI,"%3D")}function MI(t){return Ul(t).replace(og,"%23").replace(AI,"%3F")}function LI(t){return t==null?"":MI(t).replace(SI,"%2F")}function Eo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function UI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ag," "),o=i.indexOf("="),a=Eo(o<0?i:i.slice(0,o)),c=o<0?null:Eo(i.slice(o+1));if(a in e){let l=e[a];Ot(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function lf(t){let e="";for(let n in t){const s=t[n];if(n=PI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(s)?s.map(i=>i&&Nc(i)):[s&&Nc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function FI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ot(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const $I=Symbol(""),uf=Symbol(""),oa=Symbol(""),Fl=Symbol(""),Oc=Symbol("");function dr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function En(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ks(4,{from:n,to:e})):h instanceof Error?a(h):uI(h)?a(Ks(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ec(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(VI(a)){const l=(a.__vccOpts||a)[e];l&&r.push(En(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=zb(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&En(f,n,s,i,o)()}))}}return r}function VI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hf(t){const e=Rt(oa),n=Rt(Fl),s=ft(()=>e.resolve(Bt(t.to))),r=ft(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Hs.bind(null,u));if(f>-1)return f;const g=ff(c[l-2]);return l>1&&ff(u)===g&&h[h.length-1].path!==g?h.findIndex(Hs.bind(null,c[l-2])):f}),i=ft(()=>r.value>-1&&HI(n.params,s.value.params)),o=ft(()=>r.value>-1&&r.value===n.matched.length-1&&tg(n.params,s.value.params));function a(c={}){return jI(c)?e[Bt(t.replace)?"replace":"push"](Bt(t.to)).catch(Sr):Promise.resolve()}return{route:s,href:ft(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const BI=qd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hf,setup(t,{slots:e}){const n=si(hf(t)),{options:s}=Rt(oa),r=ft(()=>({[df(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[df(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Il("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),qI=BI;function jI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function HI(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ot(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ff(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const df=(t,e,n)=>t??e??n,KI=qd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Rt(Oc),r=ft(()=>t.route||s.value),i=Rt(uf,0),o=ft(()=>{let l=Bt(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ft(()=>r.value.matched[o.value]);Qi(uf,ft(()=>o.value+1)),Qi($I,a),Qi(Oc,r);const c=le();return Er(()=>[c.value,a.value,t.name],([l,u,h],[f,g,m])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Hs(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return pf(n.default,{Component:f,route:l});const g=h.props[u],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,C=Il(f,ye({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return pf(n.default,{Component:C,route:l})||C}}});function pf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zI=KI;function WI(t){const e=_I(t.routes,t),n=t.parseQuery||UI,s=t.stringifyQuery||lf,r=t.history,i=dr(),o=dr(),a=dr(),c=Iv(yn);let l=yn;Cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ja.bind(null,E=>""+E),h=Ja.bind(null,LI),f=Ja.bind(null,Eo);function g(E,M){let D,j;return sg(E)?(D=e.getRecordMatcher(E),j=M):j=E,e.addRoute(j,D)}function m(E){const M=e.getRecordMatcher(E);M&&e.removeRoute(M)}function v(){return e.getRoutes().map(E=>E.record)}function C(E){return!!e.getRecordMatcher(E)}function A(E,M){if(M=ye({},M||c.value),typeof E=="string"){const d=Za(n,E,M.path),p=e.resolve({path:d.path},M),y=r.createHref(d.fullPath);return ye(d,p,{params:f(p.params),hash:Eo(d.hash),redirectedFrom:void 0,href:y})}let D;if("path"in E)D=ye({},E,{path:Za(n,E.path,M.path).path});else{const d=ye({},E.params);for(const p in d)d[p]==null&&delete d[p];D=ye({},E,{params:h(E.params)}),M.params=h(M.params)}const j=e.resolve(D,M),he=E.hash||"";j.params=u(f(j.params));const Ne=Qb(s,ye({},E,{hash:OI(he),path:j.path})),ie=r.createHref(Ne);return ye({fullPath:Ne,hash:he,query:s===lf?FI(E.query):E.query||{}},j,{redirectedFrom:void 0,href:ie})}function N(E){return typeof E=="string"?Za(n,E,c.value.path):ye({},E)}function P(E,M){if(l!==E)return Ks(8,{from:M,to:E})}function W(E){return re(E)}function ce(E){return W(ye(N(E),{replace:!0}))}function Ee(E){const M=E.matched[E.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let j=typeof D=="function"?D(E):D;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=N(j):{path:j},j.params={}),ye({query:E.query,hash:E.hash,params:"path"in j?{}:E.params},j)}}function re(E,M){const D=l=A(E),j=c.value,he=E.state,Ne=E.force,ie=E.replace===!0,d=Ee(D);if(d)return re(ye(N(d),{state:typeof d=="object"?ye({},he,d.state):he,force:Ne,replace:ie}),M||D);const p=D;p.redirectedFrom=M;let y;return!Ne&&Yb(s,j,D)&&(y=Ks(16,{to:p,from:j}),jn(j,j,!0,!1)),(y?Promise.resolve(y):Q(p,j)).catch(w=>Yt(w)?Yt(w,2)?w:It(w):Te(w,p,j)).then(w=>{if(w){if(Yt(w,2))return re(ye({replace:ie},N(w.to),{state:typeof w.to=="object"?ye({},he,w.to.state):he,force:Ne}),M||p)}else w=be(p,j,!0,ie,he);return se(p,j,w),w})}function L(E,M){const D=P(E,M);return D?Promise.reject(D):Promise.resolve()}function Q(E,M){let D;const[j,he,Ne]=GI(E,M);D=ec(j.reverse(),"beforeRouteLeave",E,M);for(const d of j)d.leaveGuards.forEach(p=>{D.push(En(p,E,M))});const ie=L.bind(null,E,M);return D.push(ie),Ss(D).then(()=>{D=[];for(const d of i.list())D.push(En(d,E,M));return D.push(ie),Ss(D)}).then(()=>{D=ec(he,"beforeRouteUpdate",E,M);for(const d of he)d.updateGuards.forEach(p=>{D.push(En(p,E,M))});return D.push(ie),Ss(D)}).then(()=>{D=[];for(const d of E.matched)if(d.beforeEnter&&!M.matched.includes(d))if(Ot(d.beforeEnter))for(const p of d.beforeEnter)D.push(En(p,E,M));else D.push(En(d.beforeEnter,E,M));return D.push(ie),Ss(D)}).then(()=>(E.matched.forEach(d=>d.enterCallbacks={}),D=ec(Ne,"beforeRouteEnter",E,M),D.push(ie),Ss(D))).then(()=>{D=[];for(const d of o.list())D.push(En(d,E,M));return D.push(ie),Ss(D)}).catch(d=>Yt(d,8)?d:Promise.reject(d))}function se(E,M,D){for(const j of a.list())j(E,M,D)}function be(E,M,D,j,he){const Ne=P(E,M);if(Ne)return Ne;const ie=M===yn,d=Cs?history.state:{};D&&(j||ie?r.replace(E.fullPath,ye({scroll:ie&&d&&d.scroll},he)):r.push(E.fullPath,he)),c.value=E,jn(E,M,D,ie),It()}let U;function Z(){U||(U=r.listen((E,M,D)=>{if(!Di.listening)return;const j=A(E),he=Ee(j);if(he){re(ye(he,{replace:!0}),j).catch(Sr);return}l=j;const Ne=c.value;Cs&&rI(ef(Ne.fullPath,D.delta),ia()),Q(j,Ne).catch(ie=>Yt(ie,12)?ie:Yt(ie,2)?(re(ie.to,j).then(d=>{Yt(d,20)&&!D.delta&&D.type===Hr.pop&&r.go(-1,!1)}).catch(Sr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),Te(ie,j,Ne))).then(ie=>{ie=ie||be(j,Ne,!1),ie&&(D.delta&&!Yt(ie,8)?r.go(-D.delta,!1):D.type===Hr.pop&&Yt(ie,20)&&r.go(-1,!1)),se(j,Ne,ie)}).catch(Sr)}))}let xe=dr(),dn=dr(),De;function Te(E,M,D){It(E);const j=dn.list();return j.length?j.forEach(he=>he(E,M,D)):console.error(E),Promise.reject(E)}function ve(){return De&&c.value!==yn?Promise.resolve():new Promise((E,M)=>{xe.add([E,M])})}function It(E){return De||(De=!E,Z(),xe.list().forEach(([M,D])=>E?D(E):M()),xe.reset()),E}function jn(E,M,D,j){const{scrollBehavior:he}=t;if(!Cs||!he)return Promise.resolve();const Ne=!D&&iI(ef(E.fullPath,0))||(j||!D)&&history.state&&history.state.scroll||null;return Nd().then(()=>he(E,M,Ne)).then(ie=>ie&&sI(ie)).catch(ie=>Te(ie,E,M))}const Tt=E=>r.go(E);let ut;const Is=new Set,Di={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:C,getRoutes:v,resolve:A,options:t,push:W,replace:ce,go:Tt,back:()=>Tt(-1),forward:()=>Tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:dn.add,isReady:ve,install(E){const M=this;E.component("RouterLink",qI),E.component("RouterView",zI),E.config.globalProperties.$router=M,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(c)}),Cs&&!ut&&c.value===yn&&(ut=!0,W(r.location).catch(he=>{}));const D={};for(const he in yn)D[he]=ft(()=>c.value[he]);E.provide(oa,M),E.provide(Fl,si(D)),E.provide(Oc,c);const j=E.unmount;Is.add(E),E.unmount=function(){Is.delete(E),Is.size<1&&(l=yn,U&&U(),U=null,c.value=yn,ut=!1,De=!1),j()}}};return Di}function Ss(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function GI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Hs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Hs(l,c))||r.push(c))}return[n,s,r]}function $l(){return Rt(oa)}function QI(){return Rt(Fl)}const YI="https://tarasishe.github.io/Vue-movie/assets/6c6291ce-70d5-11ed-88ef-1ac952ccf1b8-98c29516.avif";const _s=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},XI={class:"relative block w-full overflow-hidden"},JI=["src"],ZI={class:"absolute py-2 px-4 bg-green text-white bottom-0 left-0 uppercase"},eT={class:"w-full bg-moviecardbg py-4 px-2"},tT={class:"year"},nT={__name:"MovieCard",props:{poster:String,type:String,year:String,title:String,id:String},setup(t){return(e,n)=>{const s=fs("router-link");return de(),on(s,{to:`/movie/${t.id}`,class:"sm:w-3/5 xs:w-3/5"},{default:Dt(()=>[F("div",XI,[F("img",{class:"img",src:t.poster,alt:"Movie Poster"},null,8,JI),F("div",ZI,gt(t.type),1)]),F("div",eT,[F("p",tT,gt(t.year),1),F("h3",null,gt(t.title),1)])]),_:1},8,["to"])}}},sT=_s(nT,[["__scopeId","data-v-e13e4cad"]]);const rT=t=>(Go("data-v-9dfb6c81"),t=t(),Qo(),t),iT={class:"container pt-16 px-4"},oT=ww('<h1 class="text-center p-4 font-semibold text-white text-2xl" data-v-9dfb6c81><span class="text-green" data-v-9dfb6c81>VUE</span>Movie </h1><div data-v-9dfb6c81><div class="relative" data-v-9dfb6c81><img class="block w-full h-[500px] relative z-0 xs:h-72" src="'+YI+'" data-v-9dfb6c81><div class="absolute right-0 bottom-0 left-0 text-white p-4 transp" data-v-9dfb6c81><h3 class="uppercase font-bold text-2xl pb-2xs:text-xl" data-v-9dfb6c81> Find Movie You want </h3><p class="xs:text-xs" data-v-9dfb6c81> It is a <span class="text-green" data-v-9dfb6c81>VUE</span>Movie site to find film, series, cartoons and whatever you want. You can search it and find out about plot, rating of film and other usefull information you need. Don`t waste your time and go for the SEARCH. </p></div></div></div>',2),aT={class:"flex items-center md:flex-col"},cT=rT(()=>F("button",{class:"searchbtn w-full max-w-xs bg-green p-4 rounded-lg text-white text-xl uppercase duration-300 active:bg-darkgreen mt-2 md:max-w-sm md:w-64"}," Searchasfasfas ",-1)),lT={key:0,class:"text-white ml-5 md:mt-6 md:ml-0"},uT={key:0,class:"text-[red] text-2xl pt-4"},hT={class:"mt-10 flex flex-wrap md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-center xs:flex-col xs:items-center xs:justify-center"},fT={__name:"Home",setup(t){const e=le(""),n=le([]),s=le(!1),r=le(!1),i=async()=>{r.value=!0;try{if(e.value!==""){const a=await(await fetch(`https://www.omdbapi.com/?apikey=8d3d593&s=${e.value}`)).json();a.Search?(n.value=a.Search,s.value=!1):s.value=!0}}catch(o){alert(o),s.value=!0}finally{e.value="",r.value=!1}};return(o,a)=>(de(),Oe("div",iT,[oT,F("form",{class:"flex flex-col pt-10 md:flex-col md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-center xs:flex-col xs:items-center xs:justify-center",onSubmit:a[1]||(a[1]=pp(c=>i(),["prevent"]))},[kn(F("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),class:"maininp",type:"text",placeholder:"What are you looking for?"},null,512),[[as,e.value]]),F("div",aT,[cT,r.value?(de(),Oe("p",lT," Finding films... ")):ct("",!0)]),s.value?(de(),Oe("p",uT," Nothing found ")):ct("",!0)],32),F("div",hT,[(de(!0),Oe(at,null,Gd(n.value,c=>(de(),on(sT,{id:c.imdbID,key:c.imdbID,poster:c.Poster,type:c.Type,year:c.Year,title:c.Title,class:"w-[30%] h-full my-4 mx-4"},null,8,["id","poster","type","year","title"]))),128))])]))}},dT=_s(fT,[["__scopeId","data-v-9dfb6c81"]]),pT={class:"container pt-40 px-4 xs:pt-20"},gT={class:"flex items-center justify-center w-full h-full gap-5 xs:flex-col"},mT=["src"],yT={class:"text-white text-left xs:text-center"},vT={class:"text-3xl py-2"},wT={class:"py-1"},_T={class:"py-1"},ET={class:"py-1"},bT={class:"py-2 text-2xl sm:text-xl xs:text-base"},IT={__name:"MovieDetail",setup(t){const e=le({}),n=QI();return(async()=>{try{const i=await(await fetch(`https://www.omdbapi.com/?apikey=8d3d593&i=${n.params.id}&plot=full`)).json();e.value=i}catch(r){alert(`Error:${r}`)}})(),(r,i)=>(de(),Oe("div",pT,[F("div",gT,[F("img",{src:e.value.Poster,alt:"Movie Poster",class:"block m-auto py-2"},null,8,mT),F("div",yT,[F("h2",vT,gt(e.value.Title),1),F("p",wT,gt(e.value.Genre),1),F("p",_T,gt(e.value.Released),1),F("p",ET," imdbRating: "+gt(e.value.imdbRating),1),F("p",bT,gt(e.value.Plot),1)])])]))}},hg="https://tarasishe.github.io/Vue-movie/assets/spinner-svgrepo-com-1461a1cc.svg";const TT={},ST={class:"spinner",src:hg,alt:""};function CT(t,e){return de(),Oe("img",ST)}const AT=_s(TT,[["render",CT],["__scopeId","data-v-f6406b7a"]]);var kT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Vl=Vl||{},X=kT||self;function bo(){}function aa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function di(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function RT(t){return Object.prototype.hasOwnProperty.call(t,tc)&&t[tc]||(t[tc]=++xT)}var tc="closure_uid_"+(1e9*Math.random()>>>0),xT=0;function DT(t,e,n){return t.call.apply(t.bind,arguments)}function NT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=DT:nt=NT,nt.apply(null,arguments)}function $i(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Fn(){this.s=this.s,this.o=this.o}var OT=0;Fn.prototype.s=!1;Fn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),OT!=0)&&RT(this)};Fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function gf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(aa(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var PT=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",bo,e),X.removeEventListener("test",bo,e)}catch{}return t}();function Io(t){return/^[\s\xa0]*$/.test(t)}var mf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function nc(t,e){return t<e?-1:t>e?1:0}function ca(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Vt(t){return ca().indexOf(t)!=-1}function ql(t){return ql[" "](t),t}ql[" "]=bo;function MT(t){var e=FT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var LT=Vt("Opera"),zs=Vt("Trident")||Vt("MSIE"),dg=Vt("Edge"),Pc=dg||zs,pg=Vt("Gecko")&&!(ca().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge"))&&!(Vt("Trident")||Vt("MSIE"))&&!Vt("Edge"),UT=ca().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge");function gg(){var t=X.document;return t?t.documentMode:void 0}var To;e:{var sc="",rc=function(){var t=ca();if(pg)return/rv:([^\);]+)(\)|;)/.exec(t);if(dg)return/Edge\/([\d\.]+)/.exec(t);if(zs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(UT)return/WebKit\/(\S+)/.exec(t);if(LT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rc&&(sc=rc?rc[1]:""),zs){var ic=gg();if(ic!=null&&ic>parseFloat(sc)){To=String(ic);break e}}To=sc}var FT={};function $T(){return MT(function(){let t=0;const e=mf(String(To)).split("."),n=mf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=nc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||nc(r[2].length==0,i[2].length==0)||nc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Mc;if(X.document&&zs){var yf=gg();Mc=yf||parseInt(To,10)||void 0}else Mc=void 0;var VT=Mc;function Kr(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pg){e:{try{ql(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:BT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Kr.X.h.call(this)}}Ye(Kr,st);var BT={2:"touch",3:"pen",4:"mouse"};Kr.prototype.h=function(){Kr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pi="closure_listenable_"+(1e6*Math.random()|0),qT=0;function jT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++qT,this.ba=this.ea=!1}function la(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function mg(t){const e={};for(const n in t)e[n]=t[n];return e}const vf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<vf.length;i++)n=vf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ua(t){this.src=t,this.g={},this.h=0}ua.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Uc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new jT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Lc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=fg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(la(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Uc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Hl="closure_lm_"+(1e6*Math.random()|0),oc={};function vg(t,e,n,s,r){if(s&&s.once)return _g(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)vg(t,e[i],n,s,r);return null}return n=Wl(n),t&&t[pi]?t.N(e,n,di(s)?!!s.capture:!!s,r):wg(t,e,n,!1,s,r)}function wg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=di(r)?!!r.capture:!!r,a=zl(t);if(a||(t[Hl]=a=new ua(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=HT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)PT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(bg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function HT(){function t(n){return e.call(t.src,t.listener,n)}const e=KT;return t}function _g(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_g(t,e[i],n,s,r);return null}return n=Wl(n),t&&t[pi]?t.O(e,n,di(s)?!!s.capture:!!s,r):wg(t,e,n,!0,s,r)}function Eg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Eg(t,e[i],n,s,r);else s=di(s)?!!s.capture:!!s,n=Wl(n),t&&t[pi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Uc(i,n,s,r),-1<n&&(la(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Uc(e,n,s,r)),(n=-1<t?e[t]:null)&&Kl(n))}function Kl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[pi])Lc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(bg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=zl(e))?(Lc(n,t),n.h==0&&(n.src=null,e[Hl]=null)):la(t)}}}function bg(t){return t in oc?oc[t]:oc[t]="on"+t}function KT(t,e){if(t.ba)t=!0;else{e=new Kr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Kl(t),t=n.call(s,e)}return t}function zl(t){return t=t[Hl],t instanceof ua?t:null}var ac="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wl(t){return typeof t=="function"?t:(t[ac]||(t[ac]=function(e){return t.handleEvent(e)}),t[ac])}function We(){Fn.call(this),this.i=new ua(this),this.P=this,this.I=null}Ye(We,Fn);We.prototype[pi]=!0;We.prototype.removeEventListener=function(t,e,n,s){Eg(this,t,e,n,s)};function Qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var r=e;e=new st(s,t),yg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Vi(o,s,!0,e)&&r}if(o=e.g=t,r=Vi(o,s,!0,e)&&r,r=Vi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Vi(o,s,!1,e)&&r}We.prototype.M=function(){if(We.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)la(n[s]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};We.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Vi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Lc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Gl=X.JSON.stringify;function zT(){var t=Sg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class WT{constructor(){this.h=this.g=null}add(e,n){const s=Ig.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ig=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new GT,t=>t.reset());class GT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QT(t){X.setTimeout(()=>{throw t},0)}function Tg(t,e){Fc||YT(),$c||(Fc(),$c=!0),Sg.add(t,e)}var Fc;function YT(){var t=X.Promise.resolve(void 0);Fc=function(){t.then(XT)}}var $c=!1,Sg=new WT;function XT(){for(var t;t=zT();){try{t.h.call(t.g)}catch(n){QT(n)}var e=Ig;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$c=!1}function ha(t,e){We.call(this),this.h=t||1,this.g=e||X,this.j=nt(this.lb,this),this.l=Date.now()}Ye(ha,We);V=ha.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Qe(this,"tick"),this.ca&&(Ql(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ql(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){ha.X.M.call(this),Ql(this),delete this.g};function Yl(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Cg(t){t.g=Yl(()=>{t.g=null,t.i&&(t.i=!1,Cg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JT extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cg(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(t){Fn.call(this),this.h=t,this.g={}}Ye(zr,Fn);var wf=[];function Ag(t,e,n,s){Array.isArray(n)||(n&&(wf[0]=n.toString()),n=wf);for(var r=0;r<n.length;r++){var i=vg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function kg(t){jl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kl(e)},t),t.g={}}zr.prototype.M=function(){zr.X.M.call(this),kg(this)};zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fa(){this.g=!0}fa.prototype.Aa=function(){this.g=!1};function ZT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function eS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function xs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nS(t,n)+(s?" "+s:"")})}function tS(t,e){t.info(function(){return"TIMEOUT: "+e})}fa.prototype.info=function(){};function nS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Gl(n)}catch{return e}}var Es={},_f=null;function da(){return _f=_f||new We}Es.Pa="serverreachability";function Rg(t){st.call(this,Es.Pa,t)}Ye(Rg,st);function Wr(t){const e=da();Qe(e,new Rg(e))}Es.STAT_EVENT="statevent";function xg(t,e){st.call(this,Es.STAT_EVENT,t),this.stat=e}Ye(xg,st);function lt(t){const e=da();Qe(e,new xg(e,t))}Es.Qa="timingevent";function Dg(t,e){st.call(this,Es.Qa,t),this.size=e}Ye(Dg,st);function gi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var pa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ng={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xl(){}Xl.prototype.h=null;function Ef(t){return t.h||(t.h=t.i())}function Og(){}var mi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Jl(){st.call(this,"d")}Ye(Jl,st);function Zl(){st.call(this,"c")}Ye(Zl,st);var Vc;function ga(){}Ye(ga,Xl);ga.prototype.g=function(){return new XMLHttpRequest};ga.prototype.i=function(){return{}};Vc=new ga;function yi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new zr(this),this.O=sS,t=Pc?125:void 0,this.T=new ha(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Pg}function Pg(){this.i=null,this.g="",this.h=!1}var sS=45e3,Bc={},So={};V=yi.prototype;V.setTimeout=function(t){this.O=t};function qc(t,e,n){t.K=1,t.v=ya(cn(e)),t.s=n,t.P=!0,Mg(t,null)}function Mg(t,e){t.F=Date.now(),vi(t),t.A=cn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),jg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Pg,t.g=um(t.l,n?e:null,!t.s),0<t.N&&(t.L=new JT(nt(t.La,t,t.g),t.N)),Ag(t.S,t.g,"readystatechange",t.ib),e=t.H?mg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Wr(),ZT(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&tn(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=tn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Pc||this.g&&(this.h.h||this.g.fa()||Sf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Wr(3):Wr(2)),ma(this);var n=this.g.aa();this.Y=n;t:if(Lg(this)){var s=Sf(this.g);t="";var r=s.length,i=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ns(this),Ar(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,eS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Io(a)){var l=a;break t}}l=null}if(n=l)xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jc(this,n);else{this.i=!1,this.o=3,lt(12),ns(this),Ar(this);break e}}this.P?(Ug(this,u,o),Pc&&this.i&&u==3&&(Ag(this.S,this.T,"tick",this.hb),this.T.start())):(xs(this.j,this.m,o,null),jc(this,o)),u==4&&ns(this),this.i&&!this.I&&(u==4?om(this.l,this):(this.i=!1,vi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),ns(this),Ar(this)}}}catch{}finally{}};function Lg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ug(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=rS(t,n),r==So){e==4&&(t.o=4,lt(14),s=!1),xs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Bc){t.o=4,lt(15),xs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else xs(t.j,t.m,r,null),jc(t,r);Lg(t)&&r!=So&&r!=Bc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ou(e),e.K=!0,lt(11))):(xs(t.j,t.m,n,"[Invalid Chunked Response]"),ns(t),Ar(t))}V.hb=function(){if(this.g){var t=tn(this.g),e=this.g.fa();this.C<e.length&&(ma(this),Ug(this,t,e),this.i&&t!=4&&vi(this))}};function rS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?So:(n=Number(e.substring(n,s)),isNaN(n)?Bc:(s+=1,s+n>e.length?So:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,ns(this)};function vi(t){t.V=Date.now()+t.O,Fg(t,t.O)}function Fg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=gi(nt(t.gb,t),e)}function ma(t){t.B&&(X.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(tS(this.j,this.A),this.K!=2&&(Wr(),lt(17)),ns(this),this.o=2,Ar(this)):Fg(this,this.V-t)};function Ar(t){t.l.G==0||t.I||om(t.l,t)}function ns(t){ma(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ql(t.T),kg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function jc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hc(n.h,t))){if(!t.J&&Hc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ko(n),_a(n);else break e;iu(n),lt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=gi(nt(n.cb,n),6e3));if(1>=zg(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ss(n,11)}else if((t.J||n.g==t)&&ko(n),!Io(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(eu(i,i.h),i.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Re(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=lm(s,s.H?s.ka:null,s.V),o.J){Wg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ma(a),vi(a)),s.g=o}else rm(s);0<n.i.length&&Ea(n)}else l[0]!="stop"&&l[0]!="close"||ss(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ss(n,7):ru(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Wr(4)}catch{}}function iS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(aa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function oS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(aa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function $g(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(aa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oS(t),s=iS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ls(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ls){this.h=e!==void 0?e:t.h,Co(this,t.j),this.s=t.s,this.g=t.g,Ao(this,t.m),this.l=t.l,e=t.i;var n=new Gr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bf(this,n),this.o=t.o}else t&&(n=String(t).match(Vg))?(this.h=!!e,Co(this,n[1]||"",!0),this.s=vr(n[2]||""),this.g=vr(n[3]||"",!0),Ao(this,n[4]),this.l=vr(n[5]||"",!0),bf(this,n[6]||"",!0),this.o=vr(n[7]||"")):(this.h=!!e,this.i=new Gr(null,this.h))}ls.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wr(e,If,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wr(e,If,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wr(n,n.charAt(0)=="/"?uS:lS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wr(n,fS)),t.join("")};function cn(t){return new ls(t)}function Co(t,e,n){t.j=n?vr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ao(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bf(t,e,n){e instanceof Gr?(t.i=e,dS(t.i,t.h)):(n||(e=wr(e,hS)),t.i=new Gr(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function ya(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function vr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var If=/[#\/\?@]/g,lS=/[#\?:]/g,uS=/[#\?]/g,hS=/[#\?@]/g,fS=/#/g;function Gr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $n(t){t.g||(t.g=new Map,t.h=0,t.i&&aS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Gr.prototype;V.add=function(t,e){$n(this),this.i=null,t=or(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Bg(t,e){$n(t),e=or(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qg(t,e){return $n(t),e=or(t,e),t.g.has(e)}V.forEach=function(t,e){$n(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};V.oa=function(){$n(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};V.W=function(t){$n(this);let e=[];if(typeof t=="string")qg(this,t)&&(e=e.concat(this.g.get(or(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return $n(this),this.i=null,t=or(this,t),qg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function jg(t,e,n){Bg(t,e),0<n.length&&(t.i=null,t.g.set(or(t,e),Bl(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function or(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dS(t,e){e&&!t.j&&($n(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Bg(this,s),jg(this,r,n))},t)),t.j=e}var pS=class{constructor(e,n){this.h=e,this.g=n}};function Hg(t){this.l=t||gS,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gS=10;function Kg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zg(t){return t.h?1:t.g?t.g.size:0}function Hc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function eu(t,e){t.g?t.g.add(e):t.h=e}function Wg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Hg.prototype.cancel=function(){if(this.i=Gg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bl(t.i)}function tu(){}tu.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};tu.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function mS(){this.g=new tu}function yS(t,e,n){const s=n||"";try{$g(t,function(r,i){let o=r;di(r)&&(o=Gl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function vS(t,e){const n=new fa;if(X.Image){const s=new Image;s.onload=$i(Bi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=$i(Bi,n,s,"TestLoadImage: error",!1,e),s.onabort=$i(Bi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=$i(Bi,n,s,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Bi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function wi(t){this.l=t.ac||null,this.j=t.jb||!1}Ye(wi,Xl);wi.prototype.g=function(){return new va(this.l,this.j)};wi.prototype.i=function(t){return function(){return t}}({});function va(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=nu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(va,We);var nu=0;V=va.prototype;V.open=function(t,e){if(this.readyState!=nu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qr(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=nu};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Qg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_i(this):Qr(this),this.readyState==3&&Qg(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,_i(this))};V.Ua=function(t){this.g&&(this.response=t,_i(this))};V.ga=function(){this.g&&_i(this)};function _i(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qr(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wS=X.JSON.parse;function Pe(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yg,this.K=this.L=!1}Ye(Pe,We);var Yg="",_S=/^https?$/i,ES=["POST","PUT"];V=Pe.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vc.g(),this.C=this.u?Ef(this.u):Ef(Vc),this.g.onreadystatechange=nt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Tf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=X.FormData&&t instanceof X.FormData,!(0<=fg(ES,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zg(this),0<this.B&&((this.K=bS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.qa,this)):this.A=Yl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Tf(this,i)}};function bS(t){return zs&&$T()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof Vl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Tf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xg(t),wa(t)}function Xg(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),wa(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wa(this,!0)),Pe.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?Jg(this):this.fb())};V.fb=function(){Jg(this)};function Jg(t){if(t.h&&typeof Vl<"u"&&(!t.C[1]||tn(t)!=4||t.aa()!=2)){if(t.v&&tn(t)==4)Yl(t.Ha,0,t);else if(Qe(t,"readystatechange"),tn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Vg)[1]||null;if(!r&&X.self&&X.self.location){var i=X.self.location.protocol;r=i.substr(0,i.length-1)}s=!_S.test(r?r.toLowerCase():"")}n=s}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<tn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Xg(t)}}finally{wa(t)}}}}function wa(t,e){if(t.g){Zg(t);const n=t.g,s=t.C[0]?bo:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Zg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function tn(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wS(e)}};function Sf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Yg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function em(t){let e="";return jl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function su(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=em(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function pr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tm(t){this.Ca=0,this.i=[],this.j=new fa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=pr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=pr("baseRetryDelayMs",5e3,t),this.bb=pr("retryDelaySeedMs",1e4,t),this.$a=pr("forwardChannelMaxRetries",2,t),this.ta=pr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Hg(t&&t.concurrentRequestLimit),this.Fa=new mS,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=tm.prototype;V.ma=8;V.G=1;function ru(t){if(nm(t),t.G==3){var e=t.U++,n=cn(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),Ei(t,n),e=new yi(t,t.j,e,void 0),e.K=2,e.v=ya(cn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=um(e.l,null),e.g.da(e.v)),e.F=Date.now(),vi(e)}cm(t)}function _a(t){t.g&&(ou(t),t.g.cancel(),t.g=null)}function nm(t){_a(t),t.u&&(X.clearTimeout(t.u),t.u=null),ko(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Ea(t){Kg(t.h)||t.m||(t.m=!0,Tg(t.Ja,t),t.C=0)}function IS(t,e){return zg(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=gi(nt(t.Ja,t,e),am(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new yi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=mg(i),yg(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sm(this,r,e),n=cn(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),Ei(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(em(i)))+"&"+e:this.o&&su(n,this.o,i)),eu(this.h,r),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),r.Z=!0,qc(r,n,null)):qc(r,n,e),this.G=2}}else this.G==3&&(t?Cf(this,t):this.i.length==0||Kg(this.h)||Cf(this))};function Cf(t,e){var n;e?n=e.m:n=t.U++;const s=cn(t.F);Re(s,"SID",t.I),Re(s,"RID",n),Re(s,"AID",t.T),Ei(t,s),t.o&&t.s&&su(s,t.o,t.s),n=new yi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=sm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),eu(t.h,n),qc(n,s,e)}function Ei(t,e){t.ia&&jl(t.ia,function(n,s){Re(e,s,n)}),t.l&&$g({},function(n,s){Re(e,s,n)})}function sm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?nt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{yS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function rm(t){t.g||t.u||(t.Z=1,Tg(t.Ia,t),t.A=0)}function iu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=gi(nt(t.Ia,t),am(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,im(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=gi(nt(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),_a(this),im(this))};function ou(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function im(t){t.g=new yi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=cn(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),Ei(t,e),t.o&&t.s&&su(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ya(cn(e)),n.s=null,n.P=!0,Mg(n,t)}V.cb=function(){this.v!=null&&(this.v=null,_a(this),iu(this),lt(19))};function ko(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function om(t,e){var n=null;if(t.g==e){ko(t),ou(t),t.g=null;var s=2}else if(Hc(t.h,e))n=e.D,Wg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=da(),Qe(s,new Dg(s,n)),Ea(t)}else rm(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&IS(t,e)||s==2&&iu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ss(t,5);break;case 4:ss(t,10);break;case 3:ss(t,6);break;default:ss(t,2)}}}function am(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ss(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=nt(t.kb,t);n||(n=new ls("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Co(n,"https"),ya(n)),vS(n.toString(),s)}else lt(2);t.G=0,t.l&&t.l.va(e),cm(t),nm(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function cm(t){if(t.G=0,t.la=[],t.l){const e=Gg(t.h);(e.length!=0||t.i.length!=0)&&(gf(t.la,e),gf(t.la,t.i),t.h.i.length=0,Bl(t.i),t.i.length=0),t.l.ua()}}function lm(t,e,n){var s=n instanceof ls?cn(n):new ls(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ao(s,s.m);else{var r=X.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ls(null,void 0);s&&Co(i,s),e&&(i.g=e),r&&Ao(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Re(s,n,e),Re(s,"VER",t.ma),Ei(t,s),s}function um(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pe(new wi({jb:!0})):new Pe(t.ra),e.Ka(t.H),e}function hm(){}V=hm.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function Ro(){if(zs&&!(10<=Number(VT)))throw Error("Environmental error: no available transport.")}Ro.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){We.call(this),this.g=new tm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Io(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Io(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ar(this)}Ye(wt,We);wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=lm(t,null,t.V),Ea(t)};wt.prototype.close=function(){ru(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Gl(t),t=n);e.i.push(new pS(e.ab++,t)),e.G==3&&Ea(e)};wt.prototype.M=function(){this.g.l=null,delete this.j,ru(this.g),delete this.g,wt.X.M.call(this)};function fm(t){Jl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(fm,Jl);function dm(){Zl.call(this),this.status=1}Ye(dm,Zl);function ar(t){this.g=t}Ye(ar,hm);ar.prototype.xa=function(){Qe(this.g,"a")};ar.prototype.wa=function(t){Qe(this.g,new fm(t))};ar.prototype.va=function(t){Qe(this.g,new dm)};ar.prototype.ua=function(){Qe(this.g,"b")};Ro.prototype.createWebChannel=Ro.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;pa.NO_ERROR=0;pa.TIMEOUT=8;pa.HTTP_ERROR=6;Ng.COMPLETE="complete";Og.EventType=mi;mi.OPEN="a";mi.CLOSE="b";mi.ERROR="c";mi.MESSAGE="d";We.prototype.listen=We.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.Oa;Pe.prototype.getLastErrorCode=Pe.prototype.Ea;Pe.prototype.getStatus=Pe.prototype.aa;Pe.prototype.getResponseJson=Pe.prototype.Sa;Pe.prototype.getResponseText=Pe.prototype.fa;Pe.prototype.send=Pe.prototype.da;Pe.prototype.setWithCredentials=Pe.prototype.Ka;var TS=function(){return new Ro},SS=function(){return da()},cc=pa,CS=Ng,AS=Es,Af={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kS=wi,qi=Og,RS=Pe;const kf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Sl("@firebase/firestore");function Rf(){return ys.logLevel}function B(t,...e){if(ys.logLevel<=ge.DEBUG){const n=e.map(au);ys.debug(`Firestore (${cr}): ${t}`,...n)}}function ln(t,...e){if(ys.logLevel<=ge.ERROR){const n=e.map(au);ys.error(`Firestore (${cr}): ${t}`,...n)}}function Kc(t,...e){if(ys.logLevel<=ge.WARN){const n=e.map(au);ys.warn(`Firestore (${cr}): ${t}`,...n)}}function au(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: `+t;throw ln(e),new Error(e)}function _e(t,e){t||Y()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class DS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NS{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_e(typeof s.accessToken=="string"),new pm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new Xe(e)}}class OS{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(_e(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class PS{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new OS(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LS{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.A=n.token,new MS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=US(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ve(0,0))}static max(){return new ee(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends Yr{construct(e,n,s){return new Ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new x(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const FS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Yr{construct(e,n,s){return new et(e,n,s)}static isValidIdentifier(e){return FS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new x(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ce.fromString(e))}static fromName(e){return new q(Ce.fromString(e).popFirst(5))}static empty(){return new q(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ce(e.slice()))}}function $S(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Ve(n+1,0):new Ve(n,s));return new Mn(r,q.empty(),e)}function VS(t){return new Mn(t.readTime,t.key,-1)}class Mn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Mn(ee.min(),q.empty(),-1)}static max(){return new Mn(ee.max(),q.empty(),-1)}}function BS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==qS)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ii(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}cu.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Xr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){return t==null}function xo(t){return t===0&&1/t==-1/0}function KS(t){return typeof t=="number"&&Number.isInteger(t)&&!xo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new it(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const zS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(t){if(_e(!!t),typeof t=="string"){let e=0;const n=zS.exec(t);if(_e(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gs(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ym(t){const e=t.mapValue.fields.__previous_value__;return lu(e)?ym(e):e}function Jr(t){const e=Ln(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lu(t)?4:WS(t)?9007199254740991:10:Y()}function Wt(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jr(t).isEqual(Jr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ln(s.timestampValue),o=Ln(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Gs(s.bytesValue).isEqual(Gs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ue(s.geoPointValue.latitude)===Ue(r.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ue(s.integerValue)===Ue(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ue(s.doubleValue),o=Ue(r.doubleValue);return i===o?xo(i)===xo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(xf(i)!==xf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Wt(i[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Zr(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function Qs(t,e){if(t===e)return 0;const n=vs(t),s=vs(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ue(r.integerValue||r.doubleValue),a=Ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Df(t.timestampValue,e.timestampValue);case 4:return Df(Jr(t),Jr(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Gs(r),a=Gs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=me(o[c],a[c]);if(l!==0)return l}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=me(Ue(r.latitude),Ue(i.latitude));return o!==0?o:me(Ue(r.longitude),Ue(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Qs(o[c],a[c]);if(l)return l}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ji.mapValue&&i===ji.mapValue)return 0;if(r===ji.mapValue)return 1;if(i===ji.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=me(a[u],l[u]);if(h!==0)return h;const f=Qs(o[a[u]],c[l[u]]);if(f!==0)return f}return me(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Ln(t),s=Ln(e),r=me(n.seconds,s.seconds);return r!==0?r:me(n.nanos,s.nanos)}function Ys(t){return zc(t)}function zc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ln(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=zc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${zc(s.fields[a])}`;return i+"}"}(t.mapValue):Y();var e,n}function Do(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wc(t){return!!t&&"integerValue"in t}function uu(t){return!!t&&"arrayValue"in t}function Nf(t){return!!t&&"nullValue"in t}function Of(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function so(t){return!!t&&"mapValue"in t}function kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=kr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.position=e,this.inclusive=n}}function Pf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=Qs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{}class Fe extends vm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new YS(e,n,s):n==="array-contains"?new ZS(e,s):n==="in"?new eC(e,s):n==="not-in"?new tC(e,s):n==="array-contains-any"?new nC(e,s):new Fe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new XS(e,s):new JS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qs(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(Qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pt extends vm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Pt(e,n)}matches(e){return wm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function wm(t){return t.op==="and"}function GS(t){return QS(t)&&wm(t)}function QS(t){for(const e of t.filters)if(e instanceof Pt)return!1;return!0}function _m(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Ys(t.value);{const e=t.filters.map(n=>_m(n)).join(",");return`${t.op}(${e})`}}function Em(t,e){return t instanceof Fe?function(n,s){return s instanceof Fe&&n.op===s.op&&n.field.isEqual(s.field)&&Wt(n.value,s.value)}(t,e):t instanceof Pt?function(n,s){return s instanceof Pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Em(i,s.filters[o]),!0):!1}(t,e):void Y()}function bm(t){return t instanceof Fe?function(e){return`${e.field.canonicalString()} ${e.op} ${Ys(e.value)}`}(t):t instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(bm).join(" ,")+"}"}(t):"Filter"}class YS extends Fe{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class XS extends Fe{constructor(e,n){super(e,"in",n),this.keys=Im("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JS extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=Im("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Im(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class ZS extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uu(n)&&Zr(n.arrayValue,this.value)}}class eC extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zr(this.value.arrayValue,n)}}class tC extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zr(this.value.arrayValue,n)}}class nC extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Zr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n="asc"){this.field=e,this.dir=n}}function sC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=r??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ge(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lf(this.data.getIterator())}getIteratorFrom(e){return new Lf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Lf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Be(et.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!so(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(n)}setAll(e){let n=et.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=kr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());so(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];so(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){bs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new dt(kr(this.value))}}function Tm(t){const e=[];return bs(t.fields,(n,s)=>{const r=new et([n]);if(so(s)){const i=Tm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,ee.min(),ee.min(),ee.min(),dt.empty(),0)}static newFoundDocument(e,n,s,r){return new Je(e,1,n,ee.min(),s,r,0)}static newNoDocument(e,n){return new Je(e,2,n,ee.min(),ee.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,ee.min(),ee.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Uf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new rC(t,e,n,s,r,i,o)}function hu(t){const e=te(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>_m(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ys(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ys(s)).join(",")),e.ft=n}return e.ft}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Em(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function Gc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function iC(t,e,n,s,r,i,o,a){return new Vn(t,e,n,s,r,i,o,a)}function Sm(t){return new Vn(t)}function Ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function du(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ia(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function pu(t){return t.collectionGroup!==null}function us(t){const e=te(t);if(e.dt===null){e.dt=[];const n=Ia(e),s=du(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Us(n)),e.dt.push(new Us(et.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Us(et.keyField(),i))}}}return e.dt}function Gt(t){const e=te(t);if(!e._t)if(e.limitType==="F")e._t=Uf(e.path,e.collectionGroup,us(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of us(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Us(i.field,o))}const s=e.endAt?new Xs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Xs(e.startAt.position,e.startAt.inclusive):null;e._t=Uf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Qc(t,e){e.getFirstInequalityField(),Ia(t);const n=t.filters.concat([e]);return new Vn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function No(t,e,n){return new Vn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ta(t,e){return fu(Gt(t),Gt(e))&&t.limitType===e.limitType}function Cm(t){return`${hu(Gt(t))}|lt:${t.limitType}`}function Yc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>bm(s)).join(", ")}]`),ba(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ys(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ys(s)).join(",")),`Target(${n})`}(Gt(t))}; limitType=${t.limitType})`}function gu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of us(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Pf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,us(n),s)||n.endAt&&!function(r,i,o){const a=Pf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,us(n),s))}(t,e)}function oC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Am(t){return(e,n)=>{let s=!1;for(const r of us(t)){const i=aC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function aC(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Qs(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function Rm(t){return{integerValue:""+t}}function cC(t,e){return KS(e)?Rm(e):km(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this._=void 0}}function lC(t,e,n){return t instanceof Oo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ei?Dm(t,e):t instanceof ti?Nm(t,e):function(s,r){const i=xm(s,r),o=$f(i)+$f(s.gt);return Wc(i)&&Wc(s.gt)?Rm(o):km(s.yt,o)}(t,e)}function uC(t,e,n){return t instanceof ei?Dm(t,e):t instanceof ti?Nm(t,e):n}function xm(t,e){return t instanceof Po?Wc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Oo extends Sa{}class ei extends Sa{constructor(e){super(),this.elements=e}}function Dm(t,e){const n=Om(e);for(const s of t.elements)n.some(r=>Wt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ti extends Sa{constructor(e){super(),this.elements=e}}function Nm(t,e){let n=Om(e);for(const s of t.elements)n=n.filter(r=>!Wt(r,s));return{arrayValue:{values:n}}}class Po extends Sa{constructor(e,n){super(),this.yt=e,this.gt=n}}function $f(t){return Ue(t.integerValue||t.doubleValue)}function Om(t){return uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ei&&s instanceof ei||n instanceof ti&&s instanceof ti?Ws(n.elements,s.elements,Wt):n instanceof Po&&s instanceof Po?Wt(n.gt,s.gt):n instanceof Oo&&s instanceof Oo}(t.transform,e.transform)}class fC{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function Pm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lm(t.key,Ht.none()):new Ti(t.key,t.data,Ht.none());{const n=t.data,s=dt.empty();let r=new Be(et.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Bn(t.key,s,new bt(r.toArray()),Ht.none())}}function dC(t,e,n){t instanceof Ti?function(s,r,i){const o=s.value.clone(),a=Bf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Bn?function(s,r,i){if(!ro(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Bf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Mm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Rr(t,e,n,s){return t instanceof Ti?function(r,i,o,a){if(!ro(r.precondition,i))return o;const c=r.value.clone(),l=qf(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Bn?function(r,i,o,a){if(!ro(r.precondition,i))return o;const c=qf(r.fieldTransforms,a,i),l=i.data;return l.setAll(Mm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return ro(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function pC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=xm(s.transform,r||null);i!=null&&(n===null&&(n=dt.empty()),n.set(s.field,i))}return n||null}function Vf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ws(n,s,(r,i)=>hC(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ti extends Ca{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Bn extends Ca{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bf(t,e,n){const s=new Map;_e(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,uC(o,a,n[r]))}return s}function qf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,lC(i,o,e))}return s}class Lm extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gC extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,ue;function yC(t){switch(t){default:return Y();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Um(t){if(t===void 0)return ln("GRPC error has no .code"),_.UNKNOWN;switch(t){case Le.OK:return _.OK;case Le.CANCELLED:return _.CANCELLED;case Le.UNKNOWN:return _.UNKNOWN;case Le.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Le.INTERNAL:return _.INTERNAL;case Le.UNAVAILABLE:return _.UNAVAILABLE;case Le.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Le.NOT_FOUND:return _.NOT_FOUND;case Le.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Le.ABORTED:return _.ABORTED;case Le.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Le.DATA_LOSS:return _.DATA_LOSS;default:return Y()}}(ue=Le||(Le={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return mm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new je(q.comparator);function un(){return vC}const Fm=new je(q.comparator);function _r(...t){let e=Fm;for(const n of t)e=e.insert(n.key,n);return e}function $m(t){let e=Fm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function rs(){return xr()}function Vm(){return xr()}function xr(){return new lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const wC=new je(q.comparator),_C=new Be(q.comparator);function ae(...t){let e=_C;for(const n of t)e=e.add(n);return e}const EC=new Be(me);function Bm(){return EC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Aa(ee.min(),r,Bm(),un(),ae())}}class Si{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Si(s,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class qm{constructor(e,n){this.targetId=e,this.Et=n}}class jm{constructor(e,n,s=it.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class jf{constructor(){this.At=0,this.Rt=Kf(),this.bt=it.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ae(),n=ae(),s=ae();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Y()}}),new Si(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Kf()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class bC{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=un(),this.qt=Hf(),this.Ut=new Be(me)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Gc(i))if(s===0){const o=new q(i.path);this.Qt(n,o,Je.newNoDocument(o,ee.min()))}else _e(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Gc(a.target)){const c=new q(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Je.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ae();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Aa(e,n,this.Ut,this.Lt,s);return this.Lt=un(),this.qt=Hf(),this.Ut=new Be(me),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new jf,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Be(me),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new jf),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Hf(){return new je(q.comparator)}function Kf(){return new je(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),TC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),SC=(()=>({and:"AND",or:"OR"}))();class CC{constructor(e,n){this.databaseId=e,this.wt=n}}function Mo(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hm(t,e){return t.wt?e.toBase64():e.toUint8Array()}function AC(t,e){return Mo(t,e.toTimestamp())}function Kt(t){return _e(!!t),ee.fromTimestamp(function(e){const n=Ln(e);return new Ve(n.seconds,n.nanos)}(t))}function mu(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Km(t){const e=Ce.fromString(t);return _e(Ym(e)),e}function Xc(t,e){return mu(t.databaseId,e.path)}function lc(t,e){const n=Km(e);if(n.get(1)!==t.databaseId.projectId)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(zm(n))}function Jc(t,e){return mu(t.databaseId,e)}function kC(t){const e=Km(t);return e.length===4?Ce.emptyPath():zm(e)}function Zc(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zm(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zf(t,e,n){return{name:Xc(t,e),fields:n.value.mapValue.fields}}function RC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(_e(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(_e(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:Um(c.code);return new x(l,c.message||"")}(o);n=new jm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=lc(t,s.document.name),i=Kt(s.document.updateTime),o=s.document.createTime?Kt(s.document.createTime):ee.min(),a=new dt({mapValue:{fields:s.document.fields}}),c=Je.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new io(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=lc(t,s.document),i=s.readTime?Kt(s.readTime):ee.min(),o=Je.newNoDocument(r,i),a=s.removedTargetIds||[];n=new io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=lc(t,s.document),i=s.removedTargetIds||[];n=new io([],i,r,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new mC(r),o=s.targetId;n=new qm(o,i)}}return n}function xC(t,e){let n;if(e instanceof Ti)n={update:zf(t,e.key,e.value)};else if(e instanceof Lm)n={delete:Xc(t,e.key)};else if(e instanceof Bn)n={update:zf(t,e.key,e.data),updateMask:FC(e.fieldMask)};else{if(!(e instanceof gC))return Y();n={verify:Xc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Oo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ei)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Po)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:AC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function DC(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Kt(s.updateTime):Kt(r);return i.isEqual(ee.min())&&(i=Kt(r)),new fC(i,s.transformResults||[])}(n,e))):[]}function NC(t,e){return{documents:[Jc(t,e.path)]}}function Wm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Jc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Qm(Pt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:As(u.field),direction:MC(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||ba(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function OC(t){let e=kC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){_e(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Gm(u);return h instanceof Pt&&GS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Us(ks(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ba(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Xs(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Xs(f,h)}(n.endAt)),iC(e,r,o,i,a,"F",c,l)}function PC(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ks(e.unaryFilter.field);return Fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ks(e.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ks(e.unaryFilter.field);return Fe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ks(e.unaryFilter.field);return Fe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Fe.create(ks(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(n=>Gm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function MC(t){return IC[t]}function LC(t){return TC[t]}function UC(t){return SC[t]}function As(t){return{fieldPath:t.canonicalString()}}function ks(t){return et.fromServerFormat(t.fieldPath)}function Qm(t){return t instanceof Fe?function(e){if(e.op==="=="){if(Of(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NAN"}};if(Nf(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Of(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NAN"}};if(Nf(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(e.field),op:LC(e.op),value:e.value}}}(t):t instanceof Pt?function(e){const n=e.getFilters().map(s=>Qm(s));return n.length===1?n[0]:{compositeFilter:{op:UC(e.op),filters:n}}}(t):Y()}function FC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ym(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&dC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Rr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Rr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Vm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Pm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,s)=>Vf(n,s))&&Ws(this.baseMutations,e.baseMutations,(n,s)=>Vf(n,s))}}class yu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){_e(e.mutations.length===s.length);let r=wC;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new yu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s,r,i=ee.min(),o=ee.min(),a=it.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.ie=e}}function qC(t){const e=OC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?No(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.Je=new HC}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Mn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class HC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Be(Ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Be(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Js(0)}static vn(){return new Js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.changes=new lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Rr(s.mutation,r,bt.empty(),Ve.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const r=rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=_r();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=un();const o=xr(),a=xr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Bn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Rr(u.mutation,l,u.mutation.getFieldMask(),Ve.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new zC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=xr();let r=new je((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||bt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ae()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Vm();u.forEach(f=>{if(!i.has(f)){const g=Pm(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(rs());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:$m(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let r=_r();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=_r();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Vn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Je.newInvalidDocument(l)))});let o=_r();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Rr(l.mutation,c,bt.empty(),Ve.now()),gu(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Kt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:qC(s.bundledQuery),readTime:Kt(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.overlays=new je(q.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=rs();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=rs(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new je((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=rs(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=rs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new VC(n,s));let i=this.es.get(n);i===void 0&&(i=ae(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.ns=new Be(He.ss),this.rs=new Be(He.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new He(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new He(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new q(new Ce([])),s=new He(n,e),r=new He(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new Ce([])),s=new He(n,e),r=new He(n,e+1);let i=ae();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class He{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||me(e._s,n._s)}static os(e,n){return me(e._s,n._s)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Be(He.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $C(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new He(n,0),r=new He(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Be(me);return n.forEach(r=>{const i=new He(r,0),o=new He(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new He(new q(i),0);let a=new Be(me);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){_e(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new He(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new He(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.Es=e,this.docs=new je(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let s=un();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Je.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=un();const i=new q(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||BS(VS(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){Y()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new JC(this)}getSize(e){return T.resolve(this.size)}}class JC extends KC{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.persistence=e,this.Rs=new lr(n=>hu(n),fu),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.bs=0,this.Ps=new vu,this.targetCount=0,this.vs=Js.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new cu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ZC(this),this.indexManager=new jC,this.remoteDocumentCache=function(s){return new XC(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new BC(n),this.Ns=new GC(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new YC(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const r=new tA(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class tA extends jS{constructor(e){super(),this.currentSequenceNumber=e}}class wu{constructor(e){this.persistence=e,this.Fs=new vu,this.$s=null}static Bs(e){return new wu(e)}get Ls(){if(this.$s)return this.$s;throw Y()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=q.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,ee.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ae(),r=ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new _u(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Ff(n))return T.resolve(null);let s=Gt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=No(n,null,"F"),s=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ae(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,No(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return Ff(n)||r.isEqual(ee.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Rf()<=ge.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yc(n)),this.Bi(e,o,n,$S(r,-1)))})}Fi(e,n){let s=new Be(Am(e));return n.forEach((r,i)=>{gu(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Rf()<=ge.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Yc(n)),this.Ni.getDocumentsMatchingQuery(e,n,Mn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new je(me),this.Ui=new lr(i=>hu(i),fu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WC(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function rA(t,e,n,s){return new sA(t,e,n,s)}async function Xm(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ae();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function iA(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=T.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(m=>{const v=c.docVersions.get(g);_e(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Jm(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function oA(t,e){const n=te(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(it.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(m,v,C){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=un(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(aA(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(ee.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function aA(t,e,n){let s=ae(),r=ae();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=un();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function cA(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function lA(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new hs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function el(t,e,n){const s=te(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ii(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Wf(t,e,n){const s=te(t);let r=ee.min(),i=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=te(a),h=u.Ui.get(l);return h!==void 0?T.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,Gt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:ee.min(),n?i:ae())).next(a=>(uA(s,oC(e),a),{documents:a,Hi:i})))}function uA(t,e,n){let s=t.Ki.get(e)||ee.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Gf{constructor(){this.activeTargetIds=Bm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hA{constructor(){this.Lr=new Gf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Gf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(B("RestConnection","Received: ",c),c),c=>{throw Kc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+cr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=dA[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new RS;a.setWithCredentials(!0),a.listenOnce(CS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case cc.NO_ERROR:const l=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(l)),i(l);break;case cc.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new x(_.DEADLINE_EXCEEDED,"Request time out"));break;case cc.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(v)>=0?v:_.UNKNOWN}(f.status);o(new x(g,f.message))}else o(new x(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(_.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=TS(),o=SS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new kS({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");B("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new pA({Hr:m=>{h?B("Connection","Not sending because WebChannel is closed:",m):(u||(B("Connection","Opening WebChannel transport."),l.open(),u=!0),B("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),g=(m,v,C)=>{m.listen(v,A=>{try{C(A)}catch(N){setTimeout(()=>{throw N},0)}})};return g(l,qi.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),g(l,qi.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),f.io())}),g(l,qi.EventType.ERROR,m=>{h||(h=!0,Kc("Connection","WebChannel transport errored:",m),f.io(new x(_.UNAVAILABLE,"The operation could not be completed")))}),g(l,qi.EventType.MESSAGE,m=>{var v;if(!h){const C=m.data[0];_e(!!C);const A=C,N=A.error||((v=A[0])===null||v===void 0?void 0:v.error);if(N){B("Connection","WebChannel received error:",N);const P=N.status;let W=function(Ee){const re=Le[Ee];if(re!==void 0)return Um(re)}(P),ce=N.message;W===void 0&&(W=_.INTERNAL,ce="Unknown error status: "+P+" with message "+N.message),h=!0,f.io(new x(W,ce)),l.close()}else B("Connection","WebChannel received:",C),f.ro(C)}}),g(o,AS.STAT_EVENT,m=>{m.stat===Af.PROXY?B("Connection","Detected buffering proxy"):m.stat===Af.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){return new CC(t,!0)}class Zm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Zm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new x(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mA extends ey{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=RC(this.yt,e),s=function(r){if(!("targetChange"in r))return ee.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?Kt(i.readTime):ee.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Zc(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Gc(a)?{documents:NC(r,a)}:{query:Wm(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Hm(r,i.resumeToken):i.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=Mo(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=PC(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Zc(this.yt),n.removeTarget=e,this.Bo(n)}}class yA extends ey{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=DC(e.writeResults,e.commitTime),s=Kt(e.commitTime);return this.listener.Zo(s,n)}return _e(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Zc(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>xC(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(_.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(_.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}async function wA(t,e){const n=te(t),s=function(i,o){const a=Wm(i,o);return{structuredAggregationQuery:{aggregations:[{count:{},alias:"count_alias"}],structuredQuery:a.structuredQuery},parent:a.parent}}(n.yt,Gt(e)),r=s.parent;return n.connection.co||delete s.parent,(await n._o("RunAggregationQuery",r,s,1)).filter(i=>!!i.result).map(i=>i.result.aggregateFields)}class _A{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(ln(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{qn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=te(a);c._u.add(4),await Ci(c),c.gu.set("Unknown"),c._u.delete(4),await Ra(c)}(this))})}),this.gu=new _A(s,r)}}async function Ra(t){if(qn(t))for(const e of t.wu)await e(!0)}async function Ci(t){for(const e of t.wu)await e(!1)}function ty(t,e){const n=te(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Iu(n)?bu(n):ur(n).ko()&&Eu(n,e))}function ny(t,e){const n=te(t),s=ur(n);n.du.delete(e),s.ko()&&sy(n,e),n.du.size===0&&(s.ko()?s.Fo():qn(n)&&n.gu.set("Unknown"))}function Eu(t,e){t.yu.Ot(e.targetId),ur(t).zo(e)}function sy(t,e){t.yu.Ot(e),ur(t).Ho(e)}function bu(t){t.yu=new bC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ur(t).start(),t.gu.uu()}function Iu(t){return qn(t)&&!ur(t).No()&&t.du.size>0}function qn(t){return te(t)._u.size===0}function ry(t){t.yu=void 0}async function bA(t){t.du.forEach((e,n)=>{Eu(t,e)})}async function IA(t,e){ry(t),Iu(t)?(t.gu.hu(e),bu(t)):t.gu.set("Unknown")}async function TA(t,e,n){if(t.gu.set("Online"),e instanceof jm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Lo(t,s)}else if(e instanceof io?t.yu.Kt(e):e instanceof qm?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(ee.min()))try{const s=await Jm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),sy(r,a);const l=new hs(c.target,a,1,c.sequenceNumber);Eu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await Lo(t,s)}}async function Lo(t,e,n){if(!Ii(e))throw e;t._u.add(1),await Ci(t),t.gu.set("Offline"),n||(n=()=>Jm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ra(t)})}function iy(t,e){return e().catch(n=>Lo(t,n,e))}async function xa(t){const e=te(t),n=Un(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;SA(e);)try{const r=await cA(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,CA(e,r)}catch(r){await Lo(e,r)}oy(e)&&ay(e)}function SA(t){return qn(t)&&t.fu.length<10}function CA(t,e){t.fu.push(e);const n=Un(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function oy(t){return qn(t)&&!Un(t).No()&&t.fu.length>0}function ay(t){Un(t).start()}async function AA(t){Un(t).eu()}async function kA(t){const e=Un(t);for(const n of t.fu)e.Xo(n.mutations)}async function RA(t,e,n){const s=t.fu.shift(),r=yu.from(s,e,n);await iy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await xa(t)}async function xA(t,e){e&&Un(t).Yo&&await async function(n,s){if(r=s.code,yC(r)&&r!==_.ABORTED){const i=n.fu.shift();Un(n).Mo(),await iy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xa(n)}var r}(t,e),oy(t)&&ay(t)}async function Yf(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=qn(n);n._u.add(3),await Ci(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ra(n)}async function DA(t,e){const n=te(t);e?(n._u.delete(2),await Ra(n)):e||(n._u.add(2),await Ci(n),n.gu.set("Unknown"))}function ur(t){return t.pu||(t.pu=function(e,n,s){const r=te(e);return r.su(),new mA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:bA.bind(null,t),Zr:IA.bind(null,t),Wo:TA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Iu(t)?bu(t):t.gu.set("Unknown")):(await t.pu.stop(),ry(t))})),t.pu}function Un(t){return t.Iu||(t.Iu=function(e,n,s){const r=te(e);return r.su(),new yA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:AA.bind(null,t),Zr:xA.bind(null,t),tu:kA.bind(null,t),Zo:RA.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await xa(t)):(await t.Iu.stop(),t.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Tu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Su(t,e){if(ln("AsyncQueue",`${e}: ${t}`),Ii(t))return new x(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=_r(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Fs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.Tu=new je(q.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Y():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Zs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zs(e,n,Fs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.Au=void 0,this.listeners=[]}}class OA{constructor(){this.queries=new lr(e=>Cm(e),Ta),this.onlineState="Unknown",this.Ru=new Set}}async function PA(t,e){const n=te(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new NA),r)try{i.Au=await n.onListen(s)}catch(o){const a=Su(o,`Initialization of query '${Yc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Cu(n)}async function MA(t,e){const n=te(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function LA(t,e){const n=te(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Cu(n)}function UA(t,e,n){const s=te(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Cu(t){t.Ru.forEach(e=>{e.next()})}class FA{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Zs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.key=e}}class ly{constructor(e){this.key=e}}class $A{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ae(),this.mutatedKeys=ae(),this.Gu=Am(e),this.Qu=new Fs(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Xf,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=gu(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;f&&g?f.data.isEqual(g.data)?m!==v&&(s.track({type:3,doc:g}),C=!0):this.Hu(f,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),C=!0):f&&!g&&(s.track({type:1,doc:f}),C=!0,(c||l)&&(a=!0)),C&&(g?(o=o.add(g),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return g(h)-g(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Zs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Xf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ae(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new ly(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new cy(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ae();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Zs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class VA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class BA{constructor(e){this.key=e,this.nc=!1}}class qA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new lr(a=>Cm(a),Ta),this.rc=new Map,this.oc=new Set,this.uc=new je(q.comparator),this.cc=new Map,this.ac=new vu,this.hc={},this.lc=new Map,this.fc=Js.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function jA(t,e){const n=ZA(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await lA(n.localStore,Gt(e));n.isPrimaryClient&&ty(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await HA(n,e,s,a==="current",o.resumeToken)}return r}async function HA(t,e,n,s,r){t._c=(h,f,g)=>async function(m,v,C,A){let N=v.view.Wu(C);N.$i&&(N=await Wf(m.localStore,v.query,!1).then(({documents:ce})=>v.view.Wu(ce,N)));const P=A&&A.targetChanges.get(v.targetId),W=v.view.applyChanges(N,m.isPrimaryClient,P);return Zf(m,v.targetId,W.Xu),W.snapshot}(t,h,f,g);const i=await Wf(t.localStore,e,!0),o=new $A(e,i.Hi),a=o.Wu(i.documents),c=Si.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Zf(t,n,l.Xu);const u=new VA(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function KA(t,e){const n=te(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Ta(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await el(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ny(n.remoteStore,s.targetId),tl(n,s.targetId)}).catch(bi)):(tl(n,s.targetId),await el(n.localStore,s.targetId,!0))}async function zA(t,e,n){const s=ek(t);try{const r=await function(i,o){const a=te(i),c=Ve.now(),l=o.reduce((f,g)=>f.add(g.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=un(),m=ae();return a.Gi.getEntries(f,l).next(v=>{g=v,g.forEach((C,A)=>{A.isValidDocument()||(m=m.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(v=>{u=v;const C=[];for(const A of o){const N=pC(A,u.get(A.key).overlayedDocument);N!=null&&C.push(new Bn(A.key,N,Tm(N.value.mapValue),Ht.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,C,o)}).next(v=>{h=v;const C=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,v.batchId,C)})}).then(()=>({batchId:h.batchId,changes:$m(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new je(me)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ai(s,r.changes),await xa(s.remoteStore)}catch(r){const i=Su(r,"Failed to persist write");n.reject(i)}}async function uy(t,e){const n=te(t);try{const s=await oA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(_e(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?_e(o.nc):r.removedDocuments.size>0&&(_e(o.nc),o.nc=!1))}),await Ai(n,s,e)}catch(s){await bi(s)}}function Jf(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=te(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Cu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function WA(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new je(q.comparator);o=o.insert(i,Je.newNoDocument(i,ee.min()));const a=ae().add(i),c=new Aa(ee.min(),new Map,new Be(me),o,a);await uy(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Au(s)}else await el(s.localStore,e,!1).then(()=>tl(s,e,n)).catch(bi)}async function GA(t,e){const n=te(t),s=e.batch.batchId;try{const r=await iA(n.localStore,e);fy(n,s,null),hy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ai(n,r)}catch(r){await bi(r)}}async function QA(t,e,n){const s=te(t);try{const r=await function(i,o){const a=te(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(_e(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);fy(s,e,n),hy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ai(s,r)}catch(r){await bi(r)}}function hy(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function fy(t,e,n){const s=te(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function tl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||dy(t,s)})}function dy(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(ny(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Au(t))}function Zf(t,e,n){for(const s of n)s instanceof cy?(t.ac.addReference(s.key,e),YA(t,s)):s instanceof ly?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||dy(t,s.key)):Y()}function YA(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oc.add(s),Au(t))}function Au(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(Ce.fromString(e)),s=t.fc.next();t.cc.set(s,new BA(n)),t.uc=t.uc.insert(n,s),ty(t.remoteStore,new hs(Gt(Sm(n.path)),s,2,cu.at))}}async function Ai(t,e,n){const s=te(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=_u.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=te(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>T.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ii(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.qi.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);l.qi=l.qi.insert(h,m)}}}(s.localStore,i))}async function XA(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await Xm(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new x(_.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ai(n,s.ji)}}function JA(t,e){const n=te(t),s=n.cc.get(e);if(s&&s.nc)return ae().add(s.key);{let r=ae();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function ZA(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WA.bind(null,e),e.sc.Wo=LA.bind(null,e.eventManager),e.sc.wc=UA.bind(null,e.eventManager),e}function ek(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QA.bind(null,e),e}class tk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ka(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return rA(this.persistence,new nA,e.initialUser,this.yt)}yc(e){return new eA(wu.Bs,this.yt)}gc(e){return new hA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=XA.bind(null,this.syncEngine),await DA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new OA}createDatastore(e){const n=ka(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new gA(r));var r;return function(i,o,a,c){return new vA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Jf(this.syncEngine,a,0),o=Qf.C()?new Qf:new fA,new EA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new qA(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ci(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e,n){if(!n)throw new x(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sk(t,e,n,s){if(e===!0&&s===!0)throw new x(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ed(t){if(!q.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function td(t){if(q.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Da(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function ws(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Da(t);throw new x(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gy(t,e){if(e<=0)throw new x(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=new Map;class sd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,sk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xS;switch(n.type){case"gapi":const s=n.client;return new PS(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nd.get(e);n&&(B("ComponentProvider","Removing Datastore"),nd.delete(e),n.terminate())}(this),Promise.resolve()}}function rk(t,e,n,s={}){var r;const i=(t=ws(t,Na))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Kc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Xe.MOCK_USER;else{o=A_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new x(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Xe(c)}t._authCredentials=new DS(new pm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Qt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qt(this.firestore,e,this._query)}}class Nn extends Qt{constructor(e,n,s){super(e,n,Sm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new q(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function Wn(t,e,...n){if(t=$e(t),py("collection","path",e),t instanceof Na){const s=Ce.fromString(e,...n);return td(s),new Nn(t,null,s)}{if(!(t instanceof yt||t instanceof Nn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return td(s),new Nn(t.firestore,null,s)}}function my(t,e,...n){if(t=$e(t),arguments.length===1&&(e=gm.R()),py("doc","path",e),t instanceof Na){const s=Ce.fromString(e,...n);return ed(s),new yt(t,null,new q(s))}{if(!(t instanceof yt||t instanceof Nn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return ed(s),new yt(t.firestore,t instanceof Nn?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}class ok{constructor(e,n){this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._data}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n,s){this.query=e,this.datastore=n,this.userDataWriter=s}run(){return wA(this.datastore,this.query._query).then(e=>{_e(e[0]!==void 0);const n=Object.entries(e[0]).filter(([s,r])=>s==="count_alias").map(([s,r])=>this.userDataWriter.convertValue(r))[0];return _e(typeof n=="number"),Promise.resolve(new ok(this.query,{count:n}))})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Xe.UNAUTHENTICATED,this.clientId=gm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Su(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function lk(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Xm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function uk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hk(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Yf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yf(e.remoteStore,i)),t.onlineComponents=e}async function hk(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await lk(t,new tk)),t.offlineComponents}async function Oa(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await uk(t,new nk)),t.onlineComponents}function fk(t){return Oa(t).then(e=>e.remoteStore)}function dk(t){return Oa(t).then(e=>e.syncEngine)}function pk(t){return Oa(t).then(e=>e.datastore)}async function gk(t){const e=await Oa(t),n=e.eventManager;return n.onListen=jA.bind(null,e.syncEngine),n.onUnlisten=KA.bind(null,e.syncEngine),n}function mk(t,e,n={}){const s=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new ik({next:h=>{i.enqueueAndForget(()=>MA(r,u)),h.fromCache&&a.source==="server"?c.reject(new x(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new FA(o,l,{includeMetadataChanges:!0,Nu:!0});return PA(r,u)}(await gk(t),t.asyncQueue,e,n,s)),s.promise}class yk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Zm(this,"async_queue_retry"),this.Wc=()=>{const n=uc();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=uc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new sn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ii(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw ln("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Tu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&Y()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class ki extends Na{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new yk,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yy(this),this._firestoreClient.terminate()}}function vk(t,e){const n=typeof t=="object"?t:Ip(),s=typeof t=="string"?t:e||"(default)",r=Al(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=T_("firestore");i&&rk(r,...i)}return r}function ku(t){return t._firestoreClient||yy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yy(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new HS(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ck(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(it.fromBase64String(e))}catch(n){throw new x(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=/^__.*__$/;class _k{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Bn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ti(e,this.data,n,this.fieldTransforms)}}class vy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Bn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Du{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Uo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(wy(this.sa)&&wk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Ek{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ka(e)}da(e,n,s,r=!1){return new Du({sa:e,methodName:n,fa:s,path:et.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ma(t){const e=t._freezeSettings(),n=ka(t._databaseId);return new Ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bk(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Nu("Data must be an object, but it was:",o,s);const a=Ey(s,o);let c,l;if(i.merge)c=new bt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=nl(e,h,n);if(!o.contains(f))throw new x(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Iy(u,f)||u.push(f)}c=new bt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new _k(new dt(a),c,l)}class La extends Ru{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof La}}function Ik(t,e,n,s){const r=t.da(1,e,n);Nu("Data must be an object, but it was:",r,s);const i=[],o=dt.empty();bs(s,(c,l)=>{const u=Ou(e,c,n);l=$e(l);const h=r.ca(u);if(l instanceof La)i.push(u);else{const f=Ri(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new bt(i);return new vy(o,a,r.fieldTransforms)}function Tk(t,e,n,s,r,i){const o=t.da(1,e,n),a=[nl(e,s,n)],c=[r];if(i.length%2!=0)throw new x(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(nl(e,i[f])),c.push(i[f+1]);const l=[],u=dt.empty();for(let f=a.length-1;f>=0;--f)if(!Iy(l,a[f])){const g=a[f];let m=c[f];m=$e(m);const v=o.ca(g);if(m instanceof La)l.push(g);else{const C=Ri(m,v);C!=null&&(l.push(g),u.set(g,C))}}const h=new bt(l);return new vy(u,h,o.fieldTransforms)}function _y(t,e,n,s=!1){return Ri(n,t.da(s?4:3,e))}function Ri(t,e){if(by(t=$e(t)))return Nu("Unsupported field value:",e,t),Ey(t,e);if(t instanceof Ru)return function(n,s){if(!wy(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ri(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cC(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ve.fromDate(n);return{timestampValue:Mo(s.yt,r)}}if(n instanceof Ve){const r=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mo(s.yt,r)}}if(n instanceof xu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:Hm(s.yt,n._byteString)};if(n instanceof yt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:mu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Da(n)}`)}(t,e)}function Ey(t,e){const n={};return mm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(s,r)=>{const i=Ri(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function by(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof xu||t instanceof er||t instanceof yt||t instanceof Ru)}function Nu(t,e,n){if(!by(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Da(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function nl(t,e,n){if((e=$e(e))instanceof Pa)return e._internalPath;if(typeof e=="string")return Ou(t,e);throw Uo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sk=new RegExp("[~\\*/\\[\\]]");function Ou(t,e,n){if(e.search(Sk)>=0)throw Uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pa(...e.split("."))._internalPath}catch{throw Uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new x(_.INVALID_ARGUMENT,a+t+c)}function Iy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ck(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ck extends Pu{data(){return super.data()}}function Mu(t,e){return typeof e=="string"?Ou(t,e):e instanceof Pa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lu{}class xi extends Lu{}function Ki(t,e,...n){let s=[];e instanceof Lu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Fu).length,o=r.filter(a=>a instanceof Uu).length;if(i>1||i>0&&o>0)throw new x(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Uu extends xi{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Uu(e,n,s)}_apply(e){const n=this._parse(e);return Sy(e._query,n),new Qt(e.firestore,e.converter,Qc(e._query,n))}_parse(e){const n=Ma(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new x(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){od(u,l);const f=[];for(const g of u)f.push(id(a,r,g));h={arrayValue:{values:f}}}else h=id(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||od(u,l),h=_y(o,i,u,l==="in"||l==="not-in");return Fe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Fu extends Lu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Fu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Pt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Sy(i,a),i=Qc(i,a)}(e._query,n),new Qt(e.firestore,e.converter,Qc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $u extends xi{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $u(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Us(r,i);return function(a,c){if(du(a)===null){const l=Ia(a);l!==null&&Cy(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Qt(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Vn(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function hc(t,e="asc"){const n=e,s=Mu("orderBy",t);return $u._create(s,n)}class Ua extends xi{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Ua(e,n,s)}_apply(e){return new Qt(e.firestore,e.converter,No(e._query,this._limit,this._limitType))}}function rd(t){return gy("limit",t),Ua._create("limit",t,"F")}function kk(t){return gy("limitToLast",t),Ua._create("limitToLast",t,"L")}class Vu extends xi{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new Vu(e,n,s)}_apply(e){const n=Ty(e,this.type,this._docOrFields,this._inclusive);return new Qt(e.firestore,e.converter,function(s,r){return new Vn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function Rk(...t){return Vu._create("startAfter",t,!1)}class Bu extends xi{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new Bu(e,n,s)}_apply(e){const n=Ty(e,this.type,this._docOrFields,this._inclusive);return new Qt(e.firestore,e.converter,function(s,r){return new Vn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function xk(...t){return Bu._create("endBefore",t,!1)}function Ty(t,e,n,s){if(n[0]=$e(n[0]),n[0]instanceof Pu)return function(r,i,o,a,c){if(!a)throw new x(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of us(r))if(u.field.isKeyField())l.push(Do(i,a.key));else{const h=a.data.field(u.field);if(lu(h))throw new x(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new x(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(h)}return new Xs(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=Ma(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new x(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<l.length;g++){const m=l[g];if(h[g].field.isKeyField()){if(typeof m!="string")throw new x(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!pu(i)&&m.indexOf("/")!==-1)throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const v=i.path.child(Ce.fromString(m));if(!q.isDocumentKey(v))throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const C=new q(v);f.push(Do(o,C))}else{const v=_y(a,c,m);f.push(v)}}return new Xs(f,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function id(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new x(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pu(e)&&n.indexOf("/")!==-1)throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ce.fromString(n));if(!q.isDocumentKey(s))throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Do(t,new q(s))}if(n instanceof yt)return Do(t,n._key);throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Da(n)}.`)}function od(t,e){if(!Array.isArray(t)||t.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new x(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Sy(t,e){if(e.isInequality()){const s=Ia(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new x(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=du(t);i!==null&&Cy(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Cy(t,e,n){if(!n.isEqual(e))throw new x(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Dk{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return bs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new xu(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ym(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Jr(e));default:return null}}convertTimestamp(e){const n=Ln(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ce.fromString(e);_e(Ym(s));const r=new Xr(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||ln(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ok extends Pu{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Mu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class oo extends Ok{data(e={}){return super.data(e)}}class Pk{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new zi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new oo(this._firestore,this._userDataWriter,s.key,s,new zi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new oo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new oo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Mk(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class Ay extends Dk{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function Gn(t){t=ws(t,Qt);const e=ws(t.firestore,ki),n=ku(e),s=new Ay(e);return Ak(t._query),mk(n,t._query).then(r=>new Pk(e,s,t,r))}function Lk(t,e,n,...s){t=ws(t,yt);const r=ws(t.firestore,ki),i=Ma(r);let o;return o=typeof(e=$e(e))=="string"||e instanceof Pa?Tk(i,"updateDoc",t._key,e,n,s):Ik(i,"updateDoc",t._key,e),ky(r,[o.toMutation(t._key,Ht.exists(!0))])}function Uk(t,e){const n=ws(t.firestore,ki),s=my(t),r=Nk(t.converter,e);return ky(n,[bk(Ma(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ht.exists(!1))]).then(()=>s)}function ky(t,e){return function(n,s){const r=new sn;return n.asyncQueue.enqueueAndForget(async()=>zA(await dk(n),s,r)),r.promise}(ku(t),e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){const e=ws(t.firestore,ki);return function(n,s,r){const i=new sn;return n.asyncQueue.enqueueAndForget(async()=>{try{if(qn(await fk(n))){const o=await pk(n),a=new ak(s,o,r).run();i.resolve(a)}else i.reject(new x(_.UNAVAILABLE,"Failed to get count result because the client is offline."))}catch(o){i.reject(o)}}),i.promise}(ku(e),t,new Ay(e))}(function(t,e=!0){(function(n){cr=n})(oi),qs(new ds("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ki(new NS(n.getProvider("auth-internal")),new LS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Dn(kf,"3.8.0",t),Dn(kf,"3.8.0","esm2017")})();var Fk="firebase",$k="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(Fk,$k,"app");const Vk={apiKey:"AIzaSyBPnzJl51KS8A9-UYUHbhPk9ypdKMMIAdg",authDomain:"vue-movie-9c01a.firebaseapp.com",projectId:"vue-movie-9c01a",storageBucket:"vue-movie-9c01a.appspot.com",messagingSenderId:"105392285343",appId:"1:105392285343:web:aaaaf93b78045ab074a4aa"},Ry=bp(Vk),wn=vk(Ry),Bk=jr(Ry);const qk=t=>(Go("data-v-c80c2693"),t=t(),Qo(),t),jk={class:"flex flex-col py-3 px-4 border-b border-tweetbor border-solid"},Hk={class:"flex relative mt-1"},Kk={class:"w-12 h-12 absolute top-3 left-0"},zk=["src"],Wk={class:"flex flex-col w-full mt-1 pl-20 text-white"},Gk={class:"block mb-2"},Qk={class:"max-w-6xl"},Yk=qk(()=>F("div",{class:"flex items-center justify-center w-10 h-10"},[F("svg",{class:"hover:fill-[red] hover:border-[red]",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"},[F("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})])],-1)),Xk={class:"pl-1"},Jk={__name:"Tweet",props:{item:Object},emits:["toggleLikes"],setup(t){const e=t,n=le(e.item.likes);return Er(n,async s=>{const r=my(wn,"tweets",e.item.id);await Lk(r,{likes:s})}),(s,r)=>(de(),Oe("li",jk,[F("div",Hk,[F("div",Kk,[F("img",{src:t.item.avatar},null,8,zk)]),F("div",Wk,[F("div",Gk,[F("span",null,gt(t.item.date),1)]),F("div",Qk,gt(t.item.body),1),F("div",{class:"flex items-center max-w-[15px] cursor-pointer",onClick:r[0]||(r[0]=i=>n.value++)},[Yk,F("span",Xk,gt(n.value),1)])])])]))}},Zk=_s(Jk,[["__scopeId","data-v-c80c2693"]]),e1=F("option",{class:"rounded-md",value:"date"}," Sort by date ",-1),t1=F("option",{class:"rounded-md",value:"likes"}," Sort by like ",-1),n1=[e1,t1],s1={__name:"TweetList",props:{items:{type:Array,reqired:!0}},setup(t){const e=t,n=le("likes"),s=ft(()=>[...e.items].sort((i,o)=>{if(i[n.value]>o[n.value])return-1;if(i[n.value]<o[n.value])return 1}));return(r,i)=>(de(),Oe(at,null,[kn(F("select",{"onUpdate:modelValue":i[0]||(i[0]=o=>n.value=o),class:"w-48 my-6 rounded-md h-8 bg-lightgray text-white sm:w-40 xs:w-40"},n1,512),[[i_,n.value]]),(de(!0),Oe(at,null,Gd(Bt(s),o=>(de(),on(Zk,{key:o.id,item:o},null,8,["item"]))),128))],64))}};const xy=t=>(Go("data-v-0507d7e9"),t=t(),Qo(),t),r1={class:"container pt-14 px-4"},i1=xy(()=>F("h1",{class:"pt-8 text-center text-white text-3xl"}," Forum ",-1)),o1=xy(()=>F("button",{class:"text-white w-1/6 inline-block bg-green rounded-lg h-10 mt-4 tweetbtn duration-300 md:w-1/4 sm:w-2/6 xs:w-1/4",type:"submit"}," Post ",-1)),a1={key:0,class:"flex items-center justify-center text-white gap-8 mt-5 pb-5 text-xl sm:text-base xs:text-base"},c1={__name:"Forum",setup(t){const e=le([]),n=le(""),s=le(""),r=le(5),i=le(""),o=le(1),a=le(""),c=le(""),l=le(!1),u=le(!1),h=le(!1),f=le(!1),g=()=>{Uk(Wn(wn,"tweets"),{avatar:`https://avatars.dicebear.com/api/male/${Date.now()}.svg`,body:n.value,likes:0,date:new Date(Date.now()).toLocaleString()}),n.value=""},m=async()=>{const re=Ki(Wn(wn,"tweets")),Q=(await Gn(re)).docs.length;s.value=Q,i.value=Math.ceil(s.value/r.value)},v=async()=>{u.value=!0,h.value=!1,f.value=!1;const re=Ki(Wn(wn,"tweets"),hc("date"),rd(r.value));m();const L=await Gn(re),Q=L.docs[L.docs.length-1]||null,se=L.docs[0]||null;a.value=Q,c.value=se;const be=await Gn(re),U=[];be.forEach(Z=>{let xe={id:Z.id,avatar:Z.data().avatar,body:Z.data().body,likes:Z.data().likes,date:Z.data().date};U.push(xe)}),e.value=U,u.value=!1,h.value=!0,f.value=!0},C=async()=>{u.value=!0,h.value=!1,f.value=!1;const re=Ki(Wn(wn,"tweets"),hc("date"),rd(r.value),Rk(a.value)),L=await Gn(re),Q=L.docs[L.docs.length-1]||null;a.value=Q;const se=L.docs[0]||null;c.value=se,o.value=o.value+1;const be=[];(await Gn(re)).forEach(Z=>{let xe={id:Z.id,avatar:Z.data().avatar,body:Z.data().body,likes:Z.data().likes,date:Z.data().date};be.push(xe)}),e.value=be,u.value=!1,h.value=!0,f.value=!0,Ee()},A=async()=>{u.value=!0,h.value=!1,f.value=!1;const re=Ki(Wn(wn,"tweets"),hc("date"),kk(r.value),xk(c.value)),L=await Gn(re),Q=L.docs[L.docs.length-1]||null;a.value=Q;const se=L.docs[0]||null;c.value=se,o.value=o.value-1;const be=[];(await Gn(re)).forEach(Z=>{let xe={id:Z.id,avatar:Z.data().avatar,body:Z.data().body,likes:Z.data().likes,date:Z.data().date};be.push(xe)}),e.value=be,u.value=!1,h.value=!0,f.value=!0,Ee()},N=le();(async()=>{const re=Wn(wn,"tweets"),Q=(await ad(re)).data().count,se=Math.ceil(Q/5);N.value=se})();const W=le();(async()=>{const re=Wn(wn,"tweets"),Q=(await ad(re)).data().count,se=Math.floor(Q/5);W.value=se})();const Ee=()=>{window.scrollTo({top:0,behavior:"smooth"})};return wl(()=>{v()}),(re,L)=>(de(),Oe("div",r1,[i1,F("div",null,[F("form",{class:"flex flex-col pt-6",onSubmit:L[1]||(L[1]=pp(Q=>g(),["prevent"]))},[kn(F("textarea",{"onUpdate:modelValue":L[0]||(L[0]=Q=>n.value=Q),required:"",placeholder:"Write your tweet...",class:"placeholder:text-white w-full h-28 bg-lightgray rounded-lg resize-none p-4 md:w-full sm:w-full"},null,512),[[as,n.value]]),o1],32),ke(ta,{name:"fade",mode:"out-in"},{default:Dt(()=>[u.value?(de(),on(AT,{key:0,class:"spinner"})):ct("",!0)]),_:1}),ke(Zw,{tag:"ul",name:"fade"},{default:Dt(()=>[h.value?(de(),on(s1,{key:0,items:e.value},null,8,["items"])):ct("",!0)]),_:1}),f.value?(de(),Oe("div",a1,[o.value!==1||l.value?(de(),Oe("button",{key:0,onClick:L[2]||(L[2]=Q=>A())}," ← Previous ")):ct("",!0),N.value!==o.value||l.value?(de(),Oe("button",{key:1,onClick:L[3]||(L[3]=Q=>C())}," Next → ")):ct("",!0)])):ct("",!0)])]))}},l1=_s(c1,[["__scopeId","data-v-0507d7e9"]]);const u1={},h1=t=>(Go("data-v-de0ea056"),t=t(),Qo(),t),f1={class:"searchbtn w-1/3 max-w-xs flex items-center justify-center bg-green p-1 rounded-lg text-white text-xl uppercase duration-300 active:bg-darkgreen mt-2"},d1=h1(()=>F("img",{class:"spinner",src:hg,alt:""},null,-1)),p1=[d1];function g1(t,e){return de(),Oe("button",f1,p1)}const Dy=_s(u1,[["render",g1],["__scopeId","data-v-de0ea056"]]),Ny={mounted:t=>{t.focus()}},m1={class:"w-full h-screen"},y1={class:"flex justify-center items-center flex-col h-full"},v1={class:"h-3/4 w-2/5 flex flex-col justify-center items-center gap-y-5 bg-logreg rounded-xl md:w-3/5 sm:w-3/5 xs:w-4/5 xs:h-3/5"},w1=F("h1",{class:"text-center text-white text-2xl"}," Register ",-1),_1={class:"text-white sm:text-center xs:text-sm xs:text-center"},E1={__name:"Register",setup(t){const e=$l(),n=le(""),s=le(""),r=le(""),i=le(!1),o=le(!0),a=async()=>{i.value=!0,o.value=!1;try{if(r.value==="")alert("Enter your name");else{await S0(jr(),n.value,s.value);const c=jr();await k0(c.currentUser,{displayName:r.value}),e.push("/")}}catch(c){alert(`Error:${c}`)}finally{i.value=!1,o.value=!0}};return(c,l)=>{const u=fs("routerLink"),h=fs("router-link");return de(),Oe("div",m1,[F("div",y1,[F("div",v1,[ke(u,{class:"text-center text-white text-sm font-thin hover:underline",to:"/"},{default:Dt(()=>[nn(" < Back to home ")]),_:1}),w1,kn(F("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>r.value=f),required:"",class:"px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white",placeholder:"Enter your name...",type:"text"},null,512),[[as,r.value],[Bt(Ny)]]),kn(F("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>n.value=f),class:"px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white",placeholder:"Enter email...",type:"text"},null,512),[[as,n.value]]),kn(F("input",{"onUpdate:modelValue":l[2]||(l[2]=f=>s.value=f),class:"px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white",placeholder:"Enter password...",type:"password"},null,512),[[as,s.value]]),o.value?(de(),Oe("button",{key:0,class:"searchbtn w-1/3 max-w-xs bg-green p-1 rounded-lg text-white text-xl uppercase duration-300 active:bg-darkgreen mt-2 md:text-lg sm:text-sm xs:text-sm",onClick:a}," Submit ")):ct("",!0),i.value?(de(),on(Dy,{key:1})):ct("",!0),F("p",_1,[nn(" If you have already account just "),ke(h,{class:"text-green font-semibold",to:"/login"},{default:Dt(()=>[nn(" Login ")]),_:1})])])])])}}},b1={class:"w-full h-screen"},I1={class:"flex justify-center items-center flex-col h-full"},T1={class:"h-4/6 w-2/5 flex flex-col justify-center items-center gap-y-5 bg-logreg rounded-xl md:w-3/5 sm:w-3/5 xs:w-4/5 xs:h-3/5"},S1=F("h1",{class:"text-center text-white text-2xl"}," Login ",-1),C1={key:0,class:"text-[#ea3d4f]"},A1={class:"text-white xs:text-sm xs:text-center"},k1={__name:"Login",setup(t){const e=$l(),n=le(""),s=le(""),r=le(""),i=le(!1),o=le(!0),a=()=>{const c=jr();i.value=!0,o.value=!1,C0(c,n.value,s.value).then(()=>{e.push("/")}).catch(l=>{switch(l.code){case"auth/invalid-email":r.value="Invalid email";break;case"auth/user-not-found":r.value="No account with this email was found";break;case"auth/wrong-password":r.value="Wrong-password";break;default:r.value="Email or password was incorect";break}}).then(()=>{i.value=!1,o.value=!0})};return(c,l)=>{const u=fs("routerLink"),h=fs("router-link");return de(),Oe("div",b1,[F("div",I1,[F("div",T1,[ke(u,{class:"text-center text-white text-sm font-thin hover:underline",to:"/"},{default:Dt(()=>[nn(" < Back to home ")]),_:1}),S1,kn(F("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>n.value=f),class:"px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white",placeholder:"Enter email...",type:"text"},null,512),[[as,n.value],[Bt(Ny)]]),kn(F("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>s.value=f),class:"px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white",placeholder:"Enter password...",type:"password"},null,512),[[as,s.value]]),r.value?(de(),Oe("p",C1,gt(r.value),1)):ct("",!0),o.value?(de(),Oe("button",{key:1,class:"searchbtn w-1/3 max-w-xs bg-green p-1 rounded-lg text-white text-xl uppercase duration-300 active:bg-darkgreen mt-2 md:text-lg sm:text-base xs:text-base xs:w-1/3",onClick:a}," Submit ")):ct("",!0),i.value?(de(),on(Dy,{key:2})):ct("",!0),F("p",A1,[nn(" If you don`t have account just "),ke(h,{class:"text-green font-semibold",to:"/register"},{default:Dt(()=>[nn(" Register ")]),_:1})])])])])}}},Fo=WI({history:lI("https://tarasishe.github.io/Vue-movie/"),routes:[{path:"/",name:"home",component:dT},{path:"/forum",name:"Forum",component:l1,meta:{requiresAuth:!0}},{path:"/movie/:id",name:"Movie Detail",component:IT},{path:"/register",name:"Register",component:E1},{path:"/login",name:"Login",component:k1}]});Fo.beforeEach((t,e,n)=>{if(t.matched.some(s=>s.meta.requiresAuth)&&!Bk.currentUser){n("/login");return}else n()});const R1={class:"bg-header w-full h-14 fixed z-10 px-4"},x1={class:"container"},D1={class:"flex py-4 justify-between items-center"},N1={class:"flex gap-6 text-white"},O1={class:"flex gap-6 text-white"},P1={class:"italic"},M1={__name:"Header",setup(t){const e=le(!1),n=le("");let s;s=jr(),D0(s,o=>{o?(e.value=!0,n.value=o.displayName):(e.value=!1,n.value=null)});const r=()=>{Fo.push("/login")},i=()=>{N0(s).then(()=>{Fo.push("/login")})};return(o,a)=>{const c=fs("router-link");return de(),Oe("nav",R1,[F("div",x1,[F("div",D1,[F("div",null,[F("ul",N1,[F("li",null,[ke(c,{to:"/"},{default:Dt(()=>[nn(" Home ")]),_:1})]),F("li",null,[ke(c,{to:"/forum"},{default:Dt(()=>[nn(" Forum ")]),_:1})])])]),F("div",O1,[F("p",P1,gt(n.value),1),e.value?ct("",!0):(de(),Oe("button",{key:0,class:"btn",onClick:a[0]||(a[0]=l=>r())}," Sign in ")),e.value?(de(),Oe("button",{key:1,class:"btn",onClick:i}," Logout ")):ct("",!0)])])])])}}},L1=_s(M1,[["__scopeId","data-v-eb02c2e8"]]),U1={__name:"App",setup(t){const e=le(!0),n=$l(),s=ft(()=>n.currentRoute.value.path!=="/login"&&n.currentRoute.value.path!=="/register");return(r,i)=>{const o=fs("RouterView");return de(),Oe(at,null,[Bt(s)&&e.value?(de(),on(L1,{key:0})):ct("",!0),ke(ta,{name:"fade",mode:"out-in"},{default:Dt(()=>[ke(o)]),_:1})],64)}}};const Oy=u_(U1);Oy.use(Fo);Oy.mount("#app");
