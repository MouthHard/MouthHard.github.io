<template>
  <div>
	  <div class="study_Sidebar">
		<h3>文章目录</h3>
		<h4 style="font-size: 1rem; color: red;margin-top: -0.8rem;">请注意：以下文章纯属博主个人的意见，如有冒犯，请多包涵</h4>
		<hr />
		<!-- 由于最后router-link会被vue解析为 a链接标签，所以写样式要注意是给a标签加样式，否则加不上 -->
		<template v-for="subR in subRouteArr" :key="subR.id">
			<router-link :to="subR.address" @click="jump_subRoute()">{{subR.title}}</router-link>
		</template>	

		<a href="https://leetcode.cn/problemset/all/" target="_blank">❄ 力扣刷题情况</a>
		<a href="https://blogwe.com/" target="_blank">❄ 博客大全链接</a>
		<a href="https://www.autopiano.cn/" target="_blank">❄ 自由钢琴web端(强烈推荐！)</a>
		<audio hidden ref="test" >
			<source src="../assets/sound/two.mp3"/>
		</audio>
	  </div>
		
		<audio hidden ref="study" >
			<source src="../assets/sound/studySound.wav"/>
		</audio>
	  	<div class="center_Content" @mouseenter="studySound_play" @mouseleave="this.$refs.study.pause()" onclick="window.open('https://leetcode.cn/problemset/all/')" style="top: 3%;">
	  		<img src="../assets/image/leetcode.png" />
	  		<div class="content_text" >
	  			<a>目前战况————毕业后怒刷力扣题</a>
	  			<h6 >发布于 2022年06月30日</h6>
	  			<p>力扣每日打卡,今天又是忙碌的一天！</p>
	  		</div>
	  	</div>
	  	
	  	<div class="center_Content" @mouseenter="studySound_play" @mouseleave="this.$refs.study.pause()"  onclick="window.open('https://blogwe.com/')" style="top: 33%;">
	  		<img src="../assets/image/blogwe.png" />
	  		<div class="content_text" >
	  			<a>博客大全——做最好的个人博客导航</a>
	  			<h6 >发布于 2022年07月06日</h6>
				<p>推荐一个很不错的博客大全网站</p>
	  		</div>
	  	</div>
		
		<div class="center_Content" @mouseenter="studySound_play" @mouseleave="this.$refs.study.pause()" @click="jump_ITV"  style="top: 63%;">
			<img src="../assets/image/R-C.gif" />
			<div class="content_text" >
				<a>前端面经——漫漫求职路</a>
				<h6 >发布于 2022年07月06日</h6>
				<p>个人面经的整理和网上面经的整合</p>
			</div>
		</div>
		
		<div class="study_text"><router-view/></div>
  </div>
</template>
<script>
	import emitter from '../assets/js/event.js'
	export default {
		data () {
			return {
				studyNotes:0,
				subRouteArr:[
					{id:'001', title:'❄ 前端面经——漫漫求职路', address:'/study/interview_exp'},
					{id:'002', title:'❄ 细说一个月建站然后托管github的过程', address:'/study/build_site'},
					{id:'003', title:'❄ 最大优先队列学习——力扣1046题最后一块石头的重量', address:'/study/max_pq'},
					{id:'004', title:'❄ 事件委托', address:'/study/event_delegation'},
					{id:'005', title:'❄ 关于用echarts时涉及的跨域问题', address:'/study/cross_domain'},
				]
			}
		},
		mounted() {	
			// console.log(this.$route)
			this.studyNotes = document.querySelector('.study_Sidebar').getElementsByTagName('a') 
			emitter.emit('noteLength', this.studyNotes.length)
		},
		beforeUnmount() {
			emitter.all.delete('noteLength')
		},
		methods: {		
			jump_ITV(){
				this.$router.push('/study/interview_exp')
				this.jump_subRoute()
			},
			studySound_play(){
				this.$refs.study.currentTime = 0;//从头开始播放
				this.$refs.study.play(); 
			},
			jump_subRoute(){
				this.$refs.test.currentTime = 0;//从头开始播放
				this.$refs.test.play(); 
				//点击某个帖子之后，帖子在底部展示，然后窗口滑动条自动滑动到底部再返回头部
				setTimeout(()=>{
					window.scrollTo({
						top:document.documentElement.scrollHeight - document.documentElement.clientHeight,
						behavior:'smooth'
					});
				},500)
				setTimeout(()=>{
					window.scrollTo({
						top:1550,
						behavior:'smooth'
					});
				},1500)
				
			},

		}
	}
