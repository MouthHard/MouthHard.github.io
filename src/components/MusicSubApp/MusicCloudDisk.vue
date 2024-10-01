<template>
	<button v-for="(item, index) in headerBtnArr" class="btnTab" :class="{ isActive: activeTab == index }" @click="handelToogel(index)">{{ item }}</button>
	<div v-show="activeTab == 0" id="localTabA">
		<span>
			<h6>云盘容量</h6>
			<div class="progress-container">
				<div class="progressDL"></div>
			</div>
			<h6>300g / 1T</h6>
			<h6>歌曲永久保存，随时随地多端畅听</h6>
			<a href="javascript:;">扩容</a>
		</span>
		<div class="buttonGroup">
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
					<path
						fill="currentColor"
						d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437" />
				</svg>
				播放全部
			</button>
			<button>。。。</button>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
					<path fill="currentColor" d="M210.5 419.9h93.1V233.7h139.6L257 1L70.8 233.7h139.6v186.2zm256-46.5v93.1h-419v-93.1H1V513h512V373.4z" />
				</svg>
			</button>

			<input type="text" placeholder=" 🔍  搜 索 " />
		</div>
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th @click="changeSongTitleA('songTitleDL', 0)">
						标题
						<h5 id="songTitleDL">{{ songSortArr[0].arr[sortIndex_DL0] }}</h5>
					</th>
					<th @click="changeSongTitleA('albumTitleDL', 1)">
						专辑
						<h5 id="albumTitleDL">{{ songSortArr[1].arr[sortIndex_DL1] }}</h5>
					</th>
					<th @click="changeSongTitleA('typeTitleDL', 2)">
						格式
						<h5 id="typeTitleDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
					</th>
					<th @click="changeSongTitleA('uploadTitleDL', 2)">
						上传时间
						<h5 id="uploadTitleDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
					</th>
					<th @click="changeSongTitleA('sizeDL', 2)">
						大小
						<h5 id="sizeDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in downloadSingleArr" :key="item.id" @mouseenter="changeTdToPlay($event)" @mouseleave="changePlayToTd($event)">
					<td>{{ item.id }}</td>
					<td class="likeSong">
						<img :src="item.subImgsrc" alt="" />
						<h3>{{ item.songName }}</h3>
						<span>
							<h6 v-for="it in item.tagArr">{{ it }}</h6>
							<h5>{{ item.singer }}</h5>
						</span>
						<h4>
							<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14">
								<path
									fill="currentColor"
									fill-rule="evenodd"
									d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 3.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25"
									clip-rule="evenodd" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1792 1504">
								<path
									fill="currentColor"
									d="M640 640q0-53-37.5-90.5T512 512t-90.5 37.5T384 640t37.5 90.5T512 768t90.5-37.5T640 640m384 0q0-53-37.5-90.5T896 512t-90.5 37.5T768 640t37.5 90.5T896 768t90.5-37.5T1024 640m384 0q0-53-37.5-90.5T1280 512t-90.5 37.5T1152 640t37.5 90.5T1280 768t90.5-37.5T1408 640m384 0q0 174-120 321.5t-326 233t-450 85.5q-110 0-211-18q-173 173-435 229q-52 10-86 13q-12 1-22-6t-13-18q-4-15 20-37q5-5 23.5-21.5T198 1398t23.5-25.5t24-31.5t20.5-37t20-48t14.5-57.5T313 1126q-146-90-229.5-216.5T0 640q0-174 120-321.5t326-233T896 0t450 85.5t326 233T1792 640" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
								<path
									fill="currentColor"
									d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-6-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
							</svg>
						</h4>
					</td>
					<td>
						{{ item.album }}
					</td>
					<td>{{ item.type }}</td>
					<td>{{ item.uploadTime }}</td>
					<td>{{ item.size }}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div v-show="activeTab == 1" id="localTabB">
		<div class="buttonGroup">
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5l5 5z" />
				</svg>
				全部上传
			</button>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M6 9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 5h1v-4H8zm6-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm2 6h-1v-4h1z"
						clip-rule="evenodd" />
				</svg>
				全部暂停
			</button>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6zm6.414 8l1.768-1.768l-1.414-1.414L12 12.586l-1.768-1.768l-1.414 1.414L10.586 14l-1.768 1.768l1.414 1.414L12 15.414l1.768 1.768l1.414-1.414zM9 4v2h6V4z" />
				</svg>
				全部清空
			</button>
		</div>
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>标题</th>
					<th>进度</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in downloadingArr" :key="item.id" @mouseenter="changeTdToPlay($event)" @mouseleave="changePlayToTd($event)">
					<td>{{ item.id }}</td>
					<td class="likeSong">
						<img :src="item.subImgsrc" alt="" />
						<h3>{{ item.songName }}</h3>
						<span>
							<h6 v-for="it in item.tagArr">{{ it }}</h6>
							<h5>{{ item.singer }}</h5>
						</span>
						<h4>
							<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
								<path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m4 15v-2H8v2zm0-7l-4-4l-4 4h2.5v4h3v-4z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M14.12 10.47L12 12.59l-2.13-2.12l-1.41 1.41L10.59 14l-2.12 2.12l1.41 1.41L12 15.41l2.12 2.12l1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
								<path
									fill="currentColor"
									d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-6-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
							</svg>
						</h4>
					</td>
					<td>
						<div class="progress-download">
							<h5>{{ item.progress }}</h5>
							<div class="progress-container">
								<div class="progressDL">
									<h1></h1>
								</div>
							</div>

							<h6>{{ item.downloadSpeed }}</h6>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script setup>
