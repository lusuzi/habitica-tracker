(this["webpackJsonphabitica-summary"]=this["webpackJsonphabitica-summary"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(15),a(1)),s=a(3),i=a.n(s),u=(a(16),a(5)),m=a.n(u),d=a(2),f=a.n(d);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=r.a.createElement("path",{fillRule:"evenodd",d:"M10.667 10.667L16 8l-5.333-2.667L8 0 5.333 5.333 0 8l5.333 2.667L8 16z"}),b=function(e){var t=e.svgRef,a=e.title,n=E(e,["svgRef","title"]);return r.a.createElement("svg",p({width:16,height:16,viewBox:"0 0 16 16",ref:t},n),a?r.a.createElement("title",null,a):null,h)},v=r.a.forwardRef((function(e,t){return r.a.createElement(b,p({svgRef:t},e))}));a.p,a(19);function y(e){var t,a=Object(n.useContext)(I),c=["task-icon-container","center-wrapper",N(e.task)].join(" "),o=Array((t=e.task.priority,Math.ceil(t/.5))).fill(r.a.createElement(v,{fill:"white","aria-hidden":!0}));return a.showTaskIcons?r.a.createElement("div",{className:c},o):null}var w=[-16,-9,-1,1,6,12],O=["worst","worse","bad","neutral","good","better"];function N(e){for(var t=0;t<w.length;t++)if(e.value<w[t])return O[t];return"best"}var S=a(6);function j(e){var t=Object(n.useContext)(I);return r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("div",{className:"section-header"},r.a.createElement("div",{className:"section-header-title"},r.a.createElement("h2",null,e.title),r.a.createElement("div",{role:"button",className:"show-no-history clickable",title:"Show/Hide dailies with no data",onClick:function(){return e.setShowNoHistory(!e.showNoHistory)}},e.showNoHistory?r.a.createElement(S.a,{"aria-hidden":"true"}):r.a.createElement(S.b,{"aria-hidden":"true"}))))),t.dates.map((function(e){return r.a.createElement("th",null,r.a.createElement("div",{className:"date date-heading"},r.a.createElement("span",null,e.format("ddd")),r.a.createElement("span",null,e.format("DD"))))})))}function g(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1];return r.a.createElement("section",{className:"dailys"},r.a.createElement("table",null,r.a.createElement(j,{title:"Dailies",setShowNoHistory:o,showNoHistory:c}),e.data.map((function(e){return r.a.createElement(k,{showNoHistory:c,daily:e})}))),r.a.createElement("div",{className:"link show-no-history",onClick:function(){return o(!c)}}))}function k(e){var t=Object(n.useContext)(I),a=new Map,c=e.daily,o=c.text,l=c.history;i.a.debug(o);for(var s=0;s<l.length;s++){var u=void 0;u=0===s?l[s].value:l[s].value-l[s-1].value;var m=f()(l[s].date);if(i.a.debug(m.format("YYYY-MM-DD HH:mm:ss")+": "+l[s].value),0!==u){t.cronIntervals.search(m.unix(),m.unix()).length>0&&(a.has(m.format(P))?i.a.debug("Multiple daily completions on for ".concat(o," on ").concat(m)):m=m.subtract(1,"day"));var d=m.format(P);a.set(d,u)}}var p=t.dates.map((function(e){return e.format(P)})).map((function(e){return a.get(e)}));return 0!==p.filter((function(e){return void 0!==e})).length||e.showNoHistory?r.a.createElement("tr",null,r.a.createElement("td",{className:"task-name-row"},r.a.createElement(y,{task:e.daily}),r.a.createElement("span",{className:"task-name"},o)),p.map((function(e){return r.a.createElement(T,{delta:e})}))):null}function T(e){var t,a=["daily-cell"];return e.delta&&0!==e.delta?e.delta>0?(a.push("success"),t="\u2713"):(a.push("fail"),t="\u2716"):(a.push("pass"),t="\xa0"),r.a.createElement("td",{className:a.join(" ")},t&&r.a.createElement("div",{className:"center-wrapper"},r.a.createElement("span",{className:"symbol"},t)))}var C=a(9);function D(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1];return r.a.createElement("section",{className:"habits"},r.a.createElement("table",null,r.a.createElement(j,{title:"Habits",setShowNoHistory:o,showNoHistory:c}),e.data.map((function(e){return r.a.createElement(R,{showNoHistory:c,habit:e})}))))}function R(e){var t=Object(n.useContext)(I),a=new Map,c=e.habit,o=c.text,l=c.history;i.a.debug(o);var s,u=Object(C.a)(l);try{for(u.s();!(s=u.n()).done;){var m=s.value,d=f()(m.date).format(P);i.a.debug(JSON.stringify(m)),void 0!==m.scoredUp&&void 0!==m.scoredDown&&a.set(d,[m.scoredUp,m.scoredDown])}}catch(E){u.e(E)}finally{u.f()}var p=t.dates.map((function(e){return e.format(P)})).map((function(e){return a.get(e)}));return 0!==p.filter((function(e){return void 0!==e})).length||e.showNoHistory?r.a.createElement("tr",null,r.a.createElement("td",{className:"task-name-row"},r.a.createElement(y,{task:e.habit}),r.a.createElement("span",{className:"task-name"},o)),p.map((function(e){return e?r.a.createElement(M,{up:e[0],down:e[1]}):r.a.createElement("td",{className:"habit-cell"},"\xa0")}))):null}function M(e){return r.a.createElement("td",{className:"habit-cell"},r.a.createElement("div",{className:"habit-score-container"},e.up>0&&r.a.createElement("div",{className:"success center-wrapper"},r.a.createElement("span",null,"+",e.up)),e.down>0&&r.a.createElement("div",{className:"fail center-wrapper"},r.a.createElement("span",null,"-",e.down))))}a(20);function H(e){var t=Object(n.useContext)(I).dates[0],a=e.data.filter((function(e){return f()(e.dateCompleted).isAfter(t)}));return r.a.createElement("section",{className:"todos"},r.a.createElement("h2",null,"Completed Todos"),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement(A,{todo:e})}))))}function A(e){var t=f()(e.todo.dateCompleted).format("MMM D");return r.a.createElement("li",{className:"todo-row"},r.a.createElement(y,{task:e.todo}),r.a.createElement("span",{className:"todo-date date"},t),r.a.createElement("div",{className:"todo-content"},e.todo.text))}var I=r.a.createContext({showTaskIcons:!0,dates:Array(),cronIntervals:new m.a});function x(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!0),i=Object(l.a)(s,2),u=i[0],d=i[1],p=Object(n.useState)(!0),E=Object(l.a)(p,2),h=E[0],b=E[1],v=Object(n.useState)(7),y=Object(l.a)(v,2),w=y[0],O=y[1],N=Object(n.useState)(!0),S=Object(l.a)(N,2),j=S[0],k=S[1],T=Object(n.useState)([]),C=Object(l.a)(T,2),R=C[0],M=C[1],A=Object(n.useState)([]),x=Object(l.a)(A,2),P=x[0],F=x[1],U=Object(n.useState)([]),L=Object(l.a)(U,2),G=L[0],B=L[1],J=Object(n.useState)([]),K=Object(l.a)(J,2),W=K[0],z=K[1],$=e.userId,q=e.userApiKey,Q=function(e){return fetch(e,{method:"GET",headers:{"Content-Type":"application/json","x-api-user":$,"x-api-key":q,"x-client":"0d9428fd-d6fa-45f3-a4db-f130e3ef10ea-HabiticaSummaryTool"}})},V=function(e){if(!e.success)throw new Error(e.message);return e},X=e.setError;if(Object(n.useEffect)((function(){Q("https://habitica.com/api/v3/user").then((function(e){return e.json()})).then(V).then((function(e){M(e.data.history.exp.map((function(e){var t=f()(e.date);return[t.unix()-60,t.unix()+60]}))),o(!1)}),(function(e){X(e)}))}),[]),Object(n.useEffect)((function(){Q("https://habitica.com/api/v3/tasks/user").then((function(e){return e.json()})).then(V).then((function(e){F(e.data.filter((function(e){return"habit"===e.type}))),B(e.data.filter((function(e){return"daily"===e.type}))),d(!1)}),(function(e){X(e)}))}),[]),Object(n.useEffect)((function(){Q("https://habitica.com/api/v3/tasks/user?type=completedTodos").then((function(e){return e.json()})).then(V).then((function(e){z(e.data.filter((function(e){return"todo"===e.type}))),b(!1)}),(function(e){X(e)}))}),[]),c||u||h)return r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"Loading..."));e.setAppState(_.DATA_FETCH_SUCCESS);var Z=new m.a;R.forEach((function(e){return Z.insert(e[0],e[1],!0)}));var ee,te={showTaskIcons:j,dates:(ee=w,Array(ee).fill(0).map((function(e,t){return t+1})).reverse().map((function(e){return f()().subtract(e,"days").startOf("day")}))),cronIntervals:Z};return r.a.createElement("div",{className:"App"},r.a.createElement(I.Provider,{value:te},r.a.createElement(Y,{numDaysToShow:w,setNumDaysToShow:O,toggleTaskIcons:function(){return k(!j)}}),r.a.createElement(D,{data:P}),r.a.createElement(g,{data:G}),r.a.createElement(H,{data:W})))}function Y(e){var t=Object(n.useContext)(I),a=function(e){var t=e[0],a=e[e.length-1];if(t.month()===a.month())return a.format("MMMM YYYY");var n=t.year()===a.year()?"MMM":"MMM YYYY";return[t.format(n),a.format("MMM YYYY")].join("\u2013")}(t.dates);return r.a.createElement("div",{className:"app-controls"},r.a.createElement("div",null,r.a.createElement("span",{role:"button",className:"link",onClick:function(){return e.setNumDaysToShow(e.numDaysToShow+7)}},"+1 week"),e.numDaysToShow>7?r.a.createElement("span",null,r.a.createElement("span",null," / "),r.a.createElement("span",{role:"button",className:"link",onClick:function(){return e.setNumDaysToShow(e.numDaysToShow-7)}},"-1 week")):null),r.a.createElement("div",{className:"date-header"},a),r.a.createElement("span",{role:"button",className:"link",onClick:e.toggleTaskIcons,title:"Show/Hide task icons"},t.showTaskIcons?"Hide":"Show"," Task Icons"))}var _,P="YYYYMMDD";!function(e){e[e.PROMPT_FOR_USER_CREDS=0]="PROMPT_FOR_USER_CREDS",e[e.FETCHING_DATA=1]="FETCHING_DATA",e[e.DATA_FETCH_SUCCESS=2]="DATA_FETCH_SUCCESS",e[e.ERROR=3]="ERROR"}(_||(_={}));var F=function(){i.a.setLevel("debug");var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(),f=Object(l.a)(d,2),p=f[0],E=f[1],h=Object(n.useState)(_.PROMPT_FOR_USER_CREDS),b=Object(l.a)(h,2),v=b[0],y=b[1];return v===_.PROMPT_FOR_USER_CREDS||v===_.ERROR?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Habitica Summary Tool"),p&&r.a.createElement("div",{className:"error"},"Error: ",p.message),r.a.createElement("p",null,"This tool displays a weekly summary of your Habits, Dailies and Todos in Habitica."),r.a.createElement("p",null,"Your User ID and API key can be found on the"," ",r.a.createElement("a",{href:"https://habitica.com/user/settings/api",target:"_blank",rel:"noopener noreferrer"},"Settings > API")," ","page in Habitica."),r.a.createElement("form",{className:"user-api-form"},r.a.createElement("div",{className:"label-container"},r.a.createElement("div",{className:"label"},"User ID"),r.a.createElement("input",{type:"text",className:"user-id",value:a,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:"label-container"},r.a.createElement("span",{className:"label"},"API Key"),r.a.createElement("input",{type:"password",className:"api-key",value:u,onChange:function(e){m(e.target.value)},minLength:36})),r.a.createElement("div",{className:"submit-wrapper"},r.a.createElement("input",{type:"submit",value:"Fetch My Data",onClick:function(e){e.preventDefault(),y(_.FETCHING_DATA)}}))),r.a.createElement("h2",null,"Note"),r.a.createElement("ul",null,r.a.createElement("li",null,"Your user ID and API key will be sent to the Habitica servers and nowhere else."),r.a.createElement("li",null,"This app does not change your Habitica account data. It only fetches and displays data."))):r.a.createElement(x,{userId:a,userApiKey:u,setError:function(e){E(e),y(_.ERROR)},setAppState:y})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.98612450.chunk.js.map