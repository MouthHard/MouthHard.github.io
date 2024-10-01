<template>
	<button :class="{ isActive: activeTab == 0 }" @click="handelToogel(0)">专辑</button>
	<button :class="{ isActive: activeTab == 1 }" @click="handelToogel(1)">MV</button>
	<input  type="text" placeholder=" 🔍  搜 索 " />
	<footer>
		<div v-show="activeTab == 0">
			<button :class="{ isSubActive: subActiveTab == 0 }" @click="subhandelToogel(0)">收藏专辑</button>
			<button :class="{ isSubActive: subActiveTab == 1 }" @click="subhandelToogel(1)">已购专辑</button>
			<p>
				关注的歌手请前往
				<a href="javascript:;">我的主页 → 关注 → 歌手</a>
				<svg @click="closeMsgWindow" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
					<path
						fill="currentColor"
						fill-rule="evenodd"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="4"
						d="m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13z"
						clip-rule="evenodd" />
				</svg>
			</p>

			<div v-show="subActiveTab == 0" id="myCollectSubTab">
				<div v-for="singer in albumList" :key="singer.singerId" class="singer-all">
					<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
						<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z" />
					</svg>
					<img :src="singer.pigSrc" alt="" />
					<h5>{{ singer.album }}</h5>
					<h6>{{ singer.name }}</h6>
				</div>
			</div>
			<div v-show="subActiveTab == 1" id="myCollectSecTab">
				<div v-for="singer in albumList" :key="singer.singerId" class="singer-all">
					<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
						<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z" />
					</svg>
					<img :src="singer.pigSrc" alt="" />
					<h5>{{ singer.album }}</h5>
					<h6>{{ singer.name }}</h6>
				</div>
			</div>
		</div>
		<div v-show="activeTab == 1" id="myCollectMv">
			<div v-for="singer in mvList" :key="singer.singerId" class="singer-all">
				<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
					<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z" />
				</svg>
				<img :src="singer.pigSrc" alt="" />
				<h5>{{ singer.album }}</h5>
				<h6>{{ singer.name }}</h6>
				<h4>{{ singer.playNum }}</h4>
				<h4>{{ singer.time }}</h4>
			</div>
		</div>
	</footer>
</template>
<script setup>
import { onMounted, ref } from "vue";

let activeTab = ref(0); //默认选中第一个tab
let subActiveTab = ref(0); //默认选中第一个tab
const handelToogel = (index) => {
	activeTab.value = index;
};
const subhandelToogel = (index) => {
	subActiveTab.value = index;
};
const closeMsgWindow = () => {
	document.querySelector("footer p").style.display = "none";
};
const albumList = [
	{
		singerId: 0,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 1,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 2,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 3,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 4,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 5,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
];
const mvList = [
	{
		singerId: 0,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		time: "02:01",
		playNum: " ▶ 233.2万",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 1,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		time: "02:01",
		playNum: " ▶ 233.2万",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 2,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		time: "02:01",
		playNum: " ▶ 233.2万",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 3,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		time: "02:01",
		playNum: " ▶ 233.2万",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 4,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		time: "02:01",
		playNum: " ▶ 233.2万",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
	{
		singerId: 5,
		album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
		name: "Olivier Deriviere",
		time: "02:01",
		playNum: " ▶ 233.2万",
		pigSrc: "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
	},
];
</script>
<style lang="less" scoped>
svg:hover {
	cursor: pointer;
	color: #ff0000;
}
input {
	position: fixed;
	background: rgba(60, 80, 99, 0.5);
	border: none;
	right: 10%;
	top: 10%;
	color: #fff;
	height: 5%;
	width: 10%;
	transition: 0.5s;
	border-radius: 10px;
	&:hover{
		box-shadow:inset 0 0 15px 1px #0067bb;
	}
	&:focus {
		width: 25%;
		outline: none;
		border-bottom: 1px solid #a8cbff;
	}
}
footer {
	padding: 15px 0 0 15px;
	p {
		padding: 15px;
		background: #000;
		a {
			color: #3f8bd1;
			&:hover {
				color: #63b0f8;
			}
		}
		svg {
			margin-left: 2rem;
		}
	}
	#myCollectSubTab,
	#myCollectSecTab,
	#myCollectMv {
		margin: 1rem 0 0 1rem;
		display: flex;
		flex-wrap: wrap;
		.singer-all {
			width: 20%;
			margin-left: 2%;
			margin-top: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			
			background: transparent;
			position: relative;
			transition: 1s;
			border-radius: 15px;
			img {
				width: 100%;
				height: 60%;
				background-size: cover;
				margin: 0 0 10px 0;
				transition: 1s;
				border-radius: 10px;
			}
			h5,
			h6 {
				width: 80%;
				margin: 5px;
			}

			h6 {
				color: #9e9c9c;
				font-weight: normal;
				&:hover {
					color: #c8c7c7;
				}
			}
			svg {
				position: absolute;
				z-index: 1;
				left: 41%;
				top: 23%;
				opacity: 0;
				transition: 0.5s;
				font-weight: bolder;
			}
			&:hover {
				cursor: pointer;
				background: rgba(0, 0, 0, 0.5);
			}
			&:hover img {
				cursor: pointer;
				opacity: 0.6;
			}
			&:hover svg {
				opacity: 1;
			}
		}
	}
	#myCollectMv {
		position: relative;
		h4 {
			width: auto;
			position: absolute;
			font-size: 0.8rem;
			padding: 5px;
			text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;
		}
		h4:nth-of-type(1) {
			top: -2%;
			right: 3%;
		}
		h4:nth-of-type(2) {
			background: #494949;

			right: 3%;
			top: 41%;
		}
	}
}
button {
	background: transparent;
	color: #fff;
	border: none;
	padding: 10px 15px;
	transition: 0.5s;
	border-radius: 15px;
	margin: 15px 15px 0 15px;
	&:hover {
		cursor: pointer;
		background: linear-gradient(to right, #3474af, #000000);
	}
}
.isActive {
	transition: 0.5s;
	text-align: center;

	font-weight: bolder;
	border-bottom: 2px solid #1eff00;
}
.isSubActive {
	transition: 0.5s;
	text-align: center;
	font-weight: bolder;
	box-shadow: inset 0 0 15px 0 #108a00;
}
</style>
