<template>
	<div class="label_container" >
		<div class="boxA">
			学习
		</div>
		<div class="boxB">
			工具
		</div>
		<div class="boxC">
			生活
		</div>
		<div class="boxD">
			工作
		</div>
		<div class="boxE">
			风景
		</div>
		<div class="boxF">
			娱乐
		</div>
		<div class="boxG">
			其他技能
		</div>
		<div class="boxH">
			愿望
		</div>
		<div class="boxI">
			分享杂谈
		</div>

	</div>

	
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return{
			
		}
	},
	mounted() {
		// this.test()
	},
	methods:{
		test(){	
			axios.get("http://localhost:8080")
			.then((response) => {
			  console.log(response)
			}).catch((error) => {
			  console.log(error);
			});
		}
	}
}
</script>

<style scoped="scoped">
	.label_container{
		margin-top: 2%;
		display: flex; 
		flex-wrap: wrap;
		justify-content: space-around;
		
	}
	
	.boxA,.boxB,.boxC,.boxD,.boxE,.boxF,.boxG,.boxH,.boxI{
		width: 25%;
		height: 10rem;
		border: 4px double #FFFFFF;
		background-color: #000000;
		font-size: 1.5rem;
		font-weight: bolder;
		line-height: 10rem;
		font-family: FZYaoti;
		color: #FFFFFF;
	}
	.boxA:hover{
		transform: scale(1.2);
		background: url(../assets/image/icon_48.gif) no-repeat center center;
		background-size: 160% 160%;
		transition-duration: 0.5s;
		box-shadow: inset 0 0 2rem 0px rgba(0, 251, 255, 1);
		animation: flicker-3 2s linear both;
	}
	.boxB:hover{
		transform: scale(1.2);
		background: url(../assets/image/icon_56.gif) no-repeat center center;
		background-size: 160% 160%;
		transition-duration: 0.5s;
		box-shadow: inset 0 0 2rem 0px rgba(0, 251, 255, 1);
		animation: flicker-3 2s linear both;
	}
	.boxC:hover{
		transform: scale(1.2);
		background: url(../assets/image/icon_99.gif) no-repeat center center;
		background-size: 160% 160%;
		transition-duration: 0.5s;
		box-shadow: inset 0 0 2rem 0px rgba(0, 251, 255, 1);
		animation: flicker-3 2s linear both;
	}
	.boxD:hover{
		transform: scale(1.2);
		background: url(../assets/image/icon_112.gif) no-repeat center center;
		background-size: 160% 160%;
		transition-duration: 0.5s;
		box-shadow: inset 0 0 2rem 0px rgba(0, 251, 255, 1);
		animation: flicker-3 2s linear both;
	}
	.boxE:hover{
		transform: scale(1.2);
		background: url(../assets/image/icon_115.gif) no-repeat center center;
		background-size: 160% 160%;
		transition-duration: 0.5s;
		box-shadow: inset 0 0 2rem 0px rgba(0, 251, 255, 1);
		animation: flicker-3 2s linear both;
	}
	.boxF:hover{
		transform: scale(1.2);
		background: url(../assets/image/icon_134.gif) no-repeat center center;
		background-size: 160% 160%;
		transition-duration: 0.5s;
		box-shadow: inset 0 0 2rem 0px rgba(0, 251, 255, 1);
		animation: flicker-3 2s linear both;
	}
	.boxG:hover{
		transform: scale(1.2);
		background: url(../assets/image/icon_144.gif) no-repeat center center;
		background-size: 160% 160%;
		transition-duration: 0.5s;
		box-shadow: inset 0 0 2rem 0px rgba(0, 251, 255, 1);
		animation: flicker-3 2s linear both;
	}
	.boxH:hover{
		transform: scale(1.2);
		background: url(../assets/image/icon_08.gif) no-repeat center center;
		background-size: 160% 160%;
		transition-duration: 0.5s;
		box-shadow: inset 0 0 2rem 0px rgba(0, 251, 255, 1);
		animation: flicker-3 2s linear both;
	}
	.boxI:hover{
		transform: scale(1.2);
		background: url(../assets/image/icon_172.gif) no-repeat center center;
		background-size: 160% 160%;
		transition-duration: 0.5s;
		box-shadow: inset 0 0 2rem 0px rgba(0, 251, 255, 1);
		animation: flicker-3 2s linear both;
	}
	@keyframes flicker-3 {
	  0%,
	  100% {
	    opacity: 1;
	  }
	  32.98% {
	    opacity: 1;
	  }
	  33% {
	    opacity: 0;
	  }
	  34% {
	    opacity: 0;
	  }
	  34.02% {
	    opacity: 1;
	  }
	  34.98% {
	    opacity: 1;
	  }
	  35% {
	    opacity: 0;
	  }
	  35.9% {
	    opacity: 0;
	  }
	  35.92% {
	    opacity: 1;
	  }
	  38.98% {
	    opacity: 1;
	  }
	  39% {
	    opacity: 0;
	  }
	  39.8% {
	    opacity: 0;
	  }
	  39.82% {
	    opacity: 1;
	  }
	  83.98% {
	    opacity: 1;
	  }
	  84% {
	    opacity: 0;
	  }
	  84.9% {
	    opacity: 0;
	  }
	  84.92% {
	    opacity: 1;
	  }
	}
</style>
