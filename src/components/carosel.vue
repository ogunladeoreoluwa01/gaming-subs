<!-- @format -->

<template>
	<div class="heroSect">
		<swiper
			:spaceBetween="30"
			:loop="true"
			:centeredSlides="true"
			:autoplay="{
				delay: 10000,
				disableOnInteraction: false,
			}"
			:pagination="{
				clickable: true,
			}"
			:navigation="true"
			:modules="modules"
			class="mySwiper">
			<swiper-slide>
				<div
					class="heroCarosel"
					style="
						background: linear-gradient(
								69deg,
								rgba(0, 0, 0, 0.7) 0%,
								rgba(0, 0, 0, 0.5) 50%,
								rgba(0, 0, 0, 0.2) 100%
							),
							url('killjoy.png');
					">
					<div class="caroselInfo">
						<div class="carotext">
							<router-link to=""
								><h1 class="mainText">
									VALORANT AGENT CYPHER: LORE & BACKSTORY
								</h1></router-link
							>
							<p class="subText">
								<router-link
									to=""
									id="green"
									>Alex Gordons</router-link
								>, 23 Dec, 2022
							</p>
						</div>
					</div>
				</div></swiper-slide
			>
			<swiper-slide>
				<div
					class="heroCarosel"
					style="
						background: linear-gradient(
								69deg,
								rgba(0, 0, 0, 0.7) 0%,
								rgba(0, 0, 0, 0.5) 50%,
								rgba(0, 0, 0, 0.2) 100%
							),
							url('killjoy.png');
					">
					<div class="caroselInfo">
						<div class="carotext">
							<router-link to=""
								><h1 class="mainText">
									VALORANT AGENT CYPHER: LORE & BACKSTORY
								</h1></router-link
							>
							<p class="subText">
								<router-link
									to=""
									id="green"
									>Alex Gordons</router-link
								>, 23 Dec, 2022
							</p>
						</div>
					</div>
				</div></swiper-slide
			>
		</swiper>
	</div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Autoplay, Pagination, Navigation],
		};
	},
};
</script>

<style scoped>
.swiper {
	width: 1121px;
	height: 637.45px;
}
.mySwiper {
	border-radius: 24px;
}

.swiper-slide {
	font-size: 18px;
	background: #fff;

	/* Center slide text vertically */
	/* display: flex;
  justify-content: center;
  align-items: center; */
}

.swiper-slide img {
	display: block;
	width: 1121px;
	height: 637.45px;
	object-fit: cover;
}
.swiper-slide {
	display: flex;
}
.heroSection {
	margin: 2rem 4.5rem;
	/* width: 1180px; */
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	height: fit-content;
}
.heroSect {
	display: flex;
	flex-direction: column;
	gap: 10px;
	height: fit-content;
	justify-content: center;
	align-content: center;
	align-items: center;
}

.heroCarosel {
	display: flex;
	align-items: flex-end;
	border-radius: 32px;
	padding: 20px;
	width: 1121px;
	height: 637.45px;
}
.carotext {
	align-self: flex-end;
}
.caroselInfo {
	color: #fff;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 50px;
	gap: 150px;
	width: 1000px;
}
.mainText {
	padding-left: 15px;
	border-left: 5px solid #97f123;
	font-size: 48px;
	font-weight: 700;
	line-height: normal;
	width: 700px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
}
.subText {
	padding-left: 16px;
	padding-top: 5px;
	border-left: 5px solid transparent;
}
#green {
	color: #97f123;
	font-weight: 700;
	text-decoration: underline;
}

.navBtns {
	align-self: flex-start;
	width: 60.815px;
	height: 27.308px;
	display: flex;
	gap: 20px;
}

.icon {
	color: #fff;
	transform: scale(1.2);
	transition: all 0.3s ease-in-out;
}
.icon:hover {
	transform: scale(1.4);
	color: #97f123;
}
.availble {
	color: #97f123;
}
.secIncator {
	align-self: center;
	display: flex;
	gap: 7.5px;
}

.rectangle {
	width: 40px;
	height: 5px;
	background: rgba(25, 37, 10, 0.45);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	transition: all 0.3s ease-in-out;
}
.active {
	background: rgba(151, 241, 35, 0.8);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
}
.carotext a {
	text-decoration: none;
	color: #fff;
}

.small {
	background-color: rgba(255, 255, 255, 0.593);
	height: 10px;
}
/* lg */
@media (max-width: 1270px) {
	.heroSect {
		transform: scale(0.9);
	}
}
@media (max-width: 1170px) {
	.heroSect {
		transform: scale(0.9);
		align-self: center;
		margin: 0;
	}
}
@media (max-width: 1024px) {
	.heroSect {
		transform: scale(0.8);
		align-self: center;
		margin: 0;
	}
}

/* md */
@media (max-width: 768px) {
	.heroSect {
		transform: scale(0.7);
		align-self: center;
		margin: 0;
	}
}

/* sm */
@media (max-width: 640px) {
	.heroSect {
		transform: scale(0.5);
		align-self: center;
		margin: 0;
	}
}
@media (max-width: 415px) {
	.heroSect {
		transform: scale(0.4);
		align-self: center;
		margin: 0;
	}
}
</style>
