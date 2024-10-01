<template>
	<div id="videoContent">
		<button class="return-button" @click="router.push('/')">返回主页</button>
		<!-- 双重v-for ，Array里面再嵌套一个Array，外侧V-for用第一层Array中的i和index作为循环介质，内侧v-for再用内侧Array循环，形成一个矩阵 -->
		<div class="cardCon" v-for="(item, index) in list1" :key="index" :style="{ '--i': `${item.i}` }">
			<div class="card" v-for="(it, k) in item.listitem" :key="k" @click="openNewPage(it.upSrc)">
				<h1>
					<!-- {{it.upSignature}}
                    <br/> -->
					{{ it.upName }}
				</h1>
				<img :src="it.imgSrc" />
				<p>
					{{ it.upSignature }}
					<!-- <iframe src="//player.bilibili.com/player.html?aid=69241910&bvid=BV19E41197Kc&cid=120004475&p=1"
                     scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" autoplay="false"> </iframe> -->
				</p>
			</div>
		</div>
	</div>
</template>
<script setup>
import router from "@/router";
import { onMounted } from "vue";

const list1 = [
	{
		i: "1",
		listitem: [
			{
				upName: "森呐映画",
				upSignature: "向真理和自由，无名的献身。",
				upSrc: "https://space.bilibili.com/1724598?spm_id_from=333.999.0.0",
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
			},
			{
				upName: "Linksphotograph",
				upSignature: "探索世界~",
				upSrc: "https://space.bilibili.com/3816626?spm_id_from=333.999.0.0",
				imgSrc: "https://i2.hdslb.com/bfs/face/2827281d7fd11cd62d9cc355039860cd2979970b.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
			},
			{
				upName: "波士顿圆脸",
				upSignature: "人话说世界",
				upSrc: "https://space.bilibili.com/346563107?spm_id_from=333.999.0.0",
				imgSrc: "https://i2.hdslb.com/bfs/face/f8f0fc4114bb06a87481abe12faa006a383cbe6d.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
			},
		],
	},
	{
		i: "2",
		listitem: [
			{
				upName: "期末77",
				upSignature: "",
				upSrc: "https://space.bilibili.com/10534933?spm_id_from=333.999.0.0",
				imgSrc: "https://i1.hdslb.com/bfs/face/17b605f1ddddf29668f8d220ed111e19ee2c79bb.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
			},
			{
				upName: "8KRAW",
				upSignature: "",
				upSrc: "https://space.bilibili.com/21151219?spm_id_from=333.999.0.0",
				imgSrc: "https://i1.hdslb.com/bfs/face/837496ba7225f5ae78c888407716340ad73eed0d.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
			},
			{
				upName: "Linksphotograph",
				upSignature: "",
				upSrc: "",
				imgSrc: "https://i2.hdslb.com/bfs/face/2827281d7fd11cd62d9cc355039860cd2979970b.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
			},
		],
	},
	{
		i: "3",
		listitem: [
			{ upName: "森呐映画", upSignature: "", upSrc: "", imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp" },
			{
				upName: "Linksphotograph",
				upSignature: "",
				upSrc: "",
				imgSrc: "https://i2.hdslb.com/bfs/face/2827281d7fd11cd62d9cc355039860cd2979970b.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
			},
			{
				upName: "森呐映画",
				upSignature: "",
				upSrc: "",
				imgSrc: "https://i0.hdslb.com/bfs/face/ece8fe7095d538e17fa0fc73a6ee9eb0a3d3445a.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp",
			},
		],
	},
];

const openNewPage = (upSrc) => {
	window.open(upSrc);
};
onMounted(() => {
	let cardArr = document.querySelectorAll(".cardCon");
	let videoArr = document.querySelectorAll("#videoContent .cardCon");

	for (let i = 0; i < cardArr.length; i++) {
		//每行元素添加hover事件，使得每行元素Hover时都触发朝向改变
		cardArr[i].addEventListener("mouseover", () => {
			//之前的X行元素向下朝向当前行curRow

			for (let j = 0; j < i; j++) {
				// console.log(videoArr[j].childNodes[4])
				videoArr[j].style.transform = "perspective(30rem) rotateX(-30deg) ";
				//每行的每个元素阴影改变
				videoArr[j].childNodes[1].style.boxShadow = "inset  0 10px 0.8rem 2px #000000";
				videoArr[j].childNodes[2].style.boxShadow = "inset  0 10px 0.8rem 2px #000000";
				videoArr[j].childNodes[3].style.boxShadow = "inset  0 10px 0.8rem 2px #000000";
			}
			//当前X行元素方向不改变
			videoArr[i].style.transform = "perspective(30rem) rotateX(0deg) ";

			//之前的X行元素向上朝向当前行curRow
			for (let j = i + 1; j < videoArr.length; j++) {
				videoArr[j].style.transform = "perspective(30rem) rotateX(30deg) ";
				videoArr[j].childNodes[1].style.boxShadow = "inset  0 -10px 0.8rem 2px #000000";
				videoArr[j].childNodes[2].style.boxShadow = "inset  0 -10px 0.8rem 2px #000000";
				videoArr[j].childNodes[3].style.boxShadow = "inset  0 -10px 0.8rem 2px #000000";
				// console.log(videoArr[j].childNodes[4])
			}
		});
		cardArr[i].addEventListener("mouseleave", () => {
			//鼠标移开后所有元素恢复原样
			for (let j = 0; j < videoArr.length; j++) {
				videoArr[j].style.transform = "perspective(30rem) rotateX(0deg) ";
				videoArr[j].childNodes[1].style.boxShadow = "";
				videoArr[j].childNodes[2].style.boxShadow = "";
				videoArr[j].childNodes[3].style.boxShadow = "";
			}
		});
	}
});
</script>

<style scoped lang="scss">
* {
	margin: 0;
	padding: 0;
}
.return-button {
	position: fixed;
	left: 0;
	top: 50%;
	color: #fff;
	border: 2px solid white;
	background: transparent;
	font-size: 18px;
	font-weight: bolder;
	width: 10%;
	height: 4rem;
	z-index: 2;
	opacity: 0.5;
}
.return-button:hover {
	opacity: 1;
	cursor: pointer;
	box-shadow: 0 0 10px 5px rgb(255, 255, 255);
}
#videoContent {
	color: #9ff9fc;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE 10+ */
	&::-webkit-scrollbar {
		display: none; /* Chrome Safari */
	}
}
.cardCon {
	width: 100%;
	height: 0rem;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	transform-style: preserve-3d;
	transition-duration: 1s;
	// transition: transform 500s;
	animation: cardCon 0.5s linear forwards;
	animation-delay: calc(1s * var(--i));
}
@keyframes cardCon {
	100% {
		height: 16em;
		margin-top: 2rem;
	}
}
.cardCon .card {
	//父元素和子元素之间，z-index是无法对比的，同级之间的z-index才能对比.无论z-index怎么比父元素小，都会位于父元素上面，因为子元素是基于父元素做的层级分布
	margin-top: 4rem;
	position: relative;
	width: 8rem;
	height: 8rem;
	background-image: linear-gradient(to left, #3b6aa8 0%, #ffffff 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transform-style: preserve-3d;
	border: #fff 4px double;
	box-shadow: 0 0 1rem 3px #eee8e8;
	transition: 1s;
	text-align: start;
	font-size: 1.2rem;
	color: #000000;
	font-weight: bolder;
	&::before,
	&::after {
		opacity: 0;
		position: absolute;
		content: "";
		bottom: -8px;
		right: -4px;
		width: 10px;
		height: 5px;
		background: #5c92d9;
	}
}
@keyframes move {
	50% {
		height: 8px;
	}
	80% {
		bottom: -9px;
		height: 10px;
		transform: translate(-7.9rem, 3px);
		background: #fff;
	}
	93% {
		height: 12px;
		bottom: -12px;
		transform: translate(-7.8rem, 4px);
		opacity: 1;
		background: #fff;
	}
	100% {
		height: 14px;
		transform: translate(-7.7rem, 150px);
		opacity: 0;
		background: #fff;
	}
}
.cardCon:hover .card {
	transition-duration: 0.7s;
}
.cardCon:hover .card {
	box-shadow: inset 10px 0 1rem 2px #000000;
	transform: perspective(50rem) rotateY(45deg) rotateX(10deg);
}
.cardCon .card:hover {
	&::before,
	&::after {
		animation: move 7.5s ease-in-out infinite;
		opacity: 1;
	}
	&::after {
		animation: move 7.5s ease-in-out 1s infinite;
	}
	background: transparent;
	box-shadow: 0 0 1rem 3px #000000, inset 0 0 1rem 5px #4cb5ee;
	border-radius: 0;
	cursor: pointer;
	border: 4px groove;
	border-image: linear-gradient(to left, #5c92d9, #ffffff) 1;
	transform: perspective(50rem) rotateY(0deg) scale(1.2) rotateX(20deg);
}
//CSS 中 >、~、+ 、空格、逗号的用法https://zhuanlan.zhihu.com/p/375401959
//子元素选择器（>）表示的是选择当前元素的第一代子元素，第二代子元素即孙元素不受影响，使用方法：div>h1,或者#id>h1 .class>h1等
//波浪号~ 的作用是选择该元素之后的所有相同元素,波浪号~之前的元素不受影响，即假如当前元素是第三个元素，
//那么第四第五个元素受其CSS影响，第一第二个元素不受影响（注意这些元素要处于同一个父元素的同一代中，子和孙不能这样用，子和子可以）
//用法如下div~h1,意思是选取同一个父元素下 div 之后的所有 h1 标签,这些标签不必与当前div紧挨着，也可以 #id>h1 .class>h1
//加号（+）的作用是选择紧邻其后的元素，且要求二者有同一父元素,与波浪号的区别是加号+必须是紧挨着下一个目标元素，
//如div+h1必须是div下一个目标紧挨着的是h1，这样CSS才能作用于该h1元素
//派生选择器（空格）的作用是选择该元素后面的所有子元素（包含第一代子元素、第二代、代三代等等） 比如  #id h1，表示选择当前id标签下的所有子元素中的h1标签
//分组选择器 逗号（,）的作用是对选择器进行分组，被分组的选择器可以分享相同的 CSS 样式比如，#id, .class, h1表示#id标签和所有的.class标签以及所有h1标签共享同一套CSS
.cardCon .card:hover ~ .card {
	box-shadow: inset -10px 0 0.8rem 2px #000000;
	//CSS 属性 perspective 指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。
	transform: perspective(50rem) rotateY(-45deg) rotateX(10deg);
}

.cardCon .card img {
	width: 4rem;
	height: 4rem;
	border: 2px double white;
	box-shadow: 0 0 0.8rem 3px #000000;
	border-radius: 50%;
	transition: box-shadow 1.5s;
}
.cardCon .card:hover img {
	border-radius: 0;
	background: #fff;
	box-shadow: 0 0 1rem 3px #fbfbfb;
}
.cardCon .card h1 {
	font-size: 0.8rem;
	width: 100%;
	height: 100%;

	color: white;

	line-height: 8rem;
	// writing-mode: vertical-lr;
	word-wrap: break-word;
	text-align: center;
	position: absolute;
	transition: 1s;
	transition-delay: 1s;
	// transform: translateZ(-20px);
	//transfrom和z-index会冲突，如果父元素使用了transform或者和transform有关的属性比如transform-style,即使子元素使用了z-index也不能处于父元素后面
	//如果使用了transform 可以使用translateZ(-2px)通过Z轴的转换来达到子元素层级低于父元素的情况
	// z-index: -1;

	// border搭配border-image和linera-gradient可以达到边框渐变色的需求，但是不支持border-radius,也不支持border-style的double ridge 这些属性，只能是solid
	//想出现圆角，只能用background-image搭配中间渐变色radient，中间透明色，边框有色
	//https://cloud.tencent.com/developer/article/1960952
	border: 3px double;
	border-image: linear-gradient(to left, #5c92d9, #ffffff) 1;
	// border-radius: 50%;
	opacity: 0;
	//filter: brightness(20%);可以调高当前元素的亮度和饱和度，100%默认，百分比越高越亮
	// filter: brightness(110%);
	text-shadow: 0 0 10px #000000, 0 0 20px #ff3d3d, 0 0 40px #fdfdfd, 0 0 70px #60ccf0, 0 0 100px #829ff5, 0 0 150px #3c474a;
}

//writing-mode: horizontal-tb横向排列;  vertical-rl竖向排列，从右到左;  vertical-lr竖向排列，从左到右;
.cardCon .card:hover h1 {
	// opacity: 1;
	// transform: translateX(-50rem);
	//word-break:决定单词是否柴拆分换行/  normal：不拆分单词;break-all：拆分单词;keep-all：英文单词不拆分，中文文本不换行
	//text-overflow:处理文本溢出 /clip：不显示省略符（…）ellipsis：显示省略标记（…），但是要跟overflow:hidden搭配起来使用
	//white-space:normal：默认值，空白会被忽略;pre：空白符，换行符等会被保留
	//word-wrap:normal：默认值，当一行剩余空间无法容纳下一个字（英文是指单词）时，会换行。break-word：针对英文的文本，这个值可以让一个单词拆分开来换行；
	border-radius: 0;
	box-shadow: inset 10px 0 1rem 2px #000000, 0 15px 1rem 2px #000000;
	background-image: linear-gradient(to right, #2466bd 0%, #ffffff 100%);

	animation: fontType 4s cubic-bezier(0.9, 0.885, 0.32, 1.275) both;
	//animation-delay一定要放在animation下面，否则延迟效果不生效
	// animation-delay: 1s;
	// animation-iteration-count:1;
}
//cubic-bezier(0.9, 0.885, 0.320, 1.275)是一个很好用的曲线规划，可以用来决定动画的整个流程每个阶段的快慢
//rotate3d(-0.5,0,-1, 5 turn)是一个很棒的3D旋转属性
@keyframes fontType {
	0% {
		transform: rotateY(150deg) translateX(-108%);
		transform-origin: right;
		opacity: 0.5;
	}
	50% {
		transform: rotateY(0) rotateX(-120deg) translateX(-108%) scale(1.2);
		transform-origin: right;
		opacity: 1;
	}
	100% {
		transform: rotate3d(-0.5, 0, -1, 1turn) translateX(-108%) scale(1) rotateY(30deg);
		opacity: 1;
	}
}
.cardCon .card p {
	text-align: center;
	line-height: 2rem;
	width: 100%;
	height: 100%;
	position: absolute;
	transform: translateZ(-1px);
	background-image: linear-gradient(to right, #2466bd 0%, #ffffff 100%);
	border-radius: 50%;
	transition: 2s;
}
.card:hover p {
	border: 3px double;
	box-shadow: inset -10px 0 1rem 2px #000000, 0 15px 1rem 2px #000000;
	border-image: linear-gradient(to right, #1b4683, #ff0000) 1;
	animation: cardP 4s cubic-bezier(0.9, 0.1, 0.5, 1.275) both;
	border-radius: 0%;
}
@keyframes cardP {
	0% {
		opacity: 0;
		transform: rotateY(90deg);
	}
	25% {
		transform: rotateY(90deg) translateX(108%);
		transform-origin: left;
		opacity: 1;
	}
	50% {
		transform: rotateY(0) rotateX(90deg) translateX(108%) scale(1.2);
		transform-origin: left;
		opacity: 1;
	}
	100% {
		transform: rotate3d(0.5, 0, 1, 1turn) translateX(108%) scale(1) rotateY(-30deg);
	}
}
</style>
