<template>
	<div id="communityHeader">
		<h3>关注</h3>
		<button>✍ 发布</button>
	</div>
	<div id="communityFooter">
		<div class="comFirst" v-for="item in commentArr" :key="item.id">
			<header>
				<img :src="item.headIcon" alt="" />
				<h3>{{ item.userName }}</h3>
				<h6>
					{{ item.comTime }}
				</h6>
				<button>。。。</button>
			</header>
			<footer>
				<h5 v-show="item.h5Show">{{ item.text }}</h5>
				<img v-show="item.imgShow" class="textImg" :src="item.imgSrc" alt="" />
				<div v-show="item.songShow">
					<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 2048 2048">
						<path fill="currentColor" d="M1920 0v1920H0V0zm-576 957L576 448v1024z" />
					</svg>
					<img :src="item.songImg" alt="" />
					<h5>{{ item.songName }}</h5>
					<h6>{{ item.singer }}</h6>
				</div>

				<span>
					<h4>
						<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
							<path
								fill="currentColor"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="4"
								d="M4.189 22.173A2 2 0 0 1 6.181 20H10a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2H7.834a2 2 0 0 1-1.993-1.827zM18 21.375c0-.836.52-1.584 1.275-1.94c1.649-.778 4.458-2.341 5.725-4.454c1.633-2.724 1.941-7.645 1.991-8.772c.007-.158.003-.316.024-.472c.271-1.953 4.04.328 5.485 2.74c.785 1.308.885 3.027.803 4.37c-.089 1.436-.51 2.823-.923 4.201l-.88 2.937h10.857a2 2 0 0 1 1.925 2.543l-5.37 19.016A2 2 0 0 1 36.986 43H20a2 2 0 0 1-2-2z" />
						</svg>
						{{ item.goodNum }}
					</h4>

					<h4>
						<svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.2em" viewBox="0 0 1664 1536">
							<path
								fill="currentColor"
								d="M1408 989v259q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h255q13 0 22.5 9.5T575 160q0 27-26 32q-77 26-133 60q-10 4-16 4H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-214q0-19 18-29q28-13 54-37q16-16 35-8q21 9 21 29m237-496l-384 384q-18 19-45 19q-12 0-25-5q-39-17-39-59V640H992q-323 0-438 131q-119 137-74 473q3 23-20 34q-8 2-12 2q-16 0-26-13q-10-14-21-31t-39.5-68.5T312 1068t-38.5-114T256 832q0-49 3.5-91t14-90t28-88t47-81.5t68.5-74t94.5-61.5T636 297.5T795.5 267T992 256h160V64q0-42 39-59q13-5 25-5q26 0 45 19l384 384q19 19 19 45t-19 45" />
						</svg>
						{{ item.shareNum }}
					</h4>

					<h4>
						<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 22 22">
							<path fill="currentColor" d="M2 2h18v1h1v14h-1v1h-8v1h-1v1h-1v1H6v-3H2v-1H1V3h1zm1 2v12h5v3h1v-1h1v-1h1v-1h8V4zm2 3h12v2H5zm0 4h10v2H5z" />
						</svg>
						{{ item.comNum }}
					</h4>
				</span>
			</footer>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";

