<template>
	<div>
		<div class="loadingPage">
			<h1>{{welcomeMsg}}</h1>
			<img style="width: 50%;margin-bottom: 5%;" src="./assets/image/round.gif" >
			<div class="leadingPart">
				<img src="./assets/image/arrow_08.gif" @click="goToPos()">
			</div>
		</div>
		
		<!-- v-for批量生成路由页面 -->
		<nav> 
			<template v-for="vr in routerArr" :key="vr.id">
				<router-link :to="vr.address">{{vr.title}}</router-link>
			</template>	
		</nav>
		
		<div style=" display: flex;">
			<div ref="sidebarL" class="sidebarL">
<<<<<<< HEAD
				<!-- 网易云音乐插件 -->
				<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" 
					src="http://music.163.com/outchain/player?type=0&id=900909306&auto=1&height=90">
				</iframe>
=======

>>>>>>> e377521 (“提交”)
				
				<!-- 主选单红警图片 -->
				<img style="width: 100%;" src="./assets/image/warning.png" />
				
				<div class="following">
					<a @mouseenter="play_sound('followSound')" @mouseleave="sound_stop('followSound')" class="iconfont icon-github-fill" title="这是我的Github" onclick="window.open('https://github.com/MouthHard')"></a>
					<a @mouseenter="play_sound('followSound')" @mouseleave="sound_stop('followSound')" href="mailto:size.h@qq.com" target="_blank" class="iconfont icon-email" title="email？"></a>
					<a @mouseenter="play_sound('followSound')" @mouseleave="sound_stop('followSound')" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2302126674&amp;site=qq&amp;menu=yes"
						class="iconfont icon-qq" title="吼吼,不看我小站反而主动加我Q是吗">
					</a>
				</div>
				<!-- 左侧github  邮件  qq链接的音效 -->
				<audio  hidden ref="followSound" >
					<source src="./assets/sound/followBtn_sound.wav"/>
				</audio>
				
				<!-- 头像 以及配套音效-->
				<img class="head_count" src="./assets/image/red.png" @mouseenter="play_sound('sonar')" @mouseleave="sound_stop('sonar')">
				<audio  hidden ref="sonar" loop="loop" >
					<source src="./assets/sound/sonar.mp3"/>
				</audio>
				
				<hr/>
				<a @click="jumpToOtherPages('study')" @mouseenter="play_sound('audio')" @mouseleave="sound_stop('audio')">记工作学习：{{studyNotes}}</a>
				<hr />
				<a @click="jumpToOtherPages('label')" @mouseenter="play_sound('audio')" @mouseleave="sound_stop('audio')">标签：{{labelCount}}</a>
				<hr />
				<a style="font-size: 1rem;" @mouseenter="play_sound('audio')" @mouseleave="sound_stop('audio')">避难所存活天数：{{liveDays}}</a>
				<hr/>
				<a style="font-size: 1rem;" @mouseenter="play_sound('audio')" @mouseleave="sound_stop('audio')">最后更新时间：1天前</a>
				<hr/>
				<a @mouseenter="play_sound('audio')" @mouseleave="sound_stop('audio')">Do you like van ♂ 游 戏</a>
				<hr/>
				<div id="le1"></div>
				<div id="le2"></div>
				<div id="le3"></div>
				<audio  hidden ref="audio" >
					<source src="./assets/sound/Menu_button_hover.wav"/>
				</audio>
			</div>
			<div class="container">
				<router-view/>
			</div>
		</div>
		
			
	</div>

</template>

