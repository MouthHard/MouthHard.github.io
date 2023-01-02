<template>
	<h2>消逝的光芒</h2>
	<img src="../../../assets/entertainImg/haran.png"/>
	<div  class="dy_labels">
		<font style="font-weight: bolder;">游戏标签：</font>
		<template v-for="dyA in dy_labelArr" :key="dyA.id">
			<span>{{dyA.title}}</span>
		</template>	
	</div>	
	<h2>消逝的光芒2：保持人性</h2>
	<img src="../../../assets/entertainImg/Virato.png"/>
	<a href="https://music.163.com/playlist?id=955554851&userid=579835822" target="_blank">音乐推荐：消逝的光芒原声合集</a>
	<div class="videoRecom">
		解说视频推荐：
		<br />
		<template v-for="dyVR in dy_videoReco" :key="dyVR.id">
			<div class="videoItem" @click="window.open(dyVR.addresses)">
				<img :src="dyVR.imgSrc" />
				<a :href="dyVR.addresses" target="_blank">{{dyVR.title}}</a>
			</div>
		</template>	
	</div>
</template>

<script>
import * as echarts from 'echarts'
	export default {
		data() {
			return {
				dy_videoReco:[
					{id:'001',imgSrc:require('../../../assets/entertainImg/dyText.png'), title:'消逝的光芒到底讲了什么？38分钟带你看完游戏《消逝的光芒》主线剧情！！！',addresses:'https://www.bilibili.com/video/BV1pP4y1a7wC/?spm_id_from=333.788.recommend_more_video.0&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'002',imgSrc:require('../../../assets/entertainImg/dy2Text.png'), title:'万字解析！消逝的光芒2到底讲了什么？阿怪带你发现游戏主线的来龙去脉！！！',addresses:'https://www.bilibili.com/video/BV16T4y1Q7EC/?spm_id_from=333.788.recommend_more_video.0&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'003',imgSrc:require('../../../assets/entertainImg/dy2_sonar.png'), title:'拳打暴徒，脚踢丧尸，消逝的光芒2的玩法究竟什么样？〖游戏不止〗',addresses:'https://www.bilibili.com/video/BV1x44y1K7QC/?spm_id_from=333.999.0.0'},
					{id:'004',imgSrc:require('../../../assets/entertainImg/sonar_dy2.png'), title:'《消逝的光芒2》究竟讲述了什么故事？〖游戏不止〗',addresses:'https://www.bilibili.com/video/BV13S4y1D7zg/?spm_id_from=333.999.0.0&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'005',imgSrc:require('../../../assets/entertainImg/dy.png'), title:'10分钟了解丧尸大逃杀 消逝的光芒&坏血',addresses:'https://www.bilibili.com/video/BV11W411z76m/?spm_id_from=333.999.0.0&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'006',imgSrc:require('../../../assets/entertainImg/dy2.png'), title:'【合集】老戴《消逝的光芒2 人与仁之战》主线剧情流程解说（Dying Light 2）【4K】【完结】',addresses:'https://www.bilibili.com/video/BV1ZZ4y1d7UM/?spm_id_from=333.337.search-card.all.click&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					
				],
				dy_labelArr:[
					{id:'001', title:'开放世界'},
					{id:'002', title:'生存制作'},
					{id:'003', title:'第一人称+射击'},
					{id:'004', title:'后末日'},
					{id:'005', title:'僵尸'},
					{id:'006', title:'跑酷'},
					{id:'007', title:'在线合作'},
					{id:'008', title:'血腥暴力'},
					{id:'009', title:'动作冒险'},
					{id:'010', title:'角色扮演'},
					{id:'011', title:'剧情丰富'},
					{id:'012', title:'冷兵器砍杀'},
					{id:'013', title:'多结局'},
					{id:'014', title:'选择取向'},
					{id:'015', title:'氛围恐怖'},
					{id:'016', title:'创意工坊！'},
					{id:'017', title:'哈兰拳皇·哈兰传奇·哈兰锁王·哈兰超人'},
					{id:'018', title:'顺手牵羊'},
					{id:'019', title:'武器大师'},
					{id:'020', title:'彩蛋'},
					{id:'021', title:'哈兰传统'},
					{id:'022', title:'能跑能打，他跑它追'},
					{id:'023', title:'维勒多垃圾王·任务牛马·维勒多蜘蛛侠'},
				],
			}
		},
		mounted() {

		}
	}
</script>

<style scoped>
	img{
		width: 400px;
		border: 2px double #6f8aa2;
	}
	
	.dy_labels{
		margin: 5% 0 5% 5%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.dy_labels span{
		margin: 5px 5px 0 0 ;
		color: #6bcbff;
		padding: 5px;
		background-color: rgba(65, 154, 195, 0.5);
		border-radius: 2px;
	}
	.dy_labels span:hover{
		color: #ffffff;
		background-color: rgba(85, 204, 255, 1.0);
	}
	a, .videoItem a{
		font-size: 1rem;
		display: inline-block;
		color: #ffffff;
		text-decoration: none;
		width: 15rem;
		margin-left: 0.5rem;
		margin-top: 1rem;
	}
	a:hover, .videoItem a:hover{
		color: #78ffff;
	}
	.videoRecom{
		text-align: left;
		margin-top: 2rem;
		margin-left: 1rem;
	}
	.videoItem{
		display: flex;
		margin-top: 1rem;
	}
	.videoItem:hover{
		background: rgba(255, 255, 255, 0.1);
		cursor: hand;
	}
	.videoItem img{
		width: 150px;
	}
</style>
