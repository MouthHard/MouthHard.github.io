<template>
	<div>
		<div id="changePage">
			<img src=".././assets/image/gamePng/ge.png" alt="" />
			<img src=".././assets/image/gamePng/wukong.png" alt="" />
			<img src=".././assets/image/gamePng/laura.png" alt="" />
			<img src=".././assets/image/gamePng/trissB.png" alt="" />
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
* {
	margin: 0;
	padding: 0;
}
#changePage {
	position: fixed;
	display: flex;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 5;
	animation: changePage 0.1s forwards;
	animation-delay: 3s;
	img {
		overflow: hidden;
		position: absolute;
		width: 25%;
		height: 100%;
		background-size: cover;
		background: linear-gradient(50deg, #000000 0%, rgb(215, 210, 210) 30%, rgb(152, 150, 174) 50%, #5d5d5d 70%, #74797d 70%, #7e7e7e 80%, #6a3232 89%, #888888 95%, #ffffff 100%);
	}
	img:nth-of-type(1) {
		left: 0;
		animation: leftA 2s cubic-bezier(0.63, 0.04, 1, 0.04) forwards;
	}
	img:nth-of-type(2) {
		box-shadow: -1px -1px #3e3e3e, -2px -2px #4b4b4b, -3px -3px #585858, -4px -4px #4b4b4b, -5px -5px #5a5a5a, -6px -6px #9e9e9e, -7px -7px #3b3b3b, -8px -8px #ffffff, inset 0 -15px 20px 5px rgba(0, 0, 0, 0.8), -30px 0 20px -6px rgba(2, 1, 1, 0.8);
		animation: leftB 2s cubic-bezier(0.63, 0.04, 1, 0.04) forwards;
		left: 25%;
	}
	img:nth-of-type(3) {
		right: 25%;
		box-shadow: -1px -1px #3e3e3e, -2px -2px #4b4b4b, -3px -3px #585858, -4px -4px #4b4b4b, -5px -5px #5a5a5a, -6px -6px #9e9e9e, -7px -7px #3b3b3b, -8px -8px #ffffff, inset 0 -15px 20px 5px rgba(0, 0, 0, 0.8), -30px 0 20px -6px rgba(2, 1, 1, 0.8);
		animation: rightA 2s cubic-bezier(0.63, 0.04, 1, 0.04) forwards;
	}
	img:nth-of-type(4) {
		right: 0;
		box-shadow: -1px -1px #3e3e3e, -2px -2px #4b4b4b, -3px -3px #585858, -4px -4px #4b4b4b, -5px -5px #5a5a5a, -6px -6px #9e9e9e, -7px -7px #3b3b3b, -8px -8px #ffffff, inset 0 -15px 20px 5px rgba(0, 0, 0, 0.8), -30px 0 20px -6px rgba(2, 1, 1, 0.8);
		animation: rightB 2s cubic-bezier(0.63, 0.04, 1, 0.04) forwards;
	}

	@keyframes leftA {
		0%,
		100% {
			left: -25%;
		}
		30%,
		50% {
			left: 0%;
		}
	}
	@keyframes leftB {
		0%,
		100% {
			top: -100%;
		}
		30%,
		50% {
			top: 0;
		}
	}
	@keyframes rightA {
		0%,
		100% {
			bottom: -101%;
		}
		30%,
		50% {
			bottom: 0;
		}
	}
	@keyframes rightB {
		0%,
		100% {
			right: -26%;
		}
		30%,
		50% {
			right: 0%;
		}
	}
	@keyframes changePage {
		100% {
			z-index: -1;
		}
	}
}
</style>
