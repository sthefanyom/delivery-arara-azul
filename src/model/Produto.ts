
export abstract class Produto {
    private _numero: number
    private _nome: string
    private _quantidade: number
    private _valor: number
    

constructor(numero: number , nome: string , quantidade: number, valor: number) {
    this._numero = numero
    this._nome = nome
    this._quantidade = quantidade
    this._valor = valor
    }


    //Get e Set
public get numero(){
return this._numero
    }
    
public set numero(numero: number){
this._numero = numero
    } 

public get nome(){
return this._nome
    }
    
public set nome(nome: string){
this._nome = nome
    }  
 
public get quantidade(){
return this._quantidade
    }
    
public set quantidade(quantidade: number){
this._quantidade = quantidade
    } 
    
public get valor(){
return this._valor
    }
    
public set valor(valor: number){
this._valor = valor
    }    

    
// metodos especificos     
 public visualizar(): void {

        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("Produto Número: " + this._numero);
        console.log("Nome: " + this._nome);
        console.log("Quantidade: " + this._quantidade);
        console.log("Valor: " + this._valor);

    }
}

