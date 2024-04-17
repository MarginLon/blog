(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{385:function(v,_,l){"use strict";l.r(_);var i=l(7),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("ul",[_("li",[_("a",{attrs:{href:"#1%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6-crp%E4%BC%98%E5%8C%96"}},[v._v("1.浏览器渲染机制 CRP优化")])]),v._v(" "),_("li",[_("a",{attrs:{href:"#2%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%9C%BA%E5%88%B6"}},[v._v("2.事件循环机制")])])]),v._v(" "),_("h2",{attrs:{id:"_1-浏览器渲染机制-crp优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器渲染机制-crp优化"}},[v._v("#")]),v._v(" 1.浏览器渲染机制 CRP优化")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("从服务器基于HTTP网络请求回来的数据")]),v._v(" "),_("ul",[_("li",[v._v("16进制的文件流")]),v._v(" "),_("li",[v._v("浏览器解析 => HTML字符串")]),v._v(" "),_("li",[v._v("按照W3C规则识别为HTML标签")]),v._v(" "),_("li",[v._v("节点Nodes")]),v._v(" "),_("li",[v._v("生成DOM树")])])]),v._v(" "),_("li",[_("p",[v._v("浏览器线程：")]),v._v(" "),_("ul",[_("li",[v._v("GUI渲染线程")]),v._v(" "),_("li",[v._v("JS引擎线程")]),v._v(" "),_("li",[v._v("HTTP线程")]),v._v(" "),_("li",[v._v("定时器监听线程")]),v._v(" "),_("li",[v._v("DOM监听线程")]),v._v(" "),_("li",[v._v("...")])])]),v._v(" "),_("li",[_("p",[v._v("访问页面，请求回来一个HTML文档，浏览器自上而下渲染")]),v._v(" "),_("ul",[_("li",[v._v("遇到style，GUI直接渲染\n"),_("ul",[_("li",[v._v("少量CSS可以内嵌")])])]),v._v(" "),_("li",[v._v("遇到link，HTTP线程请求资源文件信息，同时GUI继续向下渲染\n"),_("ul",[_("li",[v._v("HTTP请求有数量限制,越少越好，link放在头部，为了在没有渲染DOM时，通知HTTP请求CSS，提高渲染速度。")])])]),v._v(" "),_("li",[v._v("遇到@import, HTTP线程请求资源文件信息，GUI暂时停止。\n"),_("ul",[_("li",[v._v("避免使用@import")])])])])]),v._v(" "),_("li",[_("p",[v._v("遇到"),_("code",[v._v("<script src = 'xxx.js'>")]),v._v("，阻碍GUI继续渲染。")]),v._v(" "),_("ul",[_("li",[v._v("defer:请求JS资源是异步的，GUI渲染完，JS渲染")]),v._v(" "),_("li",[v._v("async:请求JS资源是异步的，此时GUI继续渲染，JS请求回来，GUI暂停，JS渲染")]),v._v(" "),_("li",[v._v("多个JS请求按顺序渲染，但设置async时，先请求回先渲染")]),v._v(" "),_("li",[v._v("js放在底部，防止GUI被阻止，放在非底部尽量设置defer/async\n"),_("img",{attrs:{src:"https://github.com/MarginLon/theImages/blob/master/async%20defer.png?raw=true",alt:"defer和async"}})])])]),v._v(" "),_("li",[_("p",[v._v("Webkit浏览器预测解析：chrome的预加载扫描器html-preload-scanner通过扫描节点中的 “src” , “link”等属性，找到外部连接资源后进行预加载，避免了资源加载的等待时间，同样实现了提前加载以及加载和执行分离。")])]),v._v(" "),_("li",[_("p",[v._v("DOM Tree(DOMContentLoaded事件触发) => 执行JS？ => CSSOM Tree -> RENDER TREE渲染树 -> Layout布局计算[回流/重排] -> Painting绘制[重绘]{ 分层绘制 }")]),v._v(" "),_("ul",[_("li",[v._v("页面第一次渲染，必定一次回流和重绘")]),v._v(" "),_("li",[v._v("如果元素的位置和大小改变，浏览器需要重新计算在视口中的位置和大小信息，重新计算的过程时回流重绘")]),v._v(" "),_("li",[v._v("普通样式改变，位置和大小不变，只需要重绘")])])]),v._v(" "),_("li",[_("p",[v._v("减少回流：")]),v._v(" "),_("ul",[_("li",[v._v("基于vue/react")]),v._v(" "),_("li",[v._v("分离读写操作\n"),_("ul",[_("li",[v._v("新浏览器：渲染队列 => 1.修改样式的代码结束 2.遇到获取元素样式的代码 => 触发回流重绘")])])]),v._v(" "),_("li",[v._v("样式集中改变")]),v._v(" "),_("li",[v._v("元素批量修改\n"),_("ul",[_("li",[v._v("createDocumentFragment()")]),v._v(" "),_("li",[v._v("模板字符串拼接")])])]),v._v(" "),_("li",[v._v("动画应用到absoluted和fixed的元素上，脱离文档流")])])])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_2-事件循环机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-事件循环机制"}},[v._v("#")]),v._v(" 2.事件循环机制")]),v._v(" "),_("p",[v._v("JS：单线程异步编程")]),v._v(" "),_("ul",[_("li",[v._v("EventLoop")]),v._v(" "),_("li",[v._v("EventQueue")]),v._v(" "),_("li",[v._v("WebAPi")]),v._v(" "),_("li",[v._v("macrotask\n"),_("ul",[_("li",[v._v("定时器")]),v._v(" "),_("li",[v._v("事件队列")]),v._v(" "),_("li",[v._v("xmlHttpRequest/Fetch")]),v._v(" "),_("li",[v._v("setImmediate [Node]")]),v._v(" "),_("li",[v._v("...")])])]),v._v(" "),_("li",[v._v("microtask\n"),_("ul",[_("li",[v._v("requestAnimationFrame")]),v._v(" "),_("li",[v._v("Promise.then/catch/finally")]),v._v(" "),_("li",[v._v("async/await")]),v._v(" "),_("li",[v._v("queueMicrotask")]),v._v(" "),_("li",[v._v("process.nextTick [Node]")]),v._v(" "),_("li",[v._v("MutationObsever")]),v._v(" "),_("li",[v._v("...\n"),_("img",{attrs:{src:"https://github.com/MarginLon/theImages/blob/master/%E5%BC%82%E6%AD%A5%E7%BA%BF%E7%A8%8B.png?raw=true",alt:"宏任务微任务"}})])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);