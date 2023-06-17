<header>
	<a class="item_menu link" href="/">Home Page</a>
</header>

<div class="main">
	<slot />
</div>

<footer>
	<p>Criado por Israel Joseph</p>
</footer>

<a class="home_button" href="/">
	<img src="home_button.png" alt="Home Button" />
</a>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50px;
		background-color: #00aeff;
		color: #ffffff;
	}

	.item_menu {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120px;
		height: 100%;
		padding: 0px 5px;
		margin: 0px 5px;
		color: #ffffff;
	}

	.link {
		text-decoration: none;
		font-size: 1.2rem;
	}

	.link:hover {
		background-color: #066896;
		transition: all 2s;
		text-decoration: none;
	}

	.main {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50px;
		background-color: #00aeff;
		color: #ffffff;
		font-size: large;
	}
	.home_button {
		right: 50px;
		bottom: 40px;
		z-index: 100;
		display: block;
		position: fixed;
	}
	.home_button > img {
		width: 48px;
		height: 48px;
	}
</style>
