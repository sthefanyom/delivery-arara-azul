# 🛒 Arara Azul - Delivery  

Sistema de gerenciamento de produtos desenvolvido em **TypeScript (Node.js)** com arquitetura em camadas (Model, Repository, Controller, Validators e View).  

O objetivo é simular um pequeno sistema de CRUD (Criar, Listar, Buscar, Atualizar e Deletar produtos) via terminal, utilizando POO (Programação Orientada a Objetos) e boas práticas.

---

## 🚀 Funcionalidades
- Criar produtos com número automático
- Listar todos os produtos cadastrados
- Buscar produto por número
- Atualizar dados de um produto
- Deletar produto
- Validação de avaliação (somente números de 1 a 5)
- Mensagens de erro quando a lista está vazia
- Estrutura organizada em camadas

---

## 📂 Estrutura do Projeto
src/
├── controller/
│ └── ProdutoController.ts
├── model/
│ ├── Produto.ts
│ └── Itens.ts
├── repository/
│ └── ProdutoRepository.ts
├── util/
│ └── Colors.ts
├── validators/
│ └── Validacao.ts
└── index.ts # Menu principal

---

## ⚙️ Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [readline-sync](https://www.npmjs.com/package/readline-sync)

---

## 📦 Instalação e Execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/arara-azul-delivery.git
   cd arara-azul-delivery

2. Instale as dependências:
    ```bash
    npm install

3. Compile o TypeScript para JavaScript:
    ```bash
    npx tsc

4. Execute o programa:
    ```bash
    node dist/Menu.js

## 📋 Menu do Sistema
*****************************************************
                ARARA AZUL - DELIVERY                
          Produtos da Fazenda Para sua Mesa!         
*****************************************************
 1 - Criar Produto                        
 2 - Listar Produtos                      
 3 - Buscar Produto por Número            
 4 - Atualizar Dados do Produto           
 5 - Apagar Produto                       
 6 - Sair                                 
*****************************************************

## 👩‍💻 Autor
Sthefany Oliveira Mattos

Quartzo Sollutions

📧 om.sthefany@gmail.com

🌐 [Github:](https://github.com/sthefanyom)

## 📝 Licença

Este projeto é de uso livre para fins de estudo e aprendizado.
Sinta-se à vontade para clonar, modificar e evoluir o código.
