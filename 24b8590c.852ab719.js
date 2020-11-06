(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return i}));var n=a(1),r=a(6),b=(a(0),a(807)),c={id:"schemacommandfactory",title:"Class: SchemaCommandFactory",sidebar_label:"SchemaCommandFactory"},m={unversionedId:"api/classes/schemacommandfactory",id:"version-4.2/api/classes/schemacommandfactory",isDocsHomePage:!1,title:"Class: SchemaCommandFactory",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/schemacommandfactory.md",slug:"/api/classes/schemacommandfactory",permalink:"/docs/api/classes/schemacommandfactory",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/schemacommandfactory.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1604682791,sidebar_label:"SchemaCommandFactory",sidebar:"version-4.2/API",previous:{title:"Class: ScalarCriteriaNode",permalink:"/docs/api/classes/scalarcriterianode"},next:{title:"Class: SchemaGenerator",permalink:"/docs/api/classes/schemagenerator"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"configureSchemaCommand",id:"configureschemacommand",children:[]},{value:"create",id:"create",children:[]},{value:"getOrderedParams",id:"getorderedparams",children:[]},{value:"handleSchemaCommand",id:"handleschemacommand",children:[]}]},{value:"Object literals",id:"object-literals",children:[{value:"DESCRIPTIONS",id:"descriptions",children:[]},{value:"SUCCESS_MESSAGES",id:"success_messages",children:[]}]}],o={rightToc:l};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"SchemaCommandFactory"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"configureschemacommand"},"configureSchemaCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"configureSchemaCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Argv, ",Object(b.b)("inlineCode",{parentName:"p"},"command"),": ",'"',"create",'"'," ","|"," ",'"',"update",'"'," ","|"," ",'"',"drop",'"',"): Argv","<","{}>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/SchemaCommandFactory.ts#L32"}),"packages/cli/src/commands/SchemaCommandFactory.ts:32"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Argv")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"command")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"',"create",'"'," ","|"," ",'"',"update",'"'," ","|"," ",'"',"drop",'"')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Argv","<","{}>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"create"),"<","U>(",Object(b.b)("inlineCode",{parentName:"p"},"command"),": ",'"',"create",'"'," ","|"," ",'"',"update",'"'," ","|"," ",'"',"drop",'"',"): CommandModule","<","unknown, U> & { builder: (args: Argv) => Argv","<","U> ; handler: (args: Arguments","<","U>) => Promise","<","void>  }"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/SchemaCommandFactory.ts#L21"}),"packages/cli/src/commands/SchemaCommandFactory.ts:21"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"U")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api#options"}),"Options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"command")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"',"create",'"'," ","|"," ",'"',"update",'"'," ","|"," ",'"',"drop",'"')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," CommandModule","<","unknown, U> & { builder: (args: Argv) => Argv","<","U> ; handler: (args: Arguments","<","U>) => Promise","<","void>  }"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getorderedparams"},"getOrderedParams"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getOrderedParams"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#options"}),"Options"),">, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"create",'"'," ","|"," ",'"',"update",'"'," ","|"," ",'"',"drop",'"',"): any[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/SchemaCommandFactory.ts#L98"}),"packages/cli/src/commands/SchemaCommandFactory.ts:98"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api#options"}),"Options"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"',"create",'"'," ","|"," ",'"',"update",'"'," ","|"," ",'"',"drop",'"')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," any[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handleschemacommand"},"handleSchemaCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"handleSchemaCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#options"}),"Options"),">, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"create",'"'," ","|"," ",'"',"update",'"'," ","|"," ",'"',"drop",'"',", ",Object(b.b)("inlineCode",{parentName:"p"},"successMessage"),": string): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/SchemaCommandFactory.ts#L75"}),"packages/cli/src/commands/SchemaCommandFactory.ts:75"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api#options"}),"Options"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"',"create",'"'," ","|"," ",'"',"update",'"'," ","|"," ",'"',"drop",'"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"successMessage")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("h2",{id:"object-literals"},"Object literals"),Object(b.b)("h3",{id:"descriptions"},"DESCRIPTIONS"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"DESCRIPTIONS"),": object"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/SchemaCommandFactory.ts#L9"}),"packages/cli/src/commands/SchemaCommandFactory.ts:9"))),Object(b.b)("h4",{id:"properties"},"Properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"create")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Create database schema based on current metadata"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"drop")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Drop database schema based on current metadata"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"update")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Update database schema based on current metadata"')))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"success_messages"},"SUCCESS","_","MESSAGES"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"SUCCESS","_","MESSAGES"),": object"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/SchemaCommandFactory.ts#L15"}),"packages/cli/src/commands/SchemaCommandFactory.ts:15"))),Object(b.b)("h4",{id:"properties-1"},"Properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"create")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Schema successfully created"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"drop")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Schema successfully dropped"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"update")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Schema successfully updated"')))))}i.isMDXComponent=!0},807:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},p=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=i(a),O=n,s=p["".concat(c,".").concat(O)]||p[O]||d[O]||b;return a?r.a.createElement(s,m(m({ref:t},o),{},{components:a})):r.a.createElement(s,m({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:n,c[1]=m;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);