import readline from 'node:readline';
import Cliente from './class/client';
import Funcionario from './class/employee';
import Reserva from './class/reserve';
import { Carro, Esportivo, Utilitario } from './class/car';
import Promocao from './class/promotion';
import Localiza from './class/search';

const localiza = new Localiza();

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function exibirMenu() {
	console.log('===== Menu =====');
	console.log('1. Cadastrar Cliente');
	console.log('2. Cadastrar Funcionário');
	console.log('3. Cadastrar Carro');
	console.log('4. Criar Reserva');
	console.log('5. Cancelar Reserva');
	console.log('6. Enviar Promoção');
	console.log('0. Sair');
	console.log('================');
}

function cadastrarCliente() {
	console.log('===== Cadastro de Cliente =====');

	rl.question('Nome: ', (nome) => {
		rl.question('CPF: ', (cpf) => {
			rl.question('Idade: ', (idade) => {
				rl.question('Data de Nascimento (AAAA-MM-DD): ', (dataNascimento) => {
					rl.question('Número da Carteira de Motorista: ', (numeroCNH) => {
						rl.question('Foto da Carteira de Motorista: ', (fotoCNH) => {
							rl.question('Ano de Vencimento da Carteira de Motorista (AAAA): ', (anoVencimentoCNH) => {
								rl.question('Endereço: ', (endereco) => {
									rl.question('Telefone de Contato: ', (telefone) => {
										rl.question('E-mail: ', (email) => {
											// Criar uma instância do Cliente com os dados informados
											const cliente = new Cliente(
												nome,
												cpf,
												Number(idade),
												new Date(dataNascimento),
												numeroCNH,
												fotoCNH,
												new Date(Number(anoVencimentoCNH), 0, 1),
												endereco,
												telefone,
												email,
												undefined
											);

											// Exibir os dados do cliente cadastrado
											console.log('\nCliente cadastrado com sucesso:');
											console.log(cliente);

											// Retornar ao menu principal
											exibirMenu();
											rl.prompt();
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function cadastrarFuncionario() {
	console.log('===== Cadastro de Funcionário =====');

	rl.question('Nome: ', (nome) => {
		rl.question('CPF: ', (cpf) => {
			rl.question('Idade: ', (idade) => {
				rl.question('Endereço: ', (endereco) => {
					rl.question('Data da Contratação (AAAA-MM-DD): ', (dataContratacao) => {
						rl.question('Salário: ', (salario) => {
							rl.question('Quantidade de Aluguéis Realizados: ', (quantidadeAlugueis) => {
								rl.question('Status (Ativado/Desativado): ', (status) => {
									rl.question('Telefone de Contato: ', (telefone) => {
										// Criar uma instância do Funcionario com os dados informados
										const funcionario = new Funcionario(
											nome,
											cpf,
											Number(idade),
											endereco,
											new Date(dataContratacao),
											Number(salario),
											Number(quantidadeAlugueis),
											status === 'Ativado',
											telefone
										);

										// Exibir os dados do funcionário cadastrado
										console.log('\nFuncionário cadastrado com sucesso:');
										console.log(funcionario);

										// Retornar ao menu principal
										exibirMenu();
										rl.prompt();
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function cadastrarCarro() {
	function cadastrarCarro() {
		console.log('===== Cadastro de Carro =====');

		rl.question('Placa: ', (placa) => {
			rl.question('Ano: ', (ano) => {
				rl.question('Cor: ', (cor) => {
					rl.question('Modelo: ', (modelo) => {
						rl.question('Quilometragem: ', (quilometragem) => {
							rl.question('Valor Diário: ', (valorDiario) => {
								rl.question('Observação: ', (observacao) => {
									rl.question('Tipo de Carro (Esportivo/Utilitário): ', (tipoCarro) => {
										if (tipoCarro === 'Esportivo') {
											rl.question('Tempo para Chegar a 100 km/h: ', (tempoChegada) => {
												rl.question('Lista de Melhorias (separadas por vírgula): ', (melhorias) => {
													// Criar uma instância do CarroEsportivo com os dados informados
													const carro = new Esportivo(
														placa,
														Number(ano),
														cor,
														modelo,
														Number(quilometragem),
														Number(valorDiario),
														observacao,
														Number(tempoChegada),
														melhorias.split(',')
													);

													// Exibir os dados do carro cadastrado
													console.log('\nCarro cadastrado com sucesso:');
													console.log(carro);

													// Retornar ao menu principal
													exibirMenu();
													rl.prompt();
												});
											});
										} else if (tipoCarro === 'Utilitário') {
											rl.question('Quantidade de Passageiros: ', (quantidadePassageiros) => {
												rl.question('Tamanho do Bagageiro: ', (tamanhoBagageiro) => {
													rl.question('Km por Litro de Gasolina: ', (kmPorLitro) => {
														// Criar uma instância do CarroUtilitario com os dados informados
														const carro = new Utilitario(
															placa,
															Number(ano),
															cor,
															modelo,
															Number(quilometragem),
															Number(valorDiario),
															observacao,
															Number(quantidadePassageiros),
															Number(tamanhoBagageiro),
															Number(kmPorLitro)
														);

														// Exibir os dados do carro cadastrado
														console.log('\nCarro cadastrado com sucesso:');
														console.log(carro);

														// Retornar ao menu principal
														exibirMenu();
														rl.prompt();
													});
												});
											});
										} else {
											console.log('\nTipo de carro inválido!');
											exibirMenu();
											rl.prompt();
										}
									});
								});
							});
						});
					});
				});
			});
		});
	}

}

function criarReserva() {
	console.log('===== Criar Reserva =====');

	// Solicitar dados do cliente
	rl.question('Nome do Cliente: ', (nomeCliente) => {
		rl.question('CPF do Cliente: ', (cpfCliente) => {
			rl.question('Data de Início (AAAA-MM-DD): ', (dataInicio) => {
				rl.question('Data de Fim (AAAA-MM-DD): ', (dataFim) => {
					// Verificar se o cliente já possui uma reserva ativa
					const cliente = localiza.buscarCliente(cpfCliente);
					if (cliente && cliente.temReservaAtiva()) {
						console.log('\nO cliente já possui uma reserva ativa!');
						exibirMenu();
						rl.prompt();
						return;
					}

					// Verificar se o carro está disponível no período solicitado
					rl.question('Placa do Carro: ', (placaCarro) => {
						const carro = localiza.buscarCarro(placaCarro);
						if (!carro || !carro.estaDisponivel(dataInicio, dataFim)) {
							console.log('\nO carro não está disponível no período solicitado!');
							exibirMenu();
							rl.prompt();
							return;
						}

						// Criar uma nova reserva
						const reserva = new Reserva(cliente, carro, dataInicio, dataFim);

						// Adicionar a reserva ao sistema
						localiza.adicionarReserva(reserva);

						console.log('\nReserva criada com sucesso:');
						console.log(reserva);

						// Retornar ao menu principal
						exibirMenu();
						rl.prompt();
					});
				});
			});
		});
	});
}

function cancelarReserva() {
	console.log('===== Cancelar Reserva =====');

	rl.question('CPF do Cliente: ', (cpfCliente) => {
		// Verificar se o cliente possui uma reserva ativa
		const cliente = localiza.buscarCliente(cpfCliente);
		if (!cliente || !cliente.temReservaAtiva()) {
			console.log('\nO cliente não possui uma reserva ativa!');
			exibirMenu();
			rl.prompt();
			return;
		}

		// Obter a reserva ativa do cliente
		const reserva = cliente.getReservaAtiva();

		// Remover a reserva do sistema
		localiza.removerReserva(reserva!);

		console.log('\nReserva cancelada com sucesso!');
		console.log(reserva);

		// Retornar ao menu principal
		exibirMenu();
		rl.prompt();
	});
}

function enviarPromocao() {
	console.log('===== Enviar Promoção =====');

	// Solicitar dados da promoção
	rl.question('Título da Promoção: ', (titulo) => {
		rl.question('Descrição da Promoção: ', (descricao) => {
			rl.question('Data de Validade (AAAA-MM-DD): ', (dataValidade) => {
				// Criar uma nova promoção
				const promocao = new Promocao(titulo, descricao, new Date(dataValidade));

				// Enviar a promoção para todos os clientes cadastrados
				const clientes = localiza.getClientes();
				clientes.forEach((cliente) => {
					cliente.adicionarPromocao(promocao);
				});

				console.log('\nPromoção enviada com sucesso para todos os clientes cadastrados!');
				console.log(promocao);

				// Retornar ao menu principal
				exibirMenu();
				rl.prompt();
			});
		});
	});
}

function realizarAcao(opcao: number) {
	switch (opcao) {
		case 1:
			cadastrarCliente();
			break;
		case 2:
			cadastrarFuncionario();
			break;
		case 3:
			cadastrarCarro();
			break;
		case 4:
			criarReserva();
			break;
		case 5:
			cancelarReserva();
			break;
		case 6:
			enviarPromocao();
			break;
		case 0:
			rl.close();
			break;
		default:
			console.log('Opção inválida!');
	}

	exibirMenu();
}

exibirMenu();

rl.question('Digite a opção desejada: ', (opcao) => {
	realizarAcao(Number(opcao));
});
