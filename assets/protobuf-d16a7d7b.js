import{g as p}from"./index-a8b2e4cc.js";function l(t,a){for(var o=0;o<a.length;o++){const e=a[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,i;function b(){if(i)return s;i=1,s=t,t.displayName="protobuf",t.aliases=[];function t(a){(function(o){var e=/\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/;o.languages.protobuf=o.languages.extend("clike",{"class-name":{pattern:/(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,lookbehind:!0},keyword:/\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/}),o.languages.insertBefore("protobuf","operator",{map:{pattern:/\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,alias:"class-name",inside:{punctuation:/[<>.,]/,builtin:e}},builtin:e,"positional-class-name":{pattern:/(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,alias:"class-name",inside:{punctuation:/\./}},annotation:{pattern:/(\[\s*)[A-Za-z_]\w*(?=\s*=)/,lookbehind:!0}})})(a)}return s}var u=b();const f=p(u),d=l({__proto__:null,default:f},[u]);export{d as p};
