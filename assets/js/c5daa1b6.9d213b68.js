(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1051:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(t),u=n,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return t?o.a.createElement(m,i(i({ref:r},l),{},{components:t})):o.a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},819:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(8),a=(t(0),t(1051)),c={id:"core.edge",title:"Interface: Edge",sidebar_label:"Edge",hide_title:!0},i={unversionedId:"api/interfaces/core.edge",id:"version-4.4/api/interfaces/core.edge",isDocsHomePage:!1,title:"Interface: Edge",description:"Interface: Edge",source:"@site/versioned_docs/version-4.4/api/interfaces/core.edge.md",slug:"/api/interfaces/core.edge",permalink:"/docs/api/interfaces/core.edge",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.edge.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1614359470,sidebar_label:"Edge",sidebar:"version-4.4/API",previous:{title:"Interface: DeleteOptions<T>",permalink:"/docs/api/interfaces/core.deleteoptions"},next:{title:"Interface: EntityProperty<T>",permalink:"/docs/api/interfaces/core.entityproperty"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"from",id:"from",children:[]},{value:"to",id:"to",children:[]},{value:"weight",id:"weight",children:[]}]}],l={toc:p};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-edge"},"Interface: Edge"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Edge"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Edge"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"from"},"from"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"from"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L17"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:17")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"to"},"to"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"to"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L18"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:18")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"weight"},"weight"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"weight"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L19"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:19")))}b.isMDXComponent=!0}}]);