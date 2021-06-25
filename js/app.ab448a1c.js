(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],h=0,f=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/solar-visualizer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"071a":function(t,e,n){"use strict";var a=n("45f3"),i=n.n(a);i.a},"18f8":function(t,e,n){"use strict";var a=n("2e1c"),i=n.n(a);i.a},"2e1c":function(t,e,n){},"45f3":function(t,e,n){},"4b61":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-select",{attrs:{items:t.trainingSets},model:{value:t.selectedSet,callback:function(e){t.selectedSet=e},expression:"selectedSet"}}),t.isDataLoaded?n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("linePlot",{key:t.filteredData[0].timestamp.getTime(),attrs:{data:t.filteredData,xName:t.xName,yName:"temperature",originalData:t.data,width:600,height:200}})],1),n("v-col",{attrs:{cols:"6"}},[n("linePlot",{key:t.filteredData[0].timestamp.getTime(),attrs:{data:t.filteredData,xName:t.xName,yName:"magnetism",originalData:t.data,width:600,height:200}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("linePlot",{key:t.filteredData[0].timestamp.getTime(),attrs:{data:t.filteredData,xName:t.xName,yName:"sun spots",originalData:t.data,width:600,height:200}})],1),n("v-col",{attrs:{cols:"6"}},[n("linePlot",{key:t.filteredData[0].timestamp.getTime(),attrs:{data:t.filteredData,xName:t.xName,yName:"speed",originalData:t.data,width:600,height:200}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("histogram",{key:t.selectedSet,attrs:{data:t.data,xName:t.xName,yName:"dst",width:1200,height:150},on:{extent:t.filterData}})],1)],1)],1):n("div",{attrs:{id:"loading"}},[t._v("Loading...")])],1)},r=[],s=(n("4de4"),n("4160"),n("d3b7"),n("ac1f"),n("466d"),n("1276"),n("159b"),n("96cf"),n("1da1")),o=n("3835"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{ref:"graph",attrs:{id:"graph",width:t.width,height:t.height},on:{click:t.downloadGraph}},[n("g",{attrs:{transform:t.graphPosition}},[t._l(t.xTicks,(function(e){return n("g",{key:+e,staticClass:"tick",attrs:{transform:t.getBottomTickPosition(e)}},[n("line",{attrs:{y2:t.innerHeight}}),n("text",{attrs:{textAnchor:"middle",dy:".71em",y:t.bottomLabelPosition}},[t._v(" "+t._s(t.bottomTickFormat(e))+" ")])])})),n("text",{staticClass:"axis-label",attrs:{textAnchor:"middle",transform:t.bottomTextPosition}},[t._v(" "+t._s(t.yName)+" ")]),t._l(t.yTicks,(function(e){return n("g",{key:+e,staticClass:"tick",attrs:{transform:t.getLeftTickPosition(e)}},[n("line",{attrs:{x2:t.innerWidth}}),n("text",{attrs:{textAnchor:"end",dy:".32em",x:t.leftLabelPosition}},[t._v(" "+t._s(e)+" ")])])})),n("g",{staticClass:"line-plot"},[n("path",{attrs:{fill:"none",stroke:"steelblue",d:t.linePath}})])],2)])},l=[],u=(n("99af"),n("5698")),h={props:["xName","yName","originalData","width","height","data"],data:function(){return{xAxisLabelOffset:50,yAxisLabelOffset:45,tickOffset:7,margin:{top:0,right:30,bottom:65,left:90},dataSet:null,graph:null}},computed:{graphPosition:function(){return"translate(".concat(this.margin.left,",").concat(this.margin.top,")")},innerWidth:function(){var t=this.width-this.margin.left-this.margin.right;return t},innerHeight:function(){var t=this.height-this.margin.top-this.margin.bottom;return t},xTicks:function(){return this.scaleX.ticks()},yTicks:function(){return this.scaleY.ticks()},bottomLabelPosition:function(){return this.innerHeight+this.tickOffset},bottomTextPosition:function(){return"translate(".concat(-this.yAxisLabelOffset,",").concat(this.innerHeight,") rotate(-90)")},leftLabelPosition:function(){return-this.tickOffset},leftTextX:function(){return 0},leftTextY:function(){return this.innerHeight+this.xAxisLabelOffset},scaleX:function(){return Object(u["g"])().domain(Object(u["d"])(this.dataSet,this.extractXValue)).range([0,this.innerWidth]).nice()},scaleY:function(){var t=this;return Object(u["f"])().domain(Object(u["d"])(this.originalData,(function(e){return+e[t.yName]}))).range([this.innerHeight,0]).nice()},linePath:function(){return this.drawLinePath(this.dataSet)}},methods:{bottomTickFormat:Object(u["i"])("%H"),extractXValue:function(t){return t[this.xName]},downloadGraph:function(){var t=this.graph,e=(new XMLSerializer).serializeToString(t);e='<?xml version="1.0" standalone="no"?>\r\n'+e;var n="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(e),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download","".concat(this.yName,".svg")),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},extractYValue:function(t){return t[this.yName]},getBottomTickPosition:function(t){return"translate(".concat(this.scaleX(t),",0)")},getLeftTickPosition:function(t){return"translate(0,".concat(this.scaleY(t),")")},drawLinePath:function(t){var e=this,n=Object(u["e"])().x((function(t){return e.scaleX(e.extractXValue(t))})).y((function(t){return e.scaleY(e.extractYValue(t))}))(t);return n}},beforeMount:function(){console.log("lineplot b4 mounted"),this.dataSet=this.data},mounted:function(){console.log("lineplot mounted"),this.graph=this.$refs["graph"]}},f=h,d=(n("071a"),n("2877")),m=Object(d["a"])(f,c,l,!1,null,"3aa553d0",null),g=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{id:"histogram",width:t.width,height:t.height}},[n("g",{attrs:{transform:t.histogramPosition}},[n("text",{staticClass:"axis-label",attrs:{textAnchor:"middle",transform:t.bottomTextPosition}},[t._v(" "+t._s(t.yName)+" ")]),t._l(t.yTicks,(function(e){return n("g",{key:+e,staticClass:"tick",attrs:{transform:t.getLeftTickPosition(e)}},[n("line",{attrs:{x2:t.innerWidth}}),n("text",{attrs:{textAnchor:"end",dy:".32em",x:t.leftLabelPosition}},[t._v(" "+t._s(e)+" ")])])})),n("g",{staticClass:"histogram"},t._l(t.dataSet,(function(e){return n("rect",{key:t.extractXValue(e).getTime(),attrs:{y:t.innerHeight-t.scaleY(t.extractYValue(e)),x:t.scaleX(t.extractXValue(e)),width:t.innerWidth/t.data.length,height:t.scaleY(t.extractYValue(e))}})})),0),n("g",{ref:"brush"})],2)])},b=[],x=(n("d81d"),{props:["xName","yName","width","height","data"],data:function(){return{xAxisLabelOffset:50,yAxisLabelOffset:45,tickOffset:7,margin:{top:20,right:0,bottom:0,left:90},dataSet:null}},computed:{brush:function(){return Object(u["a"])().extent([[0,0],[this.innerWidth,this.innerHeight]])},histogramPosition:function(){return"translate(".concat(this.margin.left,",").concat(this.margin.top,")")},innerWidth:function(){var t=this.width-this.margin.left-this.margin.right;return t},innerHeight:function(){var t=this.height-this.margin.top-this.margin.bottom;return t},yTicks:function(){return this.scaleY.ticks()},bottomLabelPosition:function(){return this.innerHeight+this.tickOffset},bottomTextPosition:function(){return"translate(".concat(-this.yAxisLabelOffset,",").concat(this.innerHeight,") rotate(-90)")},leftLabelPosition:function(){return-this.tickOffset},leftTextX:function(){return this.innerWidth/2},leftTextY:function(){return this.innerHeight+this.xAxisLabelOffset},scaleX:function(){return Object(u["g"])().domain(Object(u["d"])(this.dataSet,this.extractXValue)).range([0,this.innerWidth])},scaleY:function(){return Object(u["f"])().domain(Object(u["d"])(this.dataSet,this.extractYValue)).range([0,this.innerHeight]).nice()}},methods:{bottomTickFormat:Object(u["i"])("%a"),extractXValue:function(t){return t[this.xName]},extractYValue:function(t){return t[this.yName]},getBottomTickPosition:function(t){return"translate(".concat(this.scaleX(t),",0)")},getLeftTickPosition:function(t){return"translate(0,".concat(this.innerHeight-this.scaleY(t),")")}},beforeMount:function(){this.dataSet=this.data,console.log("histogram b4 mounted")},mounted:function(){console.log("histogram mounted");var t=this;this.brush(Object(u["h"])(this.$refs.brush)),this.brush.on("brush end",(function(){t.$emit("extent",u["c"].selection&&u["c"].selection.map(t.scaleX.invert))}))}}),v=x,y=(n("18f8"),Object(d["a"])(v,p,b,!1,null,"438812f6",null)),k=y.exports,w="https://gist.githubusercontent.com/ahmed-com/057c619e68a176b1513c96770e3b8889/raw/92ac0c7088fd06fb7b74aabf24032f02de7eb5df/data.csv",O={name:"App",components:{linePlot:g,histogram:k},data:function(){return{xName:"timestamp",isDataLoaded:!1,allDataSets:null,filteredData:null,selectedSet:"train_a",trainingSets:["train_a","train_b","train_c"]}},computed:{data:function(){return this.isDataLoaded?this.allDataSets[this.selectedSet]:null}},methods:{filterData:function(t){var e=this,n=Object(o["a"])(t,2),a=n[0],i=n[1];this.filteredData=this.data.filter((function(t){var n=t[e.xName];return n>a&&n<i}))},timedeltaToDate:function(t){var e=t.split(" "),n=e[0],a=e[2].split(":"),i=a[0],r=a[1],s=a[2],o=1e3*s+1e3*r*60+1e3*i*60*60+1e3*n*60*60*24;return new Date(o)},sanitizeRow:function(t){return t.timestamp=this.timedeltaToDate(t.timedelta),t.dst=+t["t0"],t.temperature=+t["temperature_mean"],t.magentism=+t["bt_mean"],t["sun spots"]=+t["smoothed_ssn"],t.speed=+t["speed_mean"],t},splitIntoDataSets:function(t){var e=this;this.allDataSets={train_a:[],train_b:[],train_c:[]},t.forEach((function(t){e.allDataSets[t.period].length>100||e.allDataSets[t.period].push(e.sanitizeRow(t))})),this.isDataLoaded=!0,this.filteredData=this.data,console.log("the first row:",this.allDataSets["train_a"][0]),console.log("a data row:",this.data[0])}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,caches.open("data-cache");case 2:return n=e.sent,e.next=5,n.match(w);case 5:if(a=e.sent,a){e.next=11;break}return e.next=9,fetch(w);case 9:a=e.sent,n.add(w);case 11:return e.next=13,a.text();case 13:i=e.sent,r=Object(u["b"])(i),console.log("before splitting:",r[0]),t.splitIntoDataSets(r);case 17:case"end":return e.stop()}}),e)})))()}},_=O,P=(n("dd98"),n("6544")),T=n.n(P),D=n("7496"),S=n("62ad"),N=n("a523"),j=n("0fd9"),L=n("b974"),V=Object(d["a"])(_,i,r,!1,null,"6b765393",null),X=V.exports;T()(V,{VApp:D["a"],VCol:S["a"],VContainer:N["a"],VRow:j["a"],VSelect:L["a"]});var A=n("f309");a["a"].use(A["a"]);var Y=new A["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:Y,render:function(t){return t(X)}}).$mount("#app")},dd98:function(t,e,n){"use strict";var a=n("4b61"),i=n.n(a);i.a}});
//# sourceMappingURL=app.ab448a1c.js.map