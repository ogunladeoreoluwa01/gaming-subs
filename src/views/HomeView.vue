<!-- @format -->

<template>
	<section class="heroSection">
<carosel/>
		<SideBarCompVue />
	</section>
	<section class="EverythingTop">
		<topNews/>
	</section>
</template>

<script>
// import topgames from "../components/topgamesSlider.vue";
import SideBarCompVue from "../components/SideBarComp.vue";
import topNews from "../components/topNews.vue";
import carosel from "../components/carosel.vue";

export default {
	components: {
		SideBarCompVue,
		topNews,
		carosel
	},
	name: "HomeView",
};
</script>
<style scoped>
.heroSection {
	margin: 2rem 4.5rem;
	/* width: 1180px; */
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	height: fit-content;
	justify-content: center;
	align-items: flex-start;
}

.EverythingTop {
	margin: 2rem 4.5rem;
	border: 1px solid red;
	display: flex;
	justify-content:flex-start;
	align-items: center;
}

/* lg */
@media (max-width: 1270px) {
.heroSection{
	margin: 1rem 2rem;
}
}
@media (max-width: 1170px) {
	.heroSection{
	margin: 1rem 2rem;

}
}
@media (max-width: 1024px) {
	.heroSection{
	margin: 0;
	gap:0;

}
}

/* md */
@media (max-width: 768px) {
    .heroSect{
transform: scale(0.7);
align-self: center;
margin: 0;
}
}

/* sm */
@media (max-width: 640px) {
    .heroSect{
transform: scale(0.5);
align-self: center;
margin: 0;
}
}
@media (max-width: 415px) {
    .heroSect{
transform: scale(0.4);
align-self: center;
margin: 0;
}
}
</style>
