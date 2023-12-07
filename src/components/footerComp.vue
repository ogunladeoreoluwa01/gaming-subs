<!-- @format -->

<template>
	<footer>
		<div class="TopSec">
			<div class="infodesc">
				<div class="logo">
					<img
						src="../assets/Vector.png"
						alt="" />
					<h3>GameHub</h3>
				</div>
				<div class="info">
					<p>
						your ultimate destination for the latest in gaming news, reviews,
						and updates. We are passionate about bringing you the best content
						from the gaming world and creating a community where gamers can
						connect, share, and explore together
					</p>
				</div>
				<div class="socialLinks">
					<div
						class="soc"
						v-for="social in socials"
						:key="social.name">
						<router-link
							:to="social.link"
							class="socialLink"
							@click="toggleMenuClose()"
							><i :class="social.name"></i
						></router-link>
					</div>
				</div>
			</div>

			<div class="nxtSection">
				<h3>WEBSITE</h3>
				<ul class="Nav-links">
					<li
						class="nav-link-item"
						v-for="link in links"
						:key="link.name">
						<router-link
							:to="link.link"
							class="links"
							>{{ link.name }}</router-link
						>
					</li>
				</ul>
			</div>
			<div class="nxtSection">
				<h3>Top Games</h3>
				<ul class="TopGames Nav-links">
					<li
						class="nav-link-item"
						v-for="game in gameLinks"
						:key="game">
						<router-link
							:to="game.link"
							class="links"
							>{{ game.name }}</router-link
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="BottomSec">
			<div class="righttxt">
				<p>Privacy Policy</p>
				<p>Terms & Conditions</p>
				<p>Copyrights</p>
			</div>
			<p>All copyrights reserved ©GamingHub, 2023</p>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			socials: [
				{ name: "fa-brands fa-discord fa-lg", link: "/" },
				{ name: "fa-brands fa-x-twitter fa-lg", link: "/" },
				{ name: "fa-brands fa-instagram fa-lg", link: "/" },
				{ name: "fa-brands fa-facebook-f fa-lg", link: "/" },
				{ name: "fa-brands fa-youtube fa-lg", link: "/" },
				{ name: "fa-brands fa-tiktok fa-lg", link: "/" },
				{ name: "fa-brands fa-twitch fa-lg", link: "/" },
			],
			links: [
				{ name: "Home", link: "/" },
				{ name: "About", link: "/about" },
				{ name: "Contact", link: "/contact" },
				{ name: "Article", link: "/article" },
				{ name: "FAQ", link: "/faq" },
			],
			gameLinks: [
				{ name: "Minecraft", link: "/" },
				{ name: "Call of Duty: Warzone", link: "/" },
				{ name: "Fortnite", link: "/" },
				{ name: "Apex Legends", link: "/" },
				{ name: "Counter-Strike: Global Offensive", link: "/" },
				{ name: "Overwatch", link: "/" },
				{ name: "Rainbow Six Siege", link: "/" },
				{ name: "Valorant", link: "/" },
				{ name: "Destiny 2", link: "/" },
				{ name: "Battlefield V", link: "/" },
			],
		};
	},
};
</script>

<style scoped>
footer {
	width: 100vw;
	/* height: 25rem; */
	background-color: rgba(25, 37, 10, 0.2);
	display: flex;
	flex-direction: column;
}
.TopSec {
	margin: 2rem 5rem;
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-column-gap: 50px;
	grid-row-gap: 0px;
}
.BottomSec {
	background-color: #97f123;
	color: #ffff;
	min-height: 50px;
	display: flex;
	gap: 200px;
	border: none;
	justify-content: center;
	align-items: center;
}
.BottomSec p {
	font-weight: 600;
}
.righttxt {
	display: flex;
	align-items: center;
	gap: 30px;
}
.logo {
	display: flex;
	align-items: center;
	gap: 5px;
}
.logo h3 {
	font-size: 22px;
	font-style: oblique;
	font-weight: 900;
}
.logo img {
	width: 36px;
	height: 32px;
}
.info {
	width: 360px;
}
.info p {
	font-size: 14px;
	color: rgba(25, 37, 10, 0.6);
	font-weight: 600;
	line-height: 156.3%; /* 25.008px */
	letter-spacing: -0.32px;
}
.infodesc {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.socialLinks {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 15px;
	height: 35px;
}
.soc a {
	text-decoration: none;
	color: #19250a;
}

.socialLink:hover {
	transform: translateY(2px);
}
.fa-brands {
	transition: all 0.3s ease-in-out;
}
.fa-brands:hover {
	transform: scale(1.2);
}
.nxtSection {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.nxtSection h3 {
	font-size: 22px;
	font-style: italic;
	font-weight: 800;
}
.Nav-links {
	display: flex;
	flex-direction: column;
	gap: 2px;
	list-style-type: none;
}
.links {
	font-size: 14.5px;
	color: rgba(25, 37, 10, 0.6);
	font-weight: 600;
	line-height: 156.3%; /* 25.008px */
	letter-spacing: -0.32px;
	text-decoration: none;
	transition: all 0.3s ease-in-out;
}
.links:hover {
	font-size: 16px;
	color: #19250a;
	transform: translateY(2px);
}
/* not to self uncomment this when routes for the each top game section is set up  */
/* .links.router-link-exact-active {
	font-size: 16px;
	color: #19250a;
	transform: translateY(2px);	
} */

.TopGames {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 50px;
	grid-row-gap: 0px;
}

@media (max-width: 1200px) {
	.BottomSec p {
	padding: 10px 10px 0 10px;
	border-bottom: 1.5px solid #ffff;
}
	.TopSec {
		margin: 2rem 5rem;
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-column-gap: 100px;
		grid-row-gap: 50px;
	}
	@media (max-width: 768px) {
		.TopSec {
			margin: 2rem 5rem;
			display: grid;
			grid-template-columns: repeat(1, auto);
			grid-column-gap: 200px;
			grid-row-gap: 50px;
		}
	}
}
@media (max-width: 1024px) {
	.BottomSec {
		background-color: #97f123;
		color: #ffff;
		min-height: 150px;
		display: flex;
		flex-wrap: wrap;
		gap: 1px;
		justify-content: center;
		align-items: center;
	}
}
@media (max-width: 415px) {
	.TopSec {
		margin: 20px;
	}
	.BottomSec {
		gap: 0;
	}
	.BottomSec p {
		margin: 0;
		font-size: 14px;
		padding: 0.5px 0.5px 0 0.5px;
		border-bottom: 1.5px solid #ffff;
	}
}
</style>
