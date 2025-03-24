<template>
	<div id="localMusic">
		<h2>本地音乐 300首</h2>
		<div class="buttonGroup">
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
					<path fill="currentColor" d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437" />
				</svg>
				播放全部
			</button>

			<button>。。。</button>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 20 20">
					<path
						fill="currentColor"
						d="M19.295 12a.704.704 0 0 1 .705.709v3.204a.704.704 0 0 1-.7.709a.704.704 0 0 1-.7-.709v-1.125C16.779 17.844 13.399 20 9.757 20c-4.41 0-8.106-2.721-9.709-6.915a.71.71 0 0 1 .4-.917c.36-.141.766.04.906.405c1.4 3.662 4.588 6.01 8.403 6.01c3.371 0 6.52-2.182 7.987-5.154l-1.471.01a.704.704 0 0 1-.705-.704a.705.705 0 0 1 .695-.714zm-9.05-12c4.408 0 8.105 2.721 9.708 6.915a.71.71 0 0 1-.4.917a.697.697 0 0 1-.906-.405c-1.4-3.662-4.588-6.01-8.403-6.01c-3.371 0-6.52 2.182-7.987 5.154l1.471-.01a.704.704 0 0 1 .705.704a.705.705 0 0 1-.695.714L.705 8A.704.704 0 0 1 0 7.291V4.087c0-.392.313-.709.7-.709s.7.317.7.709v1.125C3.221 2.156 6.601 0 10.243 0" />
				</svg>
			</button>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256">
					<path fill="currentColor" d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l29.86 22.4A8 8 0 0 0 128 88h72v16H69.77a16 16 0 0 0-15.18 10.94L40 158.7V64Z" />
				</svg>
				打开目录
			</button>
			<input type="text" placeholder=" 🔍  搜 索 " />
		</div>
		<header>
			<button v-for="(item, index) in headerBtnArr" :class="{ isActive: activeTab == index }" @click="handelToogel(index)">{{ item }}</button>
			<p>
				VIP专享特权含
				<a href="javascript:;">200首VIP专属本地音乐</a>
				<svg @click="closeMsgWindow" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
					<path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13z" clip-rule="evenodd" />
				</svg>
			</p>
		</header>
		<footer>
			<div v-show="activeTab == 0" id="localTabA">
				<table>
					<thead>
						<tr>
							<th>#</th>
							<th @click="changeSongTitleA('songTitleDL', 0)">
								标题
								<h5 id="songTitleDL">{{ songSortArr[0].arr[sortIndex_DL0] }}</h5>
							</th>
							<th @click="changeSongTitleA('albumTitleDL', 1)">
								专辑
								<h5 id="albumTitleDL">{{ songSortArr[1].arr[sortIndex_DL1] }}</h5>
							</th>
							<th @click="changeSongTitleA('timeTitleDL', 2)">
								时长
								<h5 id="timeTitleDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
							</th>
							<th @click="changeSongTitleA('sizeDL', 2)">
								大小
								<h5 id="sizeDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in downloadSingleArr" :key="item.id" @mouseenter="changeTdToPlay($event)" @mouseleave="changePlayToTd($event)">
							<td>{{ item.id }}</td>
							<td class="likeSong">
								<img :src="item.subImgsrc" alt="" />
								<h3>{{ item.songName }}</h3>
								<span>
									<h6 v-for="it in item.tagArr">{{ it }}</h6>
									<h5>{{ item.singer }}</h5>
								</span>
								<h4>
									<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14">
										<path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 3.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25" clip-rule="evenodd" />
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1792 1504">
										<path fill="currentColor" d="M640 640q0-53-37.5-90.5T512 512t-90.5 37.5T384 640t37.5 90.5T512 768t90.5-37.5T640 640m384 0q0-53-37.5-90.5T896 512t-90.5 37.5T768 640t37.5 90.5T896 768t90.5-37.5T1024 640m384 0q0-53-37.5-90.5T1280 512t-90.5 37.5T1152 640t37.5 90.5T1280 768t90.5-37.5T1408 640m384 0q0 174-120 321.5t-326 233t-450 85.5q-110 0-211-18q-173 173-435 229q-52 10-86 13q-12 1-22-6t-13-18q-4-15 20-37q5-5 23.5-21.5T198 1398t23.5-25.5t24-31.5t20.5-37t20-48t14.5-57.5T313 1126q-146-90-229.5-216.5T0 640q0-174 120-321.5t326-233T896 0t450 85.5t326 233T1792 640" />
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
										<path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-6-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
									</svg>
								</h4>
							</td>
							<td>
								{{ item.album }}
							</td>
							<td>{{ item.time }}</td>
							<td>{{ item.size }}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div v-show="activeTab == 1" id="localTabB">
				<aside>
					<h5 @click="changeSongTitleA('singerSort', 1)">
						歌手列表
						<p id="singerSort">{{ songSortArr[1].arr[sortIndex_DL1] }}</p>
					</h5>
					<button v-for="item in sortSingerArr" :key="item.id" :class="{ singerSelectedDom: singerSelected == item.id }" @click="changeSingerSort(item.id)">
						<img :src="item.imgSrc" alt="" />
						<h3>{{ item.singer }}</h3>
						<h4>{{ item.songNum }}</h4>
					</button>
				</aside>
				<main>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th @click="changeSongTitleA('songTitleDL', 1)">
									标题
									<h5 id="songTitleDL">{{ songSortArr[1].arr[sortIndex_DL1] }}</h5>
								</th>
								<th @click="changeSongTitleA('albumTitleDL', 1)">
									专辑
									<h5 id="albumTitleDL">{{ songSortArr[1].arr[sortIndex_DL1] }}</h5>
								</th>
								<th @click="changeSongTitleA('timeTitleDL', 2)">
									时长
									<h5 id="timeTitleDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
								</th>
								<th @click="changeSongTitleA('sizeDL', 2)">
									大小
									<h5 id="sizeDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in downloadSingleArr.filter((obj) => {
									return obj.id === singerSelected;
								})"
								:key="item.id"
								@mouseenter="changeTdToPlay($event)"
								@mouseleave="changePlayToTd($event)">
								<td>{{ item.id }}</td>
								<td class="likeSong">
									<img :src="item.subImgsrc" alt="" />
									<h3>{{ item.songName }}</h3>
									<span>
										<h6 v-for="it in item.tagArr">{{ it }}</h6>
										<h5>{{ item.singer }}</h5>
									</span>
									<h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14">
											<path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 3.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25" clip-rule="evenodd" />
										</svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1792 1504">
											<path fill="currentColor" d="M640 640q0-53-37.5-90.5T512 512t-90.5 37.5T384 640t37.5 90.5T512 768t90.5-37.5T640 640m384 0q0-53-37.5-90.5T896 512t-90.5 37.5T768 640t37.5 90.5T896 768t90.5-37.5T1024 640m384 0q0-53-37.5-90.5T1280 512t-90.5 37.5T1152 640t37.5 90.5T1280 768t90.5-37.5T1408 640m384 0q0 174-120 321.5t-326 233t-450 85.5q-110 0-211-18q-173 173-435 229q-52 10-86 13q-12 1-22-6t-13-18q-4-15 20-37q5-5 23.5-21.5T198 1398t23.5-25.5t24-31.5t20.5-37t20-48t14.5-57.5T313 1126q-146-90-229.5-216.5T0 640q0-174 120-321.5t326-233T896 0t450 85.5t326 233T1792 640" />
										</svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
											<path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-6-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
										</svg>
									</h4>
								</td>
								<td>
									{{ item.album }}
								</td>
								<td>{{ item.time }}</td>
								<td>{{ item.size }}</td>
							</tr>
						</tbody>
					</table>
				</main>
			</div>
			<div v-show="activeTab == 2" id="localTabC">
				<aside>
					<h5 @click="changeSongTitleA('singerSortA', 1)">
						歌手列表
						<p id="singerSortA">{{ songSortArr[1].arr[sortIndex_DL1] }}</p>
					</h5>
					<button v-for="item in sortSingerArr" :key="item.id" :class="{ singerSelectedDom: albumSelected == item.album }" @click="changeAlbumSort(item.album)">
						<img :src="item.imgSrc" alt="" />
						<h3>{{ item.album }}</h3>
						<h4>{{ item.albumNum }}</h4>
					</button>
				</aside>
				<main>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th @click="changeSongTitleA('songTitleDL', 1)">
									标题
									<h5 id="songTitleDL">{{ songSortArr[1].arr[sortIndex_DL1] }}</h5>
								</th>
								<th @click="changeSongTitleA('albumTitleDL', 1)">
									专辑
									<h5 id="albumTitleDL">{{ songSortArr[1].arr[sortIndex_DL1] }}</h5>
								</th>
								<th @click="changeSongTitleA('timeTitleDL', 2)">
									时长
									<h5 id="timeTitleDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
								</th>
								<th @click="changeSongTitleA('sizeDL', 2)">
									大小
									<h5 id="sizeDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in downloadSingleArr.filter((obj) => {
									return obj.album === albumSelected;
								})"
								:key="item.id"
								@mouseenter="changeTdToPlay($event)"
								@mouseleave="changePlayToTd($event)">
								<td>{{ item.id }}</td>
								<td class="likeSong">
									<img :src="item.subImgsrc" alt="" />
									<h3>{{ item.songName }}</h3>
									<span>
										<h6 v-for="it in item.tagArr">{{ it }}</h6>
										<h5>{{ item.singer }}</h5>
									</span>
									<h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14">
											<path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 3.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25" clip-rule="evenodd" />
										</svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1792 1504">
											<path fill="currentColor" d="M640 640q0-53-37.5-90.5T512 512t-90.5 37.5T384 640t37.5 90.5T512 768t90.5-37.5T640 640m384 0q0-53-37.5-90.5T896 512t-90.5 37.5T768 640t37.5 90.5T896 768t90.5-37.5T1024 640m384 0q0-53-37.5-90.5T1280 512t-90.5 37.5T1152 640t37.5 90.5T1280 768t90.5-37.5T1408 640m384 0q0 174-120 321.5t-326 233t-450 85.5q-110 0-211-18q-173 173-435 229q-52 10-86 13q-12 1-22-6t-13-18q-4-15 20-37q5-5 23.5-21.5T198 1398t23.5-25.5t24-31.5t20.5-37t20-48t14.5-57.5T313 1126q-146-90-229.5-216.5T0 640q0-174 120-321.5t326-233T896 0t450 85.5t326 233T1792 640" />
										</svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
											<path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-6-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
										</svg>
									</h4>
								</td>
								<td>
									{{ item.album }}
								</td>
								<td>{{ item.time }}</td>
								<td>{{ item.size }}</td>
							</tr>
						</tbody>
					</table>
				</main>
			</div>
			<div v-show="activeTab == 3" id="localTabD">
				<aside>
					<h5 @click="changeSongTitleA('singerSortB', 1)">
						歌手列表
						<p id="singerSortB">{{ songSortArr[1].arr[sortIndex_DL1] }}</p>
					</h5>
					<button v-for="item in sortSingerArr" :key="item.id" :class="{ singerSelectedDom: albumSelected == item.album }" @click="changeAlbumSort(item.album)">
						<img :src="item.imgSrc" alt="" />
						<h3>{{ item.album }}</h3>
						<h4>{{ item.albumNum }}</h4>
					</button>
				</aside>
				<main>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th @click="changeSongTitleA('songTitleDL', 0)">
									标题
									<h5 id="songTitleDL">{{ songSortArr[0].arr[sortIndex_DL0] }}</h5>
								</th>
								<th @click="changeSongTitleA('albumTitleDL', 1)">
									专辑
									<h5 id="albumTitleDL">{{ songSortArr[1].arr[sortIndex_DL1] }}</h5>
								</th>
								<th @click="changeSongTitleA('timeTitleDL', 2)">
									时长
									<h5 id="timeTitleDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
								</th>
								<th @click="changeSongTitleA('sizeDL', 2)">
									大小
									<h5 id="sizeDL">{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in downloadSingleArr.filter((obj) => {
									return obj.album === albumSelected;
								})"
								:key="item.id"
								@mouseenter="changeTdToPlay($event)"
								@mouseleave="changePlayToTd($event)">
								<td>{{ item.id }}</td>
								<td class="likeSong">
									<img :src="item.subImgsrc" alt="" />
									<h3>{{ item.songName }}</h3>
									<span>
										<h6 v-for="it in item.tagArr">{{ it }}</h6>
										<h5>{{ item.singer }}</h5>
									</span>
									<h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14">
											<path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 3.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25" clip-rule="evenodd" />
										</svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1792 1504">
											<path fill="currentColor" d="M640 640q0-53-37.5-90.5T512 512t-90.5 37.5T384 640t37.5 90.5T512 768t90.5-37.5T640 640m384 0q0-53-37.5-90.5T896 512t-90.5 37.5T768 640t37.5 90.5T896 768t90.5-37.5T1024 640m384 0q0-53-37.5-90.5T1280 512t-90.5 37.5T1152 640t37.5 90.5T1280 768t90.5-37.5T1408 640m384 0q0 174-120 321.5t-326 233t-450 85.5q-110 0-211-18q-173 173-435 229q-52 10-86 13q-12 1-22-6t-13-18q-4-15 20-37q5-5 23.5-21.5T198 1398t23.5-25.5t24-31.5t20.5-37t20-48t14.5-57.5T313 1126q-146-90-229.5-216.5T0 640q0-174 120-321.5t326-233T896 0t450 85.5t326 233T1792 640" />
										</svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
											<path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-6-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
										</svg>
									</h4>
								</td>
								<td>
									{{ item.album }}
								</td>
								<td>{{ item.time }}</td>
								<td>{{ item.size }}</td>
							</tr>
						</tbody>
					</table>
				</main>
			</div>
		</footer>
	</div>
</template>
<script setup>
import { ref } from "vue";

let activeTab = ref(0); //默认选中第一个tab
let sortIndex_DL0 = ref(0);
let sortIndex_DL1 = ref(0);
let sortIndex_DL2 = ref(0);
let buttonIndex = ref(1);
let singerSelected = ref(0);
let albumSelected = ref("Playlist: The Very Best Of Backstreet Boys");
const handelToogel = (index) => {
	activeTab.value = index;
	buttonIndex.value = index + 1;
};
const headerBtnArr = ["默认", "歌手", "专辑", "文件夹"];
const changeSingerSort = (index) => {
	singerSelected.value = index;
};
const changeAlbumSort = (str) => {
	albumSelected.value = str;
};
const closeMsgWindow = () => {
	document.querySelector("header p").style.display = "none";
};
const songSortArr = [
	{ id: 0, arr: [` 默认排序 ⇅`, ` 标题升序 ⇧ `, ` 标题降序 ⇩ `, ` 歌手升序 ⇧ `, ` 歌手降序 ⇩ `] },
	{ id: 1, arr: [` 默认⇅`, ` 升序 ⇧ `, ` 降序 ⇩ `] },
	{ id: 2, arr: [` ⇅`, `  ⇧ `, `  ⇩ `] },
	{ id: 3, arr: [` 默认排序 ⇅`, ` 标题升序 ⇧ `, ` 标题降序 ⇩ `, ` 专辑名升序 ⇧ `, ` 专辑名降序 ⇩ `] },
];
const changeSongTitleA = (id, num) => {
	if (num == 0) {
		document.getElementById(id).innerHTML = songSortArr[num].arr[sortIndex_DL0.value++];
		sortIndex_DL0.value %= songSortArr[num].arr.length;
	} else if (num == 1) {
		document.getElementById(id).innerHTML = songSortArr[num].arr[sortIndex_DL1.value++];
		sortIndex_DL1.value %= songSortArr[num].arr.length;
	} else {
		document.getElementById(id).innerHTML = songSortArr[num].arr[sortIndex_DL2.value++];
		sortIndex_DL2.value %= songSortArr[num].arr.length;
	}
};
const downloadSingleArr = [
	{
		id: 0,
		subImgsrc: "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
		songName: "I Want It That Way",
		singer: "Backstreet Boys",
		album: "Playlist: The Very Best Of Backstreet Boys",
		tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
		time: "01:23",
		size: "8.1 M",
	},
];

const sortSingerArr = [
	{
		id: 0,
		imgSrc: "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
		songNum: "120首",
		singer: "歌手名",
		album: "Playlist: The Very Best Of Backstreet Boys",
		albumNum: "3首",
		folderLocation: "",
	},
	{
		id: 1,
		imgSrc: "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
		songNum: "44首",
		singer: "歌手名",
		album: "A",
		albumNum: "2首",
	},
	{
		id: 2,
		imgSrc: "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
		songNum: "1首",
		singer: "歌手名",
		album: "B",
		albumNum: "5首",
	},
];
let curTdText = "";
const changeTdToPlay = (e) => {
	curTdText = e.target.childNodes[0].innerHTML;
	e.target.childNodes[0].innerHTML = " ▶ ";
};

const changePlayToTd = (e) => {
	e.target.childNodes[0].innerHTML = curTdText;
};
</script>
<style lang="less" scoped>
#localMusic {
	width: 100%;
	height: 100%;
}
.buttonGroup {
	position: relative;
	margin: 2% 0;
	display: flex;
	width: 100%;
	input {
		position: absolute;
		background: rgba(60, 80, 99, 0.5);
		border: none;
		right: 10%;
		top: 10%;
		color: #fff;
		height: 80%;
		width: 10%;
		transition: 0.5s;
		border-radius: 10px;
		&:hover {
			box-shadow: inset 0 0 15px 1px #0067bb;
		}
		&:focus {
			width: 25%;
			outline: none;
			border-bottom: 1px solid #a8cbff;
		}
	}
	button {
		padding: 5px 10px;
		height: 3rem;
		line-height: 2.5rem;
		margin-left: 1rem;
		color: #fff;
		border: none;
		background: #292828;
		text-align: center;
		border-radius: 10px;
		&:nth-of-type(1) {
			background: #24735f;
			&:hover {
				cursor: pointer;
				background: #31997f;
			}
		}
		&:hover {
			cursor: pointer;
			background: #424141;
		}
	}
}
header {
	width: 95%;
	margin-top: 2%;
	padding-left: 4%;
	height: 10%;
	display: flex;
	position: relative;
	button {
		position: relative;
		background: transparent;
		color: #b7b4b4;
		font-size: 1rem;
		margin-right: 5%;
		border: 1px solid transparent;
		&:hover {
			cursor: pointer;
			color: #fff;
		}
		h6 {
			position: absolute;
			font-size: 0.9rem;
			top: -35%;
			right: -20%;
		}
	}
	p {
		margin: 0;
		padding: 15px;
		border-radius: 15px;
		background: #000;
		a {
			color: #3f8bd1;
			&:hover {
				color: #63b0f8;
			}
		}
		svg {
			margin-left: 2rem;
			&:hover {
				transition: 0.5s;
				color: #ff0202;
				cursor: pointer;
			}
		}
	}
	.isActive {
		transition: 0.5s;
		text-align: center;
		color: #fff;
		font-weight: bolder;
		padding: 0 15px;
		border-top: 2px double #fff;
		box-shadow: inset 0 5px 8px -2px #fff;
	}
}
footer {
	width: 95%;
	height: 100%;
	padding-left: 4%;
	display: flex;
	flex-direction: column;

	svg:hover {
		transition: 0.5s;
		color: #0217ff;
		cursor: pointer;
	}

	#localTabA,
	#localTabB,
	#localTabC,
	#localTabD {
		width: 100%;
		svg:hover {
			transition: 0.5s;
			color: #65dd69;
			cursor: pointer;
		}
		table {
			margin-top: 1%;
			width: 95%;
			tr {
				&:hover {
					cursor: pointer;
					background: rgba(111, 111, 111, 0.5);
				}
				&:hover h4 {
					opacity: 1;
				}
			}
			.likeSong {
				display: grid;
				padding-top: 1%;
				align-items: center;
				grid-template-rows: 50% 40%;
				grid-template-columns: 13% 60% 25%;
				img {
					height: 100%;
					width: 3rem;
					border-radius: 10px;
					grid-column: 1 / span 1;
					grid-row: 1 / span 2;
				}
				h3 {
					grid-column: 2 / span 1;
					grid-row: 1 / span 1;
					margin: 0;
					font-size: 1rem;
				}
				h4 {
					display: flex;
					align-items: center;
					justify-content: space-around;
					grid-column: 3 / span 1;
					grid-row: 1 / span 2;
					opacity: 0;
					transition: 0.5s;
				}
				span {
					display: flex;
					grid-column: 2 / span 1;
					grid-row: 2 / span 1;
					align-items: center;
					justify-content: flex-start;
					h6,
					h5 {
						margin: 5px;
					}
					h5 {
						color: #b7b4b4;
						&:hover {
							color: #f4f3f3;
						}
					}
					h6 {
						font-size: 0.6rem;
						color: #ffea00;
						border: 1px solid #ffea00;
						padding: 3px;
						&:hover {
							color: #ff0000;
							border: 1px solid #ff0000;
						}
					}
				}
			}
			th {
				text-align: left;
				color: #b7b4b4;
				padding: 10px;
				position: relative;
				&:hover h5 {
					opacity: 1;
					transition: 0.5s;
				}
				h5 {
					position: absolute;
					margin: 0;
					right: 10%;
					top: 25%;
					opacity: 0;
				}
				&:hover {
					cursor: pointer;
					background: rgba(92, 45, 45, 0.5);
				}
			}

			td:nth-of-type(3) {
				color: #858585da;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				&:hover {
					color: #ffffff;
				}
			}
			th:nth-of-type(1) {
				width: 4%;
			}
			th:nth-of-type(3) {
				width: 20%;
			}
			th:nth-of-type(4) {
				width: 10%;
			}

			td {
				padding-left: 1%;
			}
		}
	}
	#localTabB,
	#localTabC,
	#localTabD {
		height: 100%;
		display: flex;

		aside {
			width: 15%;
			height: 90%;
			margin-top: 1%;
			background: #000;
			resize: horizontal;
			.singerSelectedDom {
				color: #48ff00;
				background: linear-gradient(45deg, #22425c, #7b0138);
				box-shadow: inset 0 0 10px 1px #000;
			}
			button {
				width: 100%;
				height: 10%;
				margin-top: 2%;
				display: grid;
				color: #fff;
				border: none;
				background: transparent;
				grid-template-rows: 50% 50%;
				grid-template-columns: 35% 60%;
				transition: 0.5s;
				&:hover {
					cursor: pointer;
					background: linear-gradient(to bottom, #4e4d4d, #000000);
					box-shadow: inset -10px 0 15px -2px #524d4d;
				}
				img {
					height: 2.5rem;
					width: 2.5rem;
					margin: 5px;
					border-radius: 50%;
					grid-column: 1 / span 1;
					grid-row: 1 / span 2;
				}
				h3 {
					font-size: 0.8rem;
				}
				h4 {
					font-size: 0.7rem;
					color: #a7a5a5;
					&:hover {
						color: #edebeb;
					}
				}
				h3,
				h4 {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					margin-top: 5px;
					text-align: left;
				}
			}
			h5 {
				text-align: left;
				color: #ffffff;
				padding: 10px;
				margin: 0;
				position: relative;
				border-top: 1px solid #fff;
				border-bottom: 1px solid #fff;
				background: rgba(15, 47, 93, 0.5);
				&:hover p {
					opacity: 1;
					transition: 0.5s;
				}
				p {
					color: #b7b4b4;
					position: absolute;
					margin: 0;
					right: 10%;
					top: 25%;
					opacity: 0;
				}
				&:hover {
					cursor: pointer;
					background: rgba(92, 45, 45, 0.5);
				}
			}
		}
		main {
			width: 85%;
			table {
				.likeSong {
					grid-template-columns: 13% 67% 17%;
					img {
						height: 80%;
					}
					span {
						h6 {
							font-size: 0.5rem;
						}
						h5 {
							color: #a5a4a4;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
				td:nth-of-type(3) {
					font-size: 0.8rem;
					white-space: pre-wrap;
					color: #9d9a9a;

					&:hover {
						color: #ffffff;
					}
				}
				th:nth-of-type(1) {
					width: 5%;
				}

				th:nth-of-type(4) {
					width: 7%;
				}
			}
		}
	}
}
</style>
