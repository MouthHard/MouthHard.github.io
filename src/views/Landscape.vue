<template>
	<div class="landscape_cont" >
		
		<div class="pic_cont" v-for="(img_url, index) in img_src" :key="index" v-show="index === curIdx">
			<button @mouseenter="pre_mouseIn" @mouseleave="pre_mouseOut" class="pre_btn" @click="pre_photo(index)" href="#">
				{{pre_text}}
			</button>
			<img  @mouseenter="stop_play" @mouseleave="restart_play" :src="img_url.url" alt="这是轮播图" />	
			<button @mouseenter="next_mouseIn" @mouseleave="next_mouseOut" class="next_btn" @click="next_photo(index)"  href="#">
				{{next_text}}
			</button>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			img_src: [
				{ url: require("../assets/image/carouse/21.png") },
				{ url: require("../assets/image/carouse/45.png") },
				{ url: require("../assets/image/carouse/56.png") },
				{ url: require("../assets/image/carouse/37.png") },
				{ url: require("../assets/image/carouse/62.png") },
				{ url: require("../assets/image/carouse/73.png") },
				{ url: require("../assets/image/carouse/18.png") },
				{ url: require("../assets/image/carouse/81.png") },
				{ url: require("../assets/image/carouse/9.png") },
				{ url: require("../assets/image/carouse/1.png") },
				{ url: require("../assets/image/carouse/13.png") },
				{ url: require("../assets/image/carouse/47.png") },
				{ url: require("../assets/image/carouse/58.png") },
				{ url: require("../assets/image/carouse/31.png") }
			],
			curIdx: 0,//记录当前图片位置
			timer:'',//设置定时器
			pre_text:'上一张',
			next_text:'下一张'
		};
	},

	mounted(){
	// this.carouseChange()	
		this.restart_play();
	},
	beforeDestroy() {
		this.stop_play();//及时销毁定时器
	},
	methods:{
		// 轮播图当前下标自增
		recycle(){
		    if (this.curIdx === this.img_src.length - 1) {
		        this.curIdx = 0;
		    }else{
				this.curIdx++; 
			}
			 
		},
		//关闭定时器
		stop_play(){
		    clearInterval(this.timer);
		},
		//重启定时器
		restart_play() {
		    this.recycle();//先调用一次
		    this.timer=setInterval(() =>{
				this.recycle()
				// console.log('开始计时');
			}, 3000);
		},
		//下一张图片，更新当前下标
		next_photo(index) {
		    if (index < this.img_src.length - 1) {
				this.curIdx = index + 1;
		    }
		},
		//上一张图片
		pre_photo(index) {
		    if (index > 0) {
				this.curIdx = index - 1;
		    }
		},
		//图片上一张下一张按钮文字消失重现
		pre_mouseIn(){
			this.pre_text =''
			
		},
		pre_mouseOut(){
			this.pre_text = '上一张'
			
		},
		next_mouseIn(){
			this.next_text = ''
			
		},
		next_mouseOut(){
			this.next_text = '下一张'
			
		},
	}
};
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	img{
		width: 80%;
		height: 84%;	
		box-shadow: 0 0 20px 5px rgba(0,0,0,0.8);
		animation: borderRexer 1s forwards;
	}
	@keyframes borderRexer{
		0%{
			border: 8px solid;
			border-image: linear-gradient(to top, #000000,#7ab8cb,#b8b7ca,#e8e8e8,#000000);
			border-image-slice: 1;
		}
		20%{
			border: 7px solid;
			border-image: linear-gradient(to top, #6a6a6a,#afafaf,#ffffff,#afafaf,#6a6a6a);
			border-image-slice: 1;
		}
		40%{
			border: 7px solid;
			border-image: linear-gradient(to top, #a5a5a5,#8f8f8f,#233554,#8f8f8f,#a5a5a5);
			border-image-slice: 1;
		}
		60%{
			border: 7px solid;
			border-image: linear-gradient(to top, #f4f4f4,#e4e4e5,#9cacb1,#e4e5e5,#f4f4f4);
			border-image-slice: 1;
		}
		80%{
			border: 7px solid;
			border-image: linear-gradient(to top, #ffffff,#6a6a6a,#000000,#6a6a6a,#ffffff);
			border-image-slice: 1;
		}
		100%{
			border: 7px solid;
			border-image: linear-gradient(to top, #000000,#cbcbcb,#cbcbcb,#000000);
			border-image-slice: 1;
		}
	}
	.landscape_cont{
		position: relative;
		background: linear-gradient(to right,
		#2c2c2a 0%,#8c8c8c 1%, #cecec9 2%,#ffffff 3%, #3e3e3e 6%,#e6e6e6 7%,
		#acacac 20%,#71706c 40%,#b4b4b4 40%,
		#efeeee 50%,#fffef1 51%, #ebeaea 52%,
		#acacac 62%,#71706c 62%,#bcbbb3 80%,
		#e6e6e6 93%,#363636 94%,#ffffff 95%, #cecec9 96%,#8c8c8c 99%, #2c2c2a 100%
		);	
		border-left: 6px ridge #2a2a2a;
		border-right: 6px groove #2a2a2a;
		border-bottom: 6px outset #d0d2d4;
		height: 100%;
		width: 100%;
	}
	.landscape_cont::before,.landscape_cont::after{
		content: "本模块的图片皆为博主觉得好看从B站搜来的，侵权删。";
		position: absolute;
		height: 20%;
		width: 8%;
		left: 3%;
		border-top: #343434 ridge 0.2rem;
		border-right: #cacaca ridge 0.5rem;
		border-left: #cacaca groove 0.5rem;
		border-bottom: #5e5e5e ridge 1rem ;	
		background: linear-gradient(180deg,
			#3a3a38 0%,#61615f 10%,  #adacac 20%,#b0afa6 40%,
			#dddcdc 50%,#ececec 55%, #bdbdbd 56%,#9c9c9c 65%,
			#9d9d9a 75%,#3a3a38 100%
		);	
		color: #830000;
		font-size: 1rem;
		font-weight: bolder;
		box-shadow: 0 0 20px 0 rgba(0,0,0,1);
		padding: 0.5rem;
		
	}
	.landscape_cont::after{
		content: "各位觉得还不错可以去关注这些摄影大佬(右上角水印有摄影UP的名字)";
		left: 86%;
		top: 0;
		border-top: #343434 ridge 0.2rem;
		border-right: #cacaca ridge 0.5rem;
		border-left: #cacaca groove 0.5rem;
		border-bottom: #5e5e5e ridge 1rem ;	
		color: #000000;
	}
	.pic_cont{
		width: 87%;
		height: 80%;
		margin: 0 auto;
		background: linear-gradient(to top,
		#2c2c2a 0%,#8c8c8c 6%, #cecec9 7%,#ffffff 7%, #5f5f5f 17%,
		#2c2c2a 17%,#8c8c8c 22%, #cecec9 23%,#ffffff 23%, #5f5f5f 33%,
		#2c2c2a 34%,#8c8c8c 39%, #cecec9 40%,#ffffff 40%, #5f5f5f 50%,
		#2c2c2a 51%,#8c8c8c 56%, #cecec9 57%,#ffffff 57%, #5f5f5f 68%,
		#2c2c2a 68%,#8c8c8c 73%, #cecec9 74%,#ffffff 74%, #5f5f5f 86%,
		#2c2c2a 87%,#8c8c8c 93%, #cecec9 94%,#ffffff 94%, #5f5f5f 100%
		);
		border: 4px solid;
		border-image: linear-gradient(to top, #ffffff,#94d0f4,#8085ca,#2e346f);
		border-image-slice: 1;
	}
	.pic_cont::before{
		content: "";
		position: absolute;
		height: 30%;
		width: 5%;
		left: 20%;
		bottom: 0;
		border-left: 0.5rem groove #6d6d6d;
		border-right: 0.5rem ridge #5b5b5b;
		box-shadow: 0 -10px 30px -6px rgba(255, 255, 255, 1.0),
		  0 10px 30px -6px rgba(255, 255, 255, 1.0);
		animation: tvRexer 1s infinite;
		border-top: 0.1rem solid #000000;
	}
	@keyframes tvRexer{
		0%{
		  background: linear-gradient(to top,
		  #ffffff 0%,#ffffff 15%,#000000 16%,
		  #ffffff 17%,#ffffff 35%,
		  #ffffff 36%,#ffffff 55%,
		  #ffffff 56%,#ffffff 75%,
		  #ffffff 76%,#ffffff 100%
		  );
		}
		20%{
		  background: linear-gradient(to top,
		  #ffffff 0%,#ffffff 15%,
		  #ffffff 16%,#ffffff 36%,#000000 38%,#000000 39%,
		  #ffffff 40%,#ffffff 55%,
		  #ffffff 56%,#ffffff 75%,
		  #ffffff 76%,#ffffff 100%
		  );
		}
		40%{
		  background: linear-gradient(to top,
		  #ffffff 0%,#ffffff 15%,
		  #ffffff 16%,#ffffff 35%,
		  #ffffff 36%,#ffffff 54%,#000000 57%,#000000 59%,
		  #ffffff 60%,#ffffff 75%,
		  #ffffff 76%,#ffffff 100%
		  );
		}
		60%{
		  background: linear-gradient(to top,
		  #ffffff 0%,#ffffff 15%,
		  #ffffff 16%,#ffffff 35%,
		  #ffffff 36%,#ffffff 66%,#000000 70%,#000000 73%,
		  #ffffff 74%,#ffffff 75%,
		  #ffffff 80%,#ffffff 100%
		  );
		}
		80%{
		  background: linear-gradient(to top,
		  #ffffff 0%,#ffffff 15%,
		  #ffffff 16%,#ffffff 35%,
		  #ffffff 36%,#ffffff 55%,
		  #ffffff 56%,#ffffff 81%,#000000 86%,#000000 90%,
		  #ffffff 91%,#ffffff 100%
		  );
		}
		90%{
		  background: linear-gradient(to top,
		  #ffffff 0%,#ffffff 15%,
		  #ffffff 16%,#ffffff 35%,
		  #ffffff 36%,#ffffff 55%,
		  #ffffff 56%,#ffffff 75%,
		  #ffffff 89%,
		  #000000 95%,#000000 100%
		  );
		}
		100%{
		  background: linear-gradient(to top,
		  #ffffff 0%,#ffffff 15%,#000000 16%,
		  #ffffff 16%,#ffffff 35%,
		  #ffffff 36%,#ffffff 55%,
		  #ffffff 56%,#ffffff 75%,
		  #ffffff 76%,#ffffff 100%
		  );
		}
	}
	.pic_cont::after{
		content: "";
		position: absolute;
		height: 30%;
		width: 5%;
		right: 20%;
		bottom: 0;
		background: linear-gradient(to left,
		#30302e 0%,#676764 20%,  #939292 5%,#bdbcb4 40%,
		#efeeee 30%,#fffef1 53%, #ebeaea 44%,#acaba3 59%,
		#bdbcb4 54%,#939292 80%,  #676764 74%,#30302e 100%
		);	
		border-left: 0.5rem groove #8c8c8c;
		border-right: 0.5rem ridge #6b6b6b;
		border-top: 0.1rem solid #000000;
		box-shadow: 0 -10px 30px -6px rgba(0, 0, 0, 1.0),
		  0 10px 30px -6px rgba(0, 0, 0, 1.0);
	}
	.pre_btn,.next_btn{
		width: 8%;	
		height: 10%;
		color: #FFFFFF;
		background-color: #000000;
		border: 3px solid;
		border-image: linear-gradient(to bottom, #747474, #e8eaef) 1;
		box-shadow: 5px 0 20px 5px rgba(0,0,0,0.8);
		font-size: 1.3rem;
		font-weight: bold;
	}
	.next_btn{
		box-shadow: -5px 0 20px 5px rgba(0,0,0,0.8);
	}
	.pre_btn:hover{
		background: url(../assets/image/arrow_01.gif);
		transform: rotate(180deg);
		background-size: 100% 100%;
	}
	.next_btn:hover{
		background: url(../assets/image/arrow_01.gif);
		background-size: 100% 100%;
		
	}

</style>
