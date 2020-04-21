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

