export class Cliente{
    nome: string
    idade: number
    telefone: string
    cidade: string
    email: string
constructor(
    nome: string,
    idade: number,
    telefone: string,
    cidade: string,
    email: string,

){
    this.nome = nome
    this.idade = idade
    this.telefone = telefone
    this.cidade = cidade
    this.email = email

}
vernome(){
    console.log(`seu nome é : ${this.nome}`);
}
veridade(){
    console.log(`sua idade é : ${this.idade}`)
}
vertelefone(){
    console.log(`seu telefone é : ${this.telefone}`)
}
vercidade(){
    console.log(`sua cidde é : ${this.cidade}`)
}
veremail(){
    console.log(`seu email é : ${this.email}`)
}


}