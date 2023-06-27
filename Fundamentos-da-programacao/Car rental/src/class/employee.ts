class Funcionario {
    constructor(
      public nome: string,
      public cpf: string,
      public idade: number,
      public endereco: string,
      public dataContratacao: Date,
      public salario: number,
      public qtdAlugueis: number,
      public status: boolean,
      public telefone: string
    ) {}
  }
  
  export default Funcionario;
  