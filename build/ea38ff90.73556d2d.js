(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(142)),a={},l={unversionedId:"ruby/length_size_count",id:"ruby/length_size_count",isDocsHomePage:!1,title:"length_size_count",description:"Length vs Size vs Count:",source:"@site/docs/ruby/length_size_count.md",slug:"/ruby/length_size_count",permalink:"/docs/ruby/length_size_count",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ruby/length_size_count.md",version:"current"},i=[{value:".length",id:"length",children:[]},{value:".size",id:"size",children:[]},{value:"size vs length vs length() vs count",id:"size-vs-length-vs-length-vs-count",children:[]}],u={toc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"length-vs-size-vs-count"},"Length vs Size vs Count:"),Object(c.b)("p",null,"Great Article:\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://batsov.com/articles/2014/02/17/the-elements-of-style-in-ruby-number-13-length-vs-size-vs-count/"}),"https://batsov.com/articles/2014/02/17/the-elements-of-style-in-ruby-number-13-length-vs-size-vs-count/")),Object(c.b)("h3",{id:"length"},".length"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Calculate length")),Object(c.b)("h3",{id:"size"},".size"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Alias of length")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Rule of thumb, don't use ",Object(c.b)("inlineCode",{parentName:"li"},".count")," to get size/length when possible."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},".count")," usually meant to be used with a block or an argument and will return the number of matches in an Enumerable:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"arr = [1, 1, 2, 3, 5, 6, 8]\n\narr.count(&:even?) # => 3\narr.count(1) # => 2\n")),Object(c.b)("h3",{id:"size-vs-length-vs-length-vs-count"},"size vs length vs length() vs count"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"[38] pry(main)> temp = [1,2,3]\n=> [1, 2, 3]\n[39] pry(main)> temp.size\n=> 3\n[40] pry(main)> temp.length\n=> 3\n[41] pry(main)> temp.length()\n=> 3\n[42] pry(main)> temp.count\n=> 3\n")))}s.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,h=b["".concat(a,".").concat(m)]||b[m]||p[m]||c;return n?o.a.createElement(h,l(l({ref:t},u),{},{components:n})):o.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);