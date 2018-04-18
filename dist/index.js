webpackJsonp([0],[function(e,t){e.exports=React},,,,,,function(e,t){e.exports=ReactRedux},function(e,t){e.exports=ReactRouterDOM},function(e,t){e.exports=Redux},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={todoList:[],completedList:[]}},,function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var l=n(0),a=u(l),o=n(12),r=u(o),d=n(13),c=u(d);!function(e){r.default.render(a.default.createElement(e,null),document.getElementById("App"))}(c.default)},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=u(l),o=n(6),r=n(7),d=n(14),c=u(d),f=n(19),i=u(f),s=n(33),p=u(s),m=n(35),_=u(m),v=function(){return a.default.createElement(o.Provider,{store:c.default},a.default.createElement(r.BrowserRouter,null,a.default.createElement("div",null,a.default.createElement("ul",null,a.default.createElement("li",null,a.default.createElement(r.Link,{to:"/"},"Home")),a.default.createElement("li",null,a.default.createElement(r.Link,{to:"/page1"},"Page1")),a.default.createElement("li",null,a.default.createElement(r.Link,{to:"/page2"},"Page2"))),a.default.createElement("hr",null),a.default.createElement(r.Route,{exact:!0,path:"/",component:i.default}),a.default.createElement(r.Route,{path:"/page1",component:p.default}),a.default.createElement(r.Route,{path:"/page2",component:_.default}))))};t.default=v},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),a=n(15),o=u(a),r=n(16),d=u(r),c=n(17),f=u(c);t.default=(0,l.createStore)(f.default,d.default,(0,l.applyMiddleware)(o.default))},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(9),l=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default={todoList:l.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(8),l=n(18),a=function(e){return e&&e.__esModule?e:{default:e}}(l),o=(0,u.combineReducers)({todoList:a.default});t.default=o},function(e,t,n){"use strict";function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},a=n(9),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default,t=arguments[1],n=t.type,a=t.payload,r=e.todoList,d=e.completedList;switch(n){case"TODOLIST_ADD_TODO":var c=a.data,f=a.index;return r.push(c),void 0!==f&&d.splice(f,1),l({},e,{todoList:[].concat(u(r))});case"TODOLIST_REMOVE_TODO":return r.splice(a,1),l({},e,{todoList:[].concat(u(r))});case"TODOLIST_ADD_COMPLETED":var i=a.data,s=a.index;return d.push(i),r.splice(s,1),l({},e,{completedList:[].concat(u(d))});case"TODOLIST_REMOVE_COMPLETED":return d.splice(a,1),l({},e,{completedList:[].concat(u(d))});default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(20),l=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default=l.default},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=u(l),o=n(2),r=u(o),d=n(6),c=n(25),f=u(c),i=n(27),s=u(i),p=n(31),m=function(e){var t=e.handleAddToDo,n=e.handleAddCompleted,u=e.handleRemoveToDo,l=e.handleRemoveCompleted,o=e.todoList,r=e.completedList;return a.default.createElement("div",null,a.default.createElement("h1",null,"ToDoList"),a.default.createElement(f.default,{placeholder:"添加ToDo",onSubmit:t}),a.default.createElement("h1",null,"正在进行"),a.default.createElement("div",null,o.map(function(e,t){return a.default.createElement(s.default,{defaultChecked:!1,key:t,data:e,onDelete:function(){u(t)},onChange:function(){n(e,t)}})})),a.default.createElement("h1",null,"已完成"),a.default.createElement("div",null,r.map(function(e,n){return a.default.createElement(s.default,{defaultChecked:!0,key:n,data:e,onDelete:function(){l(n)},onChange:function(){t(e,n)}})})))};m.propTypes={handleAddToDo:r.default.func,handleAddCompleted:r.default.func,handleRemoveToDo:r.default.func,handleRemoveCompleted:r.default.func,todoList:r.default.array,completedList:r.default.array},m.defaultProps={handleAddToDo:function(){},handleAddCompleted:function(){},handleRemoveToDo:function(){},handleRemoveCompleted:function(){},todoList:[],completedList:[]};var _=function(e){var t=e.todoList;return{completedList:t.completedList,todoList:t.todoList}},v=function(e){return{handleAddToDo:function(t,n){return e((0,p.addToDo)(t,n))},handleRemoveToDo:function(t){return e((0,p.removeToDo)(t))},handleAddCompleted:function(t,n){return e((0,p.addCompleted)(t,n))},handleRemoveCompleted:function(t){return e((0,p.removeCompleted)(t))}}};t.default=(0,d.connect)(_,v)(m)},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(26),l=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default=l.default},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=u(l),o=n(2),r=u(o),d=function(e){var t=e.placeholder,n=e.onSubmit;return a.default.createElement("input",{placeholder:t,onKeyDown:function(e){if("13"==e.keyCode){var t=e.target.value;t.length&&(n(t),e.target.value="")}}})};d.propTypes={placeholder:r.default.string,onSubmit:r.default.func},d.defaultProps={placeholder:"",onSubmit:function(){}},t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(28),l=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default=l.default},function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=u(l),o=n(2),r=u(o);n(29);var d=function(e){var t=e.data,n=e.onDelete,u=e.onChange,l=e.defaultChecked;return a.default.createElement("div",{className:"todolist-item"},a.default.createElement("input",{className:"item-checkbox",type:"checkbox",defaultChecked:l,onChange:u}),a.default.createElement("div",{className:"item-text"},t),a.default.createElement("span",{className:"item-delete",onClick:n},"删除"))};d.propTypes={data:r.default.string,onDelete:r.default.func,onChange:r.default.func,defaultChecked:r.default.bool},d.defaultProps={data:"",onDelete:function(){},onChange:function(){},defaultChecked:!1},t.default=d},function(e,t){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeCompleted=t.removeToDo=t.addCompleted=t.addToDo=void 0;var u=n(32);t.addToDo=function(e,t){return(0,u.creator)({type:"TODOLIST_ADD_TODO",payload:{data:e,index:t}})},t.addCompleted=function(e,t){return(0,u.creator)({type:"TODOLIST_ADD_COMPLETED",payload:{data:e,index:t}})},t.removeToDo=function(e){return(0,u.creator)({type:"TODOLIST_REMOVE_TODO",payload:e})},t.removeCompleted=function(e){return(0,u.creator)({type:"TODOLIST_REMOVE_COMPLETED",payload:e})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.creator=function(e){var t=e.type,n=e.payload;return{type:t,payload:void 0===n?"":n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(34),l=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default=l.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),a=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"Page1"))};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(36),l=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default=l.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),a=n(7),o=function(e){var t=e.match;return l.default.createElement("div",null,l.default.createElement("h2",null,"Page2"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement(a.Link,{to:t.url+"/branch1"},"branch1")),l.default.createElement("li",null,l.default.createElement(a.Link,{to:t.url+"/branch2"},"branch2")),l.default.createElement("li",null,l.default.createElement(a.Link,{to:t.url+"/branch3"},"branch3"))),l.default.createElement(a.Route,{path:t.url+"/:branchId",component:r}),l.default.createElement(a.Route,{exact:!0,path:t.url,render:function(){return l.default.createElement("h3",null,"Default Information")}}))},r=function(e){var t=e.match;return console.log(t),l.default.createElement("div",null,l.default.createElement("h3",null,t.params.branchId))};t.default=o}],[11]);