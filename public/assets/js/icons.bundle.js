var Y1=(c,a)=>()=>(c&&(a=c(c=0)),a);var q3=(c,a)=>()=>(a||c((a={exports:{}}).exports,a),a.exports);function g1(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,l=Array(a);e<a;e++)l[e]=c[e];return l}function T3(c){if(Array.isArray(c))return c}function D3(c){if(Array.isArray(c))return g1(c)}function j3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function V1(c,a){for(var e=0;e<a.length;e++){var l=a[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,C2(l.key),l)}}function R3(c,a,e){return a&&V1(c.prototype,a),e&&V1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function c1(c,a){var e=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!e){if(Array.isArray(c)||(e=q1(c))||a&&c&&typeof c.length=="number"){e&&(c=e);var l=0,r=function(){};return{s:r,n:function(){return l>=c.length?{done:!0}:{done:!1,value:c[l++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,n=!0,t=!1;return{s:function(){e=e.call(c)},n:function(){var f=e.next();return n=f.done,f},e:function(f){t=!0,i=f},f:function(){try{n||e.return==null||e.return()}finally{if(t)throw i}}}}function d(c,a,e){return(a=C2(a))in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function _3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function W3(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var l,r,i,n,t=[],f=!0,s=!1;try{if(i=(e=e.call(c)).next,a===0){if(Object(e)!==e)return;f=!1}else for(;!(f=(l=i.call(e)).done)&&(t.push(l.value),t.length!==a);f=!0);}catch(u){s=!0,r=u}finally{try{if(!f&&e.return!=null&&(n=e.return(),Object(n)!==n))return}finally{if(s)throw r}}return t}}function $3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(c);a&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,l)}return e}function o(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?J1(Object(e),!0).forEach(function(l){d(c,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):J1(Object(e)).forEach(function(l){Object.defineProperty(c,l,Object.getOwnPropertyDescriptor(e,l))})}return c}function i1(c,a){return T3(c)||W3(c,a)||q1(c,a)||$3()}function k(c){return D3(c)||_3(c)||q1(c)||G3()}function B3(c,a){if(typeof c!="object"||!c)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var l=e.call(c,a||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function C2(c){var a=B3(c,"string");return typeof a=="symbol"?a:a+""}function l1(c){"@babel/helpers - typeof";return l1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l1(c)}function q1(c,a){if(c){if(typeof c=="string")return g1(c,a);var e={}.toString.call(c).slice(8,-1);return e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set"?Array.from(c):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g1(c,a):void 0}}function X(c){return new Proxy(c,{get:function(e,l){return l in e?e[l]:e[x]}})}function A5(c){var a=v.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function P5(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}function F5(c){return Y.push(c),function(){Y.splice(Y.indexOf(c),1)}}function I5(c){if(!(!c||!I)){var a=v.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=v.head.childNodes,l=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(l=i)}return v.head.insertBefore(a,l),c}}function n2(){for(var c=12,a="";c-- >0;)a+=E5[Math.random()*62|0];return a}function B(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function _1(c){return c.classList?B(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function i3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function O5(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(i3(c[e]),'" ')},"").trim()}function t1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function W1(c){return c.size!==w.size||c.x!==w.x||c.y!==w.y||c.rotate!==w.rotate||c.flipX||c.flipY}function q5(c){var a=c.transform,e=c.containerWidth,l=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(t)},s={transform:"translate(".concat(l/2*-1," -256)")};return{outer:r,inner:f,path:s}}function T5(c){var a=c.transform,e=c.width,l=e===void 0?y1:e,r=c.height,i=r===void 0?y1:r,n=c.startCentered,t=n===void 0?!1:n,f="";return t&&P2?f+="translate(".concat(a.x/E-l/2,"em, ").concat(a.y/E-i/2,"em) "):t?f+="translate(calc(-50% + ".concat(a.x/E,"em), calc(-50% + ").concat(a.y/E,"em)) "):f+="translate(".concat(a.x/E,"em, ").concat(a.y/E,"em) "),f+="scale(".concat(a.size/E*(a.flipX?-1:1),", ").concat(a.size/E*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}function t3(){var c=Z2,a=c3,e=z.cssPrefix,l=z.replacementClass,r=D5;if(e!==c||l!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(t,".".concat(l))}return r}function M1(){z.autoAddCss&&!i2&&(I5(t3()),i2=!0)}function R5(c){I&&(r1?setTimeout(c,0):f3.push(c))}function K(c){var a=c.tag,e=c.attributes,l=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?i3(c):"<".concat(a," ").concat(O5(l),">").concat(i.map(K).join(""),"</").concat(a,">")}function t2(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}function s3(c){return k(c).length!==1?null:c.codePointAt(0).toString(16)}function f2(c){return Object.keys(c).reduce(function(a,e){var l=c[e],r=!!l.icon;return r?a[l.iconName]=l.icon:a[e]=l,a},{})}function k1(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=e.skipHooks,r=l===void 0?!1:l,i=f2(a);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(c,f2(a)):C.styles[c]=o(o({},C.styles[c]||{}),i),c==="fas"&&k1("fa",a)}function G5(c){return~w5.indexOf(c)}function B5(c,a){var e=a.split("-"),l=e[0],r=e.slice(1).join("-");return l===c&&r!==""&&!G5(r)?r:null}function G1(c,a){return(z3[c]||{})[a]}function U5(c,a){return(u3[c]||{})[a]}function D(c,a){return(M3[c]||{})[a]}function b3(c){return d3[c]||{prefix:null,iconName:null}}function H5(c){var a=p3[c],e=G1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function q(){return $1}function Y5(c){var a=x,e=m3.reduce(function(l,r){return l[r]="".concat(z.cssPrefix,"-").concat(r),l},{});return J2.forEach(function(l){(c.includes(e[l])||c.some(function(r){return $5[l].includes(r)}))&&(a=l)}),a}function f1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,l=e===void 0?x:e,r=L5[l][c];if(l===J&&!c)return"fad";var i=l2[l][c]||l2[l][r],n=c in C.styles?c:null,t=i||n||null;return t}function V5(c){var a=[],e=null;return c.forEach(function(l){var r=B5(z.cssPrefix,l);r?e=r:l&&a.push(l)}),{iconName:e,rest:a}}function o2(c){return c.sort().filter(function(a,e,l){return l.indexOf(a)===e})}function o1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,l=e===void 0?!1:e,r=null,i=o2(c.filter(function(p){return s2.includes(p)})),n=o2(c.filter(function(p){return!s2.includes(p)})),t=i.filter(function(p){return r=p,!I2.includes(p)}),f=i1(t,1),s=f[0],u=s===void 0?null:s,m=Y5(i),M=o(o({},V5(n)),{},{prefix:f1(u,{family:m})});return o(o(o({},M),Q5({values:c,family:m,styles:V,config:z,canonical:M,givenPrefix:r})),J5(l,r,M))}function J5(c,a,e){var l=e.prefix,r=e.iconName;if(c||!l||!r)return{prefix:l,iconName:r};var i=a==="fa"?b3(r):{},n=D(l,r);return r=i.iconName||n||r,l=i.prefix||l,l==="far"&&!V.far&&V.fas&&!z.autoFetchSvg&&(l="fas"),{prefix:l,iconName:r}}function Q5(c){var a=c.values,e=c.family,l=c.canonical,r=c.givenPrefix,i=r===void 0?"":r,n=c.styles,t=n===void 0?{}:n,f=c.config,s=f===void 0?{}:f,u=e===J,m=a.includes("fa-duotone")||a.includes("fad"),M=s.familyDefault==="duotone",p=l.prefix==="fad"||l.prefix==="fa-duotone";if(!u&&(m||M||p)&&(l.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(l.prefix="fab"),!l.prefix&&X5.includes(e)){var h=Object.keys(t).find(function(y){return K5.includes(y)});if(h||s.autoFetchSvg){var b=p4.get(e).defaultShortPrefixId;l.prefix=b,l.iconName=D(l.prefix,l.iconName)||l.iconName}}return(l.prefix==="fa"||i==="fa")&&(l.prefix=q()||"fas"),l}function a6(c,a){var e=a.mixoutsTo;return m2=c,W={},Object.keys($).forEach(function(l){c6.indexOf(l)===-1&&delete $[l]}),m2.forEach(function(l){var r=l.mixout?l.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),l1(r[n])==="object"&&Object.keys(r[n]).forEach(function(t){e[n]||(e[n]={}),e[n][t]=r[n][t]})}),l.hooks){var i=l.hooks();Object.keys(i).forEach(function(n){W[n]||(W[n]=[]),W[n].push(i[n])})}l.provides&&l.provides($)}),e}function w1(c,a){for(var e=arguments.length,l=new Array(e>2?e-2:0),r=2;r<e;r++)l[r-2]=arguments[r];var i=W[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(l))}),a}function R(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),l=1;l<a;l++)e[l-1]=arguments[l];var r=W[c]||[];r.forEach(function(i){i.apply(null,e)})}function T(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return $[c]?$[c].apply(null,a):void 0}function A1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||q();if(a)return a=D(e,a)||a,t2(g3.definitions,e,a)||t2(C.styles,e,a)}function s1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(l){return K(l)})}}),Object.defineProperty(c,"node",{get:function(){if(I){var l=v.createElement("div");return l.innerHTML=c.html,l.children}}}),c}function i6(c){var a=c.children,e=c.main,l=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(W1(n)&&e.found&&!l.found){var t=e.width,f=e.height,s={x:t/f/2,y:.5};r.style=t1(o(o({},i),{},{"transform-origin":"".concat(s.x+n.x/16,"em ").concat(s.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function t6(c){var a=c.prefix,e=c.iconName,l=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:n}),children:l}]}]}function f6(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(e){return e in c})}function B1(c){var a=c.icons,e=a.main,l=a.mask,r=c.prefix,i=c.iconName,n=c.transform,t=c.symbol,f=c.maskId,s=c.extra,u=c.watchable,m=u===void 0?!1:u,M=l.found?l:e,p=M.width,h=M.height,b=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(A){return s.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(s.classes).join(" "),y={children:[],attributes:o(o({},s.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:s.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(h)})};!f6(s.attributes)&&!s.attributes["aria-hidden"]&&(y.attributes["aria-hidden"]="true"),m&&(y.attributes[j]="");var g=o(o({},y),{},{prefix:r,iconName:i,main:e,mask:l,maskId:f,transform:n,symbol:t,styles:o({},s.styles)}),L=l.found&&e.found?T("generateAbstractMask",g)||{children:[],attributes:{}}:T("generateAbstractIcon",g)||{children:[],attributes:{}},S=L.children,_=L.attributes;return g.children=S,g.attributes=_,t?t6(g):i6(g)}function z2(c){var a=c.content,e=c.width,l=c.height,r=c.transform,i=c.extra,n=c.watchable,t=n===void 0?!1:n,f=o(o({},i.attributes),{},{class:i.classes.join(" ")});t&&(f[j]="");var s=o({},i.styles);W1(r)&&(s.transform=T5({transform:r,startCentered:!0,width:e,height:l}),s["-webkit-transform"]=s.transform);var u=t1(s);u.length>0&&(f.style=u);var m=[];return m.push({tag:"span",attributes:f,children:[a]}),m}function o6(c){var a=c.content,e=c.extra,l=o(o({},e.attributes),{},{class:e.classes.join(" ")}),r=t1(e.styles);r.length>0&&(l.style=r);var i=[];return i.push({tag:"span",attributes:l,children:[a]}),i}function P1(c){var a=c[0],e=c[1],l=c.slice(4),r=i1(l,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(p1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(p1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(p1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}function m6(c,a){!e3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function F1(c,a){var e=a;return a==="fa"&&z.styleDefault!==null&&(a=q()),new Promise(function(l,r){if(e==="fa"){var i=b3(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&b1[a]&&b1[a][c]){var n=b1[a][c];return l(P1(n))}m6(c,a),l(o(o({},s6),{},{icon:z.showMissingIcons&&c?T("missingIconAbstract")||{}:{}}))})}function d2(c){var a=c.getAttribute?c.getAttribute(j):null;return typeof a=="string"}function u6(c){var a=c.getAttribute?c.getAttribute(D1):null,e=c.getAttribute?c.getAttribute(j1):null;return a&&e}function d6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function p6(){if(z.autoReplaceSvg===!0)return e1.replace;var c=e1[z.autoReplaceSvg];return c||e1.replace}function M6(c){return v.createElementNS("http://www.w3.org/2000/svg",c)}function v6(c){return v.createElement(c)}function y3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,l=e===void 0?c.tag==="svg"?M6:v6:e;if(typeof c=="string")return v.createTextNode(c);var r=l(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(y3(n,{ceFn:l}))}),r}function b6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}function p2(c){c()}function L3(c,a){var e=typeof a=="function"?a:a1;if(c.length===0)e();else{var l=p2;z.mutateApproach===x5&&(l=O.requestAnimationFrame||p2),l(function(){var r=p6(),i=U1.begin("mutate");c.map(r),i(),e()})}}function N3(){H1=!0}function E1(){H1=!1}function M2(c){if(Z1&&z.observeMutations){var a=c.treeCallback,e=a===void 0?a1:a,l=c.nodeCallback,r=l===void 0?a1:l,i=c.pseudoElementsCallback,n=i===void 0?a1:i,t=c.observeMutationsRoot,f=t===void 0?v:t;n1=new Z1(function(s){if(!H1){var u=q();B(s).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!d2(m.addedNodes[0])&&(z.searchPseudoElements&&n(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&z.searchPseudoElements&&n([m.target],!0),m.type==="attributes"&&d2(m.target)&&~k5.indexOf(m.attributeName))if(m.attributeName==="class"&&u6(m.target)){var M=o1(_1(m.target)),p=M.prefix,h=M.iconName;m.target.setAttribute(D1,p||u),h&&m.target.setAttribute(j1,h)}else d6(m.target)&&r(m.target)})}}),I&&n1.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function h6(){n1&&n1.disconnect()}function g6(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(l,r){var i=r.split(":"),n=i[0],t=i.slice(1);return n&&t.length>0&&(l[n]=t.join(":").trim()),l},{})),e}function x6(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),l=c.innerText!==void 0?c.innerText.trim():"",r=o1(_1(c));return r.prefix||(r.prefix=q()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&l.length>0&&(r.iconName=U5(r.prefix,c.innerText)||G1(r.prefix,s3(c.innerText))),!r.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function y6(c){var a=B(c.attributes).reduce(function(e,l){return e.name!=="class"&&e.name!=="style"&&(e[l.name]=l.value),e},{});return a}function L6(){return{iconName:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=x6(c),l=e.iconName,r=e.prefix,i=e.rest,n=y6(c),t=w1("parseNodeAttributes",{},c),f=a.styleParser?g6(c):[];return o({iconName:l,prefix:r,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},t)}function S3(c){var a=z.autoReplaceSvg==="nest"?v2(c,{styleParser:!1}):v2(c);return~a.extra.classes.indexOf(r3)?T("generateLayersText",c,a):T("generateSvgReplacementMutation",c,a)}function S6(){return[].concat(k(X2),k(K2))}function b2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var e=v.documentElement.classList,l=function(m){return e.add("".concat(e2,"-").concat(m))},r=function(m){return e.remove("".concat(e2,"-").concat(m))},i=z.autoFetchSvg?S6():I2.concat(Object.keys(N6));i.includes("fa")||i.push("fa");var n=[".".concat(r3,":not([").concat(j,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(j,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=B(c.querySelectorAll(n))}catch{}if(t.length>0)l("pending"),r("complete");else return Promise.resolve();var f=U1.begin("onTree"),s=t.reduce(function(u,m){try{var M=S3(m);M&&u.push(M)}catch(p){e3||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,m){Promise.all(s).then(function(M){L3(M,function(){l("active"),l("complete"),r("pending"),typeof a=="function"&&a(),f(),u()})}).catch(function(M){f(),m(M)})})}function C6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;S3(c).then(function(e){e&&L3([e],a)})}function k6(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(a||{}).icon?a:A1(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:A1(r||{})),c(l,o(o({},e),{},{mask:r}))}}function O6(c){var a=c.replace(C3,"");return s3(k(a)[0]||"")}function q6(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),e=c.getPropertyValue("content"),l=e.replace(C3,""),r=l.codePointAt(0),i=r>=h2[0]&&r<=h2[1],n=l.length===2?l[0]===l[1]:!1;return i||n||a}function T6(c,a){var e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(a),r=isNaN(l)?"normal":l;return(O1[e]||{})[r]||E6[e]}function x2(c,a){var e="".concat(g5).concat(a.replace(":","-"));return new Promise(function(l,r){if(c.getAttribute(e)!==null)return l();var i=B(c.children),n=i.filter(function(m1){return m1.getAttribute(L1)===a})[0],t=O.getComputedStyle(c,a),f=t.getPropertyValue("font-family"),s=f.match(S5),u=t.getPropertyValue("font-weight"),m=t.getPropertyValue("content");if(n&&!s)return c.removeChild(n),l();if(s&&m!=="none"&&m!==""){var M=t.getPropertyValue("content"),p=T6(f,u),h=O6(M),b=s[0].startsWith("FontAwesome"),y=q6(t),g=G1(p,h),L=g;if(b){var S=H5(h);S.iconName&&S.prefix&&(g=S.iconName,p=S.prefix)}if(g&&!y&&(!n||n.getAttribute(D1)!==p||n.getAttribute(j1)!==L)){c.setAttribute(e,L),n&&c.removeChild(n);var _=L6(),A=_.extra;A.attributes[L1]=a,F1(g,p).then(function(m1){var E3=B1(o(o({},_),{},{icons:{main:m1,mask:h3()},prefix:p,iconName:L,extra:A,watchable:!0})),z1=v.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(z1,c.firstChild):c.appendChild(z1),z1.outerHTML=E3.map(function(O3){return K(O3)}).join(`
`),c.removeAttribute(e),l()}).catch(r)}else l()}else l()})}function D6(c){return Promise.all([x2(c,"::before"),x2(c,"::after")])}function j6(c){return c.parentNode!==document.head&&!~y5.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(L1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function y2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(I){var e;if(a)e=c;else if(z.searchPseudoElementsFullScan)e=c.querySelectorAll("*");else{var l=new Set,r=c1(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var n=i.value;try{var t=c1(n.cssRules),f;try{for(t.s();!(f=t.n()).done;){var s=f.value,u=_6(s.selectorText),m=c1(u),M;try{for(m.s();!(M=m.n()).done;){var p=M.value;l.add(p)}}catch(b){m.e(b)}finally{m.f()}}}catch(b){t.e(b)}finally{t.f()}}catch(b){z.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(n.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!l.size)return;var h=Array.from(l).join(", ");try{e=c.querySelectorAll(h)}catch{}}return new Promise(function(b,y){var g=B(e).filter(j6).map(D6),L=U1.begin("searchPseudoElements");N3(),Promise.all(g).then(function(){L(),E1(),b()}).catch(function(){L(),E1(),y()})})}}function S2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function B6(c){return c.tag==="g"?c.children:[c]}var X1,T1,k2,w2,A2,U3,K1,Q1,O,v,Z1,Q,K6,I,P2,u1,H3,Y3,F2,V3,I2,x,J,E2,O2,q2,T2,D2,j2,R2,_2,W2,$2,G2,B2,U2,H2,Y2,V2,J3,X3,K3,Q3,Z3,c4,a4,e4,l4,r4,n4,i4,t4,f4,o4,s4,m4,z4,J2,Q6,u4,d4,p4,M4,X2,c2,v4,b4,h4,g4,x4,Z6,y4,L4,N4,a2,d1,Z,S4,C4,k4,w4,A4,P4,F4,I4,E4,O4,q4,T4,D4,j4,R4,_4,W4,$4,G4,B4,U4,H4,Y4,V4,J4,X4,K4,Q4,Z4,c5,a5,e5,l5,r5,n5,i5,t5,c8,f5,o5,s5,m5,a8,z5,u5,x1,d5,K2,p5,Q2,M5,v5,b5,h5,P,y1,Z2,c3,j,L1,g5,D1,j1,e2,x5,y5,a3,e3,l3,L5,N1,l2,S1,R1,C1,e8,N5,r3,S5,C5,l8,k5,p1,w5,H,r2,n3,G,z,Y,E,w,E5,D5,i2,j5,F,C,f3,o3,r1,_5,v1,V,W5,m3,$5,$1,z3,u3,d3,p3,M3,v3,h3,s2,X5,K5,Z5,m2,W,$,c6,g3,e6,l6,r6,N,n6,b1,s6,u2,I1,U,z6,x3,U1,a1,e1,H1,n1,N6,w6,A6,P6,F6,I6,C3,h2,g2,O1,E6,R6,_6,W6,L2,$6,N2,G6,h1,U6,H6,Y6,V6,r8,n8,k3,w3,i8,t8,f8,o8,s8,m8,z8,A3=Y1(()=>{X1=function(){},T1={},k2={},w2=null,A2={mark:X1,measure:X1};try{typeof window<"u"&&(T1=window),typeof document<"u"&&(k2=document),typeof MutationObserver<"u"&&(w2=MutationObserver),typeof performance<"u"&&(A2=performance)}catch{}U3=T1.navigator||{},K1=U3.userAgent,Q1=K1===void 0?"":K1,O=T1,v=k2,Z1=w2,Q=A2,K6=!!O.document,I=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",P2=~Q1.indexOf("MSIE")||~Q1.indexOf("Trident/"),H3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Y3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,F2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},V3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},I2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],x="classic",J="duotone",E2="sharp",O2="sharp-duotone",q2="chisel",T2="etch",D2="jelly",j2="jelly-duo",R2="jelly-fill",_2="notdog",W2="notdog-duo",$2="slab",G2="slab-press",B2="thumbprint",U2="utility",H2="utility-duo",Y2="utility-fill",V2="whiteboard",J3="Classic",X3="Duotone",K3="Sharp",Q3="Sharp Duotone",Z3="Chisel",c4="Etch",a4="Jelly",e4="Jelly Duo",l4="Jelly Fill",r4="Notdog",n4="Notdog Duo",i4="Slab",t4="Slab Press",f4="Thumbprint",o4="Utility",s4="Utility Duo",m4="Utility Fill",z4="Whiteboard",J2=[x,J,E2,O2,q2,T2,D2,j2,R2,_2,W2,$2,G2,B2,U2,H2,Y2,V2],Q6=(u1={},d(d(d(d(d(d(d(d(d(d(u1,x,J3),J,X3),E2,K3),O2,Q3),q2,Z3),T2,c4),D2,a4),j2,e4),R2,l4),_2,r4),d(d(d(d(d(d(d(d(u1,W2,n4),$2,i4),G2,t4),B2,f4),U2,o4),H2,s4),Y2,m4),V2,z4)),u4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},d4={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},p4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),M4={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},X2=["fak","fa-kit","fakd","fa-kit-duotone"],c2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},v4=["kit"],b4="kit",h4="kit-duotone",g4="Kit",x4="Kit Duotone",Z6=d(d({},b4,g4),h4,x4),y4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},L4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},N4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},a2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],C4="classic",k4="duotone",w4="sharp",A4="sharp-duotone",P4="chisel",F4="etch",I4="jelly",E4="jelly-duo",O4="jelly-fill",q4="notdog",T4="notdog-duo",D4="slab",j4="slab-press",R4="thumbprint",_4="utility",W4="utility-duo",$4="utility-fill",G4="whiteboard",B4="Classic",U4="Duotone",H4="Sharp",Y4="Sharp Duotone",V4="Chisel",J4="Etch",X4="Jelly",K4="Jelly Duo",Q4="Jelly Fill",Z4="Notdog",c5="Notdog Duo",a5="Slab",e5="Slab Press",l5="Thumbprint",r5="Utility",n5="Utility Duo",i5="Utility Fill",t5="Whiteboard",c8=(d1={},d(d(d(d(d(d(d(d(d(d(d1,C4,B4),k4,U4),w4,H4),A4,Y4),P4,V4),F4,J4),I4,X4),E4,K4),O4,Q4),q4,Z4),d(d(d(d(d(d(d(d(d1,T4,c5),D4,a5),j4,e5),R4,l5),_4,r5),W4,n5),$4,i5),G4,t5)),f5="kit",o5="kit-duotone",s5="Kit",m5="Kit Duotone",a8=d(d({},f5,s5),o5,m5),z5={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},u5={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},x1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},d5=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],K2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(S4,d5),p5=["solid","regular","light","thin","duotone","brands","semibold"],Q2=[1,2,3,4,5,6,7,8,9,10],M5=Q2.concat([11,12,13,14,15,16,17,18,19,20]),v5=["aw","fw","pull-left","pull-right"],b5=[].concat(k(Object.keys(u5)),p5,v5,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(Q2.map(function(c){return"".concat(c,"x")})).concat(M5.map(function(c){return"w-".concat(c)})),h5={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P="___FONT_AWESOME___",y1=16,Z2="fa",c3="svg-inline--fa",j="data-fa-i2svg",L1="data-fa-pseudo-element",g5="data-fa-pseudo-element-pending",D1="data-prefix",j1="data-icon",e2="fontawesome-i2svg",x5="async",y5=["HTML","HEAD","STYLE","SCRIPT"],a3=["::before","::after",":before",":after"],e3=(function(){try{return!0}catch{return!1}})();l3=o({},F2);l3[x]=o(o(o(o({},{"fa-duotone":"duotone"}),F2[x]),c2.kit),c2["kit-duotone"]);L5=X(l3),N1=o({},M4);N1[x]=o(o(o(o({},{duotone:"fad"}),N1[x]),a2.kit),a2["kit-duotone"]);l2=X(N1),S1=o({},x1);S1[x]=o(o({},S1[x]),N4.kit);R1=X(S1),C1=o({},z5);C1[x]=o(o({},C1[x]),y4.kit);e8=X(C1),N5=H3,r3="fa-layers-text",S5=Y3,C5=o({},u4),l8=X(C5),k5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p1=V3,w5=[].concat(k(v4),k(b5)),H=O.FontAwesomeConfig||{};v&&typeof v.querySelector=="function"&&(r2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],r2.forEach(function(c){var a=i1(c,2),e=a[0],l=a[1],r=P5(A5(e));r!=null&&(H[l]=r)}));n3={styleDefault:"solid",familyDefault:x,cssPrefix:Z2,replacementClass:c3,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};H.familyPrefix&&(H.cssPrefix=H.familyPrefix);G=o(o({},n3),H);G.autoReplaceSvg||(G.observeMutations=!1);z={};Object.keys(n3).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(e){G[c]=e,Y.forEach(function(l){return l(z)})},get:function(){return G[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){G.cssPrefix=a,Y.forEach(function(e){return e(z)})},get:function(){return G.cssPrefix}});O.FontAwesomeConfig=z;Y=[];E=y1,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};E5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";D5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;i2=!1;j5={mixout:function(){return{dom:{css:t3,insertCss:M1}}},hooks:function(){return{beforeDOMElementCreation:function(){M1()},beforeI2svg:function(){M1()}}}},F=O||{};F[P]||(F[P]={});F[P].styles||(F[P].styles={});F[P].hooks||(F[P].hooks={});F[P].shims||(F[P].shims=[]);C=F[P],f3=[],o3=function(){v.removeEventListener("DOMContentLoaded",o3),r1=1,f3.map(function(a){return a()})},r1=!1;I&&(r1=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),r1||v.addEventListener("DOMContentLoaded",o3));_5=function(a,e){return function(l,r,i,n){return a.call(e,l,r,i,n)}},v1=function(a,e,l,r){var i=Object.keys(a),n=i.length,t=r!==void 0?_5(e,r):e,f,s,u;for(l===void 0?(f=1,u=a[i[0]]):(f=0,u=l);f<n;f++)s=i[f],u=t(u,a[s],s,a);return u};V=C.styles,W5=C.shims,m3=Object.keys(R1),$5=m3.reduce(function(c,a){return c[a]=Object.keys(R1[a]),c},{}),$1=null,z3={},u3={},d3={},p3={},M3={};v3=function(){var a=function(i){return v1(V,function(n,t,f){return n[f]=v1(t,i,{}),n},{})};z3=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var t=i[2].filter(function(f){return typeof f=="number"});t.forEach(function(f){r[f.toString(16)]=n})}return r}),u3=a(function(r,i,n){if(r[n]=n,i[2]){var t=i[2].filter(function(f){return typeof f=="string"});t.forEach(function(f){r[f]=n})}return r}),M3=a(function(r,i,n){var t=i[2];return r[n]=n,t.forEach(function(f){r[f]=n}),r});var e="far"in V||z.autoFetchSvg,l=v1(W5,function(r,i){var n=i[0],t=i[1],f=i[2];return t==="far"&&!e&&(t="fas"),typeof n=="string"&&(r.names[n]={prefix:t,iconName:f}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:t,iconName:f}),r},{names:{},unicodes:{}});d3=l.names,p3=l.unicodes,$1=f1(z.styleDefault,{family:z.familyDefault})};F5(function(c){$1=f1(c.styleDefault,{family:z.familyDefault})});v3();h3=function(){return{prefix:null,iconName:null,rest:[]}};s2=K2.concat(X2);X5=J2.filter(function(c){return c!==x||c!==J}),K5=Object.keys(x1).filter(function(c){return c!==x}).map(function(c){return Object.keys(x1[c])}).flat();Z5=(function(){function c(){j3(this,c),this.definitions={}}return R3(c,[{key:"add",value:function(){for(var e=this,l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){e.definitions[t]=o(o({},e.definitions[t]||{}),n[t]),k1(t,n[t]);var f=R1[x][t];f&&k1(f,n[t]),v3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,l){var r=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(r).map(function(i){var n=r[i],t=n.prefix,f=n.iconName,s=n.icon,u=s[2];e[t]||(e[t]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(e[t][m]=s)}),e[t][f]=s}),e}}])})(),m2=[],W={},$={},c6=Object.keys($);g3=new Z5,e6=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,R("noAuto")},l6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(R("beforeI2svg",a),T("pseudoElements2svg",a),T("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,R5(function(){n6({autoReplaceSvgRoot:e}),R("watch",a)})}},r6={icon:function(a){if(a===null)return null;if(l1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:D(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],l=f1(a[0]);return{prefix:l,iconName:D(l,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(N5))){var r=o1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:D(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=q();return{prefix:i,iconName:D(i,a)||a}}}},N={noAuto:e6,config:z,dom:l6,parse:r6,library:g3,findIconDefinition:A1,toHtml:K},n6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,l=e===void 0?v:e;(Object.keys(C.styles).length>0||z.autoFetchSvg)&&I&&z.autoReplaceSvg&&N.dom.i2svg({node:l})};b1=C.styles;s6={found:!1,width:512,height:512};u2=function(){},I1=z.measurePerformance&&Q&&Q.mark&&Q.measure?Q:{mark:u2,measure:u2},U='FA "7.1.0"',z6=function(a){return I1.mark("".concat(U," ").concat(a," begins")),function(){return x3(a)}},x3=function(a){I1.mark("".concat(U," ").concat(a," ends")),I1.measure("".concat(U," ").concat(a),"".concat(U," ").concat(a," begins"),"".concat(U," ").concat(a," ends"))},U1={begin:z6,end:x3},a1=function(){};e1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(y3(r),e)}),e.getAttribute(j)===null&&z.keepOriginalSource){var l=v.createComment(b6(e));e.parentNode.replaceChild(l,e)}else e.remove()},nest:function(a){var e=a[0],l=a[1];if(~_1(e).indexOf(z.replacementClass))return e1.replace(a);var r=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){var i=l[0].attributes.class.split(" ").reduce(function(t,f){return f===z.replacementClass||f.match(r)?t.toSvg.push(f):t.toNode.push(f),t},{toNode:[],toSvg:[]});l[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=l.map(function(t){return K(t)}).join(`
`);e.setAttribute(j,""),e.innerHTML=n}};H1=!1;n1=null;N6=C.styles;w6=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=e.transform,r=l===void 0?w:l,i=e.symbol,n=i===void 0?!1:i,t=e.mask,f=t===void 0?null:t,s=e.maskId,u=s===void 0?null:s,m=e.classes,M=m===void 0?[]:m,p=e.attributes,h=p===void 0?{}:p,b=e.styles,y=b===void 0?{}:b;if(a){var g=a.prefix,L=a.iconName,S=a.icon;return s1(o({type:"icon"},a),function(){return R("beforeDOMElementCreation",{iconDefinition:a,params:e}),B1({icons:{main:P1(S),mask:f?P1(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:L,transform:o(o({},w),r),symbol:n,maskId:u,extra:{attributes:h,styles:y,classes:M}})})}},A6={mixout:function(){return{icon:k6(w6)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=b2,e.nodeCallback=C6,e}}},provides:function(a){a.i2svg=function(e){var l=e.node,r=l===void 0?v:l,i=e.callback,n=i===void 0?function(){}:i;return b2(r,n)},a.generateSvgReplacementMutation=function(e,l){var r=l.iconName,i=l.prefix,n=l.transform,t=l.symbol,f=l.mask,s=l.maskId,u=l.extra;return new Promise(function(m,M){Promise.all([F1(r,i),f.iconName?F1(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var h=i1(p,2),b=h[0],y=h[1];m([e,B1({icons:{main:b,mask:y},prefix:i,iconName:r,transform:n,symbol:t,maskId:s,extra:u,watchable:!0})])}).catch(M)})},a.generateAbstractIcon=function(e){var l=e.children,r=e.attributes,i=e.main,n=e.transform,t=e.styles,f=t1(t);f.length>0&&(r.style=f);var s;return W1(n)&&(s=T("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),l.push(s||i.icon),{children:l,attributes:r}}}},P6={mixout:function(){return{layer:function(e){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.classes,i=r===void 0?[]:r;return s1({type:"layer"},function(){R("beforeDOMElementCreation",{assembler:e,params:l});var n=[];return e(function(t){Array.isArray(t)?t.map(function(f){n=n.concat(f.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(k(i)).join(" ")},children:n}]})}}}},F6={mixout:function(){return{counter:function(e){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.title,i=r===void 0?null:r,n=l.classes,t=n===void 0?[]:n,f=l.attributes,s=f===void 0?{}:f,u=l.styles,m=u===void 0?{}:u;return s1({type:"counter",content:e},function(){return R("beforeDOMElementCreation",{content:e,params:l}),o6({content:e.toString(),title:i,extra:{attributes:s,styles:m,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(k(t))}})})}}}},I6={mixout:function(){return{text:function(e){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.transform,i=r===void 0?w:r,n=l.classes,t=n===void 0?[]:n,f=l.attributes,s=f===void 0?{}:f,u=l.styles,m=u===void 0?{}:u;return s1({type:"text",content:e},function(){return R("beforeDOMElementCreation",{content:e,params:l}),z2({content:e,transform:o(o({},w),i),extra:{attributes:s,styles:m,classes:["".concat(z.cssPrefix,"-layers-text")].concat(k(t))}})})}}},provides:function(a){a.generateLayersText=function(e,l){var r=l.transform,i=l.extra,n=null,t=null;if(P2){var f=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();n=s.width/f,t=s.height/f}return Promise.resolve([e,z2({content:e.innerHTML,width:n,height:t,transform:r,extra:i,watchable:!0})])}}},C3=new RegExp('"',"ug"),h2=[1105920,1112319],g2=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),d4),h5),L4),O1=Object.keys(g2).reduce(function(c,a){return c[a.toLowerCase()]=g2[a],c},{}),E6=Object.keys(O1).reduce(function(c,a){var e=O1[a];return c[a]=e[900]||k(Object.entries(e))[0][1],c},{});R6=function(a){return!!a&&a3.some(function(e){return a.includes(e)})},_6=function(a){if(!a)return[];var e=new Set,l=a.split(/,(?![^()]*\))/).map(function(f){return f.trim()});l=l.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(s){return s.trim()})});var r=c1(l),i;try{for(r.s();!(i=r.n()).done;){var n=i.value;if(R6(n)){var t=a3.reduce(function(f,s){return f.replace(s,"")},n);t!==""&&t!=="*"&&e.add(t)}}}catch(f){r.e(f)}finally{r.f()}return e};W6={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=y2,e}}},provides:function(a){a.pseudoElements2svg=function(e){var l=e.node,r=l===void 0?v:l;z.searchPseudoElements&&y2(r)}}},L2=!1,$6={mixout:function(){return{dom:{unwatch:function(){N3(),L2=!0}}}},hooks:function(){return{bootstrap:function(){M2(w1("mutationObserverCallbacks",{}))},noAuto:function(){h6()},watch:function(e){var l=e.observeMutationsRoot;L2?E1():M2(w1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},N2=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(l,r){var i=r.toLowerCase().split("-"),n=i[0],t=i.slice(1).join("-");if(n&&t==="h")return l.flipX=!0,l;if(n&&t==="v")return l.flipY=!0,l;if(t=parseFloat(t),isNaN(t))return l;switch(n){case"grow":l.size=l.size+t;break;case"shrink":l.size=l.size-t;break;case"left":l.x=l.x-t;break;case"right":l.x=l.x+t;break;case"up":l.y=l.y-t;break;case"down":l.y=l.y+t;break;case"rotate":l.rotate=l.rotate+t;break}return l},e)},G6={mixout:function(){return{parse:{transform:function(e){return N2(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,l){var r=l.getAttribute("data-fa-transform");return r&&(e.transform=N2(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var l=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,t={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(s," ").concat(u)},M={transform:"translate(".concat(n/2*-1," -256)")},p={outer:t,inner:m,path:M};return{tag:"g",attributes:o({},p.outer),children:[{tag:"g",attributes:o({},p.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:o(o({},l.icon.attributes),p.path)}]}]}}}},h1={x:0,y:0,width:"100%",height:"100%"};U6={hooks:function(){return{parseNodeAttributes:function(e,l){var r=l.getAttribute("data-fa-mask"),i=r?o1(r.split(" ").map(function(n){return n.trim()})):h3();return i.prefix||(i.prefix=q()),e.mask=i,e.maskId=l.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var l=e.children,r=e.attributes,i=e.main,n=e.mask,t=e.maskId,f=e.transform,s=i.width,u=i.icon,m=n.width,M=n.icon,p=q5({transform:f,containerWidth:m,iconWidth:s}),h={tag:"rect",attributes:o(o({},h1),{},{fill:"white"})},b=u.children?{children:u.children.map(S2)}:{},y={tag:"g",attributes:o({},p.inner),children:[S2(o({tag:u.tag,attributes:o(o({},u.attributes),p.path)},b))]},g={tag:"g",attributes:o({},p.outer),children:[y]},L="mask-".concat(t||n2()),S="clip-".concat(t||n2()),_={tag:"mask",attributes:o(o({},h1),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:B6(M)},_]};return l.push(A,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(L,")")},h1)}),{children:l,attributes:r}}}},H6={provides:function(a){var e=!1;O.matchMedia&&(e=O.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var l=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=o(o({},i),{},{attributeName:"opacity"}),t={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||t.children.push({tag:"animate",attributes:o(o({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},n),{},{values:"1;0;1;1;0;1;"})}),l.push(t),l.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:o(o({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||l.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},Y6={hooks:function(){return{parseNodeAttributes:function(e,l){var r=l.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},V6=[j5,A6,P6,F6,I6,W6,$6,G6,U6,H6,Y6];a6(V6,{mixoutsTo:N});r8=N.noAuto,n8=N.config,k3=N.library,w3=N.dom,i8=N.parse,t8=N.findIconDefinition,f8=N.toHtml,o8=N.icon,s8=N.layer,m8=N.text,z8=N.counter});var P3,F3,I3=Y1(()=>{P3={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},F3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]}});var J6=q3(()=>{A3();I3();k3.add(P3,F3);w3.watch()});export default J6();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-brands-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2025 Fonticons, Inc.
   *)
*/
