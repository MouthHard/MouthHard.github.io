<template>
	<div class="sprites">
		<template v-for="sprite in spriteArr" :key="sprite.id">
			<div>
				<span :class="sprite.classes" ></span>
				<a target="_blank" :href="sprite.addresses">{{sprite.title}}</a>
			</div>
		</template>	    
	</div>
</template>

<script>
	export default {
		data() {
			return {
				spriteArr:[
					{id:'001', title:'Three.js——制作酷炫的JS 3D动画', classes:'sprites1',addresses:'https://threejs.org/'},
					{id:'002', title:'Gitlab——提供远程访问Git存储库的服务', classes:'sprites2',addresses:'https://gitlab.com/gitlab-com'},
					{id:'003', title:'力扣——互联网刷题网站', classes:'sprites3',addresses:'https://leetcode.cn/'},
					{id:'004', title:'牛客网——面经+招聘', classes:'sprites4',addresses:'https://www.nowcoder.com/'},
					{id:'005', title:'Github——代码托管yyds', classes:'sprites5',addresses:'https://github.com/'},
					{id:'006', title:'iconfont——阿里巴巴矢量图标库', classes:'sprites6',addresses:'https://www.iconfont.cn/'},
					{id:'007', title:'Animista——常见CSS动画库', classes:'sprites7',addresses:'https://animista.net/'},
					{id:'008', title:'语雀——笔记', classes:'sprites8',addresses:'https://www.yuque.com/'},
					{id:'009', title:'Flexbox Defense——flex布局小游戏', classes:'sprites9',addresses:'http://www.flexboxdefense.com/'},
					{id:'010', title:'掘金——技术社区', classes:'sprites10',addresses:'https://juejin.cn/'},
					{id:'011', title:'Flexbox Froggy——flex布局小游戏', classes:'sprites11',addresses:'https://flexboxfroggy.com/'},
					{id:'012', title:'Apache Echarts——一个基于 JavaScript 的开源可视化图表库', classes:'sprites12',addresses:'https://echarts.apache.org/zh/index.html'},
					{id:'013', title:'CodePen——外网技术社区', classes:'sprites13',addresses:'https://codepen.io/'},
					{id:'014', title:'JsRun——可以用手机写JS代码的网站(很不错的代码交流网站)', classes:'sprites14',addresses:'https://jsrun.net/'},
					// {id:'015', title:'廖雪峰的官方网站', classes:'sprites15',addresses:'https://www.liaoxuefeng.com/'},
					// {id:'016', title:'前端乱炖——前端社区', classes:'sprites16',addresses:'https://www.html-js.com/'},
					// {id:'017', title:'Web前端导航', classes:'sprites17',addresses:'http://www.alloyteam.com/nav/'},
					// {id:'018', title:'在线工具', classes:'sprites18',addresses:'https://tool.lu/'},
					// {id:'019', title:'CSDN——开发者社区', classes:'sprites19',addresses:'https://www.csdn.net/'},
				],
			}
		},
	}
</script>

<style scoped>
	a{
		color: #FFFFFF;
		text-decoration: none;
	}
	.sprites div:hover{
		background-color: #6c6c6c;
		width: 100%;
		transition: 0.5s;
	}
	.sprites{
	    width: 90%;
	    margin:  auto;
		animation: spriteAnimation 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;;
	}
	@keyframes spriteAnimation{
	  0% {
		-webkit-transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
				transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
		opacity: 0;
	  }
	  100% {
		-webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
				transform: rotateX(0deg) translateX(0) skewX(0deg);
		opacity: 1;
	  }
	}
	.sprites div {
		padding: 3px;
	    margin: 8px;
		background-color: #000000;
		border-radius: 3px;
		color: #FFFFF0;
		box-shadow: -1px -1px #d9d9d9, -2px -2px #3e3e3e, -3px -3px #636363, -4px -4px #939393,
		0 0 20px 0px rgba(0, 0, 0, 1);
		transform: translateX(4px) translateY(4px);
	}
	.sprites span {
	    float: left;
		width: 22px;
		height: 19px;
		background-image: url(../../assets/sprites.png);
	    background-size: 20px 500px;
	}
	.sprites1 {
		background-position: 0 -1px;
	}
	/* 由于要精灵图要根据背景往下滑动  类似滑动窗口  只显示窗口中的部分，所以要-20px 每张图片往下滑动20px */
	.sprites2 {
		background-position: 0 -27px;
	}
	.sprites3 {
		background-position: 0 -55px;
	}
	.sprites4 {
		background-position: 0 -81px;
	}
	.sprites5 {
		background-position: 0 -108px;
	}
	.sprites6 {
		background-position: 0 -135px;
	}
	.sprites7 {
		background-position: 0 -162px;
	}
	.sprites8 {
		background-position: 0 -186px;
	}
	.sprites9 {
		background-position: 0 -215px;
	}
	.sprites10 {
		background-position: 0 -240px;
	}
	.sprites11 {
		background-position: 0 -267px;
	}
	.sprites12 {
		background-position: 0 -295px;
	}
	.sprites13 {
		background-position: 0 -321px;
	}
	.sprites14 {
		background-position: 0 -348px;
	}
	.sprites15 {
		background-position: 0 -373px;
	}
	.sprites16 {
		background-position: 0 -400px;
	}
	.sprites17 {
		background-position: 0 -427px;
	}
	.sprites18 {
		background-position: 0 -453px;
	}
	.sprites19 {
		background-position: 0 -480px;
	}
</style>
