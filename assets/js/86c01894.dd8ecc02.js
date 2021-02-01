(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1254:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=u(n),l=r,d=b["".concat(c,".").concat(l)]||b[l]||m[l]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},678:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(1254)),c={id:"changesettype",title:"Enumeration: ChangeSetType",sidebar_label:"ChangeSetType"},i={unversionedId:"api/enums/changesettype",id:"version-4.3/api/enums/changesettype",isDocsHomePage:!1,title:"Enumeration: ChangeSetType",description:"Enumeration members",source:"@site/versioned_docs/version-4.3/api/enums/changesettype.md",slug:"/api/enums/changesettype",permalink:"/docs/4.3/api/enums/changesettype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/enums/changesettype.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612168854,sidebar_label:"ChangeSetType",sidebar:"version-4.3/API",previous:{title:"Enumeration: Cascade",permalink:"/docs/4.3/api/enums/cascade"},next:{title:"Enumeration: EventType",permalink:"/docs/4.3/api/enums/eventtype"}},p=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"CREATE",id:"create",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"UPDATE",id:"update",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(o.b)("h3",{id:"create"},"CREATE"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"CREATE"),':  = "create"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/ChangeSet.ts#L28"}),"packages/core/src/unit-of-work/ChangeSet.ts:28"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"delete"},"DELETE"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"DELETE"),':  = "delete"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/ChangeSet.ts#L30"}),"packages/core/src/unit-of-work/ChangeSet.ts:30"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"update"},"UPDATE"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"UPDATE"),':  = "update"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/ChangeSet.ts#L29"}),"packages/core/src/unit-of-work/ChangeSet.ts:29"))))}u.isMDXComponent=!0}}]);