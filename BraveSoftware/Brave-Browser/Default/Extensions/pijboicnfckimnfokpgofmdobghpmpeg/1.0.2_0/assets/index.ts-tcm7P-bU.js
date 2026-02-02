import{A as Wt,T as qt,a as zt,b as Gt,c as Jt,d as Yt,S as Qt}from"./TrexAnchorApiProxy-BplFWDBp.js";import{g as pe,a as Xt}from"./api-CJSKnqK3.js";import{E as De}from"./actions-CDg_QFWJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Zt=()=>{};var Me={};/**
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
 */const et=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},en=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[n++];t[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=e[n++],i=e[n++],c=e[n++],u=((o&7)<<18|(s&63)<<12|(i&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],i=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|i&63)}}return t.join("")},tt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const s=e[o],i=o+1<e.length,c=i?e[o+1]:0,u=o+2<e.length,a=u?e[o+2]:0,S=s>>2,B=(s&3)<<4|c>>4;let H=(c&15)<<2|a>>6,j=a&63;u||(j=64,i||(H=64)),r.push(n[S],n[B],n[H],n[j])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(et(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):en(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const s=n[e.charAt(o++)],c=o<e.length?n[e.charAt(o)]:0;++o;const a=o<e.length?n[e.charAt(o)]:64;++o;const B=o<e.length?n[e.charAt(o)]:64;if(++o,s==null||c==null||a==null||B==null)throw new tn;const H=s<<2|c>>4;if(r.push(H),a!==64){const j=c<<4&240|a>>2;if(r.push(j),B!==64){const Vt=a<<6&192|B;r.push(Vt)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class tn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nn=function(e){const t=et(e);return tt.encodeByteArray(t,!0)},nt=function(e){return nn(e).replace(/\./g,"")},rn=function(e){try{return tt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function on(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sn=()=>on().__FIREBASE_DEFAULTS__,an=()=>{if(typeof process>"u"||typeof Me>"u")return;const e=Me.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},cn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&rn(e[1]);return t&&JSON.parse(t)},un=()=>{try{return Zt()||sn()||an()||cn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},rt=()=>{var e;return(e=un())==null?void 0:e.config};/**
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
 */class dn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function ot(){try{return typeof indexedDB=="object"}catch{return!1}}function st(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;t(((s=o.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const fn="FirebaseError";class O extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=fn,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,s=this.errors[t],i=s?ln(s,r):"Error",c=`${this.serviceName}: ${i} (${o}).`;return new O(o,c,r)}}function ln(e,t){return e.replace(pn,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const pn=/\{\$([^}]+)}/g;function ie(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const s=e[o],i=t[o];if(Oe(s)&&Oe(i)){if(!ie(s,i))return!1}else if(s!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Oe(e){return e!==null&&typeof e=="object"}/**
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
 */function it(e){return e&&e._delegate?e._delegate:e}class y{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const k="[DEFAULT]";/**
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
 */class hn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new dn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mn(t))try{this.getOrInitializeService({instanceIdentifier:k})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(t=k){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=k){return this.instances.has(t)}getOptions(t=k){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&i.resolve(o)}return o}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(t),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&t(s,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=k){return this.component?this.component.multipleInstances?t:k:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gn(e){return e===k?void 0:e}function mn(e){return e.instantiationMode==="EAGER"}/**
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
 */class bn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var d;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(d||(d={}));const wn={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},yn=d.INFO,In={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},En=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=In[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tn{constructor(t){this.name=t,this._logLevel=yn,this._logHandler=En,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in d))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...t),this._logHandler(this,d.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...t),this._logHandler(this,d.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,d.INFO,...t),this._logHandler(this,d.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,d.WARN,...t),this._logHandler(this,d.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...t),this._logHandler(this,d.ERROR,...t)}}const _n=(e,t)=>t.some(n=>e instanceof n);let Ne,Be;function Sn(){return Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kn(){return Be||(Be=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const at=new WeakMap,ae=new WeakMap,ct=new WeakMap,G=new WeakMap,he=new WeakMap;function An(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{n(w(e.result)),o()},i=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&at.set(n,e)}).catch(()=>{}),he.set(t,e),t}function vn(e){if(ae.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{n(),o()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});ae.set(e,t)}let ce={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ae.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ct.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Cn(e){ce=e(ce)}function Dn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(J(this),t,...n);return ct.set(r,t.sort?t.sort():[t]),w(r)}:kn().includes(e)?function(...t){return e.apply(J(this),t),w(at.get(this))}:function(...t){return w(e.apply(J(this),t))}}function Mn(e){return typeof e=="function"?Dn(e):(e instanceof IDBTransaction&&vn(e),_n(e,Sn())?new Proxy(e,ce):e)}function w(e){if(e instanceof IDBRequest)return An(e);if(G.has(e))return G.get(e);const t=Mn(e);return t!==e&&(G.set(e,t),he.set(t,e)),t}const J=e=>he.get(e);function N(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const i=indexedDB.open(e,t),c=w(i);return r&&i.addEventListener("upgradeneeded",u=>{r(w(i.result),u.oldVersion,u.newVersion,w(i.transaction),u)}),n&&i.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),o&&u.addEventListener("versionchange",a=>o(a.oldVersion,a.newVersion,a))}).catch(()=>{}),c}function M(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),w(n).then(()=>{})}const On=["get","getKey","getAll","getAllKeys","count"],Nn=["put","add","delete","clear"],Y=new Map;function $e(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Y.get(t))return Y.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Nn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||On.includes(n)))return;const s=async function(i,...c){const u=this.transaction(i,o?"readwrite":"readonly");let a=u.store;return r&&(a=a.index(c.shift())),(await Promise.all([a[n](...c),o&&u.done]))[0]};return Y.set(t,s),s}Cn(e=>({...e,get:(t,n,r)=>$e(t,n)||e.get(t,n,r),has:(t,n)=>!!$e(t,n)||e.has(t,n)}));/**
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
 */class Bn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($n(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $n(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ue="@firebase/app",Re="0.14.6";/**
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
 */const I=new Tn("@firebase/app"),Rn="@firebase/app-compat",Ln="@firebase/analytics-compat",Pn="@firebase/analytics",xn="@firebase/app-check-compat",Fn="@firebase/app-check",Hn="@firebase/auth",jn="@firebase/auth-compat",Kn="@firebase/database",Un="@firebase/data-connect",Vn="@firebase/database-compat",Wn="@firebase/functions",qn="@firebase/functions-compat",zn="@firebase/installations",Gn="@firebase/installations-compat",Jn="@firebase/messaging",Yn="@firebase/messaging-compat",Qn="@firebase/performance",Xn="@firebase/performance-compat",Zn="@firebase/remote-config",er="@firebase/remote-config-compat",tr="@firebase/storage",nr="@firebase/storage-compat",rr="@firebase/firestore",or="@firebase/ai",sr="@firebase/firestore-compat",ir="firebase";/**
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
 */const de="[DEFAULT]",ar={[ue]:"fire-core",[Rn]:"fire-core-compat",[Pn]:"fire-analytics",[Ln]:"fire-analytics-compat",[Fn]:"fire-app-check",[xn]:"fire-app-check-compat",[Hn]:"fire-auth",[jn]:"fire-auth-compat",[Kn]:"fire-rtdb",[Un]:"fire-data-connect",[Vn]:"fire-rtdb-compat",[Wn]:"fire-fn",[qn]:"fire-fn-compat",[zn]:"fire-iid",[Gn]:"fire-iid-compat",[Jn]:"fire-fcm",[Yn]:"fire-fcm-compat",[Qn]:"fire-perf",[Xn]:"fire-perf-compat",[Zn]:"fire-rc",[er]:"fire-rc-compat",[tr]:"fire-gcs",[nr]:"fire-gcs-compat",[rr]:"fire-fst",[sr]:"fire-fst-compat",[or]:"fire-vertex","fire-js":"fire-js",[ir]:"fire-js-all"};/**
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
 */const R=new Map,cr=new Map,fe=new Map;function Le(e,t){try{e.container.addComponent(t)}catch(n){I.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _(e){const t=e.name;if(fe.has(t))return I.debug(`There were multiple attempts to register component ${t}.`),!1;fe.set(t,e);for(const n of R.values())Le(n,e);for(const n of cr.values())Le(n,e);return!0}function ge(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ur={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},E=new F("app","Firebase",ur);/**
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
 */class dr{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}}function ut(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:de,automaticDataCollectionEnabled:!0,...t},o=r.name;if(typeof o!="string"||!o)throw E.create("bad-app-name",{appName:String(o)});if(n||(n=rt()),!n)throw E.create("no-options");const s=R.get(o);if(s){if(ie(n,s.options)&&ie(r,s.config))return s;throw E.create("duplicate-app",{appName:o})}const i=new bn(o);for(const u of fe.values())i.addComponent(u);const c=new dr(n,r,i);return R.set(o,c),c}function fr(e=de){const t=R.get(e);if(!t&&e===de&&rt())return ut();if(!t)throw E.create("no-app",{appName:e});return t}function lr(){return Array.from(R.values())}function T(e,t,n){let r=ar[e]??e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const i=[`Unable to register library "${r}" with version "${t}":`];o&&i.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&i.push("and"),s&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),I.warn(i.join(" "));return}_(new y(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const pr="firebase-heartbeat-database",hr=1,L="firebase-heartbeat-store";let Q=null;function dt(){return Q||(Q=N(pr,hr,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(L)}catch(n){console.warn(n)}}}}).catch(e=>{throw E.create("idb-open",{originalErrorMessage:e.message})})),Q}async function gr(e){try{const n=(await dt()).transaction(L),r=await n.objectStore(L).get(ft(e));return await n.done,r}catch(t){if(t instanceof O)I.warn(t.message);else{const n=E.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});I.warn(n.message)}}}async function Pe(e,t){try{const r=(await dt()).transaction(L,"readwrite");await r.objectStore(L).put(t,ft(e)),await r.done}catch(n){if(n instanceof O)I.warn(n.message);else{const r=E.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});I.warn(r.message)}}}function ft(e){return`${e.name}!${e.options.appId}`}/**
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
 */const mr=1024,br=30;class wr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ir(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xe();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats.length>br){const i=Er(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){I.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xe(),{heartbeatsToSend:r,unsentEntries:o}=yr(this._heartbeatsCache.heartbeats),s=nt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return I.warn(n),""}}}function xe(){return new Date().toISOString().substring(0,10)}function yr(e,t=mr){const n=[];let r=e.slice();for(const o of e){const s=n.find(i=>i.agent===o.agent);if(s){if(s.dates.push(o.date),Fe(n)>t){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Fe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ir{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ot()?st().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Pe(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Pe(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Fe(e){return nt(JSON.stringify({version:2,heartbeats:e})).length}function Er(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function Tr(e){_(new y("platform-logger",t=>new Bn(t),"PRIVATE")),_(new y("heartbeat",t=>new wr(t),"PRIVATE")),T(ue,Re,e),T(ue,Re,"esm2020"),T("fire-js","")}Tr("");const lt="@firebase/installations",me="0.6.19";/**
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
 */const pt=1e4,ht=`w:${me}`,gt="FIS_v2",_r="https://firebaseinstallations.googleapis.com/v1",Sr=60*60*1e3,kr="installations",Ar="Installations";/**
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
 */const vr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},v=new F(kr,Ar,vr);function mt(e){return e instanceof O&&e.code.includes("request-failed")}/**
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
 */function bt({projectId:e}){return`${_r}/projects/${e}/installations`}function wt(e){return{token:e.token,requestStatus:2,expiresIn:Dr(e.expiresIn),creationTime:Date.now()}}async function yt(e,t){const r=(await t.json()).error;return v.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function It({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Cr(e,{refreshToken:t}){const n=It(e);return n.append("Authorization",Mr(t)),n}async function Et(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Dr(e){return Number(e.replace("s","000"))}function Mr(e){return`${gt} ${e}`}/**
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
 */async function Or({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=bt(e),o=It(e),s=t.getImmediate({optional:!0});if(s){const a=await s.getHeartbeatsHeader();a&&o.append("x-firebase-client",a)}const i={fid:n,authVersion:gt,appId:e.appId,sdkVersion:ht},c={method:"POST",headers:o,body:JSON.stringify(i)},u=await Et(()=>fetch(r,c));if(u.ok){const a=await u.json();return{fid:a.fid||n,registrationStatus:2,refreshToken:a.refreshToken,authToken:wt(a.authToken)}}else throw await yt("Create Installation",u)}/**
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
 */function Tt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Nr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Br=/^[cdef][\w-]{21}$/,le="";function $r(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Rr(e);return Br.test(n)?n:le}catch{return le}}function Rr(e){return Nr(e).substr(0,22)}/**
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
 */function q(e){return`${e.appName}!${e.appId}`}/**
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
 */const _t=new Map;function St(e,t){const n=q(e);kt(n,t),Lr(n,t)}function kt(e,t){const n=_t.get(e);if(n)for(const r of n)r(t)}function Lr(e,t){const n=Pr();n&&n.postMessage({key:e,fid:t}),xr()}let A=null;function Pr(){return!A&&"BroadcastChannel"in self&&(A=new BroadcastChannel("[Firebase] FID Change"),A.onmessage=e=>{kt(e.data.key,e.data.fid)}),A}function xr(){_t.size===0&&A&&(A.close(),A=null)}/**
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
 */const Fr="firebase-installations-database",Hr=1,C="firebase-installations-store";let X=null;function be(){return X||(X=N(Fr,Hr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(C)}}})),X}async function U(e,t){const n=q(e),o=(await be()).transaction(C,"readwrite"),s=o.objectStore(C),i=await s.get(n);return await s.put(t,n),await o.done,(!i||i.fid!==t.fid)&&St(e,t.fid),t}async function At(e){const t=q(e),r=(await be()).transaction(C,"readwrite");await r.objectStore(C).delete(t),await r.done}async function z(e,t){const n=q(e),o=(await be()).transaction(C,"readwrite"),s=o.objectStore(C),i=await s.get(n),c=t(i);return c===void 0?await s.delete(n):await s.put(c,n),await o.done,c&&(!i||i.fid!==c.fid)&&St(e,c.fid),c}/**
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
 */async function we(e){let t;const n=await z(e.appConfig,r=>{const o=jr(r),s=Kr(e,o);return t=s.registrationPromise,s.installationEntry});return n.fid===le?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function jr(e){const t=e||{fid:$r(),registrationStatus:0};return vt(t)}function Kr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(v.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ur(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Vr(e)}:{installationEntry:t}}async function Ur(e,t){try{const n=await Or(e,t);return U(e.appConfig,n)}catch(n){throw mt(n)&&n.customData.serverCode===409?await At(e.appConfig):await U(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Vr(e){let t=await He(e.appConfig);for(;t.registrationStatus===1;)await Tt(100),t=await He(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await we(e);return r||n}return t}function He(e){return z(e,t=>{if(!t)throw v.create("installation-not-found");return vt(t)})}function vt(e){return Wr(e)?{fid:e.fid,registrationStatus:0}:e}function Wr(e){return e.registrationStatus===1&&e.registrationTime+pt<Date.now()}/**
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
 */async function qr({appConfig:e,heartbeatServiceProvider:t},n){const r=zr(e,n),o=Cr(e,n),s=t.getImmediate({optional:!0});if(s){const a=await s.getHeartbeatsHeader();a&&o.append("x-firebase-client",a)}const i={installation:{sdkVersion:ht,appId:e.appId}},c={method:"POST",headers:o,body:JSON.stringify(i)},u=await Et(()=>fetch(r,c));if(u.ok){const a=await u.json();return wt(a)}else throw await yt("Generate Auth Token",u)}function zr(e,{fid:t}){return`${bt(e)}/${t}/authTokens:generate`}/**
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
 */async function ye(e,t=!1){let n;const r=await z(e.appConfig,s=>{if(!Ct(s))throw v.create("not-registered");const i=s.authToken;if(!t&&Yr(i))return s;if(i.requestStatus===1)return n=Gr(e,t),s;{if(!navigator.onLine)throw v.create("app-offline");const c=Xr(s);return n=Jr(e,c),c}});return n?await n:r.authToken}async function Gr(e,t){let n=await je(e.appConfig);for(;n.authToken.requestStatus===1;)await Tt(100),n=await je(e.appConfig);const r=n.authToken;return r.requestStatus===0?ye(e,t):r}function je(e){return z(e,t=>{if(!Ct(t))throw v.create("not-registered");const n=t.authToken;return Zr(n)?{...t,authToken:{requestStatus:0}}:t})}async function Jr(e,t){try{const n=await qr(e,t),r={...t,authToken:n};return await U(e.appConfig,r),n}catch(n){if(mt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await At(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await U(e.appConfig,r)}throw n}}function Ct(e){return e!==void 0&&e.registrationStatus===2}function Yr(e){return e.requestStatus===2&&!Qr(e)}function Qr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Sr}function Xr(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Zr(e){return e.requestStatus===1&&e.requestTime+pt<Date.now()}/**
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
 */async function eo(e){const t=e,{installationEntry:n,registrationPromise:r}=await we(t);return r?r.catch(console.error):ye(t).catch(console.error),n.fid}/**
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
 */async function to(e,t=!1){const n=e;return await no(n),(await ye(n,t)).token}async function no(e){const{registrationPromise:t}=await we(e);t&&await t}/**
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
 */function ro(e){if(!e||!e.options)throw Z("App Configuration");if(!e.name)throw Z("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Z(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Z(e){return v.create("missing-app-config-values",{valueName:e})}/**
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
 */const Dt="installations",oo="installations-internal",so=e=>{const t=e.getProvider("app").getImmediate(),n=ro(t),r=ge(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},io=e=>{const t=e.getProvider("app").getImmediate(),n=ge(t,Dt).getImmediate();return{getId:()=>eo(n),getToken:o=>to(n,o)}};function ao(){_(new y(Dt,so,"PUBLIC")),_(new y(oo,io,"PRIVATE"))}ao();T(lt,me);T(lt,me,"esm2020");/**
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
 */const Mt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",co="https://fcmregistrations.googleapis.com/v1",Ot="FCM_MSG",uo="google.c.a.c_id",fo=3,lo=1;var V;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(V||(V={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var W;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(W||(W={}));/**
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
 */function m(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function po(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let s=0;s<r.length;++s)o[s]=r.charCodeAt(s);return o}/**
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
 */const ee="fcm_token_details_db",ho=5,Ke="fcm_token_object_Store";async function go(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(ee))return null;let t=null;return(await N(ee,ho,{upgrade:async(r,o,s,i)=>{if(o<2||!r.objectStoreNames.contains(Ke))return;const c=i.objectStore(Ke),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(o===2){const a=u;if(!a.auth||!a.p256dh||!a.endpoint)return;t={token:a.fcmToken,createTime:a.createTime??Date.now(),subscriptionOptions:{auth:a.auth,p256dh:a.p256dh,endpoint:a.endpoint,swScope:a.swScope,vapidKey:typeof a.vapidKey=="string"?a.vapidKey:m(a.vapidKey)}}}else if(o===3){const a=u;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:m(a.auth),p256dh:m(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:m(a.vapidKey)}}}else if(o===4){const a=u;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:m(a.auth),p256dh:m(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:m(a.vapidKey)}}}}}})).close(),await M(ee),await M("fcm_vapid_details_db"),await M("undefined"),mo(t)?t:null}function mo(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const bo="firebase-messaging-database",wo=1,D="firebase-messaging-store";let te=null;function Ie(){return te||(te=N(bo,wo,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(D)}}})),te}async function Ee(e){const t=_e(e),r=await(await Ie()).transaction(D).objectStore(D).get(t);if(r)return r;{const o=await go(e.appConfig.senderId);if(o)return await Te(e,o),o}}async function Te(e,t){const n=_e(e),o=(await Ie()).transaction(D,"readwrite");return await o.objectStore(D).put(t,n),await o.done,t}async function yo(e){const t=_e(e),r=(await Ie()).transaction(D,"readwrite");await r.objectStore(D).delete(t),await r.done}function _e({appConfig:e}){return e.appId}/**
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
 */const Io={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},p=new F("messaging","Messaging",Io);/**
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
 */async function Eo(e,t){const n=await ke(e),r=Bt(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Se(e.appConfig),o)).json()}catch(i){throw p.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw p.create("token-subscribe-failed",{errorInfo:i})}if(!s.token)throw p.create("token-subscribe-no-token");return s.token}async function To(e,t){const n=await ke(e),r=Bt(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Se(e.appConfig)}/${t.token}`,o)).json()}catch(i){throw p.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw p.create("token-update-failed",{errorInfo:i})}if(!s.token)throw p.create("token-update-no-token");return s.token}async function Nt(e,t){const r={method:"DELETE",headers:await ke(e)};try{const s=await(await fetch(`${Se(e.appConfig)}/${t}`,r)).json();if(s.error){const i=s.error.message;throw p.create("token-unsubscribe-failed",{errorInfo:i})}}catch(o){throw p.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Se({projectId:e}){return`${co}/projects/${e}/registrations`}async function ke({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Bt({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==Mt&&(o.web.applicationPubKey=r),o}/**
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
 */const _o=7*24*60*60*1e3;async function So(e){const t=await Ao(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:m(t.getKey("auth")),p256dh:m(t.getKey("p256dh"))},r=await Ee(e.firebaseDependencies);if(r){if(vo(r.subscriptionOptions,n))return Date.now()>=r.createTime+_o?ko(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Nt(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return Ve(e.firebaseDependencies,n)}else return Ve(e.firebaseDependencies,n)}async function Ue(e){const t=await Ee(e.firebaseDependencies);t&&(await Nt(e.firebaseDependencies,t.token),await yo(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function ko(e,t){try{const n=await To(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await Te(e.firebaseDependencies,r),n}catch(n){throw n}}async function Ve(e,t){const r={token:await Eo(e,t),createTime:Date.now(),subscriptionOptions:t};return await Te(e,r),r.token}async function Ao(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:po(t)})}function vo(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&o&&s}/**
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
 */function Co(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Do(t,e),Mo(t,e),Oo(t,e),t}function Do(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function Mo(e,t){t.data&&(e.data=t.data)}function Oo(e,t){var o,s,i,c;if(!t.fcmOptions&&!((o=t.notification)!=null&&o.click_action))return;e.fcmOptions={};const n=((s=t.fcmOptions)==null?void 0:s.link)??((i=t.notification)==null?void 0:i.click_action);n&&(e.fcmOptions.link=n);const r=(c=t.fcmOptions)==null?void 0:c.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
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
 */function No(e){return typeof e=="object"&&!!e&&uo in e}/**
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
 */function Bo(e){return new Promise(t=>{setTimeout(t,e)})}async function $o(e,t){const n=Ro(t,await e.firebaseDependencies.installations.getId());Lo(e,n,t.productId)}function Ro(e,t){var r,o;const n={};return e.from&&(n.project_number=e.from),e.fcmMessageId&&(n.message_id=e.fcmMessageId),n.instance_id=t,e.notification?n.message_type=V.DISPLAY_NOTIFICATION.toString():n.message_type=V.DATA_MESSAGE.toString(),n.sdk_platform=fo.toString(),n.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(n.collapse_key=e.collapse_key),n.event=lo.toString(),(r=e.fcmOptions)!=null&&r.analytics_label&&(n.analytics_label=(o=e.fcmOptions)==null?void 0:o.analytics_label),n}function Lo(e,t,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify({messaging_client_event:t}),n&&(r.compliance_data=Po(n)),e.logEvents.push(r)}function Po(e){return{privacy_context:{prequest:{origin_associated_product_id:e}}}}/**
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
 */async function xo(e,t){var o;const{newSubscription:n}=e;if(!n){await Ue(t);return}const r=await Ee(t.firebaseDependencies);await Ue(t),t.vapidKey=((o=r==null?void 0:r.subscriptionOptions)==null?void 0:o.vapidKey)??Mt,await So(t)}async function Fo(e,t){const n=Ko(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await $o(t,n);const r=await $t();if(Vo(r))return Wo(r,n);if(n.notification&&await qo(jo(n)),!!t&&t.onBackgroundMessageHandler){const o=Co(n);typeof t.onBackgroundMessageHandler=="function"?await t.onBackgroundMessageHandler(o):t.onBackgroundMessageHandler.next(o)}}async function Ho(e){var i,c;const t=(c=(i=e.notification)==null?void 0:i.data)==null?void 0:c[Ot];if(t){if(e.action)return}else return;e.stopImmediatePropagation(),e.notification.close();const n=zo(t);if(!n)return;const r=new URL(n,self.location.href),o=new URL(self.location.origin);if(r.host!==o.host)return;let s=await Uo(r);if(s?s=await s.focus():(s=await self.clients.openWindow(n),await Bo(3e3)),!!s)return t.messageType=W.NOTIFICATION_CLICKED,t.isFirebaseMessaging=!0,s.postMessage(t)}function jo(e){const t={...e.notification};return t.data={[Ot]:e},t}function Ko({data:e}){if(!e)return null;try{return e.json()}catch{return null}}async function Uo(e){const t=await $t();for(const n of t){const r=new URL(n.url,self.location.href);if(e.host===r.host)return n}return null}function Vo(e){return e.some(t=>t.visibilityState==="visible"&&!t.url.startsWith("chrome-extension://"))}function Wo(e,t){t.isFirebaseMessaging=!0,t.messageType=W.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function $t(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function qo(e){const{actions:t}=e,{maxActions:n}=Notification;return t&&n&&t.length>n&&console.warn(`This browser only supports ${n} actions. The remaining actions will not be displayed.`),self.registration.showNotification(e.title??"",e)}function zo(e){var n,r;const t=((n=e.fcmOptions)==null?void 0:n.link)??((r=e.notification)==null?void 0:r.click_action);return t||(No(e.data)?self.location.origin:null)}/**
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
 */function Go(e){if(!e||!e.options)throw ne("App Configuration Object");if(!e.name)throw ne("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw ne(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ne(e){return p.create("missing-app-config-values",{valueName:e})}/**
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
 */let Jo=class{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Go(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}};/**
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
 */const Yo=e=>{const t=new Jo(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(Fo(n,t))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(xo(n,t))}),self.addEventListener("notificationclick",n=>{n.waitUntil(Ho(n))}),t};function Qo(){_(new y("messaging-sw",Yo,"PUBLIC"))}/**
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
 */async function Xo(){return ot()&&await st()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Zo(e=fr()){return Xo().then(t=>{if(!t)throw p.create("unsupported-browser")},t=>{throw p.create("indexed-db-unsupported")}),ge(it(e),"messaging-sw").getImmediate()}/**
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
 */Qo();/**
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
 */const es="/firebase-messaging-sw.js",ts="/firebase-cloud-messaging-push-scope",Rt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ns="https://fcmregistrations.googleapis.com/v1",Lt="google.c.a.c_id",rs="google.c.a.c_l",os="google.c.a.ts",ss="google.c.a.e",We=1e4;var qe;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(qe||(qe={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var P;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(P||(P={}));/**
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
 */function b(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function is(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let s=0;s<r.length;++s)o[s]=r.charCodeAt(s);return o}/**
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
 */const re="fcm_token_details_db",as=5,ze="fcm_token_object_Store";async function cs(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(re))return null;let t=null;return(await N(re,as,{upgrade:async(r,o,s,i)=>{if(o<2||!r.objectStoreNames.contains(ze))return;const c=i.objectStore(ze),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(o===2){const a=u;if(!a.auth||!a.p256dh||!a.endpoint)return;t={token:a.fcmToken,createTime:a.createTime??Date.now(),subscriptionOptions:{auth:a.auth,p256dh:a.p256dh,endpoint:a.endpoint,swScope:a.swScope,vapidKey:typeof a.vapidKey=="string"?a.vapidKey:b(a.vapidKey)}}}else if(o===3){const a=u;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:b(a.auth),p256dh:b(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:b(a.vapidKey)}}}else if(o===4){const a=u;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:b(a.auth),p256dh:b(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:b(a.vapidKey)}}}}}})).close(),await M(re),await M("fcm_vapid_details_db"),await M("undefined"),us(t)?t:null}function us(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const ds="firebase-messaging-database",fs=1,x="firebase-messaging-store";let oe=null;function Pt(){return oe||(oe=N(ds,fs,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(x)}}})),oe}async function ls(e){const t=xt(e),r=await(await Pt()).transaction(x).objectStore(x).get(t);if(r)return r;{const o=await cs(e.appConfig.senderId);if(o)return await Ae(e,o),o}}async function Ae(e,t){const n=xt(e),o=(await Pt()).transaction(x,"readwrite");return await o.objectStore(x).put(t,n),await o.done,t}function xt({appConfig:e}){return e.appId}/**
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
 */const ps={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},f=new F("messaging","Messaging",ps);/**
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
 */async function hs(e,t){const n=await Ce(e),r=Ft(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(ve(e.appConfig),o)).json()}catch(i){throw f.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw f.create("token-subscribe-failed",{errorInfo:i})}if(!s.token)throw f.create("token-subscribe-no-token");return s.token}async function gs(e,t){const n=await Ce(e),r=Ft(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${ve(e.appConfig)}/${t.token}`,o)).json()}catch(i){throw f.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw f.create("token-update-failed",{errorInfo:i})}if(!s.token)throw f.create("token-update-no-token");return s.token}async function ms(e,t){const r={method:"DELETE",headers:await Ce(e)};try{const s=await(await fetch(`${ve(e.appConfig)}/${t}`,r)).json();if(s.error){const i=s.error.message;throw f.create("token-unsubscribe-failed",{errorInfo:i})}}catch(o){throw f.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function ve({projectId:e}){return`${ns}/projects/${e}/registrations`}async function Ce({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ft({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==Rt&&(o.web.applicationPubKey=r),o}/**
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
 */const bs=7*24*60*60*1e3;async function ws(e){const t=await Is(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:b(t.getKey("auth")),p256dh:b(t.getKey("p256dh"))},r=await ls(e.firebaseDependencies);if(r){if(Es(r.subscriptionOptions,n))return Date.now()>=r.createTime+bs?ys(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ms(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return Ge(e.firebaseDependencies,n)}else return Ge(e.firebaseDependencies,n)}async function ys(e,t){try{const n=await gs(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await Ae(e.firebaseDependencies,r),n}catch(n){throw n}}async function Ge(e,t){const r={token:await hs(e,t),createTime:Date.now(),subscriptionOptions:t};return await Ae(e,r),r.token}async function Is(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:is(t)})}function Es(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&o&&s}/**
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
 */function Je(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ts(t,e),_s(t,e),Ss(t,e),t}function Ts(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function _s(e,t){t.data&&(e.data=t.data)}function Ss(e,t){var o,s,i,c;if(!t.fcmOptions&&!((o=t.notification)!=null&&o.click_action))return;e.fcmOptions={};const n=((s=t.fcmOptions)==null?void 0:s.link)??((i=t.notification)==null?void 0:i.click_action);n&&(e.fcmOptions.link=n);const r=(c=t.fcmOptions)==null?void 0:c.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
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
 */function ks(e){return typeof e=="object"&&!!e&&Lt in e}/**
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
 */function As(e){if(!e||!e.options)throw se("App Configuration Object");if(!e.name)throw se("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw se(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function se(e){return f.create("missing-app-config-values",{valueName:e})}/**
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
 */class vs{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=As(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Cs(e){try{e.swRegistration=await navigator.serviceWorker.register(es,{scope:ts}),e.swRegistration.update().catch(()=>{}),await Ds(e.swRegistration)}catch(t){throw f.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function Ds(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${We} ms`)),We),o=e.installing||e.waiting;e.active?(clearTimeout(r),t()):o?o.onstatechange=s=>{var i;((i=s.target)==null?void 0:i.state)==="activated"&&(o.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function Ms(e,t){if(!t&&!e.swRegistration&&await Cs(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw f.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Os(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Rt)}/**
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
 */async function Ht(e,t){if(!navigator)throw f.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw f.create("permission-blocked");return await Os(e,t==null?void 0:t.vapidKey),await Ms(e,t==null?void 0:t.serviceWorkerRegistration),ws(e)}/**
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
 */async function Ns(e,t,n){const r=Bs(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Lt],message_name:n[rs],message_time:n[os],message_device_time:Math.floor(Date.now()/1e3)})}function Bs(e){switch(e){case P.NOTIFICATION_CLICKED:return"notification_open";case P.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function $s(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===P.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Je(n)):e.onMessageHandler.next(Je(n)));const r=n.data;ks(r)&&r[ss]==="1"&&await Ns(e,n.messageType,r)}const Ye="@firebase/messaging",Qe="0.12.23";/**
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
 */const Rs=e=>{const t=new vs(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>$s(t,n)),t},Ls=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Ht(t,r)}};function Ps(){_(new y("messaging",Rs,"PUBLIC")),_(new y("messaging-internal",Ls,"PRIVATE")),T(Ye,Qe),T(Ye,Qe,"esm2020")}async function xs(e,t){return e=it(e),Ht(e,t)}Ps();var Fs="firebase",Hs="12.7.0";/**
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
 */T(Fs,Hs,"app");const jt=()=>"prod",js={dev:{apiKey:"AIzaSyCanbmv4_zTVjH-tUW1D2jK1_dBBKGZ5Rs",authDomain:"t-rex-dev-1e541.firebaseapp.com",projectId:"t-rex-dev-1e541",storageBucket:"t-rex-dev-1e541.firebasestorage.app",messagingSenderId:"1083777036305",appId:"1:1083777036305:web:420ed95bb3245ed00681b0",measurementId:"G-XJEPCQ3RSH"},beta:{apiKey:"AIzaSyDOHKTxEk-qqCPIctDXoromv-jpxx0gE_Q",authDomain:"t-rex-beta.firebaseapp.com",projectId:"t-rex-beta",storageBucket:"t-rex-beta.firebasestorage.app",messagingSenderId:"1074036328999",appId:"1:1074036328999:web:f8c0b6335269fa43fb1c02",measurementId:"G-R7N22SCT8E"},pre:{apiKey:"AIzaSyARvPCa_KA63v0vAOgpdC_kGw-Am2RHy6Q",authDomain:"trex-extension-83466.firebaseapp.com",projectId:"trex-extension-83466",storageBucket:"trex-extension-83466.firebasestorage.app",messagingSenderId:"466431054066",appId:"1:466431054066:web:e95c99ee214bf19702006b",measurementId:"G-QLTVTK97CL"},prod:{apiKey:"AIzaSyARvPCa_KA63v0vAOgpdC_kGw-Am2RHy6Q",authDomain:"trex-extension-83466.firebaseapp.com",projectId:"trex-extension-83466",storageBucket:"trex-extension-83466.firebasestorage.app",messagingSenderId:"466431054066",appId:"1:466431054066:web:e95c99ee214bf19702006b",measurementId:"G-QLTVTK97CL"}},Ks={dev:"BIuVluyt_JyG1IGOziJTrjBMAMXHmR7IiclGZ_-zkOxEtAA48qNGptEq_C8DpZQt6u7RD-f66N0Gfa7OZ2pR8Qg",beta:"BEeQ1EbBz3CfuWlILmeL5v8_OmKvtjkAHQP-UvxkqBR5cpvsUoGGei7ixoEo6pALdL2-lFjCq2EnA4qc69ElBQk",pre:"BEYkmM7Hx-pGJJgJ1eldKYkm5UEedcFwUeuQWIpww00X-cvn9Sbz7yvIz1zPLJ49HmN-dA-rMztWdkOtFvyubJA",prod:"BEYkmM7Hx-pGJJgJ1eldKYkm5UEedcFwUeuQWIpww00X-cvn9Sbz7yvIz1zPLJ49HmN-dA-rMztWdkOtFvyubJA"};function Us(){lr().length||ut(js[jt()])}function Vs(){return Ks[jt()]}const Ws=new Wt,qs=pe().baseUrl,g=new qt(Ws,qs),zs=new zt,Gs=pe().baseQuestsUrl,h=new Gt(zs,Gs,g),Js=new Jt,Ys=pe().baseAnchorUrl,l=new Yt(Js,Xt().id.toString(),Ys,g);chrome.storage.local.get("trexLoginData",async e=>{if(e!=null&&e.trexLoginData){const t=e==null?void 0:e.trexLoginData;if(!t)return;const{accessToken:n,refreshToken:r}=t;n&&r?(g.setToken(n),g.setRefreshToken(r),h.setToken(n),h.setRefreshToken(r),l.setToken(n),l.setRefreshToken(r),console.log("setToken======>",l.token)):(g.clearToken(),h.clearToken(),l.clearToken())}});chrome.storage.onChanged.addListener(e=>{var t;if((t=e.trexLoginData)!=null&&t.newValue){const n=e.trexLoginData.newValue,{accessToken:r,refreshToken:o}=n;g.setToken(r),g.setRefreshToken(o),h.setToken(r),h.setRefreshToken(o),l.setToken(r),l.setRefreshToken(o)}else g.clearToken(),h.clearToken(),l.clearToken()});async function $(){const{trexLoginData:e}=await chrome.storage.local.get("trexLoginData");e!=null&&e.accessToken&&(g.setToken(e.accessToken),g.setRefreshToken(e.refreshToken),h.setToken(e.accessToken),h.setRefreshToken(e.refreshToken),l.setToken(e.accessToken),l.setRefreshToken(e.refreshToken))}chrome.runtime.onConnect.addListener(e=>{e.name==="badgePort"&&e.onMessage.addListener(t=>{t.type==="GET_USER_CLAIMABLE_BADGES"&&(async()=>{try{await $();const n=await l.v2.getUserClaimableBadges({limit:100});e.postMessage({success:!0,data:n.data.obj})}catch(n){e.postMessage({success:!1,error:n==null?void 0:n.message})}})()}),e.name==="dailyCheckInPort"&&e.onMessage.addListener(t=>{t.type==="DAILY_CHECK_IN"&&(async()=>{try{await $();const n=await h.v2.v2DailyCheckIn();e.postMessage({success:!0,data:n.data})}catch(n){e.postMessage({success:!1,error:n==null?void 0:n.message})}})()}),e.name==="dailyCheckInStatusPort"&&e.onMessage.addListener(t=>{t.type==="GET_DAILY_CHECK_IN_STATUS"&&(async()=>{try{await $();const n=await h.v2.v2DailyCheckInStatus();e.postMessage({success:!0,data:n.data})}catch(n){e.postMessage({success:!1,error:n==null?void 0:n.message})}})()})});let K=null;const Qs=Vs(),Xs={"fcm.title.core.operations":1,"fcm.title.core.operations.alpha":1,"fcm.title.core.badge":2,"fcm.title.core.daily":3};function Xe(e){return Xs[e]??999}async function Zs(){var n;const e=await chrome.storage.local.get("trexLoginData"),t=e==null?void 0:e.trexLoginData;return(n=t==null?void 0:t.passportInfo)!=null&&n.passportId?t.passportInfo.passportId:null}function ei(e,t){const n=e.find(r=>r.passportId===t);return(n==null?void 0:n.messages)??[]}function ti(e,t,n){const r=e.findIndex(o=>o.passportId===t);return r>=0?e[r].messages=n:e.push({passportId:t,messages:n}),e}function ni(e){const t=Date.now();return e.filter(n=>{var o;const r=Number((o=n.data)==null?void 0:o.expiredTime);return!r||isNaN(r)?!0:r>t})}function ri(e){return e.sort((t,n)=>{var s,i;const r=Xe((s=t.data)==null?void 0:s.type),o=Xe((i=n.data)==null?void 0:i.type);return r!==o?r-o:(n.receivedAt||0)-(t.receivedAt||0)})}function oi(e){const t=ni(e);return ri(t)}async function si(){var e;try{await $();const t=await l.v2.getUserClaimableBadges({limit:1}),n=(e=t==null?void 0:t.data)==null?void 0:e.obj;return Array.isArray(n)&&n.length>0}catch(t){return console.error("[FCM] check claimable badges error:",t),!0}}async function ii(){var e,t;try{await $();const n=await h.v2.v2DailyCheckInStatus();return((t=(e=n==null?void 0:n.data)==null?void 0:e.obj)==null?void 0:t.checkIn)===!0}catch(n){return console.error("[FCM] check daily check-in status error:",n),!1}}async function ai(e){switch(e){case"fcm.title.core.badge":return await si();case"fcm.title.core.daily":return!await ii();default:return!0}}function ci(){return K||(Us(),K=Zo(),K)}function Ze(e){const t=e>0?String(e):"";chrome.action.setBadgeText({text:t}),chrome.action.setBadgeBackgroundColor({color:"#CDF970"}),chrome.action.setBadgeTextColor({color:"#000000"})}async function Kt(){const e=ci();try{const t=await xs(e,{vapidKey:Qs,serviceWorkerRegistration:self.registration});t&&(console.log("[FCM] token:",t),await chrome.storage.local.set({fcmToken:t}))}catch(t){console.error("[FCM] getToken error",t)}}function ui(){self.addEventListener("push",e=>{if(!e.data)return;let t=null;try{t=e.data.json()}catch{t=e.data.text()}console.log("[FCM] push received:",t);const n=(async()=>{var S;const r=await Zs();if(!r){console.log("[FCM] User not logged in, message not saved");return}const o=(S=t==null?void 0:t.data)==null?void 0:S.type;if(!await ai(o)){console.log(`[FCM] Message type "${o}" condition not met, message not saved`);return}const{fcmMessages:i=[]}=await chrome.storage.local.get({fcmMessages:[]}),c=ei(i,r);c.push({...t,receivedAt:Date.now()});const u=oi(c),a=ti(i,r,u);await chrome.storage.local.set({fcmMessages:a})})();e.waitUntil(Promise.all([n]))})}Qt.initializeBackground();chrome.webRequest.onCompleted.addListener(()=>{},{urls:["<all_urls>"]});async function di(){var n;const e=await chrome.storage.local.get("trexLoginData"),t=e==null?void 0:e.trexLoginData;return(n=t==null?void 0:t.passportInfo)!=null&&n.passportId?t.passportInfo.passportId:null}async function Ut(){var o;const e=await di();if(!e){Ze(0);return}const{fcmMessages:t=[]}=await chrome.storage.local.get({fcmMessages:[]}),n=t.find(s=>s.passportId===e),r=((o=n==null?void 0:n.messages)==null?void 0:o.length)??0;Ze(r)}chrome.storage.onChanged.addListener((e,t)=>{t==="local"&&(e.fcmMessages||e.trexLoginData)&&Ut()});Ut();chrome.runtime.onInstalled.addListener(()=>{Kt()});chrome.runtime.onStartup.addListener(()=>{Kt()});ui();chrome.action.onClicked.addListener(e=>{chrome.sidePanel.open({windowId:e.windowId})});chrome.runtime.onMessage.addListener((e,t,n)=>{var r;return e.type===De.OpenSidePanel?(chrome.sidePanel.open({windowId:((r=t.tab)==null?void 0:r.windowId)??0}),n({success:!0}),!0):e.type===De.TrexDailyCheckIn?(chrome.runtime.sendMessage({type:"TREX_DAILY_CHECK_IN_SUCCESS",payload:e.payload}),n({success:!0}),!0):(n({success:!1}),!1)});chrome.runtime.onInstalled.addListener(()=>{chrome.scripting.registerContentScripts([{id:"reclaim-sdk",matches:["<all_urls>"],js:["reclaim-browser-extension-sdk/content/content.bundle.js"],runAt:"document_start",world:"ISOLATED"}],()=>void chrome.runtime.lastError)});chrome.scripting.getRegisteredContentScripts(e=>{e!=null&&e.find(t=>t.id==="reclaim-sdk")||chrome.scripting.registerContentScripts([{id:"reclaim-sdk",matches:["<all_urls>"],js:["reclaim-browser-extension-sdk/content/content.bundle.js"],runAt:"document_start",world:"ISOLATED"}],()=>void chrome.runtime.lastError)});
