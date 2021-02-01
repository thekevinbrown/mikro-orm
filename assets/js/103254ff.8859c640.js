(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1254:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(a),O=n,j=s["".concat(c,".").concat(O)]||s[O]||m[O]||b;return a?r.a.createElement(j,i(i({ref:t},p),{},{components:a})):r.a.createElement(j,i({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),b=(a(0),a(1254)),c={id:"entity_generator.entitygenerator",title:"Class: EntityGenerator",sidebar_label:"EntityGenerator",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/entity_generator.entitygenerator",id:"api/classes/entity_generator.entitygenerator",isDocsHomePage:!1,title:"Class: EntityGenerator",description:"Class: EntityGenerator",source:"@site/docs/api/classes/entity_generator.entitygenerator.md",slug:"/api/classes/entity_generator.entitygenerator",permalink:"/docs/next/api/classes/entity_generator.entitygenerator",editUrl:null,version:"current",sidebar_label:"EntityGenerator",sidebar:"API",previous:{title:"Class: WrappedEntity<T, PK>",permalink:"/docs/next/api/classes/core.wrappedentity"},next:{title:"Class: Client",permalink:"/docs/next/api/classes/knex.knex-1.client"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"connection",id:"connection",children:[]},{value:"driver",id:"driver",children:[]},{value:"helper",id:"helper",children:[]},{value:"namingStrategy",id:"namingstrategy",children:[]},{value:"platform",id:"platform",children:[]},{value:"sources",id:"sources",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createEntity",id:"createentity",children:[]},{value:"generate",id:"generate",children:[]}]}],p={toc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-entitygenerator"},"Class: EntityGenerator"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/entity_generator"}),"entity-generator"),".EntityGenerator"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"EntityGenerator"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new EntityGenerator"),"(",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.entitymanager"}),Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",">","): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/entity_generator.entitygenerator"}),Object(b.b)("em",{parentName:"a"},"EntityGenerator"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.entitymanager"}),Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/entity_generator.entitygenerator"}),Object(b.b)("em",{parentName:"a"},"EntityGenerator"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L14"}),"packages/entity-generator/src/EntityGenerator.ts:14")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L8"}),"packages/entity-generator/src/EntityGenerator.ts:8")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"connection"},"connection"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"connection"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L12"}),"packages/entity-generator/src/EntityGenerator.ts:12")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L9"}),"packages/entity-generator/src/EntityGenerator.ts:9")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"helper"},"helper"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"helper"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.schemahelper"}),Object(b.b)("em",{parentName:"a"},"SchemaHelper"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L11"}),"packages/entity-generator/src/EntityGenerator.ts:11")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"namingstrategy"},"namingStrategy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"namingStrategy"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.namingstrategy"}),Object(b.b)("em",{parentName:"a"},"NamingStrategy"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L13"}),"packages/entity-generator/src/EntityGenerator.ts:13")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"platform"},"platform"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlplatform"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlPlatform"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L10"}),"packages/entity-generator/src/EntityGenerator.ts:10")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sources"},"sources"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"sources"),": ",Object(b.b)("em",{parentName:"p"},"SourceFile"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L14"}),"packages/entity-generator/src/EntityGenerator.ts:14")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"createentity"},"createEntity"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createEntity"),"(",Object(b.b)("inlineCode",{parentName:"p"},"table"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.databasetable"}),Object(b.b)("em",{parentName:"a"},"DatabaseTable")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"table")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.databasetable"}),Object(b.b)("em",{parentName:"a"},"DatabaseTable")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L31"}),"packages/entity-generator/src/EntityGenerator.ts:31")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"generate"},"generate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"generate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": { ",Object(b.b)("inlineCode",{parentName:"p"},"baseDir?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"save?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean"),"  }): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ ",Object(b.b)("inlineCode",{parentName:"td"},"baseDir?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"td"},"save?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"boolean"),"  }"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"...")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b3b0342/packages/entity-generator/src/EntityGenerator.ts#L18"}),"packages/entity-generator/src/EntityGenerator.ts:18")))}l.isMDXComponent=!0}}]);