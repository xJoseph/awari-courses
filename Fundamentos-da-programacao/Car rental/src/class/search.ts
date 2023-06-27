// Arquivo: localiza.ts

import { Carro } from './car';
import Cliente from './client';
import Funcionario from './employee';
import Reserva from './reserve';
import Promocao from './promotion';

class Localiza {
    private carros: Carro[];
    private clientes: Cliente[];
    private funcionarios: Funcionario[];
    private reservas: Reserva[];
    private promocoes: Promocao[];

    constructor() {
        this.carros = [];
        this.clientes = [];
        this.funcionarios = [];
        this.reservas = [];
        this.promocoes = [];
    }

    // Métodos para cadastrar carros, clientes, funcionários e reservas

    cadastrarCarro(carro: Carro) {
        this.carros.push(carro);
    }

    cadastrarCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    cadastrarFuncionario(funcionario: Funcionario) {
        this.funcionarios.push(funcionario);
    }

    criarReserva(reserva: Reserva) {
        this.reservas.push(reserva);
    }

    // Métodos para buscar carros, clientes, funcionários e reservas

    buscarCarro(placa: string): Carro | undefined {
        return this.carros.find((carro) => carro.placa === placa);
    }

    buscarCliente(cpf: string): Cliente | undefined {
        return this.clientes.find((cliente) => cliente.cpf === cpf);
    }

    buscarFuncionario(cpf: string): Funcionario | undefined {
        return this.funcionarios.find((funcionario) => funcionario.cpf === cpf);
    }

    buscarReserva(codigo: string): Reserva | undefined {
        return this.reservas.find((reserva) => reserva.codigo === codigo);
    }

    // Métodos para remover carros, clientes, funcionários e reservas

    removerCarro(placa: string) {
        this.carros = this.carros.filter((carro) => carro.placa !== placa);
    }

    removerCliente(cpf: string) {
        this.clientes = this.clientes.filter((cliente) => cliente.cpf !== cpf);
    }

    removerFuncionario(cpf: string) {
        this.funcionarios = this.funcionarios.filter((funcionario) => funcionario.cpf !== cpf);
    }

    removerReserva(reserva: Reserva) {
        this.reservas = this.reservas.filter((r) => r !== reserva);
    }

    // Métodos para adicionar e listar promoções

    adicionarPromocao(promocao: Promocao) {
        this.promocoes.push(promocao);
    }

    listarPromocoes(): Promocao[] {
        return this.promocoes;
    }

    // Verifica se um cliente possui uma reserva ativa
    temReservaAtiva(cliente: Cliente): boolean {
        return this.reservas.some((reserva) => reserva.cliente === cliente && reserva.status === 'Ativa');
    }

    // Verifica se um carro está disponível para reserva
    estaDisponivel(carro: Carro): boolean {
        return !this.reservas.some((reserva) => reserva.carro === carro && reserva.status === 'Ativa');
    }

    // Adiciona uma reserva à lista de reservas
    adicionarReserva(reserva: Reserva) {
        this.reservas.push(reserva);
    }

    // Retorna a reserva ativa de um cliente
    getReservaAtiva(cliente: Cliente): Reserva | undefined {
        return this.reservas.find((reserva) => reserva.cliente === cliente && reserva.status === 'Ativa');
    }

    // Retorna a lista de clientes
    getClientes(): Cliente[] {
        return this.clientes;
    }
}

export default Localiza;