const commentArr = [
	{
		id: 0,
		userName: "云音乐秘书",
		headIcon:
			"https://ts1.cn.mm.bing.net/th/id/R-C.f4e49452a3f8cce70a1a70d1895126fa?rik=U70PUuPHRiojXg&riu=http%3a%2f%2fimage.hnol.net%2fc%2f2015-01%2f06%2f09%2f201501060922362751-222325.jpg&ehk=etCr2PzZZe6KJtN0F04velerhHYFZsOPSd9Njg6W41U%3d&risl=&pid=ImgRaw&r=0",
		comTime: "12 : 30",
		text: "测试",
		imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
		songImg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
		songName: "歌曲名",
		singer: "歌手名",
		goodNum: "123",
		shareNum: "456",
		comNum: "789",
		h5Show: true,
		imgShow: false,
		songShow: true,
	},
	{
		id: 1,
		userName: "云音乐秘书",
		headIcon:
			"https://ts1.cn.mm.bing.net/th/id/R-C.f4e49452a3f8cce70a1a70d1895126fa?rik=U70PUuPHRiojXg&riu=http%3a%2f%2fimage.hnol.net%2fc%2f2015-01%2f06%2f09%2f201501060922362751-222325.jpg&ehk=etCr2PzZZe6KJtN0F04velerhHYFZsOPSd9Njg6W41U%3d&risl=&pid=ImgRaw&r=0",
		comTime: "12 : 30",
		text: "测试",
		imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
		songImg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
		songName: "歌曲名",
		singer: "歌手名",
		goodNum: "123",
		shareNum: "456",
		comNum: "789",
		h5Show: true,
		imgShow: false,
		songShow: false,
	},
	{
		id: 2,
		userName: "云音乐秘书",
		headIcon:
			"https://ts1.cn.mm.bing.net/th/id/R-C.f4e49452a3f8cce70a1a70d1895126fa?rik=U70PUuPHRiojXg&riu=http%3a%2f%2fimage.hnol.net%2fc%2f2015-01%2f06%2f09%2f201501060922362751-222325.jpg&ehk=etCr2PzZZe6KJtN0F04velerhHYFZsOPSd9Njg6W41U%3d&risl=&pid=ImgRaw&r=0",
		comTime: "12 : 30",
		text: "测试",
		imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
		songImg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
		songName: "歌曲名",
		singer: "歌手名",
		goodNum: "123",
		shareNum: "456",
		comNum: "789",
		h5Show: true,
		imgShow: true,
		songShow: true,
	},
	{
		id: 3,
		userName: "云音乐秘书",
		headIcon:
			"https://ts1.cn.mm.bing.net/th/id/R-C.f4e49452a3f8cce70a1a70d1895126fa?rik=U70PUuPHRiojXg&riu=http%3a%2f%2fimage.hnol.net%2fc%2f2015-01%2f06%2f09%2f201501060922362751-222325.jpg&ehk=etCr2PzZZe6KJtN0F04velerhHYFZsOPSd9Njg6W41U%3d&risl=&pid=ImgRaw&r=0",
		comTime: "12 : 30",
		text: "测试",
		imgSrc: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
		songImg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
		songName: "歌曲名",
		singer: "歌手名",
		goodNum: "123",
		shareNum: "456",
		comNum: "789",
		h5Show: false,
		imgShow: true,
		songShow: false,
	},
];
</script>
<style lang="less" scoped>
#communityHeader {
	display: flex;
	justify-content: space-between;
	h3,
	button {
		margin: 2%;
	}
	button {
		color: #fff;
		border: 2px solid transparent;
		padding: 10px 15px;
		background: linear-gradient(to bottom, #112e7e, #282828);
		transition: 1s;
		font-size: 1rem;
		&:hover {
			font-weight: bolder;
			cursor: pointer;
			border-radius: 10px;
			border: 2px solid #fff;
		}
	}
}
#communityFooter {
	height: 80%;
	display: flex;
	align-items: center;
	flex-direction: column;

	.comFirst {
		position: relative;
		flex-shrink: 0;
		width: 70%;
		height: 90%;
		margin-top: 2%;
		background: #053a65;
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		padding: 2%;
		header {
			height: 10%;
			display: flex;
			img {
				height: 2rem;
				width: 2rem;

				border: 4px double #fff;
				border-radius: 50%;
			}
			h6 {
				color: #888888;
			}
			h6,
			h3 {
				margin-left: 1%;
			}
			button {
				font-weight: bolder;
				font-size: 1rem;
				border: none;
				position: absolute;
				right: 4%;
				top: 4%;
				background: transparent;
				text-align: center;
				color: #fff;
				transition: 1s;
				&:hover {
					cursor: pointer;
					font-size: 1.1rem;
					color: #00ff04;
				}
			}
		}
		footer {
			height: 85%;
			.textImg {
				width: 50%;
				margin: 10px 0;
				&:hover {
					cursor: zoom-in;
					opacity: 0.9;
				}
				border-radius: 10px;
			}
			h5 {
				margin: 10px;
			}
			div:nth-of-type(1) {
				position: relative;
				width: 50%;
				height: 20%;
				display: grid;
				margin-top: 1%;
				grid-template-columns: 20% 80%;
				grid-template-rows: 50% 50%;
				border-radius: 10px;
				background: #000;
				&:hover {
					cursor: pointer;
				}
				&:hover img {
					opacity: 0.6;
				}
                &:hover svg {
					opacity: 1;
				}
                svg{
                    position: absolute;
                    right: 8%;
                    top: 32%;
                    opacity: 0;
                    color: rgb(255, 255, 255);
                    transition: 0.5s;
                }
				img {
					border-radius: 10px;
					width: 70%;
					height: 70%;
					margin: auto;
					grid-column: 1 / span 1;
					grid-row: 1 / span 2;
					transition: 0.5s;
				}
				h5,
				h6 {
					margin: 0;
				}
				h5 {
					padding: 10px 0 0 5px;
					grid-column: 2 / span 1;
					grid-row: 1 / span 1;
				}
				h6 {
					color: #b9b6b6;
					padding: 10px 0 0 5px;
					grid-column: 2 / span 1;
					grid-row: 2 / span 1;
				}
			}
			span {
				position: absolute;
				bottom: 1%;
				width: 90%;
				height: 10%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				h4 {
					margin: 0;
					svg {
						transition: 0.5s;
					}
					&:hover {
						cursor: pointer;
						color: rgb(52, 224, 175);
					}
				}
			}
		}
	}
}
</style>
