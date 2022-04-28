"use strict";(self.webpackChunkdeep_dive=self.webpackChunkdeep_dive||[]).push([[7280],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),k=c(n),m=l,g=k["".concat(o,".").concat(m)]||k[m]||s[m]||a;return n?r.createElement(g,p(p({ref:t},i),{},{components:n})):r.createElement(g,p({ref:t},i))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,p[1]=u;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6527:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return i},toc:function(){return s},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),p=["components"],u={sidebar_position:31},o="31\uc7a5 RegExp",c={unversionedId:"week8/chapter31",id:"week8/chapter31",title:"31\uc7a5 RegExp",description:"Regular Expression\uc740 \uc77c\uc815\ud55c \ud328\ud134\uc744 \uac00\uc9c4 \ubb38\uc790\uc5f4\uc758 \uc9d1\ud569\uc744 \ud45c\ud604\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ud615\uc2dd \uc5b8\uc5b4\uc774\ub2e4 (formal language).",source:"@site/docs/week8/chapter31.md",sourceDirName:"week8",slug:"/week8/chapter31",permalink:"/deep-dive/docs/week8/chapter31",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/week8/chapter31.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"tutorialSidebar",previous:{title:"30\uc7a5 Date",permalink:"/deep-dive/docs/week8/chapter30"},next:{title:"32\uc7a5 String",permalink:"/deep-dive/docs/week8/chapter32"}},i={},s=[],k={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"31\uc7a5-regexp"},"31\uc7a5 RegExp"),(0,a.kt)("h1",{id:"1-\uc815\uaddc-\ud45c\ud604\uc2dd\uc774\ub780"},"1. \uc815\uaddc \ud45c\ud604\uc2dd\uc774\ub780?"),(0,a.kt)("p",null,"Regular Expression\uc740 \uc77c\uc815\ud55c \ud328\ud134\uc744 \uac00\uc9c4 \ubb38\uc790\uc5f4\uc758 \uc9d1\ud569\uc744 \ud45c\ud604\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ud615\uc2dd \uc5b8\uc5b4\uc774\ub2e4 (formal language). "),(0,a.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uace0\uc720 \ubb38\ubc95\uc774 \uc544\ub2c8\uba70, \ub300\ubd80\ubd84\uc758 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4, \ucf54\ub4dc \uc5d0\ub514\ud130\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 Perl\uc758 \uc815\uaddc \ud45c\ud604\uc2dd \ubb38\ubc95\uc744 \ub3c4\uc785\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc815\uaddc \ud45c\ud604\uc2dd\uc740 \ubb38\uc790\uc5f4\uc744 \ub300\uc0c1\uc73c\ub85c \ud328\ud134 \ub9e4\uce6d \uae30\ub2a5\uc744 \uc81c\uacf5: \ud2b9\uc815 \ud328\ud134\uacfc \uc77c\uce58\ud558\ub294 \ubb38\uc790\uc5f4\uc744 \uac80\uc0c9\ud558\uac70\ub098 \ucd94\ucd9c, \uce58\ud658\ud560 \uc218 \uc788\ub294 \uae30\ub2a5"),(0,a.kt)("p",null,"\uc608) \uc785\ub825\ubc1b\uc740 \ud734\ub300\ud3f0 \uc804\ud654\ubc88\ud638\uac00 \uc720\ud6a8\ud55c \uc804\ud654\ubc88\ud638\uc778\uc9c0 \uccb4\ud06c\ud558\ub294 \uacbd\uc6b0"),(0,a.kt)("h1",{id:"2-\uc815\uaddc-\ud45c\ud604\uc2dd\uc758-\uc0dd\uc131"},"2. \uc815\uaddc \ud45c\ud604\uc2dd\uc758 \uc0dd\uc131"),(0,a.kt)("p",null,"\uc815\uaddc \ud45c\ud604\uc2dd \ub9ac\ud130\ub7f4: /regexp/i"),(0,a.kt)("p",null,"RegExp \uc0dd\uc131\uc790 \ud568\uc218: new RegExp(/is/i) - \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud574 \ub3d9\uc801\uc73c\ub85c regExp \uac1d\uccb4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h1",{id:"3-regexp-\uba54\uc11c\ub4dc"},"3. RegExp \uba54\uc11c\ub4dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RegExp.prototype.exec")),(0,a.kt)("p",null,"\uc778\uc218\ub85c \uc804\ub2ec\ubc1b\uc740 \ubb38\uc790\uc5f4\uc5d0 \ub300\ud574 \uc815\uaddc \ud45c\ud604\uc2dd\uc758 \ud328\ud134\uc744 \uac80\uc0c9\ud558\uc5ec \ub9e4\uce6d \uacb0\uacfc\ub97c \ubc30\uc5f4\ub85c \ubc18\ud658 (\ubb34\uc870\uac74 \uccab\ubc88\uc9f8 \ub9e4\uce6d \uacb0\uacfc\ub9cc \ubc18\ud658)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RegExp.prototype.test")),(0,a.kt)("p",null,"\ud328\ud134 \ub9e4\uce6d \uacb0\uacfc\ub97c \ubd88\ub9ac\uc5b8\uac12\uc73c\ub85c \ubc18\ud658"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String.prototype.match")),(0,a.kt)("p",null,"\ub300\uc0c1 \ubb38\uc790\uc5f4\uacfc \uc778\uc218\ub85c \uc804\ub2ec\ubc1b\uc740 \uc815\uaddc \ud45c\ud604\uc2dd\uacfc\uc758 \ub9e4\uce6d\uacb0\uacfc\ub97c \ubc30\uc5f4\ub85c \ubc18\ud658 - \ub9e4\uce6d\ub418\ub294 \ubaa8\ub4e0 \uacb0\uacfc"),(0,a.kt)("h1",{id:"4-\ud50c\ub798\uadf8"},"4. \ud50c\ub798\uadf8"),(0,a.kt)("p",null,"\uc815\uaddc \ud45c\ud604\uc2dd\uc758 \uac80\uc0c9 \ubc29\uc2dd\uc744 \uc124\uc815\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"i: ignore case \ub300\uc18c\ubb38\uc790 \uad6c\ubcc4\ud558\uc9c0\uc54a\uace0 \ud328\ud134 \uac80\uc0c9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"g: global \ub300\uc0c1 \ubb38\uc790\uc5f4\ub0b4\uc5d0\uc11c \ud328\ud134\uacfc \uc77c\uce58\ud558\ub294 \ubaa8\ub4e0 \ubb38\uc790\uc5f4\uc744 \uc804\uc5ed \uac80\uc0c9\ud55c\ub2e4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"m: multi line \ubb38\uc790\uc5f4\uc758 \ud589\uc774 \ubc14\ub00c\ub354\ub77c\ub3c4 \ud328\ud134 \uac80\uc0c9 \uacc4\uc18d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud50c\ub798\uadf8 \uc0ac\uc6a9 \uc548\ud560\uc2dc: \ub300\uc18c\ubb38\uc790 \uad6c\ubcc4, \uccab\ubc88\uc9f8 \ub9e4\uce6d \ub300\uc0c1\ub9cc \uac80\uc0c9 \ud6c4 \uc885\ub8cc"))),(0,a.kt)("h1",{id:"5-\ud328\ud134"},"5. \ud328\ud134"),(0,a.kt)("p",null,"\uc815\uaddc \ud45c\ud604\uc2dd\uc740 \ud328\ud134\uacfc \ud50c\ub798\uadf8\ub85c \uad6c\uc131."),(0,a.kt)("p",null,"\ud328\ud134\uc740 / \ub85c \uc5f4\uace0 \ub2eb\uc73c\uba70 \ubb38\uc790\uc5f4 \ub530\uc634\ud45c\ub294 \uc0dd\ub7b5. \ud2b9\ubcc4\ud55c \uc758\ubbf8\ub97c \uac00\uc9c0\ub294 \uba54\ud0c0 \ubb38\uc790 \ub610\ub294 \uae30\ud638\ub85c \ud45c\ud604."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubb38\uc790\uc5f4 \uac80\uc0c9")),(0,a.kt)("p",null,"\ud328\ud134\uc5d0 \ubb38\uc790 \ub610\ub294 \ubb38\uc790\uc5f4\uc744 \uc9c0\uc815\ud558\uba74 \uac80\uc0c9 \ub300\uc0c1 \ubb38\uc790\uc5f4\uc5d0\uc11c \ud328\ud134\uc73c\ub85c \uc9c0\uc815\ud55c \ubb38\uc790 \ub610\ub294 \ubb38\uc790\uc5f4\uc744 \uac80\uc0c9. - \uba54\uc11c\ub4dc \uc0ac\uc6a9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc784\uc758\uc758 \ubb38\uc790\uc5f4 \uac80\uc0c9")),(0,a.kt)("p",null,".\uc740 \uc784\uc758\uc758 \ubb38\uc790 \ud55c\uac1c\ub97c \uc758\ubbf8. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const regExp = /.../g; //\uc784\uc758\uc758 3\uc790\ub9ac \ubb38\uc790\uc5f4\uc744 \ub300\uc18c\ubb38\uc790\ub97c \uad6c\ubcc4\ud558\uc5ec \uc804\uc5ed \uac80\uc0c9\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubc18\ubcf5 \uac80\uc0c9")),(0,a.kt)("p",null,"{m,n}\uc740 \uc55e\uc120 \ud328\ud134\uc774 \ucd5c\uc18c m\ubc88, \ucd5c\ub300 n\ubc88 \ubc18\ubcf5\ub418\ub294 \ubb38\uc790\uc5f4\uc744 \uc758\ubbf8"),(0,a.kt)("p",null,"{n} = {n,n} : n\ubc88 \ubc18\ubcf5"),(0,a.kt)("p",null,"{n,} : \ucd5c\uc18c n\ubc88 \uc774\uc0c1 "),(0,a.kt)("p",null,"+={1,} \ucd5c\uc18c 1\ubc88 \uc774\uc0c1"),(0,a.kt)("p",null,"?: \ucd5c\ub300 \ud55c\ubc88 (0\ubc88 \ud3ec\ud568)\uc774\uc0c1 \ubc18\ubcf5\ub418\ub294 \ubb38\uc790\uc5f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const target = \u2018color colour\u2019;\nconst regExp = /colou?r/g;\ntarget.match(regExp) // [\u2019color\u2019, \u2018colour\u2019]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OR \uac80\uc0c9")),(0,a.kt)("p",null,"|\uc740 or\uc758 \uc758\ubbf8\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const regExp = /A|B/g;\n")),(0,a.kt)("p",null,"[ ]"," \ub0b4\uc758 \ubb38\uc790\ub294 or\ub85c \ub3d9\uc791. \uadf8 \ub4a4\uc5d0 +\ub97c \uc0ac\uc6a9\ud558\uba74 \uc55e\uc120 \ud328\ud134\uc744 \ud55c\ubc88 \uc774\uc0c1 \ubc18\ubcf5."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const regExp = /[AB]+/g;\n")),(0,a.kt)("p",null,"\ubc94\uc704\ub97c \uc9c0\uc815\ud558\ub824\uba74 ","[ ]","\ub0b4\uc5d0 -\ub97c \uc0ac\uc6a9."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const regExp = /[A-Z]+/g;\nconst regExp = /[A-Za-z]+/g;\n")),(0,a.kt)("p",null,"\uc22b\uc790\ud45c\ud604"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const regExp = /[0-9,]+/g;\n")),(0,a.kt)("p",null,"\\d\ub294 \uc22b\uc790\ub97c \uc758\ubbf8, \\D\ub294 \uc22b\uc790\uac00 \uc544\ub2cc \ubb38\uc790\ub97c \uc758\ubbf8\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"ex. let regExp = /[\\d,]+/g; \nregExp = /[\\D,]+/g;\n")),(0,a.kt)("p",null,"\\w\ub294 \uc54c\ud30c\ubcb3, \uc22b\uc790, \uc5b8\ub354\uc2a4\ucf54\uc5b4\ub97c \uc758\ubbf8\ud558\uace0, \\W\ub294 \uadf8 \uc138\uac1c\uac00 \uc544\ub2cc \ubb38\uc790\ub97c \uc758\ubbf8."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NOT \uac80\uc0c9")),(0,a.kt)("p",null,"[ ]"," \ub0b4\uc758 ^\uc740 not\uc758 \uc758\ubbf8\ub97c \uac16\ub294\ub2e4. ",(0,a.kt)("sup",{parentName:"p",id:"fnref-0-9"},(0,a.kt)("a",{parentName:"sup",href:"#fn-0-9",className:"footnote-ref"},"0-9"))," \ub294 \uc22b\uc790\ub97c \uc81c\uc678\ud55c \ubb38\uc790\ub97c \uc758\ubbf8. \uc989 \\D\uc640 \uac19\uc74c "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc2dc\uc791\uc704\uce58\ub85c \uac80\uc0c9")),(0,a.kt)("p",null,"[ ]"," \ubc16\uc758 ^\uc740 \ubb38\uc790\uc5f4\uc758 \uc2dc\uc791\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9c8\uc9c0\ub9c9 \uc704\uce58\ub85c \uac80\uc0c9")),(0,a.kt)("p",null,"$\ub294 \ubb38\uc790\uc5f4\uc758 \ub9c8\uc9c0\ub9c9\uc744 \uc758\ubbf8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const regExp = /^https/;\n//https\ub85c \uc2dc\uc791\ud558\ub294\uc9c0 \uac80\uc0ac\n\nconst regExp = /com$/;\n//com\uc73c\ub85c \ub05d\ub098\ub294\uc9c0 \uac80\uc0ac\n")),(0,a.kt)("p",null,"31.6 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \uc815\uaddc \ud45c\ud604\uc2dd"))}m.isMDXComponent=!0}}]);