import { ref } from "vue";

let activeTab = ref(1); //默认选中第一个tab
let sortIndex_DL0 = ref(0);
let sortIndex_DL1 = ref(0);
let sortIndex_DL2 = ref(0);
const handelToogel = (index) => {
	activeTab.value = index;
};
const headerBtnArr = ["已上传单曲", "正在上传"];
const downloadSingleArr = [
	{
		id: 0,
		subImgsrc:
			"https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
		songName: "I Want It That Way",
		singer: "Backstreet Boys",
		album: "Playlist: The Very Best Of Backstreet Boys",
		tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
		type: "mp3",
		uploadTime: "2023-01-23",
		size: "8.1 M",
	},
];
let curTdText = "";
const downloadingArr = [
	{
		id: 0,
		subImgsrc:
			"https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
		songName: "I Want It That Way",
		singer: "Backstreet Boys",
		tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
		progress: "暂停中 30%",
		downloadSpeed: "0 KB/s",
	},
	{
		id: 1,
		subImgsrc:
			"https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
		songName: "I Want It That Way",
		singer: "Backstreet Boys",
		tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
		progress: "上传中 30%",
		downloadSpeed: "300 KB/s",
	},
];
const changeTdToPlay = (e) => {
	curTdText = e.target.childNodes[0].innerHTML;
	e.target.childNodes[0].innerHTML = " ▶ ";
};

