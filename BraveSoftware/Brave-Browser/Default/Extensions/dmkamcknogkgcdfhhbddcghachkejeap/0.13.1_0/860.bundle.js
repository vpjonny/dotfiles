/*! For license information please see 860.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_keplr_wallet_extension=self.webpackChunk_keplr_wallet_extension||[]).push([[860],{63523:(e,t,r)=>{r.r(t),r.d(t,{getAddress:()=>f,getContractAddress:()=>v,getCreate2Address:()=>b,getIcapAddress:()=>y,isAddress:()=>m});var n=r(97750),o=r(10528),a=r(59256),i=r(48669),c=r(78011),s=r(78803);const l=new c.Yd(s.i);function u(e){(0,n.isHexString)(e,20)||l.throwArgumentError("invalid address","address",e);const t=(e=e.toLowerCase()).substring(2).split(""),r=new Uint8Array(40);for(let e=0;e<40;e++)r[e]=t[e].charCodeAt(0);const o=(0,n.arrayify)((0,a.w)(r));for(let e=0;e<40;e+=2)o[e>>1]>>4>=8&&(t[e]=t[e].toUpperCase()),(15&o[e>>1])>=8&&(t[e+1]=t[e+1].toUpperCase());return"0x"+t.join("")}const d={};for(let e=0;e<10;e++)d[String(e)]=String(e);for(let e=0;e<26;e++)d[String.fromCharCode(65+e)]=String(10+e);const h=Math.floor((p=9007199254740991,Math.log10?Math.log10(p):Math.log(p)/Math.LN10));var p;function g(e){let t=(e=(e=e.toUpperCase()).substring(4)+e.substring(0,2)+"00").split("").map((e=>d[e])).join("");for(;t.length>=h;){let e=t.substring(0,h);t=parseInt(e,10)%97+t.substring(e.length)}let r=String(98-parseInt(t,10)%97);for(;r.length<2;)r="0"+r;return r}function f(e){let t=null;if("string"!=typeof e&&l.throwArgumentError("invalid address","address",e),e.match(/^(0x)?[0-9a-fA-F]{40}$/))"0x"!==e.substring(0,2)&&(e="0x"+e),t=u(e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&l.throwArgumentError("bad address checksum","address",e);else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==g(e)&&l.throwArgumentError("bad icap checksum","address",e),t=(0,o.g$)(e.substring(4));t.length<40;)t="0"+t;t=u("0x"+t)}else l.throwArgumentError("invalid address","address",e);return t}function m(e){try{return f(e),!0}catch(e){}return!1}function y(e){let t=(0,o.t2)(f(e).substring(2)).toUpperCase();for(;t.length<30;)t="0"+t;return"XE"+g("XE00"+t)+t}function v(e){let t=null;try{t=f(e.from)}catch(t){l.throwArgumentError("missing from address","transaction",e)}const r=(0,n.stripZeros)((0,n.arrayify)(o.O$.from(e.nonce).toHexString()));return f((0,n.hexDataSlice)((0,a.w)((0,i.c)([t,r])),12))}function b(e,t,r){return 32!==(0,n.hexDataLength)(t)&&l.throwArgumentError("salt must be 32 bytes","salt",t),32!==(0,n.hexDataLength)(r)&&l.throwArgumentError("initCodeHash must be 32 bytes","initCodeHash",r),f((0,n.hexDataSlice)((0,a.w)((0,n.concat)(["0xff",f(e),t,r])),12))}},97750:(e,t,r)=>{r.r(t),r.d(t,{arrayify:()=>d,concat:()=>h,hexConcat:()=>w,hexDataLength:()=>v,hexDataSlice:()=>b,hexStripZeros:()=>E,hexValue:()=>x,hexZeroPad:()=>k,hexlify:()=>y,isBytes:()=>u,isBytesLike:()=>s,isHexString:()=>f,joinSignature:()=>S,splitSignature:()=>A,stripZeros:()=>p,zeroPad:()=>g});var n=r(78011),o=r(10636);const a=new n.Yd(o.i);function i(e){return!!e.toHexString}function c(e){return e.slice||(e.slice=function(){const t=Array.prototype.slice.call(arguments);return c(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function s(e){return f(e)&&!(e.length%2)||u(e)}function l(e){return"number"==typeof e&&e==e&&e%1==0}function u(e){if(null==e)return!1;if(e.constructor===Uint8Array)return!0;if("string"==typeof e)return!1;if(!l(e.length)||e.length<0)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(!l(r)||r<0||r>=256)return!1}return!0}function d(e,t){if(t||(t={}),"number"==typeof e){a.checkSafeUint53(e,"invalid arrayify value");const t=[];for(;e;)t.unshift(255&e),e=parseInt(String(e/256));return 0===t.length&&t.push(0),c(new Uint8Array(t))}if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),i(e)&&(e=e.toHexString()),f(e)){let r=e.substring(2);r.length%2&&("left"===t.hexPad?r="0"+r:"right"===t.hexPad?r+="0":a.throwArgumentError("hex data is odd-length","value",e));const n=[];for(let e=0;e<r.length;e+=2)n.push(parseInt(r.substring(e,e+2),16));return c(new Uint8Array(n))}return u(e)?c(new Uint8Array(e)):a.throwArgumentError("invalid arrayify value","value",e)}function h(e){const t=e.map((e=>d(e))),r=t.reduce(((e,t)=>e+t.length),0),n=new Uint8Array(r);return t.reduce(((e,t)=>(n.set(t,e),e+t.length)),0),c(n)}function p(e){let t=d(e);if(0===t.length)return t;let r=0;for(;r<t.length&&0===t[r];)r++;return r&&(t=t.slice(r)),t}function g(e,t){(e=d(e)).length>t&&a.throwArgumentError("value out of range","value",arguments[0]);const r=new Uint8Array(t);return r.set(e,t-e.length),c(r)}function f(e,t){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/)||t&&e.length!==2+2*t)}const m="0123456789abcdef";function y(e,t){if(t||(t={}),"number"==typeof e){a.checkSafeUint53(e,"invalid hexlify value");let t="";for(;e;)t=m[15&e]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"}if("bigint"==typeof e)return(e=e.toString(16)).length%2?"0x0"+e:"0x"+e;if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),i(e))return e.toHexString();if(f(e))return e.length%2&&("left"===t.hexPad?e="0x0"+e.substring(2):"right"===t.hexPad?e+="0":a.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(u(e)){let t="0x";for(let r=0;r<e.length;r++){let n=e[r];t+=m[(240&n)>>4]+m[15&n]}return t}return a.throwArgumentError("invalid hexlify value","value",e)}function v(e){if("string"!=typeof e)e=y(e);else if(!f(e)||e.length%2)return null;return(e.length-2)/2}function b(e,t,r){return"string"!=typeof e?e=y(e):(!f(e)||e.length%2)&&a.throwArgumentError("invalid hexData","value",e),t=2+2*t,null!=r?"0x"+e.substring(t,2+2*r):"0x"+e.substring(t)}function w(e){let t="0x";return e.forEach((e=>{t+=y(e).substring(2)})),t}function x(e){const t=E(y(e,{hexPad:"left"}));return"0x"===t?"0x0":t}function E(e){"string"!=typeof e&&(e=y(e)),f(e)||a.throwArgumentError("invalid hex string","value",e),e=e.substring(2);let t=0;for(;t<e.length&&"0"===e[t];)t++;return"0x"+e.substring(t)}function k(e,t){for("string"!=typeof e?e=y(e):f(e)||a.throwArgumentError("invalid hex string","value",e),e.length>2*t+2&&a.throwArgumentError("value out of range","value",arguments[1]);e.length<2*t+2;)e="0x0"+e.substring(2);return e}function A(e){const t={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(s(e)){let r=d(e);64===r.length?(t.v=27+(r[32]>>7),r[32]&=127,t.r=y(r.slice(0,32)),t.s=y(r.slice(32,64))):65===r.length?(t.r=y(r.slice(0,32)),t.s=y(r.slice(32,64)),t.v=r[64]):a.throwArgumentError("invalid signature string","signature",e),t.v<27&&(0===t.v||1===t.v?t.v+=27:a.throwArgumentError("signature invalid v byte","signature",e)),t.recoveryParam=1-t.v%2,t.recoveryParam&&(r[32]|=128),t._vs=y(r.slice(32,64))}else{if(t.r=e.r,t.s=e.s,t.v=e.v,t.recoveryParam=e.recoveryParam,t._vs=e._vs,null!=t._vs){const r=g(d(t._vs),32);t._vs=y(r);const n=r[0]>=128?1:0;null==t.recoveryParam?t.recoveryParam=n:t.recoveryParam!==n&&a.throwArgumentError("signature recoveryParam mismatch _vs","signature",e),r[0]&=127;const o=y(r);null==t.s?t.s=o:t.s!==o&&a.throwArgumentError("signature v mismatch _vs","signature",e)}if(null==t.recoveryParam)null==t.v?a.throwArgumentError("signature missing v and recoveryParam","signature",e):0===t.v||1===t.v?t.recoveryParam=t.v:t.recoveryParam=1-t.v%2;else if(null==t.v)t.v=27+t.recoveryParam;else{const r=0===t.v||1===t.v?t.v:1-t.v%2;t.recoveryParam!==r&&a.throwArgumentError("signature recoveryParam mismatch v","signature",e)}null!=t.r&&f(t.r)?t.r=k(t.r,32):a.throwArgumentError("signature missing or invalid r","signature",e),null!=t.s&&f(t.s)?t.s=k(t.s,32):a.throwArgumentError("signature missing or invalid s","signature",e);const r=d(t.s);r[0]>=128&&a.throwArgumentError("signature s out of range","signature",e),t.recoveryParam&&(r[0]|=128);const n=y(r);t._vs&&(f(t._vs)||a.throwArgumentError("signature invalid _vs","signature",e),t._vs=k(t._vs,32)),null==t._vs?t._vs=n:t._vs!==n&&a.throwArgumentError("signature _vs mismatch v and s","signature",e)}return t.yParityAndS=t._vs,t.compact=t.r+t.yParityAndS.substring(2),t}function S(e){return y(h([(e=A(e)).r,e.s,e.recoveryParam?"0x1c":"0x1b"]))}},22951:(e,t,r)=>{r.d(t,{DC:()=>l,dk:()=>g,p$:()=>p,tu:()=>c,uj:()=>s,zG:()=>i});var n=r(78011),o=r(16392);const a=new n.Yd(o.i);function i(e,t,r){Object.defineProperty(e,t,{enumerable:!0,value:r,writable:!1})}function c(e,t){for(let r=0;r<32;r++){if(e[t])return e[t];if(!e.prototype||"object"!=typeof e.prototype)break;e=Object.getPrototypeOf(e.prototype).constructor}return null}function s(e,t){e&&"object"==typeof e||a.throwArgumentError("invalid object","object",e),Object.keys(e).forEach((r=>{t[r]||a.throwArgumentError("invalid object key - "+r,"transaction:"+r,e)}))}function l(e){const t={};for(const r in e)t[r]=e[r];return t}const u={bigint:!0,boolean:!0,function:!0,number:!0,string:!0};function d(e){if(null==e||u[typeof e])return!0;if(Array.isArray(e)||"object"==typeof e){if(!Object.isFrozen(e))return!1;const t=Object.keys(e);for(let r=0;r<t.length;r++){let n=null;try{n=e[t[r]]}catch(e){continue}if(!d(n))return!1}return!0}return a.throwArgumentError("Cannot deepCopy "+typeof e,"object",e)}function h(e){if(d(e))return e;if(Array.isArray(e))return Object.freeze(e.map((e=>p(e))));if("object"==typeof e){const t={};for(const r in e){const n=e[r];void 0!==n&&i(t,r,p(n))}return t}return a.throwArgumentError("Cannot deepCopy "+typeof e,"object",e)}function p(e){return h(e)}class g{constructor(e){for(const t in e)this[t]=p(e[t])}}},75960:(e,t,r)=>{r.r(t),r.d(t,{TransactionTypes:()=>g,accessListify:()=>k,computeAddress:()=>b,parse:()=>_,recoverAddress:()=>w,serialize:()=>C});var n=r(63523),o=r(10528),a=r(97750),i=r(90711),c=r(59256),s=r(22951),l=r(48669),u=r(17459),d=r(78011),h=r(23006);const p=new d.Yd(h.i);var g;function f(e){return"0x"===e?null:(0,n.getAddress)(e)}function m(e){return"0x"===e?i._Y:o.O$.from(e)}!function(e){e[e.legacy=0]="legacy",e[e.eip2930=1]="eip2930",e[e.eip1559=2]="eip1559"}(g||(g={}));const y=[{name:"nonce",maxLength:32,numeric:!0},{name:"gasPrice",maxLength:32,numeric:!0},{name:"gasLimit",maxLength:32,numeric:!0},{name:"to",length:20},{name:"value",maxLength:32,numeric:!0},{name:"data"}],v={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,type:!0,value:!0};function b(e){const t=(0,u.VW)(e);return(0,n.getAddress)((0,a.hexDataSlice)((0,c.w)((0,a.hexDataSlice)(t,1)),12))}function w(e,t){return b((0,u.LO)((0,a.arrayify)(e),t))}function x(e,t){const r=(0,a.stripZeros)(o.O$.from(e).toHexString());return r.length>32&&p.throwArgumentError("invalid length for "+t,"transaction:"+t,e),r}function E(e,t){return{address:(0,n.getAddress)(e),storageKeys:(t||[]).map(((t,r)=>(32!==(0,a.hexDataLength)(t)&&p.throwArgumentError("invalid access list storageKey",`accessList[${e}:${r}]`,t),t.toLowerCase())))}}function k(e){if(Array.isArray(e))return e.map(((e,t)=>Array.isArray(e)?(e.length>2&&p.throwArgumentError("access list expected to be [ address, storageKeys[] ]",`value[${t}]`,e),E(e[0],e[1])):E(e.address,e.storageKeys)));const t=Object.keys(e).map((t=>{const r=e[t].reduce(((e,t)=>(e[t]=!0,e)),{});return E(t,Object.keys(r).sort())}));return t.sort(((e,t)=>e.address.localeCompare(t.address))),t}function A(e){return k(e).map((e=>[e.address,e.storageKeys]))}function S(e,t){if(null!=e.gasPrice){const t=o.O$.from(e.gasPrice),r=o.O$.from(e.maxFeePerGas||0);t.eq(r)||p.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas","tx",{gasPrice:t,maxFeePerGas:r})}const r=[x(e.chainId||0,"chainId"),x(e.nonce||0,"nonce"),x(e.maxPriorityFeePerGas||0,"maxPriorityFeePerGas"),x(e.maxFeePerGas||0,"maxFeePerGas"),x(e.gasLimit||0,"gasLimit"),null!=e.to?(0,n.getAddress)(e.to):"0x",x(e.value||0,"value"),e.data||"0x",A(e.accessList||[])];if(t){const e=(0,a.splitSignature)(t);r.push(x(e.recoveryParam,"recoveryParam")),r.push((0,a.stripZeros)(e.r)),r.push((0,a.stripZeros)(e.s))}return(0,a.hexConcat)(["0x02",l.c(r)])}function I(e,t){const r=[x(e.chainId||0,"chainId"),x(e.nonce||0,"nonce"),x(e.gasPrice||0,"gasPrice"),x(e.gasLimit||0,"gasLimit"),null!=e.to?(0,n.getAddress)(e.to):"0x",x(e.value||0,"value"),e.data||"0x",A(e.accessList||[])];if(t){const e=(0,a.splitSignature)(t);r.push(x(e.recoveryParam,"recoveryParam")),r.push((0,a.stripZeros)(e.r)),r.push((0,a.stripZeros)(e.s))}return(0,a.hexConcat)(["0x01",l.c(r)])}function C(e,t){if(null==e.type||0===e.type)return null!=e.accessList&&p.throwArgumentError("untyped transactions do not support accessList; include type: 1","transaction",e),function(e,t){(0,s.uj)(e,v);const r=[];y.forEach((function(t){let n=e[t.name]||[];const o={};t.numeric&&(o.hexPad="left"),n=(0,a.arrayify)((0,a.hexlify)(n,o)),t.length&&n.length!==t.length&&n.length>0&&p.throwArgumentError("invalid length for "+t.name,"transaction:"+t.name,n),t.maxLength&&(n=(0,a.stripZeros)(n),n.length>t.maxLength&&p.throwArgumentError("invalid length for "+t.name,"transaction:"+t.name,n)),r.push((0,a.hexlify)(n))}));let n=0;if(null!=e.chainId?(n=e.chainId,"number"!=typeof n&&p.throwArgumentError("invalid transaction.chainId","transaction",e)):t&&!(0,a.isBytesLike)(t)&&t.v>28&&(n=Math.floor((t.v-35)/2)),0!==n&&(r.push((0,a.hexlify)(n)),r.push("0x"),r.push("0x")),!t)return l.c(r);const o=(0,a.splitSignature)(t);let i=27+o.recoveryParam;return 0!==n?(r.pop(),r.pop(),r.pop(),i+=2*n+8,o.v>28&&o.v!==i&&p.throwArgumentError("transaction.chainId/signature.v mismatch","signature",t)):o.v!==i&&p.throwArgumentError("transaction.chainId/signature.v mismatch","signature",t),r.push((0,a.hexlify)(i)),r.push((0,a.stripZeros)((0,a.arrayify)(o.r))),r.push((0,a.stripZeros)((0,a.arrayify)(o.s))),l.c(r)}(e,t);switch(e.type){case 1:return I(e,t);case 2:return S(e,t)}return p.throwError(`unsupported transaction type: ${e.type}`,d.Yd.errors.UNSUPPORTED_OPERATION,{operation:"serializeTransaction",transactionType:e.type})}function P(e,t,r){try{const r=m(t[0]).toNumber();if(0!==r&&1!==r)throw new Error("bad recid");e.v=r}catch(e){p.throwArgumentError("invalid v for transaction type: 1","v",t[0])}e.r=(0,a.hexZeroPad)(t[1],32),e.s=(0,a.hexZeroPad)(t[2],32);try{const t=(0,c.w)(r(e));e.from=w(t,{r:e.r,s:e.s,recoveryParam:e.v})}catch(e){}}function _(e){const t=(0,a.arrayify)(e);if(t[0]>127)return function(e){const t=l.J(e);9!==t.length&&6!==t.length&&p.throwArgumentError("invalid raw transaction","rawTransaction",e);const r={nonce:m(t[0]).toNumber(),gasPrice:m(t[1]),gasLimit:m(t[2]),to:f(t[3]),value:m(t[4]),data:t[5],chainId:0};if(6===t.length)return r;try{r.v=o.O$.from(t[6]).toNumber()}catch(e){return r}if(r.r=(0,a.hexZeroPad)(t[7],32),r.s=(0,a.hexZeroPad)(t[8],32),o.O$.from(r.r).isZero()&&o.O$.from(r.s).isZero())r.chainId=r.v,r.v=0;else{r.chainId=Math.floor((r.v-35)/2),r.chainId<0&&(r.chainId=0);let n=r.v-27;const o=t.slice(0,6);0!==r.chainId&&(o.push((0,a.hexlify)(r.chainId)),o.push("0x"),o.push("0x"),n-=2*r.chainId+8);const i=(0,c.w)(l.c(o));try{r.from=w(i,{r:(0,a.hexlify)(r.r),s:(0,a.hexlify)(r.s),recoveryParam:n})}catch(e){}r.hash=(0,c.w)(e)}return r.type=null,r}(t);switch(t[0]){case 1:return function(e){const t=l.J(e.slice(1));8!==t.length&&11!==t.length&&p.throwArgumentError("invalid component count for transaction type: 1","payload",(0,a.hexlify)(e));const r={type:1,chainId:m(t[0]).toNumber(),nonce:m(t[1]).toNumber(),gasPrice:m(t[2]),gasLimit:m(t[3]),to:f(t[4]),value:m(t[5]),data:t[6],accessList:k(t[7])};return 8===t.length||(r.hash=(0,c.w)(e),P(r,t.slice(8),I)),r}(t);case 2:return function(e){const t=l.J(e.slice(1));9!==t.length&&12!==t.length&&p.throwArgumentError("invalid component count for transaction type: 2","payload",(0,a.hexlify)(e));const r=m(t[2]),n=m(t[3]),o={type:2,chainId:m(t[0]).toNumber(),nonce:m(t[1]).toNumber(),maxPriorityFeePerGas:r,maxFeePerGas:n,gasPrice:null,gasLimit:m(t[4]),to:f(t[5]),value:m(t[6]),data:t[7],accessList:k(t[8])};return 9===t.length||(o.hash=(0,c.w)(e),P(o,t.slice(9),S)),o}(t)}return p.throwError(`unsupported transaction type: ${t[0]}`,d.Yd.errors.UNSUPPORTED_OPERATION,{operation:"parseTransaction",transactionType:t[0]})}},16060:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}var o;r.d(t,{RQ:()=>_,WK:()=>R,X3:()=>$,Zn:()=>C,aU:()=>o,cP:()=>d,fp:()=>p,kG:()=>c,q_:()=>i}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(o||(o={}));const a="popstate";function i(e){return void 0===e&&(e={}),function(e,t,r,i){void 0===i&&(i={});let{window:d=document.defaultView,v5Compat:h=!1}=i,p=d.history,g=o.Pop,f=null,m=y();function y(){return(p.state||{idx:null}).idx}function v(){g=o.Pop;let e=y(),t=null==e?null:e-m;m=e,f&&f({action:g,location:w.location,delta:t})}function b(e){let t="null"!==d.location.origin?d.location.origin:d.location.href,r="string"==typeof e?e:u(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==m&&(m=0,p.replaceState(n({},p.state,{idx:m}),""));let w={get action(){return g},get location(){return e(d,p)},listen(e){if(f)throw new Error("A history only accepts one active listener");return d.addEventListener(a,v),f=e,()=>{d.removeEventListener(a,v),f=null}},createHref:e=>t(d,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){g=o.Push;let n=l(w.location,e,t);r&&r(n,e),m=y()+1;let a=s(n,m),i=w.createHref(n);try{p.pushState(a,"",i)}catch(e){d.location.assign(i)}h&&f&&f({action:g,location:w.location,delta:1})},replace:function(e,t){g=o.Replace;let n=l(w.location,e,t);r&&r(n,e),m=y();let a=s(n,m),i=w.createHref(n);p.replaceState(a,"",i),h&&f&&f({action:g,location:w.location,delta:0})},go:e=>p.go(e)};return w}((function(e,t){let{pathname:r="/",search:n="",hash:o=""}=d(e.location.hash.substr(1));return l("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let r=e.document.querySelector("base"),n="";if(r&&r.getAttribute("href")){let t=e.location.href,r=t.indexOf("#");n=-1===r?t:t.slice(0,r)}return n+"#"+("string"==typeof t?t:u(t))}),(function(e,t){!function(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function c(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t,r,o){return void 0===r&&(r=null),n({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?d(t):t,{state:r,key:t&&t.key||o||Math.random().toString(36).substr(2,8)})}function u(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function d(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var h;function p(e,t,r){void 0===r&&(r="/");let n=C(("string"==typeof t?d(t):t).pathname||"/",r);if(null==n)return null;let o=g(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let e=0;null==a&&e<o.length;++e)a=A(o[e],I(n));return a}function g(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(c(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let s=_([n,i.relativePath]),l=r.concat(i);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),g(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:k(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of f(e.path))o(e,t,r);else o(e,t)})),t}function f(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===n.length)return o?[a,""]:[a];let i=f(n.join("/")),c=[];return c.push(...i.map((e=>""===e?a:[a,e].join("/")))),o&&c.push(...i),c.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));const m=/^:\w+$/,y=3,v=2,b=1,w=10,x=-2,E=e=>"*"===e;function k(e,t){let r=e.split("/"),n=r.length;return r.some(E)&&(n+=x),t&&(n+=v),r.filter((e=>!E(e))).reduce(((e,t)=>e+(m.test(t)?y:""===t?b:w)),n)}function A(e,t){let{routesMeta:r}=e,n={},o="/",a=[];for(let e=0;e<r.length;++e){let i=r[e],c=e===r.length-1,s="/"===o?t:t.slice(o.length)||"/",l=S({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},s);if(!l)return null;Object.assign(n,l.params);let u=i.route;a.push({params:n,pathname:_([o,l.pathname]),pathnameBase:Z(_([o,l.pathnameBase])),route:u}),"/"!==l.pathnameBase&&(o=_([o,l.pathnameBase]))}return a}function S(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),P("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(n.push(t),"/([^\\/]+)")));return e.endsWith("*")?(n.push("*"),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:n.reduce(((e,t,r)=>{if("*"===t){let e=c[r]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return P(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}(c[r]||"",t),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function I(e){try{return decodeURI(e)}catch(t){return P(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function C(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function P(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}const _=e=>e.join("/").replace(/\/\/+/g,"/"),Z=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");class $ extends Error{}function R(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const L=["post","put","patch","delete"],O=(new Set(L),["get",...L]);new Set(O),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred")},28316:(e,t,r)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(52967)},48570:(e,t,r)=>{e.exports=r(66866)},73557:(e,t,r)=>{var n;r.d(t,{AW:()=>S,F0:()=>I,TH:()=>v,Z5:()=>C});var o=r(16060),a=r(2784);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}"function"==typeof Object.is&&Object.is;const{useState:c,useEffect:s,useLayoutEffect:l,useDebugValue:u}=n||(n=r.t(a,2));"undefined"==typeof window||void 0===window.document||window.document.createElement,(n||(n=r.t(a,2))).useSyncExternalStore;const d=a.createContext(null),h=a.createContext(null),p=a.createContext(null),g=a.createContext(null),f=a.createContext({outlet:null,matches:[]}),m=a.createContext(null);function y(){return null!=a.useContext(g)}function v(){return y()||(0,o.kG)(!1),a.useContext(g).location}function b(){let e=function(){var e;let t=a.useContext(m),r=function(e){let t=a.useContext(h);return t||(0,o.kG)(!1),t}(k.UseRouteError),n=function(e){let t=function(e){let t=a.useContext(f);return t||(0,o.kG)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,o.kG)(!1),r.route.id}(k.UseRouteError);return t||(null==(e=r.errors)?void 0:e[n])}(),t=(0,o.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:n},r):null,null)}class w extends a.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?a.createElement(f.Provider,{value:this.props.routeContext},a.createElement(m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext(d);return o&&o.static&&o.staticContext&&r.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(f.Provider,{value:t},n)}var E,k,A;function S(e){(0,o.kG)(!1)}function I(e){let{basename:t="/",children:r=null,location:n,navigationType:i=o.aU.Pop,navigator:c,static:s=!1}=e;y()&&(0,o.kG)(!1);let l=t.replace(/^\/*/,"/"),u=a.useMemo((()=>({basename:l,navigator:c,static:s})),[l,c,s]);"string"==typeof n&&(n=(0,o.cP)(n));let{pathname:d="/",search:h="",hash:f="",state:m=null,key:v="default"}=n,b=a.useMemo((()=>{let e=(0,o.Zn)(d,l);return null==e?null:{pathname:e,search:h,hash:f,state:m,key:v}}),[l,d,h,f,m,v]);return null==b?null:a.createElement(p.Provider,{value:u},a.createElement(g.Provider,{children:r,value:{location:b,navigationType:i}}))}function C(e){let{children:t,location:r}=e,n=a.useContext(d);return function(e,t){y()||(0,o.kG)(!1);let{navigator:r}=a.useContext(p),n=a.useContext(h),{matches:c}=a.useContext(f),s=c[c.length-1],l=s?s.params:{},u=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let d,m=v();if(t){var E;let e="string"==typeof t?(0,o.cP)(t):t;"/"===u||(null==(E=e.pathname)?void 0:E.startsWith(u))||(0,o.kG)(!1),d=e}else d=m;let k=d.pathname||"/",A="/"===u?k:k.slice(u.length)||"/",S=(0,o.fp)(e,{pathname:A}),I=function(e,t,r){if(void 0===t&&(t=[]),null==e){if(null==r||!r.errors)return null;e=r.matches}let n=e,i=null==r?void 0:r.errors;if(null!=i){let e=n.findIndex((e=>e.route.id&&(null==i?void 0:i[e.route.id])));e>=0||(0,o.kG)(!1),n=n.slice(0,Math.min(n.length,e+1))}return n.reduceRight(((e,o,c)=>{let s=o.route.id?null==i?void 0:i[o.route.id]:null,l=r?o.route.errorElement||a.createElement(b,null):null,u=t.concat(n.slice(0,c+1)),d=()=>a.createElement(x,{match:o,routeContext:{outlet:e,matches:u}},s?l:void 0!==o.route.element?o.route.element:e);return r&&(o.route.errorElement||0===c)?a.createElement(w,{location:r.location,component:l,error:s,children:d(),routeContext:{outlet:null,matches:u}}):d()}),null)}(S&&S.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:(0,o.RQ)([u,r.encodeLocation?r.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:(0,o.RQ)([u,r.encodeLocation?r.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,n||void 0);return t&&I?a.createElement(g.Provider,{value:{location:i({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:o.aU.Pop}},I):I}(n&&!t?n.router.routes:P(t),r)}function P(e,t){void 0===t&&(t=[]);let r=[];return a.Children.forEach(e,((e,n)=>{if(!a.isValidElement(e))return;if(e.type===a.Fragment)return void r.push.apply(r,P(e.props.children,t));e.type!==S&&(0,o.kG)(!1),e.props.index&&e.props.children&&(0,o.kG)(!1);let i=[...t,n],c={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,hasErrorBoundary:null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle};e.props.children&&(c.children=P(e.props.children,i)),r.push(c)})),r}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(E||(E={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(k||(k={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(A||(A={})),new Promise((()=>{})),a.Component},2784:(e,t,r)=>{e.exports=r(83426)},3554:(e,t,r)=>{r.d(t,{B:()=>i});var n=r(2784),o=r(71893);const a={YAxis:o.default.div`
    display: flex;
    flex-direction: column;
    align-items: ${({alignX:e})=>{switch(e){case"left":return"flex-start";case"right":return"flex-end";case"center":return"center"}}};
    gap: ${({gap:e})=>e};
  `},i=e=>{var{children:t}=e,r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children"]);return n.createElement(a.YAxis,Object.assign({},r),t)}},54660:(e,t,r)=>{r.d(t,{I1:()=>o.I1,zx:()=>n.z});var n=r(22639),o=r(98661);r(66674),r(96780),r(86917),r(22201)},98661:(e,t,r)=>{r.d(t,{I1:()=>a,z0:()=>c});var n=r(71893),o=r(35150);const a=e=>n.css`
    color: ${e};
    svg {
      fill: ${e};
      stroke: ${e};
    }
  `,i={primary:{light:{fill:{enabled:n.css`
          background-color: ${o.VZ["blue-400"]};

          ${a(o.VZ.white)}

          :hover {
            ::after {
              background-color: ${o.VZ["gray-500"]};
              opacity: 0.1;
            }
          }
        `,disabled:n.css`
          background-color: ${o.VZ["blue-400"]};

          ::after {
            background-color: ${o.VZ["gray-300"]};
            opacity: 0.2;
          }

          ${a(o.VZ.white)}
        `},ghost:{enabled:n.css`
          background-color: transparent;

          ${a(o.VZ["blue-400"])}

          :hover {
            ::after {
              background-color: ${o.VZ["blue-400"]};
              opacity: 0.1;
            }
          }
        `,disabled:n.css`
          background-color: transparent;

          ${a(o.VZ["blue-200"])}
        `}},dark:{fill:{enabled:n.css`
          background-color: ${o.VZ["blue-500"]};

          ${a(o.VZ.white)}

          :hover {
            ::after {
              background-color: ${o.VZ["gray-500"]};
              opacity: 0.3;
            }
          }
        `,disabled:n.css`
          background-color: ${o.VZ["blue-500"]};

          ::after {
            background-color: ${o.VZ["gray-600"]};
            opacity: 0.5;
          }

          ${a(o.VZ.white)}
        `},ghost:{enabled:n.css`
          background-color: transparent;

          ${a(o.VZ["blue-400"])}

          :hover {
            ::after {
              background-color: ${o.VZ["blue-400"]};
              opacity: 0.15;
            }
          }
        `,disabled:n.css`
          background-color: transparent;

          ${a(o.VZ["blue-700"])}
        `}}},secondary:{light:{fill:{enabled:n.css`
          background-color: ${o.VZ["blue-50"]};

          ${a(o.VZ["blue-400"])}

          :hover {
            ::after {
              background-color: ${o.VZ["gray-500"]};
              opacity: 0.02;
            }
          }
        `,disabled:n.css`
          background-color: ${o.VZ["blue-50"]};

          ${a(o.VZ["blue-200"])}
        `},ghost:{enabled:n.css`
          background-color: transparent;

          ${a(o.VZ["gray-400"])}

          :hover {
            ::after {
              background-color: ${o.VZ["gray-400"]};
              opacity: 0.1;
            }
          }
        `,disabled:n.css`
          background-color: transparent;

          ${a(o.VZ["gray-200"])}
        `}},dark:{fill:{enabled:n.css`
          background-color: ${o.VZ["blue-800"]};

          ${a(o.VZ["blue-400"])}

          :hover {
            ::after {
              background-color: ${o.VZ["gray-600"]};
              opacity: 0.2;
            }
          }
        `,disabled:n.css`
          background-color: ${o.VZ["blue-800"]};

          ${a(o.VZ["blue-400"])}

          ::after {
            background-color: ${o.VZ["gray-600"]};
            opacity: 0.5;
          }
        `},ghost:{enabled:n.css`
          background-color: transparent;

          ${a(o.VZ["gray-300"])}

          :hover {
            ::after {
              background-color: ${o.VZ["gray-300"]};
              opacity: 0.15;
            }
          }
        `,disabled:n.css`
          background-color: transparent;

          ${a(o.VZ["gray-500"])}
        `}}},danger:{light:{fill:{enabled:n.css`
          background-color: ${o.VZ["red-100"]};

          ${a(o.VZ["red-400"])}

          :hover {
            ::after {
              background-color: ${o.VZ["gray-500"]};
              opacity: 0.05;
            }
          }
        `,disabled:n.css`
          background-color: ${o.VZ["red-100"]};

          ${a(o.VZ["red-400"])}

          ::after {
            background-color: ${o.VZ["gray-300"]};
            opacity: 0.1;
          }
        `},ghost:{enabled:n.css`
          background-color: transparent;

          ${a(o.VZ["red-400"])}

          :hover {
            ::after {
              background-color: ${o.VZ["red-400"]};
              opacity: 0.1;
            }
          }
        `,disabled:n.css`
          background-color: transparent;

          ${a(o.VZ["red-200"])}
        `}},dark:{fill:{enabled:n.css`
          background-color: rgba(166, 31, 58, 0.3);

          ${a(o.VZ["red-400"])}

          :hover {
            ::after {
              background-color: ${o.VZ["gray-500"]};
              opacity: 0.2;
            }
          }
        `,disabled:n.css`
          background-color: rgba(166, 31, 58, 0.3);

          ${a(o.VZ["red-400"])}

          ::after {
            background-color: ${o.VZ["gray-600"]};
            opacity: 0.5;
          }
        `},ghost:{enabled:n.css`
          background-color: transparent;

          ${a(o.VZ["red-400"])}

          :hover {
            ::after {
              background-color: ${o.VZ["red-400"]};
              opacity: 0.15;
            }
          }
        `,disabled:n.css`
          background-color: transparent;

          ${a(o.VZ["red-700"])}
        `}}}},c={Container:n.default.div`
    // Used for making button fill parent horizontally.
    display: flex;
    flex-direction: column;
    align-items: center;
  `,Button:n.default.button`
    width: 100%;
    height: ${({size:e})=>`${(e=>{switch(e){case"extraSmall":return 2;case"small":return 2.25;case"large":return 3.25;default:return 2.75}})(e)}rem`};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${"0.375rem"};
    cursor: ${({disabled:e,isLoading:t})=>e?"not-allowed":t?"progress":"pointer"};
    overflow: hidden;

    // Default font style.
    // Override these in "buttonStyleFromColorAndMode" if needed.
    font-weight: 500;
    font-size: ${({size:e})=>"large"===e?"1rem":"0.875rem"};
    letter-spacing: 0.2px;

    white-space: nowrap;

    // Remove normalized css properties.
    border-width: 0;
    border-style: none;
    border-color: transparent;
    border-image: none;
    padding: 0 0.75rem;

    // For hovering.
    position: relative;
    ::after {
      content: "";

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    ${({color:e,theme:t,mode:r,disabled:n})=>i[e||"primary"][t.mode||"dark"][r||"fill"][n?"disabled":"enabled"]}
  `,Left:n.default.span`
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
  `,Right:n.default.span`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.25rem;
  `,Loading:n.default.div`
    display: flex;
    align-items: center;

    position: absolute;
    color: ${({buttonColor:e,theme:t})=>((e,t)=>{switch(e){case"primary":default:return o.VZ["blue-200"];case"secondary":return"dark"===t?o.VZ["blue-700"]:o.VZ["gray-200"];case"danger":return o.VZ["red-400"]}})(e,t)};
  `,TextOverrideIcon:n.default.div`
    display: flex;
    align-items: center;

    position: absolute;
    svg {
      fill: none;
    }
  `}},68218:(e,t,r)=>{r.d(t,{s:()=>a});var n=r(2784);const o={Container:r(71893).default.div`
    flex: ${({weight:e})=>`${e} ${e} 0%`};
  `},a=({children:e,weight:t})=>(t<0&&(t=0),n.createElement(o.Container,{weight:t},e))},3645:(e,t,r)=>{r.d(t,{o:()=>n.o}),r(68218);var n=r(98331)},4922:(e,t,r)=>{r.d(t,{i0:()=>n.i,mI:()=>s.m,pN:()=>l.p,H2:()=>o.H2,H3:()=>a,d1:()=>i.d,Tj:()=>c.T});var n=r(25300),o=(r(1056),r(49353),r(41267));const a=(0,r(71893).default)(n.i)`
  font-weight: 600;
  font-size: 1.25rem;
`;r(33219),r(61432);var i=r(94018),c=r(89587),s=(r(27977),r(34855),r(14832)),l=r(90879);r(34715),r(42280),r(18650),r(9458),r(17305)},96624:(e,t,r)=>{r.d(t,{$m:()=>s,C2:()=>l,Ce:()=>o,IZ:()=>p,R9:()=>f,Ro:()=>u,SR:()=>i,d2:()=>g,eR:()=>d,gV:()=>h,ly:()=>c,sw:()=>m,yh:()=>a});var n=r(34406);const o="https://satellite.keplr.app",a="/price/simple",i="/coingecko-token-info/onchain/networks/{coingeckoChainId}/tokens/{contractAddress}",c="https://satellite.keplr.app",s=n.env.KEPLR_EXT_SKIP_TOKEN_INFO_API_URI||"/coingecko-token-info/skip/assets/{chainId}/{coinMinimalDenom}",l="https://evm-1.keplr.app",u="interwoven-1",d=[{currency:"usd",symbol:"$",maxDecimals:2,locale:"en-US"},{currency:"eur",symbol:"€",maxDecimals:2,locale:"de-DE"},{currency:"gbp",symbol:"£",maxDecimals:2,locale:"en-GB"},{currency:"cad",symbol:"CA$",maxDecimals:2,locale:"en-CA"},{currency:"aud",symbol:"AU$",maxDecimals:2,locale:"en-AU"},{currency:"rub",symbol:"₽",maxDecimals:0,locale:"ru"},{currency:"krw",symbol:"₩",maxDecimals:0,locale:"ko-KR"},{currency:"hkd",symbol:"HK$",maxDecimals:1,locale:"en-HK"},{currency:"cny",symbol:"¥",maxDecimals:1,locale:"zh-CN"},{currency:"jpy",symbol:"¥",maxDecimals:0,locale:"ja-JP"},{currency:"inr",symbol:"₹",maxDecimals:1,locale:"en-IN"},{currency:"chf",symbol:"₣",maxDecimals:2,locale:"gsw"},{currency:"pkr",symbol:"Rs",maxDecimals:0,locale:"en-PK"}],h="G-GBM7FFDB7T",p="J2NwxIs6RvqxTr8KQ75Uzw",g="253b498ed8d76b708e01d5e005412a76",f={chainId:"osmosis-1",resolverContractAddress:"osmo1xk0s8xgktn9x5vwcgtjdxqzadg88fgn33p8u9cnpdxwemvxscvast52cdd"},m=[{name:"chihuahua-white-whale",chainId:"chihuahua-1"},{name:"injective-dojoswap",chainId:"injective-1"},{name:"injective-white-whale",chainId:"injective-1"},{name:"neutron-astroport",chainId:"neutron-1"},{name:"neutron-astrovault",chainId:"neutron-1"},{name:"terra-nauticus",chainId:"phoenix-1"},{name:"terra-white-whale",chainId:"phoenix-1"},{name:"neutron-lido-satellite",chainId:"neutron-1"},{name:"neutron-drop",chainId:"neutron-1"},{name:"injective-helix",chainId:"injective-1"},{name:"neutron-duality",chainId:"neutron-1"},{name:"terra-astroport",chainId:"phoenix-1"},{name:"terra-ura",chainId:"phoenix-1"},{name:"babylon-tower",chainId:"bbn-1"},{name:"osmosis-poolmanager",chainId:"osmosis-1"},{name:"initia-dex",chainId:"interwoven-1"},{name:"pryzm-native",chainId:"pryzm-1"},{name:"persistence-dexter",chainId:"core-1"},{name:"terra-terraswap",chainId:"phoenix-1"},{name:"injective-astroport",chainId:"injective-1"},{name:"blast-uniswap",chainId:"eip155:81457"},{name:"binance-uniswap",chainId:"eip155:56"},{name:"optimism-uniswap",chainId:"eip155:10"},{name:"polygon-uniswap",chainId:"eip155:137"},{name:"arbitrum-uniswap",chainId:"eip155:42161"},{name:"avalanche-uniswap",chainId:"eip155:43114"},{name:"base-uniswap",chainId:"eip155:8453"},{name:"ethereum-uniswap",chainId:"eip155:1"},{name:"base-aerodrome",chainId:"eip155:8453"},{name:"temp-forma",chainId:"eip155:984122"}]},95556:(e,t,r)=>{r.d(t,{N:()=>a});var n=r(2784),o=r(90414);const a=()=>{const e=n.useContext(o.s);if(!e)throw new Error("You have forgot to use ConfirmProvider");return e}},90414:(e,t,r)=>{r.d(t,{s:()=>n});const n=(0,r(2784).createContext)(null)},72121:(e,t,r)=>{var n,o,a=r(2784),i=r(28316),c=r(73557),s=r(16060);function l(e){let{basename:t,children:r,window:n}=e,o=a.useRef();null==o.current&&(o.current=(0,s.q_)({window:n,v5Compat:!0}));let i=o.current,[l,u]=a.useState({action:i.action,location:i.location});return a.useLayoutEffect((()=>i.listen(u)),[i]),a.createElement(c.F0,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(n||(n={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(o||(o={}));var u=r(45493),d=r(35150),h=r(33210),p=r(66949),g=r(96106),f=r(80075),m=r(65397),y=r(98049),v=r(63197),b=r(77257),w=r(65264),x=r(84860),E=r(27660),k=r(95700),A=r(4922),S=r(22386),I=r(54660),C=r(3645),P=r(28432),_=r(64318),Z=r(28646),$=r(19981),R=r(57918),L=r(50318),O=r(10642),V=r(47408),T=(r(7632),r(83112)),j=r(42670),U=r(71893),D=r(72424),H=r(80471),B=r(40602),F=r(20521),z=r.n(F),K=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function c(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}s((n=n.apply(e,t||[])).next())}))};r(66985),(0,f.configure)({enforceActions:"always"}),window.keplr=new h.Keplr(p.i8,"core",new g.InExtensionMessageRequester);const W=(0,b.Pi)((()=>((0,x.b)(),null))),M=(0,b.Pi)((()=>{const{uiConfigStore:e}=(0,u.oR)(),t=(0,U.useTheme)(),n=(0,y.N)(),o=(0,T.Z)(),[i,c]=(0,a.useState)(""),[s,l]=(0,a.useState)("select");return a.createElement(S.x,{width:"100vw",height:"100vh",alignX:"center",alignY:"center"},a.createElement(S.x,{maxWidth:"47.75rem"},a.createElement("img",{src:r("light"===t.mode?35127:93451),alt:"Keplr logo",style:{width:"10.625rem",aspectRatio:"453 / 153"}}),a.createElement(E.T,{size:"2.25rem"}),a.createElement(k.F5,{color:"light"===t.mode?d.VZ["gray-700"]:d.VZ["gray-50"]},a.createElement(j.Z,{id:"page.ledger-grant.title"})),a.createElement(E.T,{size:"1rem"}),a.createElement(A.H3,{color:"light"===t.mode?d.VZ["gray-200"]:d.VZ["gray-300"]},a.createElement(j.Z,{id:"page.ledger-grant.paragraph"})),a.createElement(E.T,{size:"1.625rem"}),(()=>{switch(s){case"failed":return a.createElement(S.x,{cursor:"pointer",onClick:e=>{e.preventDefault(),l("select")}},a.createElement(P.K,{alignY:"center"},a.createElement(A.mI,{color:d.VZ["red-400"]},"Failed! Try Again"),a.createElement(E.T,{size:"0.25rem"}),a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5rem",height:"1.5rem",fill:"none",viewBox:"0 0 24 25"},a.createElement("path",{stroke:d.VZ["red-400"],strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12.563 5.75l6.75 6.75-6.75 6.75m5.812-6.75H4.687"}))));case"success":return a.createElement(A.mI,{color:d.VZ["green-400"]},"Success! You can close this web page.");case"select":return a.createElement(a.Fragment,null,a.createElement(P.K,{alignY:"center"},a.createElement(_.XZ,{checked:e.useWebHIDLedger,onChange:t=>K(void 0,void 0,void 0,(function*(){if(t&&!window.navigator.hid)return yield n.confirm(o.formatMessage({id:"pages.register.connect-ledger.use-hid-confirm-title"}),o.formatMessage({id:"pages.register.connect-ledger.use-hid-confirm-paragraph"}),{forceYes:!0}),yield browser.tabs.create({url:"chrome://flags/#enable-experimental-web-platform-features"}),void window.close();e.setUseWebHIDLedger(t)}))}),a.createElement(E.T,{size:"0.5rem"}),a.createElement(A.Tj,{color:d.VZ["gray-300"]},a.createElement(j.Z,{id:"pages.register.connect-ledger.use-hid-text"}))),a.createElement(E.T,{size:"1.625rem"}),a.createElement(C.o,{sum:1,gutter:"1rem"},a.createElement(I.zx,{color:"secondary",text:"Cosmos app",isLoading:"Cosmos"===i,disabled:!!i&&"Cosmos"!==i,onClick:()=>K(void 0,void 0,void 0,(function*(){if(i)return;let t;c("Cosmos");try{t=e.useWebHIDLedger?yield Z.Z.create():yield $.Z.create();let r=new L.CosmosApp("Cosmos",t);if("Cosmos"===(yield r.getAppInfo()).app_name)return void l("success");if(t=yield R.Hn.tryAppOpen(t,"Cosmos"),r=new L.CosmosApp("Cosmos",t),"Cosmos"===(yield r.getAppInfo()).app_name)return void l("success");l("failed")}catch(e){console.log(e),l("failed")}finally{null==t||t.close().catch(console.log),c("")}}))}),a.createElement(I.zx,{color:"secondary",text:"Terra app",isLoading:"Terra"===i,disabled:!!i&&"Terra"!==i,onClick:()=>K(void 0,void 0,void 0,(function*(){if(i)return;let t;c("Terra");try{t=e.useWebHIDLedger?yield Z.Z.create():yield $.Z.create();let r=new L.CosmosApp("Terra",t);if("Terra"===(yield r.getAppInfo()).app_name)return void l("success");if(t=yield R.Hn.tryAppOpen(t,"Terra"),r=new L.CosmosApp("Terra",t),"Terra"===(yield r.getAppInfo()).app_name)return void l("success");l("failed")}catch(e){console.log(e),l("failed")}finally{null==t||t.close().catch(console.log),c("")}}))}),a.createElement(I.zx,{color:"secondary",text:"Secret app",isLoading:"Secret"===i,disabled:!!i&&"Secret"!==i,onClick:()=>K(void 0,void 0,void 0,(function*(){if(i)return;let t;c("Secret");try{t=e.useWebHIDLedger?yield Z.Z.create():yield $.Z.create();let r=new L.CosmosApp("Secret",t);if("Secret"===(yield r.getAppInfo()).app_name)return void l("success");if(t=yield R.Hn.tryAppOpen(t,"Secret"),r=new L.CosmosApp("Secret",t),"Secret"===(yield r.getAppInfo()).app_name)return void l("success");l("failed")}catch(e){console.log(e),l("failed")}finally{null==t||t.close().catch(console.log),c("")}}))}),a.createElement(I.zx,{color:"secondary",text:"THORChain app",isLoading:"THORChain"===i,disabled:!!i&&"THORChain"!==i,onClick:()=>K(void 0,void 0,void 0,(function*(){if(i)return;let t;c("THORChain");try{t=e.useWebHIDLedger?yield Z.Z.create():yield $.Z.create();let r=new L.CosmosApp("THORChain",t);if("THORChain"===(yield r.getAppInfo()).app_name)return void l("success");if(t=yield R.Hn.tryAppOpen(t,"THORChain"),r=new L.CosmosApp("THORChain",t),"THORChain"===(yield r.getAppInfo()).app_name)return void l("success");l("failed")}catch(e){console.log(e),l("failed")}finally{null==t||t.close().catch(console.log),c("")}}))}),a.createElement(I.zx,{color:"secondary",text:"Ethereum app",isLoading:"Ethereum"===i,disabled:!!i&&"Ethereum"!==i,onClick:()=>K(void 0,void 0,void 0,(function*(){if(i)return;let t;c("Ethereum");try{t=e.useWebHIDLedger?yield Z.Z.create():yield $.Z.create();let r=new V.ZP(t);try{return yield r.getAddress("44'/60'/0'/0/0"),void l("success")}catch(e){console.log(e)}return t=yield R.Hn.tryAppOpen(t,"Ethereum"),r=new V.ZP(t),yield r.getAddress("44'/60'/0'/0/0"),void l("success")}catch(e){console.log(e),l("failed")}finally{null==t||t.close().catch(console.log),c("")}}))}),a.createElement(I.zx,{color:"secondary",text:"Starknet app",isLoading:"Starknet"===i,disabled:!!i&&"Starknet"!==i,onClick:()=>K(void 0,void 0,void 0,(function*(){if(!i){c("Starknet");try{const e=yield Z.Z.create();try{const t=new H.g(e);return(yield t.getPubKey(B.et,!1)).returnCode===H.K.NoError?void l("success"):void l("failed")}catch(e){console.log(e)}finally{c(""),yield e.close()}}catch(e){console.log(e),l("failed")}finally{c("")}}}))}),a.createElement(I.zx,{color:"secondary",text:"Bitcoin app",isLoading:"Bitcoin"===i,disabled:!!i&&"Bitcoin"!==i,onClick:()=>K(void 0,void 0,void 0,(function*(){if(i)return;let t;c("Bitcoin");try{t=e.useWebHIDLedger?yield Z.Z.create():yield $.Z.create();let r=new(z())(t);try{return yield r.getExtendedPubkey("m/44'/0'/0'/0/0"),void l("success")}catch(e){console.log(e)}return t=yield R.Hn.tryAppOpen(t,"Bitcoin"),r=new(z())(t),yield r.getExtendedPubkey("m/44'/0'/0'/0/0"),void l("success")}catch(e){console.log(e),l("failed")}finally{null==t||t.close().catch(console.log),c("")}}))}),a.createElement(I.zx,{color:"secondary",text:"Bitcoin Test app",isLoading:"Bitcoin Test"===i,disabled:!!i&&"Bitcoin Test"!==i,onClick:()=>K(void 0,void 0,void 0,(function*(){if(i)return;let t;c("Bitcoin Test");try{t=e.useWebHIDLedger?yield Z.Z.create():yield $.Z.create();let r=new(z())(t);try{return yield r.getExtendedPubkey("m/44'/1'/0'/0/0"),void l("success")}catch(e){console.log(e)}return t=yield R.Hn.tryAppOpen(t,"Bitcoin Test"),r=new(z())(t),yield r.getExtendedPubkey("m/44'/1'/0'/0/0"),void l("success")}catch(e){console.log(e),l("failed")}finally{null==t||t.close().catch(console.log),c("")}}))})))}})()))})),G=()=>((0,w.i)(),a.createElement(l,null,a.createElement(D.N,{prefix:"/ledger-grant"}),a.createElement(c.Z5,null,a.createElement(c.AW,{path:"/",element:a.createElement(M,null)}))));i.render(a.createElement((()=>a.createElement(u.g3,null,a.createElement(O.p,null,a.createElement(v.u,null,a.createElement(m.C,null,a.createElement(y.W,null,a.createElement(d.ZL,null),a.createElement(d.nW,null),a.createElement(W,null),a.createElement(G,null))))))),null),document.getElementById("app"))},45493:(e,t,r)=>{r.d(t,{g3:()=>u,oR:()=>d});var n=r(2784),o=r(30640),a=r(11169),i=r(80075),c=r(66222),s=(r(93172),function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function c(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}s((n=n.apply(e,t||[])).next())}))});const l=n.createContext(null),u=({children:e})=>{const[t]=(0,n.useState)((()=>(0,o.r)()));return(0,n.useEffect)((()=>{(0,a.getKeplrFromWindow)().then((e=>{e&&e.__core__getAnalyticsId&&e.__core__getAnalyticsId().then((e=>{t.analyticsStore.setUserId(e)}))}))}),[t.analyticsStore]),(0,n.useEffect)((()=>{const e=(0,c.i)("keplr_keyring_changed",(()=>s(void 0,void 0,void 0,(function*(){yield t.keyRingStore.refreshKeyRingStatus(),yield t.chainStore.updateEnabledChainIdentifiersFromBackground();for(const e of t.chainStore.modularChainInfos)if("cosmos"in e){const r=t.chainStore.getChain(e.chainId);t.accountStore.hasAccount(r.chainId)&&t.accountStore.getAccount(r.chainId).init()}else"starknet"in e?t.starknetAccountStore.getAccount(e.chainId)&&t.accountStore.getAccount(e.chainId).init():"bitcoin"in e&&t.bitcoinAccountStore.getAccount(e.chainId)&&t.accountStore.getAccount(e.chainId).init()})))),r=(0,c.i)("keplr_new_key_created",(e=>s(void 0,void 0,void 0,(function*(){var r;if(yield t.keyRingStore.refreshKeyRingStatus(),e&&(null===(r=t.keyRingStore.selectedKeyInfo)||void 0===r?void 0:r.id)===e){yield t.chainStore.updateEnabledChainIdentifiersFromBackground();for(const e of t.chainStore.modularChainInfos)if("cosmos"in e){const r=t.chainStore.getChain(e.chainId);t.accountStore.hasAccount(r.chainId)&&t.accountStore.getAccount(r.chainId).init()}else"starknet"in e?t.starknetAccountStore.getAccount(e.chainId)&&t.accountStore.getAccount(e.chainId).init():"bitcoin"in e&&t.bitcoinAccountStore.getAccount(e.chainId)&&t.accountStore.getAccount(e.chainId).init()}})))),n=(0,c.i)("keplr_enabled_chain_changed",(e=>s(void 0,void 0,void 0,(function*(){var r;e&&(null===(r=t.keyRingStore.selectedKeyInfo)||void 0===r?void 0:r.id)===e&&(yield t.chainStore.updateEnabledChainIdentifiersFromBackground())})))),o=(0,c.i)("keplr_derivation_path_changed",(e=>s(void 0,void 0,void 0,(function*(){var r;yield t.keyRingStore.refreshKeyRingStatus(),(null==e?void 0:e.chainId)&&t.accountStore.hasAccount(e.chainId)&&t.accountStore.getAccount(e.chainId).init(),(null==e?void 0:e.keyId)&&(null===(r=t.keyRingStore.selectedKeyInfo)||void 0===r?void 0:r.id)===e.keyId&&(yield t.chainStore.updateEnabledChainIdentifiersFromBackground())})))),i=(0,c.i)("keplr_suggested_chain_added",(()=>s(void 0,void 0,void 0,(function*(){yield t.keyRingStore.refreshKeyRingStatus(),yield t.chainStore.updateChainInfosFromBackground(),yield t.chainStore.updateEnabledChainIdentifiersFromBackground()})))),l=(0,c.i)("keplr_suggested_chain_removed",(()=>s(void 0,void 0,void 0,(function*(){yield t.keyRingStore.refreshKeyRingStatus(),yield t.chainStore.updateChainInfosFromBackground(),yield t.chainStore.updateEnabledChainIdentifiersFromBackground()})))),u=(0,c.i)("keplr_keyring_locked",(()=>s(void 0,void 0,void 0,(function*(){yield t.keyRingStore.refreshKeyRingStatus()})))),d=(0,c.i)("keplr_ledger_app_connected",(()=>s(void 0,void 0,void 0,(function*(){for(const e of t.chainStore.modularChainInfos){const r=t.accountStore.getAccount(e.chainId);r.walletStatus===a.WalletStatus.Rejected&&r.init()}}))));return()=>{e(),r(),n(),o(),i(),l(),u(),d()}}),[t]),(0,n.useEffect)((()=>{const e=(0,i.autorun)((()=>{if(!t.keyRingStore.isInitialized)return;if(!t.uiConfigStore.isInitialized)return;const e={};for(const r of t.keyRingStore.keyInfos){let t=r.insensitive.keyRingType;if("private-key"===t){const e=r.insensitive.keyRingMeta;e.web3Auth&&e.web3Auth.type&&(t="web3_auth_"+e.web3Auth.type)}t&&(t="keyring_"+t+"_num",e[t]||(e[t]=0),e[t]+=1)}let r="none";if(t.keyRingStore.selectedKeyInfo&&(r=t.keyRingStore.selectedKeyInfo.insensitive.keyRingType,"private-key"===r)){const e=t.keyRingStore.selectedKeyInfo.insensitive.keyRingMeta;e.web3Auth&&e.web3Auth.type&&(r="web3_auth_"+e.web3Auth.type)}t.analyticsStore.setUserProperties(Object.assign({account_count:t.keyRingStore.keyInfos.length,is_developer_mode:t.uiConfigStore.isDeveloper,current_keyring_type:r},e)),t.analyticsAmplitudeStore.setUserProperties(Object.assign({account_count:t.keyRingStore.keyInfos.length,is_developer_mode:t.uiConfigStore.isDeveloper,current_keyring_type:r},e))}));return()=>{e&&e()}}),[]),n.createElement(l.Provider,{value:t},e)},d=()=>{const e=n.useContext(l);if(!e)throw new Error("You have forgot to use StoreProvider");return e}},66222:(e,t,r)=>{r.d(t,{i:()=>a});var n=r(48834);const o=(()=>{const e=new Uint8Array(4);return crypto.getRandomValues(e),n.Buffer.from(e).toString("hex")})(),a=(e,t)=>{const r=r=>{r.data&&"__global_event_except_self"===r.data.type&&r.data.eventName===e&&r.data.viewId!==o&&t(r.data.params)};return window.addEventListener("message",r),()=>{window.removeEventListener("message",r)}}},57918:(e,t,r)=>{r.d(t,{Hn:()=>i.H,lp:()=>a,V1:()=>s});var n=r(2784),o=r(48570);function a(e){return n.Children.toArray(e).reduce(((e,t)=>(0,o.isFragment)(t)?t.props.children?e.concat(a(t.props.children)):e:(e.push(t),e)),[])}var i=r(64259),c=(r(5875),r(21561));const s=e=>{if("/unlock"===e.uri)return;const t=window.location.href.includes("interaction=true"),r=`interaction=true&interactionInternal=${e.isInternal}`;let n=e.uri;n.startsWith("/")&&(n=n.slice(1));let o=browser.runtime.getURL(`/${(0,c.S0)()?"sidePanel":"popup"}.html#/`+n);o.includes("?")?o+="&"+r:o+="?"+r,t?window.location.replace(o):window.location.href=o}}}]);