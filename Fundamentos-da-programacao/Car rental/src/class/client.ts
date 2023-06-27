import Promocao from './promotion';
import Reserva from './reserve';

import Localiza from './search';

const localiza = new Localiza();

class Cliente {
  public promocao?: Promocao;

  private nome: string;
  private cpf: string;
  private idade: number;
  private dataNascimento: Date;
  private numeroCarteiraMotorista: string;
  private fotoCarteiraMotorista: string;
  private anoVencimentoCarteira: Date;
  private endereco: string;
  private telefone: string;
  private email: string;
  private localiza: Localiza | undefined;

  constructor(
    nome: string,
    cpf: string,
    idade: number,
    dataNascimento: Date,
    numeroCarteiraMotorista: string,
    fotoCarteiraMotorista: string,
    anoVencimentoCarteira: Date,
    endereco: string,
    telefone: string,
    email: string,
    localiza: Localiza | undefined
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
    this.dataNascimento = dataNascimento;
    this.numeroCarteiraMotorista = numeroCarteiraMotorista;
    this.fotoCarteiraMotorista = fotoCarteiraMotorista;
    this.anoVencimentoCarteira = anoVencimentoCarteira;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.localiza = localiza;
  }

  // Resto da implementação da classe

  // Verifica se o cliente possui uma reserva ativa
  temReservaAtiva(): boolean | undefined {
    if (this.localiza !== undefined) {

      return this.localiza.getReservaAtiva(this) !== undefined;
    }
  }

  // Retorna a reserva ativa do cliente
  getReservaAtiva(): Reserva | undefined {
    if (this.localiza !== undefined) {

      return this.localiza.getReservaAtiva(this);
    }
  }
}

export default Cliente;
