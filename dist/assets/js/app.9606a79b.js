(function(e){function t(t){for(var o,a,s=t[0],c=t[1],d=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"0688":function(e,t,n){},"2aee":function(e,t,n){"use strict";var o=n("0688"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h1",[e._v("摸鱼贪吃蛇")]),n("h2",[e._v("得分:"+e._s(e.score))])]),n("div",{staticClass:"hello"},[n("div",{staticClass:"table",style:{width:17*e.size+"px"},on:{"keyup:click":function(t){return t.ctrlKey?e.keyEvent(t):null}}},e._l(e.coordinate,(function(t,o){return n("div",{key:o,staticClass:"em",style:{float:(t.y,e.size,"")},attrs:{item:t.x+"-"+t.y}},[n("div",{class:{food:"food"==t.type,"snake-header":"snakeHeader"==t.type,"snake-body":"snakeBody"==t.type}})])})),0)]),n("div",[n("h2",[e._v(e._s(e.msg))])]),n("div",{staticClass:"note"},[e._v(" 游戏说明：空格键space 暂停游戏,方向键开始游戏 ")])])},s=[],c=(n("d81d"),{name:"HelloWorld",data:function(){return{score:0,size:20,coordinate:[],food:{},snake:[],direction:"down",moveTimer:"",msg:"按方向键开始游戏",speed:200,gameover:!0}},watch:{food:{handler:function(e){var t=this;this.coordinate.map((function(n){n.x===e.x&&n.y===e.y&&("snakeHeader"===n.type||"snakeBody"===n.type?t.randomFood():n.type="food")}))},immediate:!0},snake:{handler:function(e){console.time("处理时间计算"),this.coordinate.map((function(t){var n=!1;e.map((function(e,o){t.x===e.x&&t.y===e.y&&(t.type=0===o?"snakeHeader":"snakeBody",n=!0)})),n||"food"===t.type||(t.type="")})),console.timeEnd("处理时间计算")},immediate:!0}},mounted:function(){this.createXy(this.size),this.randomFood(),this.initSnakeXy(),this.keyEvent()},methods:{createXy:function(e){for(var t=1;t<=e;t++)for(var n=1;n<=e;n++){var o={x:t,y:n,type:""};this.coordinate.push(o)}},randomFood:function(){this.food={x:this.random(1,this.size),y:this.random(1,this.size),type:"food"}},initSnakeXy:function(){this.snake=[{x:3,y:3},{x:3,y:4},{x:3,y:5}]},snakeMove:function(){var e=this;clearInterval(this.moveTimer),this.moveTimer=setInterval((function(){var t=e.snake[0];"down"===e.direction&&e.updateSnake({x:t.x+1,y:t.y}),"right"===e.direction&&e.updateSnake({x:t.x,y:t.y+1}),"up"===e.direction&&e.updateSnake({x:t.x-1,y:t.y}),"left"===e.direction&&e.updateSnake({x:t.x,y:t.y-1})}),this.speed)},updateSnake:function(e){if(e.x<1||e.x>this.size||e.y<1||e.y>this.size)return clearInterval(this.moveTimer),this.msg="GameOver！",void(this.gameover=!0);e.x===this.food.x&&e.y===this.food.y?(this.snake.unshift(e),this.randomFood(),this.score++):(this.snake.unshift(e),this.snake.pop())},keyEvent:function(e){var t=this;document.onkeydown=function(e){t.gameover&&(t.gameover=!1,t.initSnakeXy(),t.score=0);var n=e||window.event||arguments.callee.caller.arguments[0];switch(t.msg="游戏开始",n&&n.keyCode){case 37:console.info("37=左键"),"right"!==t.direction&&(t.direction="left",t.snakeMove());break;case 38:console.info("38=上键"),"down"!==t.direction&&(t.direction="up",t.snakeMove());break;case 39:console.info("39=右键"),"left"!==t.direction&&(t.direction="right",t.snakeMove());break;case 40:console.info("40下键"),"up"!==t.direction&&(t.direction="down",t.snakeMove());break;case 32:console.info("32空格"),clearInterval(t.moveTimer),t.msg="游戏已暂停";break;default:break}}},random:function(e,t){return Math.floor(Math.random()*(t-e))+e}}}),d=c,u=(n("2aee"),n("2877")),l=Object(u["a"])(d,a,s,!1,null,"69834714",null),f=l.exports,p={name:"App",components:{HelloWorld:f}},y=p,h=(n("034f"),Object(u["a"])(y,r,i,!1,null,null,null)),v=h.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.9606a79b.js.map