<template>
<<<<<<< HEAD
	<div id="keyBoard">	
=======
	<div id="antique">
		<div id="trumpet">
			<div id="trumBar"></div>
			<div id="trumBarB"></div>
			<div id="trumBarC"></div>
			<div id="trumBarD"></div>
		</div>
		<div id="perch">
			<div id="perchChild"></div>
		</div>

		<div id="disc">
			<div id="record"></div>
			<div id="needle"></div>
		</div>
		<div id="musicBox"></div>
		<div id="musicList">
			<iframe frameborder="yes" border="0" marginwidth="0" marginheight="0"
				src="http://music.163.com/outchain/player?type=0&id=900909306&auto=1&height=900">
			</iframe>
		</div>
	</div>


	<div id="keyBoard">	
		<!-- 网易云音乐插件 -->
		
>>>>>>> e377521 (“提交”)
		<div class="piano">
			<div class="boardA">借用B站大佬“球球的前端奶茶屋”的钢琴进行测试，非商用</div>
			<div class="boardB"></div>
			<div class="boardC"></div>
			<!-- 模板批量创建黑白键 -->
			<template v-for="(octave, octaveIndex) in octaves">
			  <template v-for="(note, index) in notes">
				<!-- 钢琴白健 -->
				<h1
				  :class="whiteKeyClass(octaveIndex, index)"
				  :style="whiteKeyStyle(octaveIndex, index)"
				  @mouseenter="playSound(note)"
				>
				  <div class="tec y90-left size-lr"></div>
				  <div class="tec y90-right size-lr"></div>
				  <div class="tec x90-top keyTop size-t"></div>
				  <div class="tec x90-front">
					<span class="f-notes">{{note}}</span>
				  </div>
				</h1>
				
				<!-- 钢琴黑健 -->
			   <h1
				  v-if="index!=1 && index!=4 && index!=8 && index!=11 && index!=15 && index!=18 && index!=21 &&  index!=25"
				  :class="blackKeyClass(octaveIndex, index)"
				  :style="blackKeyStyle(octaveIndex, index)"
				>
				  <div class="tec y90-left size-lr"></div>
				  <div class="tec y90-right size-lr"></div>
				  <div class="tec x90-top keyTop size-t"></div>
				  <div class="tec x90-front">
					<span class="f-notes"></span>
				  </div>
				</h1>
				
			  </template>
			</template>
		</div>
		
		<div class="firstLine"></div>
		<div class="secondLine"></div>
		<div class="thirdLine"></div>
		<div class="fourthLine"></div>
		<div class="fifthLine"></div>
		<div class="sixthLine"></div>
	</div>
</template>

<script>
<<<<<<< HEAD

