<template>
	<img src="../../../assets/gamePic/Witcher.png"/>
	<div id="rate_chart"></div>
	<div  class="wit_labels">
		<font style="font-weight: bolder;">游戏标签：</font>
		<template v-for="wla in witcher_labelArr" :key="wla.id">
			<span>{{wla.title}}</span>
		</template>	
	</div>	
	<div  class="wit_diyLabels">
		<font style="font-weight: bolder;">个人标签：</font>
		<template v-for="witDIY in witcher_diyLabels" :key="witDIY.id">
			<span>{{witDIY.title}}</span>
		</template>	
	</div>	
	<div class="gameIntro">
		<font style="font-weight: bolder; color: #FFFFFF;">游戏介绍：</font>
		《巫师：狂猎》是一款情节驱动的开放世界角色扮演游戏。本作的故事发生在一个令人目眩神迷的奇幻宇宙里，玩家做出的每一个选择都意义重大，
		同时也要面对影响深远的后果。在《巫师》这个广袤的开放世界中，您可以尽情探索商业都市、海盗岛屿、危险的山隘和被遗忘的洞窟。
	</div>
	<a href="https://music.163.com/album?id=3152080&userid=579835822" target="_blank">音乐推荐：巫师3原声合集</a>
	<div class="videoRecom">
		解说视频推荐：
		<br />
		<template v-for="witVR in witcher_videoReco" :key="witVR.id">
			<div class="videoItem" @click="window.open(witVR.addresses)">
				<img :src="witVR.imgSrc" />
				<a :href="witVR.addresses" target="_blank">{{witVR.title}}</a>
			</div>
		</template>	
	</div>
</template>

