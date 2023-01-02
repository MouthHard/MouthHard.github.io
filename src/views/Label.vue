<template>
	<div class="label_container" >
		<audio controls="controls" hidden ref="audio" >
			<source src="../assets/sound/one.mp3"/>
		</audio>
		<template v-for="lab in labelArr" :key="lab.id">
			<p :class="lab.classes" @mouseenter="sound_play" @mouseleave="sound_stop" @click="label_window(lab.title)">{{lab.title}}</p>
		</template>	
	</div>

	<el-dialog v-model="dialogVisible" :title="dialog_title" width="50%" draggable>
		<!-- :is可以动态绑定一个属性showCompo，这个属性记录的是组件的名称，比如StudyLabel,当组件名称变化时，相应的组件页面也变化 -->
		<component :is="showCompo" ></component>
		<template #footer>
			<el-button type="primary" @click="changeColor('random')">随机选色器</el-button>
			<el-button type="danger" @click="changeColor('normal')">清空</el-button>
			<el-button type="success" @click="dialogVisible = false">OK</el-button>
			
		</template>
	</el-dialog>
</template>

<script>
import StudyLabel from '../components/label_page/Study_Label.vue'
import ToolLabel from '../components/label_page/Tool_Label.vue'
import TargetLabel from '../components/label_page/Target_Label.vue'
import EntertainLabel from '../components/label_page/Entertain_Label.vue'
import emitter from '../assets/js/event.js'
export default {
	components:{
		StudyLabel,
		ToolLabel,
		TargetLabel,
		EntertainLabel
	},
	data() {
		return{
			showCompo:'StudyLabel',
			labelCount:0,
			dialogVisible:false,
			labelArr:[
				{id:'001', title:'学习', classes:'boxA'},
				{id:'002', title:'工具', classes:'boxB'},
				{id:'003', title:'愿望目标', classes:'boxC'},
				{id:'004', title:'娱乐', classes:'boxD'},
				{id:'005', title:'风景', classes:'boxE'},
				{id:'006', title:'工作', classes:'boxF'},
				{id:'007', title:'生活', classes:'boxG'},
				{id:'008', title:'其他技能', classes:'boxH'},
				{id:'009', title:'分享杂谈', classes:'boxI'},
			],
			dialog_title:"",
		}
	},

	methods:{
		changeColor(type){
			if(type =='random'){
				let ranA = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
				let ranB = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
				let ranC = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
				let liner ='linear-gradient(' + Math.floor(Math.random() * 360) +'deg,' + ranA +',' + ranB +','+ ranC +')'
				document.querySelector('.el-dialog__body').style.background = liner
			}else{
				document.querySelector('.el-dialog__body').style.background = '#ffffff'
			}
		},
		label_window(title){
			this.dialogVisible=true
			
			this.dialog_title=title
			if(this.dialog_title =='学习'){
				this.showCompo ='StudyLabel'
				this.$router.replace({path:'/label/study_label'}) 
				document.querySelector('.el-dialog__body').style.backgroundColor='#FFFFFF'
			}else if(this.dialog_title =='工具'){
				this.showCompo = 'ToolLabel'
				this.$router.replace({path:'/label/tool_label'}) 
				document.querySelector('.el-dialog__body').style.backgroundColor='#FFFFFF'
			}else if(this.dialog_title =='愿望目标'){
				this.showCompo = 'TargetLabel'
				this.$router.replace({path:'/label/target_label'}) 
				document.querySelector('.el-dialog__body').style.backgroundColor='#FFFFFF'
			}else if(this.dialog_title =='娱乐'){
				this.showCompo = 'EntertainLabel'
				this.$router.replace({path:'/label/entertain_label'}) 
			}else{
				this.showCompo = ''
			}
				
		},
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
	},
	mounted() {
		this.labelCount = document.querySelector('.label_container').getElementsByTagName('p').length
		emitter.emit('labelLength', this.labelCount)
		
		
		//由于拿到的是个类数组对象，所以要用array.from()变成数组
		let arr =  Array.from(document.getElementsByTagName('p')) 
		arr.forEach(item=>{
			item.onmouseenter = function(){
				item.style.transform ='scale(1.2)'	
				item.style.transitionDuration ='0.5s'
				item.style.backgroundSize =' 160% 160%'
				item.style.boxShadow ='inset 0 0 2rem 0px rgba(0, 251, 255, 1)'
			}
			item.onmouseleave =function(){
				item.style.transform ='scale(1)'	
				item.style.transitionDuration ='0.5s'
				item.style.boxShadow=''
			}
		})
		
		
	},
	beforeUnmount() {
		emitter.all.delete('labelLength')
	},
}
</script>

<style>
	.el-dialog__header{
		height: 1.5rem;
		background-image: linear-gradient(to bottom, #686868,#b0b0b0,#7e7e7e, #282828);
		margin-right: 0;
		
		padding: 10px;
		border-right: #a6a6a6 ridge 0.1rem;
		border-left: #a6a6a6 groove 0.1rem;
		border-bottom: #8c8c8c ridge 0.2rem ;	
		box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 1.0);
	}
	.el-dialog__title{
		color: #ffffff;
		font-weight: bolder;
	}
	.el-dialog__headerbtn{
		font-size: 1.2rem;
		font-weight: 1.2rem;
	}
	.el-dialog__body,.el-dialog__footer{
		padding: 7px;
		border: 1px solid #a4e7ff;
		overflow: hidden;
	}

</style>
<style scoped="scoped">

	
	.label_container{
		margin-top: 2%;
		display: flex; 
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
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
		background: url(../assets/image/icon_48.gif) no-repeat center center;
		animation: flicker-3 3s linear both;
	}
	.boxB:hover{
		background: url(../assets/image/icon_56.gif) no-repeat center center;
		animation: flicker-3 3s linear both;
	}
	.boxC:hover{
		background: url(../assets/image/icon_99.gif) no-repeat center center;
		animation: flicker-3 3s linear both;
	}
	.boxD:hover{
		background: url(../assets/image/icon_112.gif) no-repeat center center;
		animation: flicker-3 3s linear both;
	}
	.boxE:hover{
		background: url(../assets/image/icon_115.gif) no-repeat center center;
		animation: flicker-3 3s linear both;
	}
	.boxF:hover{
		background: url(../assets/image/icon_134.gif) no-repeat center center;
		animation: flicker-3 3s linear both;
	}
	.boxG:hover{
		background: url(../assets/image/icon_144.gif) no-repeat center center;
		animation: flicker-3 3s linear both;
	}
	.boxH:hover{
		background: url(../assets/image/icon_08.gif) no-repeat center center;
		animation: flicker-3 3s linear both;
	}
	.boxI:hover{
		background: url(../assets/image/icon_172.gif) no-repeat center center;
		animation: flicker-3 3s linear both;
	}
	@keyframes flicker-3 {
	  0%, 100%, 32.98%, 34.02%, 34.98%, 35.92%, 38.98%, 39.82%, 83.98%, 84.92%{
	    opacity: 1;
	  }
	  33%, 34%, 35%, 35.9%, 39%, 39.8%, 84%, 84.9%{
	    opacity: 0;
	  }
	}
</style>
