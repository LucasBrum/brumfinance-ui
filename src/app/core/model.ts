export class Categoria {
  id: number;
}

export class Ativo {
  nome: string;
  codigo: string;
  descricao: string;
  categoriaAtivo = new Categoria();
}