<script>
	import emitter from './assets/js/event.js'
	export default {
		data () {
			return {
				welcomeMsg:"",
				
				word :"破釜沉舟 的避难所",
				curIdx:0,
				timer:0,
				studyNotes:0,
				labelCount:0,
				
				//路由数组
				routerArr:[
					{id:'001', title:'主页',address:'/'},
					{id:'002', title:'学习',address:'/study'},
					{id:'003', title:'标签与分类',address:'/label'},
					{id:'004', title:'风景',address:'/landscape'},
					{id:'005', title:'音乐',address:'/music'},
					{id:'006', title:'3D地球模型测试',address:'/world'},
					// {id:'007', title:'生活',address:'/life'},
					{id:'008', title:'测试界面',address:'/loading'},
				],
			}
		},
		created() {
			emitter.on('noteLength', e => {
				// console.log(e)
				this.studyNotes=e
			})
			emitter.on('labelLength', (num) => {
				this.labelCount=num
			})
		},
		mounted() {
			
			this.nameCoding()
		},
		computed:{
			liveDays(){
				let curDay = new Date(); //新建一个日期对象，默认现在的时间
				var buildDay = new Date("2022-07-11 00:00:00"); //设置过去的一个时间点，"yyyy-MM-dd HH:mm:ss"格式化日期
				return parseInt((curDay - buildDay)/1000/86400)
			}
		},
		beforeUnmount() {
			emitter.all.delete('noteLength')
			emitter.all.delete('labelLength')
		},
		methods: {
			//音效停止
			sound_stop(target){
				if(target =='audio'){
					this.$refs.audio.pause();
				}else if(target =='sonar'){
					this.$refs.sonar.pause();
				}else{
					this.$refs.followSound.pause();
				}
			},
			//音效播放
			play_sound(target) {
				if(target =='audio'){
					this.$refs.audio.currentTime = 0;//从头开始播放
					this.$refs.audio.play(); //播放
				}else if(target =='sonar'){
					this.$refs.sonar.currentTime = 0;
					this.$refs.sonar.play(); 
				}else{
					this.$refs.followSound.currentTime = 0;
					this.$refs.followSound.play(); 
				}
			},
			//开头动画标题逐个字打印
			nameCoding(){	
			    if (this.curIdx <= this.word.length) { //当整个字符串没有显示完时，逐个显示
			      this.welcomeMsg = this.word.slice(0, this.curIdx++) + '|'
			      this.timer = setTimeout(this.nameCoding, 200)
			    }else{//显示完整后,结束打字,移除 "|"光标
			      this.welcomeMsg = this.word
			      clearTimeout(this.timer)
				}
			},
			//从开头页面进入到主页
			goToPos(){
				this.$refs["sidebarL"].scrollIntoView(true); 
			    // window.scrollTo(0, document.documentElement.scrollHeight - document.documentElement.clientHeight);
			},
			
			//路由跳转
			jumpToOtherPages(target){
				if(target =='study'){
					this.$router.push('/study')
				}else{
					this.$router.push('/label')
				}
				
			}
		}
	}
</script>
<style scoped> 
<<<<<<< HEAD
	iframe{
/* 		position: sticky;
		left: 1%;
		bottom: 1%; 
		margin-left: 1%; */
		width: 140%;
		height: 15%;
		background-image: linear-gradient(to top, #e1e1e1,#cfcfcf, #646464);
		border-top: #303030 ridge 0.2rem;
		border-right: #a6a6a6 ridge 0.5rem;
		border-left: #a6a6a6 groove 0.5rem;
		border-bottom: #8c8c8c ridge 1rem ;	
		box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 1.0);
	}
=======

