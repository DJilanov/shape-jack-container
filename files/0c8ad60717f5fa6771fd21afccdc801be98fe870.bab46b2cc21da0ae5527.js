(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/YTq":function(t,e,n){"use strict";n.d(e,"b",(function(){return g}));var r=!1;if("undefined"!==typeof window){var o={get passive(){r=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var i="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),u=[],a=!1,c=-1,s=void 0,l=void 0,f=function(t){return u.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},d=function(t){var e=t||window.event;return!!f(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},p=function(){void 0!==l&&(document.body.style.paddingRight=l,l=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)},b=function(t,e){if(t){if(!u.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:e||{}};u=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(u),[n]),i?(t.ontouchstart=function(t){1===t.targetTouches.length&&(c=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var n=t.targetTouches[0].clientY-c;!f(t.target)&&(e&&0===e.scrollTop&&n>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&n<0?d(t):t.stopPropagation())}(e,t)},a||(document.addEventListener("touchmove",d,r?{passive:!1}:void 0),a=!0)):function(t){if(void 0===l){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;e&&n>0&&(l=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")}(e)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},v=function(){i?(u.forEach((function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null})),a&&(document.removeEventListener("touchmove",d,r?{passive:!1}:void 0),a=!1),c=-1):p(),u=[]},y=n("ERkP");function g(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];Object(y.useLayoutEffect)((function(){if(t){var e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",function(){document.body.style.overflow=e}}}),[t])}e.a=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=Object(y.useState)(null),n=e[0],r=e[1];return Object(y.useEffect)((function(){return n&&t?b(n):v(),function(){v()}}),[n,t]),r}},"5x5+":function(t,e,n){"use strict";function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n.d(e,"a",(function(){return r}))},BuS1:function(t,e,n){"use strict";function r(t){return Array.isArray(t)}n.d(e,"a",(function(){return r}))},EKc4:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d}));var r=n("zygG"),o=n("zjfJ"),i=n("HbGN"),u=n("Ux93"),a=n("HwOo");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=Object(u.j)(),f=Object(u.i)();function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,u=t.token,c=t.local,d=t.omegaSessionKey,p=t.country,b=t.kambiToken,v=t.browserType,y=t.ignoreCache,g=Object(i.a)(t,["token","local","omegaSessionKey","country","kambiToken","browserType","ignoreCache"]),h=s({"X-App-Platform":f,"X-App-Version":l,"Accept-Language":"*"},g);if(u&&(h.Authorization="Bearer ".concat(u)),b&&(h["Kambi-Token"]=b),c){var m=c.split("-"),O=Object(r.a)(m,2),j=O[0],w=O[1];h.Localization="".concat(j,"-").concat(w.toUpperCase())}if(d&&(h["X-Provider-Token"]=d),v){var E="PHONE"===v||"TABLET"===v?"MOBILE":v;h["X-Browser-Type"]=E}return p&&(h.Country=p),"POST"!==e&&"PUT"!==e&&"DELETE"!==e||(h["Content-Type"]="application/json"),{body:n,cache:y?"no-store":void 0,method:e,headers:a.h?h:new Headers(h),signal:o}}},EiYN:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return m}));var r=n("VtSi"),o=n.n(r),i=n("QsI/"),u=n("jPXh"),a=n("EKc4"),c=n("aCuv"),s=n("Ux93"),l=Object(s.n)("auth"),f=u.type({session:u.string}),d="".concat(l,"/api/session?type=").concat(a.b,"&version=").concat(a.c);function p(t){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.country,t.next=3,Object(c.a)(d,f,Object(a.a)({country:n}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=n("UeUi"),y=n("DZAV"),g=function(t){return function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(v.a.toggleMainMenu(t)),n(v.a.toggleSearch(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(v.a.toggleMainMenu(!1)),n(v.a.toggleSearch(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var t=Object(i.a)(o.a.mark((function t(e,n){var r,i,u,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n(),i=Object(y.b)(r),e(v.a.fetchAuthSession.request()),t.next=5,p({country:i});case 5:if(!(u=t.sent).error){t.next=8;break}return t.abrupt("return",e(v.a.fetchAuthSession.failure()));case 8:return a=u.data.session,e(v.a.fetchAuthSession.success(a)),t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},HOTy:function(t,e,n){"use strict";var r=n("ddV6"),o=n("IGGJ");e.__esModule=!0,e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!a,o=(0,i.useRef)(),s=(0,i.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,i.useCallback)((function(t){o.current&&(o.current(),o.current=void 0),n||f||t&&t.tagName&&(o.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=c.get(e);if(n)return n;var r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return c.set(e,n={id:e,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,u=r.elements;return u.set(t,e),i.observe(t),function(){u.delete(t),i.unobserve(t),0===u.size&&(i.disconnect(),c.delete(o))}}(t,(function(t){return t&&d(t)}),{rootMargin:e}))}),[n,e,f]);return(0,i.useEffect)((function(){a||f||(0,u.default)((function(){return d(!0)}))}),[f]),[p,f]};var i=n("ERkP"),u=o(n("ZeW2")),a="undefined"!==typeof IntersectionObserver;var c=new Map},Ju1q:function(t,e,n){"use strict";n.d(e,"g",(function(){return O})),n.d(e,"i",(function(){return j})),n.d(e,"o",(function(){return w})),n.d(e,"f",(function(){return E})),n.d(e,"j",(function(){return S})),n.d(e,"m",(function(){return _})),n.d(e,"h",(function(){return I})),n.d(e,"l",(function(){return D})),n.d(e,"b",(function(){return A})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return L})),n.d(e,"n",(function(){return M})),n.d(e,"a",(function(){return N})),n.d(e,"e",(function(){return x})),n.d(e,"k",(function(){return B}));var r=n("zjfJ"),o=n("ns0p"),i=n("+l7i"),u=n("noJ7"),a=n("Xgu+"),c=n("tDoy"),s=n("i8e/"),l=n("xrZD"),f=n("btsZ");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=["ACTIVE","QUEUED","OPTED_IN"];function v(t,e){return s.a.is(t)?p(p({},t),{},{triggerDate:Object(u.a)(t.triggerDate,{locale:e})}):t}function y(t){if(!t)return null;var e=Object(o.a)(t);return e&&new Date(e).getTime()}var g=function(t){return function(e,n){var r=function(t){return a.a.is(t)&&t.endDate||l.c.is(t)&&t.expirationDate||l.b.is(t)&&t.expirationDate||s.a.is(t)&&t.expiryDate||c.a.is(t)&&t.endDate||null},o=r(e),i=r(n),u=y(o),f=y(i);return null===u?1:null===f?-1:"shorter_validity"===t?u>f?1:-1:u>f?-1:1}};function h(t,e,n){if(s.a.is(t)||a.a.is(t)||c.a.is(t)){var r=e.find((function(e){return e.providerBonusId===t.bonusPlanId.toString()&&"OMEGA"===e.provider}));if(r)return s.a.is(t)?p(p(p({},t),r),{},{triggerDate:Object(u.a)(t.triggerDate,{locale:n})}):p(p({},t),r)}if(l.b.is(t)||l.c.is(t)){var o=e.find((function(e){return e.providerBonusId===t.metadataId&&"KAMBI"===e.provider}));if(o)return p(p({},t),o)}return null}function m(t){return t.bonuses.bonuses||[]}function O(t){return t.bonuses.state}function j(t){return t.bonuses.depositBonusPlansState}function w(t){return t.bonuses.viewedPromotions}function E(t){return t.bonuses.bonusesMetaData}function S(t){return t.bonuses.newsletters}function _(t){return t.bonuses.optInBonusPlansState}Object(i.a)([function(t){return t.bonuses.playerBonuses},E,f.i],(function(t,e,n){if(t&&e)return t.map((function(t){return h(t,e,n)})).filter((function(t){return null!==t}))}));var I=Object(i.a)([function(t){return t.bonuses.depositBonusPlans},E,f.i],(function(t,e,n){if(t&&e)return t.map((function(t){return h(t,e,n)})).filter((function(t){return null!==t}))})),P=Object(i.a)([function(t){return t.bonuses.couponBonuses},E,f.i],(function(t,e,n){if(t&&e)return t.map((function(t){return h(t,e,n)})).filter((function(t){return null!==t}))})),D=Object(i.a)([function(t){return t.bonuses.optInBonusPlans},E,f.i],(function(t,e,n){if(t&&e)return t.filter((function(t){return"CODED"!==t.bonusPlanType||"CODED"===t.bonusPlanType&&0===t.bonusAmount})).map((function(t){return h(t,e,n)})).filter((function(t){return null!==t}))})),T=(Object(i.a)(P,(function(t){return null===t||void 0===t?void 0:t.filter((function(t){return"Active"===t.status}))})),Object(i.a)([function(t){return t.bonuses.couponBonusPrograms},E,f.i],(function(t,e,n){if(t&&e)return t.map((function(t){return h(t,e,n)})).filter((function(t){return null!==t}))}))),A=Object(i.a)(T,(function(t){return null===t||void 0===t?void 0:t.filter((function(t){return"bonus_program"===t.bonusType}))})),k=Object(i.a)([S,I,D,A],(function(t,e,n,r){return Array.prototype.concat(t,e,n,r).filter((function(t){return void 0!==t})).sort(g("shorter_validity"))})),L=Object(i.a)([function(t){return t.bonuses.newslettersState},function(t){return t.bonuses.depositBonusPlansState},_,function(t){return t.bonuses.couponBonusProgramsState}],(function(t,e,n,r){return{newslettersState:t,depositBonusPlansState:e,optInBonusesState:n,activeCouponBonusProgramsState:r}})),M=Object(i.a)([k,w],(function(t,e){var n=t.length-e.length;if(n>0)return n})),N=Object(i.a)([m,f.i],(function(t,e){var n=t.filter((function(t){return a.a.is(t)||l.c.is(t)&&"bonus_program"===t.bonusType||l.b.is(t)&&"Active"===t.status?t:s.a.is(t)?(!!parseInt(t.amount,10)||"OPTED_IN"===t.status)&&b.includes(t.status):null})),r=function(t){return s.a.is(t)&&"QUEUED"===t.status},o=g("shorter_validity"),i=n.filter((function(t){return r(t)})).sort(o);return n.filter((function(t){return!r(t)})).sort(o).concat(i).map((function(t){return v(t,e)}))})),x=Object(i.a)([m,f.i],(function(t,e){return t.filter((function(t){return l.b.is(t)&&"Active"!==t.status?t:!!s.a.is(t)&&(!!parseInt(t.amount,10)&&!b.includes(t.status))})).map((function(t){return v(t,e)})).sort(g("longer_validity"))})),B=Object(i.a)(I,(function(t){return null===t||void 0===t?void 0:t.filter((function(t){return null===t||void 0===t?void 0:t.tags.includes("ONBOARDING")}))}))},KeDb:function(t,e,n){"use strict";var r=n("ddV6"),o=n("yWCo");e.__esModule=!0,e.default=void 0;var i=o(n("ERkP")),u=n("L9lV"),a=n("7xIC"),c=n("HOTy"),s={};function l(t,e,n,r){if(t&&(0,u.isLocalURL)(e)){t.prefetch(e,n,r).catch((function(t){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:t&&t.locale;s[e+"%"+n+(o?"%"+o:"")]=!0}}var f=function(t){var e=!1!==t.prefetch,n=(0,a.useRouter)(),o=n&&n.pathname||"/",f=i.default.useMemo((function(){var e=(0,u.resolveHref)(o,t.href,!0),n=r(e,2),i=n[0],a=n[1];return{href:i,as:t.as?(0,u.resolveHref)(o,t.as):a||i}}),[o,t.href,t.as]),d=f.href,p=f.as,b=t.children,v=t.replace,y=t.shallow,g=t.scroll,h=t.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var m=i.Children.only(b),O=m&&"object"===typeof m&&m.ref,j=(0,c.useIntersection)({rootMargin:"200px"}),w=r(j,2),E=w[0],S=w[1],_=i.default.useCallback((function(t){E(t),O&&("function"===typeof O?O(t):"object"===typeof O&&(O.current=t))}),[O,E]);(0,i.useEffect)((function(){var t=S&&e&&(0,u.isLocalURL)(d),r="undefined"!==typeof h?h:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];t&&!o&&l(n,d,p,{locale:r})}),[p,d,S,h,e,n]);var I={ref:_,onClick:function(t){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,i,a,c){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,u.isLocalURL)(n))&&(t.preventDefault(),null==a&&(a=r.indexOf("#")<0),e[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:a}).then((function(t){t&&a&&document.body.focus()})))}(t,n,d,p,v,y,g,h)},onMouseEnter:function(t){(0,u.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(t),l(n,d,p,{priority:!0}))}};if(t.passHref||"a"===m.type&&!("href"in m.props)){var P="undefined"!==typeof h?h:n&&n.locale,D=(0,u.getDomainLocale)(p,P,n&&n.locales,n&&n.domainLocales);I.href=D||(0,u.addBasePath)((0,u.addLocale)(p,P,n&&n.defaultLocale))}return i.default.cloneElement(m,I)};e.default=f},UeUi:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fmk+"),o={toggleMainMenu:Object(r.createStandardAction)("system/MAIN_MENU_TOGGLED")(),toggleSearch:Object(r.createStandardAction)("system/SEARCH_TOGGLED")(),showLimitInterceptionModal:Object(r.createStandardAction)("system/SHOW_LIMIT_INTERCEPTION_MODAL")(),hideLimitInterceptionModal:Object(r.createStandardAction)("system/HIDE_LIMIT_INTERCEPTION_MODAL")(),hideAllMenus:Object(r.createStandardAction)("system/HIDE_ALL_MENUS")(),setSystemInfo:Object(r.createStandardAction)("system/SET_SYSTEM_INFO")(),fetchAuthSession:Object(r.createAsyncAction)("system/FETCH_SESSION_REQUEST","system/FETCH_SESSION_SUCCESS","system/FETCH_SESSION_FAILURE")(),showGlobalSpinner:Object(r.createStandardAction)("SHOW_GLOBAL_SPINNER")(),hideGlobalSpinner:Object(r.createStandardAction)("HIDE_GLOBAL_SPINNER")()}},X4u6:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("zygG"),o=n("BuS1"),i=n("cgXt"),u=n("pRJZ");function a(t){return Object(o.a)(t)?t.map(a):Object(i.a)(t)?(Object.entries(t).forEach((function(e){var n=Object(r.a)(e,2),o=n[0],i=n[1],c=o.split("_").map((function(t,e){if(""!==t)return 0===e?t:t[0].toUpperCase()+t.substring(1)})).filter(u.a).join("");delete t[o],t[c]=a(i)})),t):t}},aCuv:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("VtSi"),o=n.n(r),i=n("QsI/"),u=n("WNM0"),a=n("X4u6"),c=n("qmLy"),s=n("iieO"),l=n("jWKN"),f=n("HwOo");function d(t){var e;try{e=new URL(t)}catch(r){if(!f.f){var n="The API url is not valid: ".concat(t);console.warn(n)}return!1}return Boolean(e)}function p(t,e,n,r){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(o.a.mark((function t(e,n,r,i){var f,p,b,v,y,g,h,m,O,j,w;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f="string"===typeof e?e:e.join("/"),t.prev=1,!d(f)){t.next=24;break}return t.next=5,Object(l.a)(f,r,i);case 5:return p=t.sent,t.t0=a.a,t.next=9,p.json();case 9:if(t.t1=t.sent,b=(0,t.t0)(t.t1),!(p.status>=400)){t.next=15;break}return v="Request failed. Response status: ".concat(p.status),y={error:new Error(v),response:p,json:b},t.abrupt("return",y);case 15:if(g=n.decode(b),!Object(u.isLeft)(g)){t.next=21;break}return h=s.a.report(g,b),m=new Error(h.join("\n")),O={error:m,response:p,json:b},t.abrupt("return",O);case 21:return t.abrupt("return",{error:null,data:g.right,response:p});case 24:return j={error:new Error("http function request url is invalid: ".concat(f))},t.abrupt("return",j);case 26:t.next=33;break;case 28:return t.prev=28,t.t2=t.catch(1),c.a.track({message:"http function catch",url:f,error:t.t2}),w={error:t.t2},t.abrupt("return",w);case 33:case"end":return t.stop()}}),t,null,[[1,28]])})))).apply(this,arguments)}},cgXt:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("BuS1");function o(t){return null!==t&&("function"!==typeof t&&(!Object(r.a)(t)&&"object"===typeof t))}},chvZ:function(t,e,n){"use strict";function r(t){return t()}function o(){return!0}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i}));var i=r((function(){return window}))},fGyu:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("lEbO");var o=n("5x5+"),i=n("HO86");function u(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},jvFD:function(t,e,n){t.exports=n("KeDb")},pQK5:function(t,e,n){"use strict";var r=n("ERkP");e.a=function(t){Object(r.useEffect)((function(){t()}),[])}},tDoy:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("jPXh"),o=r.type({optInId:r.string,bonusPlanId:r.number,startDate:r.string,endDate:r.string,bonusPlanType:r.string,bonusAmount:r.number})},xrZD:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return p}));var r=n("uxzd"),o=n("jPXh"),i=o.intersection([o.type({fulfillment:o.type({id:o.string,stake:o.string,value:o.string}),metadataId:o.string,status:o.union([o.literal("Active"),o.literal("InUse"),o.literal("Used"),o.literal("Expired")]),expirationDate:o.union([o.string,o.null])}),o.partial({type:o.union([o.literal("Freebet"),o.literal("NORMAL"),o.literal("ONBOARDING"),o.literal("Unknown")])})]),u=(o.intersection([o.type({bonuses:o.array(i)}),o.partial({type:o.union([o.literal("Success"),o.literal("Error"),o.literal("UnknownError")])})]),o.literal("web"),o.type({type:o.literal("freebet"),token:o.string})),a=(o.intersection([o.type({betNumber:o.string,rewards:o.array(u),system:r.c}),o.partial({stakePerLine:o.string})]),o.intersection([r.b,o.type({status:o.union([o.literal("live_delay_pending"),o.literal("approval_pending")])}),o.partial({delay:o.number,couponId:o.string,liveDelayTokens:o.array(o.string),timeout:o.number})])),c=(o.intersection([o.type({bets:o.array(o.type({id:o.string}))}),o.partial({couponId:o.string,liveDelayTokens:o.array(o.string)})]),o.union([o.literal("general"),o.literal("insufficient_funds"),o.literal("stake_too_low"),o.literal("stake_too_high"),o.literal("stake_invalid"),o.literal("payout_too_high"),o.literal("odds_changed"),o.literal("suspended"),o.literal("non_combinable"),o.literal("outcome_suspended")]),o.type({type:o.literal("coupon"),message:o.string,reason:o.union([o.literal("general"),o.literal("insufficient_funds")])})),s=o.type({type:o.literal("bet"),betNumber:o.string,message:o.string,reason:o.union([o.literal("general"),o.literal("stake_too_low"),o.literal("stake_too_high"),o.literal("stake_invalid"),o.literal("payout_too_high")])}),l=o.type({type:o.literal("selection"),selectionId:o.string,betNumber:o.string,message:o.string,odds:r.d,reason:o.union([o.literal("general"),o.literal("odds_changed"),o.literal("suspended"),o.literal("non_combinable"),o.literal("outcome_suspended")])}),f=o.partial({errors:o.array(o.union([c,s,l]))}),d=o.type({message:o.string,statusCode:o.literal("401")}),p=o.intersection([o.type({id:o.string,type:o.union([o.literal("free_bet"),o.literal("NORMAL"),o.literal("ONBOARDING")]),metadataId:o.string,expirationDate:o.union([o.string,o.null]),reward:o.partial({type:o.string,amount:o.string,percentage:o.string})}),o.partial({bonusType:o.literal("bonus_program")})]);o.type({bonusPrograms:o.array(p),type:o.literal("success")}),o.union([r.b,a,f,d])}}]);