<script>
import * as echarts from 'echarts'
	export default {
		data() {
			return {
				witcher_videoReco:[
					{id:'001',imgSrc:require('../../../assets/entertainImg/wit3next.png'), title:'【巫师三部曲】专题 (下): 狂猎 - 改变了RPG标准的史诗 [Leya蕾雅]',addresses:'https://www.bilibili.com/video/BV1dA411L7Rq/?spm_id_from=333.788&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'002',imgSrc:require('../../../assets/entertainImg/stoneHeart.png'), title:'【巫师】专题特别篇: 石之心 - 深入骨髓的暗黑寓言 [Leya蕾雅]',addresses:'https://www.bilibili.com/video/BV1jV41117Uj/?spm_id_from=333.788&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'003',imgSrc:require('../../../assets/entertainImg/bloodWine.png'), title:'【巫师】专题特别篇: 血与酒 - 如梦似幻! 史上最大资料片 [Leya蕾雅]',addresses:'https://www.bilibili.com/video/BV1FK411V74W/?spm_id_from=333.788&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'004',imgSrc:require('../../../assets/entertainImg/witBranch1.png'), title:'细思极恐, 后劲过大! 【猎魔人/巫师3】专题 - 论支线故事的正确写法 [Leya蕾雅]',addresses:'https://www.bilibili.com/video/BV1YZ4y1Q7ci/?spm_id_from=333.788&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'005',imgSrc:require('../../../assets/entertainImg/witBranch2.png'), title:'脑洞清奇, 笑死个人! 【猎魔人/巫师3】专题 - 论支线故事的正确写法(2) 【4K】[Leya蕾雅]',addresses:'https://www.bilibili.com/video/BV1iL4y1n7Ne/?spm_id_from=333.788&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'006',imgSrc:require('../../../assets/entertainImg/witPic1.png'), title:'【4K 60FPS】巫师3-极致画质-唯美的魔幻世界 -身临其境的游戏体验-GRAPHIC MODS',addresses:'https://www.bilibili.com/video/BV1mE411f7Rj/?spm_id_from=333.337.search-card.all.click&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'007',imgSrc:require('../../../assets/entertainImg/witPic2.png'), title:'《巫师3》《4K》电影级画质风景欣赏《画质党建议收藏》',addresses:'https://www.bilibili.com/video/BV1XL411j7mw/?spm_id_from=333.788.recommend_more_video.-1&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
					{id:'008',imgSrc:require('../../../assets/entertainImg/witPic3.png'), title:'【4K 60FPS 】巫师3-极致画质-唯美的魔幻世界-身临其境的游戏体验',addresses:'https://www.bilibili.com/video/BV1WJ411a7NM/?spm_id_from=333.337.search-card.all.click&vd_source=636ab0a6527ff2af50cb51ea76a35a9f'},
				],
				witcher_labelArr:[
					{id:'001', title:'开放世界'},
					{id:'002', title:'角色扮演'},
					{id:'003', title:'奇幻冒险'},
					{id:'004', title:'单人'},
					{id:'005', title:'第三人称'},
					{id:'006', title:'魔法'},
					{id:'007', title:'冒险'},
					{id:'008', title:'动作'},
					{id:'009', title:'黑暗'},
					{id:'010', title:'沙盒'},
					{id:'011', title:'好评原声音轨'},
					{id:'012', title:'选择取向'},
					{id:'013', title:'多结局'}
				],
				witcher_diyLabels:[
					{id:'001', 
				title:'黄赌毒禁令优秀执行者·狼三光·打桩机·裂膜人·真·女巫猎人·瘾君子·滚学派·武器大师·怪物猎人·北方剑圣·骨质疏松·鹤山银行老客户·名侦探·拳王·怡红院高级会员·维密模特——杰洛特'},
					{id:'002', title:'实至名归 获奖无数 年度最佳 限时原价 RPG大作 细节炸裂'},
					{id:'003', title:'通关失落 黄粱一梦'},
					{id:'004', title:'攻略偷窥者'},
					{id:'005', title:'恋爱党争'},
					{id:'006', title:'昆特3：狂嫖 '},
					{id:'007', title:'萝卜土地公——俺の愛馬が'},
					{id:'008', title:'流派整活'},
					{id:'009', title:'对狩魔人宝具'},
					{id:'010', title:'女儿？主线？'},
					{id:'011', title:'支线DLC精彩'},
					{id:'013', title:'🥵 吊坠振动'},
					{id:'014', title:'X人探戈'},
					{id:'015', title:'拾荒致富'},
					{id:'016', title:'拜年剑法'},
					{id:'017', title:'无最优解 善恶无界 底线模糊'},
					{id:'018', title:'选择困难'},
					{id:'019', title:'退休养老'},
					{id:'020', title:'名震天下'},
					{id:'021', title:'风景截图党'},
					{id:'022', title:'白狼传奇 '},
					{id:'023', title:'卡牌收集'},
					{id:'024', title:'银剑斩妖，钢剑除恶，裆剑降巫'},
					{id:'025', title:'艺术品 想象力丰富'},
					{id:'026', title:'文本爆炸，剧情庞大又精彩 一小窥大 映射现实'},
					{id:'027', title:'显卡掠夺者，画质毁灭者，风景如诗'},
				],
								
				rateOption : {
					title: {
						text: '巫师3：狂猎',
						subtext: '好评如潮(97%好评率)',
						left:'center',
						top:'0',
						textStyle:{
							fontSize: 21,
							align:'center',
							color:'#ffffff'
						},
						subtextStyle:{
							fontFamily : "微软雅黑",
							fontSize: 12,
							color:'#70b9cf',
							fontWeight:'bolder',
						}
					},
					tooltip: { trigger: 'item'},
					color:['#4270ab','#bf0000'],
					legend: {
						left: 'center',
						top:'bottom',
						textStyle:{
						   
						    color: '#ffffff'//字体颜色
						},
					},
					series: [{
						name: '评价',
						type: 'pie',
						radius: '50%',
						data: [
							{ value: 534878, name: '好评' },
							{ value: 16543, name: '差评' },
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(255, 255, 255, 0.5)'
							}
						}
					}]
				}
			}
		},
		mounted() {
			let myDom = document.getElementById('rate_chart')
			// console.log(myDom)
			let myChart = echarts.init(myDom);
			// console.log(myChart)
			myChart.setOption(this.rateOption);
			window.onresize = myChart.resize;
		}
	}
</script>

<style scoped>
	img{
		width: 400px;
		border: 2px double #6f8aa2;
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
	a, .videoItem a{
		display: inline-block;
		color: #ffffff;
		text-decoration: none;
		width: 15rem;
		margin-left: 0.5rem;
	}
	a:hover, .videoItem a:hover{
		color: #78ffff;
	}
	a{
		font-weight: bolder;
		margin-top: 1rem;
		text-decoration: underline;
	}
	.gameIntro{
		font-weight: 100;
		color: #cdccef;
	}
	.wit_labels,.wit_diyLabels{
		margin: 5% 0 5% 5%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.wit_labels span , .wit_diyLabels span{
		margin: 5px 5px 0 0 ;
		color: #6bcbff;
		padding: 5px;
		background-color: rgba(65, 154, 195, 0.5);
		border-radius: 2px;
	}
	.wit_labels span:hover{
		color: #ffffff;
		background-color: rgba(85, 204, 255, 1.0);
	}
	.wit_diyLabels span{
		color: #bae0e2;
		background-color: rgba(20, 78, 91, 0.8);
		border: 1px solid #000000;
	}
	.wit_diyLabels span:hover{
		color: #ffffff;
		box-shadow: 0 0 20px 0px rgba(255, 255, 255, 1.0);
		border: 1px solid #ffffff;
	}
	#rate_chart{
		width: 400px;
		height: 300px;
		margin-bottom: 20px;
		/* background-color: #000000; */
	}
</style>
