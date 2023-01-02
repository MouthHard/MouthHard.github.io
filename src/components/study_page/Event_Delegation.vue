<template>
	<div class="main_page">
		<h1>关于"事件委托"的学习和思考</h1>
		<h2 >
			题源：
			<a onclick="window.open('https://www.nowcoder.com/practice/02866b3ce7f8420c8b5d22f483c5fcc0')">牛客网-FED1 事件委托</a>
		</h2>
		<h5 style="text-align: right;">本文更新于2022.07.08</h5>
		<hr />
		
		<h3>一、原题目描述(牛客网-FED1 事件委托)</h3>
		<h5>
			请补全JavaScript代码，要求如下：
			1. 给"ul"标签添加点击事件
			2. 当点击某"li"标签时，该标签内容拼接"."符号。如：某"li"标签被点击时，该标签内容为".."
			注意：
			1. 必须使用DOM0级标准事件（onclick）
		</h5>
		<p>
			以下是个人理解参考网上资料：
			事件流里面有 三个特殊点：<font style="font-weight: bold;">冒泡阶段 ，捕获阶段， 目标阶段</font>
			<br/>
			<font style="font-weight: bold;">1.冒泡:</font>简单理解就是水泡从水底冒泡到水面的过程,即事件的触发反应从当前点击的元素 一路冒泡到最外层,一步步触发沿途元素的事件(如果沿途元素有设置事件的话)
			<br/>
			<font style="font-weight: bold;">2.捕获:</font>和冒泡是相反的，可以理解成 我要抓水底的鱼，从水面撒网一直沉到底部(好吧,比喻的不是很恰当),总之流程和冒泡是相反的
			<br/>
			<font style="font-weight: bold;">3.目标阶段：</font>点击哪个就是哪个，不触发冒泡和捕获。
			<br/>
			与上面三个阶段相关的就是 防止冒泡、防止捕获的方法（<font style="font-weight: bold;">preventXXX、stopXX</font>）等等...这些知识点常考，可以去百度，这里就不深入讲了
			<br/>
			<font style="font-weight: bold;">事件委托</font>实际上就是事件冒泡的一个应用场景，将当前点击的子元素的触发事件 交给父元素代理。
			<br/>
			<font style="font-weight: bold;">优点：</font>一个父元素代理了所有子元素的处理事件，遇到数量多的子元素可以一键代理；同时还能保证新加进来 新创建的子元素也能拥有代理的触发事件，动态帮子元素绑定
			<br/>
			<br/>
			<font style="font-weight: bold;">本题思路:</font>将li的点击事件冒泡给 上一级父元素，通过父元素代理处理点击事件,通过function(e)中的e.target来获取当前目标对象。
			因为要委托，所以li委托的父元素就是ul， 然后处理 只需要每次点击都加上一个 '.'（用innerText来获取目标文本内容）
			兼容性，不同的浏览器版本不一样，处理方式不一样,IE 和chorme等浏览器不同，IE8要用window获取event对象
			IE8也无法获取e.target 当前对象，想用到就得做兼容
			据说有些国企公司还在用IE8及其更老的版本，为的是稳定所以这里提前做兼容是可以的
		</p>
		<h4>
			<pre><code>
				代码如下：
				&lt;!DOCTYPE html&gt;
				&lt;html&gt;
				  &lt;head&gt;
				   &lt;meta charset=utf-8&gt;
				  &lt;/head&gt;
				  &lt;body&gt;
				     &lt;ul&gt;
				       &lt;li&gt;.&lt;/li&gt;
				       &lt;li&gt;.&lt;/li&gt;
				       &lt;li&gt;.&lt;/li&gt;
				     &lt;/ul&gt;
				     &lt;script type="text/javascript"&gt;
				        document.querySelector('ul').onclick =function(e){
				           var event = e || window.event;
				           var target = event.target || event.srcElement;
				           event.target.innerText +='.'
				        } 
				     &lt;/script&gt;
				  &lt;/body&gt;
				&lt;/html&gt;
				
				<font style="color: #2e646f;">
				//由于题目要求用DOM0级别的onclick,所以这里不要用addEventListener，其实测试了一下是可以用的,做法大致一样
				document.querySelector('ul').addEventListener("click", function(e){
					var event = e || window.event;
					var target = event.target || event.srcElement;
					event.target.innerText +='.'
				})
				</font>
			</code></pre>
		</h4>
		<h4 style="text-align: left;text-indent: 2rem;">本题比较简单，主要是复习事件委托的基本概念和用法机制</h4>
		<span>
			<font style="font-weight: bolder;">tips:</font>一个不相关的小贴士，涉及写本篇文的代码问题，用代码写本篇博客文时，由于直接贴HTML/JS代码上去会被编辑器解析为实际运行的代码
			所以要将这部分代码以文本形式放到页面中展示，要将&lt;和&gt;转义。其次，发现一个有意思的点，就是只需要转义一个左括号&lt;即可，
			右括号&gt;不需要转义也能正常展示，估计是左括号转义之后无法与右括号组成标签，所以也不被解析为代码；再者，写博客时发现了
			<font style="font-weight: bolder;">&lt;pre&gt;</font>
			和<font style="font-weight: bolder;">&lt;code&gt;</font>
			组合使用有奇效，可以让代码或者文本在页面中中按编辑器中的位置和样式显示，即在
			<font style="font-weight: bolder;">&lt;pre&gt; xxx &lt;code&gt;</font>
			写的代码 在编辑器中比如VSCODE或者HbuilderX中 由于观感和规范问题，会需要换行和首行缩进。这些换行和缩进的操作会被完全写进页面中，
			加入不使用pre和code标签，那么这些换行和缩进不显示，要缩进和换行要借助padding和br标签等。但是pre和code标签也有不好的地方，这两个
			标签的文字和代码不会自动换行，而且有可能会出现越界的情况，需要自己去调整
		</span>
	</div>
</template>

<script>
export default {
	data() {
		return{
			
		}
	},
	methods:{
		
	}
}
</script>
<style scoped src="../../assets/study_page.css"></style>
<style scoped lang="scss">
	pre{
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	.main_page h3{
		text-align: left;
		font-family: STZhongsong;
	}
	.main_page h5{
		text-align: left;
		text-indent: 2rem;
	}	
	.main_page h4>pre{
		text-align: left;
		margin-left: -15rem;
	}
	.main_page p{
		text-align: left;	
		font-size: 1rem;
		color: #4b5e95;
		line-height: 150%;
	}

</style>


