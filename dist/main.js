webpackJsonp([1],{0:function(e,t){e.exports=React},3:function(e,t){e.exports=ReactDOM},80:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(178),c=n(92),i=o.a.createClass({displayName:"_default",render:function(){return o.a.createElement("div",null,o.a.createElement(a.a,null,o.a.createElement(a.b,{path:"/",component:c.a})))}});t.a=i;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(i,"default","D:/Test/react-demo/src/components/Router.jsx")}()},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),a=n(3),c=n.n(a),i=n(56),u=(n.n(i),n(80)),l=function(e,t){c.a.render(o.a.createElement(i.AppContainer,null,o.a.createElement(e,null)),document.getElementById(t))};l(u.a,"App");!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(l,"render","D:/Test/react-demo/src/app/app.js")}()},92:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(33),i=(n.n(c),n(25)),u=n.n(i),l=n(60),s=(n.n(l),n(59)),f=n.n(s),_=n(0),p=n.n(_),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={text:"Hello Word111"},n}return a(t,e),d(t,[{key:"info",value:function(){f.a.info({title:"Message",content:p.a.createElement("div",null,p.a.createElement("p",null,this.state.text)),onOk:function(){}})}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(u.a,{type:"primary",onClick:this.info.bind(this)},"Click1 me"))}}]),t}(p.a.Component),E=m;t.a=E;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(m,"HelloWord","D:/Test/react-demo/src/components/HelloWord.jsx"),__REACT_HOT_LOADER__.register(E,"default","D:/Test/react-demo/src/components/HelloWord.jsx"))}()}},[90]);