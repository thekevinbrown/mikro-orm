(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(a),O=r,j=s["".concat(c,".").concat(O)]||s[O]||m[O]||i;return a?n.a.createElement(j,b(b({ref:t},o),{},{components:a})):n.a.createElement(j,b({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var o=2;o<i;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},270:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(1253)),c={layout:"homepage",title:"MikroORM v4",hide_title:!0},b={unversionedId:"index",id:"version-4.2/index",isDocsHomePage:!1,title:"MikroORM v4",description:"Table of contents",source:"@site/versioned_docs/version-4.2/index.md",slug:"/index",permalink:"/docs/4.2/index",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/index.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611931648},l=[{value:"Table of contents",id:"table-of-contents",children:[]}],o={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Overview",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/installation"}),"Installation & Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/defining-entities"}),"Defining Entities")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/entity-manager"}),"Persisting, Cascading and Fetching Entities with ",Object(i.b)("inlineCode",{parentName:"a"},"EntityManager"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/repositories"}),"Using ",Object(i.b)("inlineCode",{parentName:"a"},"EntityRepository")," instead of ",Object(i.b)("inlineCode",{parentName:"a"},"EntityManager"))))),Object(i.b)("li",{parentName:"ul"},"Fundamentals",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/identity-map"}),"Identity Map and Request Context")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/entity-references"}),"Entity References and ",Object(i.b)("inlineCode",{parentName:"a"},"Reference<T>")," Wrapper")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/entity-constructors"}),"Using Entity Constructors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/relationships"}),"Modelling Relationships")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/collections"}),"Collections")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/unit-of-work"}),"Unit of Work")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/transactions"}),"Transactions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/cascading"}),"Cascading persist and remove")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/filters"}),"Filters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/deployment"}),"Deployment")))),Object(i.b)("li",{parentName:"ul"},"Advanced Features",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/nested-populate"}),"Smart Nested Populate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/query-conditions"}),"Smart Query Conditions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/query-builder"}),"Using ",Object(i.b)("inlineCode",{parentName:"a"},"QueryBuilder"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/serializing"}),"Serializing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/entity-helper"}),"Updating Entity Values with ",Object(i.b)("inlineCode",{parentName:"a"},"Entity.assign()"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/property-validation"}),"Property Validation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/lifecycle-hooks"}),"Lifecycle Hooks")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/loading-strategies"}),"Loading Strategies")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/naming-strategy"}),"Naming Strategy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/metadata-providers"}),"Metadata Providers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/metadata-cache"}),"Metadata Cache")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/debugging"}),"Debugging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/schema-generator"}),"Schema Generator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/entity-generator"}),"Entity Generator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/migrations"}),"Migrations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/read-connections"}),"Read Replica Connections")))),Object(i.b)("li",{parentName:"ul"},"Usage with Different Drivers",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/usage-with-sql"}),"Usage with SQL Drivers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/usage-with-mongo"}),"Usage with MongoDB")))),Object(i.b)("li",{parentName:"ul"},"Recipes",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/usage-with-nestjs"}),"Usage with NestJS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/usage-with-js"}),"Usage with Vanilla JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/custom-driver"}),"Creating Custom Driver")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/multiple-schemas"}),"Using Multiple Schemas")))),Object(i.b)("li",{parentName:"ul"},"Example Integrations",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/express-ts"}),"Express + MongoDB + TypeScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/nest"}),"Nest + MySQL + TypeScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mikro-orm/nestjs-realworld-example-app"}),"RealWorld example app (Nest + MySQL)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/express-js"}),"Express + MongoDB + JavaScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/driescroons/mikro-orm-graphql-example"}),"GraphQL + PostgreSQL + Typescript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/PodaruDragos/inversify-example-app"}),"Inversify + PostgreSQL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/jonahallibone/mikro-orm-nextjs"}),"NextJS + MySQL"))))))}p.isMDXComponent=!0}}]);