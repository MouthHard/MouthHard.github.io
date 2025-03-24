<template>
	<div id="landMain">
		<!-- 主页面加载页 -->
		<PageChange></PageChange>

		<div id="container">
			<flipbook class="flipbook" :pages="pages">
				<button>试试保持鼠标点击不动然后鼠标向左向右移动翻照片</button>
				<button class="return-button" @click="router.push('/')">返回主页</button>
			</flipbook>
		</div>
	</div>
</template>

<script setup>
import flipbook from "flipbook-vue";
import PageChange from "./PageChange.vue";
import router from "@/router";

const pages = [];
for (let i = 0; i <= 22; i++) {
	pages.push(`https://images-pc.oss-cn-hongkong.aliyuncs.com/landscape/${i}.webp`);
}

</script>

<style scoped lang="scss">
* {
	margin: 0;
	padding: 0;
}
.flipbook {
	margin: auto;
	width: 80vw;
	height: 80vh;
	overflow: hidden;
}

#landMain {
	height: 100vh;
	background: url("@/assets/Cameraframe.jpg");
	background-size: auto 100%;
	background-position: center;
	background-repeat: no-repeat;
	#container {
		display: flex;
		width: 100%;
		height: 100%;
		perspective: 150rem;
	}
	button {
		margin-left: 17%;
		border: 2px solid white;
		background: transparent;
		font-size: 18px;
		font-weight: bolder;
		width: 25%;
		height: 4rem;
		position: relative;
		transition: 1s;
		opacity: 0.7;
		color: #ffffff;
		&:hover {
			opacity: 1;
			cursor: pointer;
			box-shadow: 0 0 10px 5px rgb(255, 255, 255);
		}
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			transition: all 0.5s;
		}
		&:hover::before {
			border: 4px double rgb(253, 1, 1);
			animation: clippath 1s infinite;
		}
		@keyframes clippath {
			0%,
			100% {
				clip-path: inset(0 0 95% 0);
			}
			25% {
				clip-path: inset(0 95% 0 0);
			}
			50% {
				clip-path: inset(95% 0 0 0);
			}
			75% {
				clip-path: inset(0 0 0 95%);
			}
		}
	}
}
</style>
