<template>
	<div class="tool_container">
		<template v-for="tool in toolArr" :key="tool.id">
			<div>
				<img  :src="tool.imgSrc" src="">
				<a target="_blank" :href="tool.addresses">{{tool.title}}</a>
			</div>
		</template>	  
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 动态绑定图片src时，要使用require，否则会被webpack当成网络图片，直接去网络上找，进而出现404找不到的情况
				//参考 https://www.jianshu.com/p/c3c06164feb5
				toolArr:[
					{id:'001', title:'After Effect', imgSrc:require('../../assets/toolImg/AE.png') ,addresses:'https://www.adobe.com/cn/products/aftereffects.html'},
					{id:'002', title:'Media Encoder', imgSrc:require('../../assets/toolImg/ME.png') ,addresses:'https://www.adobe.com/cn/products/media-encoder.html'},
					{id:'003', title:'PhotoShop', imgSrc:require('../../assets/toolImg/AE.png') ,addresses:'https://www.adobe.com/cn/products/photoshop.html'},
					{id:'004', title:'百度云网盘', imgSrc:require('../../assets/toolImg/Baidu.png') ,addresses:'https://pan.baidu.com/download#win'},
					{id:'005', title:'网易云音乐', imgSrc:require('../../assets/toolImg/CloudMusic.png') ,addresses:'https://music.163.com/#/download'},
					{id:'006', title:'EA games', imgSrc:require('../../assets/toolImg/EA.png') ,addresses:'https://www.ea.com/zh-cn/games'},
					{id:'007', title:'Epic games', imgSrc:require('../../assets/toolImg/Epic.png') ,addresses:'https://www.epicgames.com/site/zh-CN/home?sessionInvalidated=true'},
					{id:'008', title:'火绒安全软件', imgSrc:require('../../assets/toolImg/Fire.png'),addresses:'https://www.huorong.cn/'},
					{id:'009', title:'Git工具', imgSrc:require('../../assets/toolImg/Git.png'),addresses:'https://git-scm.com/'},
					{id:'010', title:'Xbox', imgSrc:require('../../assets/toolImg/Xbox.png'),addresses:'https://www.xbox.com/zh-CN/'},
					{id:'011', title:'HbuilderX', imgSrc:require('../../assets/toolImg/Hbuilder.png'),addresses:'https://dcloud.io/hbuilderx.html'},
					{id:'012', title:'IntelliJ IDEA', imgSrc:require('../../assets/toolImg/IDEA.png'),addresses:'https://www.jetbrains.com/idea/'},
					{id:'013', title:'Navicat', imgSrc:require('../../assets/toolImg/Navicat.png'),addresses:'https://navicat.com.cn/'},
					{id:'014', title:'Origin', imgSrc:require('../../assets/toolImg/Origin.png'),addresses:'https://www.origin.com/hkg/en-us/'},
					{id:'015', title:'Steam', imgSrc:require('../../assets/toolImg/Steam.png'),addresses:'https://store.steampowered.com/'},
					{id:'016', title:'Unity', imgSrc:require('../../assets/toolImg/Unity.png'),addresses:'https://unity.cn/'},
					{id:'017', title:'Visual Studio', imgSrc:require('../../assets/toolImg/Visual.png'),addresses:'https://visualstudio.microsoft.com/zh-hans/'},
					{id:'018', title:'VScode', imgSrc:require('../../assets/toolImg/VScode.png'),addresses:'https://code.visualstudio.com/'},
				],
			}
		},
	}
</script>

<style scoped>
	.tool_container{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.tool_container div{
		width: 80px;
		height: 120px;
	}
	.tool_container div:hover{
		background-color: rgba(0,0,0,0.1);
	}
	
	.tool_container div:hover a{
		color: #4e83b5;
	}
	.tool_container img{
		width: 50px;
		height: 50px;
		padding: 3px;
		margin: 5px 0;
		background-size: cover;
		border: 1px solid #5ba7c8;
		border-radius: 10px;
	}
	.tool_container a{
		display: block;
		text-decoration: none;
		color: #000000;
		font-weight: bolder;
		margin: 5px ;
		word-wrap: normal;
	}

</style>
