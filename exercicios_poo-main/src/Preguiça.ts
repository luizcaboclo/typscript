import { Animal } from "./Animal";

export class Preguiça extends Animal{
    subirAvore:string

constructor(
    subirArvore: string,
    nome: string,
    idade: number,
    som: string,
    peso: string
){
    super(nome,idade,som,peso)
    this.subirAvore = subirArvore

}
correr(): void {
    console.log("correndo feito uma preguiça")
}
cacar(): void {
    console.log("caçando igual uma preguiça")
}
dormir(): void {
    console.log("dormindo feito uma preguiça")
}
som(): void {
    console.log("fazendo som igual uma preguiça")
}
}