function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return c.Date.now()};function m(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function T(e){return l=e,u=setTimeout(h,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function h(){var e=g();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,o-(e-l)):n}(e))}function w(e){return u=void 0,m&&r?y(e):(r=i=void 0,a)}function O(){var e=g(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},O.flush=function(){return void 0===u?a:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");var T;y.addEventListener("input",e(t)((function(){j.userEmail=y.email.value,j.userMessage=y.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(!t.value||!n.value)return console.log("Заповніть всі поля");console.log(j),localStorage.clear(),e.currentTarget.reset()}));const j=null!==(T=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==T?T:{},{userEmail:h="",userMessage:w=""}=j;y.email.value=h,y.message.value=w;
//# sourceMappingURL=03-feedback.0ae33a1f.js.map
