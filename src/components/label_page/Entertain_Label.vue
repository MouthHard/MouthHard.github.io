<template>
	<el-drawer v-model="drawer" :title="drawer_title" :direction="direction">
		<!-- 根据点击的游戏标题不同，显示不同的展示游戏的 组件页面 -->
		<template #default> 
			<component :is="curjoyLabel"></component>
		</template>
		
		<template #footer>
			<div style="flex: auto">
			    <el-button type="primary" @click="drawer = false">OK</el-button>
			</div>
		</template>
	</el-drawer>
	
	<template v-for="games in gameLabels" :key="games.id">
		<div class="gameImages" @click="changeJoyLabel(games.title)" @mouseenter="colorEX(games.audioSrc)" @mouseleave="stopMusic">
			<img  :src="games.imgSrc"  />
			<button>{{games.title}}</button>
		</div>
		
	</template>	
	<audio  hidden ref="labelAudio" >
		<source  />
	</audio>
</template>

<script>	
import Witcher from './Sub_Entertain/Witcher3.vue'
import DyingLight from './Sub_Entertain/DyingLight.vue'
	export default {
		components:{
			Witcher,
			DyingLight
		},

		data() {
			return {
				
				curjoyLabel:'Witcher',
				drawer_title:'Witcher',
				drawer: false,
				direction:'rtl',
				gameLabels:[
					{id:'001', title:'The Witcher 3:Wild Hunt 巫师3：狂猎', imgSrc: require('../../assets/gamePic/wit.png'), 
							audioSrc:'http://music.163.com/song/media/outer/url?id=416011539.mp3'},
					{id:'002', title:'Dying Light 消逝的光芒', imgSrc:require('../../assets/gamePic/dl.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=33378175.mp3'},
					{id:'003', title:'SpiritFarer 灵魂摆渡人', imgSrc:require('../../assets/gamePic/SpiritFarer.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1472453417.mp3'},
					{id:'004', title:'Battlefield 1 战地1', imgSrc:require('../../assets/gamePic/bf1.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=443876734.mp3'},
					{id:'005', title:'Sid Meiers Civilization VI 文明6', imgSrc:require('../../assets/gamePic/six.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=441120082.mp3'},
					{id:'006', title:'Grand Theft Auto V 侠盗猎车手5', imgSrc:require('../../assets/gamePic/GTA5.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=27770721.mp3'},
					{id:'007', title:'Minecraft 别人的世界', imgSrc:require('../../assets/gamePic/MC.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=4010201.mp3'},
					{id:'008', title:'Undertale 传说之下', imgSrc:require('../../assets/gamePic/UnderTale.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=39227633.mp3'},
					{id:'009', title:'DNF 地下城与勇士', imgSrc:require('../../assets/gamePic/DNF.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=409646230.mp3'},
					{id:'010', title:'LOL英雄联盟', imgSrc:require('../../assets/gamePic/LOL.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1470477654.mp3'},
					{id:'011', title:'ABZÛ', imgSrc:require('../../assets/gamePic/ABZU.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=425137650.mp3'},
					{id:'012', title:'Prototype 虐杀原形', imgSrc:require('../../assets/gamePic/prototype.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1996466.mp3'},
					{id:'013', title:'Metro 地铁', imgSrc:require('../../assets/gamePic/metro.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1372953111.mp3'},
					{id:'014', title:'Fallout 辐射', imgSrc:require('../../assets/gamePic/fallout.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=36872926.mp3'},
					{id:'015', title:'RimWorld 环世界', imgSrc:require('../../assets/gamePic/rimw.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=444267575.mp3'},
					{id:'016', title:'Assassins Creed 刺客信条', imgSrc:require('../../assets/gamePic/assassin.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=18649294.mp3'},
					{id:'017', title:'Terraria 泰拉瑞亚', imgSrc:require('../../assets/gamePic/terraria.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1999180.mp3'},
					{id:'018', title:'This War Of Mine 这是我的战争', imgSrc:require('../../assets/gamePic/thisWar.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=30512495.mp3'},
					{id:'019', title:'TitanFall2 泰坦陨落2', imgSrc:require('../../assets/gamePic/titan.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=445703120.mp3'},
					{id:'020', title:'Doom  毁灭战士', imgSrc:require('../../assets/gamePic/doom.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=420513906.mp3'},
					{id:'021', title:'Left 4 Dead 2 求生之路2', imgSrc:require('../../assets/gamePic/l4d2.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=399340504.mp3'},
					{id:'022', title:'Red Dead Redemption 2 大表哥2', imgSrc:require('../../assets/gamePic/RDR2.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1341138873.mp3'},
					{id:'023', title:'Bayonetta 贝优妮塔', imgSrc:require('../../assets/gamePic/bynt.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=546505.mp3'},
					{id:'024', title:'The Elder Scrolls V: Skyrim 少女卷轴5', imgSrc:require('../../assets/gamePic/ESV.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1592340.mp3'},
					{id:'025', title:'Halo 光环', imgSrc:require('../../assets/gamePic/halo.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1765877.mp3'},
					{id:'026', title:'Cyberpunk 2077 赛博朋克2077', imgSrc:require('../../assets/gamePic/cyber.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=28070802.mp3'},
					{id:'027', title:'Death Stranding 死亡搁浅', imgSrc:require('../../assets/gamePic/DS.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=472045266.mp3'},
					{id:'028', title:'ゼルダの伝説：ブレスオブザワイルド 塞尔达传说：旷野之息', imgSrc:require('../../assets/gamePic/Zelda.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=464015763.mp3'},
					{id:'029', title:'ゼノブレイド 异度神剑', imgSrc:require('../../assets/gamePic/X.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=565970070.mp3'},
					{id:'030', title:'Devil May Cry 鬼泣', imgSrc:require('../../assets/gamePic/DMC.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1818064296.mp3'},
					{id:'031', title:'Ori 奥日', imgSrc:require('../../assets/gamePic/Ori.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=420154196.mp3'},
<<<<<<< HEAD
					{id:'032', title:'Borderlands 无主之地', imgSrc:require('../../assets/gamePic/border.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1969559064.mp3'},
=======
					{id:'032', title:'Persona 5 女神异闻录5', imgSrc:require('../../assets/gamePic/PS5.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=454231736.mp3'},
>>>>>>> e377521 (“提交”)
					{id:'033', title:'Child Of Light 光之子', imgSrc:require('../../assets/gamePic/child.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=28491307.mp3'},
					{id:'034', title:'To the moon 前往月球', imgSrc:require('../../assets/gamePic/moon.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1645064.mp3'},
					{id:'035', title:'STEINS;GATE 命运石之门', imgSrc:require('../../assets/gamePic/gate.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=4919981.mp3'},
					{id:'036', title:'Final Fantasy 最终幻想', imgSrc:require('../../assets/gamePic/FF.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1487507439.mp3'},
					{id:'037', title:'The Last of Us I 最后生还者第一部', imgSrc:require('../../assets/gamePic/TLU.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=26509685.mp3'},
					{id:'038', title:'Risk of Rain 2 雨中冒险2', imgSrc:require('../../assets/gamePic/ror2.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1465203893.mp3'},
					{id:'039', title:'Dead Cells 死亡细胞', imgSrc:require('../../assets/gamePic/deadCell.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1828525621.mp3'},
					{id:'040', title:'Fall Guys: Ultimate Knockout 糖豆人：终极淘汰赛', imgSrc:require('../../assets/gamePic/sugar.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1481515936.mp3'},
					{id:'041', title:'Little Nightmares 小小梦魇', imgSrc:require('../../assets/gamePic/little.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=485607955.mp3'},
					{id:'042', title:'The Long Dark 漫漫长夜', imgSrc:require('../../assets/gamePic/TLD.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1343491963.mp3'},
					{id:'043', title:'光明记忆', imgSrc:require('../../assets/gamePic/lightMemo.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1371308383.mp3'},
					{id:'044', title:'Human Fall Flat 人类一败涂地', imgSrc:require('../../assets/gamePic/human.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=536623054.mp3'},
					{id:'045', title:'BioShork Infinite 生化奇兵：无限', imgSrc:require('../../assets/gamePic/bs.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=26441613.mp3'},
					{id:'046', title:'Dont Starve 饥荒', imgSrc:require('../../assets/gamePic/dontS.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=26427669.mp3'},
					{id:'047', title:'Oxygen Not Included 缺氧', imgSrc:require('../../assets/gamePic/oxygen.png'),
							audioSrc:''},
					{id:'048', title:'The Escapists 2 逃脱者2', imgSrc:require('../../assets/gamePic/escape.png'),
							audioSrc:''},
					{id:'049', title:'Green Hell 绿色地狱', imgSrc:require('../../assets/gamePic/green.png'),
							audioSrc:''},
					{id:'050', title:'Grounded 禁闭求生', imgSrc:require('../../assets/gamePic/grounded.png'),
							audioSrc:''},
					{id:'051', title:'Outlast 逃生', imgSrc:require('../../assets/gamePic/outlast.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=477331751.mp3'},
					{id:'052', title:'The Hunter:Call Of The Wild 猎人：荒野的召唤', imgSrc:require('../../assets/gamePic/hunterWC.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1501804871.mp3'},
					{id:'053', title:'Subnautica 美丽水世界', imgSrc:require('../../assets/gamePic/subN.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1444634620.mp3'},
					{id:'054', title:'孤帆远航', imgSrc:require('../../assets/gamePic/FarL.png'),
							audioSrc:''},
					{id:'055', title:'远方：涌变暗潮', imgSrc:require('../../assets/gamePic/farW.png'),
							audioSrc:''},
					{id:'056', title:'7 Days To Die 七日杀', imgSrc:require('../../assets/gamePic/7days.png'),
							audioSrc:''},
					{id:'057', title:'Tomb Raider 古墓丽影', imgSrc:require('../../assets/gamePic/tr.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=26063809.mp3'},
					{id:'058', title:'No Mans Sky 无人深空', imgSrc:require('../../assets/gamePic/noManSky.png'),
							audioSrc:''},
					{id:'059', title:'Moon Lighter 夜勤人', imgSrc:require('../../assets/gamePic/moonlight.png'),
							audioSrc:''},
					{id:'060', title:'My Time At Portia 波西亚时光', imgSrc:require('../../assets/gamePic/portia.png'),
							audioSrc:''},
					{id:'061', title:'The Forest 森林', imgSrc:require('../../assets/gamePic/forest.png'),
							audioSrc:''},
					{id:'062', title:'Ring Of Pain  苦痛之环', imgSrc:require('../../assets/gamePic/ringOfP.png'),
							audioSrc:''},
					{id:'063', title:'Slay The Spire 杀戮尖塔', imgSrc:require('../../assets/gamePic/sts.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1823240655.mp3'},
					{id:'064', title:'Slime Rancher 史莱姆牧场', imgSrc:require('../../assets/gamePic/slime.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1977496866.mp3'},
					{id:'065', title:'State of Decay 2 腐烂国度2', imgSrc:require('../../assets/gamePic/states.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=26546351.mp3'},
					{id:'066', title:'Project Zomboid 僵尸毁灭工程', imgSrc:require('../../assets/gamePic/zomboid.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1925929152.mp3'},
					{id:'067', title:'归家异途2', imgSrc:require('../../assets/gamePic/home.png'),
							audioSrc:'http://music.163.com/song/media/outer/url?id=1375685848.mp3'},
					{id:'068', title:'Noita ', imgSrc:require('../../assets/gamePic/noita.png'),
							audioSrc:''},
					{id:'069', title:'Town Scaper 城镇叠叠乐', imgSrc:require('../../assets/gamePic/town.png'),
							audioSrc:''},
					{id:'070', title:'HexCells', imgSrc:require('../../assets/gamePic/hex.png'),
							audioSrc:''},
					{id:'071', title:'SuperLiminal 超阈限空间', imgSrc:require('../../assets/gamePic/superLimit.png'),
							audioSrc:''},
					{id:'072', title:'MR.Prepper末日准备狂', imgSrc:require('../../assets/gamePic/prepare.png'),
							audioSrc:''},
					{id:'073', title:'BABA Is You', imgSrc:require('../../assets/gamePic/baba.png'),
							audioSrc:''},
					{id:'074', title:'Carto 无尽旅图', imgSrc:require('../../assets/gamePic/carto.png'),
							audioSrc:''},
					{id:'075', title:'Necesse', imgSrc:require('../../assets/gamePic/necesse.png'),
							audioSrc:''},
					{id:'076', title:'The Pedestrian', imgSrc:require('../../assets/gamePic/walk.png'),
							audioSrc:''},
					{id:'077', title:'Sniper Elite4 狙鸡精英4', imgSrc:require('../../assets/gamePic/eggs.png'),
							audioSrc:''},
					{id:'078', title:'Streets Of Rogue', imgSrc:require('../../assets/gamePic/streets.png'),
							audioSrc:''},
<<<<<<< HEAD

=======
					{id:'079', title:'Borderlands 无主之地', imgSrc:require('../../assets/gamePic/border.png'),
							audioSrc: 'http://music.163.com/song/media/outer/url?id=1969559064.mp3'},
>>>>>>> e377521 (“提交”)
				]
			}
		},
		mounted() {
			
		},
		methods:{
			//注意  如果下面这段代码放到mounted 会出现报错“不合理的dom元素”，因为在mouted结束的时候，drawer还不是true，
			//因为挂载完了用户也没有点击打开侧边窗，所以drawer一直为false，也就不会执行括号中的代码，如果去掉if(this.drawer)
			//那么由于侧边窗drawer一直没有打开，里面的dom元素也没有构建，所以下面的document.getElementById('xx')也就一直找不到xx名的元素
			//只有当drawer为true的时候，窗口打开了 侧边栏中的dom元素才能被获取到
			stopMusic(){
				this.$refs.labelAudio.pause();
			},
			colorEX(audioSrc){
				// console.log(audioSrc)
				
				this.$refs.labelAudio.src = audioSrc
				this.$refs.labelAudio.currentTime = 0;//从头开始播放
				this.$refs.labelAudio.play(); //播放
				
				
				let ranA = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
				let ranB = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
				let ranC = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
				let liner ='inset -20px 0 30px 1px '+ ranA+' , ' + 'inset 20px 0 30px -1px ' +ranB
				// console.log(liner)
				document.querySelector('.el-dialog__body').style.boxShadow = liner
			},
			changeJoyLabel(title){
				this.drawer=true
				this.drawer_title = title
				if(this.drawer_title =='The Witcher 3:Wild Hunt 巫师3：狂猎'){
					this.curjoyLabel = 'Witcher'
				}else if(this.drawer_title=='Dying Light 消逝的光芒'){
					this.curjoyLabel = 'DyingLight'
				}else if(this.drawer_title==''){
					this.curjoyLabel = ''
				}else if(this.drawer_title==''){
					this.curjoyLabel = ''
				}else if(this.drawer_title==''){
					this.curjoyLabel = ''
				}else{
					
				}
			}
		}
	}
</script>
<style>
	.el-drawer{
		background:linear-gradient(to bottom, #2f4288,#000000);
	}
	.el-drawer__body{
		padding: 0;
		color: #FFFFF0;
	}
	.el-drawer__title{
		color: #FFFFF0;
	}
</style>
<style scoped>
	.gameImages{
		/* 添加width更整齐， 不添加感觉更自由 */
		width: 40%;  
		display: inline-flex;
		align-items:center;
		justify-content: center;
		flex-direction: column;
		margin: 15px;
		padding: 0;
		
	}
	.gameImages:hover{
		background-color: #ebebeb;
		border: 1px solid #cbcbc6;
	}
	.gameImages img{
		width: 35%;
		box-shadow:  0 0 20px 0 rgba(0, 0, 0, 1.0);
		border: 1px double #000000;
	}
	
	.gameImages button{
		width: 55%;
		font-weight: bolder;
		padding: 5px;
		box-shadow:  -5px 7px 20px 0 rgba(0, 0, 0, 1.0);
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1);
		font-weight: 1000;
		/* // text-shadow: -1px 1px #000000, -2px 2px #000000, -3px 3px #000000, -4px 4px #000000,
		// 	-5px 5px #ebebeb; */
		border-right: #b6b6b6 ridge 0.4rem;
		border-left: #b6b6b6 groove 0.4rem;

		border-bottom: #828282 ridge 1rem ;
		background: linear-gradient(to bottom,
		#8d8d8d 0%,#9c9c9c 10%,  #aaaaaa 20%,#e6e6e6 40%,
		#ffffff 70%,#f3f3f3 75%, #e3e3e3 76%,#bcbcbc 99%,
		#ffffff 100%);
	}
	.gameImages:hover  button{
		cursor: pointer;
		background-color: #000000;
		color: #ffffff;
		transition: 0.5s;
		background: linear-gradient(to top,
		#393939 0%,#424242 20%,  #393939 30%,#535353 40%,
		#939393 70%,#595959 75%, #878787 76%,#424242 99%,
		#242424 100%);
		border-right: #e3e3e3 ridge 0.4rem;
		border-left: #e3e3e3 groove 0.4rem;
		
		border-bottom: #545454 groove 1rem ;
	}
	.gameImages:hover img{
		cursor: pointer;
		width: 60%;
		transition: 0.5s;
	}
</style>
