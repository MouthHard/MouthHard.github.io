<template>
	<div class="life_cont">
		<div class="dl">
			<img style="border-left: 4px double #a8a8a8;" src="../assets/image/DL.png"/>
			<span>
				<br />
				转载分享
				<h6>发布于2022年08月15日</h6>
				<p><a href="https://www.bilibili.com/video/BV1Yg411y7iq?share_source=copy_web">印度百年外交战略演化：如何以“中国”之名，扩大南亚霸权？</a></p>
				
			</span>
			<img style="border-right: 4px double #c2c2c2;" src="../assets/image/DL2.png"/>
		</div>
		
		<div class="breaker">
			<img style="border-left: 4px double #b4842b;" src="../assets/image/laura.png"/>
			<span>
				<br />
				日常
				<h6>发布于2022年07月08日</h6>
				<p>投简历</p>
			</span>
			<img style="border-right: 4px double #31160c;" src="../assets/image/drake.png"/>
		</div>
		
		<div class="dmc">
			<img style="border-left: 4px double #3c6199;" src="../assets/image/virgil.png"/>
			<span>
				<br />
				日常
				<h6>发布于2022年07月07日</h6>
				<p>没活，想咬打火机</p>
			</span>
			<img style="border-right: 4px double #a64040;" src="../assets/image/dante.png"/>
		</div>

		<div class="witcher">
			<img style="border-left: 4px double #b4842b;" src="../assets/image/ciri.png"/>
			<span>
				<br />
				日常
				<h6>发布于2022年07月06日</h6>
				<p>博客搭建</p>
			</span>
			<img style="border-right: 4px double #31160c;" src="../assets/image/geralt.png"/>
		</div>
	</div>
	
</template>

<script>
</script>

