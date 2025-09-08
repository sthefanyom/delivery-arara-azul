import readlinesync = require ("readline-sync")

export function main () {

    let opcao: number

    while (true) {
console.log("*****************************************************");
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
console.log("                                                     ");

console.log("Entre com a opção desejada: ");
opcao = readlinesync.questionInt("");

console.log("                                                     ");
if (opcao == 6) {
    console.log("*****************************************************");
    console.log (" Arara Azul - Tudo de natural na sua mesa!")
    sobre()
        process.exit(0)
}

switch (opcao) {
    case 1:
        console.log("\n\nCriar Produto\n\n");
        break;

    case 2:
        console.log("\n\nListar todos os Produtos\n\n");
        break;

    case 3:
        console.log("\n\nBuscar Produto  - por número\n\n");
        break;

    case 4:
        console.log("\n\nAtualizar dados do Produto\n\n");
        break;

    case 5:
        console.log("\n\nApagar um Produto\n\n");
        break;


    default:
        console.log("\nOpção Inválida!\n");
        break;

    }
}    

    function sobre(): void {
    console.log("\n**************************************************");
    console.log("                                                     ");
    console.log("Projeto Desenvolvido por: Sthefany Oliveira Mattos ");
    console.log("Quartzo Sollutions - om.sthefany@gmail.com");
    console.log("https://github.com/sthefanyom");
    console.log("                                                     ");
    console.log("**************************************************");
}

 
function keyPress(): void{
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt();
}
}
main();
