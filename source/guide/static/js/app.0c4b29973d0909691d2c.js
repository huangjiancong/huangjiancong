webpackJsonp([0],{"5M38":function(t,e,a){t.exports=a.p+"static/images/2.3e5276b.png"},"9ypA":function(t,e,a){t.exports=a.p+"static/images/3.d416cac.png"},MPyQ:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("MVMM"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("vSla")({name:"App"},s,!1,function(t){a("gorN")},null,null).exports,r=a("zO6J"),o={mounted:function(){var t=this.$refs.canvas;t.style.width=window.innerWidth+"px",t.style.height=window.innerHeight+"px";var e=t.offsetWidth,a=t.offsetHeight,i=new THREE.WebGLRenderer({canvas:t,antialias:!0,alpha:!0});i.setPixelRatio(window.devicePixelRatio>1?2:1),i.setSize(e,a),i.setClearColor(0,0);var s=new THREE.Scene,n=new THREE.PerspectiveCamera(50,e/a,.1,2e3);n.position.set(0,0,80);var r=new THREE.TextureLoader;r.crossOrigin="Anonymous";for(var o=r.load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEVMaXH////////////////////////////////////////////////////////////6w4mEAAAAD3RSTlMAH6eN8Q6A6sXaVWEGdDZ7wvYCAAABNElEQVR4XoXWv0oDQRAG8BGJKJHD2iZd2rP1AWzSXApJKkEEa6tAuk1nIySQxi4E7M830NIXsPZeIceS+xPCuGhYbpPd+b76B7c3uzuz1Mzlw3Oix90l+RNd8y7zzAfuFmxTfR+CgeJGisd90FbspHh3wdGU91JeOOCND9JrgmP25IpszmMfyD8t+GJvXiyI/SB3ViCtIg2BeleDJAT0fy1OOZjJH/gIgw2ZtFQYFH0DTljIvQFDCYwM+JHA1oCFBCqiiMVkts7Bap/JYEYdGawolUFNTzJYUyyDnKYyKEnJoKJEBpoYBAGNPlHARcLfhIWCpYabBbcbHhh45OChxcceX5xbCdzAywuvP2ogsAXBJgbbIG6kuBXjZo7HAR4oeCThoYbHIh6seDTj4W6fB6/u8+AX8dE3oDCbIgYAAAAASUVORK5CYII="),c=50,v=new THREE.IcosahedronGeometry(c,5),l=new THREE.Geometry,d=new THREE.BufferGeometry,p=new Float32Array(3*v.vertices.length),u=0;u<v.vertices.length;u++){var _=v.vertices[u];h(u,_),l.vertices.push(_),_.toArray(p,3*u)}function h(t,e){TweenMax.to(e,4,{x:0,z:0,ease:Back.easeOut,delay:2*Math.abs(e.y/c),repeat:-1,yoyo:!0,yoyoEase:Back.easeOut,onUpdate:function(){!function(t,e){p[3*t]=e.x,p[3*t+2]=e.z}(t,e)}})}var f=new THREE.BufferAttribute(p,3);d.addAttribute("position",f);var A=new THREE.ShaderMaterial({uniforms:{texture:{value:o}},vertexShader:document.getElementById("wrapVertexShader").textContent,fragmentShader:document.getElementById("wrapFragmentShader").textContent,transparent:!0}),m=new THREE.Points(d,A);function g(){t.style.width="",t.style.height="",e=t.offsetWidth,a=t.offsetHeight,n.aspect=e/a,n.updateProjectionMatrix(),i.setSize(e,a)}s.add(m);var w,E=new THREE.Vector2(.8,.5);TweenMax.ticker.addEventListener("tick",function(t){m.geometry.verticesNeedUpdate=!0,m.geometry.attributes.position.needsUpdate=!0,i.render(s,n)}),window.addEventListener("mousemove",function(t){E.x=t.clientX/window.innerWidth-.5,E.y=t.clientY/window.innerHeight-.5,TweenMax.to(m.rotation,4,{x:E.y*Math.PI*.5,z:E.x*Math.PI*.2,ease:Power1.easeOut})}),window.addEventListener("resize",function(){w=clearTimeout(w),w=setTimeout(g,200)})}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("div",{staticClass:"J_Banner"},[a("canvas",{ref:"canvas"}),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"J_Advanced"},[t._m(3),t._v(" "),a("div",{staticClass:"keyword"},[t._v("\n            服务端渲染(Server Side Render，SSR) + \n            多页应用（Multi Page Application，MPA） + \n            单页应用（Single Page Application，SPA） + \n            多文件合并（Multi File Merger，MFM）\n        ")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"demo"},[a("svg",{staticClass:"octicon octicon-mark-github",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://github.com/huangjiancong/live"}},[t._v("https://github.com/huangjiancong/live")])])]),t._v(" "),a("div",{staticClass:"J_Footer"},[t._v("\n        *注：此站应用于卓越教育黄健聪个人分享会专用，请勿作为商业用途。\n    ")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"title"},[t._v("前端技术分享会")]),t._v(" "),a("div",{staticClass:"keyword"},[a("span",[t._v("Nodejs")]),t._v(" "),a("span",[t._v("Webpack")]),t._v(" "),a("span",[t._v("Less")]),t._v(" "),a("span",[t._v("Vue")]),t._v(" "),a("span",[t._v("Babel")]),t._v(" "),a("span",[t._v("Scoped")]),t._v(" "),a("span",[t._v("Autoprefixer")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"J_Introduction"},[a("div",{staticClass:"title"},[t._v("入门"),a("span",{staticClass:"color1"},[t._v("讲解")])]),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"item"},[a("p",[t._v("1、什么是nodejs？")])]),t._v(" "),a("div",{staticClass:"item"},[a("p",[t._v("2、什么是单页，什么是多页，他们的区别在哪里？")])]),t._v(" "),a("div",{staticClass:"item"},[a("p",[t._v("3、什么是 Virtual DOM？")])]),t._v(" "),a("div",{staticClass:"item"},[a("p",[t._v("4、常用打包插件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("Babel")])]),t._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("Less")])]),t._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("Scoped")])]),t._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("Autoprefixer")])]),t._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("Webpack")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"J_Framework"},[e("div",{staticClass:"title"},[this._v("常见的"),e("span",{staticClass:"color1"},[this._v("前后端分离")]),this._v("架构")]),this._v(" "),e("div",{staticClass:"main"},[e("img",{attrs:{src:a("5M38"),alt:"nodejs"}}),this._v(" "),e("p",[this._v("单页应用（single page application，SPA）应用实例基于 Vue-cli")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[this._v("基于"),e("span",{staticClass:"color1"},[this._v("Nodejs中间件")]),this._v("架构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("img",{attrs:{src:a("9ypA"),alt:"nodejs"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:a("pzV2"),alt:"qrcode"}})])}]};var v=a("vSla")(o,c,!1,function(t){a("MPyQ")},"data-v-0571c2b2",null).exports;i.a.use(r.a);var l=new r.a({routes:[{path:"/",name:"index",component:v}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:l,components:{App:n},template:"<App/>"})},gorN:function(t,e){},pzV2:function(t,e,a){t.exports=a.p+"static/images/8.b856b8c.png"}},["NHnr"]);