<template>
	<div id="cardCon">
		<button @click="rotateCard">刷新更多up</button>
		<button @click="router.push('/')">返回</button>
		<div class="card" v-for="item in cardArr[cardIndex]?.arr" :key="item.subId" @click="openNewWindow(item.upLink)">
			<img :src="item.imgSrc" />
			<h5>{{ item.upName }}</h5>
			<h6>{{ item.upSign }}</h6>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
					<path
						fill="white"
						d="M259.125 16.938L216.22 128.094L97.343 164.25l106.53-4.22l-36.436 94.407L270.156 106.25l50.22 64.406l-61.25-153.72zm50.406 63.687l36.376 102.28l-102.344-6.75l172.063 53.876l-46.5 67.126l128.47-104.28l-116.94-7.69l-71.124-104.56zm-123.467 98.97L20.97 190.437l87.936 71.375l-.375 127.125l27.75-104.907l82.345 66.845L109.345 207.5l76.718-27.906zm71.156 18.968c-22.404 0-44.817 25.943-67.22 77.875c43.462 77.53 88.133 86.365 134.438 0c-22.403-51.93-44.816-77.875-67.22-77.875zm.405 15.687c11.05 8.62 19 30.54 19 56.438c0 25.896-7.95 47.818-19 56.437c-11.05-8.62-19-30.54-19-56.438c0-25.896 7.95-47.818 19-56.437m82.53 10.594l5.19 180.22L266.75 383l140.47 87.438l-30.408-111.313l73.563-103.47l-82.875 69.376l-27.344-100.186zM152.94 309.03l-43.594 159.595l98.906-61.53l120.656 39.436l-90.5-58.217l87.094-54.188l-171.22 56.53l-1.343-81.624z" /></svg
				><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
					<path
						fill="yellow"
						d="M259.125 16.938L216.22 128.094L97.343 164.25l106.53-4.22l-36.436 94.407L270.156 106.25l50.22 64.406l-61.25-153.72zm50.406 63.687l36.376 102.28l-102.344-6.75l172.063 53.876l-46.5 67.126l128.47-104.28l-116.94-7.69l-71.124-104.56zm-123.467 98.97L20.97 190.437l87.936 71.375l-.375 127.125l27.75-104.907l82.345 66.845L109.345 207.5l76.718-27.906zm71.156 18.968c-22.404 0-44.817 25.943-67.22 77.875c43.462 77.53 88.133 86.365 134.438 0c-22.403-51.93-44.816-77.875-67.22-77.875zm.405 15.687c11.05 8.62 19 30.54 19 56.438c0 25.896-7.95 47.818-19 56.437c-11.05-8.62-19-30.54-19-56.438c0-25.896 7.95-47.818 19-56.437m82.53 10.594l5.19 180.22L266.75 383l140.47 87.438l-30.408-111.313l73.563-103.47l-82.875 69.376l-27.344-100.186zM152.94 309.03l-43.594 159.595l98.906-61.53l120.656 39.436l-90.5-58.217l87.094-54.188l-171.22 56.53l-1.343-81.624z" /></svg
				><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
					<path
						fill="red"
						d="M259.125 16.938L216.22 128.094L97.343 164.25l106.53-4.22l-36.436 94.407L270.156 106.25l50.22 64.406l-61.25-153.72zm50.406 63.687l36.376 102.28l-102.344-6.75l172.063 53.876l-46.5 67.126l128.47-104.28l-116.94-7.69l-71.124-104.56zm-123.467 98.97L20.97 190.437l87.936 71.375l-.375 127.125l27.75-104.907l82.345 66.845L109.345 207.5l76.718-27.906zm71.156 18.968c-22.404 0-44.817 25.943-67.22 77.875c43.462 77.53 88.133 86.365 134.438 0c-22.403-51.93-44.816-77.875-67.22-77.875zm.405 15.687c11.05 8.62 19 30.54 19 56.438c0 25.896-7.95 47.818-19 56.437c-11.05-8.62-19-30.54-19-56.438c0-25.896 7.95-47.818 19-56.437m82.53 10.594l5.19 180.22L266.75 383l140.47 87.438l-30.408-111.313l73.563-103.47l-82.875 69.376l-27.344-100.186zM152.94 309.03l-43.594 159.595l98.906-61.53l120.656 39.436l-90.5-58.217l87.094-54.188l-171.22 56.53l-1.343-81.624z" /></svg
				><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
					<path
						fill="lightgreen"
						d="M259.125 16.938L216.22 128.094L97.343 164.25l106.53-4.22l-36.436 94.407L270.156 106.25l50.22 64.406l-61.25-153.72zm50.406 63.687l36.376 102.28l-102.344-6.75l172.063 53.876l-46.5 67.126l128.47-104.28l-116.94-7.69l-71.124-104.56zm-123.467 98.97L20.97 190.437l87.936 71.375l-.375 127.125l27.75-104.907l82.345 66.845L109.345 207.5l76.718-27.906zm71.156 18.968c-22.404 0-44.817 25.943-67.22 77.875c43.462 77.53 88.133 86.365 134.438 0c-22.403-51.93-44.816-77.875-67.22-77.875zm.405 15.687c11.05 8.62 19 30.54 19 56.438c0 25.896-7.95 47.818-19 56.437c-11.05-8.62-19-30.54-19-56.438c0-25.896 7.95-47.818 19-56.437m82.53 10.594l5.19 180.22L266.75 383l140.47 87.438l-30.408-111.313l73.563-103.47l-82.875 69.376l-27.344-100.186zM152.94 309.03l-43.594 159.595l98.906-61.53l120.656 39.436l-90.5-58.217l87.094-54.188l-171.22 56.53l-1.343-81.624z" />
				</svg>
			</span>
		</div>
	</div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import router from "@/router";
