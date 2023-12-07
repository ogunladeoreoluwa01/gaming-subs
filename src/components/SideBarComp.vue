<!-- @format -->

<template>
	<aside>
		<div class="topicContainer">
			<i class="fa-solid fa-bullseye"></i>
			<h3>RECENT ARTICLES</h3>
		</div>
		<div class="CardContainer">
		
			<div class="sideBarCards">
				<img
					src="../assets/Rectangle 138.png"
					alt="" />
				<div class="infoText">
					<h4>Why Cypher Joined Protocol Sight</h4>
					<div class="info">
						<p class="h5"><span>Alex Gordon</span>,</p>
						<p class="p">23/12/2022</p>
					</div>
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
export default {};
</script>

<style scoped>
aside {
	display: flex;
	flex-direction: column;
	margin-left: 60%;
	border-radius: 24px;
	width: 470px;
	height: 1310px;
	align-items: center;
	justify-content: flex-start;
}

.topicContainer {
	width: 400px;
	border-radius: 12px;
	background-color: rgba(25, 37, 10, 0.2);
	align-self: flex-start;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
}
span {
	color: #84d023;
	border-bottom: 1px solid #84d023;
}
.fa-bullseye {
	color: #84d023;
	font-size: 24px;
	padding: 15px;
	border-radius: 12px;
	background-color: white;
}
.CardContainer {
	width: 400px;
	border-radius: 12px;
	background-color: rgba(25, 37, 10, 0.2);
	margin-top: 20px;
	padding: 20px;
	gap: 20px;
	align-self: flex-start;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-items: center;
}
.sideBarCards {
	width: 385px;
	background-color: #fff;
	border-radius: 6px;
	padding: 10px;
	gap: 10px;
	display: flex;
	transition: all 0.5s ease;
}
img {
	width: 145px;
	height: 77px;
	border-radius: 3px;
}
.sideBarCards:hover {
	transform: scale(1.05);
}
.infoText {
	display: flex;
	flex-direction: column;
	gap: 5px;
	align-content: flex-start;
	justify-content: flex-start;
}
.infoText h4 {
	width: 150px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2; /* Adjust the number of lines as needed */
	max-width: 300px;
	font-weight: 400;
	font-size: 18px;
	align-self: flex-start;
}
.h5 {
	color: #19250a;
	width: 120px;
	/* text-decoration: underline; */
	font-size: 12px;
	font-weight: 700;
	margin: 0;
	padding: 0;
}
.p{
	font-size: 12px;
	margin: 0;
	padding: 0;
}
.info {
	height: 20px;
	width: 150px;
	
	align-self: flex-end;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
