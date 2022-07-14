<template>
	<div class="main_page">
		<h1>最大值优先队列的学习</h1>
		<h2 >
			题源：
			<a onclick="window.open('https://leetcode.cn/problems/last-stone-weight/')">力扣1046-最后一块石头的重量</a>
		</h2>
		<h5 style="text-align: right;">本文更新于2022.07.07</h5>
		<hr />
		
		<h3>一、原题目描述(力扣1046-最后一块石头的重量)</h3>
		<h5>
			有一堆石头,每块石头的重量都是正整数。每一回合,从中选出两块最重的石头,然后将它们一起粉碎。
			假设石头的重量分别为x和y,且x&lt=y。那么粉碎的可能结果如下:如果x==y,那么两块石头都会被完全粉碎;
			如果x!=y,那么重量为x的石头将会完全粉碎,而重量为y的石头新重量为y-x。
			最后,最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下,就返回0。
		</h5>
		<p>题目解析：这里题目描述的就是在一堆石头里挑两个最重的石头(或者最重和次重)同归于尽，重的一方留下对消后的重量 成为新的石头放回到数组中。
			继续对消直至只剩下一个石头，返回最后那个石头的重量。
		</p>
		
		<p style="color: #2859a8;">我先前的思路是：排序完然后每次挑两个最大的石头出来，但是仔细想想这样每次产生的新石头大小不确定，每次都要重新排序得到两个最重石头
			这样耗费的时间是得不偿失的。后来又想优化，就想着每次记录第三重、第四重的石头(相当于提前准备下一轮的最重和次重的石头)，
			得到的新石头和第三重第四重的石头比较，后来想想 这和重新排没什么区别，于是作罢。
		</p>
		<p>后来又想了一个思路：用单调栈来排，每次从栈顶弹出两个最大数计算后压回栈。这种方法是可行的，写完之后看题解，
			发现官方提供了一个最大优先队列的库,与单调栈的想法不谋而合，题解中可以直接使用最大优先队列
			<font style="font-weight: bold;">MaxPriorityQueue()</font>,而插值和取最大值对应了新的方法
			<font style="font-weight: bold;">max_queue.enqueue(val)</font> 和 
			<font style="font-weight: bold;">max_queue.dequeue()</font>。
			当然这个数据结构是官方提供的，本地要使用该库要自己安装并且自己配置文件.
			详细参考wuuconix大佬的这篇文章https://wuuconix.link/2022/03/20/priorityQueue/
		</p>
		
		
	</div>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
	.main_page{
		position: absolute;
		width: 84%;
		top: 100%;
		left: -8%;
		font-size: 1rem;
		color: #000000;
		background: radial-gradient(circle,#cbcbcb,#eeeeee,#ffffff);
		padding-left: 1rem;
		padding-right: 1rem;
		border-top: 0.8rem double #5f93af;
	}
	.main_page h1{
		font-family: STXingkai;
	}
	.main_page h2{
		font-size: 1rem;
	}
	.main_page h3{
		text-align: left;
	}
	.main_page h5{
		text-align: left;
		text-indent: 2em;
	}
	.main_page p{
		text-align: justify;
		text-justify: inter-ideograph; 
		text-indent: 2rem;
		font-size: 1rem;
	}

	a:hover{
		color: #FFFFFF;
		padding: 0.5rem;
		background-color: #436f96;
		box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.8);
	}
</style>

