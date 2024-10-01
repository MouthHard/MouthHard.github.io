<template>
	<div id="Recommend-C">
		<div id="choiceFirstTab_Line">
			<header>
				<h2 @click="changCommendSong(0, choiceSecArr, 'choiceFirstTab_Line')">◀</h2>
				<h2 @click="changCommendSong(1, choiceSecArr, 'choiceFirstTab_Line')">▶</h2>
				<h3>官方歌单 ▼</h3>
				<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512">
					<path
						fill="currentColor"
						d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z" />
				</svg>
			</header>
			<footer>
				<span v-for="item in choiceSecArr" :key="item.id">
					<h5>{{ item.playNum }}</h5>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M13 2.05v2c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97zM5.67 19.74A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63zm1.43-14c1.12-.9 2.47-1.48 3.9-1.68v-2c-1.95.19-3.81.94-5.33 2.2zM5.69 7.1L4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9M4.06 13h-2c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13M10 16.5l6-4.5l-6-4.5z" />
						</svg>
						<h4>{{ item.playName }}</h4>
						<ol>
							<li v-for="it in item.songArr">{{ it }}</li>
						</ol>
					</div>
				</span>
			</footer>
		</div>

		<div class="choiceFirstTab_MulPart" v-for="item in partArr" :key="item.partId">
			<div class="MP_Line">
				<header>
					<h3>{{ item.title }}</h3>
					<button @click="changPart(0, item.fifthArr, item.partId)">◁</button>
					<button @click="changPart(1, item.fifthArr, item.partId)">▷</button>
					<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512">
						<path
							fill="currentColor"
							d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z" />
					</svg>
				</header>
				<footer>
					<span v-for="it in item.fifthArr" :key="it.id">
						<img :src="it.imgSrc" alt="" />
						<h4>{{ it.h4Text }}</h4>
						<h5>{{ it.h5Text }}</h5>
						<h6>{{ it.h6Text }}</h6>
						<h6>{{ it.h6OtherText }}</h6>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32">
								<path fill="currentColor" d="M15 4v16.563L9.719 15.28L8.28 16.72l7 7l.719.687l.719-.687l7-7l-1.438-1.438l-5.28 5.28V4zM7 26v2h18v-2z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256">
								<path
									fill="currentColor"
									d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
								<path fill="currentColor" d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2" />
							</svg>
						</div>
					</span>
				</footer>
			</div>
		</div>
	</div>
</template>
<script setup>
import { onMounted } from "vue";

