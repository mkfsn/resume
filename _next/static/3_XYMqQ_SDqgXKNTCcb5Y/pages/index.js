(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var r=s(n("q1tI")),a=s(n("Xuae")),o=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var c=d[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var l=a.props[c],p=r[c]||new Set;p.has(l)?o=!1:(p.add(l),r[c]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var f=(0,a.default)();function m(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(f,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}m.rewind=f.rewind;var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},KqR1:function(e,t,n){e.exports={skills:"skills_skills__3eUJp"}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("YYIs"),s=n.n(u),c=a.a.createElement;function l(){return c("header",{id:"me"},c("h1",{className:s.a.name},c("span",null,"Pei-Ming Wu"),"\xa0",c("span",null,"(aka mkfsn)")),c("h4",{className:s.a.address},"Taiwan. p408865(#)gmail.com"),c("h4",{className:s.a.sns},[{logo:"home",href:"https://mkfsn.github.io"},{logo:"logo-github",href:"https://github.com/mkfsn"},{logo:"logo-twitter",href:"https://twitter.com/mkfsn"},{logo:"logo-linkedin",href:"https://linkedin.com/in/mkfsn"}].map((function(e){return c("a",{className:s.a.link,target:"_blank",href:e.href},c("ion-icon",{name:e.logo}))}))))}var d=a.a.createElement;function p(){return d("section",{id:"summary"},d("h1",null,"Summary"),d("p",null,"Quick-learning software engineer with experience in computer science, programming and networking for various projects."))}var f=n("sLbq"),m=n.n(f),h=a.a.createElement;function g(){return h("section",{id:"education"},h("h1",null,"Education"),[{name:"Institute of Computer and Communication Engineering, Department of Engineering, National Cheng Kung University, Taiwan.",date:"Sep'13 - Sep'16",degree:"Master of Computer and Communication Engineering"},{name:"Graduate School of Information Science and Technology, Osaka University, Japan.",date:"Sep'15 - Aug'16",degree:"Exchange Student"},{name:"Department of Computer Science Engineering, National Sun Yat-Sen University, Taiwan.",date:"Sep'09 - Jun'13",degree:"Bachelor of Engineering"}].map((function(e){return h("div",{className:m.a.education},h("p",{className:m.a.name},e.name),h("p",{className:m.a.date},e.date),h("p",{className:m.a.degree},e.degree))})))}var y=n("yn6M"),v=n.n(y),_=a.a.createElement;function b(){return _("section",{id:"experience"},_("h1",null,"Experience"),[{title:"Glasnostic, Lead Developer",date:"Nov'18 - Current",details:["Responsible for the cloud project and production environment","Plan and create integration test cases for microservices","Manage team members, sprint planning, shift rosters, performance appraisals, holiday and sickness etc"]},{title:"Glasnostic, Software Engineer",date:"Feb'17 - Nov'18",details:["Developed microservices using Golang","Deployed microservices using Docker / Kubernetes","Developed router using Golang / netmap / DPDK","Developed frontend project using Anguler 1.5/2/4 with TypeScript and SCSS"]},{title:"NCKU EE, Network and System Administrator",date:"Sep'13 - Jun,15",details:["Maintained layer 2/3 switches and servers","Developed web-based network management system using PHP and Apache"]},{title:"NSYSU-CDPA, Network and System Administrator",date:"Sep'10 - Jun,13",details:["Reconfigured, upgrade, and replaced layer 2/3 switches","Replaced broken RJ45 sockets","Monitored network traffic by MRTG and Netflow","Maintained web-based network management system"]}].map((function(e){return _("div",{className:v.a.experience},_("p",{className:v.a.title},e.title),_("p",{className:v.a.date},e.date),_("ul",{className:v.a.details},e.details.map((function(e){return _("li",null,e)}))))})))}var S=n("f4pc"),w=n.n(S),k=a.a.createElement;function x(){return k("section",{id:"projects"},k("h1",null,"Projects"),[{type:"Master Thesis",title:"Design and Implementation of a Network Traffic Classification Caching Mechanism Based on Net-DPIS",details:"Improved performance of a kernel-based Deep Packet Inspection System"}].map((function(e){return function(e){return k("div",{className:w.a.project},k("p",{className:w.a.type},e.type),k("p",{className:w.a.title},e.title),k("ul",{className:w.a.details},k("li",null,e.details)))}(e)})))}var C=n("KqR1"),N=n.n(C),E=a.a.createElement;function P(){var e={knowledge:["Golang / C / C++","Docker / Kubernetes","Linux Kernel / Linux Networking / netmap / DPDK / eBPF / XDP","REST / gRPC","HTML5/ CSS3 / AngularJS / Angular / TypeScript / jQuery / Bootstrap","Python / PHP / Ruby / NodeJS","MySQL / MongoDB / InfluxDB","Flask / GIN / Codeigniter","Azure: ACS / AKS / OMS","Certified Ethical Hacker"],languages:["\ud83c\uddf9\ud83c\uddfc Chinese - Native speaker","\ud83c\uddef\ud83c\uddf5 Japanese - Advanced - N1","\ud83c\uddfa\ud83c\uddf8 English - Advanced"]};return E("section",{className:N.a.skills},E("h1",null,"Skills"),E("h3",null,"Knowledge"),E("ul",null,e.knowledge.map((function(e){return E("li",null,e)}))),E("h3",null,"Languages"),E("ul",null,e.languages.map((function(e){return E("li",null,e)}))))}var M=a.a.createElement;function A(){return M("div",{className:"container"},M(i.a,null,M("title",null,"Pei-Ming Wu"),M("link",{rel:"icon",href:"/favicon.ico"}),M("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=1"}),M("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans",rel:"stylesheet"})),M("main",null,M(l,null),M(p,null),M(g,null),M(b,null),M(x,null),M(P,null)),M("script",{src:"https://unpkg.com/ionicons@4.4.2/dist/ionicons.js"}))}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),s=n("Nsbk"),c=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(c,u);var s=l(c);function c(e){var o;return r(this,c),o=s.call(this,e),p&&(t.add(a(o)),n(a(o))),o}return o(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(d.Component))}},YYIs:function(e,t,n){e.exports={name:"profile_name__2dvzW",sns:"profile_sns__2uZyu",link:"profile_link__1kO34",address:"profile_address__2ShRq"}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},f4pc:function(e,t,n){e.exports={project:"projects_project__X_rYK",type:"projects_type__3EvvY",title:"projects_title__8gygo",details:"projects_details__3Etrd"}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},sLbq:function(e,t,n){e.exports={education:"education_education__3jNJs",degree:"education_degree__3f57r",name:"education_name__Hzbmp",date:"education_date__dCZZ2"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},yn6M:function(e,t,n){e.exports={experience:"experiences_experience__1T8HQ",date:"experiences_date__17Q1e",title:"experiences_title__2ur35",details:"experiences_details__1Ky47"}}},[["vlRD",0,1]]]);