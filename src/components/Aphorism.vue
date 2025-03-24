<template>
	<div id="land-con">
		<!-- 主页面加载页 -->
		<!-- <PageChange></PageChange> -->
		<div class="slider-container">
			<div id="left-slide">
				<span v-for="value in imgLeftArr" :key="value.imgId">
					<div class="flip-card">
						<section>
							<h3>创作背景</h3>
							<h4> </h4>
							<h4>{{ noteRightArr[value.imgId]?.background }}</h4>
							<h3 v-if="noteRightArr[value.imgId]?.product!==''">作者 （ {{ noteRightArr[value.imgId]?.product }}）</h3>
							<h4>{{ noteRightArr[value.imgId]?.author }}</h4>
						</section>
						<img :src="value.imgSrc" />
					</div>
				</span>
			</div>

			<div id="right-slide">
				<p v-for="note in noteRightArr" :key="note.id" @mouseover="rotateLeftSlide()" @mouseout="rotateLeftSlideBack()" @click="openNewWindow(note.link)"> {{ note.poem }} </p>
			</div>

			<div id="action-buttons">
				<button class="down-button">▽</button>
				<button class="return-button" @click="router.push('/')">☾</button>
				<button class="up-button">▲</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, reactive, nextTick } from "vue";
import PageChange from "./PageChange.vue";
import router from "@/router";
import axios from "axios";
const imgLeftArr = [];
const noteRightArr = ref([]);
for (let i = 0; i <= 39; i++) {
	imgLeftArr.push({
		imgId: i,
		imgSrc: `https://images-pc.oss-cn-hongkong.aliyuncs.com/aphorism/${i}.webp`,
	});
}

const openNewWindow = (link) => {
	window.open(link, "_blank");
};

//读取阿里云oss里面的json文件
async function fetchPublicJsonWithAxios(url) {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("读取json文件失败:", error);
		throw error;
	}
}
const publicJsonUrl = "https://images-pc.oss-cn-hongkong.aliyuncs.com/aphorism/poem/aphorismList.json";
fetchPublicJsonWithAxios(publicJsonUrl)
	.then((data) => {
		noteRightArr.value = data;
	})
	.catch((error) => {
		console.error("axios读取json文件失败:", error);
	});

const rotateLeftSlide = () => {
	document.querySelectorAll(" .flip-card").forEach((item) => {
		item.style.transform = "rotateY(180deg)";
		item.style.transition = "transform 1s";
	});
};
const rotateLeftSlideBack = () => {
	document.querySelectorAll(".flip-card").forEach((item) => {
		item.style.transform = "rotateY(0deg)";
		item.style.transition = "transform 1s";
	});
};
onMounted(() => {
	//滑动图片和诗句
	const initSlider = () => {
		const sliderContainer = document.querySelector(".slider-container");
		const slideRight = document.getElementById("right-slide");
		const slideLeft = document.getElementById("left-slide");
		const upButton = document.querySelector(".up-button");
		const downButton = document.querySelector(".down-button");
		const slidesLength = slideLeft.querySelectorAll("img").length;
		let activeSlideIndex = 0;

		upButton.addEventListener("click", () => changeSlide("up"));
		downButton.addEventListener("click", () => changeSlide("down"));
		const changeSlide = (direction) => {
			downButton.classList.add("down-active");
			upButton.classList.add("up-active");
			setTimeout(() => {
				upButton.classList.remove("up-active");
				downButton.classList.remove("down-active");
			}, 1000);
			const sliderHeight = sliderContainer.clientHeight;
			if (direction === "up") {
				activeSlideIndex++;
				if (activeSlideIndex > slidesLength - 1) {
					activeSlideIndex = 0;
				}
			} else if (direction === "down") {
				activeSlideIndex--;
				if (activeSlideIndex < 0) {
					activeSlideIndex = slidesLength - 1;
				}
			}
			slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
			slideLeft.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
		};
	};
	initSlider();
});
</script>

