webpackJsonp([2],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var u=n(182),r=o(u);(0,r["default"])()},178:function(e,t){"use strict";var n=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};e.exports=n},179:function(e,t,n){"use strict";function o(e,t){var n=p.extractSingleTouch(t);return n?n[e.page]:e.page in t?t[e.page]:t[e.client]+s[e.envScroll]}function u(e,t){var n=o(w.x,t),u=o(w.y,t);return Math.pow(Math.pow(n-e.x,2)+Math.pow(u-e.y,2),.5)}function r(e){return{tapMoveThreshold:d,ignoreMouseThreshold:x,eventTypes:E,extractEvents:function(t,n,r,c,a){if(g(t))y=D();else if(e(y,D()))return null;if(!v(t)&&!T(t))return null;var p=null,s=u(M,c);return T(t)&&d>s&&(p=i.getPooled(E.touchTap,r,c,a)),v(t)?(M.x=o(w.x,c),M.y=o(w.y,c)):T(t)&&(M.x=0,M.y=0),l.accumulateTwoPhaseDispatches(p),p}}}var c=n(12),a=n(84),l=n(26),i=n(28),p=n(180),s=n(56),h=n(178),f=c.topLevelTypes,v=a.isStartish,T=a.isEndish,g=function(e){var t=[f.topTouchCancel,f.topTouchEnd,f.topTouchStart,f.topTouchMove];return t.indexOf(e)>=0},d=10,x=750,M={x:null,y:null},y=null,w={x:{page:"pageX",client:"clientX",envScroll:"currentPageScrollLeft"},y:{page:"pageY",client:"clientY",envScroll:"currentPageScrollTop"}},S=[f.topTouchStart,f.topTouchCancel,f.topTouchEnd,f.topTouchMove],P=[f.topMouseDown,f.topMouseMove,f.topMouseUp].concat(S),E={touchTap:{phasedRegistrationNames:{bubbled:h({onTouchTap:null}),captured:h({onTouchTapCapture:null})},dependencies:P}},D=function(){return Date.now?Date.now:function(){return+new Date}}();e.exports=r},180:function(e,t){var n={extractSingleTouch:function(e){var t=e.touches,n=e.changedTouches,o=t&&t.length>0,u=n&&n.length>0;return!o&&u?n[0]:o?t[0]:e}};e.exports=n},181:function(e,t){e.exports=function(e,t){return e&&750>t-e?!0:void 0}},182:function(e,t,n){var o=n(181);e.exports=function(e){e=e||{};var t=e.shouldRejectClick||o;n(25).injection.injectEventPluginsByName({TapEventPlugin:n(179)(t)})}}});