const choiceSecArr = [
	{
		id: 0,
		playNum: "▶ 1.1亿",
		playName: "每日推荐，从漫漫长夜听起",
		songArr: ["漫漫长夜", "xxx", "xxx"],
		bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
		bgColor: "#009895",
	},
	{
		id: 1,
		playNum: "▶ 1.23亿",
		playName: "今天从《Mystery of Love》听起|私人雷达",
		songArr: ["Mystery of Love", "xxx", "xxx"],
		bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
		bgColor: "#998E7C",
	},
	{
		id: 2,
		playNum: "▶ 851.6万",
		playName: "也许我们应该去更远的地方看看",
		songArr: ["xxx", "xxx", "xxx"],
		bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
		bgColor: "#FDD56C",
	},
	{
		id: 3,
		playNum: "▶ 70万",
		playName: "纯音乐 | 星空之下，绿草至上",
		songArr: ["xxx", "xxx", "xxx"],
		bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
		bgColor: "#27416A",
	},
	{
		id: 4,
		playNum: "▶ 5401",
		playName: "秋日之歌",
		songArr: ["xxx", "xxx", "xxx"],
		bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
		bgColor: "#B8653D",
	},
	{
		id: 5,
		playNum: "▶ 139.22万",
		playName: "大自然的声音",
		songArr: ["xxx", "xxx", "xxx"],
		bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g2/M00/0A/03/ChMlWl0d6aSIYm9KADKqlKvl4gIAALiYQCilvAAMqqs077.jpg",
		bgColor: "#D4DED5",
	},
];
const partArr = [
	{
		partId: 0,
		title: "最新音乐 ▶",
		fifthArr: [
			{
				id: 0,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 1,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 2,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 3,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 4,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 5,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
		],
	},
	{
		partId: 1,
		title: "精选有声书 ▶",
		fifthArr: [
			{
				id: 0,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 1,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 2,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 3,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 4,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 5,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
		],
	},
	{
		partId: 2,
		title: "热门播客 ▶",
		fifthArr: [
			{
				id: 0,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 1,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 2,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 3,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 4,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
			{
				id: 5,
				imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
				h4Text: "歌曲名",
				h5Text: "歌手名",
				h6Text: "vip",
				h6OtherText: "10w+评论",
			},
		],
	},
];
const changCommendSong = (d, arr, id) => {
	const commendDom = document.querySelectorAll(`#${id} footer span`);
	if (d == 0) {
		commendIndex = Math.abs(commendIndex - 3) % arr.length;
	} else {
		commendIndex = (commendIndex + 3) % arr.length;
	}
	commendDom.forEach((e) => {
		e.style.transform = `translateX(${-commendIndex * 110}%)`;
	});
};
onMounted(() => {
	const choiceSpanDOM = document.querySelectorAll("#choiceFirstTab_Line footer span");

	for (let i = 0; i < choiceSecArr.length; i++) {
		choiceSpanDOM[i].style.background = `url(${choiceSecArr[i].bg})`;
		choiceSpanDOM[i].style.backgroundSize = `cover`;
		choiceSpanDOM[i].style.backgroundPosition = `center`;
		choiceSpanDOM[i].childNodes[1].style.background = `${choiceSecArr[i].bgColor}`;
		choiceSpanDOM[i].addEventListener("mouseover", () => {
			choiceSpanDOM[i].childNodes[1].style.boxShadow = ` 0 -3rem 3rem -1px ${choiceSecArr[i].bgColor}`;
		});
		choiceSpanDOM[i].addEventListener("mouseout", () => {
			choiceSpanDOM[i].childNodes[1].style.boxShadow = ` none`;
		});
	}
});
</script>

<style lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
}
#Recommend-C {
	width: 95%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
.choiceFirstTab_MulPart {
	width: 99%;
	margin-left: 1%;
	margin-top: 3%;
	height: 60%;
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	.MP_Line {
		display: flex;
		flex-shrink: 0;
		height: 95%;
		flex-wrap: wrap;
		svg:hover {
			color: #ff0000;
			cursor: pointer;
		}	
		header {
			position: relative;
			width: 100%;
			height: 10%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			button {
				font-size: 1.5rem;
				position: absolute;
				background: transparent;
				top: -30%;
				z-index: 1;
				margin: 10px;
				color: #ffffff;
				border: transparent;
				&:hover {
					text-align: center;
					padding: 0 20px;
					transition: 1s;
					cursor: pointer;
					color: #ff0000;
					border-bottom: 1px solid red;
				}
				&:nth-of-type(1) {
					left: 30%;
				}
				&:nth-of-type(2) {
					left: 50%;
				}
			}
		}
		footer {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			height: 85%;
			flex-direction: column;
			justify-content: space-around;
			span {
				display: grid;
				margin-top: 1%;
				margin-left: 2%;
				border-radius: 10px;
				grid-template-columns: 25% 20% 20% 35%;
				grid-template-rows: 40% 30% 30%;
				width: 40%;
				height: 29%;
				
				&:hover {
					cursor: pointer;
					background: linear-gradient(to right, #144da8, #000);
				}
				&:hover div {
					width: 100%;
				}
				h4,
				h5,
				h6 {
					margin: 0 0 0 10px;
					transition: 0.5s;
					&:hover {
						cursor: pointer;
						color: #ffffff;
					}
				}
				h6 {
					color: rgb(0, 200, 255);
					width: auto;
					border-radius: 5px;
					padding: 5px;
					line-height: 15px;
					text-align: center;
				}
				h4 {
					grid-column: 2 / span 2;
					grid-row: 1 / span 1;
				}
				h5 {
					color: #b3acac;
					grid-column: 2 / span 2;
					grid-row: 2 / span 1;
				}
				h6:nth-of-type(1) {
					grid-column: 2 / span 1;
					border: 1px solid #0095ff;
					grid-row: 3 / span 1;
				}
				h6:nth-of-type(2) {
					background: linear-gradient(to bottom, #030e36, #01081a);
					grid-column: 3 / span 1;
					grid-row: 3 / span 1;
				}
				div {
					transition: 1s;
					width: 0;
					display: flex;
					justify-content: space-around;
					align-items: center;
					grid-column: 4 / span 1;
					grid-row: 1 / span 3;
				}
				img {
					width: 100%;
					height: 100%;
					border-radius: 10px;
					grid-column: 1 / span 1;
					grid-row: 1 / span 3;
				}
			}
		}
	}
}
#choiceFirstTab_Line {
	display: flex;
	flex-shrink: 0;
	margin-top: 0.5rem;
	margin-left: 0.5rem;
	height: 50%;
	flex-wrap: wrap;
	svg:hover {
		color: #ff0000;
		cursor: pointer;
	}
	header {
		position: relative;
		width: 100%;
		height: 10%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h2 {
			position: absolute;
			top: -30%;
			z-index: 1;
			margin: 10px;
			&:hover {
				cursor: pointer;
				color: #ff0000;
			}
			&:nth-of-type(1) {
				left: 40%;
			}
			&:nth-of-type(2) {
				left: 61%;
			}
		}
	}
	footer {
		width: 100%;
		display: flex;
		height: 80%;
		align-items: center;
		
		span {
			position: relative;
			background-size: cover;
			background-position: center;
			width: 11%;
			flex-shrink: 0;
			height: 100%;
			padding: 0 20px;
			margin-left: 20px;
			border-radius: 10px;
			transition: 0.5s;
			h5 {
				margin: 0.2rem;
				padding-top: 0.3rem;
				text-align: right;
			}
			div {
				position: absolute;
				text-align: center;
				bottom: 0;
				left: 0;
				height: 20%;
				width: 100%;
				overflow-y: hidden;
				color: #ffffff;
				border-radius: 0 0 10px 10px;
				text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;
			}
			svg {
				display: none;
				transition: 0.5s;
			}
			&:hover {
				cursor: pointer;
			}
			&:hover svg {
				display: inline-block;
			}
			&:hover div {
				transition: 0.5s;
				height: 50%;
			}
			h4,
			ol {
				margin: 5px;
			}
		}
	}
}
</style>
