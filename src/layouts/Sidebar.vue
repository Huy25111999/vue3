<template>

	<!-- <router-view></router-view> -->
	<div class="sidebar">
		<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
			<div class="logo">
				<img :src="logoURL" alt="Vue" /> 
			</div>

			<div class="menu-toggle-wrap">
				<button class="menu-toggle" @click="ToggleMenu">
					<span class="material-icons">keyboard_double_arrow_right</span>
				</button>
			</div>

			<h3>Menu</h3>
			<div class="menu">
				<router-link to="/home" class="button">
					<span class="material-icons">home</span>
					<span class="text">Home</span>
				</router-link>

				<ul>
					<li>
						<router-link to="/form" class="button">
							<span class="material-icons">description</span>
							<span class="text">Form</span>
						</router-link>
					</li>
					<li>
						<router-link to="/form-validate" class="button">
							<span class="material-icons">description</span>
							<span class="text">Form validate</span>
						</router-link>
					</li>
					<li>
						<router-link to="/modal" class="button">
							<span class="material-icons">description</span>
							<span class="text">Modal</span>
						</router-link>
					</li>
				</ul>

				<router-link to="/login" class="button">
					<span class="material-icons">email</span>
					<span class="text">Login</span>
				</router-link>
			</div>

			<div class="flex"></div>
			
			<div class="menu">
				<router-link to="/settings" class="button">
					<span class="material-icons">settings</span>
					<span class="text">Settings</span>
				</router-link>
			</div>
		</aside>
	</div>
	
</template>

<script setup>
import { ref } from 'vue'
import logoURL from "../assets/image/logo.png"
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style scoped>
	.sidebar{
		height: 100%;
		position: relative;
	}

	aside {
		display: flex;
		flex-direction: column;

		background-color: #1e293b;
		color: #f1f5f9;

		width: calc(2rem + 32px);
		overflow: hidden;
		min-height: 100%;
		padding: 1rem;

		transition: 0.2s ease-in-out;
	}



	aside h3 {
		color:#64748b;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	aside .flex {
			flex: 1 1 0%;
	}
	/* aside .logo {
		margin-bottom: 1rem;
	} */

	.logo img {
		width: 2rem;
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

	}

	.menu-toggle-wrap .menu-toggle {
		transition: 0.2s ease-in-out;
	}

	.menu-toggle-wrap .menu-toggle .material-icons {
		font-size: 2rem;
		color: #f1f5f9;
		transition: 0.2s ease-out;
	}
	.menu-toggle-wrap .menu-toggle .material-icons:hover .material-icons {
		color: #4ade80;
		transform: translateX(0.5rem);
	}


	aside h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	.menu .button {
		display: flex;
		align-items: center;
		text-decoration: none;

		transition: 0.2s ease-in-out;
		padding: 0.5rem 1rem;

	}
	.menu .button{
		display: flex;
		align-items: center;
		text-decoration: none;

		transition: 0.2s ease-in-out;
		padding: 0.5rem 1rem;
	}

	.menu .button .material-icons {
		font-size: 2rem;
		color: #f1f5f9;
		transition: 0.2s ease-in-out;
	}

	.menu .button .text {
		color: #f1f5f9;
		transition: 0.2s ease-in-out;
	}

	.menu .button .text:hover{
		background-color: #334155;
	}

	.menu .button .text:hover .material-icons, .text {
		color: #4ade80;
	}

	.menu .button .router-link-exact-active {
		background-color: #334155;
		border-right: 5px solid #4ade80;
	}
	.router-link-exact-active .material-icons, .text {
		color: #4ade80;
	}

	.menu {
		margin: 0 -1rem;
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	.footer p{
		font-size: 0.875rem;
		color:#64748b;
	}

	.is-expanded {
		width: 200px;
		height: 100%;
	}

	.is-expanded .menu-toggle-wrap {
			top: -3rem;
	}
	.is-expanded .menu-toggle-wrap .menu-toggle {
		transform: rotate(-180deg);
	}

	.is-expanded h3, .is-expanded .button .text {
		opacity: 1;
	}
	
	.is-expanded .button .material-icons {
		margin-right: 1rem;
	}

	.is-expanded .footer {
		opacity: 0;
	}

	button.menu-toggle {
		background: #1e293b;
		border: 0;
	}

	/* @media (min-width: 768px){
		.container {
			max-width: 100%;
		}
	} */

</style>