</script>
<style scoped lang="scss">
	.study_Sidebar{
		position: absolute;
		top: 0;
		right: -1%;
		width: 19%;
		height: 100%;
		box-shadow: 1px 1px #3e3e3e, 2px 2px #4b4b4b, 3px 3px #585858, 4px 4px #4b4b4b,
		5px 5px #5a5a5a, 6px 6px #9e9e9e, 7px 7px #3b3b3b, 8px 8px #ffffff;
		transform: translateX(-4px) translateY(-4px);
		border-left: 3px double rgb(132, 149, 140);
		border-top: 3px outset rgb(99, 112, 105);
		border-right: 5px outset rgb(150, 177, 176);
		border-bottom: 5px outset rgb(104, 117, 124);
		background: radial-gradient(circle, #b0b0b0, rgba(130, 132, 130, 1.0),rgba(75, 75, 77, 1.0));
		display: flex;
		flex-direction: column;
	}
	.study_Sidebar a{
		margin: 1rem 0 ;
		font-size: 1rem;
		font-weight: bold;
		color: #FFFFFF;
		text-align: left;
		text-indent: 1rem;
	}
	.study_Sidebar a:hover{
		text-decoration: underline;
		transition: 0.5s;
		color: #000000;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1);
		font-weight: 1000;
		// text-shadow: -1px 1px #000000, -2px 2px #000000, -3px 3px #000000, -4px 4px #000000,
		// 	-5px 5px #ebebeb;
		border-right: #b6b6b6 ridge 0.4rem;
		border-left: #b6b6b6 groove 0.4rem;
		border-top: #000000 solid 0.1rem;
		border-bottom: #828282 ridge 1rem ;
		background: linear-gradient(to bottom,
		#7a7a7a 0%,#9a9a9a 20%,  #aaaaaa 30%,#e6e6e6 40%,
		#ffffff 70%,#f3f3f3 75%, #ebebeb 76%,#cbcbcb 99%,
		#ffffff 100%);
	}	
	.study_Sidebar h3{
		color: #FFFFFF;
	}
	.study_Sidebar hr{
		width: 96%;
	}
	.center_Content{
		position: absolute;
		left: 12%;
		width: 50%;
		height: 25%;
		border-radius: 1rem;
		background: radial-gradient(circle, #b0b0b0, rgba(130, 132, 130, 1.0),rgba(75, 75, 77, 1.0));
		border: 0.5rem double #13293a;
		box-shadow: 0 0 20px 0px rgba(22, 22, 22, 1.0);
		display: flex;	
	}
	.center_Content:hover{
		box-shadow: 0 0 20px 0px rgba(255, 255, 255, 1);
	}	
	.center_Content::before{
		content: "";
		position: absolute;
		left: -28%;
		top: 6%;
		border: 1px solid #ffffff;
		background: url(../assets/image/arrow_12.gif) no-repeat;
		width: 32%;
		height: 10rem;
		z-index: -1;
		background-size: 100% 100%;
		background-color: #F0F2F5;
		opacity: 0;
	}
	.center_Content::after{
		content: "";
		position: absolute;
		right: -28%;
		top: 6%;
		border: 1px solid #ffffff;
		background: url(../assets/image/arrow_12.gif) no-repeat;
		width: 32%;
		height: 10rem;
		z-index: -1;
		background-size: 100% 100%;
		background-color: #F0F2F5;
		transform: rotate(180deg);
		opacity: 0;
	}
	
	.center_Content:hover::before{
		opacity: 1;
		transition-duration: 1s;
		box-shadow: inset 0 0 20px 0px rgba(255, 255, 255, 1);
	}
	.center_Content:hover::after{
		opacity: 1;
		transition-duration: 1s;
		box-shadow: inset 0 0 20px 0px rgba(255, 255, 255, 1);
	}
	.center_Content h6{
		font-size: 0.5vw;
		color: #002d41;
		text-align: left;
	}
	.center_Content img{
		width: 40%;
		border-radius: 1rem;
		box-shadow: 0 0 20px 0px rgba(0, 0, 0, 1.0);
		flex: 0 0 40%;
	}
	.center_Content img:hover{
		transform: scale(0.8);
		transition-duration: 2s;
	}
	.content_text{
		display: flex;
		flex-direction: column;
		margin-left: 3%;
	}
	.content_text a{
		text-align: left;
		font-weight: bolder;
		font-size: 1.3vw;
		margin-top: 1rem;
		color: #132142;
	}
	.content_text a:hover{
		text-decoration: underline;
		color: #ffffff;
		background-color: #000000;
		box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.8);
	}
	.content_text p{
		text-align: left;
		font-size: 0.9vw;
		font-weight: 600;
		color: #ffffff;
	}
	a{
		text-decoration: none;
		color: black;
	}
	@keyframes rexser{
	  100% {
	    width: 16.5rem;
	    box-shadow: 0 -10px 30px -6px rgba(255, 255, 255, 1.0),
	      0 10px 30px -6px rgba(255, 255, 255, 1.0);
	  }
	}
	@keyframes rexgun{
	  25%{
	    background: linear-gradient(to right,
	    #ffffff 0%,#ffffff 15%,#ff0000 16%,
	    #ffffff 16%,#ffffff 35%,
	    #ffffff 36%,#ffffff 55%,
	    #ffffff 56%,#ffffff 75%,
	    #ffffff 76%,#ffffff 100%
	    );
	  }
	  50%{
	    background: linear-gradient(to right,
	    #ffffff 0%,#ffffff 15%,
	    #ffffff 16%,#ffffff 35%,#ff0000 36%,
	    #ffffff 36%,#ffffff 55%,
	    #ffffff 56%,#ffffff 75%,
	    #ffffff 76%,#ffffff 100%
	    );
	  }
	  75%{
	    background: linear-gradient(to right,
	    #ffffff 0%,#ffffff 15%,
	    #ffffff 16%,#ffffff 35%,
	    #ffffff 36%,#ffffff 55%,#ff0000 56%,
	    #ffffff 56%,#ffffff 75%,
	    #ffffff 76%,#ffffff 100%
	    );
	  }
	  100%{
	    background: linear-gradient(to right,
	    #ffffff 0%,#ffffff 15%,
	    #ffffff 16%,#ffffff 35%,
	    #ffffff 36%,#ffffff 55%,
	    #ffffff 56%,#ffffff 75%,#ff0000 76%,
	    #ffffff 76%,#ffffff 100%
	    );
	  }
	}

</style>