=======
>>>>>>> e377521 (“提交”)
	export default {
		data() {
			return{
				mp3Srcs:[],
								
				octaves: new Array(1),
				notes: ['C-','D-','E-',"F-", "G-",'A-','B-', "C", "D", "E", "F", "G","A", "B",
				  "C+", "D+", "E+",'F+','G+',"A+", "B+",'C++','D++','E++','F++','G++'],
				 // 键盘上的键对应钢琴的键
				notesMap: new Map([
					['q','C-'], ['w','D-'],['e','E-'], ['r','F-'],['t','G-'], ['y','A-'],['u','B-'],
					['i','C'], ['o','D'],['p','E'], ['a','F'],['s','G'], ['d','A'],['f','B'],
					['g','C+'], ['h','D+'],['j','E+'], ['k','F+'],['l','G+'], ['z','A+'],['x','B+'],
					['c','C++'], ['v','D++'],['b','E++'], ['n','F++'],['m','G++']
				]),
				 
				keyMap: {},
				activeButtonIdMap: {},
				keys: [],
				
			}
		},
		mounted() {	
			// console.log(this.notesMap)
			//批量创建键盘按钮
			this.createFisrtLine(),
			this.createSecondLine(),
			this.createThirdLine(),
			this.createFourthLine(),
			this.createFifthLine(),
			this.createSixthLine(),
			this.keyOption()
			// this.mp3Srcs = Array.from(document.querySelector('.piano').getElementsByTagName('h1')) 		
			// console.log(document.getElementsByTagName('h1').lastElementChild)
			
		},

		methods:{	
<<<<<<< HEAD
=======
			
>>>>>>> e377521 (“提交”)
			playSound(note){
				// console.log(note)
				let audio = new Audio()
				// audio.src = require('../assets/piano/' + note +'.mp3')
				if(this.notes.indexOf(note)!==-1){
					audio.src = require('../assets/piano/' + note +'.mp3')
				}
				audio.play()
			},
			whiteKeyClass(octaveIndex, index) {
				// console.log(octaveIndex, index)
			  return `white-key-group key tom-${this.notes[index]}${this.isActive(
			    this.keys[index + octaveIndex * 12]
			  )}`;
			},
			whiteKeyStyle(octaveIndex, index) {	
			  return `left:${45 * octaveIndex * this.notes.length + 41 * index}px`;
			},
			blackKeyClass(octaveIndex, index) {
			  return `black-key-group key tom-s${this.notes[index]}${this.isActive(
			    this.keys[
			      index + (index === 0 || index === 1 ? 7 : 6) + octaveIndex * 12
			    ]
			  )}`;
			},
			blackKeyStyle(octaveIndex, index) {
			  return `left: ${43 * octaveIndex * this.notes.length + 40 * index + 38}px`;
			},
			
			isActive(key) {
			  return this.activeButtonIdMap[this.keyMap[key]] ? " pressed" : "";
			},

			//键盘敲击或者鼠标点击 触发界面上的键盘敲击
			keyOption(){ 
				let keyboard =  Array.from(document.getElementsByTagName('p'))		
				keyboard.forEach(item=>{
					item.onmouseenter = function(){
						item.style.color ='#002435'
						item.style.background ='linear-gradient(to bottom, #538ca5 0%,#87d0f7 20%,  #99c6d5 25%,#acdff0 35%,#d0ffff 50%,#ecfdfb 51%, #99c6d5 66%,#87d0f7 80%,#538ca5 100%)'
						item.style.boxShadow = ' 0 0 20px 0  white'
						item.style.borderRight =' #39718f ridge 0.2rem'
						item.style.borderLeft =' #39718f groove 0.2rem'
						item.style.borderTop =' #224556 solid 0.1rem'
						item.style.borderBottom =' #4580c8 groove 0.6rem'
					}
					item.onmouseleave = function(){
						item.style.color = ''
						item.style.background = ''
						item.style.boxShadow = ''
						item.style.borderRight = ''
						item.style.borderLeft = ''
						item.style.borderTop = ''
						item.style.borderBottom = ''
					}
				})	
				//created钩子里的this是vue对象,但是,onkerdown这个函数本身又形成了一个"作用域",this指向了调用onkeydown的对象.
				//而onkeydown里面的decrease()是methods里面的一个函数,所以this的指向出错,所以要用that来保存当前keyOption()中的this指向
				//此时this的指向 是mounted中的this一样的指向，该this下除了keyOption()还有 playSound()、whiteClass()等函数
				var that = this
				
				document.onkeydown =function(e){	
					for(let item of keyboard){
						if(item.innerText == e.key.toUpperCase()){
							that.playSound(that.notesMap.get(e.key))
							// console.log(this.notesMap.get(e.key.toUpperCase())+'')
							item.style.color ='#002435'
							item.style.background ='linear-gradient(to bottom, #538ca5 0%,#87d0f7 20%,  #99c6d5 25%,#acdff0 35%,#d0ffff 50%,#ecfdfb 51%, #99c6d5 66%,#87d0f7 80%,#538ca5 100%)'
							item.style.boxShadow = ' 0 0 20px 0  white'
							item.style.borderRight =' #39718f ridge 0.2rem'
							item.style.borderLeft =' #39718f groove 0.2rem'
							item.style.borderTop =' #224556 solid 0.1rem'
							item.style.borderBottom =' #4580c8 groove 0.6rem'
						}
					}
					
				}
				document.onkeyup =function(){
					keyboard.forEach(item=>{
						item.style.color = ''
						item.style.background = ''
						item.style.boxShadow = ''
						item.style.borderRight = ''
						item.style.borderLeft = ''
						item.style.borderTop = ''
						item.style.borderBottom = ''
					})
				}
			},
			createFisrtLine(){
				let first = document.querySelector('.firstLine')
			//由于mounted不知道什么原因执行了两次，因此会创建两次键盘，所以在这里进行判断，如果是已经存在子节点，即已经创建过元素一次，那么退出函数
				if(first.childNodes.length!==0)return 
				
				let firstText = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
				 'PrtSc','ScLK','Pause']
				for(let i = 0; i<16;i++){
					let curKey = document.createElement('p')
					if(i==1) curKey.style.marginLeft ='3.6rem'
					if(i==5 || i==9) curKey.style.marginLeft ='2rem'
					if(i==13)curKey.style.marginLeft ='1rem'
					if(i<16 && i>12){
						curKey.style.fontSize ='0.8rem'
						curKey.style.marginTop ='1rem'
					} 
					curKey.innerText = firstText[i]
					first.appendChild(curKey)
				}
				for(let i = 0;i<3;i++){
					let light = document.createElement('div')
					if(i==0){
						light.style.background = '#FFFFF0'
						light.style.boxShadow = '0 0 10px 0 rgba(255, 255, 255, 1)'
					}
					light.style.width = '6px'
					light.style.height = '6px'
					light.style.borderRadius = '50%'
					light.style.border = '3px ridge #b0b0b0'
					light.style.marginTop = '2rem'
					light.style.marginLeft = '2rem'
					first.appendChild(light)
				}
			},
			createSecondLine(){
				let second = document.querySelector('.secondLine')
				
				//由于mounted不知道什么原因执行了两次，因此会创建两次键盘，所以在这里进行判断，如果是已经存在子节点，即已经创建过元素一次，那么退出函数
				if(second.childNodes.length!==0)return 
				
				second.style.marginTop ='-1.5rem'
				let secondText = ['` ~', '1 !', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )',
				 '- —', '= +','←——','Ins','Home','PgUp','Num','/','*','-']
				for(let i = 0; i<21;i++){
					let curKey = document.createElement('p')
					if(i==13)curKey.style.width ='5.7rem'
					if(i==14 || i==17)curKey.style.marginLeft ='1rem'
					if(i>13 && i<18){
						curKey.style.fontSize ='0.8rem'
						curKey.style.marginTop ='1rem'
					} 
					curKey.innerText = secondText[i]
					second.appendChild(curKey)
				}
			},
			createThirdLine(){
				let third = document.querySelector('.thirdLine')
				
				//由于mounted不知道什么原因执行了两次，因此会创建两次键盘，所以在这里进行判断，如果是已经存在子节点，即已经创建过元素一次，那么退出函数
				if(third.childNodes.length!==0)return 
				
				third.style.marginTop ='-1.5rem'
				let thirdText = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
				 '[ {', '] }','\\ |','Del','End','PgDn','7','8 ↑','9','+']
				for(let i = 0; i<21;i++){
					let curKey = document.createElement('p')
					if(i==0 || i==13)curKey.style.width ='4rem'
					if(i==14)curKey.style.marginLeft ='1rem'
					if(i==17)curKey.style.marginLeft ='1rem'
					if(i==20)curKey.style.height ='6rem'
					if(i>13 && i<17){
						curKey.style.fontSize ='0.8rem'
						curKey.style.marginTop ='1rem'
					} 
					curKey.innerText = thirdText[i]
					third.appendChild(curKey)
				}
			},
			createFourthLine(){
				let fourth = document.querySelector('.fourthLine')
				
				//由于mounted不知道什么原因执行了两次，因此会创建两次键盘，所以在这里进行判断，如果是已经存在子节点，即已经创建过元素一次，那么退出函数
				if(fourth.childNodes.length!==0)return 
				
				fourth.style.marginTop ='-5.2rem'
				let fourthText = ['CapsLK', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '; :',
				 ' \' \" ', '↩','4 ←','5','6 →']
				for(let i = 0; i<16;i++){
					let curKey = document.createElement('p')
					if(i==0)curKey.style.width ='4.75rem'
					if(i==12){
						curKey.style.width ='5.4em'
						curKey.style.fontSize ='1.2em'
						curKey.style.marginTop ='1rem'
						curKey.style.marginRight ='11rem'
					}
					curKey.innerText = fourthText[i]
					fourth.appendChild(curKey)
				}
			},
			createFifthLine(){
				let fifth = document.querySelector('.fifthLine')
				
				//由于mounted不知道什么原因执行了两次，因此会创建两次键盘，所以在这里进行判断，如果是已经存在子节点，即已经创建过元素一次，那么退出函数
				if(fifth.childNodes.length!==0)return 
				
				fifth.style.marginTop ='-1.7rem'
				let fifthText = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ', <', '. >', '/ ?',
				 'Shift', '↑','1','2↓','3','↩']
				for(let i = 0; i<17;i++){
					let curKey = document.createElement('p')
					if(i==0)curKey.style.width ='6rem'
					if(i==11){
						curKey.style.width ='8.5rem'
						curKey.style.fontSize ='1.2em'
						curKey.style.marginTop ='1rem'
					}
					if(i==12){
						curKey.style.marginLeft ='4.2rem'
						curKey.style.marginRight ='3.85rem'
					}
					if(i==16)curKey.style.height ='6rem'
					curKey.innerText = fifthText[i]
					fifth.appendChild(curKey)
				}
			},
			createSixthLine(){
				let sixth = document.querySelector('.sixthLine')
				
				//由于mounted不知道什么原因执行了两次，因此会创建两次键盘，所以在这里进行判断，如果是已经存在子节点，即已经创建过元素一次，那么退出函数
				if(sixth.childNodes.length!==0)return 
				
				sixth.style.marginTop ='-5.2rem'
				let sixthText = ['Ctrl', 'win🔒', 'Alt', '——————', 'Alt', 'Fn', '▤', 'Ctrl', '←', '↓', '→',
				 '0 Ins', '. Del']
				for(let i = 0; i<13;i++){
					let curKey = document.createElement('p')
					if(i<8)curKey.style.width ='3.3rem'
					if(i==3){
						curKey.style.width ='18rem'
						curKey.style.fontSize ='1.2em'
						curKey.style.marginTop ='1rem'
					}
					if(i==8)curKey.style.marginLeft ='1rem'
					if(i==11){
						curKey.style.marginLeft ='1rem'
						curKey.style.width ='5.5rem'
					}
					curKey.innerText = sixthText[i]
					sixth.appendChild(curKey)
				}
			},
		}
	}
