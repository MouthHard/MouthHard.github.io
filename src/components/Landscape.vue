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
import { onMounted, ref } from "vue";

//一般来说 addEventListener是因为  doucment获取dom元素时为空，是因为vue3将setup 设计为 生命周期的created阶段，此时dom元素并没有创建好
//因此，要在mouted阶段获取dom元素才行
let imgShow = ref(false);

const pages = [
	null,
	"https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
	"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
	"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
	"https://picx.zhimg.com/80/v2-338e4a31d4649edc0d8ba7f530dc3c84_720w.webp?source=1940ef5c",
	"https://picx.zhimg.com/v2-89231f34d2134a802eb84a56e305ff9f_r.jpg?source=1940ef5c",
	"https://pica.zhimg.com/80/v2-9e8acd2eeb0228874afdd986da57d80f_720w.webp?source=1940ef5c",
	"https://picx.zhimg.com/v2-87a0f3a7ebb79ceeb4993251a0eb5026_r.jpg?source=1940ef5c",
	"https://picx.zhimg.com/80/v2-c7eda2e247ec97d1a8fcc7a0e1b5ef54_720w.webp?source=1940ef5c",
	"https://picx.zhimg.com/80/v2-2bd4f37cad8327629b3485e905ade9f8_720w.webp?source=1940ef5c",
	"https://picx.zhimg.com/80/v2-ad60c5f5ab4858d727045481c0cfd8c5_720w.webp?source=1940ef5c",
	"https://i0.hdslb.com/bfs/article/5943a5e2bc5a88c762abbbeff1155c30590b8d49.jpg@progressive.webp",
	"https://i0.hdslb.com/bfs/article/61034a613d8b4fd63f02bc46d200422ea454912b.jpg@progressive.webp",
	"https://i0.hdslb.com/bfs/article/6279d1cb858c39740d966ffbac2dc50a99a17d8c.jpg@progressive.webp",
	"https://i0.hdslb.com/bfs/article/89eb2df21c62edb43b664f532e5436974b7ad4fa.jpg@progressive.webp",
	"https://i0.hdslb.com/bfs/article/86cdd7bfa8a596da0983fa0112c554a0cfaae684.jpg@progressive.webp",
	"https://i0.hdslb.com/bfs/article/7c852817d0e1da0b66fedeb71c45960932db377b.jpg@progressive.webp",
	"https://i0.hdslb.com/bfs/article/698a97cf83c7d13087a6f639980c67eb03464ea7.jpg@progressive.webp",
	"https://i0.hdslb.com/bfs/article/99590573d613cd44b437a981f1746ab91a460ff1.jpg@progressive.webp",
	"https://i0.hdslb.com/bfs/article/5430a7238bb85eed25c12bed732513469e5adad7.jpg@progressive.webp",
	"https://i0.hdslb.com/bfs/article/cb0f07cc87c26f57481dc5c9f29bdff05e7dced5.jpg@progressive.webp",
];
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
