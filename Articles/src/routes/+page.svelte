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
						O World Wide Web Consortium anunciou uma nova medida de padronização para a confirmação
						de pagamento seguro, que ajudará a simplificar a autenticação do usuário e aumentar a
						segurança do pagamento durante o processo de checkout na web...
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
						O World Wide Web Consortium (W3C) é um órgão sem fins lucrativos que estabelece padrões
						técnicos da Web e aprova as diretrizes que regem HTML e CSS...
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
						GitHub, which has been doing a brisk business selling subscriptions to its
						litigation-encumbered Copilot AI helper, surveyed 500 US-based developers to find if any
						of them are already using AI coding tools at work
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
		/* justify-content: space-evenly; */
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

	@media screen and (max-width: 768px) {
		.articles {
			width: 100%;
			display: grid;
			grid-row: 1;
			grid-column: auto;
		}

		.article_content {
			margin-right: 20px;
		}
	}
</style>
