<!-- @format -->

<template>
	<nav>
		<div class="mainBar">
			<div class="logo">
				<div class="nav-img">
					<img
						src="../assets/Vector.png"
						alt="" />
					<h1>Game<span>Hub</span></h1>
				</div>
				<div class="hamburger">
					<i
						@click="toggleMenuOpen()"
						class="fa fa-bars-staggered">
					</i>
				</div>
			</div>

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
				<li>
					<router-link to="/login">
						<button class="learn-more">
							<span
								class="circle"
								aria-hidden="true">
								<span class="icon arrow"></span>
							</span>
							<span class="button-text"> Get started</span>
						</button>
					</router-link>
				</li>
			</ul>
		</div>
		<transition
			name="custom-animation"
			mode="out-in">
			<div
				class="sideBar"
				v-if="showsidebar">
				<ul class="Nav-links">
					<li>
						<i
							@click="toggleMenuClose()"
							class="fa-regular fa-circle-xmark"></i>
					</li>
					<li
						class="nav-link-item"
						v-for="link in links"
						:key="link.name">
						<router-link
							:to="link.link"
							class="links"
							@click="toggleMenuClose()"
							>{{ link.name }}</router-link
						>
					</li>
					<li>
						<router-link to="/login">
							<button
								class="sidelearn-more"
								id="sidebutton">
								<span
									class="sidecircle"
									aria-hidden="true">
								</span>
								<span class="sidebutton-text"> Get started</span>
							</button>
						</router-link>
					</li>
				</ul>
			</div>
		</transition>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{ name: "Home", link: "/" },
				{ name: "About", link: "/about" },
				{ name: "Contact", link: "/contact" },
				{ name: "Article", link: "/article" },
				{ name: "FAQ", link: "/faq" },
			],
			isActive: false,
			showsidebar: false,
		};
	},
	methods: {
		toggleMenuClose() {
			if (this.showsidebar === true) {
				this.showsidebar = !this.showsidebar;
			}
		},

		toggleMenuOpen() {
			if (this.showsidebar === false) {
				this.showsidebar = !this.showsidebar;
			}
		},
	},
};
</script>

<style scoped>
nav {
	margin: 2.5rem 4.5rem;
	/* width: 90%; */
	/* position: fixed; */
	z-index: 2;
	color: #19250a;
}

.mainBar,
.nav-img,
ul {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.mainBar {
	padding: 10px;
}

.logo {
	display: flex;
	align-items: center;
}

.hamburger {
	font-size: 24px;
	font-weight: 900;
	cursor: pointer;
	display: none;
}

.nav-img h1 {
	font-size: 25px;
	font-style: italic;
	font-weight: 750;
}

.nav-img span {
	color: #97f123;
}

ul {
	list-style: none;
	gap: 20px;
}

ul a {
	color: #19250a;
	text-align: center;
	font-size: 18px;
	font-weight: 700;
	text-decoration: none;
}

ul :hover a {
	color: #97f123;
}

a.router-link-exact-active {
	color: #97f123;
	border-bottom: #97f123 1px solid ;
	
}

button {
	margin-top: 5px;
	margin-left: 25px;
	cursor: pointer;
	border: none;
	color: #fff;
	background-color: #97f123;
}
button {
	position: relative;
	display: inline-block;
	cursor: pointer;
	outline: none;
	border: 0;
	vertical-align: middle;
	text-decoration: none;
	background: transparent;
	padding: 0;
	font-size: inherit;
	font-family: inherit;
	text-align: center;
}

button.learn-more {
	width: 12rem;
	height: auto;
}

button.learn-more .circle {
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	position: relative;
	display: block;
	margin: 0;
	width: 3rem;
	height: 3rem;
	background: #97f123;
	border-radius: 1rem;
}

button.learn-more .circle .icon {
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	background: #fff;
}

button.learn-more .circle .icon.arrow {
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	left: 0.625rem;
	width: 1.125rem;
	height: 0.125rem;
	background: none;
}

button.learn-more .circle .icon.arrow::before {
	position: absolute;
	content: "";
	top: -0.29rem;
	right: 0.0625rem;
	width: 0.625rem;
	height: 0.625rem;
	border-top: 0.125rem solid #fff;
	border-right: 0.125rem solid #fff;
	transform: rotate(45deg);
}

button.learn-more .button-text {
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 0.75rem 0;
	margin: 0 0 0 1.85rem;
	color: #19250a;
	font-weight: 700;
	line-height: 1.6;
	text-align: center;
	text-transform: uppercase;
}

button:hover .circle {
	width: 100%;
}
button:hover .button-text{
	color: #fff;
}
button:hover .circle .icon.arrow {
	background: #fff;
	transform: translate(1rem, 0);
}
.sideBar {
	background-color: #97f123;
	position: fixed;
	top: 0;
	right: 0px;
	z-index: 99;
	width: 300px;
	height: 100vh;
	transition: all 0.5s ease;
	-webkit-animation: slide-in-right 1s forwards;
	animation: slide-in-right 1s forwards;
}
.sideBar ul {
	margin-top: 40px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 25px;
}

.sideBar a:hover {
	color: #fff;
}
.sideBar a.router-link-exact-active {
	color: #fff;
}
.fa-circle-xmark {
	color: #97f123;
	font-size: 26px;
	font-weight: 500;
	padding: 15px;
	border-radius: 50%;
	background-color: #fff;
	transition: all 0.5s ease;
}
.fa-circle-xmark:hover {
	font-weight: 900;
	background-color: #19250a;
}

#sidebutton {
	position: relative;
	display: inline-block;
	cursor: pointer;
	outline: none;
	border: 0;
	vertical-align: middle;
	text-decoration: none;
	background: transparent;
	padding: 0;
	font-size: inherit;
	font-family: inherit;
	text-align: center;
}

