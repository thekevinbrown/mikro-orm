(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{1140:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),p=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(a),j=r,s=m["".concat(c,".").concat(j)]||m[j]||O[j]||n;return a?b.a.createElement(s,l(l({ref:t},i),{},{components:a})):b.a.createElement(s,l({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<n;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},934:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),b=a(7),n=(a(0),a(1140)),c={id:"arraycollection",title:"Class: ArrayCollection<T, O>",sidebar_label:"ArrayCollection"},l={unversionedId:"api/classes/arraycollection",id:"version-4.3/api/classes/arraycollection",isDocsHomePage:!1,title:"Class: ArrayCollection<T, O>",description:"Type parameters",source:"@site/versioned_docs/version-4.3/api/classes/arraycollection.md",slug:"/api/classes/arraycollection",permalink:"/docs/api/classes/arraycollection",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/arraycollection.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611421057,sidebar_label:"ArrayCollection",sidebar:"version-4.3/API",previous:{title:"Class: AbstractSqlPlatform",permalink:"/docs/api/classes/abstractsqlplatform"},next:{title:"Class: ArrayCriteriaNode",permalink:"/docs/api/classes/arraycriterianode"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Indexable",id:"indexable",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_count",id:"_count",children:[]},{value:"_property",id:"_property",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"items",id:"items",children:[]},{value:"owner",id:"owner",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"length",id:"length",children:[]},{value:"property",id:"property",children:[]}]},{value:"Methods",id:"methods",children:[{value:"Symbol.iterator",id:"symboliterator",children:[]},{value:"add",id:"add",children:[]},{value:"contains",id:"contains",children:[]},{value:"count",id:"count",children:[]},{value:"getIdentifiers",id:"getidentifiers",children:[]},{value:"getItems",id:"getitems",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"incrementCount",id:"incrementcount",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"loadCount",id:"loadcount",children:[]},{value:"propagate",id:"propagate",children:[]},{value:"propagateToInverseSide",id:"propagatetoinverseside",children:[]},{value:"propagateToOwningSide",id:"propagatetoowningside",children:[]},{value:"remove",id:"remove",children:[]},{value:"removeAll",id:"removeall",children:[]},{value:"set",id:"set",children:[]},{value:"shouldPropagateToCollection",id:"shouldpropagatetocollection",children:[]},{value:"toArray",id:"toarray",children:[]},{value:"toJSON",id:"tojson",children:[]}]}],i={toc:o};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"O"))))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"ArrayCollection")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/collection"}),"Collection")))),Object(n.b)("h2",{id:"indexable"},"Indexable"),Object(n.b)("p",null,"\u25aa ","[k: number]",": T"),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new ArrayCollection"),"(",Object(n.b)("inlineCode",{parentName:"p"},"owner"),": O & ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","O>, ",Object(n.b)("inlineCode",{parentName:"p"},"items?"),": T[]): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/arraycollection"}),"ArrayCollection")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L13"}),"packages/core/src/entity/ArrayCollection.ts:13"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"owner")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O & ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","O>")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"items?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/arraycollection"}),"ArrayCollection")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"_count"},"_","count"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"_","count"),": number"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L12"}),"packages/core/src/entity/ArrayCollection.ts:12"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"_property"},"_","property"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"_","property"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L13"}),"packages/core/src/entity/ArrayCollection.ts:13"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"initialized"},"initialized"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("strong",{parentName:"p"},"initialized"),": boolean = true"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L11"}),"packages/core/src/entity/ArrayCollection.ts:11"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"items"},"items"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"items"),": Set","<","T> = new Set","<","T>()"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L10"}),"packages/core/src/entity/ArrayCollection.ts:10"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"owner"},"owner"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"owner"),": O & ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","O>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L15"}),"packages/core/src/entity/ArrayCollection.ts:15"))),Object(n.b)("h2",{id:"accessors"},"Accessors"),Object(n.b)("h3",{id:"length"},"length"),Object(n.b)("p",null,"\u2022 get ",Object(n.b)("strong",{parentName:"p"},"length"),"(): number"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L123"}),"packages/core/src/entity/ArrayCollection.ts:123"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," number"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"property"},"property"),Object(n.b)("p",null,"\u2022 get ",Object(n.b)("strong",{parentName:"p"},"property"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L136"}),"packages/core/src/entity/ArrayCollection.ts:136"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>"),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"symboliterator"},"[Symbol.iterator]"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"[Symbol.iterator]"),"(): IterableIterator","<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L127"}),"packages/core/src/entity/ArrayCollection.ts:127"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," IterableIterator","<","T>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"add"},"add"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"add"),"(...",Object(n.b)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/reference"}),"Reference"),"<","T>)[]): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L64"}),"packages/core/src/entity/ArrayCollection.ts:64"))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"...items")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(T ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/reference"}),"Reference"),"<","T>)[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"contains"},"contains"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"contains"),"(",Object(n.b)("inlineCode",{parentName:"p"},"item"),": T ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/reference"}),"Reference"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"check?"),": boolean): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L106"}),"packages/core/src/entity/ArrayCollection.ts:106"))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"item")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/reference"}),"Reference"),"<","T>")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"check?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"count"},"count"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"count"),"(): number"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L111"}),"packages/core/src/entity/ArrayCollection.ts:111"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," number"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getidentifiers"},"getIdentifiers"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getIdentifiers"),"<","U>(",Object(n.b)("inlineCode",{parentName:"p"},"field?"),": string): U[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L52"}),"packages/core/src/entity/ArrayCollection.ts:52"))),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"U")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#iprimarykey"}),"IPrimaryKey")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Primary\\","<","T> & IPrimaryKey")))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"field?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," U[]"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getitems"},"getItems"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getItems"),"(): T[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L33"}),"packages/core/src/entity/ArrayCollection.ts:33"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T[]"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydrate"},"hydrate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"hydrate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"items"),": T[]): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L85"}),"packages/core/src/entity/ArrayCollection.ts:85"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"items")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"incrementcount"},"incrementCount"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"incrementCount"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": number): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L185"}),"packages/core/src/entity/ArrayCollection.ts:185"))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isinitialized"},"isInitialized"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"isInitialized"),"(",Object(n.b)("inlineCode",{parentName:"p"},"fully?"),": boolean): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L115"}),"packages/core/src/entity/ArrayCollection.ts:115"))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"fully")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"loadcount"},"loadCount"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"loadCount"),"(): Promise","<","number>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L29"}),"packages/core/src/entity/ArrayCollection.ts:29"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","number>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"propagate"},"propagate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"propagate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"item"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"add",'"'," ","|"," ",'"',"remove",'"',"): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L146"}),"packages/core/src/entity/ArrayCollection.ts:146"))),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"item")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"method")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"add",'"'," ","|"," ",'"',"remove",'"')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"propagatetoinverseside"},"propagateToInverseSide"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"propagateToInverseSide"),"(",Object(n.b)("inlineCode",{parentName:"p"},"item"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"add",'"'," ","|"," ",'"',"remove",'"',"): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L154"}),"packages/core/src/entity/ArrayCollection.ts:154"))),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"item")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"method")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"add",'"'," ","|"," ",'"',"remove",'"')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"propagatetoowningside"},"propagateToOwningSide"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"propagateToOwningSide"),"(",Object(n.b)("inlineCode",{parentName:"p"},"item"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"add",'"'," ","|"," ",'"',"remove",'"',"): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L162"}),"packages/core/src/entity/ArrayCollection.ts:162"))),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"item")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"method")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"add",'"'," ","|"," ",'"',"remove",'"')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"remove"},"remove"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"remove"),"(...",Object(n.b)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/reference"}),"Reference"),"<","T>)[]): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L91"}),"packages/core/src/entity/ArrayCollection.ts:91"))),Object(n.b)("h4",{id:"parameters-10"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"...items")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(T ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/reference"}),"Reference"),"<","T>)[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"removeall"},"removeAll"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"removeAll"),"(): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L102"}),"packages/core/src/entity/ArrayCollection.ts:102"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"set"},"set"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"set"),"(",Object(n.b)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/reference"}),"Reference"),"<","T>)[]): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L77"}),"packages/core/src/entity/ArrayCollection.ts:77"))),Object(n.b)("h4",{id:"parameters-11"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"items")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(T ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/reference"}),"Reference"),"<","T>)[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"shouldpropagatetocollection"},"shouldPropagateToCollection"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"shouldPropagateToCollection"),"(",Object(n.b)("inlineCode",{parentName:"p"},"collection"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/arraycollection"}),"ArrayCollection"),"<","O, T>, ",Object(n.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"add",'"'," ","|"," ",'"',"remove",'"',"): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L172"}),"packages/core/src/entity/ArrayCollection.ts:172"))),Object(n.b)("h4",{id:"parameters-12"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"collection")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/arraycollection"}),"ArrayCollection"),"<","O, T>")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"method")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"add",'"'," ","|"," ",'"',"remove",'"')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"toarray"},"toArray"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toArray"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary"),"[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L37"}),"packages/core/src/entity/ArrayCollection.ts:37"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary"),"[]"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tojson"},"toJSON"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toJSON"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary"),"[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/ArrayCollection.ts#L48"}),"packages/core/src/entity/ArrayCollection.ts:48"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary"),"[]"))}p.isMDXComponent=!0}}]);