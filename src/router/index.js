import { createRouter, createWebHashHistory } from "vue-router";

// 批量导入
// const routes = [];
//  importPages(require.context('../components', true, /\.vue$/,'lazy'))
//  function importPages (r) {
//     r.keys().forEach(key => {
//       console.log(key)
//       routes.push({ path: (key.split('.'))[1], component: ()=>r(key)})
//     });
//   }

const routes = [
	{ path: "/", name: "app", component: () => import("@/App.vue") },

	{ path: "/aphorism", name: "aphorism", component: () => import("@/components/Aphorism.vue") },
	{ path: "/landscape", name: "landscape", component: () => import("@/components/Landscape.vue") },
	{
		path: "/game",
		name: "game",
		component: () => import("@/components/Game.vue"),
		redirect: "/game/shop-steam",
		children: [
			{ path: "shop-steam", name: "shop-steam", component: () => import("../components/GameSubApp/ShopSteam.vue") },
			{ path: "warehouse-steam", name: "warehouse-steam", component: () => import("../components/GameSubApp/WarehouseSteam.vue") },
			{ path: "community-steam", name: "community-steam", component: () => import("../components/GameSubApp/CommunitySteam.vue") },
			{ path: "user-steam", name: "user-steam", component: () => import("../components/GameSubApp/UserSteam.vue") },
		],
	},
	{
		path: "/music",
		name: "music",
		component: () => import("@/components/Music.vue"),
		redirect: "/music/recommend",
		children: [
			// ---------子路由
			{ path: "boke", name: "boke", component: () => import("../components/MusicSubApp/Boke.vue") },
			{ path: "recommend", name: "recommend", component: () => import("../components/MusicSubApp/Recommend.vue") },
			{ path: "community", name: "community", component: () => import("../components/MusicSubApp/Community.vue") },
			{
				path: "choiceness",
				name: "choiceness",
				component: () => import("../components/MusicSubApp/Choiceness.vue"),
				redirect: "/music/choiceness/Recommend-C",
				children: [
					{ path: "MusicPlaza-C", name: "MusicPlaza-C", component: () => import("../components/ChoicenessApp/MusicPlaza-C.vue") },
					{ path: "RankingList-C", name: "RankingList-C", component: () => import("../components/ChoicenessApp/RankingList-C.vue") },
					{ path: "VIP-C", name: "VIP-C", component: () => import("../components/ChoicenessApp/VIP-C.vue") },
					{ path: "Recommend-C", name: "Recommend-C", component: () => import("../components/ChoicenessApp/Recommend-C.vue") },
					{ path: "Singer-C", name: "Singer-C", component: () => import("../components/ChoicenessApp/Singer-C.vue") },
				],
			},
			{ path: "my-like", name: "my-like", component: () => import("../components/MusicSubApp/MyLike.vue") },
			{ path: "recently-played", name: "recently-played", component: () => import("../components/MusicSubApp/RecentlyPlayed.vue") },
			{ path: "my-boke", name: "my-boke", component: () => import("../components/MusicSubApp/MyBoke.vue") },
			{ path: "my-collection", name: "my-collection", component: () => import("../components/MusicSubApp/MyCollection.vue") },
			{ path: "music-download", name: "music-download", component: () => import("../components/MusicSubApp/MusicDownload.vue") },
			{ path: "local-music", name: "local-music", component: () => import("../components/MusicSubApp/LocalMusic.vue") },
			{ path: "music-cloud-disk", name: "music-cloud-disk", component: () => import("../components/MusicSubApp/MusicCloudDisk.vue") },
			{ path: "year-song-list2023", name: "year-song-list2023", component: () => import("../components/MusicSubApp/CreatedSongList/YearSongList2023.vue") },
			{ path: "best-of-decade", name: "best-of-decade", component: () => import("../components/MusicSubApp/CreatedSongList/BestOfDecade.vue") },
			{ path: "casual-collection", name: "casual-collection", component: () => import("../components/MusicSubApp/CreatedSongList/CasualCollection.vue") },
			{ path: "learn-list", name: "learn-list", component: () => import("../components/MusicSubApp/CreatedSongList/LearnList.vue") },
			{ path: "death-stranding", name: "death-stranding", component: () => import("../components/MusicSubApp/CollectedSongList/DeathStranding.vue") },
			{ path: "xenoblade", name: "xenoblade", component: () => import("../components/MusicSubApp/CollectedSongList/Xenoblade.vue") },
			{ path: "dying-light2", name: "dying-light2", component: () => import("../components/MusicSubApp/CollectedSongList/DyingLight2.vue") },
			{ path: "gris", name: "gris", component: () => import("../components/MusicSubApp/CollectedSongList/Gris.vue") },
		],
	},
	{ path: "/share_video", name: "share_video", component: () => import("@/components/ShareVideo.vue") },
	{
		path: "/docu",
		name: "docu",
		redirect: "/docu/calendar", //重定向到第一个子路由
		component: () => import("@/components/Document.vue"),
		children: [
			// ---------子路由
			{ path: "calculator", name: "calculator", component: () => import("../components/FuncApp/Calculator.vue") },
			{ path: "convertor", name: "convertor", component: () => import("../components/FuncApp/Convertor.vue") },
			{ path: "calendar", name: "calendar", component: () => import("../components/FuncApp/Calendar.vue") },
		],
	},
	{ path: "/like", name: "like", component: () => import("@/components/Like.vue") },
];
const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});
export default router;
