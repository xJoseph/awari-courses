import Cliente from './class/client';
import Funcionario from './class/employee';
import Reserva from './class/reserve';
import { Carro, Esportivo, Utilitario } from './class/car';
import Promocao from './class/promotion';

// Criando um cliente
const cliente = new Cliente(
  'João da Silva',
  '12345678900',
  25,
  new Date(1998, 4, 15),
  'ABC123',
  'foto.jpg',
  new Date(2025, 6, 30),
  'Rua A, 123',
  '(11) 9999-9999',
  'joao@example.com',
  undefined
);

// Criando um funcionário
const funcionario = new Funcionario(
  'Maria Souza',
  '98765432100',
  30,
  'Rua B, 456',
  new Date(2020, 2, 10),
  3000,
  10,
  true,
  '(11) 8888-8888'
);

// Criando um carro
const carro = new Carro(
  'ABC1234',
  2022,
  'Prata',
  'Fiat Uno',
  5000,
  100,
  'Bom estado geral'
);

// Criando um carro esportivo
const esportivo = new Esportivo(
  'XYZ5678',
  2023,
  'Vermelho',
  'Ferrari',
  1000,
  1000,
  'Novo',
  3.5,
  ['Rodas esportivas', 'Escape esportivo']
);

// Criando um carro utilitário
const utilitario = new Utilitario(
  'DEF9012',
  2021,
  'Branco',
  'Fiat Ducato',
  20000,
  200,
  'Grande capacidade de carga',
  6,
  500,
  10
);

// Criando uma reserva
const reserva = new Reserva('123456', true, new Date(), new Date(), cliente);

// Criando uma promoção
const promocao = new Promocao(
  'Promoção de Verão',
  'Desconto de 20% em aluguéis durante o verão',
  new Date(2023, 8, 30)
);

// Associando a promoção ao cliente
cliente.promocao = promocao;

// Exibindo informações do cliente
console.log(cliente);

// Realizando ações adicionais, como criar ou cancelar reservas, atualizar informações, etc.

// ...

