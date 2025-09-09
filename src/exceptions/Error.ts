export function validarAvaliacao(valor: number): boolean {
    return valor >= 1 && valor <= 5
}

import { Produto } from "../model/Produto"

export function verificarListaVazia(lista: Array<Produto>): boolean {
    if (lista.length === 0) {
        console.log("\n⚠️ A lista de produtos está vazia!\n")
        return true
    }
    return false
}