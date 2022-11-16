export class Pessoadois{
    nome: string;
    cpf: string;
    rg: string;
    cidade: string;
    idade: number;

constructor(
    nome: string,
    cpf: string,
    rg: string,
    cidade: string,
    idade: number,
){
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.cidade = cidade;
    this.idade = idade;
}
verdados(){
    console.log(`o nome da pessoa é : ${this.nome}, \no $cpf é :${this.cpf},\nseu rg é : ${this.rg}, \nsua cidade é : ${this.cidade}, \nsua idade é : ${this.idade}`)
    
}
}