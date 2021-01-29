(window.webpackJsonp=window.webpackJsonp||[]).push([[727],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,O=s["".concat(c,".").concat(d)]||s[d]||u[d]||b;return r?a.a.createElement(O,i(i({ref:t},l),{},{components:r})):a.a.createElement(O,i({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,c=new Array(b);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<b;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},797:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),b=(r(0),r(1253)),c={id:"core.eventsubscriber",title:"Interface: EventSubscriber<T>",sidebar_label:"EventSubscriber",hide_title:!0},i={unversionedId:"api/interfaces/core.eventsubscriber",id:"version-4.4/api/interfaces/core.eventsubscriber",isDocsHomePage:!1,title:"Interface: EventSubscriber<T>",description:"Interface: EventSubscriber",source:"@site/versioned_docs/version-4.4/api/interfaces/core.eventsubscriber.md",slug:"/api/interfaces/core.eventsubscriber",permalink:"/docs/api/interfaces/core.eventsubscriber",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.eventsubscriber.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611931648,sidebar_label:"EventSubscriber",sidebar:"version-4.4/API",previous:{title:"Interface: EventArgs<T>",permalink:"/docs/api/interfaces/core.eventargs"},next:{title:"Interface: FactoryOptions",permalink:"/docs/api/interfaces/core.factoryoptions"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"afterCreate",id:"aftercreate",children:[]},{value:"afterDelete",id:"afterdelete",children:[]},{value:"afterFlush",id:"afterflush",children:[]},{value:"afterTransactionCommit",id:"aftertransactioncommit",children:[]},{value:"afterTransactionRollback",id:"aftertransactionrollback",children:[]},{value:"afterTransactionStart",id:"aftertransactionstart",children:[]},{value:"afterUpdate",id:"afterupdate",children:[]},{value:"beforeCreate",id:"beforecreate",children:[]},{value:"beforeDelete",id:"beforedelete",children:[]},{value:"beforeFlush",id:"beforeflush",children:[]},{value:"beforeTransactionCommit",id:"beforetransactioncommit",children:[]},{value:"beforeTransactionRollback",id:"beforetransactionrollback",children:[]},{value:"beforeTransactionStart",id:"beforetransactionstart",children:[]},{value:"beforeUpdate",id:"beforeupdate",children:[]},{value:"getSubscribedEntities",id:"getsubscribedentities",children:[]},{value:"onFlush",id:"onflush",children:[]},{value:"onInit",id:"oninit",children:[]}]}],l={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-eventsubscribert"},"Interface: EventSubscriber<T",">"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".EventSubscriber"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"EventSubscriber"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"aftercreate"},"afterCreate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"afterCreate"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"afterdelete"},"afterDelete"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"afterDelete"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"afterflush"},"afterFlush"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"afterFlush"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"aftertransactioncommit"},"afterTransactionCommit"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"afterTransactionCommit"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"aftertransactionrollback"},"afterTransactionRollback"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"afterTransactionRollback"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"aftertransactionstart"},"afterTransactionStart"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"afterTransactionStart"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"afterupdate"},"afterUpdate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"afterUpdate"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"beforecreate"},"beforeCreate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"beforeCreate"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"beforedelete"},"beforeDelete"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"beforeDelete"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"beforeflush"},"beforeFlush"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"beforeFlush"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"beforetransactioncommit"},"beforeTransactionCommit"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"beforeTransactionCommit"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"beforetransactionrollback"},"beforeTransactionRollback"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"beforeTransactionRollback"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"beforetransactionstart"},"beforeTransactionStart"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"beforeTransactionStart"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"beforeupdate"},"beforeUpdate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"beforeUpdate"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getsubscribedentities"},"getSubscribedEntities"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"getSubscribedEntities"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onflush"},"onFlush"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onFlush"),": "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"oninit"},"onInit"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onInit"),":"))}p.isMDXComponent=!0}}]);