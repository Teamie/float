!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var n=e.slice(1),i=t[e[0]];return function(t,e,r){i.apply(this,[t,e,r].concat(n))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=i(r),a=n(2),s=i(a),u=n(5),l=i(u),f=n(12),c=i(f);n(13),e["default"]=o["default"].module("float",[]).directive("flContainer",s["default"]).directive("flItem",l["default"]).factory("Mapper",c["default"])},function(t,e){t.exports=angular},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e["default"]=function(){return{restrict:"A",bindToController:{options:"=flContainer",isEditable:"="},controllerAs:"flContainer",controller:["Mapper",function(){function t(e){r(this,t),this.flItems=[],this.container=new s["default"]([]),this.mapper=new e(this.options)}return o(t,[{key:"initItem",value:function(t){this.container.addItem(t.item),this.flItems.push(t),this.render()}},{key:"render",value:function(){var t=this;this.container.removeGaps(),this.flItems.forEach(function(e){return e.render(t.mapper.layout2px(e.item))})}},{key:"onItemMove",value:function(t,e){this.container.editItem(t,this.mapper.px2pos(e)),this.render()}},{key:"onItemResize",value:function(t,e){this.container.editItem(t,this.mapper.px2layout(e)),this.render()}}]),t}()]}};var a=n(3),s=i(a)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(u){r=!0,o=u}finally{try{!i&&s["return"]&&s["return"]()}finally{if(r)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(4),u=i(s),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r(this,t),this.rows=this.itemsToRows(e)}return a(t,[{key:"itemsToRows",value:function(t){var e=this,n={};return t.forEach(function(t){t.top in n?n[t.top].push(t):n[t.top]=[t]}),Object.entries(n).map(function(t){var n=o(t,2),i=n[0],r=n[1];return new u["default"](r,Number(i),e)}).sort(function(t,e){return t.top-e.top})}},{key:"addItem",value:function(t){var e=void 0,n=void 0;for(e=0;e<this.rows.length;e++){if(!(this.rows[e].top<t.top)){this.rows[e].top===t.top&&(n=this.rows[e]);break}t.top+=this.rows[e].getOverlap(t,!1)}n&&!n.getOverlap(t,!0)?n.addItem(t):this.rows.splice(e,0,new u["default"]([t],t.top,this));for(var i=e+1;i<this.rows.length;i++)this.shiftRows(this.rows.slice(i),this.rows[i].getOverlap(t,!0))}},{key:"editItem",value:function(t,e){this.removeItem(t),this.addItem(Object.assign(t,e))}},{key:"removeItem",value:function(t){var e=t.row;e.removeItem(t),0===e.items.length&&this.rows.splice(this.rows.indexOf(e),1)}},{key:"shiftRows",value:function(t,e){t.forEach(function(t){return t.setTop(t.top+e)})}},{key:"removeGaps",value:function(){if(0!==this.rows.length){0!==this.rows[0].top&&this.shiftRows(this.rows,-this.rows[0].top);for(var t=0,e=1;e<this.rows.length;e++){t=Math.max(t,this.rows[e-1].top+this.rows[e-1].getHeight());var n=this.rows[e].top-t;n>0&&this.shiftRows(this.rows.slice(e),-n)}}}}]),t}();e["default"]=l},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e,i){var r=this;n(this,t),this.top=i,this.items=e,e.forEach(function(t){return t.row=r})}return i(t,[{key:"addItem",value:function(t){this.items.push(t),t.row=this}},{key:"removeItem",value:function(t){var e=this.items.indexOf(t);t.row=null,this.items.splice(e,1)}},{key:"setTop",value:function(t){var e=this;this.top=t,this.items.forEach(function(t){return t.top=e.top})}},{key:"getHeight",value:function(){return this.items.reduce(function(t,e){return Math.max(t,e.height)},0)}},{key:"getOverlap",value:function(t,e){var n=0;return this.items.forEach(function(i){i.doesOverlap(t)&&(n=e?Math.max(n,t.top+t.height-i.top):Math.max(n,i.top+i.height-t.top))}),n}}]),t}();e["default"]=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(u){r=!0,o=u}finally{try{!i&&s["return"]&&s["return"]()}finally{if(r)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e["default"]=function(){return{restrict:"A",require:["^flContainer","flItem"],bindToController:{layout:"=flItem"},controllerAs:"flItem",controller:["$element",function(){function t(e){r(this,t),this.$element=e,this.item=new f["default"](this.layout.left,this.layout.top,this.layout.width,this.layout.height)}return a(t,[{key:"render",value:function(t){this.$element.css(t)}}]),t}()],link:function(t,e,n,i){function r(){var t=(0,u["default"])("<div>").addClass("fl-drag-indicator fl-item"),n=(0,u["default"])("<div>").addClass("fl-drag-clone");n.append(t),e.draggable({cursor:"move",cancel:"[fl-item] > *",containment:"parent",start:function(){e.children().clone().appendTo(t)},drag:function(e,n){var i=l.mapper.pos2px(l.mapper.px2pos(n.position));t.css({left:i.left-n.position.left,top:i.top-n.position.top})},stop:function(e,n){t.empty(),l.onItemMove(f.item,n.position)},helper:function(){return n.css(l.mapper.layout2px(f.item)),t.css(l.mapper.layout2px(f.item)),n}})}function a(){var t=void 0;e.resizable({containment:"parent",handles:"e, se, s, sw, w",classes:{"ui-resizable-handle":"fl-resizable","ui-resizable-se":""},start:function(){t=(0,u["default"])("<div>").addClass("fl-resize-indicator fl-item"),e.children().clone().appendTo(t),t.css(l.mapper.layout2px(f.item)),t.appendTo("[fl-container]")},resize:function(e,n){t.css(l.mapper.layout2px(l.mapper.px2layout(Object.assign(n.position,n.size))))},stop:function(e,n){t.remove(),l.onItemResize(f.item,Object.assign(n.position,n.size))}})}var s=o(i,2),l=s[0],f=s[1];e.addClass("fl-item"),r(),a(),l.initItem(f)}}};var s=n(6),u=i(s),l=n(7),f=i(l);n(8)},function(t,e){t.exports=jQuery},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e,i,r,o){n(this,t),this.left=e,this.top=i,this.width=r,this.height=o,this.row=null}return i(t,[{key:"doesOverlap",value:function(t){return!(this.left+this.width<=t.left||t.left+t.width<=this.left||this.top+this.height<=t.top||t.top+t.height<=this.top)}}]),t}();e["default"]=r},function(t,e){},,,,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){return o}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e["default"]=i;var o=function(){function t(e){var i=e.width,r=void 0===i?768:i,o=e.rowHeight,a=void 0===o?15:o,s=e.numColumns,u=void 0===s?60:s,l=e.buffer,f=void 0===l?4:l,c=e.minHeight,h=void 0===c?4:c,p=e.minWidth,d=void 0===p?10:p;n(this,t),this.numColumns=u,this.buffer=f,this.rowHeight=a,this.minHeight=h,this.minWidth=d,this.colWidth=(r-(u-1)*f)/u+f}return r(t,[{key:"px2pos",value:function(t){var e=t.left,n=t.top;return{left:this._closestMultiple(e,this.colWidth),top:this._closestMultiple(n,this.rowHeight)}}},{key:"px2layout",value:function(t){var e=t.left,n=t.top,i=t.width,r=t.height;return Object.assign(this.px2pos({left:e,top:n}),this.checkMinimum({width:this._closestMultiple(i+this.buffer,this.colWidth),height:this._closestMultiple(r+this.buffer,this.rowHeight)}))}},{key:"pos2px",value:function(t){var e=t.left,n=t.top;return{left:e*this.colWidth,top:n*this.rowHeight}}},{key:"layout2px",value:function(t){var e=t.left,n=t.top,i=t.width,r=t.height;return Object.assign(this.pos2px({left:e,top:n}),{width:i*this.colWidth-this.buffer,height:r*this.rowHeight-this.buffer})}},{key:"checkMinimum",value:function(t){var e=t.width,n=t.height;return{width:Math.max(this.minWidth,e),height:Math.max(this.minHeight,n)}}},{key:"_closestMultiple",value:function(t,e){var n=t/e,i=Math.floor(n),r=Math.ceil(n);return n-i>r-n?r:i}}]),t}()},8]));