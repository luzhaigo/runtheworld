(this.webpackJsonpruntheworld=this.webpackJsonpruntheworld||[]).push([[0],{83:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(0),c=t(13),o=t.n(c),i=t(7),u=t.n(i),d=t(9),l=t(2),s=t(18),p=t(6),b=t(5),f=(t(47),{primary:"#2020e5",white:"#FFFFFF",black:"#000000",disabled:"#c6cbd4","dim-gray":"#6b6b6b","tiffany-blue":"#06b5b3",charcoal:"#313d47",silver:"#bdbdbd","dark-gray":"#a4a9ac",timberwolf:"#d8d8d8","page-gray":"#fafafa"}),h=function(e){return function(n){return n.theme.colors[e]}},j=Object.keys(f).reduce((function(e,n){return e[n]=h(n),e}),{}),m=t(10),v=t(15);function O(){var e=Object(p.a)(["\n  width: 100%;\n  color: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  padding: 14px 12px;\n  background: ",";\n  &::placeholder {\n    color: ",";\n  }\n"]);return O=function(){return e},e}var x=b.default.input(O(),j.charcoal,j["dark-gray"],j.white,j.silver),g=t(19),w=t(16);function y(){var e=Object(p.a)(["\n        path {\n          display: none;\n        }\n      "]);return y=function(){return e},e}function k(){var e=Object(p.a)(["\n  && {\n    transition: width 0.5s, margin-right 0.5s;\n    width: ",";\n    margin-right: ",";\n    ","\n  }\n"]);return k=function(){return e},e}function C(){var e=Object(p.a)(["\n          border: 1px solid ",";\n          background-color: ",";\n          color: ",";\n        "]);return C=function(){return e},e}function A(){var e=Object(p.a)(["\n          border: 1px solid ",";\n          background-color: ",";\n          color: ",";\n        "]);return A=function(){return e},e}function I(){var e=Object(p.a)(["\n  &,\n  &:focus {\n    outline: none;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 0;\n  ","\n  font-weight: 500;\n  &:disabled {\n    cursor: not-allowed;\n    background-color: ",";\n    background-image: none;\n    border: 1px solid ",";\n    color: ",";\n  }\n"]);return I=function(){return e},e}var E=b.default.button(I(),(function(e){return e.primary?Object(b.css)(A(),j.primary,j.primary,j.white):Object(b.css)(C(),j["dim-gray"],j.white,j["dim-gray"])}),j.disabled,j.disabled,j.white),M=Object(b.default)((function(e){e.loading;var n=Object(v.a)(e,["loading"]);return Object(r.jsx)(g.a,Object(l.a)({},n))}))(k(),(function(e){return e.loading?void 0:"0"}),(function(e){return e.loading?"4px":"0"}),(function(e){return!1===e.loading&&Object(b.css)(y())})),S=function(e){var n=e.children,t=e.loading,a=void 0!==t&&t,c=e.disabled,o=e.innerRef,i=e.primary,u=void 0!==i&&i,d=Object(v.a)(e,["children","loading","disabled","innerRef","primary"]);return Object(r.jsxs)(E,Object(l.a)(Object(l.a)({},d),{},{ref:o,disabled:a||c,primary:u,children:[Object(r.jsx)(M,{icon:w.e,spin:a,loading:a})," ",n]}))};function V(){var e=Object(p.a)(["\n  padding: 12px 16px;\n  margin: 4px;\n  border-radius: 2px;\n  font-size: 0.85rem;\n"]);return V=function(){return e},e}function P(){var e=Object(p.a)(["\n  width: 100%;\n  padding: 24px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 4px;\n  box-shadow: 0px 1px 1px 0px ",";\n  > label {\n    font-size: 0.75rem;\n    color: ",";\n  }\n  > input {\n    margin: 0 0 8px;\n  }\n  .action-panel {\n    display: flex;\n    flex-wrap: wrap;\n  }\n"]);return P=function(){return e},e}var T,N,_,R=b.default.div(P(),j.white,j.timberwolf,j.timberwolf,j.silver),F=Object(b.default)(S)(V()),U=function(){},D=function(e){var n=e.appId,t=e.channel,a=e.token,c=e.isJoined,o=e.isPublished,i=e.updateSettings,u=e.join,d=void 0===u?U:u,s=e.leave,p=void 0===s?U:s,b=e.publish,f=void 0===b?U:b,h=e.unpublish,j=void 0===h?U:h,O=Object(v.a)(e,["appId","channel","token","isJoined","isPublished","updateSettings","join","leave","publish","unpublish"]),g=function(e){return i(Object(m.a)({},e.target.name,e.target.value))};return Object(r.jsxs)(R,Object(l.a)(Object(l.a)({},O),{},{children:[Object(r.jsx)("label",{htmlFor:"appId",children:"App ID"}),Object(r.jsx)(x,{placeholder:"App ID",value:n,name:"appId",id:"appId","aria-label":"appId",onChange:g}),Object(r.jsx)("label",{htmlFor:"channel",children:"Channel"}),Object(r.jsx)(x,{placeholder:"channel",value:t,name:"channel",id:"channel","aria-label":"channel",onChange:g}),Object(r.jsx)("label",{htmlFor:"token",children:"Token"}),Object(r.jsx)(x,{placeholder:"token",value:a,name:"token",id:"token","aria-label":"token",onChange:g}),Object(r.jsxs)("div",{className:"action-panel",children:[Object(r.jsx)(F,{disabled:c,primary:!0,onClick:d,children:"JOIN"}),Object(r.jsx)(F,{disabled:!c,primary:!0,onClick:p,children:"LEAVE"}),Object(r.jsx)(F,{disabled:!c||o,primary:!0,onClick:f,children:"PUBLISH"}),Object(r.jsx)(F,{disabled:!o,primary:!0,onClick:j,children:"UNPUBLISH"})]})]}))};!function(e){e.LIVE="live",e.RTC="rtc"}(T||(T={})),function(e){e.H264="h264",e.VP8="vp8"}(N||(N={})),function(e){e.DEFAULT="480p_1",e._720P="720p_1",e._1080P="1080p_1"}(_||(_={}));var L=t(39),z=t.n(L);function B(){var e=Object(p.a)(["\n  color: ",";\n  font-size: 18px;\n"]);return B=function(){return e},e}function H(){var e=Object(p.a)(["\n  && {\n    font-size: 16px;\n    color: ",";\n    border-radius: 4px;\n    border: 1px solid ",";\n    padding: 14px 12px;\n    background: ",";\n    &:hover {\n      border: 1px solid ",";\n    }\n    &:focus,\n    &:focus-within {\n      box-shadow: none;\n      outline: none;\n      border: 1px solid ",";\n    }\n    .react-dropdown-select-dropdown {\n      border-radius: 4px;\n      padding: 4px 0;\n    }\n    .react-dropdown-select-content span {\n      display: flex;\n      align-items: center;\n    }\n    .react-dropdown-select-content input {\n      color: ",";\n      width: 0;\n      font-size: 16px;\n      &::placeholder {\n        color: ",";\n      }\n    }\n  }\n"]);return H=function(){return e},e}var $=Object(b.default)(z.a)(H(),j.charcoal,j["dark-gray"],j.white,j["dark-gray"],j["dark-gray"],j.charcoal,j.silver),J=Object(b.default)(g.a)(B(),j["dim-gray"]),X=function(e){var n=e.options,t=e.selectedOption,a=e.placeholder,c=e.name,o=e.onChange,i=e.className;return Object(r.jsx)($,{clearOnBlur:!0,className:i,searchable:!1,options:n,values:t?[t]:[],placeholder:a,color:"#2020e5",name:c,dropdownHandleRenderer:function(e){return e.state.dropdown?Object(r.jsx)(J,{icon:w.b}):Object(r.jsx)(J,{icon:w.a})},onChange:o})};function G(){var e=Object(p.a)(["\n  margin-right: 8px;\n"]);return G=function(){return e},e}function q(){var e=Object(p.a)(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  * {\n    cursor: pointer;\n  }\n"]);return q=function(){return e},e}var K=b.default.div(q()),Q=b.default.input(G()),W=function(e){var n=e.label,t=e.value,a=e.name,c=e.checked,o=e.onChange,i=void 0===o?function(){}:o,u=e.className;return Object(r.jsxs)(K,{className:u,children:[Object(r.jsx)(Q,{value:t,type:"radio",name:a,onChange:i,checked:c,"aria-label":n}),Object(r.jsx)("label",{htmlFor:a,children:n})]})};function Y(){var e=Object(p.a)(["\n  width: 100%;\n  padding: 24px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 4px;\n  box-shadow: 0px 1px 1px 0px ",";\n  > label {\n    font-size: 0.75rem;\n    color: ",";\n  }\n  > input,\n  .select {\n    margin: 0 0 8px;\n  }\n  .radio-buttons {\n    margin-bottom: 16px;\n    > div {\n      margin-right: 8px;\n    }\n  }\n"]);return Y=function(){return e},e}var Z=b.default.div(Y(),j.white,j.timberwolf,j.timberwolf,j.silver),ee=[{label:"default",value:_.DEFAULT},{label:"720p",value:_._720P},{label:"1080p",value:_._1080P}],ne=function(e){var n=e.uid,t=e.camera,a=e.mode,c=e.codec,o=e.cameraOptions,i=e.microphone,u=e.microphoneOptions,d=e.cameraResolution,s=e.isPlaying,p=void 0!==s&&s,b=e.updateSettings,f=Object(v.a)(e,["uid","camera","mode","codec","cameraOptions","microphone","microphoneOptions","cameraResolution","isPlaying","updateSettings"]),h=function(e){return b(Object(m.a)({},e.target.name,e.target.value))},j=function(e){return function(n){return b(Object(m.a)({},e,n[0].value))}};return Object(r.jsxs)(Z,Object(l.a)(Object(l.a)({},f),{},{children:[Object(r.jsx)("h3",{children:"ADVANCED SETTINGS"}),!1===p&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{htmlFor:"uid",children:"UID"}),Object(r.jsx)(x,{value:n,name:"uid",id:"uid","aria-label":"uid",onChange:h,placeholder:"uid"})]}),(null===o||void 0===o?void 0:o.length)>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{children:"CAMERA"}),Object(r.jsx)(X,{placeholder:"camera",className:"select",options:o,onChange:j("camera"),selectedOption:o.find((function(e){return e.value===t}))})]}),(null===u||void 0===u?void 0:u.length)>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{children:"MICROPHONE"}),Object(r.jsx)(X,{placeholder:"microphone",className:"select",options:u,onChange:j("microphone"),selectedOption:u.find((function(e){return e.value===i}))})]}),Object(r.jsx)("label",{children:"CAMERA RESOLUTION"}),Object(r.jsx)(X,{placeholder:"camera resolution",className:"select",options:ee,onChange:j("cameraResolution"),selectedOption:ee.find((function(e){return e.value===d}))}),!1===p&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{children:"Mode"}),Object(r.jsxs)("div",{className:"radio-buttons",children:[Object(r.jsx)(W,{label:"rtc",value:T.RTC,name:"mode",checked:T.RTC===a,onChange:h}),Object(r.jsx)(W,{label:"live",value:T.LIVE,name:"mode",checked:T.LIVE===a,onChange:h})]}),Object(r.jsx)("label",{children:"CODEC"}),Object(r.jsxs)("div",{className:"radio-buttons",children:[Object(r.jsx)(W,{label:"vp8",value:N.VP8,name:"codec",checked:N.VP8===c,onChange:h}),Object(r.jsx)(W,{label:"h264",value:N.H264,name:"codec",checked:N.H264===c,onChange:h})]})]})]}))},te=t(41),re=t.n(te),ae=t(42),ce=t.n(ae)()(re.a),oe=t(26),ie=function(e,n){oe.b.error(e,Object(l.a)({position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0},n))},ue=function(e,n){Object(oe.b)(e,Object(l.a)({position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0},n))},de=t(48);function le(){var e=Object(p.a)(["\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n"]);return le=function(){return e},e}function se(){var e=Object(p.a)(["\n  width: ",";\n  height: ",";\n"]);return se=function(){return e},e}function pe(){var e=Object(p.a)(["\n  width: ",";\n  .actions {\n    margin-top: 8px;\n    display: flex;\n    justify-content: center;\n    button:first-child {\n      margin-right: 8px;\n    }\n    button:last-child {\n      margin-left: 8px;\n    }\n  }\n"]);return pe=function(){return e},e}var be,fe=b.default.div(pe(),(function(e){var n;return null!==(n=e.$width)&&void 0!==n?n:"240px"})),he=Object(b.default)(de.a)(se(),(function(e){return e.$width}),(function(e){return e.$height})),je=Object(b.default)(S)(le()),me=function(e){var n=e.stream,t=e.label,a=e.width,c=e.height,o=e.isAudioMuted,i=e.isVideoMuted,u=e.onCameraClick,d=e.onMicrophoneClick,s=Object(v.a)(e,["stream","label","width","height","isAudioMuted","isVideoMuted","onCameraClick","onMicrophoneClick"]);return"number"===typeof a&&(a="".concat(a)),"number"===typeof c&&(c="".concat(c)),a&&!/(px|%)$/.test(a)&&(a="".concat(a,"px")),c&&!/(px|%)$/.test(c)&&(c="".concat(c,"px")),Object(r.jsxs)(fe,Object(l.a)(Object(l.a)({$width:a},s),{},{children:[Object(r.jsx)(he,{stream:n,label:t,$width:a,$height:c}),Object(r.jsxs)("div",{className:"actions",children:[Object(r.jsx)(je,{onClick:d,children:Object(r.jsx)(g.a,{icon:o?w.d:w.c})}),Object(r.jsx)(je,{onClick:u,children:Object(r.jsx)(g.a,{icon:i?w.g:w.f})})]})]}))},ve=function(e){return e},Oe=ce.createClient({mode:"live",codec:"vp8"}),xe=function(e){var n=e.deviceId;return{kind:e.kind,label:e.label,value:n}},ge=t(49),we=t(14),ye="UPDATE_LOCAL_STREAM",ke="UPDATE_REMOTE_STREAMS",Ce="CLEAR_ALL_STREAMS";!function(e){e.UnmuteAudio="unmute-audio",e.MuteAudio="mute-audio",e.UnmuteVideo="unmute-video",e.MuteVideo="mute-video"}(be||(be={}));var Ae=function(e){return{type:ye,payload:e}},Ie=function(e){return{type:be.MuteAudio,payload:e}},Ee=function(e){return{type:be.UnmuteAudio,payload:e}},Me=function(e){return{type:be.MuteVideo,payload:e}},Se=function(e){return{type:be.UnmuteVideo,payload:e}},Ve=function(e){var n=Object(we.b)(),t=function(e){return n(function(e){return{type:ke,payload:e}}(e))},r=function(e){t((function(n){var t=n.findIndex((function(n){return"".concat(n.getId())==="".concat(e)})),r=Object(ge.a)(n);return-1!==t&&(n[t].isPlaying()&&n[t].stop(),r.splice(t,1)),r}))};Object(a.useEffect)((function(){if(e)return e.on("stream-published",a),e.on("stream-added",o),e.on("stream-subscribed",c),e.on("peer-leave",l),e.on("stream-removed",s),e.on("unmute-audio",b),e.on("mute-audio",f),e.on("unmute-video",h),e.on("mute-video",j),e.on("error",p),function(){e.off("stream-published",a),e.off("stream-added",o),e.off("stream-subscribed",c),e.off("peer-leave",l),e.off("stream-removed",s),e.off("unmute-audio",b),e.off("mute-audio",f),e.off("unmute-video",h),e.off("mute-video",j),e.off("error",p)};function a(e){var t=e.stream;ue("local stream published"),n(Ae(t))}function c(e){var n=e.stream;ue("new stream added ".concat(n.getId())),t((function(e){return null===e||void 0===e?void 0:e.concat(n)}))}function o(e){return i.apply(this,arguments)}function i(){return(i=Object(d.a)(u.a.mark((function n(t){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.stream,n.next=3,null===e||void 0===e?void 0:e.subscribe(r,{video:!0,audio:!0});case 3:ue("new stream subscribed ".concat(r.getId()));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(e){var n=e.uid,t=e.reason;ue("user ".concat(n," leave because of ").concat(t)),r(n)}function s(e){var n=e.stream.getId();ue("remote stream was removed ".concat(n)),r(n)}function p(e){console.error(e),ie(e.reason)}function b(e){console.log("peerUnmuteAudio",e),n(Ee(e))}function f(e){console.log("peerMuteAudio",e),n(Ie(e))}function h(e){console.log("peerUnMuteVideo",e),n(Se(e))}function j(e){console.log("peerMuteVideo",e),n(Me(e))}n({type:Ce})}),[e])},Pe=t(87),Te=function(e,n,t){return new Promise((function(r,a){e.switchDevice(n,t,(function(){console.log("".concat(n," switch success")),r("".concat(n," switch success"))}),(function(e){console.error(e),a(e)}))}))},Ne=t(88),_e=t(89),Re=t(90),Fe={xs:0,sm:576,md:768,lg:992,xl:1200},Ue=.02,De={up:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Fe[e];if(void 0===t)throw new Error("invalid breakpint: ".concat(e));return"@media (min-".concat(n?"height":"width",": ").concat(t,"px)")},down:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object.keys(Fe),r=t.indexOf(e);if(-1===r)throw new Error("invalid breakpint: ".concat(e));var a=Fe[t[r+1]];if(void 0===a)throw new Error("invalid breakpint: ".concat(e));return"@media (max-".concat(n?"height":"width",": ").concat(a-Ue,"px)")},between:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Fe[e],a=Fe[n];if(void 0===r||void 0===a)throw new Error("invalid breakpint: ".concat(e," and ").concat(n));return"@media (max-".concat(t?"height":"width",": ").concat(a-Ue,"px) and (min-").concat(t?"height":"width",": ").concat(r,"px)")}},Le=Object.keys(De).reduce((function(e,n){return e[n]=function(e){return function(n,t,r){return"string"===typeof t?function(a){return a.theme.MediaBreakpoint[e](n,t,r)}:function(r){return e=e,r.theme.MediaBreakpoint[e](n,t)}}}(n),e}),{});function ze(){var e=Object(p.a)(["\n  z-index: 20000;\n  top: 30px;\n"]);return ze=function(){return e},e}function Be(){var e=Object(p.a)(["\n      "," {\n        flex-flow: column-reverse;\n      }\n    "]);return Be=function(){return e},e}function He(){var e=Object(p.a)(["\n  ",";\n"]);return He=function(){return e},e}function $e(){var e=Object(p.a)(["\n  max-width: 1280px;\n  margin: auto;\n  padding-bottom: 36px;\n  .advanced-settings {\n    margin-top: 4px;\n  }\n  .local-player {\n    margin-bottom: 8px;\n  }\n  .first-row {\n    padding-top: 36px;\n  }\n  .remote-players {\n    margin-bottom: 8px;\n    display: flex;\n    flex-wrap: wrap;\n    .remote-player {\n      margin: 8px;\n    }\n    .remote-player:first-child {\n      margin-left: 0px;\n    }\n    .remote-player:last-child {\n      margin-left: 0px;\n    }\n  }\n"]);return $e=function(){return e},e}function Je(){var e=Object(p.a)(["\n  height: 100%;\n  background: ",";\n"]);return Je=function(){return e},e}var Xe=function(e){return function(n){var t=n.children,a=n.stream,c=Object(v.a)(n,["children","stream"]),o=Object(we.c)((function(e){return e.stream.map[a.getId()]})),i=o.isAudioMuted,u=o.isVideoMuted,d=Object(we.b)();return Object(r.jsx)(e,Object(l.a)(Object(l.a)({},c),{},{stream:a,isAudioMuted:i,isVideoMuted:u,onCameraClick:function(){var e=a.getId();u?(a.unmuteVideo(),d(Se({uid:e,type:be.UnmuteVideo}))):(a.muteVideo(),d(Me({uid:e,type:be.MuteVideo})))},onMicrophoneClick:function(){var e=a.getId();i?(a.unmuteAudio(),d(Ee({uid:e,type:be.UnmuteAudio}))):(a.muteAudio(),d(Ie({uid:e,type:be.MuteAudio})))},children:t}))}}(me),Ge=b.default.div(Je(),j["page-gray"]),qe=b.default.div($e()),Ke=Object(b.default)(Ne.a)(He(),(function(e){return e.$reverse&&Object(b.css)(Be(),Le.down("sm"))})),Qe=Object(b.default)(oe.a)(ze()),We={appId:"3c8f8535f5ca4d23a2c6d550745c1141",channel:"test",token:"00634e5cdd2dd0547368b549ddbc83f0f8bIAAudrtcvrf30S/6wsUANYFutkGz8qtFL4zCUXKuqmWCkwx+f9gAAAAAEACpE93I4invXwEAAQDiKe9f",uid:"",camera:"",microphone:"",cameraResolution:_.DEFAULT,mode:T.RTC,codec:N.VP8},Ye=function(){var e=Object(a.useState)(We),n=Object(s.a)(e,2),t=n[0],c=n[1],o=t.appId,i=t.channel,p=t.token,b=t.uid,f=t.camera,h=t.microphone,j=t.cameraResolution,m=t.mode,v=t.codec,O=Object(a.useState)(!1),x=Object(s.a)(O,2),g=x[0],w=x[1],y=Object(a.useState)(!1),k=Object(s.a)(y,2),C=k[0],A=k[1],I=Object(a.useState)(null),E=Object(s.a)(I,2),M=E[0],S=E[1],V=Object(we.c)((function(e){return e.stream})),P=V.local,T=V.remote;Ve(M);var N=function(e,n){var t,r;e=null!==(t=e)&&void 0!==t?t:Oe,n=null!==(r=n)&&void 0!==r?r:ve;var c=Object(a.useState)([]),o=Object(s.a)(c,2),i=o[0],l=o[1],p=Object(a.useState)([]),b=Object(s.a)(p,2),f=b[0],h=b[1];return Object(a.useEffect)((function(){if(e)return e.on("camera-changed",n),e.on("recording-device-changed",r),n(),r(),function(){var t,a;null===(t=e)||void 0===t||t.off("camera-changed",n),null===(a=e)||void 0===a||a.off("recording-device-changed",r)};function n(){return t.apply(this,arguments)}function t(){return(t=Object(d.a)(u.a.mark((function n(){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return console.log("onCameraChange"),n.prev=3,n.next=6,e.getCameras();case 6:(t=n.sent).length&&l(t),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(3),console.error(n.t0.message),l([]);case 14:case"end":return n.stop()}}),n,null,[[3,10]])})))).apply(this,arguments)}function r(){return a.apply(this,arguments)}function a(){return(a=Object(d.a)(u.a.mark((function n(){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return console.log("onRecordingDeviceChange"),n.prev=3,n.next=6,e.getRecordingDevices();case 6:(t=n.sent).length&&h(t),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(3),console.error(n.t0.message),h([]);case 14:case"end":return n.stop()}}),n,null,[[3,10]])})))).apply(this,arguments)}}),[e]),{cameras:i.filter((function(e){return!!e.deviceId})).map(n),microphones:f.filter((function(e){return!!e.deviceId})).map(n)}}(M,xe),_=N.cameras,R=N.microphones;Object(a.useEffect)((function(){var e,n,t,r;!f&&_.length>0&&F({camera:null!==(e=null===(n=_.find((function(e){return"default"===e.value})))||void 0===n?void 0:n.value)&&void 0!==e?e:_[0].value});!h&&R.length>0&&F({microphone:null!==(t=null===(r=R.find((function(e){return"default"===e.value})))||void 0===r?void 0:r.value)&&void 0!==t?t:R[0].value})}),[_,R]),function(e,n){var t=n.camera,r=n.microphone,c=Object(Pe.a)(t),o=Object(Pe.a)(r);Object(a.useEffect)((function(){function n(){return(n=Object(d.a)(u.a.mark((function n(){var a,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==e){n.next=2;break}return n.abrupt("return");case 2:if(o===r||!r){n.next=6;break}return null===(a=e.getAudioTrack())||void 0===a||a.stop(),n.next=6,Te(e,"audio",r);case 6:if(c===t||!t){n.next=10;break}return null===(i=e.getVideoTrack())||void 0===i||i.stop(),n.next=10,Te(e,"video",t);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t,r,c,o])}(P,{microphone:h,camera:f}),function(e,n){var t=Object(Pe.a)(n);Object(a.useEffect)((function(){null!==e&&t!==n&&n&&e.setVideoProfile(n)}),[t,n])}(P,j),function(e){var n=Object(we.b)();Object(a.useEffect)((function(){null!==e&&e.on("player-status-change",(function(t){console.log("playerStatusChange",t),n(Ae(e))}))}),[e])}(P);var F=function(e){c(Object(l.a)(Object(l.a)({},t),e))};return Object(r.jsxs)(Ge,{children:[Object(r.jsx)(qe,{children:Object(r.jsx)(_e.a,{fluid:!0,children:Object(r.jsx)(Ke,{className:"first-row",children:Object(r.jsx)(Re.a,{md:{offset:1,span:10},children:Object(r.jsxs)(Ke,{$reverse:!0,children:[Object(r.jsxs)(Re.a,{md:6,children:[Object(r.jsx)(D,{appId:o,channel:i,token:p,isJoined:g,isPublished:C,join:Object(d.a)(u.a.mark((function e(){var n,t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&i&&p){e.next=2;break}return e.abrupt("return",ie("please fill ".concat(null===(n=[{text:"AppId",value:o},{text:"Channel",value:i},{text:"Token",value:p}].find((function(e){return!e.value})))||void 0===n?void 0:n.text)));case 2:if(t=ce.createClient({mode:m,codec:v}),o&&i&&p){e.next=5;break}return e.abrupt("return");case 5:return S(t),e.prev=6,e.next=9,t.init(o);case 9:return e.next=11,t.join(p,i,""===b?null:b);case 11:return r=ce.createStream({streamID:b||"local-user",video:!0,audio:!0,screen:!1,cameraId:f||void 0,microphoneId:h||void 0}),w(!0),e.next=15,r.init();case 15:return e.next=17,t.publish(r);case 17:A(!0),ue("join channel ".concat(i)),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(6),console.error(e.t0),ie(e.t0),S(null);case 26:case"end":return e.stop()}}),e,null,[[6,21]])}))),leave:Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P&&M){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,P.isPlaying()&&P.stop(),P.close(),!C){e.next=8;break}return e.next=8,M.unpublish(P);case 8:return A(!1),e.next=11,M.leave();case 11:w(!1),S(null),ue("leave channel ".concat(i)),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.error(e.t0),ie(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,16]])}))),publish:Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P&&M){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,M.publish(P);case 5:A(!0),ue("stream published ".concat(P.getId())),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),ie(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),unpublish:Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P&&M){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,M.unpublish(P);case 4:A(!1),ue("stream unpublished ".concat(P.getId()));case 6:case"end":return e.stop()}}),e)}))),updateSettings:F}),Object(r.jsx)(ne,{className:"advanced-settings",uid:b,camera:f,cameraOptions:_,microphone:h,microphoneOptions:R,cameraResolution:j,mode:m,codec:v,isPlaying:null===P||void 0===P?void 0:P.isPlaying(),updateSettings:F})]}),Object(r.jsxs)(Re.a,{md:6,children:[P&&Object(r.jsx)(Xe,{className:"local-player",stream:P,label:P.getId(),width:"100%",height:"330"}),Object(r.jsx)("div",{className:"remote-players",children:T.map((function(e){return Object(r.jsx)(Xe,{className:"remote-player",stream:e,label:e.getId()},e.getId())}))})]})]})})})})}),Object(r.jsx)(Qe,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0,pauseOnHover:!0})]})};function Ze(){var e=Object(p.a)(["\nhtml {\n  font-size: 16px;\n  background-color: ",";\n}\nbody {\n  color: #484848;\n  font-size: 1rem;\n  line-height: 1.5;\n  font-weight: 400;\n}\n* {\n  box-sizing: border-box;\n}\n"]);return Ze=function(){return e},e}var en=Object(b.createGlobalStyle)(Ze(),j.white),nn=t(45),tn=t(17),rn=t(46),an=function(e){var n;return!!(null===(n=e.getAudioTrack())||void 0===n?void 0:n.muted)},cn=function(e){var n;return!!(null===(n=e.getVideoTrack())||void 0===n?void 0:n.muted)},on={local:null,remote:[],map:{}},un=function(e){return e.reduce((function(e,n){return e[n.getId()]=Object(l.a)(Object(l.a)({},n),{},{isAudioMuted:an(n),isVideoMuted:cn(n)}),e}),{})},dn=Object(tn.c)({stream:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ye:var t=n.payload?e.remote.concat(n.payload):e.remote;return Object(l.a)(Object(l.a)({},e),{},{local:n.payload,map:un(t)});case ke:var r=n.payload(e.remote);return Object(l.a)(Object(l.a)({},e),{},{remote:r,map:un(e.local?r.concat(e.local):r)});case be.MuteAudio:var a=e.map[n.payload.uid];return Object(l.a)(Object(l.a)({},e),{},{map:Object(l.a)(Object(l.a)({},e.map),{},Object(m.a)({},n.payload.uid,Object(l.a)(Object(l.a)({},a),{},{isAudioMuted:!0})))});case be.UnmuteAudio:var c=e.map[n.payload.uid];return Object(l.a)(Object(l.a)({},e),{},{map:Object(l.a)(Object(l.a)({},e.map),{},Object(m.a)({},n.payload.uid,Object(l.a)(Object(l.a)({},c),{},{isAudioMuted:!1})))});case be.MuteVideo:var o=e.map[n.payload.uid];return Object(l.a)(Object(l.a)({},e),{},{map:Object(l.a)(Object(l.a)({},e.map),{},Object(m.a)({},n.payload.uid,Object(l.a)(Object(l.a)({},o),{},{isVideoMuted:!0})))});case be.UnmuteVideo:var i=e.map[n.payload.uid];return Object(l.a)(Object(l.a)({},e),{},{map:Object(l.a)(Object(l.a)({},e.map),{},Object(m.a)({},n.payload.uid,Object(l.a)(Object(l.a)({},i),{},{isVideoMuted:!1})))});case Ce:return on;default:return e}}}),ln=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))},sn=(t(81),t(82),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=[rn.a],t=[tn.a.apply(void 0,n)],r=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25})||tn.d,a=Object(tn.e)(dn,e,r.apply(void 0,t));return a}());o.a.render(Object(r.jsx)(we.a,{store:sn,children:Object(r.jsxs)(b.ThemeProvider,{theme:{colors:f,MediaBreakpoint:De},children:[Object(r.jsx)(nn.Normalize,{}),Object(r.jsx)(en,{}),Object(r.jsx)(Ye,{})]})}),document.getElementById("root")),ln()}},[[83,1,2]]]);
//# sourceMappingURL=main.d77e34e3.chunk.js.map