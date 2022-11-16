export class Avião{
    assento: number;
    assentoPreferencial: number;

constructor(
    assento: number,
    assentoPreferencial: number,
){
    this.assento = assento
    this.assentoPreferencial = assentoPreferencial

}
verassento(){
    console.log(`seu assento é : ${this.assento}`)

}
verassentoPreferencial(){
    console.log(`assento preferencial é : ${this.assentoPreferencial}`)
}




}