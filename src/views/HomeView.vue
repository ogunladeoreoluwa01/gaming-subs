<!-- @format -->

<template>
	<section class="heroSection">
		<div class="heroSect">
			<div class="heroCarosel">
				<div class="caroselInfo">
					<div class="carotext">
						<h1 class="mainText">VALORANT AGENT CYPHER: LORE & BACKSTORY</h1>
						<p class="subText">
							<span class="green">Alex Gordons</span> ,23 Dec, 2022
						</p>
					</div>
					<div class="icons">
						<div class="navBtns">
              <i class="fa-solid "></i>
							<i class="fa-solid fa-circle-chevron-left fa-2xl icon"></i>
							<i class="fa-solid fa-circle-chevron-right fa-2xl icon availble"></i>
						</div>
						<div class="secIncator">
              <div class="rectangle "></div>
              <div class="rectangle small"></div>
              <div class="rectangle small"></div>
              <div class="rectangle small"></div>
            </div>
					</div>
				</div>
			</div>
      <div class="topgamesCarosel">



        
      </div>
		</div>
		<SideBarCompVue />
	</section>
</template>

<script>
import SideBarCompVue from "../components/SideBarComp.vue";

export default {
	components: {
		SideBarCompVue,
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
}
.heroSect {
	border: 1px solid rgb(13, 255, 0);
}
.heroCarosel {
	display: flex;
	align-items: flex-end;
	border-radius: 32px;
	padding: 20px;
	width: 1121px;
	height: 637.45px;
	border: 1px solid red;
	background: linear-gradient(
			69deg,
			rgba(0, 0, 0, 0.7) 0%,
			rgba(0, 0, 0, 0.5) 50%,
			rgba(0, 0, 0, 0.2) 100%
		),
		url(../assets/killjoy.png);
}
.carotext{
  align-self: flex-end;
}
.caroselInfo {
	color: #fff;
	display: flex;
	align-items: center;
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
.green {
	color: #97f123;
	font-weight: 700;
}
.icons{
  display: flex;
  flex-direction: column;
height: 550px;
gap: 470px;
}
.navBtns{
  align-self: flex-start;
  width: 60.815px;
height: 27.308px;
display: flex;
gap: 20px;
}

.icon{
transform: scale(1.2);
transition: all 0.3s ease-in-out;
}
.icon:hover{
transform: scale(1.4);
color: #97f123;
}
.availble{
  color: #97f123;
}
.secIncator{
display: flex;
gap: 7.5px;
}

.rectangle {
  width: 23.5px;
  height: 60px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.small {
  background-color: rgba(255, 255, 255, 0.593);
  height: 10px;

}
</style>
