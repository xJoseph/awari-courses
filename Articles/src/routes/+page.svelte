<div class="container">
	<section>
		<div class="title">
			<h1>Bem-vindo(a) a página inicial</h1>
		</div>
		<hr style="color: #ffffff" />
	</section>

	<section>
		<div class="title">
			<h2>Artigos</h2>
		</div>
		<div class="articles">
			<div class="article">
				<div class="article_title">
					<h3>Artigo 1</h3>
				</div>
				<div class="article_content">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
				<div class="article_link">
					<a href="/article1">Read More...</a>
				</div>
			</div>
			<div class="article">
				<div class="article_title">
					<h3>Artigo 2</h3>
				</div>
				<div class="article_content">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
				<div class="article_link">
					<a href="/article2">Read More...</a>
				</div>
			</div>
			<div class="article">
				<div class="article_title">
					<h3>Artigo 3</h3>
				</div>
				<div class="article_content">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
				<div class="article_link">
					<a href="/article3">Read More...</a>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.container {
		display: grid;
		width: 100%;
	}

	section {
		width: 100%;
	}

	section > .title {
		font-size: 1.4rem;
		padding-left: 50px;
	}

	.articles {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
		padding: 0px 10px;
		margin-bottom: 40px;
	}

	.article {
		padding: 0px 20px;
	}

	.article_title {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.article_content {
		text-align: justify;
		font-size: 1rem;
	}

	.article_link {
		text-align: center;
		font-size: 1rem;
	}
</style>
