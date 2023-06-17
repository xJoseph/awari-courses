<div class="container">
	<div class="page_title">
		<h1>Artigo 1</h1>
	</div>
	<div class="article_title">
		<h2>W3C anuncia medida de padronização para a Confirmação de Pagamento Seguro</h2>
	</div>
	<div class="article_content">
		<div>
			<img
				class="article_image"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C%C2%AE_Icon.svg/1200px-W3C%C2%AE_Icon.svg.png"
				alt="W3c Logo"
			/>
		</div>
		<p>
			O World Wide Web Consortium anunciou uma nova medida de padronização para a confirmação de
			pagamento seguro, que ajudará a simplificar a autenticação do usuário e aumentar a segurança
			do pagamento durante o processo de checkout na web.
		</p>
		<p>
			O World Wide Web Consortium (W3C) é um órgão sem fins lucrativos que estabelece padrões
			técnicos da Web e aprova as diretrizes que regem HTML e CSS.
		</p>
		<p>
			O Secure Payment Confirmation (SPC) é uma API da Web destinada a permitir que comerciantes,
			bancos, provedores de serviços de pagamento e redes de cartões reduzam o atrito da
			autenticação forte do cliente (SCA) e produzam evidências criptográficas do consentimento do
			usuário.
		</p>
		<p>
			A SPC adiciona uma etapa extra ao processo de pagamento que chama de “consentimento do
			usuário”, solicitando que os usuários revisem e confirmem os detalhes do pagamento por meio de
			uma caixa de diálogo fornecida pelo navegador.
		</p>
		<p>
			O SPC pode habilitar pagamentos via biometria. Por exemplo, depois de optar por comprar
			mercadorias, os usuários poderão confirmar as transações por meio do FaceID do iPhone, usando
			o protocolo WebAuthn fornecido pela FIDO Alliance.
		</p>
		<p>
			Essa forte autenticação do cliente e evidência criptográfica são requisitos regulatórios, como
			a Diretiva de Serviços de Pagamento (PSD2) na Europa.
		</p>
		<p>
			Lançada em 2017, a PSD2 era uma diretiva da UE destinada a tornar os pagamentos mais seguros e
			menos propensos a fraudes, que começou a ser implementada em 2018.
		</p>
		<p>
			De acordo com o consórcio, a publicação da confirmação de pagamento seguro como uma
			recomendação de candidato indica que o conjunto de recursos é estável e recebeu ampla revisão.
		</p>
		<p>
			O W3C disse que buscará experiência de implementação adicional antes de avançar esta versão da
			Confirmação de Pagamento Seguro para a recomendação.
		</p>
		<p>Em 2019, o consórcio começou a trabalhar na confirmação de pagamento seguro.</p>
		<p>
			Em termos de aplicativos do mundo real, a gigante multinacional de processamento de pagamentos
			Stripe conduziu um piloto com uma implementação antecipada do SPC em março de 2020.
		</p>
		<p>
			A Stripe relatou que, em comparação com as senhas únicas (OTP), a autenticação SPC levou a um
			aumento de 8% nas conversões e que o checkout foi 3 vezes mais rápido.
		</p>
		<p>
			O World Wide Web Consortium também destacou o caso de uso da tecnologia fora dos pagamentos
			com cartão tradicionais, dizendo que está discutindo como o SPC pode ser integrado a outros
			ecossistemas de pagamento, como Open Banking e PIX, a rede de pagamentos do Brasil, bem como
			em pagamentos proprietários.
		</p>
		<p>
			O SPC está atualmente disponível no Chrome e Edge no MacOS, Windows e Android, e o Web
			Payments Working Group diz que buscará implementação em outros navegadores e ambientes durante
			o período de Recomendação do Candidato.
		</p>
		<div>
			<p class="article_reference">
				The article is from
				<a
					href="https://cryptoid.com.br/mercado-financeiro/w3c-anuncia-medida-de-padronizacao-para-a-confirmacao-de-pagamento-seguro/"
					target="_blank"
				>
					cryptoid.com.br
				</a>
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		width: 100%;
		max-width: 1280px;
	}
	.page_title {
		font-size: 1.4rem;
		padding-left: 50px;
	}

	.article_title {
		display: flex;
		/* justify-content: center; */
		margin: 0px 20px;
		align-items: center;
		color: rgb(0, 0, 0);
		font-size: larger;
	}
	.article_content {
		margin: 0px 20px 40px 20px;
		text-align: justify;
	}
	.article_image {
		width: 400px;
		height: 300px;
	}
	.article_content > p {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.article_reference > a {
		/* background-color: bisque; */
		transition: all 1s;
	}
	.article_reference > a:hover {
		color: rgb(62, 196, 201);
		font-size: large;
		transition: all 1s;
	}
</style>
