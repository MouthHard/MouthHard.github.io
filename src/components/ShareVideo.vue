<template>
	<div id="cardCon">
		<button @click="rotateCard">刷新更多up</button>
		<button @click="router.push('/')">返回</button>
		<div class="card" v-for="item in cardArr[cardIndex].arr">
			<img :src="item.imgSrc" />
			<h4>{{ item.upName }}</h4>
			<h5>{{ item.upSign }}</h5>
			<p>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
					<path
						fill="currentColor"
						d="M277.15 15.205C156.242 16.415 55.302 138.49 97.855 259.738c.236-.898.495-1.78.74-2.672c2.014-44.925 29.754-87.052 72.382-111.033C240.472 96.4 349.52 103.243 482.07 207.91C441.497 139.717 395.89 98.6 331.764 64.86c25.326 1.366 52.64 1.44 83.797 6.826c-44.575-40.27-92.906-56.936-138.41-56.48zM125.822 52.412c-137.746 41.46-140.07 297.526-7.592 355.668c-26.982-5.33-52.944-14.213-75.92-26.867c70.023 139.78 335.9 106.928 329.42-81.266c-17.214 37.204-52.435 67.6-97.572 79.705c-35.122 9.42-70.577 6.236-100.363-6.76c-98.026-39.283-154.31-188.008-47.97-320.48zm123.96 91.914c-12.187-.084-24.737 1.472-37.323 4.848c-67.128 18.003-107.523 80.338-91.952 138.502c7.036 26.283 24.393 47.58 47.498 61.373c17.175 6.946 35.95 9.88 54.303 8.15c50.952-4.81 95.722-48.554 90.434-100.952c-3.738-37.02-35.686-69.512-73.648-65.363c-26.23 2.867-49.247 25.63-46.123 52.295c2.097 17.902 17.716 33.58 35.705 31.297h.002c11.602-1.472 21.745-11.662 20.197-23.002a14.6 14.6 0 0 0-1.21-4.096a15.97 15.97 0 0 1-8.044 5.077c-8.567 2.296-17.376-2.79-19.672-11.357c-2.294-8.568 2.79-17.373 11.36-19.668c.49-.132.984-.235 1.477-.32l-.002-.01l.13-.016h.005c17.875-2.566 32.265 11.716 34.47 27.86h-.003c3.123 22.877-15.39 41.404-36.358 44.064c-29.462 3.737-53.413-20.335-56.614-47.656c-4.464-38.11 26.966-69.14 62.65-73.042a80 80 0 0 1 9.14-.478c45.104.222 80.722 38.92 85.126 82.54c4.628 45.855-21.593 85.602-59.184 106.435c65.427-18.976 104.47-80.37 89.12-137.714c-12.652-47.26-58.668-78.407-111.485-78.77zm79.74 5.326c23.968 16.104 42.048 39.66 49.798 68.612c.908 3.39 1.65 6.79 2.243 10.187c26.737 85.357-5.167 199.845-63.8 261.392C379.27 473.715 425.278 417.11 441.6 353.756c12.557 44.178 15.743 89.788 7.02 128.187c93.862-152.582 29.32-296.865-119.097-332.29z" />
				</svg>
			</p>
			<p>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
					<path
						fill="currentColor"
						d="M152.313 19.438C138.075 73.11 172.984 126.662 178.25 180.25c-28.744-16.01-71.286-25.18-88.656-43.656c9.36 29.558 51.055 44.096 77.094 66.312c-57.236 1.556-101.637 65.75-148.125 79c54.52 31.628 111.427.296 167.437 23.875c-27.654 34.76-47.284 67.888-57.97 107.283C148.787 384.2 174.07 351.39 198.72 326c-11.686 54.742 1.313 109.477 28.155 164.22c13.028-52.977 67.36-98.796 75.03-157.533c22.665 36.313 53.4 62.266 83.158 103.938c-14.644-51.287-47.12-87.914-64.22-123.625c52.358 5.59 115.075 28.68 168.5 43.47c-29.835-58.79-64.534-103.922-107.78-125.158c33.01.717 70.858 5.604 103.312 10.907c-33.377-19.14-68.513-28.226-110-33.032c49.013-47.885 68.943-95.774 68.406-143.657c-48.033 32.51-96.09 58.57-144.124 74.75c17.206-28.64 40.82-59.57 62-85.468c-35.326 20.535-61.807 48.477-88.22 85.094c-23.716-46.89-79.993-64.068-120.623-120.47zm35.625 72.937c8.325 26.55 49.006 61.23 63.718 91.625c-7.935 2.196-15.188 5.65-21.437 10.063c-9.67-33.43-46.513-71.114-42.282-101.688zm213.28 31.906c-20.144 34.656-47.403 60.806-83 86.72c-2.394-7.408-7.083-13.755-13.124-18.563c31.454-17.384 66.972-44.313 96.125-68.156zm-129.812 75.814c6.66.108 12.638 1.57 17.375 3.97c7.22 3.653 11.376 8.906 12.345 15.436s-1.55 13.663-7.53 20.188c-5.983 6.524-15.326 12.01-26.283 14.218c-10.956 2.208-21.094.686-28.312-2.97c-7.218-3.653-11.374-8.906-12.344-15.436s1.55-13.694 7.53-20.22c5.983-6.524 15.328-11.98 26.283-14.186a51.6 51.6 0 0 1 8.03-.97c.977-.04 1.955-.046 2.906-.03m-63.562 30.562a37.3 37.3 0 0 0 .344 7.563c.983 6.622 3.748 12.55 7.718 17.56c-36.236-7.654-91.958 24.29-125.062 10.157c34.23-.804 77.367-27.78 117-35.28m107.5 10.25c43.444 16.685 78.393 35.883 108.406 65.72c-39.556-17.844-87.918-37.4-126.563-45.47c3.768-2.62 7.204-5.558 10.188-8.812c3.177-3.465 5.884-7.328 7.97-11.438zM274.156 271.5l.22.03c-19.568 32.856-17.574 83.757-44.313 131.845c8.36-50.135 3.05-88.19 17.593-130.438c7.4 1.1 15.3.903 23.344-.718c1.07-.217 2.108-.46 3.156-.72z" />
				</svg>
			</p>
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
import { ref } from "vue";
import router from "@/router";
let cardIndex = ref(0);
const cardArr = [
	{
		id: 0,
		arr: [
			{
				subId: 0,
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "森呐映画",
				upSign: "向真理和自由，无名的献身。",
			},
			{
				subId: 1,
				imgSrc: "https://i2.hdslb.com/bfs/face/2827281d7fd11cd62d9cc355039860cd2979970b.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "Linksphotograph",
				upSign: "探索世界~",
			},
			{
				subId: 2,
				imgSrc: "https://i2.hdslb.com/bfs/face/f8f0fc4114bb06a87481abe12faa006a383cbe6d.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "波士顿圆脸",
				upSign: "人话说世界",
			},
			{
				subId: 3,
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "up名字",
				upSign: "up签名",
			},
			{
				subId: 4,
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "up名字",
				upSign: "up签名",
			},
			{
				subId: 5,
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "up名字",
				upSign: "up签名",
			},
		],
	},
	{
		id: 1,
		arr: [
			{
				subId: 0,
				imgSrc: "https://i1.hdslb.com/bfs/face/17b605f1ddddf29668f8d220ed111e19ee2c79bb.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "期末77",
				upSign: "up签名A",
			},
			{
				subId: 1,
				imgSrc: "https://i1.hdslb.com/bfs/face/837496ba7225f5ae78c888407716340ad73eed0d.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "8KRAW",
				upSign: "up签名A",
			},
			{
				subId: 2,
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "up名字a",
				upSign: "up签名A",
			},
			{
				subId: 3,
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "up名字a",
				upSign: "up签名A",
			},
			{
				subId: 4,
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "up名字a",
				upSign: "up签名A",
			},
			{
				subId: 5,
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
				upName: "up名字a",
				upSign: "up签名A",
			},
		],
	},
];
const rotateCard = () => {
	let cardDoms = document.querySelectorAll(".card");
	cardIndex.value = (cardIndex.value + 1) % cardArr.length;
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
		height: 45%;
		width: 17%;
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
		p {
			position: absolute;
			transition: 0.5s;
			transform-style: preserve-3d;
		}
		p:nth-of-type(1) {
			left: -4%;
			top: -7%;
			width: 10%;
			height: 7%;
			border: 10px double #d341e9;
			border-radius: 50%;
			// background: #d341e9;
			box-shadow: 10px 10px 10px -1px #000;
		}
		p:nth-of-type(2) {
			right: -4%;
			bottom: 17%;
			width: 10%;
			height: 7%;
			border-radius: 50%;
			border: 10px double #578aef;
			box-shadow: -10px -10px 10px -1px #000;
		}

		h4,
		h5 {
			margin: 5px 0;
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
		&:hover p:nth-of-type(1) {
			border-radius: 0;
			top: -5%;
			left: 87%;
			border: 10px double #578aef;
			border-top: none;
			border-right: none;
			box-shadow: -10px 10px 10px -1px #000;
		}
		&:hover p:nth-of-type(2) {
			border-radius: 0;
			right: 87%;
			bottom: 18%;
			border: 10px double #d341e9;
			border-bottom: none;
			border-left: none;
			box-shadow: 10px -10px 10px -1px #000;
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
		p {
			position: absolute;
			transition: 0.5s;
			transform-style: preserve-3d;
		}
		p:nth-of-type(1) {
			left: -4%;
			top: -7%;
			width: 10%;
			height: 7%;
			border: 10px double #ff3b3b;
			border-radius: 50%;
			// background: #d341e9;
			box-shadow: 10px 10px 10px -1px #000;
		}
		p:nth-of-type(2) {
			right: -4%;
			bottom: 17%;
			width: 10%;
			height: 7%;
			border-radius: 50%;
			border: 10px double #f8d228;
			box-shadow: -10px -10px 10px -1px #000;
		}

		h4,
		h5 {
			margin: 5px 0;
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
		&:hover p:nth-of-type(1) {
			border-radius: 0;
			top: -5%;
			left: 87%;
			border: 10px double #f8d228;
			border-top: none;
			border-right: none;
			box-shadow: -10px 10px 10px -1px #000;
		}
		&:hover p:nth-of-type(2) {
			border-radius: 0;
			right: 87%;
			bottom: 18%;
			border: 10px double #ff3b3b;
			border-bottom: none;
			border-left: none;
			box-shadow: 10px -10px 10px -1px #000;
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
		p {
			position: absolute;
			transition: 0.5s;
			transform-style: preserve-3d;
		}
		p:nth-of-type(1) {
			left: -4%;
			top: -7%;
			width: 10%;
			height: 7%;
			border: 10px double #77ff00;
			border-radius: 50%;
			// background: #d341e9;
			box-shadow: 10px 10px 10px -1px #000;
		}
		p:nth-of-type(2) {
			right: -4%;
			bottom: 17%;
			width: 10%;
			height: 7%;
			border-radius: 50%;
			border: 10px double #00fecf;
			box-shadow: -10px -10px 10px -1px #000;
		}

		h4,
		h5 {
			margin: 5px 0;
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
		&:hover p:nth-of-type(1) {
			border-radius: 0;
			top: -5%;
			left: 87%;
			border: 10px double #00fecf;
			border-top: none;
			border-right: none;
			box-shadow: -10px 10px 10px -1px #000;
		}
		&:hover p:nth-of-type(2) {
			border-radius: 0;
			right: 87%;
			bottom: 18%;
			border: 10px double #77ff00;
			border-bottom: none;
			border-left: none;
			box-shadow: 10px -10px 10px -1px #000;
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
		p {
			position: absolute;
			transition: 0.5s;
			transform-style: preserve-3d;
		}
		p:nth-of-type(1) {
			left: -4%;
			top: -7%;
			width: 10%;
			height: 7%;
			border: 10px double #ff009d;
			border-radius: 50%;
			// background: #d341e9;
			box-shadow: 10px 10px 10px -1px #000;
		}
		p:nth-of-type(2) {
			right: -4%;
			bottom: 17%;
			width: 10%;
			height: 7%;
			border-radius: 50%;
			border: 10px double #abd20e;
			box-shadow: -10px -10px 10px -1px #000;
		}

		h4,
		h5 {
			margin: 5px 0;
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
		&:hover p:nth-of-type(1) {
			border-radius: 0;
			top: -5%;
			left: 87%;
			border: 10px double #abd20e;
			border-top: none;
			border-right: none;
			box-shadow: -10px 10px 10px -1px #000;
		}
		&:hover p:nth-of-type(2) {
			border-radius: 0;
			right: 87%;
			bottom: 18%;
			border: 10px double #ff009d;
			border-bottom: none;
			border-left: none;
			box-shadow: 10px -10px 10px -1px #000;
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
		p {
			position: absolute;
			transition: 0.5s;
			transform-style: preserve-3d;
		}
		p:nth-of-type(1) {
			left: -4%;
			top: -7%;
			width: 10%;
			height: 7%;
			border: 10px double #006eff;
			border-radius: 50%;
			// background: #d341e9;
			box-shadow: 10px 10px 10px -1px #000;
		}
		p:nth-of-type(2) {
			right: -4%;
			bottom: 17%;
			width: 10%;
			height: 7%;
			border-radius: 50%;
			border: 10px double #03fbff;
			box-shadow: -10px -10px 10px -1px #000;
		}

		h4,
		h5 {
			margin: 5px 0;
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
		&:hover p:nth-of-type(1) {
			border-radius: 0;
			top: -5%;
			left: 87%;
			border: 10px double #03fbff;
			border-top: none;
			border-right: none;
			box-shadow: -10px 10px 10px -1px #000;
		}
		&:hover p:nth-of-type(2) {
			border-radius: 0;
			right: 87%;
			bottom: 18%;
			border: 10px double #006eff;
			border-bottom: none;
			border-left: none;
			box-shadow: 10px -10px 10px -1px #000;
		}
		&:hover {
			cursor: pointer;
		}
		&:hover h4,
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
		p {
			position: absolute;
			transition: 0.5s;
			transform-style: preserve-3d;
		}
		p:nth-of-type(1) {
			left: -4%;
			top: -7%;
			width: 10%;
			height: 7%;
			border: 10px double #222122;
			border-radius: 50%;
			// background: #d341e9;
			box-shadow: 10px 10px 10px -1px #000;
		}
		p:nth-of-type(2) {
			right: -4%;
			bottom: 17%;
			width: 10%;
			height: 7%;
			border-radius: 50%;
			border: 10px double #e9eae8;
			box-shadow: -10px -10px 10px -1px #000;
		}

		h4,
		h5 {
			margin: 5px 0;
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
		&:hover p:nth-of-type(1) {
			border-radius: 0;
			top: -5%;
			left: 87%;
			border: 10px double #e9eae8;
			border-top: none;
			border-right: none;
			box-shadow: -10px 10px 10px -1px #000;
		}
		&:hover p:nth-of-type(2) {
			border-radius: 0;
			right: 87%;
			bottom: 18%;
			border: 10px double #242424;
			border-bottom: none;
			border-left: none;
			box-shadow: 10px -10px 10px -1px #000;
		}
		&:hover {
			cursor: pointer;
		}
		&:hover h4,
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
