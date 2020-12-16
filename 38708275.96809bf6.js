(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return u}));var r=o(3),n=o(7),a=(o(0),o(250)),i={title:"Introduction"},l={unversionedId:"tutorials/multi-user-todo-list/1-Introduction",id:"tutorials/multi-user-todo-list/1-Introduction",isDocsHomePage:!1,title:"Introduction",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/tutorials/multi-user-todo-list/1-Introduction.md",slug:"/tutorials/multi-user-todo-list/1-Introduction",permalink:"/docs/tutorials/multi-user-todo-list/1-Introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/multi-user-todo-list/1-Introduction.md",version:"current",sidebar:"someSidebar",previous:{title:"Unit Testing",permalink:"/docs/tutorials/simple-todo-list/7-unit-testing"},next:{title:"The User & Todo Models",permalink:"/docs/tutorials/multi-user-todo-list/2-the-user-and-todo-models"}},c=[],s={rightToc:c};function u(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(a.b)("p",null,"In this tutorial you will learn how to manage users, authentication and authorization in FoalTS. You will also have a quick overview of end-to-end testing."),Object(a.b)("p",null,"For that, you are going to create a multi-user to-do list. It will extend the application created in the previous tutorial ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/tutorials/simple-todo-list/1-installation"}),"Simple To-Do List")," that you must follow before going through this one."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The source code of the first tutorial is available ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://foalts.org/simple-todo-list-source-code-v2.zip"}),"here"),".")),Object(a.b)("p",null,"The application will have three pages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a sign up page where users can create a new account with an email and a password,"),Object(a.b)("li",{parentName:"ul"},"a login page that expects an email and a password to sign in,"),Object(a.b)("li",{parentName:"ul"},"and the todo-list page where the tasks are listed, created and deleted.")),Object(a.b)("p",null,"Each user will have her/his own todos and will not be able to view, create or delete other people's todos."),Object(a.b)("p",null,"The pages look like this:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Sign up page",src:o(305).default}),"\n",Object(a.b)("img",{alt:"Login page",src:o(306).default}),"\n",Object(a.b)("img",{alt:"To-do list page",src:o(307).default})),Object(a.b)("p",null,"Let's get started!"))}u.isMDXComponent=!0},250:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return f}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(o),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return o?n.a.createElement(f,l(l({ref:t},s),{},{components:o})):n.a.createElement(f,l({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},305:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/signup-24e5a30a94173658dc445232caddae9b.png"},306:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/signin-d9b7a51ae39f660381153f16f7735a7f.png"},307:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/todo-list-f4c43484fae484238862186d723f3934.png"}}]);