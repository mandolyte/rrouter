(this.webpackJsonprrouter=this.webpackJsonprrouter||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),l=n.n(r),c=(n(23),n(8)),u=n(5),i=n(15),s=n.n(i);n(27);var m="one,two,three\nalpha,beta,gamma\n";function d(){var e=new URLSearchParams(Object(u.d)().search),t=e.get("books"),n=e.get("format");if(null!==n&&null!==t){if("csv"===n)return h("mytest.csv",m),o.a.createElement("div",null);if("string"===n)return h("mytest.txt",m.substring(0,3)),o.a.createElement("div",null)}return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",null,"Book Package API"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.b,{to:"/rrouter?books=gen,exo"},"Book Package")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/rrouter/download?books=gen,exo&format=string"},"Book Package Total as string")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/rrouter/download?books=1jn,2jn,3jn&format=csv"},"Book Package Details as CSV"))),o.a.createElement(E,{books:e.get("books"),format:e.get("format")})))}function E(e){var t=e.books,n=e.format;return o.a.createElement("div",null,t?o.a.createElement("div",null,o.a.createElement("h3",null,"The value of ",o.a.createElement("code",null,"books"),' in the query string is "',t,'"',o.a.createElement("br",null),"The value of ",o.a.createElement("code",null,"format"),' in the query string is "',n,'"'),o.a.createElement(s.a,{file:"test.md",content:"csv"===n?m:m.substring(0,3)},o.a.createElement("button",{type:"button"},"Export Data"))):o.a.createElement("h3",null,"There are no books in the query string"))}function h(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}var b=function(){return o.a.createElement(c.a,null,o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0ca60898.chunk.js.map