export abstract class Familia {
    nome: string;
    idade: number;

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }

    verMembro():void{
    }
    verHerdeiro():void{
    }
}
