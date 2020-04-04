export class Categoria {
  id: number;
}

export class Ativo {
  codigo: string;
  descricao: string;
  categoriaAtivo = new Categoria();
}
