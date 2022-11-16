export class EletronicoCelular{
    marca: string;
    modelo: string;
    cor: string;
    mei: string;

constructor(
    marca: string,
    modelo: string,
    cor: string,
    mei: string,
){
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.mei = mei

}
vermarca(){
    console.log(`a  marca de celular é : ${this.marca}`)
}
vermodelo(){
    console.log(`a marca é : ${this.marca}`)
}
vercor(){
    console.log(`a cor é : ${this.cor}`)
}
vermei(){
    console.log(`o mei é : ${this.mei}`)
}
}