<template>
	<div>
		<!-- 太阳 -->
		<button id="tabState"></button>

		<!-- 时钟 -->
		<div class="clock-container">
			<div class="needle hour"></div>
			<div class="needle minute"></div>
			<div class="needle second"></div>
			<div class="time"></div>
			<div class="date"></div>
		</div>

		<div id="curPageName">
			{{ curPageName }}
		</div>

		<!-- 轨迹星图 -->
		<div class="trajectory">
			<template v-for="value in routeArr" :key="value.routeId">
				<p @click="jumpToRouter(value.routeName)" @mouseover="mouseOverPages(value.routeName)" @mouseout="curPageName = ''">
					<a href="javascript:void(0);"></a>
				</p>
			</template>
		</div>

		<div id="tabContainer">
			<!-- 主要这里的 v-slot={Component}只能是Component而不能是其他变量名如componentA或者componentB，估计是Vue内定的变量名;
				并且要求和<component>标签中的:is绑定的变量名一致 -->
			<router-view v-slot="{ Component }">
				<component :is="Component"></component>
			</router-view>
		</div>
	</div>
</template>
<script setup>
import PageChange from "./components/PageChange.vue";
import { onMounted, shallowRef, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();
let curPageName = ref("");
let timer;

const routeArr = [
	{ routeId: "1", routeName: "/music", pageName: "紫玉筝", bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Saturn.png" },
	{ routeId: "2", routeName: "/game", pageName: "礼乐庭", bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Venus.png" },
	{ routeId: "3", routeName: "/aphorism", pageName: "千金竹", bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/earth.png" },
	{ routeId: "4", routeName: "/share_video", pageName: "伯牙琴", bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Mars.png" },
	{ routeId: "5", routeName: "/docu", pageName: "霞珠算", bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Jupiter.png" },
	{ routeId: "6", routeName: "/landscape", pageName: "碧落录", bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Mercury.png" },
	{ routeId: "7", routeName: "/like", pageName: "崇文阁", bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Uranus.png" },
];
const jumpToRouter = (route) => {
	showTab();
	router.push(route);
};
const showTab = () => {
	document.getElementById("tabContainer").style.display = "block";
};
const mouseOverPages = (add) => {
	let obj = routeArr.find((value) => {
		return value.routeName === add;
	});
	curPageName.value = obj.pageName;
};

// 生命周期钩子
onMounted(() => {
	let domArr = document.querySelectorAll(".trajectory p a");
	for (let i = 0; i < routeArr.length; i++) {
		domArr[i].style.backgroundImage = `url(${routeArr[i].bg})`;
	}
	// 页面路由跳转后切换场景
	if (router.currentRoute.value.path == "/") {
		router.push("/");
		document.getElementById("tabContainer").style.display = "none";
	} else {
		document.getElementById("tabContainer").style.display = "block";
		document.getElementById("tabContainer").style.zIndex = "5";
	}

	//时钟
	const hourEl = document.querySelector(".hour");
	const minuteEl = document.querySelector(".minute");
	const secondEl = document.querySelector(".second");
	const timeEl = document.querySelector(".time");
	const dateEl = document.querySelector(".date");
	const days = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

	let time, month, day, date, hours, minutes, seconds;
	function setTime() {
		time = new Date();
		month = time.getMonth();
		day = time.getDay();
		date = time.getDate();
		hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
		minutes = time.getMinutes();
		seconds = time.getSeconds();
		hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 12, 0, 360)}deg)`;
		minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
		secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
		timeEl.innerHTML = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds} `;
		dateEl.innerHTML = `${days[day]} ,  ${months[month]}月${date}日`;
	}

	const scale = (num, in_min, in_max, out_min, out_max) => {
		return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
	};
	setTime();
	timer = setInterval(setTime, 1000);
});
onBeforeMount(() => {
	clearInterval(timer);
	timer = null;
});
</script>

<style scoped lang="scss">
// 时钟
.clock-container {
	position: absolute;
	width: 98%;
	height: 98%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	.needle {
		background-image: linear-gradient(to bottom, #519bdc, #ffffff);
		box-shadow: 0 0 1rem 5px rgb(42, 187, 244);
		position: absolute;
		z-index: -5;
		top: 55%;
		left: 51.5%;
		height: 4rem;
		width: 1px;
		transform-origin: bottom center;
		transition: all 0.5s ease-in;
	}
	.needle.hour {
		transform: translate(-50%, -100%) rotate(0deg);
	}
	.needle.minute {
		transform: translate(-50%, -100%) rotate(0deg);
		height: 5.5rem;
		background-image: linear-gradient(to top, #0084ff, #ffffff, #ff0303);
		box-shadow: 0 0 1rem 5px rgb(255, 0, 0);
	}
	.needle.second {
		transform: translate(-50%, -100%) rotate(0deg);
		height: 7.6rem;
		background-image: linear-gradient(to top, #000000, #ffffff);
		box-shadow: 0 0 1rem 5px rgba(255, 255, 255, 1);
	}
	.time {
		font-size: 3.5rem;
		font-weight: bolder;
		position: absolute;
		color: #000;
		top: 0%;
		left: 40%;
		animation: changeColor 5s linear infinite;
	}
	.date {
		position: absolute;
		top: 10%;
		left: 45%;
		color: #000;
		font-size: 1.5rem;
		font-weight: bolder;
		letter-spacing: 0.3px;
		animation: changeColor 5s linear infinite;
	}
	@keyframes changeColor {
		0% {
			color: #000000;
		}
		40% {
			color: #191919;
		}
		50% {
			color: #fff;
		}
	}
}
#curPageName {
	position: absolute;
	width: 98%;
	height: 98%;
	display: flex;
	flex-direction: column;
	top: 5%;
	left: 5%;
	width: 5rem;
	color: #fff;
	font-size: 5rem;
	white-space: pre-wrap;
	font-weight: bolder;
	font-family: "LiSu";
	transition: 0.5s;
}

.trajectory {
	z-index: 0;
	position: relative;
	overflow: hidden;
	margin: 0;
	padding: 0;
	height: 45rem;
	left: 0;
	top: 0;
	p {
		position: absolute;
		border-radius: 50%;
		border: 1px dotted rgba(255, 255, 255, 0.2);
		&::before {
			position: absolute;
			left: 20%;
			bottom: 0%;
			color: #fff;
			font-weight: bolder;
			opacity: 0;
			transition: 0.5s;
		}
		&:hover::before {
			opacity: 1;
		}
		a {
			left: 9%;
			top: 9%;
			border-radius: 50%;
			position: absolute;
			background-size: cover;
			display: inline-block;
			opacity: 1;
		}
		&:hover a {
			box-shadow: inset 0 -2px 0.1rem 1px rgb(0, 0, 0), 0 0 1.5rem 10px rgb(66, 229, 248);
		}
		//水星公转圈
		&:nth-of-type(1) {
			z-index: 1;
			left: 46.3%;
			top: 45%;
			width: 8rem;
			height: 8rem;
			animation: rotate 3s linear infinite;
			//水星
			a {
				left: 8%;
				top: 8%;
				width: 1rem;
				height: 1rem;
				background-position: center;
				animation: rotate 586s linear infinite;
			}
		}
		//金星公转
		&:nth-of-type(2) {
			z-index: 0;
			left: 44.7%;
			top: 41.5%;
			width: 11rem;
			height: 11rem;
			animation: rotate 7.2s linear infinite;
			//金星
			a {
				left: 8%;
				top: 8%;
				width: 1.3rem;
				height: 1.3rem;
				animation: rotate 2430s linear infinite;
				background-position: center;
			}
		}
		//地球公转
		&:nth-of-type(3) {
			z-index: -1;
			left: 42.5%;
			top: 37%;
			width: 15rem;
			height: 15rem;
			animation: rotate 12s linear infinite;
			a {
				left: 9%;
				top: 9%;
				width: 1.5rem;
				height: 1.5rem;
				animation: rotate 10s linear infinite;
				background-position: center;
			}
		}
		//火星公转
		&:nth-of-type(4) {
			z-index: -2;
			left: 40.5%;
			top: 32%;
			width: 19rem;
			height: 19rem;
			animation: rotate 24s linear infinite;
			a {
				left: 12%;
				top: 12%;
				width: 1.1rem;
				height: 1.1rem;
				animation: rotate 10s linear infinite;
				background-position: center;
			}
		}
		//木星公转
		&:nth-of-type(5) {
			z-index: -3;
			left: 37.5%;
			top: 27%;
			width: 24rem;
			height: 24rem;
			animation: rotate 144s linear infinite;
			a {
				left: 10%;
				top: 10%;
				width: 2.5rem;
				height: 2.5rem;
				animation: rotate 4s linear infinite;
				background-position: center;
			}
		}
		//土星公转
		&:nth-of-type(6) {
			z-index: -4;
			left: 35.5%;
			top: 23%;
			width: 28rem;
			height: 28rem;
			animation: rotate 360s linear infinite;
			a {
				left: 11%;
				top: 10%;
				width: 2rem;
				height: 2rem;
				transform: rotate(-30deg);
				image-orientation: 30deg;
				animation: rotate 4s linear infinite;
				background-position: center;
			}
		}
		//天王星
		&:nth-of-type(7) {
			z-index: -5;
			left: 33%;
			top: 17.5%;
			width: 33rem;
			height: 33rem;
			animation: rotate 1008s linear infinite;
			a {
				left: 13%;
				top: 10%;
				width: 1.6rem;
				height: 1.6rem;
				transform: rotate(-30deg);
				image-orientation: 30deg;
				animation: rotate 7s linear infinite;
				background-position: center;
			}
		}
		&:hover {
			cursor: pointer;
			box-shadow: inset 0 0 2rem 5px rgb(255, 255, 255), 0 0 1.5rem 3px rgb(160, 207, 252);
			animation-play-state: paused;
		}
	}
}

@keyframes rotate {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}

#tabState {
	position: fixed;
	z-index: -4;
	left: 48.6%;
	top: 50%;
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	border: transparent;
	color: #ffffff;
	background: #000000;
	background-image: url("https://images-pc.oss-cn-hongkong.aliyuncs.com/app/sun.png");
	background-size: 100% 100%;
	background-position: center;
	animation: rotateSun 60s ease-in-out infinite both;
	@keyframes rotateSun {
		100% {
			transform: rotate(360deg);
		}
	}
	&::before {
		content: "";
		position: absolute;
		left: -460%;
		top: -460%;
		width: 1000%;
		height: 1000%;
		border-radius: 50%;
		background: #000000;
		animation: ping 5s ease-in-out infinite both;
	}
	@keyframes ping {
		0% {
			-webkit-transform: scale(0.3);
			transform: scale(0.3);
			opacity: 0.7;
			background: #fffefe;
		}
		70% {
			-webkit-transform: scale(1.4);
			transform: scale(1.4);
			opacity: 0.3;
			background: #152454;
		}
		100% {
			-webkit-transform: scale(2.5);
			transform: scale(2.5);
			opacity: 0.1;
			background: #671711;
		}
	}
}

#tabContainer {
	position: absolute;
	z-index: 2;
	left: 0;
	top: 0;
	background: #000000;
	width: 100%;
	height: 100%;
	color: #ffffff;
}
</style>