const changePlayToTd = (e) => {
	e.target.childNodes[0].innerHTML = curTdText;
};
const changeSongTitleA = (id, num) => {
	if (num == 0) {
		document.getElementById(id).innerHTML = songSortArr[num].arr[sortIndex_DL0.value++];
		sortIndex_DL0.value %= songSortArr[num].arr.length;
	} else if (num == 1) {
		document.getElementById(id).innerHTML = songSortArr[num].arr[sortIndex_DL1.value++];
		sortIndex_DL1.value %= songSortArr[num].arr.length;
	} else {
		document.getElementById(id).innerHTML = songSortArr[num].arr[sortIndex_DL2.value++];
		sortIndex_DL2.value %= songSortArr[num].arr.length;
	}
};
const songSortArr = [
	{ id: 0, arr: [` 默认排序 ⇅`, ` 标题升序 ⇧ `, ` 标题降序 ⇩ `, ` 歌手升序 ⇧ `, ` 歌手降序 ⇩ `] },
	{ id: 1, arr: [` 默认⇅`, ` 升序 ⇧ `, ` 降序 ⇩ `] },
	{ id: 2, arr: [` ⇅`, `  ⇧ `, `  ⇩ `] },
	{ id: 3, arr: [` 默认排序 ⇅`, ` 标题升序 ⇧ `, ` 标题降序 ⇩ `, ` 专辑名升序 ⇧ `, ` 专辑名降序 ⇩ `] },
];
</script>
<style lang="less" scoped>
.btnTab {
	position: relative;
	margin: 2% 5% 0 2%;
	background: transparent;
	color: #a29e9e;
	font-size: 1rem;
	padding: 1%;
	border: 1px solid transparent;
	&:hover {
		cursor: pointer;
		color: #fff;
	}
	h6 {
		position: absolute;
		font-size: 0.9rem;
		top: -35%;
		right: -20%;
	}
	&::before {
		content: "";
		background: transparent;
		border-top: 4px double #7bfff6;
		border-left: 4px double #fbc362;
		position: absolute;
		left: 0;
		top: 0;
		width: 20%;
		height: 50%;
		opacity: 0;
		transition: 1s;
	}
	&::after {
		content: "";
		background: transparent;
		border-bottom: 4px double #7bfff6;
		border-right: 4px double #fbc362;
		transition: 1s;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 20%;
		height: 50%;
		opacity: 0;
	}
}
.isActive {
	text-align: center;
	color: #fff;
	font-weight: bolder;
	box-shadow: inset 0 0 15px 1px #458e7c;
	&::after {
		opacity: 1;
	}
	&::before {
		opacity: 1;
	}
}
.buttonGroup {
	position: relative;
	margin: 2% 0;
	display: flex;
	width: 100%;
	input {
		position: absolute;
		background: rgba(60, 80, 99, 0.5);
		border: none;
		right: 10%;
		top: 10%;
		color: #fff;
		height: 80%;
		width: 10%;
		transition: 0.5s;
		border-radius: 10px;
		&:hover {
			box-shadow: inset 0 0 15px 1px #0067bb;
		}
		&:focus {
			width: 25%;
			outline: none;
			border-bottom: 1px solid #a8cbff;
		}
	}
	button {
		padding: 5px 10px;
		height: 3rem;
		line-height: 2.5rem;
		margin-left: 1rem;
		color: #fff;
		border: none;
		background: #292828;
		text-align: center;
		border-radius: 10px;
		&:nth-of-type(1) {
			background: #24735f;
			&:hover {
				cursor: pointer;
				background: #31997f;
			}
		}
		&:hover {
			cursor: pointer;
			background: #424141;
		}
	}
}
#localTabA,
#localTabB {
	width: 98%;
	padding-left: 2%;
	svg:hover {
		transition: 0.5s;
		color: #65dd69;
		cursor: pointer;
	}
	span {
		width: 50%;
		margin-top: 1%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #b9b6b6;
		h6 {
			margin: 0.5rem 0 0 0;
		}
		a {
			color: #0067bb;

			text-decoration: none;
			&:hover {
				font-weight: bolder;
				color: #038eff;
			}
		}
		.progress-container {
			width: 40%;
			height: 0.3rem;
			margin-top: 2%;
			border-radius: 25px;
			background: #4e4d4d;
			border-left: 1px solid #ffffff;
			border-right: 2px solid #ffffff;
			.progressDL {
				width: 30%;
				height: 50%;
				box-shadow: 5px 0 10px 1px #ffffff;
				background: linear-gradient(to left, #ffffff, #049a11);
				animation: progressDL 1s infinite both;
			}
		}
	}
	table {
		margin-top: 1%;
		width: 95%;
		tr {
			&:hover {
				cursor: pointer;
				background: rgba(111, 111, 111, 0.5);
			}
			&:hover h4 {
				opacity: 1;
			}
		}
		.likeSong {
			display: grid;
			padding-top: 1%;
			align-items: center;
			grid-template-rows: 50% 40%;
			grid-template-columns: 12% 55% 30%;
			img {
				height: 3rem;
				width: 3rem;
				border-radius: 10px;
				grid-column: 1 / span 1;
				grid-row: 1 / span 2;
			}
			h3 {
				grid-column: 2 / span 1;
				grid-row: 1 / span 1;
				margin: 0;
				font-size: 1rem;
			}
			h4 {
				display: flex;
				align-items: center;
				justify-content: space-around;
				grid-column: 3 / span 1;
				grid-row: 1 / span 2;
				opacity: 0;
				transition: 0.5s;
			}
			span {
				width: 100%;
				display: flex;
				grid-column: 2 / span 1;
				grid-row: 2 / span 1;
				align-items: center;
				justify-content: flex-start;
				h6,
				h5 {
					margin: 5px 5px 0 0;
				}
				h5 {
					color: #b7b4b4;
					&:hover {
						color: #f4f3f3;
					}
				}
				h6 {
					font-size: 0.6rem;
					color: #ffea00;
					border: 1px solid #ffea00;
					padding: 3px;
					&:hover {
						color: #ff0000;
						border: 1px solid #ff0000;
					}
				}
			}
		}
		th {
			text-align: left;
			color: #b7b4b4;
			padding: 10px;
			position: relative;
			&:hover h5 {
				opacity: 1;
				transition: 0.5s;
			}
			h5 {
				position: absolute;
				margin: 0;
				right: 10%;
				top: 25%;
				opacity: 0;
			}
			&:hover {
				cursor: pointer;
				background: rgba(92, 45, 45, 0.5);
			}
		}

		th:nth-of-type(1) {
			width: 4%;
		}
		th:nth-of-type(3) {
			width: 20%;
		}
		th:nth-of-type(4) {
			width: 6%;
		}
		td:nth-of-type(3) {
			width: 15%;
			color: #858585da;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			&:hover {
				color: #ffffff;
			}
		}

		td {
			padding-left: 1%;
			font-size: 0.9rem;
		}
	}
}
#localTabB {
	table {
		th:nth-of-type(3) {
			width: 35%;
		}
	}
	.progress-download {
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		h5,
		h6 {
			margin: 8px;
		}
	}
	.progress-container {
		width: 80%;
		height: 0.7rem;
		border-radius: 25px;
		background: linear-gradient(to left, #ffffff, #000000);
		border-left: 1px solid #ffffff;
		border-right: 2px solid #ffffff;
		box-shadow: inset -15px 0 10px -1px #010101;
		.progressDL {
			width: 30%;
			height: 50%;
			border-radius: 25px;
			position: relative;
			box-shadow: 5px 0 10px 1px #ffffff;
			border-top: 1px solid #5d6cc9;
			border-bottom: 1px double #fff185;

			h1 {
				width: 0.5rem;
				height: 50%;
				background: #ffffff;
				position: absolute;
				left: 0;
				top: -1.1rem;
				box-shadow: 0 0 10px 1px #ffffff;
				animation: progressDL 1s infinite both;
			}
		}
		@keyframes progressDL {
			0% {
				left: 0;
				transform: rotate(0);
			}
			25% {
				left: 25%;
				transform: rotate(720deg);
			}
			50% {
				left: 50%;
				transform: rotate(1080deg);
			}
			75% {
				left: 75%;
				transform: rotate(0deg);
			}
			100% {
				left: 90%;
				transform: rotate(720deg);
			}
		}
	}
}
</style>
