<template>
		
		<!-- 主界面机关 -->
		<div @mouseenter="sound_play" @mouseleave="sound_stop" class="boxes">
			<div class="left_ITFace"> 
				<p class="leftA"></p>
				<p class="leftB"></p>
			</div>
			
			<div class="top_ITFace">
				<p class="topA"></p>
				<p class="topB"></p>
			</div>
			
			<h1></h1>   <!-- 左门-->
			<h2></h2>	<!-- 右门-->
			
			<!-- 左边三个框 -->
			<h3></h3>
			<h3 style="bottom: 17%;"></h3>
			<h3 style="bottom: 32%;"></h3>
			
			<!-- 右边三个框 -->
			<h4></h4>
			<h4 style="bottom: 16%;"></h4>
			<h4 style="bottom: 31%;"></h4>
			
			<div class="firstBuild">
				<img src="../assets/image/cv_soldier.jpg">
				<p>初次建站</p>
			</div>

		</div>

		<audio controls="controls" hidden ref="audio" >
			<source src="../assets/sound/homesound.wav"/>
		</audio>

		
		<!-- 免责声明 -->
		<div class="reportNote">这里是 破釜沉舟 的 避难所小屋
			<br>
			<font style="color: #dbe8ea;font-size: 0.9rem;">本站博主是个菜鸟，所有这个博客没有什么技术含量，大佬们就当看个乐子</font>
			<br>
			<br><font style="color: #b80000;font-size: 1.2rem;">本站涉及到的图片、文本或者文章资源均来自网络，侵权删</font>
		</div>
		
		<!-- 天气预告 -->
		<div class="rightNote">
			<iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tw&skin=yahoo" frameborder="1" 
			 height="490" allowtransparency="true"></iframe>
		</div>
	

</template>

