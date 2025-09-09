import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository"
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>()
    numero: number = 0

    procurarPorNumero(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero)

        if (buscaProduto != null) {
            buscaProduto.visualizar()

        } else
            console.log(colors.fg.blue , "O produto de número: " , numero , "  não foi encontrado!" , colors.reset)
    }
    listarTodos(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar()
        }
    }
    criar(produto: Produto): void {
     this.listaProdutos.push(produto)
     console.log(colors.fg.blue , "O produto de número: " , produto.numero , "  foi criado com sucesso!" , colors.reset)
    }
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.numero)

        if (buscaProduto != null) {
        console.log(colors.fg.blue , "O produto de número: " , produto.numero , "  foi atualizado com sucesso!" , colors.reset)   
        } else
            console.log(colors.fg.blue , "O produto de número: " , produto.numero , "  não foi encontrado!" , colors.reset)
    }
    deletar(numero: number): void {
       let buscaProduto = this.buscarNoArray(numero)

       if (buscaProduto != null) {
        this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
        console.log(colors.fg.blue , "O produto de número: " , numero , "  foi apagado com sucesso!" , colors.reset)   
        } else
            console.log(colors.fg.blue , "O produto de número: " , numero , "  não foi encontrado!" , colors.reset)
    }
    
        public gerarNumero(): number {
        return ++ this.numero
    }

    //Checa de uma Conta Existe
    public buscarNoArray(numero: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.numero === numero)
                return produto
    }
        return null
   }
}