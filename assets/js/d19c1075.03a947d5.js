(window.webpackJsonp=window.webpackJsonp||[]).push([[790],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(r),m=n,u=l["".concat(a,".").concat(m)]||l[m]||d[m]||o;return r?c.a.createElement(u,i(i({ref:t},s),{},{components:r})):c.a.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},863:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),c=r(8),o=(r(0),r(1051)),a={id:"core.exceptionconverter",title:"Class: ExceptionConverter",sidebar_label:"ExceptionConverter",hide_title:!0},i={unversionedId:"api/classes/core.exceptionconverter",id:"version-4.4/api/classes/core.exceptionconverter",isDocsHomePage:!1,title:"Class: ExceptionConverter",description:"Class: ExceptionConverter",source:"@site/versioned_docs/version-4.4/api/classes/core.exceptionconverter.md",slug:"/api/classes/core.exceptionconverter",permalink:"/docs/api/classes/core.exceptionconverter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.exceptionconverter.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1614154360,sidebar_label:"ExceptionConverter",sidebar:"version-4.4/API",previous:{title:"Class: EventManager",permalink:"/docs/api/classes/core.eventmanager"},next:{title:"Class: FileCacheAdapter",permalink:"/docs/api/classes/core.filecacheadapter"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"convertException",id:"convertexception",children:[]}]}],s={toc:p};function b(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"class-exceptionconverter"},"Class: ExceptionConverter"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ExceptionConverter"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ExceptionConverter"))),Object(o.b)("h2",{id:"constructors"},"Constructors"),Object(o.b)("h3",{id:"constructor"},"constructor"),Object(o.b)("p",null,"+"," ",Object(o.b)("strong",{parentName:"p"},"new ExceptionConverter"),"(): ",Object(o.b)("a",{parentName:"p",href:"/docs/api/classes/core.exceptionconverter"},Object(o.b)("em",{parentName:"a"},"ExceptionConverter"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/classes/core.exceptionconverter"},Object(o.b)("em",{parentName:"a"},"ExceptionConverter"))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"convertexception"},"convertException"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"convertException"),"(",Object(o.b)("inlineCode",{parentName:"p"},"exception"),": Error & ",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(o.b)("em",{parentName:"a"},"Dictionary")),"<",Object(o.b)("em",{parentName:"p"},"any"),">","): ",Object(o.b)("a",{parentName:"p",href:"/docs/api/classes/core.driverexception"},Object(o.b)("em",{parentName:"a"},"DriverException"))),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"exception")),Object(o.b)("td",{parentName:"tr",align:null},"Error & ",Object(o.b)("a",{parentName:"td",href:"/docs/api/modules/core#dictionary"},Object(o.b)("em",{parentName:"a"},"Dictionary")),"<",Object(o.b)("em",{parentName:"td"},"any"),">")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/classes/core.driverexception"},Object(o.b)("em",{parentName:"a"},"DriverException"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/platforms/ExceptionConverter.ts#L7"},"packages/core/src/platforms/ExceptionConverter.ts:7")))}b.isMDXComponent=!0}}]);