<style scoped lang="scss">
* {
	margin: 0;
	padding: 0;
}
body {
	font-family: "Open Sans", sans-serif;
	height: 100vh;
}
.slider-container {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100vh;
	#left-slide,
	#right-slide {
		position: absolute;
		top: 0;
		height: 100%;
		width: 45%;
	}
	#left-slide {
		left: 0;
		transition: transform 0.5s ease-in-out;
		span {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			perspective: 40rem;
			overflow: hidden;
			.flip-card {
				transform-style: preserve-3d;
				position: relative;
				left: 5%;
				width: 90%;
				height: 90%;
			}
			section {
				position: absolute;
				width: 100%;
				height: 100%;
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: rgb(255, 254, 254);
				transform: rotateY(180deg);
				backface-visibility: hidden;
				h3 {
					color: #b4e8fc;
					margin: 2rem 0 10px;
				}
				h4 {
					margin: 10px 0;
					line-height: 2;
				}
			}
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: contain;
				backface-visibility: hidden;
			}
		}
	}

	#right-slide {
		right: 1%;
		box-shadow: -1rem 0 2rem 1rem rgba(0, 0, 0, 1);
		transition: transform 0.5s ease-in-out;
		p {
			padding: 0;
			background: rgba(0, 0, 0, 0.7);
			align-items: right;
			color: #ffffff;
			width: 100%;
			height: 100%;
			display: flex;
			font-size: 1.2rem;
			margin: 0;
			font-weight: bolder;
			flex-direction: column;
			justify-content: center;
			&:hover {
				cursor: pointer;
				box-shadow: 1rem 1rem 2rem 1rem rgba(0, 0, 0, 1), inset 0.5rem 0 2rem 2px rgba(0, 0, 0, 1);
				animation: focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
				background-image: linear-gradient(to bottom, #1faa77 0%, #000000 15%, #000000 85%, #1f83aa 100%);
				text-align: center;
			}
			@keyframes focus-in-contract-bck {
				0% {
					letter-spacing: 1em;

					-webkit-transform: translateZ(300px);
					transform: translateZ(300px);
					-webkit-filter: blur(6px);
					filter: blur(6px);
					-webkit-transform-origin: 50% 50%;
					transform-origin: 50% 50%;
					opacity: 0;
				}
				100% {
					-webkit-transform: translateZ(12px);
					transform: translateZ(12px);
					-webkit-filter: blur(0);
					filter: blur(0);
					opacity: 1;
					-webkit-transform-origin: 50% 50%;
					transform-origin: 50% 50%;
				}
			}
		}
	}
	@keyframes downBtn {
		30% {
			top: 5%;
		}
		60% {
			top: 90%;
		}
		90% {
			top: 45%;
		}
	}
	@keyframes upBtn {
		30% {
			top: 90%;
		}
		60% {
			top: 5%;
		}
		90% {
			top: 45%;
		}
	}
	.up-active {
		animation: upBtn 0.8s forwards;
	}
	.down-active {
		animation: downBtn 0.8s forwards;
	}
	#action-buttons {
		position: absolute;
		left: 45%;
		width: 9%;
		height: 100%;
		button {
			color: #ffffff;
			font-family: "Times New Roman", Times, serif;
			font-weight: bolder;
			cursor: pointer;
			width: 3rem;
			height: 3.5rem;
			font-size: 1.2rem;
			position: absolute;
			left: 50%;
			top: 45%;
		}
		.up-button,
		.down-button {
			&::before,
			&::after {
				content: "";
				position: absolute;
				width: 20px;
				height: 20px;
				transition: 0.3s ease-in-out;
			}
			&::before {
				top: -5px;
				right: -5px;
				border-top: 1px solid #ffffff;
				border-right: 1px solid #ffffff;
			}
			&::after {
				left: -5px;
				bottom: -8px;
				border-bottom: 1px solid #ffffff;
				border-left: 1px solid #ffffff;
			}
			&:hover::before,
			&:hover::after {
				width: calc(100% + 10px);
				height: calc(100% + 10px);
			}
		}
		.down-button {
			border-top: 0.1rem groove #7689be;
			border-bottom: 0.4rem groove #7689be;
			background: conic-gradient(from 0.5turn at 50% 50%, #ffffff, 10deg, #3f5a96, 350deg, #ff4646);
			transform: translateX(-100%) translateY(75%);
		}
		.up-button {
			border-top: 0.1rem groove #7689be;
			border-bottom: 0.4rem groove #7689be;
			transform: translateY(-145%);
			background: conic-gradient(from 1turn at 50% 50%, #ffffff, 10deg, #3f5a96, 350deg, #ff4646);
		}
		.return-button {
			position: relative;
			height: 3rem;
			width: 3rem;
			display: inline-block;
			background: conic-gradient(from 0.25turn at 50% 50%, #ffffff, 10deg, #3f5a96, 350deg, #ff4646);
			transform: translateX(-45%) translateY(-35%);
			&:hover {
				transition-delay: 0.5s;
				transition: 0.5s;
				box-shadow: 0 0 2rem 1rem rgb(255, 255, 255);
			}
			&::before,
			&::after {
				content: "";
				position: absolute;
				width: 5rem;
				height: 5rem;
				transition: 0.5s ease-in-out;
			}
			&::before {
				top: -20rem;
				left: -45rem;
				border-top: 1rem solid #ffffff;
				border-left: 1rem solid #ffffff;
			}
			&::after {
				bottom: -24rem;
				right: -45rem;
				border-bottom: 1rem solid #ffffff;
				border-right: 1rem solid #ffffff;
			}
			&:hover::before,
			&:hover::after {
				width: 20px;
				height: 20px;
			}
			&:hover::before {
				top: -5px;
				left: -5px;
				border-top: 1px solid #ffffff;
				border-left: 1px solid #ffffff;
			}
			&:hover::after {
				right: -5px;
				bottom: -5px;
				border-bottom: 1px solid #ffffff;
				border-right: 1px solid #ffffff;
			}
		}
		@keyframes returnBtn {
			0%,
			100% {
				background: conic-gradient(from 0.1turn at 50% 50%, #ff0000, 10deg, #3f5a96, 350deg, #ffffff);
			}
			20% {
				background: conic-gradient(from 0.2turn at 50% 50%, #ff0000, 10deg, #3f5a96, 350deg, #ffffff);
			}
			40% {
				background: conic-gradient(from 0.5turn at 50% 50%, #ff0000, 10deg, #3f5a96, 350deg, #ffffff);
			}
			60% {
				background: conic-gradient(from 0.7turn at 50% 50%, #ff0000, 10deg, #3f5a96, 350deg, #ffffff);
			}
			80% {
				background: conic-gradient(from 0.9turn at 50% 50%, #ff0000, 10deg, #3f5a96, 350deg, #ffffff);
			}
		}
		@keyframes text-flicker-in-glow {
			0% {
				opacity: 0;
			}
			10% {
				opacity: 0;
				text-shadow: none;
			}
			10.1% {
				opacity: 1;
				text-shadow: none;
			}
			10.2% {
				opacity: 0;
				text-shadow: none;
			}
			20% {
				opacity: 0;
				text-shadow: none;
			}
			20.1% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
			}
			20.6% {
				opacity: 0;
				text-shadow: none;
			}
			30% {
				opacity: 0;
				text-shadow: none;
			}
			30.1% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
			}
			30.5% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
			}
			30.6% {
				opacity: 0;
				text-shadow: none;
			}
			45% {
				opacity: 0;
				text-shadow: none;
			}
			45.1% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
			}
			50% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
			}
			55% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
			}
			55.1% {
				opacity: 0;
				text-shadow: none;
			}
			57% {
				opacity: 0;
				text-shadow: none;
			}
			57.1% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
			}
			60% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
			}
			60.1% {
				opacity: 0;
				text-shadow: none;
			}
			65% {
				opacity: 0;
				text-shadow: none;
			}
			65.1% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
			}
			75% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
			}
			75.1% {
				opacity: 0;
				text-shadow: none;
			}
			77% {
				opacity: 0;
				text-shadow: none;
			}
			77.1% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
			}
			85% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
			}
			85.1% {
				opacity: 0;
				text-shadow: none;
			}
			86% {
				opacity: 0;
				text-shadow: none;
			}
			86.1% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
			}
			100% {
				opacity: 1;
				text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
				transform: skew(15deg, 10deg);
			}
		}
	}
}
</style>
