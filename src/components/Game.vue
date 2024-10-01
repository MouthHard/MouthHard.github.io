<template>
	<div id="gameHeader">
		<header>
			<section>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
						<g fill="currentColor">
							<path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006l4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844l-.001-.04a3.046 3.046 0 0 1 3.042-3.043a3.046 3.046 0 0 1 3.042 3.043a3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11a2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z" />
							<path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165a1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029a2.03 2.03 0 0 0 2.027-2.029a2.03 2.03 0 0 0-2.027-2.027a2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048a1.524 1.524 0 0 1 .002-3.048" />
						</g>
					</svg>
					斯缇姆
				</button>
				<button>查看</button>
				<button>好友</button>
				<button>游戏</button>
				<button>帮助</button>
			</section>
			<section>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 1024 1024">
						<path
							fill="currentColor"
							d="m892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8M760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8zm174 132H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3c16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1" />
					</svg>
				</button>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 22 22">
						<path fill="currentColor" d="M12 20v1h-2v-1H8v-2h6v2zM2 15h1v-1h1V6h1V4h1V3h2V2h2V1h2v1h2v1h2v1h1v2h1v8h1v1h1v2H2zm4 0h10V7h-1V5h-2V4H9v1H7v2H6z" />
					</svg>
				</button>
				<div id="gameUser">
					<img src="https://i0.hdslb.com/bfs/archive/83ead87dc9b50bd69b03cec21f8898bf81624080.jpg@672w_378h_1c_!web-home-common-cover.avif" alt="" />
					<h6
						>游音风
						<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
							<path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z" />
						</svg>
					</h6>
				</div>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
						<path fill="currentColor" d="M1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z" />
					</svg>
				</button>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 12 12">
						<path fill="currentColor" d="M2 6a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6" />
					</svg>
				</button>

				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
						<path fill="currentColor" d="M20 9V6h-3V4h3q.825 0 1.413.588T22 6v3zM2 9V6q0-.825.588-1.412T4 4h3v2H4v3zm15 11v-2h3v-3h2v3q0 .825-.587 1.413T20 20zM4 20q-.825 0-1.412-.587T2 18v-3h2v3h3v2zm2-4V8h12v8z" />
					</svg>
				</button>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="1.12em" height="1.2em" viewBox="0 0 1216 1312">
						<path fill="currentColor" d="M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68" />
					</svg>
				</button>
			</section>
		</header>
		<article>
			<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
				<path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 5L6 24l18 19V31h18V17H24z" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
				<path fill="currentColor" d="M15.5 8L8 .5V5H0v6h8v4.5z" />
			</svg>

			<div id="gameTab">
				<template v-for="value in routeArr" :key="value.routeId">
					<router-link :to="value.routeName" >{{value.pageName}}</router-link>
				</template>
			</div>
		</article>
		<footer>
			<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 16h5v5M10 8H5V3m14.418 6.003A8 8 0 0 0 5.086 7.976m-.504 7.021a8 8 0 0 0 14.331 1.027" />
			</svg>
			<a href=":;">
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256">
					<path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-72 78.63V184a8 8 0 0 1-16 0v-25.37a24 24 0 1 1 16 0M160 80H96V56a32 32 0 0 1 64 0Z" />
				</svg>

				https://store.steampowered.com/search/?term=%E7%BB%88%E7%82%B9%E7%AB%99
			</a>
		</footer>
	</div>
	<div id="gameTabCon">
		<router-view v-slot="{ Component }">
			<component :is="Component"></component>
		</router-view>
	</div>
</template>
<script setup>
const routeArr = [
	{ routeId: "1", routeName: "/game/shop-steam", pageName: "商店" },
	{ routeId: "2", routeName: "/game/warehouse-steam", pageName: "库" },
	{ routeId: "3", routeName: "/game/community-steam", pageName: "社区" },
	{ routeId: "4", routeName: "/game/user-steam", pageName: "游音风" },
];
</script>
<style lang="less" scoped>
#gameHeader {
	display: flex;
	flex-direction: column;
	background: #151b22;
	height: 15%;

	footer,
	header,
	article {
		display: flex;
		width: 100%;
		height: 33%;
	}
	header {
		justify-content: space-between;
		section {
			display: flex;
			align-items: center;
			justify-content: center;
			button {
				color: #929191;
				background: transparent;
				padding: 10px;
				border: none;
				&:hover {
					color: #ffffff;
					cursor: pointer;
				}
			}
			#gameUser {
				height: 70%;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: 0.5s;
				&:hover {
					background: #172230;
					cursor: pointer;
				}
				img {
					width: 1.5rem;
					height: 1.5rem;
					background-size: 100%;
					border-right: #52a4fc 2px solid;
				}
				h6 {
					color: #71b4fc;
					margin: 0 0 0 5px;
				}
			}
			&:nth-of-type(2) {
				button:nth-of-type(1) {
					color: #ffffff;
					background: #035aab;

					margin: 0 10px 0 0;
					padding: 2px 15px;
					border-radius: 5px;
					&:hover {
						background: #0374ed;
					}
				}
				button:nth-of-type(2) {
					color: #ffffff;
					border-radius: 5px;
					background: #108201;

					margin: 0 10px 0 0;
					padding: 2px 15px;
					&:hover {
						background: #1bca04;
					}
				}
			}
		}
	}
	footer,
	article {
		align-items: center;
		svg {
			margin: 7px 10px;
		}
		a {
			display: flex;
			align-items: center;
		}
		svg,
		a {
			color: #929191;
			&:hover {
				color: #ffffff;
				cursor: pointer;
			}
			&:hover svg {
				color: #ffffff;
			}
		}
	}
	article {
		#gameTab {		
			height: 100%;
			display: flex;
			a {				
				white-space: nowrap;
				font-size: 1.2rem;
				padding: 0.5rem ;
				color: white;
				text-decoration: none;
				transition: 1s;
				&.router-link-active {
					color: rgb(88, 141, 255);
					border-bottom: 2px solid #0374ed;
				}
				&:hover {
					cursor: pointer;
				}
			}
		}
	}
}
#gameTabCon {
	height: 85%;
	background: #14212f;
}
</style>
