import readlinesync = require ("readline-sync")
import { colors } from "./src/util/Colors"
import { Itens } from "./src/model/Itens"
import { ProdutoController } from "./src/controller/ProdutoController"
import { validarAvaliacao } from "./src/exceptions/Error"
import { verificarListaVazia } from "./src/exceptions/Error"

export function main () {

    let produtos: ProdutoController = new ProdutoController()
    
    let opcao: number

    while (true) {
console.log( colors.fg.blue , "*****************************************************");
console.log("                                                     ");
console.log("                ARARA AZUL - DELIVERY                ");
console.log("          Produtos da Fazenda Para sua Mesa!         ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");
console.log("            1 - Criar Produto                        ");
console.log("            2 - Listar Produtos                      ");
console.log("            3 - Buscar Produto por Número            ");
console.log("            4 - Atualizar Dados do Produto           ");
console.log("            5 - Apagar Produto                       ");
console.log("            6 - Sair                                 ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     " , colors.reset);

console.log(colors.fg.blue ,"Entre com a opção desejada: ");
opcao = readlinesync.questionInt("");

console.log("                                                     ");
if (opcao == 6) {
console.log(colors.fg.blue , "*****************************************************" , colors.reset);
console.log ( colors.fg.blue , "Arara Azul - Tudo de natural na sua mesa!" , colors.reset)
    sobre()
        process.exit(0)
}

switch (opcao) {
    case 1:
        console.log(colors.fg.blue ,"\n\nCriar Produto\n\n", colors.reset)

            
        let nome = readlinesync.question("Digite o nome do produto: ")
        let quantidade = readlinesync.questionInt("Digite a quantidade: ")
        let valor = readlinesync.questionFloat("Digite o valor: ")

        let avaliacao: number
        do {
            avaliacao = readlinesync.questionInt("Digite a nota (1 a 5): ")
            if (!validarAvaliacao(avaliacao)) {
                console.log(colors.fg.red, "Erro: A nota deve ser um número entre 1 e 5!", colors.reset)
            }
        } while (!validarAvaliacao(avaliacao))

        let numero = produtos.gerarNumero()
        let novoProduto = new Itens(numero, nome, quantidade, valor, avaliacao)

        produtos.criar(novoProduto)
            
        keyPress()
        break;

    case 2:
        console.log(colors.fg.blue ,"\n\nListar todos os Produtos\n\n", colors.reset)
        
        if (verificarListaVazia(produtos["listaProdutos"])) {
            keyPress()
            break
        }

        produtos.listarTodos()

        keyPress()
        break;

    case 3:
        console.log(colors.fg.blue ,"\n\nBuscar Produto  - por número\n\n", colors.reset)

          if (verificarListaVazia(produtos["listaProdutos"])) {
        keyPress()
        break
        }

        let numeroBusca = readlinesync.questionInt("Digite o numero do produto: ")
        produtos.procurarPorNumero(numeroBusca)
        
        keyPress()
        break;

    case 4:
        console.log(colors.fg.blue ,"\n\nAtualizar dados do Produto\n\n", colors.reset)

         if (verificarListaVazia(produtos["listaProdutos"])) {
        keyPress()
        break
        }

        let numeroAtualiza = readlinesync.questionInt("Digite o numero do produto a atualizar: ")
        let produtoExistente = produtos.buscarNoArray(numeroAtualiza)

        if (produtoExistente != null) {
            let novoNome = readlinesync.question("Digite o novo nome: ")
            let novaQtd = readlinesync.questionInt("Digite a nova quantidade: ")
            let novoValor = readlinesync.questionFloat("Digite o novo valor: ")

            let novaAvaliacao: number
            do {
                novaAvaliacao = readlinesync.questionInt("Digite a nova nota (1 a 5): ")
                if (!validarAvaliacao(novaAvaliacao)) {
                    console.log(colors.fg.red, "Erro: A nota deve ser um número entre 1 e 5!", colors.reset)
                }
            } while (!validarAvaliacao(novaAvaliacao))

            produtoExistente.nome = novoNome
            produtoExistente.quantidade = novaQtd
            produtoExistente.valor = novoValor
            ;(produtoExistente as Itens).avaliacao = novaAvaliacao

            produtos.atualizar(produtoExistente)
        } else {
            console.log(colors.fg.red, "Produto não encontrado!", colors.reset)
        }

        keyPress()
        break;

    case 5:
        console.log(colors.fg.blue ,"\n\nApagar um Produto\n\n", colors.reset)


        if (verificarListaVazia(produtos["listaProdutos"])) {
            keyPress()
            break
        }

        let numeroDelete = readlinesync.questionInt("Digite o numero do produto a apagar: ")
        produtos.deletar(numeroDelete)

                
        keyPress()
        break;


    default:
        console.log(colors.fg.blue ,"\nOpção Inválida!\n", colors.reset);
        keyPress()
        break;

    }
}    

    function sobre(): void {
    console.log(colors.fg.blue ,"\n**************************************************" , colors.reset);
    console.log("                                                     ");
    console.log(colors.fg.blue ,"Projeto Desenvolvido por: Sthefany Oliveira Mattos " , colors.reset);
    console.log(colors.fg.blue ,"Quartzo Sollutions - om.sthefany@gmail.com" , colors.reset);
    console.log(colors.fg.blue ,"https://github.com/sthefanyom", colors.reset);
    console.log("                                                     ");
    console.log(colors.fg.blue ,"**************************************************" , colors.reset);
}

 
function keyPress(): void{
    console.log(colors.fg.blue ,"\nPressione enter para continuar..." , colors.reset)
    readlinesync.prompt();
}
}
main();
