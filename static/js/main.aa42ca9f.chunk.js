(this.webpackJsonprrouter=this.webpackJsonprrouter||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),o=n.n(l),c=(n(23),n(7)),u=n(5),m=n(15),i=n.n(m);n(27);var s="one,two,three\nalpha,beta,gamma\n";function E(){var e=new URLSearchParams(Object(u.f)().search),t=e.get("books"),n=e.get("format");return null!==n&&null!==t&&("csv"===n?g("mytest.csv",s):"string"===n&&g("mytest.txt",s.substring(0,3))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Book Package API"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/rrouter?books=gen,exo"},"Book Package")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/rrouter?books=gen,exo&format=string"},"Book Package Total as string")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/rrouter?books=1jn,2jn,3jn&format=csv"},"Book Package Details as CSV")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/rrouter/download"},"About")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Home"))),r.a.createElement(f,{books:e.get("books"),format:e.get("format")}),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(u.a,{path:"/rrouter/download"},r.a.createElement(b,null)),r.a.createElement(u.a,{path:"/rrouter"},r.a.createElement(d,null)))))}function d(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Book Package"))}function h(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"))}function b(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"))}function f(e){var t=e.books,n=e.format;return r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement("h3",null,"The value of ",r.a.createElement("code",null,"books"),' in the query string is "',t,'"',r.a.createElement("br",null),"The value of ",r.a.createElement("code",null,"format"),' in the query string is "',n,'"'),r.a.createElement(i.a,{file:"test.md",content:"csv"===n?s:s.substring(0,3)},r.a.createElement("button",{type:"button"},"Export Data"))):r.a.createElement("h3",null,"There are no books in the query string"))}function g(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}var k=function(){return r.a.createElement(c.a,null,r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.aa42ca9f.chunk.js.map