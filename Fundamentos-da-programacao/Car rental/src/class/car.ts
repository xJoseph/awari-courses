class Carro {
  constructor(
    public placa: string,
    public ano: number,
    public cor: string,
    public modelo: string,
    public quilometragem: number,
    public valorDiario: number,
    public observacao: string
  ) { }
}

class Esportivo extends Carro {
  constructor(
    placa: string,
    ano: number,
    cor: string,
    modelo: string,
    quilometragem: number,
    valorDiario: number,
    observacao: string,
    public tempo0a100: number,
    public melhorias: string[]
  ) {
    super(placa, ano, cor, modelo, quilometragem, valorDiario, observacao);
  }
}

class Utilitario extends Carro {
  constructor(
    placa: string,
    ano: number,
    cor: string,
    modelo: string,
    quilometragem: number,
    valorDiario: number,
    observacao: string,
    public qtdPassageiros: number,
    public tamanhoBagageiro: number,
    public kmPorLitro: number
  ) {
    super(placa, ano, cor, modelo, quilometragem, valorDiario, observacao);
  }
}

export { Carro, Esportivo, Utilitario };
