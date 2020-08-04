module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Object.defineProperty(t,"__esModule",{value:!0});var v=n(2),y=n.n(v),m=n(3),O=n.n(m),S=n(4),w=n.n(S),C=n(5),x=n.n(C),k=n(6),j=(n.n(k),{Component:O.a.oneOfType([O.a.string,O.a.elementType]),defaultValue:O.a.string,disabled:O.a.bool,maxOptions:O.a.number,onBlur:O.a.func,onChange:O.a.func,onKeyDown:O.a.func,onRequestOptions:O.a.func,options:O.a.arrayOf(O.a.string),regex:O.a.string,matchAny:O.a.bool,minChars:O.a.number,requestOnlyIfNoOptions:O.a.bool,spaceRemovers:O.a.arrayOf(O.a.string),spacer:O.a.string,trigger:O.a.string,value:O.a.string,offsetX:O.a.number,offsetY:O.a.number,passThroughEnter:O.a.bool}),P={Component:"textarea",defaultValue:"",disabled:!1,maxOptions:6,onBlur:function(){},onChange:function(){},onKeyDown:function(){},onRequestOptions:function(){},options:[],regex:"^[A-Za-z0-9\\-_]+$",matchAny:!1,minChars:0,requestOnlyIfNoOptions:!0,spaceRemovers:[",",".","!","?"],spacer:" ",trigger:"@",offsetX:0,offsetY:0,value:null,passThroughEnter:!1},L=function(e){function t(e){var n;return u(this,t),n=f(this,h(t).call(this,e)),n.isTrigger=n.isTrigger.bind(d(d(n))),n.getMatch=n.getMatch.bind(d(d(n))),n.handleChange=n.handleChange.bind(d(d(n))),n.handleKeyDown=n.handleKeyDown.bind(d(d(n))),n.handleResize=n.handleResize.bind(d(d(n))),n.handleSelection=n.handleSelection.bind(d(d(n))),n.updateCaretPosition=n.updateCaretPosition.bind(d(d(n))),n.updateHelper=n.updateHelper.bind(d(d(n))),n.resetHelper=n.resetHelper.bind(d(d(n))),n.renderAutocompleteList=n.renderAutocompleteList.bind(d(d(n))),n.state={helperVisible:!1,left:0,matchLength:0,matchStart:0,options:[],selection:0,top:0,value:null},n.recentValue=e.defaultValue,n.enableSpaceRemovers=!1,n.refInput=Object(v.createRef)(),n}return g(t,e),p(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentDidUpdate",value:function(e){var t=this.props.options,n=this.state.caret;t.length!==e.options.length&&this.updateHelper(this.recentValue,n,t)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"getMatch",value:function(e,t,n){for(var r=this.props,o=r.trigger,a=r.matchAny,i=r.regex,s=new RegExp(i),u=o.length,c=o.match(s),p=t-1;p>=0;--p){var f=e.substring(p,t),h=f.match(s),g=-1;if(u>0){var b=c?p:p-u+1;if(b<0)return null;if(this.isTrigger(e,b)&&(g=b+u),!h&&g<0)return null}else{if(h&&p>0)continue;if(g=0===p&&h?0:p+1,t-g==0)return null}if(g>=0){var d=function(){var r=e.substring(g,t),o=n.filter(function(e){var t=e.toLowerCase().indexOf(r.toLowerCase());return-1!==t&&(a||0===t)}),i=r.length;return{v:{matchStart:g,matchLength:i,options:o}}}();if("object"===l(d))return d.v}}return null}},{key:"isTrigger",value:function(e,t){var n=this.props.trigger;return!n||!n.length||e.substr(t,n.length)===n}},{key:"handleChange",value:function(e){var t=this.props,n=t.onChange,r=t.options,o=t.spaceRemovers,a=t.spacer,i=t.value,s=this.recentValue,l=e.target.value,u=x()(e.target).end;if(l.length||this.setState({helperVisible:!1}),this.recentValue=l,this.setState({caret:u,value:e.target.value}),!l.length||!u)return n(e.target.value);if(this.enableSpaceRemovers&&o.length&&l.length>2&&a.length){for(var c=0;c<Math.max(s.length,l.length);++c)if(s[c]!==l[c]){if(c>=2&&l[c-1]===a&&-1===o.indexOf(l[c-2])&&-1!==o.indexOf(l[c])&&this.getMatch(l.substring(0,c-2),u-3,r)){var p="".concat(l.slice(0,c-1)).concat(l.slice(c,c+1)).concat(l.slice(c-1,c)).concat(l.slice(c+1));return this.updateCaretPosition(c+1),this.refInput.current.value=p,i||this.setState({value:p}),n(p)}break}this.enableSpaceRemovers=!1}return this.updateHelper(l,u,r),i||this.setState({value:e.target.value}),n(e.target.value)}},{key:"handleKeyDown",value:function(e){var t=this.state,n=t.helperVisible,r=t.options,o=t.selection,a=this.props,i=a.onKeyDown,s=a.passThroughEnter;if(n)switch(e.keyCode){case 27:e.preventDefault(),this.resetHelper();break;case 38:e.preventDefault(),this.setState({selection:(r.length+o-1)%r.length});break;case 40:e.preventDefault(),this.setState({selection:(o+1)%r.length});break;case 14:case 13:s||e.preventDefault(),this.handleSelection(o);break;case 9:this.handleSelection(o);break;default:i(e)}else i(e)}},{key:"handleResize",value:function(){this.setState({helperVisible:!1})}},{key:"handleSelection",value:function(e){var t=this.state,n=t.matchStart,r=t.matchLength,o=t.options,a=this.props.spacer,i=o[e],s=this.recentValue,l=s.substring(0,n),u=s.substring(n+r),c={target:this.refInput.current};c.target.value="".concat(l).concat(i).concat(a).concat(u),this.handleChange(c),this.resetHelper(),this.updateCaretPosition(l.length+i.length+1),this.enableSpaceRemovers=!0}},{key:"updateCaretPosition",value:function(e){var t=this;this.setState({caret:e},function(){return Object(C.setCaretPosition)(t.refInput.current,e)})}},{key:"updateHelper",value:function(e,t,n){var r=this.refInput.current,o=this.getMatch(e,t,n);if(o){var a=w()(r,t),s=r.getBoundingClientRect(),l=a.top+r.offsetTop,u=Math.min(a.left+r.offsetLeft-10,r.offsetLeft+s.width-100),c=this.props,p=c.minChars,f=c.onRequestOptions,h=c.requestOnlyIfNoOptions;o.matchLength>=p&&(o.options.length>1||1===o.options.length&&o.options[0].length!==o.matchLength)?this.setState(i({helperVisible:!0,top:l,left:u},o)):(h&&o.options.length||f(e.substr(o.matchStart,o.matchLength)),this.resetHelper())}else this.resetHelper()}},{key:"resetHelper",value:function(){this.setState({helperVisible:!1,selection:0})}},{key:"renderAutocompleteList",value:function(){var e=this,t=this.state,n=t.helperVisible,r=t.left,o=t.matchStart,a=t.matchLength,i=t.options,s=t.selection,l=t.top,u=t.value;if(!n)return null;var c=this.props,p=c.maxOptions,f=c.offsetX,h=c.offsetY;if(0===i.length)return null;if(s>=i.length)return this.setState({selection:0}),null;var g=0===p?i.length:p,b=i.slice(0,g).map(function(t,n){var r=t.toLowerCase().indexOf(u.substr(o,a).toLowerCase());return y.a.createElement("li",{className:n===s?"active":null,key:t,onClick:function(){e.handleSelection(n)},onMouseEnter:function(){e.setState({selection:n})}},t.slice(0,r),y.a.createElement("strong",null,t.substr(r,a)),t.slice(r+a))});return y.a.createElement("ul",{className:"react-autocomplete-input",style:{left:r+f,top:l+h}},b)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.defaultValue,a=e.disabled,i=e.onBlur,s=e.value,l=o(e,["Component","defaultValue","disabled","onBlur","value"]),u=this.state.value,c=Object.assign({},l);Object.keys(this.constructor.propTypes).forEach(function(e){delete c[e]});var p="";return void 0!==s&&null!==s?p=s:u?p=u:n&&(p=n),y.a.createElement("span",null,y.a.createElement(t,r({disabled:a,onBlur:i,onChange:this.handleChange,onKeyDown:this.handleKeyDown,ref:this.refInput,value:p},c)),this.renderAutocompleteList())}}]),t}(y.a.Component);L.propTypes=j,L.defaultProps=P,t.default=L},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("textarea-caret")},function(e,t){e.exports=require("get-input-selection")},function(e,t){}]);