>>>>>>> e377521 (“提交”)
	/* 欢迎界面 */
	.leadingPart img{
		width: 17%;
		transform: rotate(90deg);
	}
	.loadingPage{
		width: 100%;
		height: 100%;		
		background-color: #000000;
	}
	h1{
		font-size: 1.5vw;
		color: #6999c2;
		margin-left: -80%;
		padding-top: 5rem;
		animation: text_light 2s infinite linear;
	}
	@keyframes text_light {
	    0% {
			text-shadow: 0 0 18px rgba(254, 0, 0, 0.5);
	    } 
	    100% {
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
	    }
	}	
	/* 主界面侧边栏 */
	.container{
		width: 78%;
		position: relative;
		left: 7%;
	}

	.head_count{
		margin-top:0.5rem;
		margin-left: 35%;
		width:25%;
		height:7%;
		border-radius:50%;
		border:0.3rem double #fff66b;
	}
	.head_count:hover{
		animation: pulse 1.9s infinite;
	}
	@keyframes pulse {
	    0% {
	      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
	    }
	    70% {
	      box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.0);
		  transform: scale(1.1, 1.1);
	    }
	    100% {
	      box-shadow: 0 0 0 150px rgba(166, 168, 54, 0.0),
		  0 0 30px 0px rgba(255, 0, 0, 1.0);
	    }
	}
	.sidebarL{
		width: 14%;
<<<<<<< HEAD
		height: 46rem;
=======
		height: 44rem;
>>>>>>> e377521 (“提交”)
		background: linear-gradient(to left,
		#787a73 0%,#b1b1b1 20%,  #747870 30%,#5d5d5d 40%,
		#74797d 70%,#7e7e7e 75%, #4d4d4d 76%,#888888 99%,
		#ffffff 100%
		);
		box-shadow: 1px 1px #3e3e3e, 2px 2px #4b4b4b, 3px 3px #585858, 4px 4px #4b4b4b,
		5px 5px #5a5a5a, 6px 6px #9e9e9e, 7px 7px #3b3b3b, 8px 8px #ffffff,
		30px 0 20px -6px rgba(255, 0, 0, 0.8);
		transform: translateX(4px) translateY(-4px);
		display: flex;
		flex-direction: column;
	}
	.sidebarL a{
		font-size: 1.2vw;
		font-weight: bolder;
		font-family: STZhongsong;
		color: #fbff00;
		border: 6px double black;
		box-shadow: inset 0 0 20px 4px rgba(0, 0, 0, 1) ,
		 0 -15px 20px -10px rgba(0, 0, 0, 0.5),
		 0 15px 20px -10px rgba(0, 0, 0, 0.5);
		background: #aa0000;
		padding: 0.1rem 0 0.1rem 0;
		margin: -0.1rem 0.8rem -0.1rem 1rem;
	}
	.sidebarL a:hover{	
		color: #ffffff;
		font-family: FZYaoti;
		background: radial-gradient(circle, #ecec53, rgba(216, 216, 51, 1.0),rgba(149, 145, 22, 1.0));
	}
	#le1{
	  position: absolute;
	  width: 5rem;
	  height: 7%;
	  bottom: 1rem;
	  left: 97%;
	  border-radius: 0.5rem;
	  transform: rotate(90deg) skew(30deg);
	  background: linear-gradient(20deg,
	  #000147 0%,#070387 10%,  #0a2068 20%,#1d3b9d 40%,
	  #becdef 50%,#d2eaff 55%, #a9b3eb 56%,#7485ac 65%,
	  #0d0d75 75%,#0e1547 100%
	  );
	  z-index: 20;
	  box-shadow: -30px 0 20px -12px rgba(0, 243, 255, 0.7);
	  border-right: 5px double transparent;
	  border-top: 3px outset rgb(112, 133, 204);
	  border-left: 6px groove rgb(180, 208, 238);
	  border-bottom: 5px outset rgb(47, 73, 136);
	}
	#le2{
	  position: absolute;
	  width: 7rem;
	  height: 13%;
	  bottom: 6rem;
	  left: 93%;
	  border-radius: 0.5rem;
	  transform: rotate(130deg) skew(-50deg);
	  background: linear-gradient(to left,
	  #61612a 0%,#75672e 15%,  #6e712c 20%,#c1c666 35%,
	  #edefd3 50%,#fffacf 55%, #e1eba0 56%,#ded695 65%,
	  #b6b587 75%,#c1b558 100%
	  );
	  box-shadow: -30px 0 20px -12px rgba(128, 255, 137, 0.7);
	  border-right: 3px double rgb(149, 148, 124);
	  border-top: 3px outset rgb(112, 111, 95);
	  border-left: 7px groove rgb(147, 255, 187);
	  border-bottom: 5px outset rgb(107, 111, 60);
	  z-index: 19;
	}

	#le3{
	  position: absolute;
	  width: 14rem;
	  height: 2rem;
	  bottom: 8rem;
	  left: 57%;
	  transform: rotate(90deg) skew(60deg);
	  background: linear-gradient(180deg,
	  #474745 0%,#757572 10%,  #686767 20%,#9d9c95 40%,
	  #efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
	  #c6c5c5 75%,#ddddd7 100%
	  );
	  z-index: 17;
	  animation: red-sword 0.2s forwards;
	  animation-delay: 0.4s;
	}
	.sidebarL:hover #le3{
		bottom: 15rem;
		transition:   0.2s;
	}
	@keyframes red-sword{
	  100% {
		box-shadow: 20px 0 20px -10px rgba(0, 0, 0, 0.8),
				 -30px 0 20px -12px rgba(255, 238, 0, 0.8);
		border-right: 2px dotted rgb(132, 149, 140);
		border-top: 3px outset rgb(132, 149, 140);
		border-left: 10px groove rgb(202, 238, 194);
		border-bottom: 8px outset rgb(112, 132, 131);
	  }
	}
	.following{
		position: absolute;
		width: 4.5rem;
		height: 5rem;
		right: -30%;
		top: 23%;
		display: flex;
		flex-direction: column;
	}
	.following a{
		box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 1);
		font-size: 2vw;
		color: #fbff00;
		border: 4px double #ffff00;
		background: radial-gradient(circle, #ff1500, rgba(156, 0, 0, 1.0),rgba(129, 124, 123, 1.0));
		padding: 0.1rem 0 0.1rem 0;
		margin: -0.1rem 0.8rem -0.1rem 1rem;
	}
	.following a:hover{
		transition-duration: 1s;
		display: block;
		width: 150%;
		color: #ff0000;
		background: radial-gradient(circle, #f0f000, rgba(209, 209, 0, 1.0),rgba(150, 152, 0, 1.0));
	}
	hr{
		border: 1px solid white;
		width: 98%;
		box-shadow: 0 -100px 20px -6px rgba(0, 0, 0, 0.8), 
		0 12px 20px -12px rgba(0, 0, 0, 0.8);
	}
	a{
		text-decoration: none;
	}
</style>
<style lang="scss" >
	body{
		background: url(./assets/image/back2.gif) no-repeat center center;
		background-size:cover;  /* 让背景图基于容器大小伸缩 */
		background-attachment:fixed; 
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	nav {
		// position: absolute;
		// top: 0;
		// width: 100%;
		padding: 5px;
		display: flex;
		justify-content: space-around;
		-webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 
		5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
		-webkit-transform: translateX(-8px) translateY(-8px);
		
		box-shadow: 1px 1px #3e3e3e, 2px 2px #4b4b4b, 3px 3px #585858, 4px 4px #4b4b4b,
		5px 5px #5a5a5a, 6px 6px #9e9e9e, 7px 7px #3b3b3b, 8px 8px #ffffff;
		transform: translateX(-4px) translateY(-4px);
		border-left: 3px double rgb(132, 149, 140);
		border-top: 3px outset rgb(99, 112, 105);
		border-right: 5px outset rgb(150, 177, 176);
		border-bottom: 5px outset rgb(104, 117, 124);
		background: linear-gradient(135deg,
			#474745 0%,#757572 10%,  #686767 20%,#9d9c95 40%,
			#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
			#c6c5c5 75%,#ddddd7 100%
		);
		
	  a{
		font-weight: bolder;
		font-size: 1.2rem;
		font-family: FZYaoti;
		color: #d60000;
		text-decoration: none;
		&.router-link-exact-active {
			padding:0 20px 10px 20px;
			color: #e0ffff;
			font-family: STCaiyun;
			animation: text-pop-up-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
		}
		
		@keyframes text-pop-up-right {
		  0% {
			color: #ffffff;
			-webkit-transform: translateX(0);
					transform: translateX(0);
			-webkit-transform-origin: 50% 50%;
					transform-origin: 50% 50%;
			text-shadow: none;
		  }
		  100% {
			color: #ffffff;
			border-left: 5px double #15c5ff;
			border-right: 5px double #15c5ff;
			background-color: rgba(255, 255, 255, 0.1);
			border-radius: 50px;
			-webkit-transform: translateX(50px);
					transform: translateX(5px);
			-webkit-transform-origin: 20% 20%;
					transform-origin: 20% 20%;
			box-shadow: -20px 0 15px -8px rgba(224, 255, 255, 1.0), 20px 0 15px -8px rgba(194, 255, 253, 1.0);
			text-shadow: 0 1px 0 #424242, 0 2px 0 #424242, 0 3px 0 #424242, 0 4px 0 #424242,
			 0 5px 0 #505050, 0 6px 0 #5b5b5b, 0 7px 0 #5e5e5e, 0 8px 0 #666666, 0 9px 0 #767676, 0 30px 10px rgba(0, 0, 0, 1);
		  }
		}
		}
		a:hover{
			color: #111e4c;
		}
	}
</style>
