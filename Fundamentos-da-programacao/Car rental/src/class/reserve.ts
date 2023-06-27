import Cliente from './client';

class Reserva {
  constructor(
    public codigo: string,
    public status: boolean,
    public dataInicio: Date,
    public dataFim: Date,
    public cliente: Cliente
  ) {}

  criarReserva() {
    // Lógica para criar a reserva
    if (this.status === true) {
      console.log('Reserva criada com sucesso!');
    } else {
      console.log('Não foi possível criar a reserva.');
    }
  }

  cancelarReserva() {
    // Lógica para cancelar a reserva
    if (this.status === true) {
      console.log('Reserva cancelada com sucesso!');
    } else {
      console.log('Não foi possível cancelar a reserva.');
    }
  }
}

export default Reserva;
