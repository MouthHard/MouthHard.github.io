<template>
  <div>
	  <div class="study_Sidebar">
		<h3>文章目录</h3>
		<h4 style="font-size: 1rem; color: red;margin-top: -0.8rem;">请注意：以下文章纯属博主个人的意见，如有冒犯，请多包涵</h4>
		<hr />
		<p @click="jump_subRoute('面经')" >❄ 前端面经——漫漫求职路</p>
		<p onclick="window.open('https://leetcode.cn/problemset/all/')">❄ 力扣刷题情况</p>
		<p onclick="window.open('https://blogwe.com/')">❄ 博客大全链接</p>
		<p @click="jump_subRoute('最大优先队列')">❄ 最大优先队列学习——力扣1046题最后一块石头的重量</p>
		<p @click="jump_subRoute('事件委托')">❄ 事件委托</p>
		<p @click="jump_subRoute('跨域')">❄ 关于用echarts时涉及的跨域问题</p>
	  </div>
	  
	  	<div class="center_Content" onclick="window.open('https://leetcode.cn/problemset/all/')" style="top: 3%;">
	  		<img src="../assets/image/leetcode.png" />
	  		<div class="content_text" >
	  			<a>目前战况————毕业后怒刷力扣题</a>
	  			<h6 >发布于 2022年06月30日</h6>
	  			<p>力扣每日打卡,今天又是忙碌的一天！</p>
	  		</div>
	  	</div>
	  	
	  	<div class="center_Content" onclick="window.open('https://blogwe.com/')" style="top: 33%;">
	  		<img src="../assets/image/blogwe.png" />
	  		<div class="content_text" >
	  			<a>博客大全——做最好的个人博客导航</a>
	  			<h6 >发布于 2022年07月06日</h6>
	  		<p>推荐一个很不错的博客大全网站</p>
	  		</div>
	  	</div>
		
		<div class="center_Content" @click="jump_interview_exp()"  style="top: 63%;">
			<img src="../assets/image/R-C.gif" />
			<div class="content_text" >
				<a>前端面经——漫漫求职路</a>
				<h6 >发布于 2022年07月06日</h6>
				<p>个人面经的整理和网上面经的整合</p>
			<!-- <router-link to="/study/interview_exp"><p>个人面经的整理和网上面经的整合</p></router-link> -->
			</div>
		</div>
		
		<div><router-view></router-view></div>
  </div>
</template>
<script>
	export default {
		data () {
			return {
			}
		},
		mounted() {	
		},
		methods: {
			jump_subRoute(target_route){
				//根据选择来跳不同子路由
				if(target_route ==='面经'){
					this.$router.push('/study/interview_exp')
				}else if(target_route ==='最大优先队列'){
					this.$router.push('/study/max_pq')
				}else if(target_route ==='事件委托'){
					this.$router.push('/study/event_delegation')
				}else if(target_route ==='跨域'){
					this.$router.push('/study/cross_domain')
				}
				
				//点击某个帖子之后，帖子在底部展示，然后窗口滑动条自动滑动到底部
				// this.$refs["sidebarL"].scrollIntoView(true); 
				setTimeout(()=>{
					window.scrollTo(0, document.documentElement.scrollHeight - document.documentElement.clientHeight);
				},100)
				
			},

		}
	}
</script>
<style scoped lang="scss">
	.study_Sidebar{
		position: absolute;
		top: 0;
		right: 0;
		width: 20%;
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
	.study_Sidebar p{
		font-size: 1rem;
		font-weight: bold;
		color: #FFFFFF;
		text-align: left;
		text-indent: 1rem;
	}
	.study_Sidebar p:hover{
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
	// .study_Sidebar p:hover::before{
	// 	opacity: 1;
	// }
	// .study_Sidebar p::before{
	// 	content: "";
	// 	opacity: 0;
	// 	position: absolute;
	// 	left: -16.8rem;
	// 	width: 0;
	// 	height: 3rem;
	// 	background-color: #FFFFFF;
	// 	animation: rexser 0.1s forwards, rexgun 3s infinite;
	// }
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
	
	.study_Sidebar h3{
		color: #FFFFFF;
	}
	.study_Sidebar hr{
		width: 96%;
	}
	.center_Content{
		position: absolute;
		left: 5%;
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
		border-radius: 50%;
		background: url(../assets/image/icon_167.gif) no-repeat;
		background-size: 100% 100%;
		width: 50%;
		height: 0;
		z-index: -1;
		background-color: #F0F2F5;
		transform: rotate(-90deg);
	}
	.center_Content::after{
		content: "";
		position: absolute;
		right: -28%;
		width: 50%;
		height: 0;
		border-radius: 50%;
		z-index: -1;
		transform: rotate(90deg);
		background: url(../assets/image/icon_167.gif) no-repeat;
		background-size: 100% 100%;	
	}
	
	.center_Content:hover::before{
		animation: widlong 0.5s forwards  cubic-bezier(.84,-0.93,.24,1.4);
	}
	.center_Content:hover::after{
		animation: widlong 0.5s forwards cubic-bezier(.84,-0.93,.24,1.4);
	}
	
	@keyframes widlong{
		0%{
			height: 0;
		}
		100%{
			height: 10rem;
		}
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
</style>

