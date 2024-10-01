<template>
	<div id="land-con">
		<!-- 主页面加载页 -->
		<PageChange></PageChange>
		<div class="slider-container">
			<div class="left-slide">
				<span v-for="value in imgLeftArr" :key="value.imgId">
					<img :src="value.imgSrc" />
				</span>
			</div>

			<div class="right-slide">
				<p v-for="note in noteRightArr" :key="note.noteId">
					{{ note.poesy }}
				</p>
			</div>

			<div class="action-buttons">
				<button class="down-button">▽</button>
				<button class="return-button" @click="router.push('/')">☾</button>
				<button class="up-button">▲</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from "vue";
import PageChange from "./PageChange.vue";
import router from "@/router";

const imgLeftArr = [
	{
		imgId: 0,
		imgSrc: "https://picx.zhimg.com/80/v2-2d01e5dd82ba37325eae728c2117e02c_720w.webp?source=1940ef5c",
	},
	{
		imgId: 1,
		imgSrc: "https://pic1.zhimg.com/v2-62be16294db4727ac0235efbe4e9dc48_r.jpg?source=1940ef5c",
	},
	{
		imgId: 2,
		imgSrc: "https://picx.zhimg.com/80/v2-8b60255693b4afa80dcc59fa8d6cbc0f_720w.webp?source=1940ef5c",
	},
	{
		imgId: 3,
		imgSrc: "https://picx.zhimg.com/80/v2-fe83ae5cc37856358604996fcf3cee98_720w.webp?source=1940ef5c",
	},
	{
		imgId: 4,
		imgSrc: "https://pic1.zhimg.com/80/v2-338e4a31d4649edc0d8ba7f530dc3c84_720w.webp?source=1940ef5c",
	},
	{
		imgId: 5,
		imgSrc: "https://picx.zhimg.com/80/v2-87a0f3a7ebb79ceeb4993251a0eb5026_720w.webp?source=1940ef5c",
	},
	{
		imgId: 6,
		imgSrc: "https://pica.zhimg.com/80/v2-c7eda2e247ec97d1a8fcc7a0e1b5ef54_720w.webp?source=1940ef5c",
	},
	{
		imgId: 7,
		imgSrc: "https://pica.zhimg.com/80/v2-ad60c5f5ab4858d727045481c0cfd8c5_720w.webp?source=1940ef5c",
	},
	{
		imgId: 8,
		imgSrc: "https://pic1.zhimg.com/80/v2-1e88746ab8473a076f9e0abc0184a1ff_720w.webp?source=1940ef5c",
	},
	{
		imgId: 9,
		imgSrc: "https://picx.zhimg.com/80/v2-122f95dbf0bf1c738c4cd75e04cbf2b0_720w.webp?source=1940ef5c",
	},
	{
		imgId: 10,
		imgSrc: "https://picx.zhimg.com/80/v2-d22be66548b2b049cfbf4c07449a87c4_720w.webp?source=1940ef5c",
	},
	{
		imgId: 11,
		imgSrc: "https://picx.zhimg.com/80/v2-5bfb85eae1680d06d813dd51412e1578_720w.webp?source=1940ef5c",
	},
	{
		imgId: 12,
		imgSrc: "https://picx.zhimg.com/80/v2-a28ca6fba552e097712d5a9b6f54b52b_720w.webp?source=1940ef5c",
	},
	{
		imgId: 13,
		imgSrc: "https://pica.zhimg.com/80/v2-e670fd6fafaf3baddb7d96ca4c8c532b_720w.webp?source=1940ef5c",
	},
	{
		imgId: 14,
		imgSrc: "https://pic1.zhimg.com/80/v2-21a546237d2f3e340a51213a896ff48f_720w.webp?source=1940ef5c",
	},
	{
		imgId: 15,
		imgSrc: "https://pica.zhimg.com/80/v2-c6c3630f8075dd1d5bfff644134c3aad_720w.webp?source=1940ef5c",
	},
	{
		imgId: 16,
		imgSrc: "https://pica.zhimg.com/80/v2-9b2368bd62ebd7be0e71e1dbd1a56db3_720w.webp?source=1940ef5c",
	},
	{
		imgId: 17,
		imgSrc: "https://pic1.zhimg.com/80/v2-25d727b9545cf588eeb181dce4d3b763_720w.webp?source=1940ef5c",
	},
	{
		imgId: 18,
		imgSrc: "https://picx.zhimg.com/80/v2-dc49ef06340e663b53a65f17901649fc_720w.webp?source=1940ef5c",
	},
	{
		imgId: 19,
		imgSrc: "https://pic1.zhimg.com/80/v2-74d66898e391745d72b7170e79134043_720w.webp?source=1940ef5c",
	},
	{
		imgId: 20,
		imgSrc: "https://picx.zhimg.com/80/v2-4831622457f758eca8aa9947d6dae65d_720w.webp?source=1940ef5c",
	},
	{
		imgId: 21,
		imgSrc: "https://pic1.zhimg.com/80/v2-628c05e74ed03bc1fde9f1491cec85af_720w.webp?source=1940ef5c",
	},
	{
		imgId: 22,
		imgSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.DhcMl-dN6ZO9IBkJK1qeVwHaNK?pid=ImgDet&rs=1",
	},
	{
		imgId: 23,
		imgSrc: "https://pic2.zhimg.com/v2-b51e08457f60c358a94576d57497086a_r.jpg?source=1940ef5c",
	},
	{
		imgId: 24,
		imgSrc: "https://sjbz-fd.zol-img.com.cn/t_s720x1280c/g5/M00/00/02/ChMkJ1fJVEqIf7vOAAtnTx--MtQAAU9wQAAAAAAC2dn323.jpg",
	},
	{
		imgId: 25,
		imgSrc: "https://cdn.pixabay.com/photo/2017/03/27/13/38/canyon-2178786_640.jpg",
	},
	{
		imgId: 26,
		imgSrc: "https://cdn.pixabay.com/photo/2015/08/29/13/23/night-913046_640.jpg",
	},
	{
		imgId: 27,
		imgSrc: "https://img.zcool.cn/community/01a8305a1f8190a80120908dcbd3a0.jpg@1280w_1l_2o_100sh.jpg",
	},
	{
		imgId: 28,
		imgSrc: "https://scpic.chinaz.net/files/pic/pic9/201808/zzpic13567.jpg",
	},
	{
		imgId: 28,
		imgSrc: "https://i0.hdslb.com/bfs/article/aaba619b5570b66241b71dff0afb0ba86b41aa3f.jpg@1256w_2234h_!web-article-pic.webp",
	},
	{
		imgId: 29,
		imgSrc: "https://pic1.zhimg.com/80/v2-c1567bf175ee3a6d4d7f4c0aa712e356_720w.webp?source=1940ef5c",
	},
	{
		imgId: 30,
		imgSrc: "https://pic1.zhimg.com/80/v2-9efa34f9b103e388b4ea916bf9bcba35_720w.webp?source=1940ef5c",
	},
	{
		imgId: 31,
		imgSrc: "https://picx.zhimg.com/80/v2-fd9ce9cf69a1a11cd183966445b0d57d_720w.webp?source=1940ef5c",
	},
	{
		imgId: 32,
		imgSrc: "https://picx.zhimg.com/80/v2-ad7b71b027d5e8c7a6767c48aab8fefb_720w.webp?source=1940ef5c",
	},
	{
		imgId: 33,
		imgSrc: "https://picx.zhimg.com/80/v2-89231f34d2134a802eb84a56e305ff9f_720w.webp?source=1940ef5c",
	},
	{
		imgId: 34,
		imgSrc: "https://pic1.zhimg.com/80/v2-9e8acd2eeb0228874afdd986da57d80f_720w.webp?source=1940ef5c",
	},
	{
		imgId: 35,
		imgSrc: "https://picx.zhimg.com/80/v2-2bd4f37cad8327629b3485e905ade9f8_720w.webp?source=1940ef5c",
	},
	{
		imgId: 36,
		imgSrc: "https://pic1.zhimg.com/80/v2-8017f6e6195490938d8c939f6f088b32_720w.webp?source=1940ef5c",
	},
	{
		imgId: 37,
		imgSrc: "https://picx.zhimg.com/80/v2-7a7c8d6593c9dcdf3c8bcab7b87defb1_720w.webp?source=1940ef5c",
	},
	{
		imgId: 38,
		imgSrc: "https://picx.zhimg.com/80/v2-71405bbf4feafe5a6fd9c51007886600_720w.webp?source=1940ef5c",
	},
	{
		imgId: 39,
		imgSrc: "https://picx.zhimg.com/80/v2-3d2d4e1d0c4e093159a01cc671e01844_720w.webp?source=1940ef5c",
	},
	{
		imgId: 40,
		imgSrc: "https://pic1.zhimg.com/80/v2-799b277b89588296d914fe826ec4919c_720w.webp?source=1940ef5c",
	},
	{
		imgId: 41,
		imgSrc: "https://pic1.zhimg.com/80/v2-a1b34278da396458882c0c68cbb25062_720w.webp?source=1940ef5c",
	},
	{
		imgId: 42,
		imgSrc: "https://picx.zhimg.com/80/v2-afe36c96e28ffb5e6ea89a04671a4be1_720w.webp?source=1940ef5c",
	},
	{
		imgId: 43,
		imgSrc: "https://pica.zhimg.com/80/v2-9818450c42569e993372470263736855_720w.webp?source=1940ef5c",
	},
	{
		imgId: 44,
		imgSrc: "https://pic1.zhimg.com/80/v2-2d2ee5ca88758127eb481e541c0cc613_720w.webp?source=1940ef5c",
	},
	{
		imgId: 45,
		imgSrc: "https://pic1.zhimg.com/80/v2-a2404b87bf3ce5e01f9405de2b7be922_720w.webp?source=1940ef5c",
	},
	{
		imgId: 46,
		imgSrc: "https://picx.zhimg.com/80/v2-65e54f2656966ceb231f5c9b18581945_720w.webp?source=1940ef5c",
	},
	{
		imgId: 47,
		imgSrc: "https://picx.zhimg.com/80/v2-55310b572a30c9612f0b34c8333be913_720w.webp?source=1940ef5c",
	},
	{
		imgId: 48,
		imgSrc: "https://picx.zhimg.com/80/v2-7b68bfd7103449710ee58fee4259e8e7_720w.webp?source=1940ef5c",
	},
	{
		imgId: 49,
		imgSrc: "https://picx.zhimg.com/80/v2-ef7d40922fa9109f4c6fa975a3f2b526_720w.webp?source=1940ef5c",
	},
	{
		imgId: 50,
		imgSrc: "https://pica.zhimg.com/80/v2-a436a36a63e760cc55de838d0fe68fb2_720w.webp?source=1940ef5c",
	},
	{
		imgId: 51,
		imgSrc: "https://pic1.zhimg.com/80/v2-ee1f7fcafa8f30d93c02bcf937d6db0d_720w.webp?source=1940ef5c",
	},
	{
		imgId: 52,
		imgSrc: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJ1fJVAaIUfHOABmDh0MYG44AAU9uQN4hasAGYOf772.jpg",
	},
	{
		imgId: 53,
		imgSrc: "https://cdn.pixabay.com/photo/2016/02/07/19/48/aurora-1185464_640.jpg",
	},
	{
		imgId: 54,
		imgSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.6szqS1IlGtWsaiHQUtUOVwHaQC?pid=ImgDet&rs=1",
	},
	{
		imgId: 55,
		imgSrc: "https://pic4.zhimg.com/v2-38eaa90f8115355e04d795d6935afa35_r.jpg?source=1940ef5c",
	},
	{
		imgId: 56,
		imgSrc: "https://tse4-mm.cn.bing.net/th/id/OIP-C.yyl-QsdcLi8JSJCilAItsAHaNK?pid=ImgDet&rs=1",
	},
	{
		imgId: 57,
		imgSrc: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
	},
];

