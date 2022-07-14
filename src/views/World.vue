<template>
	<div style="width: 100%; height: 100%;">
		<div id="main"></div>
	</div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';
	export default {
		data() {
			return{
				
			}
		},
		mounted() {
			this.world3D()
		},
		methods:{
			world3D(){
				var ROOT_PATH = 'https://echarts.apache.org/examples';
				
				var chartDom = document.getElementById('main');
				var myChart = echarts.init(chartDom);
				var option;
				
				option = {
				  backgroundColor: '#000',
				  globe: {
				    baseTexture: "/api/world.topo.bathy.200401.jpg",
				    heightTexture: "/api/world.topo.bathy.200401.jpg",
				    displacementScale: 0.04,
				    shading: 'realistic',
				    environment: "/api/starfield.jpg",
				    realisticMaterial: {
				      roughness: 0.9
				    },
				    postEffect: {
				      enable: true
				    },
				    light: {
				      main: {
				        intensity: 5,
				        shadow: true
				      },
				      ambientCubemap: {
				        texture:"/api/pisa.hdr",
				        diffuseIntensity: 0.2
				      }
				    },
				  }
				};
				
				option && myChart.setOption(option);
			}
		}
	}
</script>

<style scoped="scoped">
	#main{
		width: 100%;
		height: 100%;
		/* background: url(../assets/earth/earth.png);
		background-size: 100% 100%; */
	}
</style>
