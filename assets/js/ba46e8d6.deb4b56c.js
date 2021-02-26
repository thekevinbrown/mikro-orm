(window.webpackJsonp=window.webpackJsonp||[]).push([[693],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=b(r),u=n,m=h["".concat(c,".").concat(u)]||h[u]||s[u]||a;return r?i.a.createElement(m,o(o({ref:t},p),{},{components:r})):i.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<a;p++)c[p]=r[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},765:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(8),a=(r(0),r(1051)),c={id:"core.highlighter",title:"Interface: Highlighter",sidebar_label:"Highlighter",hide_title:!0},o={unversionedId:"api/interfaces/core.highlighter",id:"version-4.4/api/interfaces/core.highlighter",isDocsHomePage:!1,title:"Interface: Highlighter",description:"Interface: Highlighter",source:"@site/versioned_docs/version-4.4/api/interfaces/core.highlighter.md",slug:"/api/interfaces/core.highlighter",permalink:"/docs/api/interfaces/core.highlighter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.highlighter.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1614359470,sidebar_label:"Highlighter",sidebar:"version-4.4/API",previous:{title:"Interface: FormulaOptions<T>",permalink:"/docs/api/interfaces/core.formulaoptions"},next:{title:"Interface: IConfiguration",permalink:"/docs/api/interfaces/core.iconfiguration"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"highlight",id:"highlight",children:[]}]}],p={toc:l};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-highlighter"},"Interface: Highlighter"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Highlighter"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Highlighter"))),Object(a.b)("h2",{id:"implemented-by"},"Implemented by"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/classes/core.nullhighlighter"},Object(a.b)("em",{parentName:"a"},"NullHighlighter")))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"highlight"},"highlight"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"highlight"),"(",Object(a.b)("inlineCode",{parentName:"p"},"text"),": ",Object(a.b)("em",{parentName:"p"},"string"),"): ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"),Object(a.b)("th",{parentName:"tr",align:null},"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"text")),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("em",{parentName:"td"},"string"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L418"},"packages/core/src/typings.ts:418")))}b.isMDXComponent=!0}}]);