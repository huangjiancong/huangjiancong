webpackJsonp([0],{"5M38":function(e,t,a){e.exports=a.p+"static/img/2.3e5276b.png"},"9ypA":function(e,t,a){e.exports=a.p+"static/img/3.d416cac.png"},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("MVMM"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("vSla")({name:"App"},s,!1,function(e){a("gorN")},null,null).exports,r=a("zO6J"),o={mounted:function(){var e=this.$refs.canvas;e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px";var t=e.offsetWidth,a=e.offsetHeight,i=new THREE.WebGLRenderer({canvas:e,antialias:!0,alpha:!0});i.setPixelRatio(window.devicePixelRatio>1?2:1),i.setSize(t,a),i.setClearColor(0,0);var s=new THREE.Scene,n=new THREE.PerspectiveCamera(50,t/a,.1,2e3);n.position.set(0,0,80);var r=new THREE.TextureLoader;r.crossOrigin="Anonymous";for(var o=r.load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEVMaXH////////////////////////////////////////////////////////////6w4mEAAAAD3RSTlMAH6eN8Q6A6sXaVWEGdDZ7wvYCAAABNElEQVR4XoXWv0oDQRAG8BGJKJHD2iZd2rP1AWzSXApJKkEEa6tAuk1nIySQxi4E7M830NIXsPZeIceS+xPCuGhYbpPd+b76B7c3uzuz1Mzlw3Oix90l+RNd8y7zzAfuFmxTfR+CgeJGisd90FbspHh3wdGU91JeOOCND9JrgmP25IpszmMfyD8t+GJvXiyI/SB3ViCtIg2BeleDJAT0fy1OOZjJH/gIgw2ZtFQYFH0DTljIvQFDCYwM+JHA1oCFBCqiiMVkts7Bap/JYEYdGawolUFNTzJYUyyDnKYyKEnJoKJEBpoYBAGNPlHARcLfhIWCpYabBbcbHhh45OChxcceX5xbCdzAywuvP2ogsAXBJgbbIG6kuBXjZo7HAR4oeCThoYbHIh6seDTj4W6fB6/u8+AX8dE3oDCbIgYAAAAASUVORK5CYII="),v=50,c=new THREE.IcosahedronGeometry(v,5),d=new THREE.Geometry,l=new THREE.BufferGeometry,p=new Float32Array(3*c.vertices.length),_=0;_<c.vertices.length;_++){var u=c.vertices[_];A(_,u),d.vertices.push(u),u.toArray(p,3*_)}function A(e,t){TweenMax.to(t,4,{x:0,z:0,ease:Back.easeOut,delay:2*Math.abs(t.y/v),repeat:-1,yoyo:!0,yoyoEase:Back.easeOut,onUpdate:function(){!function(e,t){p[3*e]=t.x,p[3*e+2]=t.z}(e,t)}})}var f=new THREE.BufferAttribute(p,3);l.addAttribute("position",f);var h=new THREE.ShaderMaterial({uniforms:{texture:{value:o}},vertexShader:document.getElementById("wrapVertexShader").textContent,fragmentShader:document.getElementById("wrapFragmentShader").textContent,transparent:!0}),m=new THREE.Points(l,h);function w(){e.style.width="",e.style.height="",t=e.offsetWidth,a=e.offsetHeight,n.aspect=t/a,n.updateProjectionMatrix(),i.setSize(t,a)}s.add(m);var g,E=new THREE.Vector2(.8,.5);TweenMax.ticker.addEventListener("tick",function(e){m.geometry.verticesNeedUpdate=!0,m.geometry.attributes.position.needsUpdate=!0,i.render(s,n)}),window.addEventListener("mousemove",function(e){E.x=e.clientX/window.innerWidth-.5,E.y=e.clientY/window.innerHeight-.5,TweenMax.to(m.rotation,4,{x:E.y*Math.PI*.5,z:E.x*Math.PI*.2,ease:Power1.easeOut})}),window.addEventListener("resize",function(){g=clearTimeout(g),g=setTimeout(w,200)})}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index"},[a("div",{staticClass:"J_Banner"},[a("canvas",{ref:"canvas"}),e._v(" "),e._m(0)]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),a("div",{staticClass:"J_Footer"},[e._v("\n        *注：此站应用于卓越教育黄健聪个人分享会专用，请勿作为商业用途。\n    ")])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"title"},[e._v("前端技术分享会")]),e._v(" "),a("div",{staticClass:"keyword"},[a("span",[e._v("Nodejs")]),e._v(" "),a("span",[e._v("Webpack")]),e._v(" "),a("span",[e._v("Less")]),e._v(" "),a("span",[e._v("Vue")]),e._v(" "),a("span",[e._v("Babel")]),e._v(" "),a("span",[e._v("Scoped")]),e._v(" "),a("span",[e._v("Autoprefixer")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"J_Introduction"},[a("div",{staticClass:"title"},[e._v("入门"),a("span",{staticClass:"color1"},[e._v("讲解")])]),e._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"item"},[a("p",[e._v("1、什么是nodejs？")])]),e._v(" "),a("div",{staticClass:"item"},[a("p",[e._v("2、什么是单页，什么是多页，他们的区别在哪里？")])]),e._v(" "),a("div",{staticClass:"item"},[a("p",[e._v("3、什么是 Virtual DOM？")])]),e._v(" "),a("div",{staticClass:"item"},[a("p",[e._v("4、常用打包插件")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"javascript:;"}},[e._v("Babel")])]),e._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[e._v("Less")])]),e._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[e._v("Scoped")])]),e._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[e._v("Autoprefixer")])]),e._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[e._v("Webpack")])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"J_Framework"},[t("div",{staticClass:"title"},[this._v("常见的"),t("span",{staticClass:"color1"},[this._v("前后端分离")]),this._v("架构")]),this._v(" "),t("div",{staticClass:"main"},[t("img",{attrs:{src:a("5M38"),alt:"nodejs"}}),this._v(" "),t("p",[this._v("单页应用（single page application，SPA）应用实例基于 Vue-cli")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"J_Advanced"},[i("div",{staticClass:"title"},[e._v("基于"),i("span",{staticClass:"color1"},[e._v("Nodejs中间件")]),e._v("架构")]),e._v(" "),i("div",{staticClass:"keyword"},[e._v("\n            服务端渲染(Server Side Render，SSR) + \n            多页应用（Multi Page Application，MPA） + \n            单页应用（Single Page Application，SPA） + \n            多文件合并（Multi File Merger，MFM）\n        ")]),e._v(" "),i("div",{staticClass:"main"},[i("img",{attrs:{src:a("9ypA"),alt:"nodejs"}})]),e._v(" "),i("div",{staticClass:"link"},[i("img",{attrs:{src:a("bagY"),alt:""}}),e._v(" "),i("a",{attrs:{target:"_blank",href:"http://nodejs-dev1.default.10.2.2.130.xip.io/"}},[e._v("实例demo：http://nodejs-dev1.default.10.2.2.130.xip.io/")])])])}]};var c=a("vSla")(o,v,!1,function(e){a("qOhU")},"data-v-7dcc790d",null).exports;i.a.use(r.a);var d=new r.a({routes:[{path:"/",name:"index",component:c}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:d,components:{App:n},template:"<App/>"})},bagY:function(e,t,a){e.exports=a.p+"static/img/4.7df5c3c.png"},gorN:function(e,t){},qOhU:function(e,t){}},["NHnr"]);