const noteRightArr = [
	{
		noteId: 0,
		poesy: ` 红豆生南国，春来发几枝？愿君多采撷，此物最相思。 ——王维《相思》`,
	},
	{
		noteId: 1,
		poesy: "四海无闲田，农夫犹饿死。——李绅《悯农》",
	},
	{
		noteId: 2,
		poesy: `岁大饥，人自卖身为肉于市曰菜人。有赘某家者，其妇忽持钱三千与夫，使速归。已含泪而去，夫迹之，已断手臂，悬市中矣。
        夫妇年饥同饿死，不如妾向菜人市。得钱三千资夫归，一脔可以行一里。芙蓉肌理烹生香，乳作馄饨人争尝。两肱先断挂屠店，
         徐割股腴持作汤。不令命绝要鲜肉，片片看入饥人腹。 男肉腥臊不可餐，女肤脂凝少汗粟。三日肉尽馀一魂，求夫何处斜阳昏。
          天生妇作菜人好，能使夫归得终老。生葬肠中饱几人，却幸乌鸢啄不早。 ——屈大均《菜人哀》`,
	},
	{
		noteId: 3,
		poesy: `醉后不知天在水，满船清梦压星河。——唐珙《题龙阳县青草湖》`,
	},
	{
		noteId: 4,
		poesy: `爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。——王安石《元日》`,
	},
	{
		noteId: 5,
		poesy: `慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖——孟郊《游子吟》`,
	},
	{
		noteId: 6,
		poesy: `朝曦迎客艳重冈，晚雨留人入醉乡。此意自佳君不会，一杯当属水仙王。水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜
        ————苏轼《饮湖上初晴后雨》`,
	},
	{
		noteId: 7,
		poesy: `轩窗刻案落粉瓣，不知暗香何所来，欲画少艾犹折枝，五指红梅有心开。为寻至美访西杭，沃雪烹茶述佳景，孤山红颜千树放，竹林孤影无可拟。阅尽好花千万树，
              愿君记取此一枝！潇湘踌躇复远行，一别珍重隔四季。终南盘虬潜卧龙，龙吟吐息领神威。却卧病榻命垂危，彻悟至美需神韵。目作河川梅绿竹，耳畔山川唇红梅。
          唯憾冬短春生紧，残瓣终候初愈时。山水万千终山水，梅赋神韵是至美。——中国唱诗班《咏梅》`,
	},
	{
		noteId: 8,
		poesy: `回头万里，故人长绝，满座衣冠胜雪。——辛弃疾《贺新郎·别茂嘉十二弟》 `,
	},
	{
		noteId: 9,
		poesy: `我醉欲眠卿且去，明朝有意抱琴来。——李白《山中与幽人对酌》 `,
	},
	{
		noteId: 10,
		poesy: `春风得意马蹄疾，一日看尽长安花。——孟郊《登科后》`,
	},
	{
		noteId: 11,
		poesy: `世事一场大梦，人生几度秋凉？——苏轼《西江月》`,
	},
	{
		noteId: 12,
		poesy: ` 前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。——陈子昂《登幽州台歌》`,
	},
	{
		noteId: 13,
		poesy: `疏影横斜，远映西湖清浅；暗香浮动，长陪夜月黄昏。——张岱《陶庵梦忆》`,
	},
	{
		noteId: 14,
		poesy: `夜阑卧听风吹雨，铁马冰河入梦来。——陆游《十一月四日风雨大作》`,
	},
	{
		noteId: 15,
		poesy: `人面不知何处去，桃花依旧笑春风。——崔护《题都城南庄》`,
	},
	{
		noteId: 16,
		poesy: `不如意事常八九，可与语人无二三。——方岳《别子才司令》`,
	},
	{
		noteId: 17,
		poesy: `此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？——柳永《雨霖铃·寒蝉凄切》`,
	},
	{
		noteId: 18,
		poesy: ``,
	},
	{
		noteId: 19,
		poesy: ``,
	},
	{
		noteId: 20,
		poesy: ``,
	},
	{
		noteId: 21,
		poesy: ``,
	},
	{
		noteId: 22,
		poesy: ``,
	},
	{
		noteId: 23,
		poesy: ``,
	},
	{
		noteId: 24,
		poesy: ``,
	},
	{
		noteId: 25,
		poesy: ``,
	},
	{
		noteId: 26,
		poesy: ``,
	},
	{
		noteId: 27,
		poesy: ``,
	},
	{
		noteId: 28,
		poesy: ``,
	},
	{
		noteId: 29,
		poesy: ``,
	},
	{
		noteId: 30,
		poesy: ``,
	},
	{
		noteId: 31,
		poesy: ``,
	},
	{
		noteId: 32,
		poesy: ``,
	},
	{
		noteId: 33,
		poesy: ``,
	},
	{
		noteId: 34,
		poesy: ``,
	},
	{
		noteId: 35,
		poesy: ``,
	},
	{
		noteId: 36,
		poesy: ``,
	},
	{
		noteId: 37,
		poesy: ``,
	},
];
onMounted(() => {
	const sliderContainer = document.querySelector(".slider-container");
	const slideRight = document.querySelector(".right-slide");
	const slideLeft = document.querySelector(".left-slide");
	const upButton = document.querySelector(".up-button");
	const downButton = document.querySelector(".down-button");
	const slidesLength = slideLeft.querySelectorAll("img").length;

	let activeSlideIndex = 0;
	slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

	upButton.addEventListener("click", () => changeSlide("up"));
	downButton.addEventListener("click", () => changeSlide("down"));

	const changeSlide = (direction) => {
		downButton.classList.add("down-active");
		upButton.classList.add("up-active");
		setTimeout(() => {
			upButton.classList.remove("up-active");
			downButton.classList.remove("down-active");
		}, 1000);
		console.log(sliderContainer.clientHeight);
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
		slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
	};
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
	.left-slide {
		height: 100%;
		width: 45%;
		position: absolute;
		top: 0;
		left: 0;
		transition: transform 0.5s ease-in-out;
		span {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;

			img {
				width: 100%;
				height: 90%;
				object-fit: contain;
			}
		}
	}

	.right-slide {
		height: 100%;
		position: absolute;
		top: 0;
		right: 1%;
		width: 45%;
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
				background-image: linear-gradient(to bottom, #1faa77 0%,#000000 15% ,#000000 85%, #1f83aa 100%);
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
	.action-buttons {
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
