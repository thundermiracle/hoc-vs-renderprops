(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{515:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.default=function(e){return function(t){function n(e){var t,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,(t=!(r=a(n).call(this,e))||"object"!==u(r)&&"function"!=typeof r?s(o):r).handleMouseMove=t.handleMouseMove.bind(s(s(t))),t.state={x:0,y:0},t}var o,l,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,r.a.PureComponent),o=n,(l=[{key:"handleMouseMove",value:function(e){this.setState({x:e.clientX,y:e.clientY})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:200,background:"green"},onMouseMove:this.handleMouseMove},r.a.createElement(e,i({},this.props,{mouse:this.state})))}}])&&c(o.prototype,l),p&&c(o,p),n}()}},869:function(e,t,n){__NEXT_REGISTER_PAGE("/hoc/withMouse",function(){return e.exports=n(515),{page:e.exports.default}})}},[[869,1,0]]]);