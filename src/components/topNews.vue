<!-- @format -->

<template>
	<div class="topNews">
		<h2>TOP ARTICLES</h2>
		<div class="topArticle">
			<img
				src="../assets/Rectangle 152.png"
				alt=""
				class="topArticleImage" />
			<div class="topArticleInfo">
				<p class="authorInfo">
					<router-link to="">Alex Gordon</router-link>,23 Dec, 2022
				</p>
				<h2 class="topTittle">Why Cypher Joined Protocol Sight</h2>
				<p class="topDescription">
					Purus senectus vulputate elit pellentesque. Ut donec pretium,
					curabitur sed proin. Tristique feugiat massa fames faucibus
					condimentum quam at. Sed tellus praesent habitant tortor. Sed aliquet
					dapibus fermentum iaculisurus senectus vulputate elit pellentesque. Ut
					donec pretium, curabitur sed proin. Tristique feugiat massa fames
					faucibus condimentum quam at. Sed tellus praesent habitant tortor. Sed
					aliquet dapibus fermentum iaculi
				</p>
				<router-link
					to=""
					class="link"
					>see more</router-link
				>
			</div>
		</div>
		<div class="otherArticle">
			<div class="otherCard">
				<router-link to="">
					<img
						src="../assets/Rectangle 153.png"
						alt="" />
				</router-link>
				<router-link to="">
					<h3>The Best sova lineups on bind</h3>
				</router-link>
				<p>
					<router-link
						to=""
						id="author">
						John Legend
					</router-link>
					,23 Dec,2022
				</p>
			</div>
			<div class="otherCard">
				<router-link to="">
					<img
						src="../assets/Rectangle 153.png"
						alt="" />
				</router-link>
				<router-link to="">
					<h3>The Best sova lineups on bind</h3>
				</router-link>
				<p>
					<router-link
						to=""
						id="author">
						John Legend
					</router-link>
					,23 Dec,2022
				</p>
			</div>
			<div class="otherCard">
				<router-link to="">
					<img
						src="../assets/Rectangle 153.png"
						alt="" />
				</router-link>
				<router-link to="">
					<h3>The Best sova lineups on bind</h3>
				</router-link>
				<p>
					<router-link
						to=""
						id="author">
						John Legend
					</router-link>
					,23 Dec,2022
				</p>
			</div>
			<div class="otherCard">
				<router-link to="">
					<img
						src="../assets/Rectangle 153.png"
						alt="" />
				</router-link>
				<router-link to="">
					<h3>The Best sova lineups on bind</h3>
				</router-link>
				<p>
					<router-link
						to=""
						id="author">
						John Legend
					</router-link>
					,23 Dec,2022
				</p>
			</div>
			<div class="otherCard">
				<router-link to="">
					<img
						src="../assets/Rectangle 153.png"
						alt="" />
				</router-link>
				<router-link to="">
					<h3>The Best sova lineups on bind</h3>
				</router-link>
				<p>
					<router-link
						to=""
						id="author">
						John Legend
					</router-link>
					,23 Dec,2022
				</p>
			</div>
			<div class="otherCard">
				<router-link to="">
					<img
						src="../assets/Rectangle 153.png"
						alt="" />
				</router-link>
				<router-link to="">
					<h3>The Best sova lineups on bind</h3>
				</router-link>
				<p>
					<router-link
						to=""
						id="author">
						John Legend
					</router-link>
					,23 Dec,2022
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.otherCard {
	width: 350px;
	border: 1px solid yellow;
}
.otherCard {
	width: 350px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 10px;
	/* padding: 5px; */
	margin: 2.5px;
}
.otherCard img {
	border-radius: 12px;
	width: 350px;
}

.otherCard a {
	text-decoration: none;
	color: #19250a;
}
.otherCard p {
	font-size: 14px;
	color: rgba(25, 37, 10, 0.6);
	font-weight: 500;
}
#author {
	color: #97f123;
	font-weight: 600;
	text-decoration: underline;
}
.topNews {
	margin: 0 3.2rem;
	width: 1121px;
	border: 2px solid green;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	padding: 20px;
}
.topArticle {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 0px;
}
.authorInfo {
	font-size: 15px;
}
.authorInfo a {
	font-weight: 800;
	color: #97f123;
	text-decoration: underline;
}
.topArticleInfo {
	width: 520px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.topTittle {
	line-height: 0.9;
}
.topDescription {
	line-height: 0.98;
	height: 70px;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}
.link {
	color: #97f123;
}
.topArticleImage {
	border-radius: 12px;
}
.otherArticle {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-flow: row;
	grid-column-gap: 15px;
	grid-row-gap: 15px;
}
</style>
