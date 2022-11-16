import { Familia } from "./familia"

export class Herdeiro extends Familia{
    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade)
    }

    verMembro():void{
        console.log("Filho mais velho.")
    }
    verHerdeiro(): void {
        console.log("Herdeiro")
    }
}