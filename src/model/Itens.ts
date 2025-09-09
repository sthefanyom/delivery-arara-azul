import { Produto } from "./Produto"

export class Itens extends Produto {

    private _avaliacao: number

        constructor(numero: number , nome: string , quantidade: number, valor: number , avaliacao: number){
        super (numero, nome, quantidade, valor)
        this._avaliacao = avaliacao
        }

public get avaliacao() {
    return this._avaliacao
}    

public set avaliacao (avaliacao: number) {
    this._avaliacao = avaliacao
}
public override visualizar(): void {
    super.visualizar()
    console.log("Avaliação: " + this._avaliacao + " estrelas")
}
}