<template>
	<div class="main_page">
		<h1>前端面经</h1>
		<h2 >
			注意：以下是博主个人写过、遇到过或者看过的部分笔试题、面试题,此处只展示
			<font style="color: red;">部分内容</font>，详细可以下载如下博主的笔记
		</h2>
		<a href="" onclick="window.open('https://github.com/MouthHard/learning')">前端面经集合</a>
		<h5 style="text-align: right;">本文更新于2022.07.01</h5>
		<hr />
		<h3>一、说一说Vue3和Vue2</h3>
		<h4>(1)Vue3结合ES6去改进解决架构问题,性能方面的优化，速度更快、体积减少、更易维护、更接近原生、更易使用</h4>
		<h4>(2)响应时API的改变</h4>
		<p><font style="font-weight: bold;">Vue3用Proxy</font> 替换
			<font style="font-weight: bold;">Vue2的defineProperty</font>。
			defineProperty直接在一个对象上定义一个新属性，或者修改一个对象的现有属性（通过getter/setter），并返回此对象。
			虽然能够劫持对象的属性，但需要对对象的每个属性进行遍历劫持；如果对象上有新增的属性，则需要对新增的属性再次进行劫持（通过$set）；
			如果属性是对象，还需要深度遍历。
			Proxy是代理整个对象，通过监听代理对象上属性的变化来获取目标对象属性的变化。
			Proxy本身是一个构造函数，通过new Proxy生成拦截的实例对象，让外界进行过滤和访问。
			Proxy不仅能够监听到属性的增加，还能监听属性的删除。 
			使用 defineProperty 只能重定义属性的读取（get）和设置（set）行为，Proxy能支持更多行为操作，比defineProperty的功能更为强大。
		</p>
		
		<h4>(3)为typescript提供更好的支持</h4>

		<h4>(4)在diff算法做了优化（不必像Vue2一样将全部dom进行比较）</h4>
		
		<h4>(5)Vue2使用Options API，Vue3使用Composition API</h4>
		<p>
			Vue2将data，computed，watch，methods等属性方法以及mounted等生命周期钩子分割放置，看起来层次分明，
			但随着需求变得复杂和组件功能的增多,组件的阅读和理解难度会增加，而且文件会越来越大，查询和修改起来会比较麻烦，且逻辑过多时调用使用 this 会出现指向混乱等问题。
			Vue3把零散在各个data，methods的代码重新组合，用setup()和return来存放和提供调用，
			单独一个功能的代码放在一起维护（高内聚低耦合），并可将代码单独拆分成函数。
			要查找修改某些功能时能比较清楚完整的看到整个功能的详细代码，不像Vue2比较散的一截截断断续续的代码。代码重用性更好。
			也没有对this的使用，填补了Vue2的漏洞。Vue3可以通过引入生命周期钩子加个on来访问生命周期
		</p>
		
		<h4>(6)提供Tree Shaking 支持（一种通过消除最终文件中未使用的代码来优化体积，支持按需编译的方法）</h4>
		<h4>(7)提供一些新的API、新的组件（Fragment（不必特意用一个新的元素节点（如div）包裹隔离才能形成组件）、Teleport（类似于React的Portal）、Suspense）以及一些语法的改写</h4>
		
		<h3>二、常见网络攻击及其防御</h3>
		<table>
		<tr>
			<th></th>
			<th>定义/描述/攻击手段/攻击过程</th>
			<th>防御方法</th>
		</tr>
		<tr>
			<td><font style="font-weight: bold;">XSS攻击</font></td>
			<td>
				最常见的 Web 攻击，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。
				XSS攻击实质是两种情况：
				1.攻击者提交恶意代码。
				2.浏览器执行恶意代码。
				XSS 攻击一般存在以下几类：
				<font style="font-weight: bold;">（1）反射型 XSS 攻击：</font>主要是由于服务端接收到客户端的不安全输入，在客户端触发执行从而发起 Web 攻击。比如在图片或者链接中嵌入恶意脚本
				<font style="font-weight: bold;">（2）存储型（持久型） XSS 攻击：</font>
				通过提交带有恶意脚本的内容存储在服务器上，当其他人看到这些内容时发起 Web 攻击。
				比如攻击者在社区或论坛上写下一篇包含恶意JS代码的文章或评论，所有访问该文章或评论的用户的浏览器中都会执行这段恶意的 JS代码
				<font style="font-weight: bold;">（3）DOM XSS攻击：</font>通过恶意脚本修改页面的 DOM 结构，是纯粹发生在客户端的攻击，DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，
				属于前端 JS 自身的安全漏洞，而上面两种 XSS 都属于服务端的安全漏洞，本质上是前端 JS 代码本身不够严谨，把不可信的数据当作代码执行了
				<font style="font-weight: bold;">（4）JSONP XSS攻击：</font>JSONP 的 callback 参数非常危险，一是callback 参数意外截断 JS代码，特殊字符单引号双引号，换行符均存在风险。二是callback 参数恶意添加标签，造成 XSS 漏洞
			</td>
			<td>
				（1）设置HttpOnly属性,浏览器将禁止页面的 Javascript 访问带有 HttpOnly 属性的 Cookie。
				攻击者可以通过注入恶意脚本获取用户的 Cookie 信息。借此发起 Cookie 劫持攻击
				HttpOnly 并非阻止 XSS 攻击，而是阻止 XSS 攻击后的 Cookie 劫持攻击
				（2）从输入到输出都需要过滤、转义
				（3）添加验证码
			</td>
		</tr>
		<tr>
			<td><font style="font-weight: bold;">CSRF攻击</font></td>
			<td>跨站请求伪造，是一种劫持受信任用户向服务器发送非预期请求的攻击方式。攻击者诱导受害者进入第三方网站并窃取其登录注册等敏感信息，利用这些信息冒充用户对被攻击的网站执行某项操作。XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。
				CSRF 的两个特点：
				1.CSRF（通常）发生在第三方域名。
				2.CSRF 攻击者不能获取到 Cookie 等信息，只是使用。
				<font style="font-weight: bold;">（1）GET 类型的 CSRF：</font>如通过设置&lt;img>标签，通过在标签中嵌入恶意脚本，受害者一访问含有这个图片的页面后，浏览器就会自动向攻击网站发出一次HTTP请求。攻击网站就会收到包含受害者登录信息的一次跨域请求
				<font style="font-weight: bold;">（2）POST 类型的 CSRF：</font>设置一种嵌入了恶意脚本的表单，访问该页面后，表单会自动提交，相当于模拟用户完成了一次 POST 操作
				<font style="font-weight: bold;">（3）链接类型的 CSRF:</font>常见的往链接嵌入恶意代码，比如常见的网站里面一些美女服务、一夜暴富，点进去就中招了
			</td>
			<td>
				（1）Referer请求头，http请求里有一个referer请求头，带有这个请求的来源，验证这个请求是不是从自己的页面里来的，如果是的话才执行，否则就不要执行
				（2）随机Tokens：通过响应页面时将 token 渲染到页面上，在 form 表单提交的时候通过隐藏域提交上来。
				（3）Cookie防御：利用 CSRF 攻击不能获取到用户 Cookie 的特点，我们可以要求 Ajax 和表单请求携带一个 Cookie 中的值
				如将 token 设置在 Cookie 中，在提交 POST 请求的时候提交 Cookie，并通过 header 或者 body 带上 Cookie 中的 token，服务端进行对比校验。
			</td>
		</tr>
		<tr>
			<td width="200"><font style="font-weight: bold;">其他攻击：如 sql注入攻击、上传文件攻击、DDos攻击</font></td>
			<td></td>
			<td></td>
		</tr>
		</table>
	</div>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
	.main_page{
		position: absolute;
		width: 84%;
		top: 100%;
		left: -8%;
		font-size: 1rem;
		color: #000000;
		background: radial-gradient(circle,#cbcbcb,#eeeeee,#ffffff);
		padding-left: 1rem;
		padding-right: 1rem;
		border-top: 0.8rem double #5f93af;
	}
	.main_page h1{
		font-family: STXingkai;
	}
	.main_page h2{
		font-size: 1rem;
	}
	.main_page h3{
		text-align: left;
	}
	.main_page h4{
		text-align: left;
		text-indent: 2em;
	}
	.main_page p{
		text-align: justify;
		text-justify: inter-ideograph; 
		text-indent: 4rem;
	}
	.main_page table{
		margin-bottom: 2rem;
	}
	.main_page table,th,td{
		border:1px solid black;
		
	}
	.main_page th{
		height: 4rem;
		background-color:#4e9de2;
		font-size:1.2rem; 
		box-shadow: inset 1rem 0 1.5rem -1rem rgba(0, 0, 0, 0.8);
		text-align:center
	}
	.main_page td{
		background-color:#dce1e2;
		font-size:0.9rem; 
		text-align: justify;
		text-justify: inter-ideograph; 
		text-indent: 2rem;
		padding-left: 1rem;
		padding-right: 1rem;
		box-shadow: inset 1rem 0 1.5rem -1rem rgba(0, 0, 0, 0.8);
	}
	a:hover{
		color: #FFFFFF;
		padding: 0.5rem;
		background-color: #436f96;
		box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.8);
	}
</style>