<script>
const axios = require('axios');
export default {
	data() {
		return{
			weather:''
		}
	},
	mounted() {

	},
	methods:{
		sound_play(){
			this.playSound()
		},
		sound_stop(){
			this.$refs.audio.pause();
		},
		playSound() {
		  this.$refs.audio.currentTime = 0;//从头开始播放
		  this.$refs.audio.play(); //播放
		}
	}
}
</script>
<style scoped>
	.top_ITFace{
		opacity: 0;
	}
	.boxes:hover .top_ITFace{
		opacity: 1;
		transition-duration: 1s;
		transition-delay: 7s;
	}
	.topA{
		position: absolute;
		left: 18rem;
		top: -13rem;
		border: 2px solid #f8f8f8;
		width: 15rem;
		height: 10rem;
		background: url(../assets/image/ele_06.gif);
		background-size: 100% 100%;
		box-shadow: 0 0 30px 0 rgba(254, 255, 222, 1.0);
	}
	.topA::before{
		content: '';
		position: absolute;
		left: -32rem;
		top: 0;
		border: 2px solid #7e7e77;
		width: 15rem;
		height: 10rem;
		background: url(../assets/image/inter8.gif);
		background-size: 100% 100%;
		box-shadow: 0 0 30px 0 rgba(254, 255, 222, 1.0);
	}

	.topB{
		position: absolute;
		left: 18rem;
		top: 20rem;
		border: 2px solid #f3a418;
		width: 15rem;
		height: 10rem;
		background: url(../assets/image/tech3.png);
		background-size: 100% 100%;
	
		box-shadow: 0 0 30px 0 rgba(254, 255, 222, 1.0);
	}
	.topB::before{
		content: '';
		position: absolute;
		left: -32rem;
		top: 0;
		border: 2px solid #f3a418;
		width: 15rem;
		height: 10rem;
		background: url(../assets/image/tech5.png);
		background-size: 100% 100%;
		box-shadow: 0 0 30px 0 rgba(254, 255, 222, 1.0);
	}

	.boxes:first-child:hover .leftA{
		opacity: 0.8;
		transition-delay: 2s;
		transition-duration: 2s;
	}
	.boxes:first-child:hover .leftB{
		opacity: 1;
		transition-delay: 4s;
		transition-duration: 2s;
	}
	.boxes:first-child:hover .firstBuild img{
		transition-delay: 7s;
		transition-duration: 0.1s;
		transform: translateY(0) rotateX(0) scale(1);
		transform-origin: 50% -500px;
		opacity: 1;
	}
	.left_ITFace, .top_ITFace{
		position: relative;
		z-index: 10;
	}
	.leftA{
		position: absolute;
		left: -70%;
		top: -2rem;
		border: 2px solid #00aef8;
		width: 15rem;
		height: 10rem;
		border-radius:    50%  50%  50%  50%  / 10%   50%   5%  30%;
		background: url(../assets/image/icon_104.gif);
		background-size: 100% 100%;
		opacity: 0;
		box-shadow: 0 0 30px 0 rgba(254, 255, 222, 1.0);
	}
	.leftA::before{
		content: '';
		position: absolute;
		left: 60%;
		top:15rem;
		width: 10rem;
		height: 6rem;
		background: url(../assets/image/ele_07.gif);
		background-size: 100% 95%;
		box-shadow: -10px 0 30px 1px rgba(90, 120, 218, 1.0);
	}
	.leftA::after{
		content: '';
		position: absolute;
		left: -30%;
		top: 9rem;
		border: 4px double #f80000;
		width: 12rem;
		height: 10rem;
		background: url(../assets/image/CoverAB.png);
		background-size: cover;
		box-shadow: -10px 0 30px 1px rgba(252, 198, 255, 1.0);
		opacity: 0.7;
	}
	.leftB{
		position: absolute;
		right: -60%;
		top: 4rem;
		border: 2px solid #a673c6;
		border-radius:    50%  50%  50%  50%  / 70%   50%   5%  70%;
		width: 12rem;
		height: 7rem;
		background: url(../assets/image/polygon_05.gif);
		background-size: 100% 100%;
		opacity: 0;
		box-shadow: 0 0 30px 0 rgba(246, 119, 255, 1.0);
	}
	.leftB::before{
		content: '';
		position: absolute;
		right: 20%;
		top:6rem;
		border-radius: 3px;
		width: 12rem;
		height: 12rem;
		background: url(../assets/image/ele_20.gif);
		background-size: 100% 95%;
		box-shadow: -10px 0 25px 1px rgba(255, 246, 114, 0.8);
		opacity: 0.8;
	}
	.leftB::after{
		content: '';
		position: absolute;
		right: -30%;
		top: -5rem;
		border: 1px double #2c48f8;
		width: 7rem;
		height: 15rem;
		background: url(../assets/image/inter_04.gif);
		background-size: 120% 100%;
		box-shadow: 10px 0 25px 1px rgba(255, 255, 255, 1.0);
	}
	.reportNote, .rightNote{
		width: 28%;
		height: 18%;
		position: absolute;
		right: -2%;
		top: 1rem;
		border-top: #f8f8f8 ridge 0.2rem;
		border-right: #8d8d8d ridge 0.5rem;
		border-left: #868686 groove 0.5rem;
		border-bottom: #5e5e5e ridge 1rem ;	
		background: linear-gradient(180deg,
		#3a3a38 0%,#61615f 10%,  #737272 20%,#7f7e78 40%,
		#dddcdc 50%,#ececec 55%, #d4d4d4 56%,#9c9c9c 65%,
		#c6c5c5 75%,#ddddd7 100%
		);	
		color: #ffffff;
		font-size: 1.1rem;
		font-weight: bolder;
		font-family: FZYaoti;
		padding-top: 1rem;
		padding-bottom: 1rem;
		text-shadow: 0 1px #000000, 0 2px #000000, 0 3px #000000, 0 4px #000000;
		-webkit-transform: translateY(-4px);
		transform: translateY(-4px);
	}
	.rightNote{
		color: #FFFFFF;
		right: -2%;
		top: 27%;
		height: 67%;
		border-radius: 5%;
		background: radial-gradient(circle, rgba(255, 255, 250, 1.0) ,
				 rgba(216, 215, 209, 1.0),rgba(171, 171, 171, 1.0) 95%,transparent 100%); 
	}
	.firstBuild img{
		float: center;
		margin-top: 17%;
		width: 12rem;
		height: 9rem;
		border: 2px solid #000000;
		box-shadow: 0 0 30px 0 rgba(0, 0, 0, 1.0);
		border-top: #e5e5e5 ridge 0.1rem;
		border-right: #8d8d8d ridge 0.5rem;
		border-left: #868686 groove 0.5rem;
		border-bottom: #5e5e5e ridge 1rem ;	
		
		transform: translateY(-600px) rotateX(30deg) scale(6.5);
		transform-origin: 50% 200%;
		opacity: 0;
	}

	.firstBuild p{
		background-image: linear-gradient(to bottom, #000000,#373b44, #3d7ce1);
		color: #FFFFFF;
		font-weight: bolder;
		font-size: 1.2rem;
		border-top: #afafaf ridge 0.3rem;
		border-right: #898d8d ridge 0.3rem;
		border-left: #7f7f7d groove 0.3rem;
		border-bottom: #afafaf ridge 0.8rem ;	
	}
	.boxes{
		width: 26%;
		height: 40%;
		border-radius: 50%;
		position: absolute;
		left: 23.7%;
		top: 27%;
		border: 4px double #FFFFFF;
		background: radial-gradient(circle, rgba(65, 138, 255, 1.0) -24%,
		 rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
	}
	.boxes h3,.boxes h4{
		position: absolute;
		height: 10%; 
		width: 10%; 
		background: linear-gradient(-30deg,
		#474745 0%,#757572 10%,  #686767 20%,#9d9c95 40%,
		#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
		#c6c5c5 75%,#ddddd7 100%
		);	
		z-index: 7;
		border: 0.5rem solid;
		border-image-source: radial-gradient(circle, rgba(255, 255, 255, 1.0), rgba(150, 150, 150, 1.0),rgba(35, 35, 35, 1.0));
		border-image-slice: 0.5;
	}
	.boxes h3{
		left: 34%;
		bottom: 1%;
		background: linear-gradient(30deg,
		#474745 0%,#757572 10%,  #686767 20%,#9d9c95 40%,
		#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
		#c6c5c5 75%,#ddddd7 100%
		);	
	}
	.boxes h4{
		right: 35%;
		bottom: 0.5%;
	}
	.boxes:hover h3{	
		animation: shadow-pop-tr 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	}
	.boxes:hover h4{
		animation: shadow-pop-tr_H4 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	}
	.boxes::before, .boxes::after{
		content: "";
		position: absolute;
		width: 0;
		height: 3rem;
		background: linear-gradient(to top,
		#2c2c2a 0%,#8c8c8c 10%, #cecec9 11%,#ffffff 12%, #5f5f5f 20%,transparent 21%,transparent 25%,
		#2c2c2a 26%,#8c8c8c 36%, #cecec9 37%,#ffffff 38%, #5f5f5f 45%,transparent 46%,transparent 50%,
		#2c2c2a 51%,#8c8c8c 61%, #cecec9 62%,#ffffff 63%, #5f5f5f 70%,transparent 71%,transparent 75%,
		#2c2c2a 76%,#8c8c8c 86%, #cecec9 87%,#ffffff 88%, #5f5f5f 95%,transparent 96%,transparent 100%
		);
	}
	.boxes::before{
		left: 0.5rem;
		top: 37%;
		transform: rotate(30deg) skew(30deg);
	}
	.boxes::after{
		right: 0.5rem;
		top: 37%;
		transform: rotate(-30deg) skew(-30deg);
	}
	.boxes:hover::before{
		transition-duration: 2s;
		transition-delay: 8s;
		width: 3.2rem;
	}
	.boxes:hover::after{
		transition-duration: 2s;
		transition-delay: 8s;
		width: 3.2rem;
	}
	.boxes h1, .boxes h2{
		position: absolute;
		width:50%;
		height: 100%;
		margin: 0;
		top: 0;
		z-index: 6;
		border-top: #797979 ridge 0.2rem;
		border-right: #898d8d ridge 0.3rem;
		border-left: #7f7f7d groove 0.3rem;
		border-bottom: #aeb9b6 ridge 0.8rem ;
	}
	.boxes h1{
		left: -2%;	
		background: linear-gradient(20deg,transparent 25px,
		#474745 2%,#757572 12%,  #686767 20%,#9d9c95 40%,
		#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
		#c6c5c5 75%,#ddddd7 97%,transparent 15px
		);
		box-shadow: 12px 0 20px -12px rgba(255, 255, 255, 1.0);
	}
	.boxes h2{
		right: -2%;
		background: linear-gradient(-20deg,transparent 25px,
		#474745 2%,#757572 10%,  #686767 20%,#9d9c95 40%,
		#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
		#c6c5c5 75%,#ddddd7 97%,transparent 15px
		);
		box-shadow: -12px 0 20px -12px rgba(255, 255, 255, 1.0);
	}
	.boxes:hover h1{
		transition-duration: 0.8s;
		left: -50%;
		
	}
	.boxes:hover h2{
		transition-duration: 0.8s;
		right: -50%;
	}
	.boxes h1::before,.boxes h2::before{
		content: "";
		position: absolute;
		width: 10rem;
		height: 2rem;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1.0);
		background: linear-gradient(0deg,transparent 10px,
		#474745 5%,#757572 10%,  #686767 20%,#9d9c95 40%,
		#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
		#c6c5c5 75%,#ddddd7 95%,transparent 10px
		);
		border-bottom: #869999 groove 0.5rem;
		border-right: #7d8182 ridge 0.5rem;
		border-left: #7d8182 groove 0.5rem;
		border-top: #938f8b ridge 1rem ;
	}
	.boxes h1::before{
		left: -10%;
		top: 20%;
		transform: rotate(-90deg);
	}
	.boxes h2::before{
		right: -9%;
		top: 20%;
		transform: rotate(90deg);
	}
	.boxes:hover h1::before{
		animation:  anime_H1_before 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) forwards;
	}
	.boxes:hover h2::before{
		animation:  anime_H2_before 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) forwards;
	}
	.boxes h1::after, .boxes h2::after{
		content: "";
		position: absolute;
		width: 1rem;
		height: 10rem;
		border-radius: 0.2rem;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1.0),
		 0 -30px 5px -1px rgba(185, 255, 245, 0.7), 
		 0 30px 5px -1px rgba(255, 255, 255, 0.7);
		background: linear-gradient(90deg,
		#262625 0%,#565654 10%,  #686767 20%,#9d9c95 40%,
		#a1a0a0 50%,#a1a098 55%, #bab9b9 56%,#6b6a65 65%,
		#638e9d 75%,#ddddd7 100%
		);
		border-top: #245e83 ridge 0.5rem;
		border-bottom: #ffffff ridge 0.4rem;
		border-right: #666c6c groove 0.8rem;
		border-left: #858e8f groove 0.5rem;
		z-index: 5;
	}
	.boxes h1::after{
		transform: rotate(-90deg);
		left: 25%;
		bottom: -30%;
		background: linear-gradient(-90deg,
		#262625 0%,#565654 10%,  #686767 20%,#9d9c95 40%,
		#a1a0a0 50%,#a1a098 55%, #bab9b9 56%,#6b6a65 65%,
		#638e9d 75%,#ddddd7 100%
		);
		border-left: #666c6c groove 0.8rem;
		border-right: #858e8f groove 0.5rem;
	}
	.boxes h2::after{
		bottom: -30%;
		transform: rotate(90deg) ;
	}
	.boxes:hover h1::after{
		animation:  anime_H1_after 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) forwards;
	}
	.boxes:hover h2::after{
		animation:  anime_H2_after 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) forwards;
	}
	.boxes:hover{
		animation: power 1.5s infinite;
	}
	@keyframes shadow-pop-tr{
		  0% {
			left: 34%;
		  }
		  50%{
			  bottom: -20%;
			  transform: scale(1.5);
		  }
		  100% {
			-webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 
			5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
			-webkit-transform: translateX(-8px) translateY(8px);
			
			left: -48%;
			box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #c3c3c3, 4px -4px #3e3e3e, 
				5px -5px #3e3e3e, 6px -6px #d8d8d8, 7px -7px #3e3e3e, 8px -8px #3e3e3e,
				0 0 20px 0px rgba(0, 0, 0, 0.8);
			transform: translateX(-8px) translateY(8px) rotate(30deg) skew(30deg);
			background: linear-gradient(30deg,transparent 15px,
			#474745 5%,#757572 10%,  #686767 20%,#9d9c95 40%,
			#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
			#c6c5c5 75%,#ddddd7 90%,transparent 15px
			);	
		  }
	}
	@keyframes shadow-pop-tr_H4{
		  0% {
			right: 34%;
		  }
		  50%{
		  	bottom: -20%;
		  	transform: scale(1.5);
		  }
		  100% {	
			-webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, 
			-5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e;
			-webkit-transform: translateX(8px) translateY(8px);
			
			right: -48%;
			box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #c3c3c3, -4px -4px #3e3e3e, 
				-5px -5px #3e3e3e, -6px -6px #d8d8d8, -7px -7px #3e3e3e, -8px -8px #3e3e3e,
				0 0 20px 0px rgba(0, 0, 0, 0.8);
			transform: translateX(8px) translateY(8px) rotate(-30deg) skew(-30deg);
			background: linear-gradient(-30deg,transparent 15px,
			#474745 5%,#757572 10%,  #686767 20%,#9d9c95 40%,
			#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
			#c6c5c5 75%,#ddddd7 90%,transparent 15px
			);	
		  }
	}
	@keyframes anime_H1_before{
		80%{
			transform:  rotate(-360deg);
			transform-origin: 100% 0%;
		}
		100%{
			left: -20%;
			top: -5%;
			transform: skew(30deg);
			
		}
	}
	@keyframes anime_H2_before{
		80%{
			transform:  rotate(360deg);
			transform-origin: 0% 100%;
		}
		100%{
			right: -20%;
			top: -5%;
			transform: skew(-30deg);
		}
	}
	@keyframes anime_H1_after{
		0%{
			left: 25%;
			bottom: -30%;
			transform: rotate(-360deg) scale(1.5);
			box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1.0);
		}
		35%{
			transform: rotate(-60deg) scale(1.2);
			transform-origin: 0% 0%;
		}
		100%{
			left: 30%;
			bottom: 25%;		
			transform: rotate(-30deg) skew(30deg);
			box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1.0),
			 0 30px 5px -1px rgba(38, 86, 125, 0.7),
			 0 -30px 5px -1px rgba(255, 255, 255, 0.7);
		}
	}
	@keyframes anime_H2_after{
		0%{
			right: 0;
			bottom: -30%;
			transform: rotate(360deg) scale(1.5);
			box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1.0);
		}
		35%{
			transform: rotate(60deg) scale(1.2);
			transform-origin: 0% 0%;
		}
		100%{
			right: 30%;
			bottom: 25%;
			transform: rotate(30deg) skew(-30deg);
			box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1.0),
			 0 30px 5px -1px rgba(38, 86, 125, 0.7),
			 0 -30px 5px -1px rgba(255, 255, 255, 0.7);
		}
	}
	@keyframes power{
		5%{
			background: radial-gradient(circle, rgba(147, 212, 255, 1.0) -26%, 
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		10%{
			background: radial-gradient(circle, rgba(48, 193, 255, 1.0) -24%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		15%{
			background: radial-gradient(circle, rgba(97, 208, 255, 1.0) -22%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		20%{
			background: radial-gradient(circle, rgba(21, 164, 225, 1.0) -20%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		25%{
			background: radial-gradient(circle, rgba(16, 173, 220, 1.0) -18%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		30%{
			background: radial-gradient(circle, rgba(20, 125, 217, 1.0) -16%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		35%{
			background: radial-gradient(circle, rgba(32, 175, 252, 1.0) -14%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		45%{
			background: radial-gradient(circle, rgba(14, 147, 184, 1.0) -12%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		50%{
			background: radial-gradient(circle, rgba(26, 124, 185, 1.0) -10%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		55%{
			background: radial-gradient(circle, rgba(19, 55, 112, 1.0) -8%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		60%{
			background: radial-gradient(circle, rgba(76, 118, 255, 1.0) -10%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}	
		65%{
			background: radial-gradient(circle, rgba(71, 108, 188, 1.0) -12%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		70%{
			background: radial-gradient(circle, rgba(54, 110, 159, 1.0) -14%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		75%{
			background: radial-gradient(circle, rgba(40, 95, 184, 1.0) -16%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		80%{
			background: radial-gradient(circle, rgba(130, 191, 255, 1.0) -18%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		85%{
			background: radial-gradient(circle, rgba(41, 146, 202, 1.0) -20%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		90%{
			background: radial-gradient(circle, rgba(45, 177, 217, 1.0) -22%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		95%{
			background: radial-gradient(circle, rgba(146, 232, 255, 1.0) -24%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
		100%{
			background: radial-gradient(circle, rgba(164, 236, 255, 1.0) -26%,
			rgba(88, 88, 88, 1.0),rgba(255, 255, 255, 1.0) 90%,transparent 100%);
		}
	}
</style>
