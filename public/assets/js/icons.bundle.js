var Q=(c,a)=>()=>(c&&(a=c(c=0)),a);var G4=(c,a)=>()=>(a||c((a={exports:{}}).exports,a),a.exports);function g1(c,a){(a==null||a>c.length)&&(a=c.length);for(var l=0,e=Array(a);l<a;l++)e[l]=c[l];return e}function W4(c){if(Array.isArray(c))return c}function I4(c){if(Array.isArray(c))return g1(c)}function O4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function X1(c,a){for(var l=0;l<a.length;l++){var e=a[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,k2(e.key),e)}}function j4(c,a,l){return a&&X1(c.prototype,a),l&&X1(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function a1(c,a){var l=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=R1(c))||a&&c&&typeof c.length=="number"){l&&(c=l);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(n){throw n},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,f=!0,s=!1;return{s:function(){l=l.call(c)},n:function(){var n=l.next();return f=n.done,n},e:function(n){s=!0,i=n},f:function(){try{f||l.return==null||l.return()}finally{if(s)throw i}}}}function p(c,a,l){return(a=k2(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function V4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function _4(c,a){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var e,r,i,f,s=[],n=!0,t=!1;try{if(i=(l=l.call(c)).next,a===0){if(Object(l)!==l)return;n=!1}else for(;!(n=(e=i.call(l)).done)&&(s.push(e.value),s.length!==a);n=!0);}catch(M){t=!0,r=M}finally{try{if(!n&&l.return!=null&&(f=l.return(),Object(f)!==f))return}finally{if(t)throw r}}return s}}function $4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K1(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),l.push.apply(l,e)}return l}function o(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?K1(Object(l),!0).forEach(function(e){p(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):K1(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function s1(c,a){return W4(c)||_4(c,a)||R1(c,a)||$4()}function y(c){return I4(c)||V4(c)||R1(c)||X4()}function K4(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function k2(c){var a=K4(c,"string");return typeof a=="symbol"?a:a+""}function r1(c){"@babel/helpers - typeof";return r1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r1(c)}function R1(c,a){if(c){if(typeof c=="string")return g1(c,a);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?g1(c,a):void 0}}function Y(c){return new Proxy(c,{get:function(l,e){return e in l?l[e]:l[g]}})}function D0(c){var a=v.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function H0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}function R0(c){return $.push(c),function(){$.splice($.indexOf(c),1)}}function q0(c){if(!(!c||!T)){var a=v.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var l=v.head.childNodes,e=null,r=l.length-1;r>-1;r--){var i=l[r],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(e=i)}return v.head.insertBefore(a,e),c}}function f2(){for(var c=12,a="";c-- >0;)a+=E0[Math.random()*62|0];return a}function j(c){for(var a=[],l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function W1(c){return c.classList?j(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function i4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function U0(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,'="').concat(i4(c[l]),'" ')},"").trim()}function n1(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,": ").concat(c[l].trim(),";")},"")}function I1(c){return c.size!==w.size||c.x!==w.x||c.y!==w.y||c.rotate!==w.rotate||c.flipX||c.flipY}function G0(c){var a=c.transform,l=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(l/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),n={transform:"".concat(i," ").concat(f," ").concat(s)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:n,path:t}}function W0(c){var a=c.transform,l=c.width,e=l===void 0?b1:l,r=c.height,i=r===void 0?b1:r,f=c.startCentered,s=f===void 0?!1:f,n="";return s&&P2?n+="translate(".concat(a.x/B-e/2,"em, ").concat(a.y/B-i/2,"em) "):s?n+="translate(calc(-50% + ".concat(a.x/B,"em), calc(-50% + ").concat(a.y/B,"em)) "):n+="translate(".concat(a.x/B,"em, ").concat(a.y/B,"em) "),n+="scale(".concat(a.size/B*(a.flipX?-1:1),", ").concat(a.size/B*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}function s4(){var c=Z2,a=c4,l=m.cssPrefix,e=m.replacementClass,r=I0;if(l!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(l,"-")).replace(f,"--".concat(l,"-")).replace(s,".".concat(e))}return r}function v1(){m.autoAddCss&&!i2&&(q0(s4()),i2=!0)}function j0(c){T&&(f1?setTimeout(c,0):n4.push(c))}function J(c){var a=c.tag,l=c.attributes,e=l===void 0?{}:l,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?i4(c):"<".concat(a," ").concat(U0(e),">").concat(i.map(J).join(""),"</").concat(a,">")}function s2(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}function t4(c){return y(c).length!==1?null:c.codePointAt(0).toString(16)}function n2(c){return Object.keys(c).reduce(function(a,l){var e=c[l],r=!!e.icon;return r?a[e.iconName]=e.icon:a[l]=e,a},{})}function w1(c,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=l.skipHooks,r=e===void 0?!1:e,i=n2(a);typeof k.hooks.addPack=="function"&&!r?k.hooks.addPack(c,n2(a)):k.styles[c]=o(o({},k.styles[c]||{}),i),c==="fas"&&w1("fa",a)}function X0(c){return~B0.indexOf(c)}function K0(c,a){var l=a.split("-"),e=l[0],r=l.slice(1).join("-");return e===c&&r!==""&&!X0(r)?r:null}function j1(c,a){return(m4[c]||{})[a]}function Y0(c,a){return(M4[c]||{})[a]}function q(c,a){return(u4[c]||{})[a]}function d4(c){return p4[c]||{prefix:null,iconName:null}}function J0(c){var a=L4[c],l=j1("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function H(){return O1}function Q0(c){var a=g,l=z4.reduce(function(e,r){return e[r]="".concat(m.cssPrefix,"-").concat(r),e},{});return K2.forEach(function(e){(c.includes(l[e])||c.some(function(r){return $0[e].includes(r)}))&&(a=e)}),a}function o1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.family,e=l===void 0?g:l,r=w0[e][c];if(e===K&&!c)return"fad";var i=e2[e][c]||e2[e][r],f=c in k.styles?c:null,s=i||f||null;return s}function Z0(c){var a=[],l=null;return c.forEach(function(e){var r=K0(m.cssPrefix,e);r?l=r:e&&a.push(e)}),{iconName:l,rest:a}}function o2(c){return c.sort().filter(function(a,l,e){return e.indexOf(a)===l})}function t1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.skipLookups,e=l===void 0?!1:l,r=null,i=o2(c.filter(function(L){return t2.includes(L)})),f=o2(c.filter(function(L){return!t2.includes(L)})),s=i.filter(function(L){return r=L,!T2.includes(L)}),n=s1(s,1),t=n[0],M=t===void 0?null:t,z=Q0(i),u=o(o({},Z0(f)),{},{prefix:o1(M,{family:z})});return o(o(o({},u),e6({values:c,family:z,styles:X,config:m,canonical:u,givenPrefix:r})),c6(e,r,u))}function c6(c,a,l){var e=l.prefix,r=l.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var i=a==="fa"?d4(r):{},f=q(e,r);return r=i.iconName||f||r,e=i.prefix||e,e==="far"&&!X.far&&X.fas&&!m.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}function e6(c){var a=c.values,l=c.family,e=c.canonical,r=c.givenPrefix,i=r===void 0?"":r,f=c.styles,s=f===void 0?{}:f,n=c.config,t=n===void 0?{}:n,M=l===K,z=a.includes("fa-duotone")||a.includes("fad"),u=t.familyDefault==="duotone",L=e.prefix==="fad"||e.prefix==="fa-duotone";if(!M&&(z||u||L)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&a6.includes(l)){var C=Object.keys(s).find(function(x){return l6.includes(x)});if(C||t.autoFetchSvg){var d=h3.get(l).defaultShortPrefixId;e.prefix=d,e.iconName=q(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=H()||"fas"),e}function i6(c,a){var l=a.mixoutsTo;return z2=c,W={},Object.keys(I).forEach(function(e){f6.indexOf(e)===-1&&delete I[e]}),z2.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(f){typeof r[f]=="function"&&(l[f]=r[f]),r1(r[f])==="object"&&Object.keys(r[f]).forEach(function(s){l[f]||(l[f]={}),l[f][s]=r[f][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(f){W[f]||(W[f]=[]),W[f].push(i[f])})}e.provides&&e.provides(I)}),l}function A1(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),r=2;r<l;r++)e[r-2]=arguments[r];var i=W[c]||[];return i.forEach(function(f){a=f.apply(null,[a].concat(e))}),a}function U(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];var r=W[c]||[];r.forEach(function(i){i.apply(null,l)})}function R(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return I[c]?I[c].apply(null,a):void 0}function P1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,l=c.prefix||H();if(a)return a=q(l,a)||a,s2(h4.definitions,l,a)||s2(k.styles,l,a)}function z1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return J(e)})}}),Object.defineProperty(c,"node",{get:function(){if(T){var e=v.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function z6(c){var a=c.children,l=c.main,e=c.mask,r=c.attributes,i=c.styles,f=c.transform;if(I1(f)&&l.found&&!e.found){var s=l.width,n=l.height,t={x:s/n/2,y:.5};r.style=n1(o(o({},i),{},{"transform-origin":"".concat(t.x+f.x/16,"em ").concat(t.y+f.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function m6(c){var a=c.prefix,l=c.iconName,e=c.children,r=c.attributes,i=c.symbol,f=i===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(l):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:f}),children:e}]}]}function M6(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(l){return l in c})}function V1(c){var a=c.icons,l=a.main,e=a.mask,r=c.prefix,i=c.iconName,f=c.transform,s=c.symbol,n=c.maskId,t=c.extra,M=c.watchable,z=M===void 0?!1:M,u=e.found?e:l,L=u.width,C=u.height,d=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(A){return t.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(t.classes).join(" "),x={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":i,class:d,role:t.attributes.role||"img",viewBox:"0 0 ".concat(L," ").concat(C)})};!M6(t.attributes)&&!t.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),z&&(x.attributes[E]="");var h=o(o({},x),{},{prefix:r,iconName:i,main:l,mask:e,maskId:n,transform:f,symbol:s,styles:o({},t.styles)}),b=e.found&&l.found?R("generateAbstractMask",h)||{children:[],attributes:{}}:R("generateAbstractIcon",h)||{children:[],attributes:{}},N=b.children,G=b.attributes;return h.children=N,h.attributes=G,s?m6(h):z6(h)}function m2(c){var a=c.content,l=c.width,e=c.height,r=c.transform,i=c.extra,f=c.watchable,s=f===void 0?!1:f,n=o(o({},i.attributes),{},{class:i.classes.join(" ")});s&&(n[E]="");var t=o({},i.styles);I1(r)&&(t.transform=W0({transform:r,startCentered:!0,width:l,height:e}),t["-webkit-transform"]=t.transform);var M=n1(t);M.length>0&&(n.style=M);var z=[];return z.push({tag:"span",attributes:n,children:[a]}),z}function p6(c){var a=c.content,l=c.extra,e=o(o({},l.attributes),{},{class:l.classes.join(" ")}),r=n1(l.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[a]}),i}function F1(c){var a=c[0],l=c[1],e=c.slice(4),r=s1(e,1),i=r[0],f=null;return Array.isArray(i)?f={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(u1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(u1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(u1.PRIMARY),fill:"currentColor",d:i[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:l,icon:f}}function u6(c,a){!l4&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function T1(c,a){var l=a;return a==="fa"&&m.styleDefault!==null&&(a=H()),new Promise(function(e,r){if(l==="fa"){var i=d4(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&C1[a]&&C1[a][c]){var f=C1[a][c];return e(F1(f))}u6(c,a),e(o(o({},L6),{},{icon:m.showMissingIcons&&c?R("missingIconAbstract")||{}:{}}))})}function p2(c){var a=c.getAttribute?c.getAttribute(E):null;return typeof a=="string"}function d6(c){var a=c.getAttribute?c.getAttribute(E1):null,l=c.getAttribute?c.getAttribute(U1):null;return a&&l}function C6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function h6(){if(m.autoReplaceSvg===!0)return e1.replace;var c=e1[m.autoReplaceSvg];return c||e1.replace}function g6(c){return v.createElementNS("http://www.w3.org/2000/svg",c)}function x6(c){return v.createElement(c)}function x4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.ceFn,e=l===void 0?c.tag==="svg"?g6:x6:l;if(typeof c=="string")return v.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(f){r.setAttribute(f,c.attributes[f])});var i=c.children||[];return i.forEach(function(f){r.appendChild(x4(f,{ceFn:e}))}),r}function b6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}function L2(c){c()}function b4(c,a){var l=typeof a=="function"?a:l1;if(c.length===0)l();else{var e=L2;m.mutateApproach===k0&&(e=D.requestAnimationFrame||L2),e(function(){var r=h6(),i=_1.begin("mutate");c.map(r),i(),l()})}}function S4(){$1=!0}function D1(){$1=!1}function u2(c){if(Z1&&m.observeMutations){var a=c.treeCallback,l=a===void 0?l1:a,e=c.nodeCallback,r=e===void 0?l1:e,i=c.pseudoElementsCallback,f=i===void 0?l1:i,s=c.observeMutationsRoot,n=s===void 0?v:s;i1=new Z1(function(t){if(!$1){var M=H();j(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!p2(z.addedNodes[0])&&(m.searchPseudoElements&&f(z.target),l(z.target)),z.type==="attributes"&&z.target.parentNode&&m.searchPseudoElements&&f([z.target],!0),z.type==="attributes"&&p2(z.target)&&~T0.indexOf(z.attributeName))if(z.attributeName==="class"&&d6(z.target)){var u=t1(W1(z.target)),L=u.prefix,C=u.iconName;z.target.setAttribute(E1,L||M),C&&z.target.setAttribute(U1,C)}else C6(z.target)&&r(z.target)})}}),T&&i1.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function S6(){i1&&i1.disconnect()}function N6(c){var a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce(function(e,r){var i=r.split(":"),f=i[0],s=i.slice(1);return f&&s.length>0&&(e[f]=s.join(":").trim()),e},{})),l}function k6(c){var a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=t1(W1(c));return r.prefix||(r.prefix=H()),a&&l&&(r.prefix=a,r.iconName=l),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Y0(r.prefix,c.innerText)||j1(r.prefix,t4(c.innerText))),!r.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function y6(c){var a=j(c.attributes).reduce(function(l,e){return l.name!=="class"&&l.name!=="style"&&(l[e.name]=e.value),l},{});return a}function w6(){return{iconName:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=k6(c),e=l.iconName,r=l.prefix,i=l.rest,f=y6(c),s=A1("parseNodeAttributes",{},c),n=a.styleParser?N6(c):[];return o({iconName:e,prefix:r,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:n,attributes:f}},s)}function N4(c){var a=m.autoReplaceSvg==="nest"?v2(c,{styleParser:!1}):v2(c);return~a.extra.classes.indexOf(r4)?R("generateLayersText",c,a):R("generateSvgReplacementMutation",c,a)}function P6(){return[].concat(y(Y2),y(J2))}function d2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var l=v.documentElement.classList,e=function(z){return l.add("".concat(l2,"-").concat(z))},r=function(z){return l.remove("".concat(l2,"-").concat(z))},i=m.autoFetchSvg?P6():T2.concat(Object.keys(A6));i.includes("fa")||i.push("fa");var f=[".".concat(r4,":not([").concat(E,"])")].concat(i.map(function(M){return".".concat(M,":not([").concat(E,"])")})).join(", ");if(f.length===0)return Promise.resolve();var s=[];try{s=j(c.querySelectorAll(f))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var n=_1.begin("onTree"),t=s.reduce(function(M,z){try{var u=N4(z);u&&M.push(u)}catch(L){l4||L.name==="MissingIcon"&&console.error(L)}return M},[]);return new Promise(function(M,z){Promise.all(t).then(function(u){b4(u,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),n(),M()})}).catch(function(u){n(),z(u)})})}function F6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N4(c).then(function(l){l&&b4([l],a)})}function T6(c){return function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:P1(a||{}),r=l.mask;return r&&(r=(r||{}).icon?r:P1(r||{})),c(e,o(o({},l),{},{mask:r}))}}function U6(c){var a=c.replace(k4,"");return t4(y(a)[0]||"")}function G6(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),e=l.replace(k4,""),r=e.codePointAt(0),i=r>=C2[0]&&r<=C2[1],f=e.length===2?e[0]===e[1]:!1;return i||f||a}function W6(c,a){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),r=isNaN(e)?"normal":e;return(H1[l]||{})[r]||E6[l]}function g2(c,a){var l="".concat(N0).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(l)!==null)return e();var i=j(c.children),f=i.filter(function(m1){return m1.getAttribute(S1)===a})[0],s=D.getComputedStyle(c,a),n=s.getPropertyValue("font-family"),t=n.match(P0),M=s.getPropertyValue("font-weight"),z=s.getPropertyValue("content");if(f&&!t)return c.removeChild(f),e();if(t&&z!=="none"&&z!==""){var u=s.getPropertyValue("content"),L=W6(n,M),C=U6(u),d=t[0].startsWith("FontAwesome"),x=G6(s),h=j1(L,C),b=h;if(d){var N=J0(C);N.iconName&&N.prefix&&(h=N.iconName,L=N.prefix)}if(h&&!x&&(!f||f.getAttribute(E1)!==L||f.getAttribute(U1)!==b)){c.setAttribute(l,b),f&&c.removeChild(f);var G=w6(),A=G.extra;A.attributes[S1]=a,T1(h,L).then(function(m1){var E4=V1(o(o({},G),{},{icons:{main:m1,mask:C4()},prefix:L,iconName:b,extra:A,watchable:!0})),M1=v.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(M1,c.firstChild):c.appendChild(M1),M1.outerHTML=E4.map(function(U4){return J(U4)}).join(`
`),c.removeAttribute(l),e()}).catch(r)}else e()}else e()})}function I6(c){return Promise.all([g2(c,"::before"),g2(c,"::after")])}function O6(c){return c.parentNode!==document.head&&!~y0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(S1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function x2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T){var l;if(a)l=c;else if(m.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var e=new Set,r=a1(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var f=i.value;try{var s=a1(f.cssRules),n;try{for(s.s();!(n=s.n()).done;){var t=n.value,M=V6(t.selectorText),z=a1(M),u;try{for(z.s();!(u=z.n()).done;){var L=u.value;e.add(L)}}catch(d){z.e(d)}finally{z.f()}}}catch(d){s.e(d)}finally{s.f()}}catch(d){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(d.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(d){r.e(d)}finally{r.f()}if(!e.size)return;var C=Array.from(e).join(", ");try{l=c.querySelectorAll(C)}catch{}}return new Promise(function(d,x){var h=j(l).filter(O6).map(I6),b=_1.begin("searchPseudoElements");S4(),Promise.all(h).then(function(){b(),D1(),d()}).catch(function(){b(),D1(),x()})})}}function N2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function K6(c){return c.tag==="g"?c.children:[c]}var Y1,q1,y2,w2,A2,Y4,J1,Q1,D,v,Z1,Z,l5,T,P2,p1,J4,Q4,F2,Z4,T2,g,K,B2,D2,H2,R2,q2,E2,U2,G2,W2,I2,O2,j2,V2,_2,$2,X2,c3,a3,l3,e3,r3,f3,i3,s3,n3,o3,t3,z3,m3,M3,p3,L3,u3,v3,K2,e5,d3,C3,h3,g3,Y2,c2,x3,b3,S3,N3,k3,r5,y3,w3,A3,a2,L1,c1,P3,F3,T3,B3,D3,H3,R3,q3,E3,U3,G3,W3,I3,O3,j3,V3,_3,$3,X3,K3,Y3,J3,Q3,Z3,c0,a0,l0,e0,r0,f0,i0,s0,n0,o0,t0,z0,m0,f5,M0,p0,L0,u0,i5,v0,d0,x1,C0,J2,h0,Q2,g0,x0,b0,S0,P,b1,Z2,c4,E,S1,N0,E1,U1,l2,k0,y0,a4,l4,e4,w0,N1,e2,k1,G1,y1,s5,A0,r4,P0,F0,n5,T0,u1,B0,_,r2,f4,O,m,$,B,w,E0,I0,i2,O0,F,k,n4,o4,f1,V0,d1,X,_0,z4,$0,O1,m4,M4,p4,L4,u4,v4,C4,t2,a6,l6,r6,z2,W,I,f6,h4,s6,n6,o6,S,t6,C1,L6,M2,B1,V,v6,g4,_1,l1,e1,$1,i1,A6,B6,D6,H6,R6,q6,k4,C2,h2,H1,E6,j6,V6,_6,b2,$6,S2,X6,h1,Y6,J6,Q6,Z6,o5,t5,y4,z5,m5,M5,p5,L5,u5,v5,d5,w4=Q(()=>{Y1=function(){},q1={},y2={},w2=null,A2={mark:Y1,measure:Y1};try{typeof window<"u"&&(q1=window),typeof document<"u"&&(y2=document),typeof MutationObserver<"u"&&(w2=MutationObserver),typeof performance<"u"&&(A2=performance)}catch{}Y4=q1.navigator||{},J1=Y4.userAgent,Q1=J1===void 0?"":J1,D=q1,v=y2,Z1=w2,Z=A2,l5=!!D.document,T=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",P2=~Q1.indexOf("MSIE")||~Q1.indexOf("Trident/"),J4=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Q4=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,F2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Z4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],g="classic",K="duotone",B2="sharp",D2="sharp-duotone",H2="chisel",R2="etch",q2="jelly",E2="jelly-duo",U2="jelly-fill",G2="notdog",W2="notdog-duo",I2="slab",O2="slab-press",j2="thumbprint",V2="utility",_2="utility-duo",$2="utility-fill",X2="whiteboard",c3="Classic",a3="Duotone",l3="Sharp",e3="Sharp Duotone",r3="Chisel",f3="Etch",i3="Jelly",s3="Jelly Duo",n3="Jelly Fill",o3="Notdog",t3="Notdog Duo",z3="Slab",m3="Slab Press",M3="Thumbprint",p3="Utility",L3="Utility Duo",u3="Utility Fill",v3="Whiteboard",K2=[g,K,B2,D2,H2,R2,q2,E2,U2,G2,W2,I2,O2,j2,V2,_2,$2,X2],e5=(p1={},p(p(p(p(p(p(p(p(p(p(p1,g,c3),K,a3),B2,l3),D2,e3),H2,r3),R2,f3),q2,i3),E2,s3),U2,n3),G2,o3),p(p(p(p(p(p(p(p(p1,W2,t3),I2,z3),O2,m3),j2,M3),V2,p3),_2,L3),$2,u3),X2,v3)),d3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},C3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},h3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),g3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Y2=["fak","fa-kit","fakd","fa-kit-duotone"],c2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},x3=["kit"],b3="kit",S3="kit-duotone",N3="Kit",k3="Kit Duotone",r5=p(p({},b3,N3),S3,k3),y3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},w3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},A3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},a2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},c1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},P3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],F3="classic",T3="duotone",B3="sharp",D3="sharp-duotone",H3="chisel",R3="etch",q3="jelly",E3="jelly-duo",U3="jelly-fill",G3="notdog",W3="notdog-duo",I3="slab",O3="slab-press",j3="thumbprint",V3="utility",_3="utility-duo",$3="utility-fill",X3="whiteboard",K3="Classic",Y3="Duotone",J3="Sharp",Q3="Sharp Duotone",Z3="Chisel",c0="Etch",a0="Jelly",l0="Jelly Duo",e0="Jelly Fill",r0="Notdog",f0="Notdog Duo",i0="Slab",s0="Slab Press",n0="Thumbprint",o0="Utility",t0="Utility Duo",z0="Utility Fill",m0="Whiteboard",f5=(L1={},p(p(p(p(p(p(p(p(p(p(L1,F3,K3),T3,Y3),B3,J3),D3,Q3),H3,Z3),R3,c0),q3,a0),E3,l0),U3,e0),G3,r0),p(p(p(p(p(p(p(p(L1,W3,f0),I3,i0),O3,s0),j3,n0),V3,o0),_3,t0),$3,z0),X3,m0)),M0="kit",p0="kit-duotone",L0="Kit",u0="Kit Duotone",i5=p(p({},M0,L0),p0,u0),v0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},d0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},x1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},C0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],J2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(P3,C0),h0=["solid","regular","light","thin","duotone","brands","semibold"],Q2=[1,2,3,4,5,6,7,8,9,10],g0=Q2.concat([11,12,13,14,15,16,17,18,19,20]),x0=["aw","fw","pull-left","pull-right"],b0=[].concat(y(Object.keys(d0)),h0,x0,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",c1.GROUP,c1.SWAP_OPACITY,c1.PRIMARY,c1.SECONDARY]).concat(Q2.map(function(c){return"".concat(c,"x")})).concat(g0.map(function(c){return"w-".concat(c)})),S0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P="___FONT_AWESOME___",b1=16,Z2="fa",c4="svg-inline--fa",E="data-fa-i2svg",S1="data-fa-pseudo-element",N0="data-fa-pseudo-element-pending",E1="data-prefix",U1="data-icon",l2="fontawesome-i2svg",k0="async",y0=["HTML","HEAD","STYLE","SCRIPT"],a4=["::before","::after",":before",":after"],l4=(function(){try{return!0}catch{return!1}})();e4=o({},F2);e4[g]=o(o(o(o({},{"fa-duotone":"duotone"}),F2[g]),c2.kit),c2["kit-duotone"]);w0=Y(e4),N1=o({},g3);N1[g]=o(o(o(o({},{duotone:"fad"}),N1[g]),a2.kit),a2["kit-duotone"]);e2=Y(N1),k1=o({},x1);k1[g]=o(o({},k1[g]),A3.kit);G1=Y(k1),y1=o({},v0);y1[g]=o(o({},y1[g]),y3.kit);s5=Y(y1),A0=J4,r4="fa-layers-text",P0=Q4,F0=o({},d3),n5=Y(F0),T0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],u1=Z4,B0=[].concat(y(x3),y(b0)),_=D.FontAwesomeConfig||{};v&&typeof v.querySelector=="function"&&(r2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],r2.forEach(function(c){var a=s1(c,2),l=a[0],e=a[1],r=H0(D0(l));r!=null&&(_[e]=r)}));f4={styleDefault:"solid",familyDefault:g,cssPrefix:Z2,replacementClass:c4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_.familyPrefix&&(_.cssPrefix=_.familyPrefix);O=o(o({},f4),_);O.autoReplaceSvg||(O.observeMutations=!1);m={};Object.keys(f4).forEach(function(c){Object.defineProperty(m,c,{enumerable:!0,set:function(l){O[c]=l,$.forEach(function(e){return e(m)})},get:function(){return O[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){O.cssPrefix=a,$.forEach(function(l){return l(m)})},get:function(){return O.cssPrefix}});D.FontAwesomeConfig=m;$=[];B=b1,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};E0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";I0=`:root, :host {
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
}`;i2=!1;O0={mixout:function(){return{dom:{css:s4,insertCss:v1}}},hooks:function(){return{beforeDOMElementCreation:function(){v1()},beforeI2svg:function(){v1()}}}},F=D||{};F[P]||(F[P]={});F[P].styles||(F[P].styles={});F[P].hooks||(F[P].hooks={});F[P].shims||(F[P].shims=[]);k=F[P],n4=[],o4=function(){v.removeEventListener("DOMContentLoaded",o4),f1=1,n4.map(function(a){return a()})},f1=!1;T&&(f1=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),f1||v.addEventListener("DOMContentLoaded",o4));V0=function(a,l){return function(e,r,i,f){return a.call(l,e,r,i,f)}},d1=function(a,l,e,r){var i=Object.keys(a),f=i.length,s=r!==void 0?V0(l,r):l,n,t,M;for(e===void 0?(n=1,M=a[i[0]]):(n=0,M=e);n<f;n++)t=i[n],M=s(M,a[t],t,a);return M};X=k.styles,_0=k.shims,z4=Object.keys(G1),$0=z4.reduce(function(c,a){return c[a]=Object.keys(G1[a]),c},{}),O1=null,m4={},M4={},p4={},L4={},u4={};v4=function(){var a=function(i){return d1(X,function(f,s,n){return f[n]=d1(s,i,{}),f},{})};m4=a(function(r,i,f){if(i[3]&&(r[i[3]]=f),i[2]){var s=i[2].filter(function(n){return typeof n=="number"});s.forEach(function(n){r[n.toString(16)]=f})}return r}),M4=a(function(r,i,f){if(r[f]=f,i[2]){var s=i[2].filter(function(n){return typeof n=="string"});s.forEach(function(n){r[n]=f})}return r}),u4=a(function(r,i,f){var s=i[2];return r[f]=f,s.forEach(function(n){r[n]=f}),r});var l="far"in X||m.autoFetchSvg,e=d1(_0,function(r,i){var f=i[0],s=i[1],n=i[2];return s==="far"&&!l&&(s="fas"),typeof f=="string"&&(r.names[f]={prefix:s,iconName:n}),typeof f=="number"&&(r.unicodes[f.toString(16)]={prefix:s,iconName:n}),r},{names:{},unicodes:{}});p4=e.names,L4=e.unicodes,O1=o1(m.styleDefault,{family:m.familyDefault})};R0(function(c){O1=o1(c.styleDefault,{family:m.familyDefault})});v4();C4=function(){return{prefix:null,iconName:null,rest:[]}};t2=J2.concat(Y2);a6=K2.filter(function(c){return c!==g||c!==K}),l6=Object.keys(x1).filter(function(c){return c!==g}).map(function(c){return Object.keys(x1[c])}).flat();r6=(function(){function c(){O4(this,c),this.definitions={}}return j4(c,[{key:"add",value:function(){for(var l=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var f=r.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(s){l.definitions[s]=o(o({},l.definitions[s]||{}),f[s]),w1(s,f[s]);var n=G1[g][s];n&&w1(n,f[s]),v4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var f=r[i],s=f.prefix,n=f.iconName,t=f.icon,M=t[2];l[s]||(l[s]={}),M.length>0&&M.forEach(function(z){typeof z=="string"&&(l[s][z]=t)}),l[s][n]=t}),l}}])})(),z2=[],W={},I={},f6=Object.keys(I);h4=new r6,s6=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,U("noAuto")},n6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(U("beforeI2svg",a),R("pseudoElements2svg",a),R("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,j0(function(){t6({autoReplaceSvgRoot:l}),U("watch",a)})}},o6={icon:function(a){if(a===null)return null;if(r1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:q(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var l=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=o1(a[0]);return{prefix:e,iconName:q(e,l)||l}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(A0))){var r=t1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=H();return{prefix:i,iconName:q(i,a)||a}}}},S={noAuto:s6,config:m,dom:n6,parse:o6,library:h4,findIconDefinition:P1,toHtml:J},t6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot,e=l===void 0?v:l;(Object.keys(k.styles).length>0||m.autoFetchSvg)&&T&&m.autoReplaceSvg&&S.dom.i2svg({node:e})};C1=k.styles;L6={found:!1,width:512,height:512};M2=function(){},B1=m.measurePerformance&&Z&&Z.mark&&Z.measure?Z:{mark:M2,measure:M2},V='FA "7.1.0"',v6=function(a){return B1.mark("".concat(V," ").concat(a," begins")),function(){return g4(a)}},g4=function(a){B1.mark("".concat(V," ").concat(a," ends")),B1.measure("".concat(V," ").concat(a),"".concat(V," ").concat(a," begins"),"".concat(V," ").concat(a," ends"))},_1={begin:v6,end:g4},l1=function(){};e1={replace:function(a){var l=a[0];if(l.parentNode)if(a[1].forEach(function(r){l.parentNode.insertBefore(x4(r),l)}),l.getAttribute(E)===null&&m.keepOriginalSource){var e=v.createComment(b6(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(a){var l=a[0],e=a[1];if(~W1(l).indexOf(m.replacementClass))return e1.replace(a);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,n){return n===m.replacementClass||n.match(r)?s.toSvg.push(n):s.toNode.push(n),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",i.toNode.join(" "))}var f=e.map(function(s){return J(s)}).join(`
`);l.setAttribute(E,""),l.innerHTML=f}};$1=!1;i1=null;A6=k.styles;B6=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.transform,r=e===void 0?w:e,i=l.symbol,f=i===void 0?!1:i,s=l.mask,n=s===void 0?null:s,t=l.maskId,M=t===void 0?null:t,z=l.classes,u=z===void 0?[]:z,L=l.attributes,C=L===void 0?{}:L,d=l.styles,x=d===void 0?{}:d;if(a){var h=a.prefix,b=a.iconName,N=a.icon;return z1(o({type:"icon"},a),function(){return U("beforeDOMElementCreation",{iconDefinition:a,params:l}),V1({icons:{main:F1(N),mask:n?F1(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:b,transform:o(o({},w),r),symbol:f,maskId:M,extra:{attributes:C,styles:x,classes:u}})})}},D6={mixout:function(){return{icon:T6(B6)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=d2,l.nodeCallback=F6,l}}},provides:function(a){a.i2svg=function(l){var e=l.node,r=e===void 0?v:e,i=l.callback,f=i===void 0?function(){}:i;return d2(r,f)},a.generateSvgReplacementMutation=function(l,e){var r=e.iconName,i=e.prefix,f=e.transform,s=e.symbol,n=e.mask,t=e.maskId,M=e.extra;return new Promise(function(z,u){Promise.all([T1(r,i),n.iconName?T1(n.iconName,n.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var C=s1(L,2),d=C[0],x=C[1];z([l,V1({icons:{main:d,mask:x},prefix:i,iconName:r,transform:f,symbol:s,maskId:t,extra:M,watchable:!0})])}).catch(u)})},a.generateAbstractIcon=function(l){var e=l.children,r=l.attributes,i=l.main,f=l.transform,s=l.styles,n=n1(s);n.length>0&&(r.style=n);var t;return I1(f)&&(t=R("generateAbstractTransformGrouping",{main:i,transform:f,containerWidth:i.width,iconWidth:i.width})),e.push(t||i.icon),{children:e,attributes:r}}}},H6={mixout:function(){return{layer:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return z1({type:"layer"},function(){U("beforeDOMElementCreation",{assembler:l,params:e});var f=[];return l(function(s){Array.isArray(s)?s.map(function(n){f=f.concat(n.abstract)}):f=f.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(y(i)).join(" ")},children:f}]})}}}},R6={mixout:function(){return{counter:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,f=e.classes,s=f===void 0?[]:f,n=e.attributes,t=n===void 0?{}:n,M=e.styles,z=M===void 0?{}:M;return z1({type:"counter",content:l},function(){return U("beforeDOMElementCreation",{content:l,params:e}),p6({content:l.toString(),title:i,extra:{attributes:t,styles:z,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(y(s))}})})}}}},q6={mixout:function(){return{text:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?w:r,f=e.classes,s=f===void 0?[]:f,n=e.attributes,t=n===void 0?{}:n,M=e.styles,z=M===void 0?{}:M;return z1({type:"text",content:l},function(){return U("beforeDOMElementCreation",{content:l,params:e}),m2({content:l,transform:o(o({},w),i),extra:{attributes:t,styles:z,classes:["".concat(m.cssPrefix,"-layers-text")].concat(y(s))}})})}}},provides:function(a){a.generateLayersText=function(l,e){var r=e.transform,i=e.extra,f=null,s=null;if(P2){var n=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();f=t.width/n,s=t.height/n}return Promise.resolve([l,m2({content:l.innerHTML,width:f,height:s,transform:r,extra:i,watchable:!0})])}}},k4=new RegExp('"',"ug"),C2=[1105920,1112319],h2=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),C3),S0),w3),H1=Object.keys(h2).reduce(function(c,a){return c[a.toLowerCase()]=h2[a],c},{}),E6=Object.keys(H1).reduce(function(c,a){var l=H1[a];return c[a]=l[900]||y(Object.entries(l))[0][1],c},{});j6=function(a){return!!a&&a4.some(function(l){return a.includes(l)})},V6=function(a){if(!a)return[];var l=new Set,e=a.split(/,(?![^()]*\))/).map(function(n){return n.trim()});e=e.flatMap(function(n){return n.includes("(")?n:n.split(",").map(function(t){return t.trim()})});var r=a1(e),i;try{for(r.s();!(i=r.n()).done;){var f=i.value;if(j6(f)){var s=a4.reduce(function(n,t){return n.replace(t,"")},f);s!==""&&s!=="*"&&l.add(s)}}}catch(n){r.e(n)}finally{r.f()}return l};_6={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=x2,l}}},provides:function(a){a.pseudoElements2svg=function(l){var e=l.node,r=e===void 0?v:e;m.searchPseudoElements&&x2(r)}}},b2=!1,$6={mixout:function(){return{dom:{unwatch:function(){S4(),b2=!0}}}},hooks:function(){return{bootstrap:function(){u2(A1("mutationObserverCallbacks",{}))},noAuto:function(){S6()},watch:function(l){var e=l.observeMutationsRoot;b2?D1():u2(A1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},S2=function(a){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),f=i[0],s=i.slice(1).join("-");if(f&&s==="h")return e.flipX=!0,e;if(f&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(f){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},l)},X6={mixout:function(){return{parse:{transform:function(l){return S2(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-transform");return r&&(l.transform=S2(r)),l}}},provides:function(a){a.generateAbstractTransformGrouping=function(l){var e=l.main,r=l.transform,i=l.containerWidth,f=l.iconWidth,s={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),M="rotate(".concat(r.rotate," 0 0)"),z={transform:"".concat(n," ").concat(t," ").concat(M)},u={transform:"translate(".concat(f/2*-1," -256)")},L={outer:s,inner:z,path:u};return{tag:"g",attributes:o({},L.outer),children:[{tag:"g",attributes:o({},L.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),L.path)}]}]}}}},h1={x:0,y:0,width:"100%",height:"100%"};Y6={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-mask"),i=r?t1(r.split(" ").map(function(f){return f.trim()})):C4();return i.prefix||(i.prefix=H()),l.mask=i,l.maskId=e.getAttribute("data-fa-mask-id"),l}}},provides:function(a){a.generateAbstractMask=function(l){var e=l.children,r=l.attributes,i=l.main,f=l.mask,s=l.maskId,n=l.transform,t=i.width,M=i.icon,z=f.width,u=f.icon,L=G0({transform:n,containerWidth:z,iconWidth:t}),C={tag:"rect",attributes:o(o({},h1),{},{fill:"white"})},d=M.children?{children:M.children.map(N2)}:{},x={tag:"g",attributes:o({},L.inner),children:[N2(o({tag:M.tag,attributes:o(o({},M.attributes),L.path)},d))]},h={tag:"g",attributes:o({},L.outer),children:[x]},b="mask-".concat(s||f2()),N="clip-".concat(s||f2()),G={tag:"mask",attributes:o(o({},h1),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,h]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:K6(u)},G]};return e.push(A,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(b,")")},h1)}),{children:e,attributes:r}}}},J6={provides:function(a){var l=!1;D.matchMedia&&(l=D.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=o(o({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||s.children.push({tag:"animate",attributes:o(o({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},f),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:o(o({},f),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Q6={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return l.symbol=i,l}}}},Z6=[O0,D6,H6,R6,q6,_6,$6,X6,Y6,J6,Q6];i6(Z6,{mixoutsTo:S});o5=S.noAuto,t5=S.config,y4=S.library,z5=S.dom,m5=S.parse,M5=S.findIconDefinition,p5=S.toHtml,L5=S.icon,u5=S.layer,v5=S.text,d5=S.counter});var A4,P4,F4=Q(()=>{A4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},P4={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]}});var T4,B4,D4=Q(()=>{T4={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z"]},B4={prefix:"far",iconName:"compass",icon:[512,512,[129517],"f14e","M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.3 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]}});var H4,R4,q4=Q(()=>{H4={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},R4={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]}});var c5=G4(()=>{w4();F4();D4();q4();y4.add(P4,A4,B4,T4,H4,R4)});export default c5();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
@fortawesome/free-regular-svg-icons/index.mjs:
@fortawesome/free-brands-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2025 Fonticons, Inc.
   *)
*/
