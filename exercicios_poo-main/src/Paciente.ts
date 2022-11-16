export class Paciente{
    nCadastro: number;
    nome: string;
    telefone: string;
    sintoma: string;
    convenio: string;

constructor(
    nCadastro: number,
    nome: string,
    telefone: string,
    sintoma: string,
    convenio: string,
){
    this.nCadastro = nCadastro;
    this.nome = nome;
    this.telefone = telefone;
    this.sintoma = sintoma;
    this.convenio = convenio;
}
vernCadastro(){
    console.log(`o numero do cadastro é : ${this.nCadastro}, \nseu nome é : ${this.nome}, \nseu telefone é : ${this.telefone}, \nseu sintoma é : ${this.sintoma}, \nseu convenio é : ${this.convenio}`)
}
}