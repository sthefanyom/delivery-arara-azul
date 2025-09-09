import { Produto } from "../model/Produto"

export interface ProdutoRepository {

    procurarPorNumero(numero: number): void
    listarTodos(): void
    criar(produto: Produto): void
    atualizar(produto: Produto): void
    deletar(produto: number): void
}