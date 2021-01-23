(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1140:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(a),s=r,O=p["".concat(o,".").concat(s)]||p[s]||m[s]||b;return a?n.a.createElement(O,c(c({ref:t},l),{},{components:a})):n.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,o=new Array(b);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<b;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},815:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),b=(a(0),a(1140)),o={id:"commitordercalculator",title:"Class: CommitOrderCalculator",sidebar_label:"CommitOrderCalculator"},c={unversionedId:"api/classes/commitordercalculator",id:"version-4.2/api/classes/commitordercalculator",isDocsHomePage:!1,title:"Class: CommitOrderCalculator",description:"CommitOrderCalculator implements topological sorting, which is an ordering",source:"@site/versioned_docs/version-4.2/api/classes/commitordercalculator.md",slug:"/api/classes/commitordercalculator",permalink:"/docs/4.2/api/classes/commitordercalculator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/commitordercalculator.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611421057,sidebar_label:"CommitOrderCalculator",sidebar:"version-4.2/API",previous:{title:"Class: Collection<T, O>",permalink:"/docs/4.2/api/classes/collection"},next:{title:"Class: Configuration<D>",permalink:"/docs/4.2/api/classes/configuration"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"nodes",id:"nodes",children:[]},{value:"sortedNodeList",id:"sortednodelist",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addDependency",id:"adddependency",children:[]},{value:"addNode",id:"addnode",children:[]},{value:"hasNode",id:"hasnode",children:[]},{value:"sort",id:"sort",children:[]},{value:"visit",id:"visit",children:[]},{value:"visitOpenNode",id:"visitopennode",children:[]}]}],l={toc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"CommitOrderCalculator implements topological sorting, which is an ordering\nalgorithm for directed graphs (DG) and/or directed acyclic graphs (DAG) by\nusing a depth-first searching (DFS) to traverse the graph built in memory.\nThis algorithm have a linear running time based on nodes (V) and dependency\nbetween the nodes (E), resulting in a computational complexity of O(V + E)."),Object(b.b)("p",null,"Based on ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php"}),"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"CommitOrderCalculator"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"nodes"},"nodes"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"nodes"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/node"}),"Node"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L33"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:33"))),Object(b.b)("p",null,"Matrix of nodes, keys are provided hashes and values are the node definition objects."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sortednodelist"},"sortedNodeList"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"sortedNodeList"),": string[] = []"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L36"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:36"))),Object(b.b)("p",null,"Volatile variable holding calculated nodes during sorting process."),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"adddependency"},"addDependency"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addDependency"),"(",Object(b.b)("inlineCode",{parentName:"p"},"from"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"to"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"weight"),": number): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L55"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:55"))),Object(b.b)("p",null,"Adds a new dependency (edge) to the graph using their hashes."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"from")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"to")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"weight")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"addnode"},"addNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": string): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L48"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:48"))),Object(b.b)("p",null,"Adds a new node to the graph, assigning its hash."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hasnode"},"hasNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hasNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": string): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L41"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:41"))),Object(b.b)("p",null,"Checks for node existence in graph."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sort"},"sort"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sort"),"(): string[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L65"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:65"))),Object(b.b)("p",null,"Return a valid order list of all current nodes.\nThe desired topological sorting is the reverse post order of these searches."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"visit"},"visit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"visit"),"(",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/node"}),"Node"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L86"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:86"))),Object(b.b)("p",null,"Visit a given node definition for reordering."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/node"}),"Node"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"visitopennode"},"visitOpenNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"visitOpenNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/node"}),"Node"),", ",Object(b.b)("inlineCode",{parentName:"p"},"target"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/node"}),"Node"),", ",Object(b.b)("inlineCode",{parentName:"p"},"edge"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/edge"}),"Edge"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L108"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:108"))),Object(b.b)("p",null,"Visits all target's dependencies if in cycle with given node"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/node"}),"Node"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"target")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/node"}),"Node"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"edge")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/edge"}),"Edge"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"))}d.isMDXComponent=!0}}]);