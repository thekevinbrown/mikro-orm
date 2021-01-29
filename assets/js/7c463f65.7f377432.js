(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),m=r,d=l["".concat(o,".").concat(m)]||l[m]||b[m]||a;return t?i.a.createElement(d,c(c({ref:n},s),{},{components:t})):i.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},634:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(1253)),o={id:"knex.knex.enumoptions",title:"Interface: EnumOptions",sidebar_label:"EnumOptions",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.enumoptions",id:"version-4.4/api/interfaces/knex.knex.enumoptions",isDocsHomePage:!1,title:"Interface: EnumOptions",description:"Interface: EnumOptions",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.enumoptions.md",slug:"/api/interfaces/knex.knex.enumoptions",permalink:"/docs/api/interfaces/knex.knex.enumoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.enumoptions.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611931648,sidebar_label:"EnumOptions",sidebar:"version-4.4/API",previous:{title:"Interface: DistinctOn<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.distincton"},next:{title:"Interface: ForeignConstraintBuilder",permalink:"/docs/api/interfaces/knex.knex.foreignconstraintbuilder"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"enumName",id:"enumname",children:[]},{value:"existingType",id:"existingtype",children:[]},{value:"schemaName",id:"schemaname",children:[]},{value:"useNative",id:"usenative",children:[]}]}],s={toc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-enumoptions"},"Interface: EnumOptions"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".EnumOptions"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EnumOptions"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"enumname"},"enumName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"enumName"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2167"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"existingtype"},"existingType"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"existingType"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2165"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"schemaname"},"schemaName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"schemaName"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2166"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"usenative"},"useNative"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"useNative"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2164"))}u.isMDXComponent=!0}}]);