</script>
<style lang="scss" scoped="scoped">
@mixin createKey(
  $colorLeft,
  $colorRight,
  $colorTop,
  $colorFront,
  $borderColor,
  $keyWidth,
  $keyHeight,
  $keyDeep
) {
  transform-style: preserve-3d;
  width: $keyWidth;
  height: $keyHeight;
  position: absolute;
  transform-origin: 0% 0% (-$keyDeep);
  backface-visibility: hidden;
  transition: 0.5s;

  .size-lr {
    width: $keyDeep;
    height: $keyHeight;
  }
  .size-t {
    width: $keyWidth;
    height: $keyDeep;
  }
  .tec {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0% 0%;
    border: 2px ridge $borderColor;
  }
  .y90-left {
    transform: rotateY(90deg);
    background: $colorLeft;
    background-image: linear-gradient(-70deg, $colorTop, $colorLeft);
	box-shadow: 0 -10px 30px -6px rgba(255, 255, 255, 1.0),
	  0 10px 30px -6px rgba(255, 255, 255, 1.0);
  }
  .y90-right {
    transform: rotateY(90deg);
    left: $keyWidth + 3.5px;
	background: $colorRight;
    background-image: linear-gradient(-70deg, $colorTop, $colorRight);
	box-shadow: 0 -10px 30px -6px rgba(255, 255, 255, 1.0),
	  0 10px 30px -6px rgba(255, 255, 255, 1.0);
  }
  .x90-top {
    transform: rotateX(-90deg);
    background: $colorTop;
    background-image: linear-gradient(to bottom , $colorFront, $colorTop);
  }
  .x90-front {
    transform: rotateX(0deg);
    width: $keyWidth;
    height: $keyHeight;
    background: $colorFront;
    background-image: linear-gradient(to top bottom, $colorTop, $colorFront);
    position: relative;
  }
  .x90-front2 {
    transform: rotateY(0deg);
    margin-left: $keyWidth;
    width: $keyWidth;
    height: $keyHeight;
    background: $colorFront;
    background-image: linear-gradient(
      to bottom right,
      $colorRight,
      $colorFront
    );
  }
}

