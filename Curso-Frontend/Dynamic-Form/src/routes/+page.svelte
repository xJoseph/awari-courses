<div class="container">
	<section>
		<div class="title">
			<h1>Bem-vindo(a) a página do formulário de contato</h1>
		</div>
		<hr style="color: #ffffff" />
	</section>

	<section>
		<div class="title">
			<h2>Formulário de contato</h2>
		</div>
		<div class="form">
			<form target="_self">
				<div class="form_box">
					<label>
						Nome:
						<div class="input">
							<input
								id="name"
								type="text"
								placeholder="João da Silva"
							/>
						</div>
					</label>
				</div>
				<div class="form_box">
					<label>
						Email:
						<div class="input">
							<input
								id="email"
								type="text"
								placeholder="joaodasilva@email.com"
							/>
						</div>
					</label>
				</div>
				<div class="form_box">
					<label>
						Mensagem:
						<div class="message_box">
							<input
								id="message"
								type="text"
								placeholder="Escreva a sua mensagem aqui."
								autocomplete="off"
							/>
						</div>
					</label>
				</div>
				<div class="form_button">
					<button type="submit">Enviar</button>
				</div>
			</form>
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
	.form {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: auto;
		font-size: 1.2rem;
		padding: 0px 10px;
		margin-bottom: 40px;
	}
	.form_box {
		display: flex;
		justify-content: center;
		width: 100%;
		height: auto;
	}
	.input {
		display: flex;
		width: 100%;
	}
	.message_box {
		display: flex;
		height: 100px;
	}
	.form_button {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.form_button > button {
		font-weight: bolder;
		color: #000;
		margin-top: 20px;
		width: 70%;
		height: 30px;
		background-color: #00aeff9c;
		border: none;
		transition: all 2s;
	}
	.form_button > button:hover {
		width: 250%;
		height: 50px;
		color: #fff;
		background-color: #00aeff;
		border: 1px solid #000;
		transition: all 2s;
	}
</style>
