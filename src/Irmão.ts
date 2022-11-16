export class Irmao extends Familia{
    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade)
    }

    verMembro(): void {
        console.log("Filho mais novo.")
    }
    verIdade():void{
        console.log("Não sou herdeiro, pois sou menor de idade.")
    }
}