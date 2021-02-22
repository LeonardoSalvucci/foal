(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{174:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var o=r(3),n=r(7),a=(r(0),r(259)),c={title:"Imports Racines"},i={unversionedId:"cookbook/root-imports",id:"cookbook/root-imports",isDocsHomePage:!1,title:"Imports Racines",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cookbook/root-imports.md",slug:"/cookbook/root-imports",permalink:"/fr/docs/cookbook/root-imports",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/cookbook/root-imports.md",version:"current",sidebar:"someSidebar",previous:{title:"ExpressJS",permalink:"/fr/docs/cookbook/expressjs"},next:{title:"Limiter les Requ\xeates R\xe9p\xe9t\xe9es",permalink:"/fr/docs/cookbook/limit-repeated-requests"}},p=[],s={toc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/fr/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// Relative import\nimport { User } from '../../entities';\n\n// Root import\nimport { User } from 'app/entities';\n")),Object(a.b)("p",null,"FoalTS build does not resolve root imports by default. You must install the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/package/module-alias"}),"module-alias")," package if you want to use them. Here's how to configure the library with Foal:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install module-alias\n")),Object(a.b)("p",null,"Specify the directory from which root imports should be resolved during compilation."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"tsconfig.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "baseUrl": "src",\n    ...\n  }\n}\n')),Object(a.b)("p",null,"Specify the directory from which root imports should be resolved at runtime."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"package.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n   "_moduleDirectories": ["./build"]\n}\n')),Object(a.b)("p",null,"Then register the loader at the top of the file ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.ts"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/index.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import 'module-alias/register';\n\n// ...\n")),Object(a.b)("p",null,"If you use shell scripts, the loader must also be registered at the top of each one."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/scripts/create-user.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import 'module-alias/register';\n\n// ...\n")))}l.isMDXComponent=!0},259:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return r?n.a.createElement(d,i(i({ref:t},s),{},{components:r})):n.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);