(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{350:function(t,r,e){"use strict";e.r(r);var o=e(7),v=Object(o.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("a",{attrs:{href:"https://v2.cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue2"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue3"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VueX"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-devtools"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"vue-中父级属性改变-子组件-props-属性未改变-且不能触发监听的问题解决及响应式原理分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-中父级属性改变-子组件-props-属性未改变-且不能触发监听的问题解决及响应式原理分析"}},[t._v("#")]),t._v(" vue 中父级属性改变，子组件 props 属性未改变，且不能触发监听的问题解决及响应式原理分析")]),t._v(" "),r("h3",{attrs:{id:"_1-场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-场景"}},[t._v("#")]),t._v(" 1.场景")]),t._v(" "),r("blockquote",[r("p",[t._v("调用自定义组件的时候，父级传给子组件的值可能是异步的，然后这也分两种情况")]),t._v(" "),r("p",[t._v("1.子组件的值只需要在初始化时获取，之后就不变了")]),t._v(" "),r("p",[t._v("2.子组件的值还会变化，在后面的操作中有异步请求，跟随父级拿到的数据变化")]),t._v(" "),r("p",[t._v("这时会有父级已经请求拿到数据了，但是子组件的值还没变，也没有触发回显，界面没有改变")])]),t._v(" "),r("h3",{attrs:{id:"_2-方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法"}},[t._v("#")]),t._v(" 2.方法")]),t._v(" "),r("blockquote",[r("ol",[r("li",[r("p",[t._v("v-if 控制组件拿到数据再渲染，可以解决第一种情况")])]),t._v(" "),r("li",[r("p",[t._v("子组件用 watch 监听父级传的 props，有局限性")])]),t._v(" "),r("li",[r("p",[t._v("触发响应式")])])])]),t._v(" "),r("h3",{attrs:{id:"_3-响应式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-响应式"}},[t._v("#")]),t._v(" 3.响应式")]),t._v(" "),r("ol",[r("li",[t._v("变量，声明时有指明的默认属性名，则其为响应式，否则为非响应式。")])]),t._v(" "),r("blockquote",[r("p",[t._v("解决：可以在声明时直接初始化默认属性值，防止额外属性的出现。或者麻烦一点，重新对整个对象赋值")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("数组，用索引修改数组某一项，或修改数组长度，都是非响应式。")])]),t._v(" "),r("blockquote",[r("p",[t._v("解决: 可以用 Array.splice 方法来替换指定位置的值，不用索引，")])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("p",[r("code",[t._v("this.$set(item, index/property, val)")])])]),t._v(" "),r("li",[r("p",[t._v("异步："),r("code",[t._v("this.$nextTick()")])])])])])}),[],!1,null,null,null);r.default=v.exports}}]);