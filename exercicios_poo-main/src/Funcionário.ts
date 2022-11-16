import { Pessoadois } from "./Pessoadois";
export class funcionário extends Pessoadois
{
    cod: string;
    cargo: string;
    ct: string;
    salario: string;
constructor(
    nome: string,
    cpf: string,
    rg: string,
    cidade: string,
    idade: number,
    cod: string,
    cargo: string,
    ct: string,
    salario: string,
){
    super(nome, cpf, rg, cidade, idade);
    this.cod = cod;
    this.cargo = cargo;
    this.ct = ct;
    this.salario = salario
}
verFuncionário(){
    console.log(`${this.nome}, ${this.idade}, ${this.cargo}, ${this.salario}`)

}
}


    