import axios from "axios";

const cardArr = ref([]);
let cardIndex = ref(0);

async function getUpsData(url) {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
	
		throw error;
	}
}
const upJsonUrl = "https://images-pc.oss-cn-hongkong.aliyuncs.com/ups/upList.json";
getUpsData(upJsonUrl)
	.then((data) => {
		cardArr.value = data;
	})
	.catch((error) => {
		console.error("axios读取json文件失败:", error);
	});

const rotateCard = () => {
	let cardDoms = document.querySelectorAll(".card");
	cardIndex.value = (cardIndex.value + 1) % cardArr.value.length;
	const cardDomsTiming = {
		duration: 1000,
		iterations: 0.5,
	};
	cardDoms[0].animate({ transform: "perspective(40rem) rotateZ(1100deg) rotateX(25deg) rotateY(-1080deg)" }, cardDomsTiming);
	cardDoms[1].animate({ transform: "perspective(35rem) rotateZ(1035deg) rotateX(-20deg) rotateY(1080deg)" }, cardDomsTiming);
	cardDoms[2].animate({ transform: "perspective(37rem) rotateZ(-1045deg) rotateY(-20deg) rotateX(1080deg) " }, cardDomsTiming);
	cardDoms[3].animate({ transform: "perspective(20rem) rotateZ(1035deg) rotateY(25deg) rotateX(-1080deg)" }, cardDomsTiming);
	cardDoms[4].animate({ transform: "perspective(40rem) rotateZ(1080deg) rotateX(-1135deg)  " }, cardDomsTiming);
	cardDoms[5].animate({ transform: "perspective(40rem) rotateZ(1080deg) rotateX(1135deg) " }, cardDomsTiming);
};
const openNewWindow = (link) => {
	const newWindow = window.open(link, "_blank");
	newWindow.focus();
};

