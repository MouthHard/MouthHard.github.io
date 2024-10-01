<template>
	<div>
		<!-- 主页面加载页 -->
		<!-- <PageChange></PageChange> -->
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
				<p>
					<router-link :to="value.routeName" @click="showTab()"></router-link>
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
const routeArr = [
	{ routeId: "1", routeName: "/landscape", pageName: "碧落录" },
	{ routeId: "2", routeName: "/game", pageName: "礼乐庭" },
	{ routeId: "3", routeName: "/aphorism", pageName: "登霞志" },
	{ routeId: "4", routeName: "/share_video", pageName: "伯牙琴" },
	{ routeId: "5", routeName: "/docu", pageName: "千金竹" },
	{ routeId: "6", routeName: "/music", pageName: "紫玉筝" },
	{ routeId: "7", routeName: "/like", pageName: "崇文阁" },
];
const showTab = () => {
	document.getElementById("tabContainer").style.display = "block";
};
let timer;
// 生命周期钩子
onMounted(() => {
	// 根据选中的行星显示当前行星的用途和内容
	let roundArr = document.querySelectorAll(".trajectory")[0].childNodes;
	roundArr.forEach((item) => {
		item.addEventListener("mouseover", () => {
			let hrefString = item.childNodes[0].href.toString();
			let curHref = hrefString.substring(hrefString.lastIndexOf("/"));
			//嵌套数组检索，检查嵌套数组A中是否有B数据。
			// ES6方法：Array.find((value,index,arr)=>{ return 条件表达式;})
			// value：每一次迭代查找的数组元素。
			// index：每一次迭代查找的数组元素索引。
			// arr：被查找的数组。
			// 返回符合条件表达式的第一个value
			// Array.findIndex((value,index,arr)=>{ return 条件表达式;})

			let obj = routeArr.find((value, index, arr) => {
				// 如果B元素的和嵌套数组A中某个子元素的孙元素routeName相等，那么就返回嵌套数组A的该子元素Object并结束find检索，最后得到一个对象（子对象）
				return value.routeName === curHref;
			});

			//而找到这个对象obj后，我们只取其中的pageName属性的值 用于更新curPageName
			curPageName.value = obj.pageName;
		});
		item.addEventListener("mouseout", () => {
			curPageName.value = "";
		});
	});
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

	let time, month, day, date, hours, hoursForClock, minutes, seconds, ampm;
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
		/* opacity: 0.5; */
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
	}

	.date {
		position: absolute;
		top: 10%;
		left: 45%;
		color: #000;
		font-size: 1.5rem;
		font-weight: bolder;
		letter-spacing: 0.3px;
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
				background-image: url("https://wow.techbrood.com/uploads/1811/solar_system/mercury.png");
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
				background-image: url("https://wow.techbrood.com/uploads/1811/solar_system/venus.png");
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
				background-image: url("https://smd-cms.nasa.gov/wp-content/uploads/2023/09/poster_earth_front_a.jpg?w=640");
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
				background-image: url("https://wow.techbrood.com/uploads/1811/solar_system/mars.png");
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
				background-image: url("https://wow.techbrood.com/uploads/1811/solar_system/jupiter.png");
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
				background-image: url("https://www.solarsystemscope.com/textures/previews/preview_saturn.jpg");
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
				background-image: url("https://ts1.cn.mm.bing.net/th/id/R-C.bf21cc821d631bb040d08821089114ff?rik=Wkdxc93aag9U7A&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2fw640h426%2f20180301%2fb237-fwnpcns5331895.jpg&ehk=KdFIfKNoYisTiCdcWL4NLIAcBtr82Bfa3vYlsBtOR4U%3d&risl=&pid=ImgRaw&r=0");
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
	background-image: url("https://wow.techbrood.com/uploads/1811/solar_system/sun.png");
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
		border: 4px double #68e6ff;
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
		80% {
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
	// vue配合父子组件 子组件使用flex＋ 滚动条时，父组件最好不要限制高度，否则子组件的元素超过父组件的高度或者长度时会溢出

	color: #ffffff;
}
</style>
