(this["webpackJsonpdays-since-stem-cell-transplant-react-app"]=this["webpackJsonpdays-since-stem-cell-transplant-react-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(3),s=a.n(n),o=(a(9),a(10),a(0)),l=function(e){var t=e.startDate,a=t.getDate(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],c=t.getFullYear(),n=t.getHours(),s=t.getMinutes(),l=n>=12?"am":"pm",h="".concat(n,":").concat(s," ").concat(l);return Object(o.jsxs)("h2",{className:"formatTime",children:[a," ",r," ",c," - ",h]})},h=a(4),i=function(e){var t=Object(r.useState)(""),a=Object(h.a)(t,2),c=a[0],n=a[1];Object(r.useEffect)((function(){var e=setInterval((function(){return n(c+1)}),1e3);return function(){return clearTimeout(e)}}));var s=e.startDate.getTime(),l=new Date,i=Math.floor(l.getTime()-s),j=Math.floor(i/1e3),d=Math.floor(j/60),u=Math.floor(d/60),b=Math.floor(u/24),f=Math.floor(b/31),O=Math.floor(f/12);f=Math.floor(f%12),b=Math.floor(b%31),u=Math.floor(u%24),d=Math.floor(d%60),j=Math.floor(j%60);var x=Math.round(Math.abs((l.getTime()-s)/864e5));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"totalDays",children:Object(o.jsxs)("h2",{children:[x," Days"]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Time Elapsed \ud83d\udd50"}),b>=0&&Object(o.jsxs)(o.Fragment,{children:[O>0&&Object(o.jsxs)("h3",{children:[O," Years"]}),(f>0||O>0)&&Object(o.jsxs)("h3",{children:[f," Months"]}),Object(o.jsxs)("h3",{children:[b," Days"]})]}),Object(o.jsxs)("h3",{children:[u," Hours"]}),Object(o.jsxs)("h3",{children:[d," Mins"]}),Object(o.jsxs)("h3",{children:[j," Secs"]})]})]})},j=function(e){var t=e.startDate,a=e.milestones;return Object(o.jsx)("div",{className:"milestones",children:a.map((function(e,a){var r;r=e/364>1?"".concat(Math.round(e/365)," Years"):e/7>1&&e/6<52?"".concat(Math.round(e/7)," Weeks (").concat(e," days)"):"".concat(e," Days");var c=function(e){var t=new Date;return Math.round((e-t)/864e5)}(function(e){var a=new Date(t);return a.setDate(a.getDate()+e),a}(e)),n=c<1?"\u2705":"".concat(c.toLocaleString("en-GB")," Days Left");return Object(o.jsxs)("h4",{children:[r," - ",n," "]},a)}))})};var d=function(){var e=new Date("2021-02-19T02:12:00+00:00");return Object(o.jsx)("div",{children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Stem Cell Day \u2728"}),Object(o.jsx)(l,{startDate:e}),Object(o.jsx)("h2",{className:"butterfly",children:"\ud83e\udd8b"}),Object(o.jsx)(i,{startDate:e}),Object(o.jsx)("h3",{children:"Milestones \u23f3"}),Object(o.jsx)(j,{startDate:e,milestones:[7,14,21,28,35,42,49,56,63,70,77,84,100,150,200,365,730,1095,1460,1825]})]})})})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.5ee5089c.chunk.js.map