</script>
<style lang="less" scoped>
#cardCon {
	position: relative;
	height: 100vh;
	button {
		position: absolute;
		font-weight: bolder;
		font-size: 1rem;
		width: 9%;
		border: none;
		padding: 10px 15px;
		font-weight: bolder;
		color: #000000;
		left: 3%;
		color: #fff;
		border-radius: 3rem;
		text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0), 0 0 15px rgb(4, 83, 255);
		box-shadow: inset -10px 5px 15px 1px #fff;
		&:hover {
			cursor: pointer;
		}
	}
	button:nth-of-type(1) {
		top: 4%;
		background: linear-gradient(to right, #03152e, #284cb9 48%, #fff 49%, #0094fe 50%, #73caed);
		&:hover {
			color: #ff7b7b;
			box-shadow: inset -10px 5px 15px 1px #fff, 0 0 15px 5px #0040ff;
		}
	}
	button:nth-of-type(2) {
		bottom: 4%;
		background: linear-gradient(to right, #370303, #981414 48%, #fff 49%, #f75353 50%, #fd710d);
		&:hover {
			color: #81b9fc;
			box-shadow: inset -10px 5px 15px 1px #fff, 0 0 15px 5px #ff0000;
		}
	}
	.card {
		height: 40%;
		width: 14%;
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 16px;
		box-sizing: border-box;
		border: 10px solid transparent;
		background-clip: padding-box, border-box;
		background-origin: padding-box, border-box;
		transform-style: preserve-3d;
		box-shadow: 0 0 15px 3px #000;
		opacity: 0;
		transition: 0.5s;
		img {
			object-fit: contain;
		}
	}
	.card:nth-of-type(1) {
		background-image: linear-gradient(to right, #1e1e1e, #1e1e1e), linear-gradient(90deg, #d341e9, #578aef);
		animation: showCardA 1s forwards;
		@keyframes showCardA {
			0% {
				left: -300%;
				top: -300%;
			}
			100% {
				left: 75%;
				top: 45%;
				opacity: 1;
				transform: perspective(40rem) rotateZ(1090deg) rotateX(30deg);
			}
		}
		&::before {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			bottom: -100%;
			right: -20%;
			background: linear-gradient(20deg, #000147 0%, #070387 10%, #0a2068 20%, #1d3b9d 40%, #becdef 50%, #d2eaff 55%, #a9b3eb 56%, #7485ac 65%, #0d0d75 75%, #0e1547 100%);
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-right: 5px double transparent;
			border-top: 3px outset rgb(112, 133, 204);
			border-left: 6px groove rgb(180, 208, 238);
			border-bottom: 5px outset rgb(47, 73, 136);
		}
		&::after {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			top: -100%;
			left: -20%;
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-left: 3px double rgb(142, 49, 171);
			border-top: 3px outset rgb(104, 54, 100);
			border-right: 5px outset rgb(216, 104, 220);
			border-bottom: 5px outset rgb(143, 69, 141);
			background: linear-gradient(135deg, #481950 0%, #682475 10%, #883099 20%, #a039b5 40%, #e57afa 50%, #f2c3fb 55%, #ffffff 56%, #f2c3fb 65%, #883099 75%, #682475 100%);
		}
		&:hover::after {
			transform-origin: right top;
			animation: afterAniCardA 2s forwards;
		}
		&:hover::before {
			transform-origin: left bottom;
			animation: beforeAniCardA 2s forwards;
		}
		@keyframes afterAniCardA {
			30% {
				opacity: 1;
				top: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(112, 26, 123, 0.5);
			}
			100% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 5rem 0 -1px rgb(224, 85, 219);
			}
		}
		@keyframes beforeAniCardA {
			30% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(26, 130, 234, 0.5);
			}
			100% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 -5rem 0 -2px rgb(26, 128, 237);
			}
		}
		span {
			position: absolute;
			top: 15%;
			left: 0;
			width: 80%;
			height: 0;
			transition: 0.5s;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		@keyframes rotateImg {
			100% {
				transform: rotate(360deg) scale(0.7);
			}
		}
		svg {
			opacity: 0;
		}
		&:hover svg {
			opacity: 1;
		}
		img {
			width: 100%;
			height: 80%;
			border-radius: 10px;
			transition: 0.5s;
		}

		h6,
		h5 {
			margin: 0 0 5px 0;
			width: 100%;
			padding: 5px 0;
			text-align: center;
			transition: 0.5s;
			text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0), 0 0 15px rgb(4, 83, 255);
			background: linear-gradient(90deg, #d341e9, #578aef);
		}

		&:hover span {
			height: 50%;
		}
		&:hover {
			cursor: pointer;
		}

		&:hover img {
			border: 2px ridge #000000;
			box-shadow: 0 0 15px 5px #fff, 2px 2px 0 #000000, 4px 4px 0 #f80000, 6px 6px 0 #1003ff, 8px 8px 0 #04f200, -2px 2px 0 #000000, -4px 4px 0 #f80000, -6px 6px 0 #1003ff, -8px 8px 0 #1cf200;
			border-radius: 50%;
			animation: rotateImg 2s forwards;
		}
	}
	.card:nth-of-type(2) {
		background-image: linear-gradient(to right, #1e1e1e, #1e1e1e), linear-gradient(90deg, #ff0d00, #fee000);
		animation: showCardB 1s forwards;
		animation-delay: 0.5s;
		@keyframes showCardB {
			0% {
				right: -300%;
				top: -300%;
			}
			100% {
				right: 65%;
				top: 50%;
				opacity: 1;
				transform: perspective(35rem) rotateZ(1070deg) rotateX(-15deg);
			}
		}
		&::before {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			bottom: -300%;
			right: -20%;
			background: linear-gradient(20deg, #3f3802 0%, #7c732f 10%, #bba81a 20%, #f8de17 40%, #f9e973 50%, #ffffff 55%, #f8ed9d 56%, #f8de17 65%, #bba81a 75%, #7c732f 100%);
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-right: 5px double transparent;
			border-top: 3px outset rgb(245, 245, 81);
			border-left: 6px groove rgb(247, 255, 155);
			border-bottom: 5px outset rgb(194, 234, 73);
		}
		&::after {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			top: -300%;
			left: -20%;
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-left: 3px double rgb(232, 95, 75);
			border-top: 3px outset rgb(124, 16, 16);
			border-right: 5px outset rgb(187, 75, 75);
			border-bottom: 5px outset rgb(149, 36, 36);
			background: linear-gradient(135deg, #420303 0%, #7c0c0c 10%, #ce2727 20%, #ff8e8e 40%, #fdc9c9 50%, #fffef1 55%, #cf8181 56%, #ce2727 65%, #7c0c0c 75%, #000000 100%);
		}
		&:hover::after {
			transform-origin: right top;
			animation: afterAni 2s forwards;
		}
		&:hover::before {
			transform-origin: left bottom;
			animation: beforeAni 2s forwards;
		}
		@keyframes afterAni {
			30% {
				opacity: 1;
				top: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(198, 12, 12, 0.5);
			}
			100% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 5rem 0 -1px rgb(224, 18, 18);
			}
		}
		@keyframes beforeAni {
			30% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(252, 242, 51, 0.5);
			}
			100% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 -5rem 0 -2px rgb(250, 226, 104);
			}
		}
		span {
			position: absolute;
			top: 15%;
			left: 0;
			width: 80%;
			height: 0;
			transition: 0.5s;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		@keyframes rotateImg {
			100% {
				transform: rotate(360deg) scale(0.7);
			}
		}
		svg {
			opacity: 0;
		}
		&:hover svg {
			opacity: 1;
		}
		img {
			width: 100%;
			height: 80%;
			border-radius: 10px;
			transition: 0.5s;
		}
		h6,
		h5 {
			margin: 0 0 5px 0;
			width: 100%;
			padding: 5px 0;
			text-align: center;
			transition: 0.5s;
			text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0), 0 0 15px rgb(4, 83, 255);
			background: linear-gradient(90deg, #ff3b3b, #f8d228);
		}

		&:hover span {
			height: 50%;
		}
		&:hover {
			cursor: pointer;
		}
		&:hover img {
			border: 2px ridge #000000;
			box-shadow: 0 0 15px 5px #fff, 2px 2px 0 #000000, 4px 4px 0 #f80000, 6px 6px 0 #1003ff, 8px 8px 0 #04f200, -2px 2px 0 #000000, -4px 4px 0 #f80000, -6px 6px 0 #1003ff, -8px 8px 0 #1cf200;
			border-radius: 50%;
			animation: rotateImg 2s forwards;
		}
	}
	.card:nth-of-type(3) {
		background-image: linear-gradient(to right, #1e1e1e, #1e1e1e), linear-gradient(90deg, #77ff00, #00fecf);
		animation: showCardC 1s forwards;
		animation-delay: 1s;
		@keyframes showCardC {
			0% {
				right: -300%;
				bottom: -300%;
			}
			100% {
				right: 67%;
				bottom: 50%;
				opacity: 1;
				transform: perspective(37rem) rotateZ(-1055deg) rotateY(-15deg);
			}
		}
		&::before {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			bottom: -100%;
			right: -20%;
			background: linear-gradient(20deg, #034b3e 0%, #0b6857 10%, #24ad94 20%, #2cddbc 40%, #9afcea 50%, #ffffff 55%, #c0ede5 56%, #2cddbc 65%, #1abba5 75%, #0b6857 100%);
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-right: 5px double transparent;
			border-top: 3px outset rgb(61, 143, 105);
			border-left: 6px groove rgb(66, 212, 166);
			border-bottom: 5px outset rgb(31, 201, 130);
		}
		&::after {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			top: -100%;
			left: -20%;
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-left: 3px double rgb(146, 232, 75);
			border-top: 3px outset rgb(47, 124, 16);
			border-right: 5px outset rgb(75, 187, 125);
			border-bottom: 5px outset rgb(36, 149, 36);
			background: linear-gradient(135deg, #254707 0%, #4b801d 10%, #7bdb26 20%, #c2f794 40%, #e0f8cb 50%, #fffef1 55%, #d0ffa7 56%, #77ff00 65%, #4c8719 75%, #1f3d04 100%);
		}
		&:hover::after {
			transform-origin: right top;
			animation: afterAniCardC 2s forwards;
		}
		&:hover::before {
			transform-origin: left bottom;
			animation: beforeAniCardC 2s forwards;
		}
		@keyframes afterAniCardC {
			30% {
				opacity: 1;
				top: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(80, 198, 12, 0.5);
			}
			100% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 5rem 0 -1px rgb(68, 247, 3);
			}
		}
		@keyframes beforeAniCardC {
			30% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(16, 196, 112, 0.5);
			}
			100% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 -5rem 0 -2px rgb(6, 232, 240);
			}
		}
		span {
			position: absolute;
			top: 15%;
			left: 0;
			width: 80%;
			height: 0;
			transition: 0.5s;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		@keyframes rotateImg {
			100% {
				transform: rotate(360deg) scale(0.7);
			}
		}
		svg {
			opacity: 0;
		}
		&:hover svg {
			opacity: 1;
		}
		img {
			width: 100%;
			height: 80%;
			border-radius: 10px;
			transition: 0.5s;
		}
		h6,
		h5 {
			margin: 0 0 5px 0;
			width: 100%;
			padding: 5px 0;
			text-align: center;
			transition: 0.5s;
			text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0), 0 0 15px rgb(4, 83, 255);
			background: linear-gradient(90deg, #77ff00, #00fecf);
		}
		&:hover span {
			height: 50%;
		}
		&:hover {
			cursor: pointer;
		}
		&:hover img {
			border: 2px ridge #000000;
			box-shadow: 0 0 15px 5px #fff, 2px 2px 0 #000000, 4px 4px 0 #f80000, 6px 6px 0 #1003ff, 8px 8px 0 #04f200, -2px 2px 0 #000000, -4px 4px 0 #f80000, -6px 6px 0 #1003ff, -8px 8px 0 #1cf200;
			border-radius: 50%;
			animation: rotateImg 2s forwards;
		}
	}
	.card:nth-of-type(4) {
		background-image: linear-gradient(to right, #1e1e1e, #1e1e1e), linear-gradient(90deg, #ff009d, #abd20e);
		animation: showCardD 1s forwards;
		animation-delay: 1.5s;
		@keyframes showCardD {
			0% {
				left: -300%;
				bottom: -300%;
			}
			100% {
				left: 72%;
				bottom: 52%;
				opacity: 1;
				transform: perspective(20rem) rotateZ(1055deg) rotateY(20deg);
			}
		}
		&::before {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			bottom: -100%;
			right: -20%;
			background: linear-gradient(20deg, #354105 0%, #63790c 10%, #a9c82f 20%, #c9fa07 40%, #e9f9ac 50%, #ffffff 55%, #e0f58d 56%, #c6e744 65%, #8ba819 75%, #63790c 100%);
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-right: 5px double transparent;
			border-top: 3px outset rgb(171, 204, 24);
			border-left: 6px groove rgb(233, 255, 155);
			border-bottom: 5px outset rgb(191, 234, 73);
		}
		&::after {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			top: -100%;
			left: -20%;
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-left: 3px double rgb(216, 75, 232);
			border-top: 3px outset rgb(114, 5, 94);
			border-right: 5px outset rgb(187, 75, 151);
			border-bottom: 5px outset rgb(128, 19, 61);
			background: linear-gradient(135deg, #30021e 0%, #6d1049 10%, #d43898 20%, #fc6cc5 40%, #ffc4e8 50%, #fffef1 55%, #fc6cc5 56%, #d43898 65%, #5d0e3f 75%, #16010e 100%);
		}
		&:hover::after {
			transform-origin: right top;
			animation: afterAniCardD 2s forwards;
		}
		&:hover::before {
			transform-origin: left bottom;
			animation: beforeAniCardD 2s forwards;
		}
		@keyframes afterAniCardD {
			30% {
				opacity: 1;
				top: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(198, 12, 170, 0.5);
			}
			100% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 5rem 0 -1px rgb(224, 18, 162);
			}
		}
		@keyframes beforeAniCardD {
			30% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(198, 252, 51, 0.5);
			}
			100% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 -5rem 0 -2px rgb(209, 250, 104);
			}
		}
		span {
			position: absolute;
			top: 15%;
			left: 0;
			width: 80%;
			height: 0;
			transition: 0.5s;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		@keyframes rotateImg {
			100% {
				transform: rotate(360deg) scale(0.7);
			}
		}
		svg {
			opacity: 0;
		}
		&:hover svg {
			opacity: 1;
		}
		img {
			width: 100%;
			height: 80%;
			border-radius: 10px;
			transition: 0.5s;
		}
		h6,
		h5 {
			margin: 0 0 5px 0;
			width: 100%;
			padding: 5px 0;
			text-align: center;
			transition: 0.5s;
			text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0), 0 0 15px rgb(4, 83, 255);
			background: linear-gradient(90deg, #ff009d, #abd20e);
		}
		&:hover span {
			height: 50%;
		}
		&:hover {
			cursor: pointer;
		}
		&:hover img {
			border: 2px ridge #000000;
			box-shadow: 0 0 15px 5px #fff, 2px 2px 0 #000000, 4px 4px 0 #f80000, 6px 6px 0 #1003ff, 8px 8px 0 #04f200, -2px 2px 0 #000000, -4px 4px 0 #f80000, -6px 6px 0 #1003ff, -8px 8px 0 #1cf200;
			border-radius: 50%;
			animation: rotateImg 2s forwards;
		}
	}
	.card:nth-of-type(5) {
		background-image: linear-gradient(to right, #1e1e1e, #1e1e1e), linear-gradient(90deg, #007bff, #6cfdff);
		animation: showCardE 1s forwards;
		animation-delay: 2s;
		@keyframes showCardE {
			0% {
				left: 45%;
				bottom: -300%;
			}
			100% {
				left: 45%;
				bottom: 52%;
				opacity: 1;
				transform: perspective(40rem) rotateZ(1080deg) rotateX(35deg);
			}
		}
		&::before {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			bottom: -100%;
			right: -20%;
			background: linear-gradient(20deg, #022f30 0%, #407979 10%, #1c8081 20%, #6cfdff 40%, #a0f7f9 50%, #ffffff 55%, #a0f7f9 56%, #6cfdff 65%, #407979 75%, #407979 100%);
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-right: 5px double transparent;
			border-top: 3px outset rgb(24, 189, 204);
			border-left: 6px groove rgb(155, 255, 238);
			border-bottom: 5px outset rgb(73, 234, 223);
		}
		&::after {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			top: -100%;
			left: -20%;
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-left: 3px double rgb(75, 190, 232);
			border-top: 3px outset rgb(24, 94, 200);
			border-right: 5px outset rgb(75, 133, 187);
			border-bottom: 5px outset rgb(19, 79, 128);
			background: linear-gradient(135deg, #02101e 0%, #0c3765 10%, #1d5999 20%, #007bff 40%, #74b4f8 50%, #fffef1 55%, #74b4f8 56%, #007bff 65%, #1d5999 75%, #0c3765 100%);
		}
		&:hover::after {
			transform-origin: right top;
			animation: afterAniCardE 2s forwards;
		}
		&:hover::before {
			transform-origin: left bottom;
			animation: beforeAniCardE 2s forwards;
		}
		@keyframes afterAniCardE {
			30% {
				opacity: 1;
				top: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(12, 130, 198, 0.5);
			}
			100% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 5rem 0 -1px rgb(18, 124, 224);
			}
		}
		@keyframes beforeAniCardE {
			30% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(51, 242, 252, 0.5);
			}
			100% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 -5rem 0 -2px rgb(104, 228, 250);
			}
		}
		span {
			position: absolute;
			top: 15%;
			left: 0;
			width: 80%;
			height: 0;
			transition: 0.5s;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		@keyframes rotateImg {
			100% {
				transform: rotate(360deg) scale(0.7);
			}
		}
		svg {
			opacity: 0;
		}
		&:hover svg {
			opacity: 1;
		}
		img {
			width: 100%;
			height: 80%;
			border-radius: 10px;
			transition: 0.5s;
		}
		h6,
		h5 {
			margin: 0 0 5px 0;
			width: 100%;
			padding: 5px 0;
			text-align: center;
			transition: 0.5s;
			text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0), 0 0 15px rgb(4, 83, 255);
			background: linear-gradient(90deg, #006eff, #03fbff);
		}

		&:hover span {
			height: 50%;
		}
		&:hover {
			cursor: pointer;
		}
		&:hover h6,
		&:hover h5 {
			text-shadow: 1px 1px 0 #000000, 2px 2px 0 #f80000, 3px 3px 0 #1003ff, 4px 4px 0 #f2f200;
		}
		&:hover img {
			border: 2px ridge #000000;
			box-shadow: 0 0 15px 5px #fff, 2px 2px 0 #000000, 4px 4px 0 #f80000, 6px 6px 0 #1003ff, 8px 8px 0 #04f200, -2px 2px 0 #000000, -4px 4px 0 #f80000, -6px 6px 0 #1003ff, -8px 8px 0 #1cf200;
			border-radius: 50%;
			animation: rotateImg 2s forwards;
		}
	}
	.card:nth-of-type(6) {
		background-image: linear-gradient(to right, #1e1e1e, #1e1e1e), linear-gradient(90deg, #373535, #ffffff);
		animation: showCardF 1s forwards;
		animation-delay: 2.5s;
		@keyframes showCardF {
			0% {
				left: 45%;
				top: -300%;
			}
			100% {
				left: 45%;
				top: 50%;
				opacity: 1;
				transform: perspective(40rem) rotateZ(1080deg) rotateX(35deg);
			}
		}
		&::before {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			bottom: -100%;
			right: -20%;
			background: linear-gradient(20deg, #181818 0%, #373535 10%, #666464 20%, #7a7878 40%, #c8c5c5 50%, #ffffff 55%, #c8c5c5 56%, #666464 65%, #373535 75%, #181818 100%);
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-right: 5px double transparent;
			border-top: 3px outset rgb(162, 162, 161);
			border-left: 6px groove rgb(92, 92, 91);
			border-bottom: 5px outset rgb(76, 77, 75);
		}
		&::after {
			content: "";
			position: absolute;
			width: 13%;
			height: 50%;
			top: -100%;
			left: -20%;
			z-index: 2;
			opacity: 0;
			transition: 1s;
			border-left: 3px double rgb(236, 234, 236);
			border-top: 3px outset rgb(215, 215, 215);
			border-right: 5px outset rgb(238, 238, 238);
			border-bottom: 5px outset rgb(193, 193, 193);
			background: linear-gradient(135deg, #e8e8e8 0%, #c3c1c1 10%, #8d8b8b 20%, #4a4949 40%, #363535 50%, #000000 55%, #363535 56%, #8d8b8b 65%, #e8e8e8 75%, #ffffff 100%);
		}
		&:hover::after {
			transform-origin: right top;
			animation: afterAniCardF 2s forwards;
		}
		&:hover::before {
			transform-origin: left bottom;
			animation: beforeAniCardF 2s forwards;
		}
		@keyframes afterAniCardF {
			30% {
				opacity: 1;
				top: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(64, 63, 64, 0.5);
			}
			100% {
				opacity: 1;
				top: 0%;
				transform: rotate(0deg);
				box-shadow: 0 5rem 0 -1px rgb(34, 33, 33);
			}
		}
		@keyframes beforeAniCardF {
			30% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(90deg);
			}
			70% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
			}
			90% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 0 0 0 rgba(229, 230, 228, 0.5);
			}
			100% {
				opacity: 1;
				bottom: 0%;
				transform: rotate(0deg);
				box-shadow: 0 -5rem 0 -2px rgb(244, 245, 243);
			}
		}
		span {
			position: absolute;
			top: 15%;
			left: 0;
			width: 80%;
			height: 0;
			transition: 0.5s;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		@keyframes rotateImg {
			100% {
				transform: rotate(360deg) scale(0.7);
			}
		}
		svg {
			opacity: 0;
		}
		&:hover svg {
			opacity: 1;
		}
		img {
			width: 100%;
			height: 80%;
			border-radius: 10px;
			transition: 0.5s;
		}
		h6,
		h5 {
			margin: 0 0 5px 0;
			width: 100%;
			padding: 5px 0;
			text-align: center;
			transition: 0.5s;
			text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0), 0 0 15px rgb(4, 83, 255);
			background: linear-gradient(90deg, #242424, #e9eae8);
		}

		&:hover span {
			height: 50%;
		}
		&:hover {
			cursor: pointer;
		}
		&:hover h6,
		&:hover h5 {
			text-shadow: 1px 1px 0 #000000, 2px 2px 0 #f80000, 3px 3px 0 #1003ff, 4px 4px 0 #f2f200;
		}
		&:hover img {
			border: 2px ridge #000000;
			box-shadow: 0 0 15px 5px #fff, 2px 2px 0 #000000, 4px 4px 0 #f80000, 6px 6px 0 #1003ff, 8px 8px 0 #04f200, -2px 2px 0 #000000, -4px 4px 0 #f80000, -6px 6px 0 #1003ff, -8px 8px 0 #1cf200;
			border-radius: 50%;
			animation: rotateImg 2s forwards;
		}
	}
}
</style>
