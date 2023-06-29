<script>
	let name = "";
	let email = "";
	let message = "";

	function showAlertBox() {
		alert(
			`Olá ${name}\nSeu e-mail é ${email}\nA mensagem escrita é: ${message}`
		);
	}
</script>

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
			<form target="_self" on:submit|preventDefault={showAlertBox}>
				<label>
					<div class="label_text">
						<span>Nome:</span>
					</div>
					<div class="input_box">
						<input
							class="input"
							type="text"
							placeholder="João da Silva"
							autocomplete="on"
							bind:value={name}
						/>
					</div>
				</label>
				<label>
					<div class="label_text">
						<span>Email:</span>
					</div>
					<div class="input_box">
						<input
							class="input"
							type="text"
							placeholder="joaodasilva@email.com"
							autocomplete="on"
							bind:value={email}
						/>
					</div>
				</label>
				<label>
					<div class="label_text">
						<span>Mensagem:</span>
					</div>
					<div class="input_box">
						<input
							class="message_box"
							type="text"
							placeholder="Escreva a sua mensagem aqui."
							autocomplete="off"
							bind:value={message}
						/>
					</div>
				</label>
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
		min-width: 250px;
		height: auto;
		font-size: 1.2rem;
		padding: 0px 10px;
		margin-bottom: 40px;
	}
	.form > form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 50%;
		min-width: 250px;
		height: auto;
		font-size: 1.2rem;
		padding: 0px 10px;
		margin-bottom: 40px;
	}
	label {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	@media (max-width: 960px) {
		label {
			display: block;
		}
	}
	.label_text {
		display: flex;
		justify-content: left;
		align-items: center;
		width: 10%;
		height: fit-content;
		margin-right: 45px;
	}
	.input_box {
		display: flex;
		justify-content: right;
		width: 90%;
	}
	.input {
		display: flex;
		width: 100%;
		border-radius: 10px;
		padding-left: 10px;
		transition: all 1s;
		margin-bottom: 25px;
	}
	.input:active {
		height: 60%;
		border: 2px solid #5743ca;
		transition: all 1s;
	}
	.message_box {
		display: flex;
		width: 100%;
		height: 100px;
		border-radius: 10px;
		padding-left: 10px;
	}
	.message_box:active {
		border: 2px solid #5743ca;
		transition: all 1s;
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
		cursor: pointer;
	}
</style>
