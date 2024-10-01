<template>
	<div id="menu">
		<nav>
			<template v-for="vr in routerArr" :key="vr.id">
				<router-link :to="vr.address">{{ vr.title }}</router-link>
			</template>
		</nav>
		<div id="menuContent">
			<router-view></router-view>
		</div>
	</div>
</template>
<script setup>
import { getCurrentInstance, onMounted } from "vue";

//路由数组
const routerArr = [
	{ id: "001", title: "日历", address: "/docu/calendar" },
	{ id: "002", title: "转换器", address: "/docu/convertor" },
	{ id: "003", title: "计算器", address: "/docu/calculator" },
	{ id: "004", title: "返回", address: "/" },
];
const { proxy } = getCurrentInstance();

onMounted(async () => {
	proxy.$axios
		.get("http://112.125.90.247:81/api/Userinfo/GetRoles")
		.then((result) => {
			//通过response获取具体数据，赋值给data中定义的newslist
			console.log(result);
		})
		.catch((err) => {
			//请求失败执行catch方法
			alert(err);
		});
});
</script>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}
#menu {
	height: 100%;

	width: 100%;
	display: flex;
	background: #000000;
	#menuContent {
		height: 100%;
		width: 100%;
	}
	nav {
		text-align: center;
		padding: 0 5px;
		display: flex;
		flex-direction: column;
		width: 12%;
		height: 100vh;
		justify-content: space-around;

		-webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
		-webkit-transform: translateX(-8px) translateY(-8px);
		box-shadow: inset 0 -1rem 2rem -5px rgb(255, 2, 2);

		transform: translateX(-4px) translateY(-4px);

		a {
			font-weight: bolder;
			font-size: 1.2rem;
			color: #ffffff;
			padding-top: 10px;
			border-top: 1px solid transparent;
			text-decoration: none;
			transition: 1s;
			&.router-link-exact-active {
				padding: 10px 5px 20px 5px;
				color: #e0f1ff;
				animation: text-pop-up-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
			}
			@keyframes text-pop-up-right {
				0% {
					color: #ffffff;
					text-shadow: none;
				}
				100% {
					color: #ffffff;
					border-top: 4px double #f1fe02;
					border-bottom: 4px double #017cff;

					box-shadow: inset -15px 0 10px -5px rgba(244, 247, 120, 0.5), inset 15px 0 10px -5px rgba(0, 146, 251, 0.5);
					text-shadow: 0 1px 0 #04deff, 0 2px 0 #424242, 0 3px 0 #0080ff, 0 4px 0 #424242, 0 5px 0 #505050, 0 6px 0 #5b5b5b, 0 7px 0 #5e5e5e, 0 8px 0 #ff0404, 0 9px 0 #767676, 0 30px 10px rgba(0, 0, 0, 1);
				}
			}
			&:hover {
				color: #00ffb3;
				border-top: 1px solid #ffffff;
			}
		}
	}
}
</style>