#sidebutton.sidelearn-more {
	width: auto;
	height: auto;
}

#sidebutton.sidelearn-more .sidecircle {
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	position: relative;
	display: block;
	margin: 0;
	width: 11rem;
	height: 3rem;
	background: #fff;
	border-radius: 1rem;
}

#sidebutton.sidelearn-more .sidecircle .sideicon {
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	background: #97f123;
}

#sidebutton.sidelearn-more .sidebutton-text {
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 0.58em 0;
	color: #97f123;
	font-weight: 700;
	line-height: 1.6;
	text-align: center;
	text-transform: uppercase;
}
#sidebutton.sidelearn-more .sidecircle .sideicon.sidearrow::before {
	position: absolute;
	content: "";
	top: -0.29rem;
	right: 0.0625rem;
	width: 0.625rem;
	height: 0.625rem;
	border-top: 0.125rem solid #fff;
	border-right: 0.125rem solid #fff;
	transform: rotate(45deg);
	color: #fff;
}

#sidebutton:hover .sidecircle {
	background-color: #19250a;
}

/* lg */
@media (max-width: 1024px) {
	nav {
		border: 1px solid red;
	}
	.mainBar {
		justify-content: center;
	}
	.logo {
		flex-basis: 500px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.Nav-links {
		display: none;
	}
	.hamburger {
		font-size: 32px;
		display: inline-block;
	}
}

/* md */
@media (max-width: 768px) {
	nav {
		border: 1px solid blue;
	}
}

/* sm */
@media (max-width: 640px) {
	nav {
		margin: 0;
		border: 1px solid greenyellow;
	}
	.mainBar h1 {
		display: none;
	}
}
@media (max-width: 415px) {
	.mainBar {
		margin: 0;
	}
	nav {
		margin: 0;
	}
}

@-webkit-keyframes wobble-hor-bottom {
	0%,
	100% {
		-webkit-transform: translateX(0%);
		transform: translateX(0%);
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
	}

	15% {
		-webkit-transform: translateX(-30px) rotate(-6deg);
		transform: translateX(-30px) rotate(-6deg);
	}

	30% {
		-webkit-transform: translateX(15px) rotate(6deg);
		transform: translateX(15px) rotate(6deg);
	}

	45% {
		-webkit-transform: translateX(-15px) rotate(-3.6deg);
		transform: translateX(-15px) rotate(-3.6deg);
	}

	60% {
		-webkit-transform: translateX(9px) rotate(2.4deg);
		transform: translateX(9px) rotate(2.4deg);
	}

	75% {
		-webkit-transform: translateX(-6px) rotate(-1.2deg);
		transform: translateX(-6px) rotate(-1.2deg);
	}
}

@keyframes wobble-hor-bottom {
	0%,
	100% {
		-webkit-transform: translateX(0%);
		transform: translateX(0%);
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
	}

	15% {
		-webkit-transform: translateX(-30px) rotate(-6deg);
		transform: translateX(-30px) rotate(-6deg);
	}

	30% {
		-webkit-transform: translateX(15px) rotate(6deg);
		transform: translateX(15px) rotate(6deg);
	}

	45% {
		-webkit-transform: translateX(-15px) rotate(-3.6deg);
		transform: translateX(-15px) rotate(-3.6deg);
	}

	60% {
		-webkit-transform: translateX(9px) rotate(2.4deg);
		transform: translateX(9px) rotate(2.4deg);
	}

	75% {
		-webkit-transform: translateX(-6px) rotate(-1.2deg);
		transform: translateX(-6px) rotate(-1.2deg);
	}
}

@-webkit-keyframes text-shadow-drop-tr {
	0% {
		text-shadow: 0 0 0 rgba(0, 0, 0, 0);
	}

	100% {
		text-shadow: 6px -6px 18px rgba(0, 0, 0, 0.35);
	}
}

@keyframes text-shadow-drop-tr {
	0% {
		text-shadow: 0 0 0 rgba(0, 0, 0, 0);
	}

	100% {
		text-shadow: 6px -6px 18px rgba(0, 0, 0, 0.35);
	}
}
.custom-animation-enter,
.custom-animation-leave-to {
	transition: all 0.5s ease;
	-webkit-animation: slide-out-right 1s both;
	animation: slide-out-right 1s both;
}

@-webkit-keyframes slide-in-right {
	0% {
		-webkit-transform: translateX(1000px);
		transform: translateX(1000px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-in-right {
	0% {
		-webkit-transform: translateX(1000px);
		transform: translateX(1000px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
		opacity: 1;
	}
}

/* slide put animation
 */
@-webkit-keyframes slide-out-right {
	0% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
		opacity: 1;
	}
	100% {
		-webkit-transform: translateX(1000px);
		transform: translateX(1000px);
		opacity: 0;
	}
}
@keyframes slide-out-right {
	0% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
		opacity: 1;
	}
	100% {
		-webkit-transform: translateX(1000px);
		transform: translateX(1000px);
		opacity: 0;
	}
}
</style>
