(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1254:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(1254)),c={title:"Metadata cache"},o={unversionedId:"metadata-cache",id:"version-2.7/metadata-cache",isDocsHomePage:!1,title:"Metadata cache",description:"Under the hood, MikroORM uses ts-morph to read",source:"@site/versioned_docs/version-2.7/metadata-cache.md",slug:"/metadata-cache",permalink:"/docs/2.7/metadata-cache",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/metadata-cache.md",version:"2.7",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612168854,sidebar:"version-2.7/docs",previous:{title:"Naming strategy",permalink:"/docs/2.7/naming-strategy"},next:{title:"Debugging",permalink:"/docs/2.7/debugging"}},s=[{value:"Automatic invalidation",id:"automatic-invalidation",children:[]},{value:"Disabling metadata cache",id:"disabling-metadata-cache",children:[]},{value:"Using different temp folder",id:"using-different-temp-folder",children:[]},{value:"Providing custom cache adapter",id:"providing-custom-cache-adapter",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Under the hood, ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM")," uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dsherret/ts-morph"}),Object(i.b)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. Thanks to this,\ndefining the type is enough for runtime validation."),Object(i.b)("p",null,"This process can be a bit slow, mainly because ",Object(i.b)("inlineCode",{parentName:"p"},"ts-morph")," will scan all your source files\nbased on your ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json"),". You can speed up this process by whitelisting only the folders\nwhere your entities are via ",Object(i.b)("inlineCode",{parentName:"p"},"entitiesDirsTs")," option. "),Object(i.b)("p",null,"After the discovery process ends, all metadata will be cached. By default, ",Object(i.b)("inlineCode",{parentName:"p"},"FileCacheAdapter"),"\nwill be used to store the cache inside ",Object(i.b)("inlineCode",{parentName:"p"},"./temp")," folder to JSON files. "),Object(i.b)("h2",{id:"automatic-invalidation"},"Automatic invalidation"),Object(i.b)("p",null,"Entity metadata are cached together with modified time of the source file, and every time\nthe cache is requested, it first checks if the cache is not invalid. This way you can forgot\nabout the caching mechanism most of the time."),Object(i.b)("p",null,"One case where you can end up needing to wipe the cache manually is when you work withing a\ngit branch where contents of entities folder differs. "),Object(i.b)("h2",{id:"disabling-metadata-cache"},"Disabling metadata cache"),Object(i.b)("p",null,"You can disable caching via:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"await MikroORM.init({\n  cache: { enabled: false },\n  // ...\n});\n")),Object(i.b)("h2",{id:"using-different-temp-folder"},"Using different temp folder"),Object(i.b)("p",null,"You can set the temp folder via:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"await MikroORM.init({\n  cache: { options: { cacheDir: '...' } },\n  // ...\n});\n")),Object(i.b)("h2",{id:"providing-custom-cache-adapter"},"Providing custom cache adapter"),Object(i.b)("p",null,"You can also implement your own cache adapter, for example to store the cache in redis.\nTo do so, just implement simple ",Object(i.b)("inlineCode",{parentName:"p"},"CacheAdapter")," interface:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface CacheAdapter {\n\n  get(name: string): any;\n\n  set(name: string, data: any, origin: string): void;\n\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class RedisCacheAdapter implements CacheAdapter { ... }\n")),Object(i.b)("p",null,"And provide the implementation in ",Object(i.b)("inlineCode",{parentName:"p"},"cache.adapter")," option:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"await MikroORM.init({\n  cache: { adapter: RedisCacheAdapter, options: { ... } },\n  // ...\n});\n")))}p.isMDXComponent=!0}}]);