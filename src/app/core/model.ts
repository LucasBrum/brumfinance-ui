export class Categoria {
  id: number;
}

export class Ativo {
  id: number;
  nome: string;
  codigo: string;
  descricao: string;
  categoriaAtivo = new Categoria();
}

export class Aporte {
  id: number;
  dataCompra: Date;
  ativoFinanceiro = new Ativo();
  quantidade: number;
  custo: number;
  valorTotal: number;
}

