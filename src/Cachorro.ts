import { Familia } from "./familia"
export class Cachorro extends Familia {
    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade)
    }

    verMembro(): void {
        console.log("Membro de 4 patas.")
    }
    som():void{
        console.log("Au, au!")
    }
}