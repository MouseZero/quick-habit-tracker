(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),c=a.n(o),r=(a(16),a(1)),l=a(4),s=a(5),u=a(8),d=a(6),m=a(9),b=(a(17),a(7)),h=a.n(b),v="habits";function f(){return JSON.parse(localStorage.getItem(v))}function w(e){localStorage.setItem(v,JSON.stringify(e))}var g=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(r.a)({},t,n))},a.createHabit=function(e){return function(){var t=f();t[h()()]={name:e,did:0,didNot:0,alt:0},w(t),a.loadSavedData()}},a.loadSavedData=function(){a.setState({habits:f()})},a.updateCount=function(e){var t=e.target.name.split("--");!function(e,t){var a=f();w(Object.assign(a,Object(r.a)({},e,Object.assign(a[e],Object(r.a)({},t,a[e][t]+1)))))}(t[0],t[1]),a.loadSavedData()};var n=f();n||w({});var i=n||{};return a.state={newHabitName:"",habits:i},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.habits;return i.a.createElement("div",{className:"App"},Object.keys(t).map(function(a){return i.a.createElement("div",{key:a},i.a.createElement("h3",null,t[a].name),i.a.createElement("div",{className:"habit"},i.a.createElement("div",null,t[a].did,i.a.createElement("button",{name:a+"--did",onClick:e.updateCount},"Did")),i.a.createElement("div",null,t[a].didNot,i.a.createElement("button",{name:a+"--didNot",onClick:e.updateCount},"Did Not"))))}),i.a.createElement("div",{className:"new-habit"},i.a.createElement("input",{name:"newHabitName",value:this.state.newHabitName,onChange:this.handleChange}),i.a.createElement("button",{onClick:this.createHabit(this.state.newHabitName)},"New Habit")))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.3ec40b2e.chunk.js.map