<style scoped>
	a{
		text-decoration: none;
	}
	.life_cont{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		border: 4px ridge #bdbdbd;
		background: linear-gradient(to right,
		#2c2c2a 0%,#8c8c8c 6%, #cecec9 7%,#ffffff 8%, #5f5f5f 13%,transparent 14%,transparent 17%,
		#2c2c2a 17%,#8c8c8c 22%, #cecec9 23%,#ffffff 24%, #5f5f5f 29%,transparent 30%,transparent 33%,
		#2c2c2a 34%,#8c8c8c 39%, #cecec9 40%,#ffffff 41%, #5f5f5f 46%,transparent 47%,transparent 50%,
		#2c2c2a 51%,#8c8c8c 56%, #cecec9 57%,#ffffff 58%, #5f5f5f 63%,transparent 64%,transparent 67%,
		#2c2c2a 68%,#8c8c8c 73%, #cecec9 74%,#ffffff 75%, #5f5f5f 80%,transparent 81%,transparent 84%,
		#2c2c2a 87%,#8c8c8c 93%, #cecec9 94%,#ffffff 95%, #5f5f5f 100%
		);
	}
	span{
		background-color: rgba(255, 255, 255, 1);
		box-shadow: -15px 0 20px -5px rgba(0, 0, 0, 0.8), 15px 0 20px -5px rgba(0, 0, 0, 0.8),
		inset 0 0 2rem 0px rgba(0, 0, 0, 1.0);
		border-left: 0.8rem ridge #000000;
		border-right: 0.8rem groove #000000;
	}
	.life_cont:hover span{
		background-color:transparent;
		border: none;
	}
	.dl{
		width: 100%;
		height: 22%;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #000000;
	}
	.dl img{
		width: 13%;
		opacity: 0;
		position: relative;
	}
	
	.dl span{
		position: relative;
		width: 74%;
		height: 100%;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: left;
		padding-left: 4rem;
	}
	.dl:hover span{
		transition: 1s;
		background:linear-gradient(to bottom,#ffffff,#fffff0,#fff9b2);
	}
	.dl:hover span::before,
	.breaker:hover span::before,
	.dmc:hover span::before,
	.witcher:hover span::before{
		display: block;
	}
	.dl:hover span::after,
	.breaker:hover span::after,
	.dmc:hover span::after,
	.witcher:hover span::after{
		display: block;
	}
	.dl span::before,
	.breaker span::before,
	.dmc span::before,
	.witcher span::before{
		content: "";
		display: none;
		position: absolute;
		background: linear-gradient(to left,
		#fffff5 0%,#e6e6e0 20%,  #c6c5c5 5%,#9f9e98 40%,
		#282828 30%,#000000 53%, #5b5a5a 44%,#6d6c67 59%,
		#9f9e98 54%,#c6c5c5 80%,  #e6e6e0 74%,#fffff5 100%
		);	
		border-left: 0.5rem groove #8c8c8c;
		border-right: 0.5rem ridge #6b6b6b;
		border-top: 0.1rem solid #000000;
		box-shadow: 0 -10px 30px -6px rgba(0, 0, 0, 1.0),
		  0 10px 30px -6px rgba(0, 0, 0, 1.0);
		z-index: 10;
		animation: span_before 5s infinite;
	}
	@keyframes span_before{
		0%{
			left: 0;
			top: 0;
			height: 10%;
			width: 2%;
		}
		15%{
			left: 0;
			top: 50%;
			width: 2%;
			height: 50%;
		}
		35%{
			left: 0;
			top: 90%;
			width: 2%;
			height: 10%;
		}
		55%{
			left: 96%;
			top: 90%;
			width: 2%;
			height: 10%;
		}
		75%{
			left: 96%;
			top: 0;
			width: 2%;
			height: 50%;
		}
		85%{
			left: 96%;
			top: 0;
			width: 2%;
			height: 10%;
		}
		100%{
			left: 0;
			top: 0;
			width: 2%;
			height: 10%;
		}
	}
	.dl span::after,
	.breaker span::after,
	.dmc span::after,
	.witcher span::after{
		content: "";
		position: absolute;
		display: none;
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
		z-index: 10;
		animation: span_after 5s infinite;
	}
	@keyframes span_after{
		0%{
			right: 0;
			bottom: 0;
			height: 10%;
			width: 2%;
		}
		15%{
			right: 0;
			bottom: 50%;
			height: 50%;
			width: 2%;
		}
		35%{
			right: 0;
			bottom: 90%;
			width: 2%;
			height: 10%;
		}
		55%{
			right: 96%;
			bottom: 90%;
			width: 2%;
			height: 10%;
		}
		75%{
			right: 96%;
			bottom: 0;
			width: 2%;
			height: 50%;
		}
		85%{
			right: 96%;
			bottom: 0;
			width: 2%;
			height: 10%;
		}
		100%{
			right: 0;
			bottom: 0;
			width: 2%;
			height: 10%;
		}
	}
	.dl:hover img{
		transition: 1s;
		opacity: 1;
	}
	.dl span::after{
		background: linear-gradient(to left,
		#999900 0%,#97b500 20%,  #eaea00 5%,#ffff00 40%,
		#fffccb 30%,#ffddac 53%, #e5ebae 44%,#aca87e 59%,
		#ffff00 54%,#eaea00 80%,  #97b500 74%,#999900 100%
		);	
		border-left: 0.5rem groove #8ca148;
		border-right: 0.5rem ridge #aed332;
		border-top: 0.1rem solid #195e04;
	}
	.breaker{
		width: 100%;
		height: 22%;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #000000;
	}
	.breaker img{
		width: 13%;
		opacity: 0;
	}
	.breaker span{
		width: 74%;
		height: 100%;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: left;
		padding-left: 4rem;
		position: relative;
	}
	.breaker:hover span{
		transition: 1s;
		background:linear-gradient(to right,#ffffff,#9a9a9a,#ffffff,#737373,#000000);
	}
	.breaker span::before{
		background: linear-gradient(to left,
		#30302e 0%,#676764 20%,  #939292 5%,#bdbcb4 40%,
		#efeeee 30%,#fffef1 53%, #ebeaea 44%,#acaba3 59%,
		#bdbcb4 54%,#939292 80%,  #676764 74%,#30302e 100%
		);	
		border-left: 0.5rem groove #adadad;
		border-right: 0.5rem ridge #c8c8c8;
		border-top: 0.1rem solid #dcdcdc;
		box-shadow: 0 -10px 30px -6px rgba(255, 255, 255, 1.0),
		  0 10px 30px -6px rgba(255, 255, 255, 1.0);
	}
	.breaker span::after{
		border-left: 0.5rem groove #615f9c;
		border-right: 0.5rem ridge #4632aa;
		border-top: 0.1rem solid #bdb2dc;
		background: linear-gradient(to left,
		#0d172b 0%,#13213e 20%,  #5446b9 5%,#606ecc 40%,
		#858eb3 30%,#c5d0ff 53%, #c1bbeb 44%,#798bac 59%,
		#606ecc 54%,#5446b9 80%,  #13213e 74%,#0d172b 100%
		);	
		box-shadow: 0 -10px 30px -6px rgba(201, 193, 255, 1.0),
		  0 10px 30px -6px rgba(201, 190, 255, 1.0);
	}
	.breaker:hover img{
		transition: 1s;
		opacity: 1;
	}
	.breaker:hover h6{
		transition: 1s;
		color: #FFFFF0;
	}
	.dmc{
		width: 100%;
		height: 20%;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #000000;
	}
	.dmc img{
		width: 13%;
		opacity: 0;
	}
	.dmc span{
		width: 74%;
		height: 100%;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: left;
		padding-left: 4rem;
		position: relative;
	}
	.dmc span::before{
		border-left: 0.5rem groove #3b5a88;
		border-right: 0.5rem ridge #5d4eaa;
		border-top: 0.1rem solid #a0e6ff;
		background: linear-gradient(to left,
		#215271 0%,#27749d 20%,  #298caa 5%,#4e99af 40%,
		#bef7ff 30%,#e1faff 53%, #d5eaeb 44%,#9fd4de 59%,
		#4e99af 54%,#298caa 80%,  #27749d 74%,#215271 100%
		);	
		box-shadow: 0 -10px 30px -6px rgba(207, 255, 252, 1.0),
		  0 10px 30px -6px rgba(229, 252, 255, 1.0);
	}
	.dmc span::after{
		background: linear-gradient(to left,
		#6f0000 0%,#b80000 20%,  #de0202 5%,#ff7e7e 40%,
		#efcaca 30%,#ffffff 53%, #ebcecc 44%,#ac9795 59%,
		#ff7e7e 54%,#de0202 80%,  #b80000 74%,#6f0000 100%
		);	
		border-left: 0.5rem groove #ad3828;
		border-right: 0.5rem ridge #ce6326;
		border-top: 0.1rem solid #ffe8d7;
		box-shadow: 0 -10px 30px -6px rgba(255, 117, 117, 1.0),
		  0 10px 30px -6px rgba(255, 23, 7, 1.0);
	}
	.dmc:hover span{
		transition: 1s;
		color: #cf4f4f;
		background:linear-gradient(to right,#000000,#355586,#ffffff,#a64040,#000000);
	}
	.dmc:hover img{
		transition: 1s;
		opacity: 1;
	}
	.dmc:hover h6{
		transition: 1s;
		color: #5e98ef;
	}
	.witcher{
		width: 100%;
		height: 35%;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #000000;
	}
	.witcher img{
		width: 13%;
		opacity: 0;
	}
	.witcher span{
		width: 74%;
		height: 100%;
		position: relative;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: left;
		padding-left: 4rem;
	}

	.witcher:hover span{
		transition: 1s;
		color: #FFFFFF;
		background:linear-gradient(to bottom,#4673b5,#3c6199,#1e4c6a,#1d304b,#05080d);
	}
	.witcher:hover img{
		transition: 1s;
		opacity: 1;
	}
	h6 {
		font-size: 0.6rem;
		text-align: right;
		padding-right: 4rem;
	}
	p {
		font-size: 1.2rem;
		font-weight: 400;
		
	}
</style>
