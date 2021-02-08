(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(a),j=r,d=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return a?n.a.createElement(d,p(p({ref:t},l),{},{components:a})):n.a.createElement(d,p({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},845:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),b=(a(0),a(1256)),c={id:"identitymap",title:"Class: IdentityMap",sidebar_label:"IdentityMap"},p={unversionedId:"api/classes/identitymap",id:"version-4.3/api/classes/identitymap",isDocsHomePage:!1,title:"Class: IdentityMap",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/identitymap.md",slug:"/api/classes/identitymap",permalink:"/docs/4.3/api/classes/identitymap",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/identitymap.md",version:"4.3",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1612821189,sidebar_label:"IdentityMap",sidebar:"version-4.3/API",previous:{title:"Class: Hydrator",permalink:"/docs/4.3/api/classes/hydrator"},next:{title:"Class: ImportCommand",permalink:"/docs/4.3/api/classes/importcommand"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"registry",id:"registry",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[]},{value:"delete",id:"delete",children:[]},{value:"get",id:"get",children:[]},{value:"getByHash",id:"getbyhash",children:[]},{value:"getStore",id:"getstore",children:[]},{value:"keys",id:"keys",children:[]},{value:"store",id:"store",children:[]},{value:"values",id:"values",children:[]}]}],l={toc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"IdentityMap"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"registry"},"registry"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"registry"),": Map","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#constructor"}),"Constructor"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","any>>, Map","<","string, ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","any>>> = new Map","<","Constructor","<","AnyEntity>, Map","<","string, AnyEntity>>()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L5"}),"packages/core/src/unit-of-work/IdentityMap.ts:5"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"clear"},"clear"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"clear"),"(): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L33"}),"packages/core/src/unit-of-work/IdentityMap.ts:33"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"delete"},"delete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"delete"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L11"}),"packages/core/src/unit-of-work/IdentityMap.ts:11"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"get"},"get"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"get"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": string): T ","|"," undefined"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L60"}),"packages/core/src/unit-of-work/IdentityMap.ts:60"))),Object(b.b)("p",null,"For back compatibility only."),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T ","|"," undefined"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getbyhash"},"getByHash"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getByHash"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": string): T ","|"," undefined"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L15"}),"packages/core/src/unit-of-work/IdentityMap.ts:15"))),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T ","|"," undefined"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getstore"},"getStore"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getStore"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>): Map","<","string, T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L20"}),"packages/core/src/unit-of-work/IdentityMap.ts:20"))),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Map","<","string, T>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"keys"},"keys"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"keys"),"(): string[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L47"}),"packages/core/src/unit-of-work/IdentityMap.ts:47"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"store"},"store"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"store"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L7"}),"packages/core/src/unit-of-work/IdentityMap.ts:7"))),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"values"},"values"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"values"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L37"}),"packages/core/src/unit-of-work/IdentityMap.ts:37"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"[]"))}o.isMDXComponent=!0}}]);