.piano {
  transform-style: preserve-3d;
  perspective: 150rem;
<<<<<<< HEAD
  position: absolute;
=======
  position: relative;
>>>>>>> e377521 (“提交”)
  width: 55rem;
  height: 25vh;
  margin: 0 auto;
  padding: 0;
<<<<<<< HEAD
  top: 21%;
  left: 41.5%;
=======

  left: 29.5%;
>>>>>>> e377521 (“提交”)
  transform: translateX(-50%) translateZ(10px) rotateY(0deg) rotateX(-30deg);
}
.white-key-group {
  z-index: 1;
  @include createKey(#999, #999, #000000, #eee, #cccccc, 35px, 50px, 350px);
}
.white-key-group:hover {
	transform: rotateX(-10deg);
}
.black-key-group {
  margin-top: -35px;
  transform: translateZ(-90px);
  z-index: 100;
  @include createKey(#000000, #000000, #ffffff, #333 ,#cccccc, 15px, 20px, 200px);

  .f-notes {
    color: #eee;
    top: 5%;
  }

}
.black-key-group:hover{
	transform: rotateX(-10deg) translateZ(-100px);
	margin-top: -25px;
}
.f-notes {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #222;
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  text-align: center;
}
<<<<<<< HEAD

</style>

<style>
=======
	iframe{
		width: 25rem;
		height: 17rem;
		
		background-image: linear-gradient(to top, rgba(139, 221, 255, 0.5),rgba(255, 255, 255, 0.5));
		padding: 10px;
		box-shadow:  0 0 20px 0 rgba(255, 255, 255, 1.0);
		animation: iframeAni 2.5s  linear both;
		animation-delay: 1s;
	}
	@keyframes iframeAni{
		100%,32.98%,34.02% ,34.98%,35.92%,38.98%,39.82%,83.98%,84.92% {
		    opacity: 1;
		}
		0%,33%,34%,35%,35.9%,39%,39.8%,84%,84.9%{
		    opacity: 0;
		}
	}
</style>

<style>
	#perch{
		position: absolute;
		right: 19rem;
		top: -4rem;
		width: 2rem;
		height: 15rem;
		border: 0.2rem double ;
		transform: rotate(-90deg)  skew(10deg);
		background: linear-gradient(180deg,
		#474745 0%,#757572 10%,  #686767 20%,#9d9c95 40%,
		#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
		#c6c5c5 75%,#ddddd7 100%
		);
		z-index: -1;
		box-shadow: -1px 1px #ffffff, -2px 2px #ff0004, -3px 3px #fff700, -4px 4px #0000d8,
		-5px 5px #00ffff, -6px 6px #fff700, -7px 7px #0000d8, -8px 8px #ffffff,
		0 0 30px 0px rgba(255, 255, 255, 1);
	}
	#perch::before{
		content: "";
		position: absolute;
		left: 0;
		top: -15.1rem;
		width: 2rem;
		height: 15rem;
		opacity: 0;
		background: linear-gradient(to right,
		#0800ff 0%,#00ffff 25%,  #ffffff 50%, #fbff02 75%, #ff0000 100%
		);
		box-shadow: -10px 0 30px -1px rgba(0, 55, 255, 1.0),
		  10px 0 30px -1px rgba(255, 0, 0, 1.0);
		animation: perchBeforeAni 0.1s forwards cubic-bezier(1, 0.5, 0.2, 0.9) , animation 3s infinite cubic-bezier(1, 0.5, 0.2, 0.9);
		animation-delay: 1s;
	}
	@keyframes perchBeforeAni{
		100%{
			opacity: 1;
		}
	}
	#perch::after{
		content: "";
		position: absolute;
		right: 2rem;
		top: 10rem;
		width: 3rem;
		height: 7rem;
		opacity: 0;
		transform: rotate(90deg);
		background-color: rgba(255, 255, 255, 0.8);
		box-shadow: 0 0 30px 0 rgba(255, 255, 255, 1.0);
		animation: perchBeforeAni 0.1s forwards cubic-bezier(1, 0.5, 0.2, 0.9);
		animation-delay: 1s;
	}
	#perchChild{
		position: absolute;
		right: 8rem;
		top: 6rem;
		width: 2rem;
		height: 10rem;
		transform: ;
		border: 0.2rem double;
		background: linear-gradient(180deg,
			#474745 0%,#757572 10%,  #686767 20%,#9d9c95 40%,
			#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
			#c6c5c5 75%,#ddddd7 100%
		);
		box-shadow: -1px 1px #ffffff, -2px 2px #0044ff, -3px 3px #00f3ff, -4px 4px #0044ff,-5px 5px #ffffff,
		0 0 20px 0px rgba(255, 255, 255, 1);
	}
	#perchChild::before{
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 2rem;
		height: 5rem;
		border: 0.2rem double;
		background: linear-gradient(to left,
			#474745 0%,#757572 10%,  #686767 20%,#9d9c95 40%,
			#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
			#c6c5c5 75%,#ddddd7 100%
		);
		box-shadow: 0 0 20px 0px rgba(255, 255, 255, 1);
		animation: perchChildBefore 1s forwards cubic-bezier(1, 0.5, 0.2, 0.9);
	}
	@keyframes perchChildBefore{
		100%{
			left: -5rem;
		}
	}
	#perchChild::after{
		content: "";
		position: absolute;
		left: 2rem;
		top: 0;
		width: 2rem;
		height: 5rem;
		border: 0.2rem double;
		background: linear-gradient(to right,
		#474745 0%,#757572 10%,  #686767 20%,#9d9c95 40%,
		#efeeee 50%,#fffef1 55%, #ebeaea 56%,#acaba3 65%,
		#c6c5c5 75%,#ddddd7 100%
		);
		box-shadow: 0 0 20px 0px rgba(255, 255, 255, 1);
		animation: perchChildAfter 1s forwards cubic-bezier(1, 0.5, 0.2, 0.9);
	}
	@keyframes perchChildAfter{
		100%{
			left: 4rem;
		}
	}
	#antique{
		position: relative;
		left: 0;
		top: 0;
	}
	#musicList{
		position: absolute;
		left: 3%;
		top: 26rem;
	}
	#musicList::before{
		content: "";
		position: absolute;
		right: -35%;
		top: 10%;
		width: 25%;
		height: 3rem;
		background: linear-gradient(to bottom,#1d1d1d 0%,#464646 20%,#c2c2c2 48%,#ffffff 52%,
		#c2c2c2 56%,#464646 80%,#1d1d1d 100%);
		border-left: 0.3rem ridge #9e9e9e;
		border-bottom: 0.3rem ridge #6b6b6b;
		border-radius: 0.7rem;
	
	}
	#musicList::after{
		content: "";
		position: absolute;
		right: -25%;
		top: 5%;
		width: 20%;
		height: 3rem;
		background: linear-gradient(to bottom,#1d1d1d 0%,#464646 20%,#c2c2c2 48%,#ffffff 52%,
		#c2c2c2 56%,#464646 80%,#1d1d1d 100%);
		border-left: 0.3rem ridge rgba(88, 88, 88, 0.5);
		border-radius: 0.7rem;
		box-shadow: -20px 0 15px -10px rgba(255, 255, 255, 1);
	}
	#record{
		position: absolute;
		left: 25%;
		top: 5%;
		width: 10rem;
		height: 10rem;	
		border-radius: 50%;
		background-size: 100% 100%;
		background: radial-gradient(circle at center,
		#ffffff 0%,#ffffff 1%,#121212 3%,#98121c 3%,#98121c 10%,
		#121212 10.1%,#98121c 10.3%,#98121c 15%,#747474 15.1%,#98121c 15.3%,#98121c 30%,#121212 31%,#121212 35%,
		#949494 35.1%,#121212 35.2%,#121212 40%,#949494 40.2%,#121212 40.4%,#121212 55%,#121212 55.5%,
		#121212 56%,#121212 60%,#949494 60.1%,#121212 60.2%,#121212 65%,#949494 65.1%,#121212 65.3%,#121212 100%
		);
		border-right: #444444 ridge 0.3rem;
		border-left: #444444 groove 0.3rem;
		border-top: #444444 groove 0.3rem;
		border-bottom: #303030 ridge 0.3rem ;
		box-shadow:0 0 20px 0px rgba(90, 90, 90, 1.0);
		animation: recordAni 1s infinite ;
	}
	@keyframes recordAni{
		100%{
			transform: rotate(360deg);
		}
	}
	#needle{
		position: absolute;
		width: 2rem;
		height: 1.8rem;
		right: 3rem;
		bottom: 3rem;
		transform: rotate(35deg);
		background: linear-gradient(to bottom,
		#8f8f8f 0%,#070707 5%,#282828 20%,  #5f5f5f 40%,#cacaca 50%,#6c6c6c 60%,
		#2d2f31 79%, #242424 81%,#070707 95%,#8f8f8f 100%
		);
	}
	#needle::after{
		content: "";
		position: absolute;
		width: 4rem;
		height: 1.2rem;
		left: -4rem;
		top: 0.25rem;
		background: linear-gradient(to bottom,
		#8f8f8f 0%,#070707 5%,#282828 20%,  #5f5f5f 40%,#cacaca 50%,#6c6c6c 60%,
		#2d2f31 79%, #242424 81%,#070707 95%,#8f8f8f 100%
		);
	}
	#needle::before{
		content: "";
		position: absolute;
		width: 4rem;
		height: 0.5rem;
		left: -8rem;
		top: 0.6rem;
		background: linear-gradient(to bottom,
		#8f8f8f 0%,#070707 5%,#282828 20%,  #5f5f5f 40%,#cacaca 50%,#6c6c6c 60%,
		#2d2f31 79%, #242424 81%,#070707 95%,#8f8f8f 100%
		);
	}
	#disc{
		position: absolute;
		right: 17%;
		top: 19rem;
		width: 35%;
		height: 12rem;
		border-radius:20% 5% 0 0 ;
		border-right: 0.4rem groove #58402c;
		border-top: 0.2rem ridge #58402c;
		border-bottom:  0.4rem ridge #58402c;
		border-left: 0.4rem ridge #58402c;
		
		background: url(../assets/woodImg/woodZ.png);
		background-size: 100% 100%;
		z-index: 2;
	}
	#disc::before{
		content: "";
		position: absolute;
		right: -8%;
		top: -27%;
		width: 6rem;
		height: 2rem;
		transform: rotate(90deg) skew(-10deg);
		border-radius: 0.1rem;
		background: linear-gradient(to bottom,
		#8f8f8f 0%,#070707 5%,#282828 20%,  #5f5f5f 40%,#cacaca 50%,#6c6c6c 60%,
		#2d2f31 79%, #242424 81%,#070707 95%,#8f8f8f 100%
		);
		border: 0.2rem ridge #58402c;
		box-shadow: -1px -1px #ffffff, -2px -2px #0cb2ff, -3px -3px #ff0004, -4px -4px #0026ff,-5px -5px #ffffff,
		0 0 20px 0px rgba(255, 255, 255, 1.0);
	}
	#disc::after{
		content: "";
		position: absolute;
		right: 2%;
		bottom: 8%;
		width: 3rem;
		height: 2.5rem;	
		border-radius: 50%;
		background: url(../assets/image/load18.gif);
		background-size: 100% 100%;
		border: 0.3rem groove #bdbdbd;
		box-shadow: 0 0 30px 10px rgba(0, 0, 0, 1.0), inset 0 0 10px 0px rgba(186, 186, 186, 1.0);
	}
	#musicBox{
		position: absolute;
		right: 19.5%;
		top: 31rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 22rem;
		height: 10rem;
		border: 0.4rem ridge #632909;		
		background: url(../assets/woodImg/musicWood.png);
		background-size: 100% 100%;
		box-shadow: inset 0 0 30px 10px rgba(0, 0, 0, 1.0),  0 0 20px 5px rgba(0, 0, 0, 0.8); 
	}
	#musicBox::before{
		content: "";
		position: absolute;
		left: -5%;
		top: -5%;
		width: 11rem;
		height: 12rem;
		border: 0.4rem groove #58402c;
		background: linear-gradient(to bottom,
		#000000 0%,#673e37 20%,  #76553b 40%,#87360c 60%,#ffaf8f 89%, #000000 89%,#c98e5c 95%,#9b440c 100%
		);
		box-shadow: -20px 0 20px -6px rgba(0, 0, 0, 0.8),inset 0 0 30px 0 rgba(0, 0, 0, 1.0);
		transform:  skew(-8deg);

		z-index: -1;
	}
	#musicBox::after{
		content: "";
		position: absolute;
		right: -5%;
		top: -5%;
		width: 11rem;
		height: 12rem;
		border: 0.4rem groove #58402c;
		background: linear-gradient(to bottom,
		#000000 0%,#673e37 20%,  #76553b 40%,#87360c 60%,#ffaf8f 89%, #000000 89%,#c98e5c 95%,#9b440c 100%
		);
		box-shadow: 20px 0 20px -6px rgba(0, 0, 0, 0.8),inset 0 0 30px 0 rgba(0, 0, 0, 1.0);
		transform:  skew(8deg);
		z-index: -1;
	}
	#trumpet{
		position: relative;
	}
	/* 共同属性 */
	/* *************************************************************** */
	#trumBar,#trumBarB,#trumBarC,#trumBarD,#trumBar::before,#trumBarB::before,#trumBarC::before,#trumBarD::before,
	#trumBar::after,#trumBarB::after,#trumBarC::after,#trumBarD::after{
		position: absolute;
		width: 9rem;
		height: 9rem;
		border-radius: 1rem 20rem 1rem 15rem;
		transform-origin: 100% 100%;
		background: linear-gradient(to bottom,
		#ff0000 0%,#ffffff 30%,#82cffe 65%,#044e83 100%
		);
		border: 0.2rem double ;
		animation: animation 3s infinite cubic-bezier(1, 0.5, 0.2, 0.9);
	}
	@keyframes animation{
		30%{
			opacity: 0.5;
		}
		60%{
			opacity: 0.3;
		}
		90%{
			opacity: 1;
		}
	}
	#trumBar,#trumBarB,#trumBarC,#trumBarD{
		left: 18%;
		top: 4rem;	
		box-shadow: -1px 1px #3e3e3e, -2px 2px #4b4b4b, -3px 3px #585858, -4px 4px #4b4b4b,
			-5px 5px #5a5a5a, -6px 6px #9e9e9e, -7px 7px #3b3b3b, -8px 8px #ffffff,
			0 0 25px 2px rgba(255, 255, 255, 1.0);
	}
	#trumBar::before,#trumBarB::before,#trumBarC::before,#trumBarD::before{
		content: '';
		left: 0;
		top: 0;	
		transform: rotate(30deg);		
		box-shadow: 1px 1px #3e3e3e, 2px 2px #4b4b4b, 3px 3px #585858, 4px 4px #4b4b4b,
			5px 5px #5a5a5a, 6px 6px #9e9e9e, 7px 7px #3b3b3b, 8px 8px #ffffff,
			0 0 25px 2px rgba(255, 255, 255, 1.0);
	}
	#trumBar::after,#trumBarB::after,#trumBarC::after,#trumBarD::after{
		content: '';
		left: 0;
		top: 0;
		transform: rotate(60deg);
		box-shadow: 1px 1px #3e3e3e, 2px 2px #4b4b4b, 3px 3px #585858, 4px 4px #4b4b4b,
			5px 5px #5a5a5a, 6px 6px #9e9e9e, 7px 7px #3b3b3b, 8px 8px #ffffff,
			0 0 25px 2px rgba(255, 255, 255, 1.0);
	}
	/* *************************************************************** */
	
	
	/* 不同属性 */
	#trumBarB{
		animation: trumBarB 1s forwards cubic-bezier(1, 0.5, 0.2, 0.9);
	}
	@keyframes trumBarB{
		100%{
			transform: rotate(90deg);
			box-shadow: -1px 1px #3e3e3e, -2px 2px #b4b4b4, 0 0 2rem 0 rgba(0, 0, 0, 1);  
		}
	}
	#trumBarC{
		animation: trumBarC 1s forwards cubic-bezier(1, 0.5, 0.2, 0.9);
	}
	@keyframes trumBarC{
		100%{
			transform: rotate(180deg);
			box-shadow: none;
		}
	}
	#trumBarD{
		animation: trumBarD 1s forwards cubic-bezier(1, 0.5, 0.2, 0.9);
	}
	@keyframes trumBarD{
		100%{
			transform: rotate(270deg);
			box-shadow: none;
		}
	}
	#trumBar::before{
		box-shadow: -1px 1px #3e3e3e, -2px 2px #4b4b4b, -3px 3px #585858, -4px 4px #4b4b4b,
			-5px 5px #888888, -6px 6px #9e9e9e,
			0 0 2rem 0 rgba(0, 0, 0, 1);
	}
	#trumBar::after{
		box-shadow: -1px 1px #3e3e3e, -2px 2px #4b4b4b, -3px 3px #888888, -4px 4px #9e9e9e,
			0 0 2rem 0 rgba(0, 0, 0, 1);
	}
	#trumBarB::before{
		box-shadow: 1px 1px #3e3e3e, 2px 2px #4b4b4b, 3px 3px #585858, 4px 4px #ffffff,
			0 0 2rem 0 rgba(0, 0, 0, 1);
	}
	#trumBarB::after{
		box-shadow: 1px 1px #747474, 2px 2px  #ffffff,
			0 0 2rem 0 rgba(0, 0, 0, 1);
	}
	#trumBarC::before{
		box-shadow: none;
	}
	#trumBarC::after{
		box-shadow: none;
	}
	#trumBarD::before{
		box-shadow: -1px -1px #3e3e3e, -2px -2px #4b4b4b, -3px -3px #585858, -4px -4px #ffffff,
			0 0 2rem 0 rgba(0, 0, 0, 1);
	}
	#trumBarD::after{
		box-shadow: -1px -1px #3e3e3e, -2px -2px #4b4b4b, -3px -3px #585858, -4px -4px #4b4b4b,
			-5px -5px #5a5a5a, -6px -6px #9e9e9e, -7px -7px #3b3b3b, -8px -8px #ffffff,
			0 0 2rem 0 rgba(0, 0, 0, 1);
	}
	#trumBarB::before,#trumBarC::before,#trumBarD::before{
		transform: rotate(30deg);
	}
	#trumBarB::after,#trumBarC::after,#trumBarD::after{
		transform: rotate(60deg);
	}
	#keyBoard{
		position: relative;
		width: 100%;
		height: 50rem;
		top: 80%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
