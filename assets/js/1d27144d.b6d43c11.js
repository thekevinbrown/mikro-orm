(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1254:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return u}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var m=b.a.createContext({}),O=function(e){var t=b.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},j=function(e){var t=O(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},i=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),j=O(a),i=n,u=j["".concat(c,".").concat(i)]||j[i]||d[i]||r;return a?b.a.createElement(u,l(l({ref:t},m),{},{components:a})):b.a.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=i;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var m=2;m<r;m++)c[m]=a[m];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"},190:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return O}));var n=a(3),b=a(7),r=(a(0),a(1254)),c={id:"knex.knex-1.wherein",title:"Interface: WhereIn<TRecord, TResult>",sidebar_label:"WhereIn",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.wherein",id:"api/interfaces/knex.knex-1.wherein",isDocsHomePage:!1,title:"Interface: WhereIn<TRecord, TResult>",description:"Interface: WhereIn",source:"@site/docs/api/interfaces/knex.knex-1.wherein.md",slug:"/api/interfaces/knex.knex-1.wherein",permalink:"/docs/next/api/interfaces/knex.knex-1.wherein",editUrl:null,version:"current",sidebar_label:"WhereIn",sidebar:"API",previous:{title:"Interface: WhereExists<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.whereexists"},next:{title:"Interface: WhereNull<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.wherenull"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],m={toc:p};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-whereintrecord-tresult"},"Interface: WhereIn<TRecord, TResult",">"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"),".WhereIn"),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecord")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"WhereIn"))),Object(r.b)("h2",{id:"callable"},"Callable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"WhereIn"),"<K",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnName"),": K, ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#querycallback"}),Object(r.b)("em",{parentName:"a"},"QueryCallback")),"<",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("em",{parentName:"p"},"unknown"),"[]",">"," ","|"," readonly (",Object(r.b)("em",{parentName:"p"},"Readonly"),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"p"},"base"),">","[K]",">"," ","|"," ",Object(r.b)("em",{parentName:"p"},"Readonly"),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(r.b)("em",{parentName:"a"},"Raw")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"p"},"base"),">","[K]",">",">",")[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"K")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"symbol"))))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"K")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"values")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#querycallback"}),Object(r.b)("em",{parentName:"a"},"QueryCallback")),"<",Object(r.b)("em",{parentName:"td"},"any"),", ",Object(r.b)("em",{parentName:"td"},"unknown"),"[]",">"," ","|"," readonly (",Object(r.b)("em",{parentName:"td"},"Readonly"),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),">","[K]",">"," ","|"," ",Object(r.b)("em",{parentName:"td"},"Readonly"),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(r.b)("em",{parentName:"a"},"Raw")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),">","[K]",">",">",")[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1291"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"WhereIn"),"(",Object(r.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#querycallback"}),Object(r.b)("em",{parentName:"a"},"QueryCallback")),"<",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("em",{parentName:"p"},"unknown"),"[]",">"," ","|"," readonly ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#value"}),Object(r.b)("em",{parentName:"a"},"Value")),"[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"values")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#querycallback"}),Object(r.b)("em",{parentName:"a"},"QueryCallback")),"<",Object(r.b)("em",{parentName:"td"},"any"),", ",Object(r.b)("em",{parentName:"td"},"unknown"),"[]",">"," ","|"," readonly ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#value"}),Object(r.b)("em",{parentName:"a"},"Value")),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1295"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"WhereIn"),"<K",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly K[], ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#querycallback"}),Object(r.b)("em",{parentName:"a"},"QueryCallback")),"<",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("em",{parentName:"p"},"unknown"),"[]",">"," ","|",' readonly readonly (Readonly<ResolveTableType<TRecord, "base"',">","[K]",">"," ","|",' Readonly<Raw<ResolveTableType<TRecord, "base"',">","[K]",">",">",")","[][]","): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"K")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"symbol"))))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnNames")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readonly K[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"values")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#querycallback"}),Object(r.b)("em",{parentName:"a"},"QueryCallback")),"<",Object(r.b)("em",{parentName:"td"},"any"),", ",Object(r.b)("em",{parentName:"td"},"unknown"),"[]",">"," ","|",' readonly readonly (Readonly<ResolveTableType<TRecord, "base"',">","[K]",">"," ","|",' Readonly<Raw<ResolveTableType<TRecord, "base"',">","[K]",">",">",")","[][]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1299"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"WhereIn"),"(",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(r.b)("em",{parentName:"p"},"string"),"[], ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#querycallback"}),Object(r.b)("em",{parentName:"a"},"QueryCallback")),"<",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("em",{parentName:"p"},"unknown"),"[]",">"," ","|"," readonly ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#value"}),Object(r.b)("em",{parentName:"a"},"Value")),"[][]","): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnNames")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readonly ",Object(r.b)("em",{parentName:"td"},"string"),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"values")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#querycallback"}),Object(r.b)("em",{parentName:"a"},"QueryCallback")),"<",Object(r.b)("em",{parentName:"td"},"any"),", ",Object(r.b)("em",{parentName:"td"},"unknown"),"[]",">"," ","|"," readonly ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#value"}),Object(r.b)("em",{parentName:"a"},"Value")),"[][]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1303"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"WhereIn"),"<K, TRecordInner, TResultInner",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnName"),": K, ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TRecord","[K]",">","): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"K")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"symbol"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecordInner")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResultInner")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"K")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"values")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TRecord","[K]",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1307"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"WhereIn"),"<TRecordInner, TResultInner",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#value"}),Object(r.b)("em",{parentName:"a"},"Value")),"[] ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TResultInner",">","): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecordInner"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResultInner"))))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"values")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#value"}),Object(r.b)("em",{parentName:"a"},"Value")),"[] ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TResultInner",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1311"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"WhereIn"),"<K, TRecordInner, TResultInner",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly K[], ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TRecord","[K]",">","): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"K")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"symbol"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecordInner")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResultInner")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnNames")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readonly K[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"values")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TRecord","[K]",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1315"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"WhereIn"),"<TRecordInner, TResultInner",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(r.b)("em",{parentName:"p"},"string"),"[], ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TResultInner",">","): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecordInner"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResultInner"))))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnNames")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readonly ",Object(r.b)("em",{parentName:"td"},"string"),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"values")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TResultInner",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1319"))}O.isMDXComponent=!0}}]);