(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/TXX":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=Object.prototype.hasOwnProperty;function i(e,t){var n,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((o=e.length)===t.length)for(;o--&&i(e[o],t[o]););return-1===o}if(!n||"object"===typeof e){for(n in o=0,e){if(r.call(e,n)&&++o&&!r.call(t,n))return!1;if(!(n in t)||!i(e[n],t[n]))return!1}return Object.keys(t).length===o}}return e!==e&&t!==t}},JbCn:function(e,t,n){"use strict";n.d(t,"b",(function(){return I}));var r=n("ERkP"),i=n("/TXX"),o=new WeakMap,u=0;var a={isOnline:function(){return"undefined"===typeof navigator.onLine||navigator.onLine},isDocumentVisible:function(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}},c=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):o.has(e[n])?r=o.get(e[n]):(r=u,o.set(e[n],u++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var f="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),s={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount||0,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(f?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(f?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:i.a,fetcher:a.fetcher,isOnline:a.isOnline,isDocumentVisible:a.isDocumentVisible},l=Object(r.createContext)({});l.displayName="SWRConfigContext";var d=l,v=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},p="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),y=p?null:window.requestAnimationFrame||function(e){return setTimeout(e,1)},g=p?r.useEffect:r.useLayoutEffect,b={},m={},O={},w={},_={},j={},E={},R=function(){var e=0;return function(){return e++}}();if(!p&&window.addEventListener){var S=function(e){if(s.isDocumentVisible()&&s.isOnline())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return S(O)}),!1),window.addEventListener("focus",(function(){return S(O)}),!1),window.addEventListener("online",(function(){return S(w)}),!1)}var T=function(e,t){void 0===t&&(t=!0);var n=c.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var u=_[r];if(r&&u){for(var a=c.get(r),f=c.get(i),s=c.get(o),l=[],d=0;d<u.length;++d)l.push(u[d](t,a,f,s,d>0));return Promise.all(l).then((function(){return c.get(r)}))}return Promise.resolve(c.get(r))},V=function(e,t,n,r){var i=_[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},I=function(e,t,n){return void 0===n&&(n=!0),v(void 0,void 0,void 0,(function(){var r,i,o,u,a,f,s,l,d,v,p,y,g;return h(this,(function(h){switch(h.label){case 0:if(r=c.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,T(e,n)];if(j[i]=R()-1,E[i]=0,u=j[i],a=m[i],l=!1,t&&"function"===typeof t)try{t=t(c.get(i))}catch(b){s=b}if(!t||"function"!==typeof t.then)return[3,5];l=!0,h.label=1;case 1:return h.trys.push([1,3,,4]),[4,t];case 2:return f=h.sent(),[3,4];case 3:return d=h.sent(),s=d,[3,4];case 4:return[3,6];case 5:f=t,h.label=6;case 6:return(v=function(){if(u!==j[i]||a!==m[i]){if(s)throw s;return!0}})()?[2,f]:("undefined"!==typeof f&&c.set(i,f),c.set(o,s),E[i]=R()-1,l?[3,8]:[4,0]);case 7:if(h.sent(),v())return[2,f];h.label=8;case 8:if(p=_[i]){for(y=[],g=0;g<p.length;++g)y.push(p[g](!!n,f,s,void 0,g>0));return[2,Promise.all(y).then((function(){if(s)throw s;return c.get(i)}))]}if(s)throw s;return[2,f]}}))}))};d.Provider;var D=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i,o,u={};t.length>=1&&(i=t[0]),t.length>2?(o=t[1],u=t[2]):"function"===typeof t[1]?o=t[1]:"object"===typeof t[1]&&(u=t[1]);var a=c.serializeKey(i),f=a[0],l=a[1],p=a[2],S=a[3];u=Object.assign({},s,Object(r.useContext)(d),u);var T=Object(r.useRef)(u);g((function(){T.current=u})),"undefined"===typeof o&&(o=u.fetcher);var D=function(){var e=c.get(f);return"undefined"===typeof e?u.initialData:e},C=D(),L=c.get(p),k=!!c.get(S),K=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),x=Object(r.useRef)({data:C,error:L,isValidating:k});Object(r.useDebugValue)(x.current.data);var W=Object(r.useState)(null)[1],P=Object(r.useCallback)((function(e){var t=!1;for(var n in e)x.current[n]!==e[n]&&(x.current[n]=e[n],K.current[n]&&(t=!0));if(t||u.suspense){if(M.current||!z.current)return;W({})}}),[]),M=Object(r.useRef)(!1),A=Object(r.useRef)(f),z=Object(r.useRef)(!1),X=Object(r.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];M.current||(t=T.current)[e].apply(t,n)}}),F=Object(r.useCallback)((function(e,t){return I(A.current,e,t)}),[]),N=function(e,t){t&&(e[f]?e[f].push(t):e[f]=[t])},J=function(e,t){if(e[f]){var n=e[f],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},Y=Object(r.useCallback)((function(t){return void 0===t&&(t={}),v(e,void 0,void 0,(function(){var e,n,r,i,a,s,d;return h(this,(function(v){switch(v.label){case 0:if(!f||!o)return[2,!1];if(M.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof b[f]&&t.dedupe,v.label=1;case 1:return v.trys.push([1,6,,7]),P({isValidating:!0}),c.set(S,!0),n||V(f,x.current.data,x.current.error,!0),r=void 0,i=void 0,n?(i=m[f],[4,b[f]]):[3,3];case 2:return r=v.sent(),[3,5];case 3:return u.loadingTimeout&&!c.get(f)&&setTimeout((function(){e&&X.current.emit("onLoadingSlow",f,u)}),u.loadingTimeout),b[f]=null!==l?o.apply(void 0,l):o(f),m[f]=i=R(),[4,b[f]];case 4:r=v.sent(),setTimeout((function(){delete b[f],delete m[f]}),u.dedupingInterval),X.current.emit("onSuccess",r,f,u),v.label=5;case 5:return m[f]>i||j[f]&&(i<=j[f]||i<=E[f]||0===E[f])?(P({isValidating:!1}),[2,!1]):(c.set(f,r),c.set(p,void 0),c.set(S,!1),a={isValidating:!1},"undefined"!==typeof x.current.error&&(a.error=void 0),u.compare(x.current.data,r)||(a.data=r),P(a),n||V(f,r,a.error,!1),[3,7]);case 6:return s=v.sent(),delete b[f],delete m[f],c.set(p,s),x.current.error!==s&&(P({isValidating:!1,error:s}),n||V(f,void 0,s,!1)),X.current.emit("onError",s,f,u),u.shouldRetryOnError&&(d=(t.retryCount||0)+1,X.current.emit("onErrorRetry",s,f,u,Y,Object.assign({dedupe:!0},t,{retryCount:d}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[f]);g((function(){if(f){M.current=!1,z.current=!0;var e=x.current.data,t=D();A.current!==f&&(A.current=f),u.compare(e,t)||P({data:t});var n=function(){return Y({dedupe:!0})};(u.revalidateOnMount||!u.initialData&&void 0===u.revalidateOnMount)&&("undefined"!==typeof t?y(n):n());var r=!1,i=function(){!r&&T.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),T.current.focusThrottleInterval))},o=function(){T.current.revalidateOnReconnect&&n()},a=function(e,t,r,i,o){void 0===e&&(e=!0),void 0===o&&(o=!0);var a={},c=!1;return"undefined"===typeof t||u.compare(x.current.data,t)||(a.data=t,c=!0),x.current.error!==r&&(a.error=r,c=!0),"undefined"!==typeof i&&x.current.isValidating!==i&&(a.isValidating=i,c=!0),c&&P(a),!!e&&(o?n():Y())};return N(O,i),N(w,o),N(_,a),function(){P=function(){return null},M.current=!0,J(O,i),J(w,o),J(_,a)}}}),[f,Y]),g((function(){var t=null,n=function(){return v(e,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return x.current.error||!T.current.refreshWhenHidden&&!T.current.isDocumentVisible()||!T.current.refreshWhenOffline&&!T.current.isOnline()?[3,2]:[4,Y({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return T.current.refreshInterval&&!x.current.error&&(t=setTimeout(n,T.current.refreshInterval)),[2]}}))}))};return T.current.refreshInterval&&(t=setTimeout(n,T.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[u.refreshInterval,u.refreshWhenHidden,u.refreshWhenOffline,Y]);var H=Object(r.useMemo)((function(){var e={revalidate:Y,mutate:F};return Object.defineProperties(e,{error:{get:function(){return K.current.error=!0,A.current===f?x.current.error:L},enumerable:!0},data:{get:function(){return K.current.data=!0,A.current===f?x.current.data:C},enumerable:!0},isValidating:{get:function(){return K.current.isValidating=!0,x.current.isValidating},enumerable:!0}}),e}),[Y]);if(u.suspense){var G=c.get(f),q=c.get(p);if("undefined"===typeof G&&(G=C),"undefined"===typeof q&&(q=L),"undefined"===typeof G&&"undefined"===typeof q){if(b[f]||Y(),b[f]&&"function"===typeof b[f].then)throw b[f];G=b[f]}if("undefined"===typeof G&&q)throw q;return{error:q,data:G,revalidate:Y,mutate:F,isValidating:x.current.isValidating}}return H};t.a=D},KLX3:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r="SWR_KEY_PLAYER_INFO",i="SWR_KEY_LOSS_AND_WAGER_LIMITS",o="SWR_KEY_DEPOSIT_LIMITS"},iZgM:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n("A8Dy"),i=n("S9sW"),o=n("JbCn"),u=n("KLX3");function a(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.a)(e?u.c:null,(function(){return Object(i.getPlayerInfo)({sessionKey:e}).promise()}),{refreshInterval:t?5e3:void 0,revalidateOnFocus:!1}),r=n.data,a=n.error,c=n.isValidating;return{data:r,error:a,loading:c}}function c(){return a(Object(r.a)()||"")}}}]);