<!-- @format -->

<template>
	<div class="mainContainer">
		<h2>TOP GAMES</h2>
		<div class="cardContainer">
			<router-link
				to=""
				class="container">
				<div class="img">
					<img
						src="../assets/bx145064-5fa4ZBbW4dqA.jpg"
						alt="" />
				</div>
				<div class="text">
					<h3 class="textpart">Apex Legend</h3>
					<h3 class="ranking">#1</h3>
				</div>
			</router-link>
		
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.mainContainer {
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	padding: 1.25rem;
}
.cardContainer {
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-template-rows: 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 0px;
}

.img img {
	width: 240px;
	height: 320px;
	/* border: 1px solid red; */
	border-radius: 9px;
	background-size: cover;
	background-repeat: no-repeat;
}
.text {
	display: flex;
	gap: 20px;
	align-content: center;
	justify-content: center;
}
.container {
	color: #19250A;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	transition: all 0.3s ease-in-out;
}
.container:hover {
	transform: scale(1.01);
}
.ranking {
	opacity: 0.7;
}
</style>
