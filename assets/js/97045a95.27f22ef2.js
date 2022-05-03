"use strict";(self.webpackChunkdeep_dive=self.webpackChunkdeep_dive||[]).push([[4269],{3905:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return d}});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=o(l),d=r,m=k["".concat(p,".").concat(d)]||k[d]||s[d]||a;return l?n.createElement(m,i(i({ref:t},c),{},{components:l})):n.createElement(m,i({ref:t},c))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<a;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},7826:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return o},assets:function(){return c},toc:function(){return s},default:function(){return d}});var n=l(7462),r=l(3366),a=(l(7294),l(3905)),i=["components"],u={sidebar_position:39},p="38\uc7a5 \ube0c\ub77c\uc6b0\uc800\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815",o={unversionedId:"week9/chapter38",id:"week9/chapter38",title:"38\uc7a5 \ube0c\ub77c\uc6b0\uc800\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815",description:"---",source:"@site/docs/week9/chapter38.md",sourceDirName:"week9",slug:"/week9/chapter38",permalink:"/deep-dive/docs/week9/chapter38",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/week9/chapter38.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39},sidebar:"tutorialSidebar",previous:{title:"37\uc7a5 Set\uacfc Map",permalink:"/deep-dive/docs/week9/chapter37"}},c={},s=[{value:"38.1 \uc694\uccad\uacfc \uc751\ub2f5",id:"381-\uc694\uccad\uacfc-\uc751\ub2f5",level:2},{value:"38.2 HTTP 1.1\uacfc HTTP 2.0",id:"382-http-11\uacfc-http-20",level:2},{value:"38.3 HTML \ud30c\uc2f1\uacfc DOM \uc0dd\uc131",id:"383-html-\ud30c\uc2f1\uacfc-dom-\uc0dd\uc131",level:2},{value:"38.4 CSS \ud30c\uc2f1\uacfc CSSOM \uc0dd\uc131",id:"384-css-\ud30c\uc2f1\uacfc-cssom-\uc0dd\uc131",level:2},{value:"38.5 \ub80c\ub354 \ud2b8\ub9ac \uc0dd\uc131",id:"385-\ub80c\ub354-\ud2b8\ub9ac-\uc0dd\uc131",level:2},{value:"38.6 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud30c\uc2f1\uacfc \uc2e4\ud589",id:"386-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758-\ud30c\uc2f1\uacfc-\uc2e4\ud589",level:2},{value:"\uc21c\uc11c",id:"\uc21c\uc11c",level:3},{value:"38.7 \ub9ac\ud50c\ub85c\uc6b0\uc640 \ub9ac\ud398\uc778\ud2b8",id:"387-\ub9ac\ud50c\ub85c\uc6b0\uc640-\ub9ac\ud398\uc778\ud2b8",level:2},{value:"\ub9ac\ud50c\ub85c\uc6b0",id:"\ub9ac\ud50c\ub85c\uc6b0",level:3},{value:"\ub9ac\ud398\uc778\ud2b8",id:"\ub9ac\ud398\uc778\ud2b8",level:3},{value:"38.8 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc2f1\uc5d0 \uc758\ud55c HTML \ud30c\uc2f1 \uc911\ub2e8",id:"388-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\ud30c\uc2f1\uc5d0-\uc758\ud55c-html-\ud30c\uc2f1-\uc911\ub2e8",level:2},{value:"38.9 script \ud0dc\uadf8\uc758 async/defer \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8",id:"389-script-\ud0dc\uadf8\uc758-asyncdefer-\uc5b4\ud2b8\ub9ac\ubdf0\ud2b8",level:2},{value:"async",id:"async",level:3},{value:"defer",id:"defer",level:3}],k={toc:s};function d(e){var t=e.components,u=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"38\uc7a5-\ube0c\ub77c\uc6b0\uc800\uc758-\ub80c\ub354\ub9c1-\uacfc\uc815"},"38\uc7a5 \ube0c\ub77c\uc6b0\uc800\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"ex_screenshot",src:l(9396).Z,width:"2028",height:"1202"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ube0c\ub77c\uc6b0\uc800\ub294 HTML, CSS, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8, \uc774\ubbf8\uc9c0, \ud3f0\ud2b8 \ud30c\uc77c \ub4f1 \ub80c\ub354\ub9c1\uc5d0 \ud544\uc694\ud55c \ub9ac\uc18c\uc2a4\ub97c \uc694\uccad\ud558\uace0 \uc11c\ubc84\ub85c\ubd80\ud130 \uc751\ub2f5\uc744 \ubc1b\ub294\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ube0c\ub77c\uc6b0\uc800\uc758 \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc740 \uc11c\ubc84\ub85c\ubd80\ud130 \uc751\ub2f5\ub41c HTML\uacfc CSS\ub97c \ud30c\uc2f1\ud558\uc5ec DOM\uacfc CSSOM\uc744 \uc0dd\uc131\ud558\uace0 \uc774\ub4e4\uc744 \uacb0\ud569\ud558\uc5ec \ub80c\ub354 \ud2b8\ub9ac\ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ube0c\ub77c\uc6b0\uc800\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \uc11c\ubc84\ub85c\ubd80\ud130 \uc751\ub2f5\ub41c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud30c\uc2f1\ud558\uc5ec AST\ub97c \uc0dd\uc131\ud558\uace0 \ubc14\uc774\ud2b8\ucf54\ub4dc\ub85c \ubcc0\ud658\ud558\uc5ec \uc2e4\ud589\ud55c\ub2e4. \uc774\ub54c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 DOM API\ub97c \ud1b5\ud574 DOM\uc774\ub098 CSSOM\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4. \ubcc0\uacbd\ub41c DOM\uacfc CSSOM\uc740 \ub2e4\uc2dc \ub80c\ub354 \ud2b8\ub9ac\ub85c \uacb0\ud569\ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ub80c\ub354 \ud2b8\ub9ac\ub97c \uae30\ubc18\uc73c\ub85c HTML \uc694\uc18c\uc758 \ub808\uc774\uc544\uc6c3(\uc704\uce58\uc640 \ud06c\uae30)\ub97c \uacc4\uc0b0\ud558\uace0 \ube0c\ub77c\uc6b0\uc800 \ud654\uba74\uc5d0 HTML \uc694\uc18c\ub97c \ud398\uc778\ud305\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"381-\uc694\uccad\uacfc-\uc751\ub2f5"},"38.1 \uc694\uccad\uacfc \uc751\ub2f5"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ub80c\ub354\ub9c1\uc5d0 \ud544\uc694\ud55c \ub9ac\uc18c\uc2a4\ub294 \ubaa8\ub450 \uc11c\ubc84\uc5d0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud544\uc694\ud55c \ub9ac\uc18c\uc2a4\ub97c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc694\uccad\ud558\uace0 \uc11c\ubc84\uc5d0\uc11c \uc751\ub2f5\ud55c\ub2e4. \ube0c\ub77c\uc6b0\uc800\ub294 \ud574\ub2f9 \ub9ac\uc18c\uc2a4\ub97c \ud30c\uc2f1\ud558\uc5ec \ub80c\ub354\ub9c1 \ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc720\uc800\uac00 \uc8fc\uc18c\ucc3d\uc5d0 ",(0,a.kt)("a",{parentName:"li",href:"https://herekim.github.io%EB%A5%BC"},"https://herekim.github.io\ub97c")," \uc785\ub825\ud558\uace0 \uc5d4\ud130\ub97c \ub204\ub978\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub8e8\ud2b8 \uc694\uccad(/)\uc774 herekim.github.io \uc11c\ubc84\ub85c \uc804\uc1a1\ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub8e8\ud2b8 \uc694\uccad\uc5d0 \ub300\ud574\uc11c\ub294 \uc554\ubb35\uc801\uc73c\ub85c index.html\uc744 \uc751\ub2f5\ud55c\ub2e4. (",(0,a.kt)("a",{parentName:"li",href:"https://herekim.github.io/index.html"},"https://herekim.github.io/index.html"),")"),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \uc815\uc801 \ud30c\uc77c\uc744 \uc6d0\ud560 \ub54c\uc5d0\ub294 \uc694\uccad\ud560 \uc815\uc801 \ud30c\uc77c \uacbd\ub85c\uc640 \ud30c\uc77c \uc774\ub984\uc744 URL\uc758 \ud638\uc2a4\ud2b8 \ub4a4\uc758 \ud328\uc2a4\uc5d0 \uae30\uc220\ud558\uc5ec \uc11c\ubc84\uc5d0 \uc694\uccad\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800 \uc8fc\uc18c\ucc3d\uc5d0\uc11c\ub9cc \uc815\uc801 \ud30c\uc77c\uc744 \uc694\uccad\ud560 \uc218 \uc788\ub294 \uac83\uc740 \uc544\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud1b5\ud574 \ub3d9\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc694\uccad\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"index.html\uc744 \ud30c\uc2f1\ud558\ub294 \ub3c4\uc911\uc5d0 \uc678\ubd80 \ub9ac\uc18c\uc2a4(css, img, js)\ub4f1\uc744 \ub9cc\ub098\uba74 \ud30c\uc2f1\uc744 \uc911\ub2e8\ud558\uace0 \ud574\ub2f9 \ub9ac\uc18c\uc2a4 \ud30c\uc77c\uc744 \uc11c\ubc84\ub85c \uc694\uccad\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"382-http-11\uacfc-http-20"},"38.2 HTTP 1.1\uacfc HTTP 2.0"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"HTTP\ub294 \uc6f9\uc5d0\uc11c \ube0c\ub77c\uc6b0\uc800\uc640 \uc11c\ubc84\uac00 \ud1b5\uc2e0\ud558\uae30 \uc704\ud55c \ud504\ub85c\ud1a0\ucf5c(\uaddc\uc57d)\uc774\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP 1.1 \uc740 \uae30\ubcf8\uc801\uc73c\ub85c \ucee4\ub125\uc158 \ub2f9 \ud558\ub098\uc758 \uc694\uccad\uacfc \ud558\ub098\uc758 \uc751\ub2f5\ub9cc\uc744 \ucc98\ub9ac\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"HTTP 2.0 \uc740 \ucee4\ub125\uc158 \ub2f9 \uc5ec\ub7ec \uac1c\uc758 \uc694\uccad\uacfc \uc751\ub2f5\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"HTTP 2.0 \uc774 HTTP 1.1 \ubcf4\ub2e4 \uc57d 50% \ube60\ub974\ub2e4.")),(0,a.kt)("h2",{id:"383-html-\ud30c\uc2f1\uacfc-dom-\uc0dd\uc131"},"38.3 HTML \ud30c\uc2f1\uacfc DOM \uc0dd\uc131"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc11c\ubc84\ub85c\ubd80\ud130 \uc751\ub2f5\ubc1b\uc740 HTML \ud30c\uc77c\uc740 \ub2e8\uc21c \ubb38\uc790\uc5f4\uc774\ub2e4. \uc774\ub97c \ube0c\ub77c\uc6b0\uc800\uac00 \ud574\uc11d\ud558\uae30 \uc704\ud574\uc11c\ub294 \ube0c\ub77c\uc6b0\uc800\uac00 \uc774\ud574\ud560 \uc218 \uc788\ub294 \uc790\ub8cc\uad6c\uc870\uc778 DOM\uc73c\ub85c \ubc14\uafd4\uc8fc\uc5b4\uc57c \ud55c\ub2e4. \uc989, DOM\uc740 HTML \ubb38\uc11c\ub97c \ud30c\uc2f1\ud55c \uacb0\uacfc\ubb3c\uc774\ub2e4."),(0,a.kt)("h2",{id:"384-css-\ud30c\uc2f1\uacfc-cssom-\uc0dd\uc131"},"38.4 CSS \ud30c\uc2f1\uacfc CSSOM \uc0dd\uc131"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc740 HTML\uc744 \uc704\uc5d0\uc11c \uc544\ub798\ub85c \uc21c\ucc28\uc801\uc73c\ub85c \ud574\uc11d\ud55c\ub2e4. link \ud0dc\uadf8\ub97c \ub9cc\ub098\uba74 DOM \uc0dd\uc131\uc744 \uc77c\uc2dc \uc911\ub2e8\ud558\uace0 link \ud0dc\uadf8\uc758 href \uc5b4\ud29c\ub9ac\ubdf0\ud2b8\uc5d0 \uc9c0\uc815\ub41c CSS \ud30c\uc77c\uc744 \uc11c\ubc84\uc5d0 \uc694\uccad\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84\ub85c\ubd80\ud130 CSS \ud30c\uc77c\uc774 \uc751\ub2f5\ub418\uba74 \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc740 \ubc14\uc774\ud2b8 -> \ubb38\uc790 -> \ud1a0\ud070 -> \ub178\ub4dc -> CSSOM\uc744 \uac70\uccd0 CSS\ub97c \ud30c\uc2f1\ud558\uc5ec CSSOM\uc744 \uc0dd\uc131\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"385-\ub80c\ub354-\ud2b8\ub9ac-\uc0dd\uc131"},"38.5 \ub80c\ub354 \ud2b8\ub9ac \uc0dd\uc131"),(0,a.kt)("hr",null),(0,a.kt)("p",null,'\ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc740 \uc11c\ubc84\ub85c\ubd80\ud130 \uc751\ub2f5\ub41c HTML\uacfc CSS\ub97c \ud30c\uc2f1\ud558\uc5ec \uac01\uac01 DOM\uacfc CSSOM\uc744 \uc0dd\uc131\ud55c\ub2e4. \uadf8\ub9ac\uace0 DOM\uacfc CSSOM\uc740 \ub80c\ub354\ub9c1\uc744 \uc704\ud574 \ub80c\ub354 \ud2b8\ub9ac\ub85c "\uacb0\ud569"\ub41c\ub2e4.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub80c\ub354 \ud2b8\ub9ac\ub294 \ub80c\ub354\ub9c1\uc744 \uc704\ud55c \ud2b8\ub9ac \uad6c\uc870\uc758 \uc790\ub8cc\uad6c\uc870\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c CSS\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\ub294 \ub178\ub4dc\ub4e4\uc740 \ube44\ud3ec\ud568\ub41c\ub2e4.")),(0,a.kt)("p",null,"\uc544\ub798 \uacfc\uc815\uc740 DOM\uacfc CSSOM\uc774 \uacb0\ud569\ub418\uc5b4 \ub80c\ub354 \ud2b8\ub9ac\ub97c \ud615\uc131\ud558\uace0, HTML \uc694\uc18c\uc758 \ub808\uc774\uc544\uc6c3\uacfc \ud398\uc778\ud305 \ucc98\ub9ac\ub97c \ud558\ub294 \uacfc\uc815\uc744 \ubcf4\uc5ec\uc8fc\ub294 \ub2e4\uc774\uc5b4\uadf8\ub7a8\uc774\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"ex_screenshot",src:l(2647).Z,width:"3154",height:"1262"})),(0,a.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0 \ub808\uc774\uc544\uc6c3 \uacc4\uc0b0\uacfc \ud398\uc778\ud305\uc774 \uc7ac\ucc28 \uc2e4\ud589\ub41c\ub2e4. \ub530\ub77c\uc11c \ud574\ub2f9 \uacfc\uc815\uc740 \uacbd\uc6b0\uc5d0 \ub530\ub77c \uc131\ub2a5\uc5d0 \uc545\uc601\ud5a5\uc744 \ubbf8\uce5c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \uc758\ud55c \ub178\ub4dc \ucd94\uac00 \ub610\ub294 \uc0ad\uc81c"),(0,a.kt)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800 \ucc3d\uc758 \ub9ac\uc0ac\uc774\uc9d5\uc5d0 \uc758\ud55c \ubdf0\ud3ec\ud2b8 \ud06c\uae30 \ubcc0\uacbd"),(0,a.kt)("li",{parentName:"ul"},"HTML \uc694\uc18c\uc758 \ub808\uc774\uc544\uc6c3(\uc704\uce58, \ud06c\uae30)\uc5d0 \ubcc0\uacbd\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\ub294 width/height, margin, padding, border, display, position \ub4f1\uc758 \uc2a4\ud0c0\uc77c \ubcc0\uacbd")),(0,a.kt)("p",null,"\ucd94\uac00 \uc790\ub8cc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u1107\u1173\u1105\u1161\u110b\u116e\u110c\u1165 \ub80c\ub354\ub9c1 ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=sJ14cWjrNis"},"https://www.youtube.com/watch?v=sJ14cWjrNis"))),(0,a.kt)("h2",{id:"386-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758-\ud30c\uc2f1\uacfc-\uc2e4\ud589"},"38.6 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud30c\uc2f1\uacfc \uc2e4\ud589"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"CSS \ud30c\uc2f1\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc740 HTML\uc744 \ud55c \uc904\uc529 \ud30c\uc2f1\ud558\uba70 DOM\uc744 \uc0dd\uc131\ud558\ub2e4\uac00 script \ud0dc\uadf8\ub97c \ub9cc\ub098\uba74 DOM \uc0dd\uc131\uc744 \uc77c\uc2dc\uc911\ub2e8\ud55c\ub2e4.\n\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc2f1\uc740 \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc774 \uc544\ub2c8\ub77c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc774 \ucc98\ub9ac\ud55c\ub2e4."),(0,a.kt)("h3",{id:"\uc21c\uc11c"},"\uc21c\uc11c"),(0,a.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc18c\uc2a4\ucf54\ub4dc --\ud1a0\ud06c\ub098\uc774\uc800--\x3e \ud1a0\ud070 --\ud30c\uc11c--\x3e AST --\ubc14\uc774\ud2b8\ucf54\ub4dc \uc0dd\uc131\uae30--\x3e \ubc14\uc774\ud2b8 \ucf54\ub4dc --\uc778\ud130\ud504\ub9ac\ud130--\x3e \uc2e4\ud5f9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud1a0\ud06c\ub098\uc774\uc9d5\n\ub2e8\uc21c \ubb38\uc790\uc5f4\uc778 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \uc5b4\ud718 \ubd84\uc11d\ud558\uc5ec \ubb38\ubc95\uc801 \uc758\ubbf8\ub97c \uac16\ub294 \ucf54\ub4dc\uc758 \ucd5c\uc18c \ub2e8\uc704\uc778 \ud1a0\ud070\ub4e4\ub85c \ubd84\ud574\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud30c\uc2f1\n\ud1a0\ud070\ub4e4\uc758 \uc9d1\ud569\uc744 \uad6c\ubb38 \ubd84\uc11d\ud558\uc5ec AST\ub97c \uc0dd\uc131\ud55c\ub2e4. AST\ub294 \ud1a0\ud070\uc5d0 \ubb38\ubc95\uc801 \uc758\ubbf8\uc640 \uad6c\uc870\ub97c \ubc18\uc601\ud55c \ud2b8\ub9ac \uad6c\uc870\uc758 \uc790\ub8cc\uad6c\uc870\uc778\ub2e4.\nAST\ub97c \uc0ac\uc6a9\ud558\uba74 TypeScript, Babel, Prettier \uac19\uc740 \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub7ec\ub97c \uad6c\ud604\ud560 \uc218\ub3c4 \uc788\ub2e4.\n\ucc38\uace0 - ",(0,a.kt)("a",{parentName:"p",href:"https://astexplorer.net"},"https://astexplorer.net"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ubc14\uc774\ud2b8\ucf54\ub4dc\uc758 \uc0dd\uc131\uacfc \uc2e4\ud589\n\ud30c\uc2f1\uc758 \uacb0\uacfc\ubb3c\ub85c \uc0dd\uc131\ub41c AST\ub294 \uc778\ud130\ud504\ub9ac\ud130\uac00 \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \uc911\uac04 \ucf54\ub4dc\uc778 \ubc14\uc774\ud2b8\ucf54\ub4dc\ub85c \ubcc0\ud658\ub418\uace0 \uc778\ud130\ud504\ub9ac\ud130\uc5d0 \uc758\ud574 \uc2e4\ud589\ub41c\ub2e4."))),(0,a.kt)("h2",{id:"387-\ub9ac\ud50c\ub85c\uc6b0\uc640-\ub9ac\ud398\uc778\ud2b8"},"38.7 \ub9ac\ud50c\ub85c\uc6b0\uc640 \ub9ac\ud398\uc778\ud2b8"),(0,a.kt)("p",null,"\ub9ac\ud50c\ub85c\uc6b0\uc640 \ub9ac\ud398\uc778\ud305\uc744 \ubc18\ub4dc\uc2dc \uc21c\ucc28\uc801\uc73c\ub85c \uc9c4\ud589\ub418\ub294 \uac83\uc740 \uc544\ub2c8\ub2e4. \ub808\uc774\uc544\uc6c3\uc5d0 \uc601\ud5a5\uc774 \uc5c6\ub294 \ubcc0\uacbd\uc758 \uacbd\uc6b0 \ub9ac\ud398\uc778\ud2b8\ub9cc \uc2e4\ud589\ub41c\ub2e4."),(0,a.kt)("h3",{id:"\ub9ac\ud50c\ub85c\uc6b0"},"\ub9ac\ud50c\ub85c\uc6b0"),(0,a.kt)("p",null,"\ub808\uc774\uc544\uc6c3 \uacc4\uc0b0\uc744 \ub2e4\uc2dc \ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,a.kt)("h3",{id:"\ub9ac\ud398\uc778\ud2b8"},"\ub9ac\ud398\uc778\ud2b8"),(0,a.kt)("p",null,"\uc7ac\uacb0\ud569\ub41c \ub80c\ub354 \ud2b8\ub9ac\ub97c \uae30\ubc18\uc73c\ub85c \ub2e4\uc2dc \ud398\uc778\ud2b8\ub97c \ud558\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("h2",{id:"388-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\ud30c\uc2f1\uc5d0-\uc758\ud55c-html-\ud30c\uc2f1-\uc911\ub2e8"},"38.8 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc2f1\uc5d0 \uc758\ud55c HTML \ud30c\uc2f1 \uc911\ub2e8"),(0,a.kt)("h2",{id:"389-script-\ud0dc\uadf8\uc758-asyncdefer-\uc5b4\ud2b8\ub9ac\ubdf0\ud2b8"},"38.9 script \ud0dc\uadf8\uc758 async/defer \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8"),(0,a.kt)("p",null,"HTML \ud30c\uc2f1 \uc911\uc5d0 script \ud0dc\uadf8\ub97c \ub9cc\ub098\uba74 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc5d0\uac8c \uad8c\ud55c\uc774 \ub118\uc5b4\uac00\uc11c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc2f1\uc744 \uba3c\uc800 \uc9c4\ud589\ud55c\ub2e4. \uc774 \uacbd\uc6b0 \uba87\uac00\uc9c0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4. \uc608\ub97c \ub4e4\uc5b4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DOM \uc0dd\uc131\uc758 \uc9c0\uc5f0"),(0,a.kt)("li",{parentName:"ul"},"script \ud0dc\uadf8 \ub0b4\uc5d0\uc11c \uc544\uc9c1 \ud30c\uc2f1\uc774 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc740 HTML \ud0dc\uadf8 \uc0ac\uc6a9\n\uc774 \uc788\uc744 \uc218 \uc788\ub2e4.")),(0,a.kt)("p",null,"\ub54c\ubb38\uc5d0 body \uc694\uc18c\uc758 \uac00\uc7a5 \uc544\ub798\uc5d0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc704\uce58\uc2dc\ud0a4\ub294 \uac83\uc73c\ub85c \uc77c\ubd80 \ud574\uacb0\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("p",null,"\ub354 \ud655\uc2e4\ud55c \ud574\uacb0 \ubc29\ubc95\uc740 async, defer \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\ub2e4. \ud574\ub2f9 \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8\ub294 src\ub97c \ud1b5\ud574 \uc678\ubd80 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uc744 \ub85c\ub4dc\ud558\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"ex_screenshot",src:l(8170).Z,width:"1017",height:"568"})),(0,a.kt)("h3",{id:"async"},"async"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTML \ud30c\uc2f1\uacfc \uc678\ubd80 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uc758 \ub85c\ub4dc\uac00 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc9c4\ud589\ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc2f1\uc774 \uc911\ub2e8\ub418\uba74 \ubc14\ub85c \uc2e4\ud589\uc774\ub418\uba70, \uc774\ub54c HTML \ud30c\uc2f1\uc774 \uc911\ub2e8\ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub54c\ubb38\uc5d0 \uc5ec\ub7ec \uac1c\uc758 script \ud0dc\uadf8\uc5d0 async \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8\ub97c \uc9c0\uc815\ud558\uba74 \uc21c\uc11c\uac00 \ubcf4\uc7a5\ub418\uc9c0 \uc54a\ub294\ub2e4.")),(0,a.kt)("h3",{id:"defer"},"defer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTML \ud30c\uc2f1\uacfc \uc678\ubd80 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uc758 \ub85c\ub4dc\uac00 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc9c4\ud589\ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589\uc740 HTML \ud30c\uc2f1\uc774 \uc644\ub8cc\ub41c \ud6c4\uc5d0 \uc2e4\ud589\ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"DOM \uc0dd\uc131\uc774 \uc644\ub8cc\ub41c \uc774\ud6c4 \uc2e4\ud589\ub418\uc5b4\uc57c \ud560 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \uc720\uc6a9\ud558\ub2e4.")))}d.isMDXComponent=!0},9396:function(e,t,l){t.Z=l.p+"assets/images/client-server-da9aaffbeaec165692463c8b7510e51d.png"},2647:function(e,t,l){t.Z=l.p+"assets/images/render-tree-c8dc71cc4a7093f42bf2e659d3902380.png"},8170:function(e,t,l){t.Z=l.p+"assets/images/script-load-50398d3e288e5280f1704bc47a32f998.png"}}]);