>>>>>>> e377521 (“提交”)
	.boardA{
		width: 66.6rem;
		height: 7rem;
		bottom: 2%;
		left: 0;
		background: linear-gradient(to bottom,
		#56a1ec 0%,#070707 5%,#282828 20%,  #5f5f5f 40%,#cacaca 50%,#6c6c6c 60%,
		#2d2f31 79%,#c6c6c6 80%, #4d4d4d 81%,#f1f1f1 90%,#000000 100%
		);
		position: absolute;
		color:#ffffff;
		text-align: center;
		font-size: 1.2rem;
	}
	.boardB{
		width: 2.7rem;
		height: 15rem;
		bottom: 1.5%;
		left: -5%;
		border-radius: 3px;
		background: linear-gradient(to left,
		#ffffff 0%,#20211f 2%,#b1b1b1 20%,  #b8b8b8 30%,#7d7d7d 40%,#6c6c6c 50%,
		#3c3f41 70%,#c6c6c6 75%, #4d4d4d 76%,#f1f1f1 90%,#000000 100%
		);
		position: absolute;
		border-bottom: 0.5rem double #d4d4d4;
	}
	.boardB::before{
		content: "";
		width: 2.7rem;
		height: 8.2rem;
		top: -55%;
		left: 54%;
		background: linear-gradient(to left,
		#ffffff 0%,#20211f 2%,#8d8d8d 20%,  #c3c3c3 30%,#7d7d7d 40%,#6c6c6c 50%,
		#3c3f41 70%,#c6c6c6 75%, #4d4d4d 76%,#f1f1f1 90%,#000000 100%
		);
		transform: skew(-19deg);
		position: absolute;
	}
	.boardB::after{
		content: "";
		width: 2.7rem;
		height: 12rem;
		top: -53%;
		left: 80%;
		background: linear-gradient(-70deg,#666666 ,#3d3d3d,#000000);
		box-shadow: 12px 0 20px -1px rgba(0, 0, 0, 1);
		transform: skewX(-19deg);
		position: absolute;
		z-index: -1;
	}
	.boardC{
		width: 2.7rem;
		height: 15rem;
		bottom: 2.5%;
		right: -26.1%;
		background: linear-gradient(to right,
		#ffffff 0%,#20211f 2%,#b1b1b1 20%,  #b8b8b8 30%,#7d7d7d 40%,#6c6c6c 40%,
		#3c3f41 70%,#c6c6c6 75%, #4d4d4d 76%,#f1f1f1 90%,#000000 100%
		);
		position: absolute;
		border-bottom: 0.5rem double #d4d4d4;
	}
	.boardC::before{
		content: "";
		width: 2.7rem;
		height: 8.2rem;
		top: -55%;
		right: 75%;
		background: linear-gradient(to right,
		#ffffff 0%,#20211f 2%,#8d8d8d 20%,  #c3c3c3 30%,#7d7d7d 40%,#6c6c6c 50%,
		#3c3f41 70%,#c6c6c6 75%, #4d4d4d 76%,#f1f1f1 90%,#000000 100%
		);
		transform: skew(26deg);
		position: absolute;
	}
	.boardC::after{
		content: "";
		width: 2.2rem;
		height: 13rem;
		top: -55%;
		right: 135%;
		background: linear-gradient(-70deg,#666666 ,#3d3d3d,#000000);
		box-shadow: -12px 0 20px -1px rgba(0, 0, 0, 1.0);
		transform: skewX(26deg);
		position: absolute;
		z-index: -1;
	}
<<<<<<< HEAD
	#keyBoard{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		background-color: rgba(206, 206, 206, 0.2);
	}
=======

>>>>>>> e377521 (“提交”)
	.firstLine,.secondLine,.thirdLine,.fourthLine,.fifthLine,.sixthLine{
		display: flex;
	}
	.firstLine p, .secondLine p, .thirdLine p, .fourthLine p, .fifthLine p, .sixthLine p{
		width: 2.3rem;
		height: 2.3rem;
		line-height: 2.5rem;
		margin-left: 5px;
		
		transition: 0.5s;
		color: #d4ffff;
		box-shadow: 0 10px 10px -10px rgba(255, 255, 255, 0.7);
		border-right: #9f9f9f ridge 0.3rem;
		border-left: #9f9f9f groove 0.3rem;
		border-top: #000000 solid 0.1rem;
		border-bottom: #888888 groove 0.7rem ;
		background: linear-gradient(to bottom,
		#222222 0%,#464646 20%,  #5d5d5d 25%,#5a5a5a 35%,
		#8c8c8c 50%,#878787 51%, #676767 66%,#464646 80%,
		#222222 100%);
	}
	.firstLine p:hover,.secondLine p:hover,.thirdLine p:hover,.fourthLine p:hover, .fifthLine p:hover, .sixthLine p:hover{
		color: #002435;
		background-color: linear-gradient(to bottom, #538ca5 0%,#87d0f7 20%,  #99c6d5 25%,#acdff0 35%,#d0ffff 50%,#ecfdfb 51%, #99c6d5 66%,#87d0f7 80%,#538ca5 100%);
		box-shadow: 0 0 20px 0 white;
		border-right: #39718f ridge 0.2rem;
		border-left: #39718f groove 0.2rem;
		border-top: #224556 solid 0.1rem;
		border-bottom: #4580c8 groove 0.6rem;
		animation: vibrate-1 0.1s linear  both;
	}
	@keyframes vibrate-1 {
	  0% {
	    -webkit-transform: translate(0);
	            transform: translate(0);
	  }
	  20% {
	    -webkit-transform: translate(-2px, 2px);
	            transform: translate(-2px, 2px);
	  }
	  40% {
	    -webkit-transform: translate(-2px, -2px);
	            transform: translate(-2px, -2px);
	  }
	  60% {
	    -webkit-transform: translate(2px, 2px);
	            transform: translate(2px, 2px);
	  }
	  80% {
	    -webkit-transform: translate(2px, -2px);
	            transform: translate(2px, -2px);
	  }
	  100% {
	    -webkit-transform: translate(0);
	            transform: translate(0);
	  }
	}
</style>

