(function(e){function t(t){for(var o,a,s=t[0],u=t[1],l=t[2],p=0,d=[];p<s.length;p++)a=s[p],r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1466:function(e,t,n){"use strict";var o=n("a1bf"),r=n.n(o);r.a},"156c":function(e,t,n){"use strict";var o=n("cde0"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("d847"),r=n.n(o),i=(n("cadf"),n("551c"),n("097d"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[e._m(0),n("p",[e._v("A fully working Vue.js terminal emulator.")]),n("vue-command",{attrs:{"yargs-options":{alias:{color:["colour"]}},title:"neil@moon ~",commands:e.commands,"show-help":""}}),e._m(1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("a",{attrs:{href:"https://github.com/ndabAP/vue-command"}},[e._v("vue-command")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("      "),n("code",[e._v("\n$ npm i --save vue-command\n      ")]),e._v("\n    ")])}],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"vue-command"},on:{keyup:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.mutatePointerHandler(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.mutatePointerHandler(t):null}],keydown:function(t){return"button"in t||!e._k(t.keyCode,"tab",9,t.key,"Tab")?e.autocomplete(t):null}}},[n("div",{class:{"white-bg":e.whiteTheme,"dark-bg":!e.whiteTheme},attrs:{id:"term"}},[e.hideTitle?e._e():n("div",{staticClass:"term-bar"},[n("span",{staticClass:"term-title",class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme}},[e._v(e._s(e.title))])]),n("div",{staticClass:"cont"},[n("div",{staticClass:"term-cont"},[n("div",[n("stdin",{attrs:{"white-theme":e.whiteTheme,"hide-prompt":e.hidePrompt,prompt:e.prompt,"placeholder-text":e.placeholderText,"is-last":0===e.progress,"show-help":e.showHelp},on:{typing:e.setCurrent,handle:function(t){e.handle(t)}}}),e._l(e.history,function(t,o){return n("div",{key:o},[n("stdout",{staticClass:"term-cmd",attrs:{"white-theme":e.whiteTheme,io:t}}),n("stdin",{attrs:{"white-theme":e.whiteTheme,"hide-prompt":e.hidePrompt,prompt:e.prompt,"placeholder-text":e.placeholderText,"is-last":o===e.progress-1,"last-command":e.last,"show-help":e.showHelp},on:{typing:e.setCurrent,handle:e.handle}})],1)})],2)])])])])},l=[],c=(n("96cf"),n("3b8d")),p=(n("f559"),n("55dd"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.hidePrompt?e._e():n("span",{class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme}},[e._v("\n    "+e._s(e.prompt)+"\n  ")]),n("span",{staticClass:"term-cmd"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.command,expression:"command"}],staticClass:"cli-input right",class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme},attrs:{disabled:e.isDisabled,placeholder:e.placeholder,type:"text",name:"cli-input",autofocus:!e.isDisabled},domProps:{value:e.command},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handle(t):null},input:function(t){t.target.composing||(e.command=t.target.value)}}})])])}),d=[],h=n("13ea"),m=n.n(h),f=n("b8ce"),y=n.n(f),v={props:{prompt:{type:String},lastCommand:{type:String,default:""},isLast:{type:Boolean,default:!1,required:!0},showHelp:{type:Boolean,default:!1},placeholderText:{type:String},hidePrompt:{type:Boolean,default:!1},whiteTheme:{type:Boolean}},data:function(){return{isDisabled:!1,command:"",placeholder:""}},created:function(){var e=this;setTimeout(function(){e.isLast&&!e.isDisabled&&e.showHelp&&(e.placeholder=e.placeholderText)},4e3)},mounted:function(){var e=this;this.$_bus.$on("autocomplete",function(t){e.isLast&&(e.command=t)})},methods:{handle:function(){this.$emit("handle",this.command),this.isDisabled=!0,this.placeholder=""}},watch:{lastCommand:function(){!m()(this.lastCommand)&&this.isLast&&(this.command=y()(this.lastCommand))},command:function(){this.$emit("typing",this.command)}}},w=v,b=(n("1466"),n("2877")),g=Object(b["a"])(w,p,d,!1,null,null,null),_=g.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme},domProps:{innerHTML:e._s(e.io)}})},T=[],x={name:"Stdout",props:{io:{type:String,default:""},whiteTheme:{type:Boolean}}},O=x,C=(n("7d05"),Object(b["a"])(O,k,T,!1,null,null,null)),P=C.exports,j=n("eed6"),S=n.n(j),$=n("a59b"),E=n.n($),B=n("0644"),D=n.n(B),H=n("d623"),U=n.n(H),A=n("c641"),L=n.n(A),M=n("ec69"),N=n.n(M),q=n("afab"),J=n.n(q),R={props:{commands:{type:Object,required:!0},hideTitle:{type:Boolean,default:!1},hidePrompt:{type:Boolean,default:!1},showHelp:{type:Boolean,default:!1},title:{type:String,default:"neil@moon: ~"},prompt:{type:String,default:"~neil@moon:#"},placeholderText:{type:String,default:"Type help"},whiteTheme:{type:Boolean,default:!1},yargsOptions:{type:Object}},components:{Stdin:_,Stdout:P},data:function(){return{history:[],executed:[],current:"",pointer:0,last:"",progress:0}},updated:function(){var e=document.getElementsByTagName("html")[0];e.scrollTop=e.scrollHeight;var t=document.getElementsByTagName("input")[this.history.length];t.focus()},methods:{mutatePointerHandler:function(e){var t=e.key;"ArrowUp"===t&&this.pointer>0?(this.pointer--,this.last=this.executed[this.pointer]):"ArrowDown"===t&&this.pointer<U()(this.executed)-1&&(this.pointer++,this.last=this.executed[this.pointer])},autocomplete:function(e){var t=this,n=e.key;event.preventDefault(),"Tab"!==n||m()(this.current)||L()(N()(this.commands).sort(),function(e){if(e.startsWith(t.current))return t.$_bus.$emit("autocomplete",e),!1})},setCurrent:function(e){this.current=e},handle:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=E()(J()(t,this.yargsOptions)._),this.setCurrent(""),m()(n)?(this.history.push(null),this.progress++):(o=D()(this.executed),o.push(t),o=S()(o),this.executed=o,this.pointer=U()(o),this.progress++,this.commands[n]?this.history.push(this.commands[n](J()(t,this.yargsOptions))):this.history.push("".concat(t,": command not found")));case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},V=R,F=(n("156c"),Object(b["a"])(V,u,l,!1,null,null,null)),W=F.exports,z={components:{VueCommand:W},data:function(){return{commands:{pokedex:function(e){var t=e.color,n=e._;return t&&"pikachu"===n[1]?"yellow":"Usage: pokedex pokemon [option]<br><br>\n\n        Example: pokedex pikachu --color\n        "},help:function(){return"Usage: pokedex pokemon [option]<br><br>\n\n        Example: pokedex pikachu --color\n      "}}}}},G=z,I=(n("5c0b"),Object(b["a"])(G,a,s,!1,null,null,null)),K=I.exports;i["a"].config.productionTip=!1;var Q=new i["a"];r()(i["a"].prototype,{$_bus:{get:function(){return Q}}}),new i["a"]({render:function(e){return e(K)}}).$mount("#app")},5865:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},"7d05":function(e,t,n){"use strict";var o=n("5865"),r=n.n(o);r.a},a1bf:function(e,t,n){},be69:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="be69"},cde0:function(e,t,n){}});
//# sourceMappingURL=app.9ae3e46f.js.map