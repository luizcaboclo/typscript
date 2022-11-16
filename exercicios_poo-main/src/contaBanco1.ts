export class contaBanco{
    titular: string;
    agencia: string;
    conta: string;
    saldo: number;
  constructor(
    titular: string,
    agencia:string,
    conta: string,
    saldo: number,

){
    this.titular = titular;
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}
verSaldo(){ // metodos
    console.log(`o saldo da conta é: ${this.saldo}`);
}
sacar(valor: number){
    if(valor > 0 && valor <= this.saldo){
        this.saldo -= valor
        console.log(`saque de R$ ${valor} realizado com sucesso`);
    }else{ 
        console.log(`saque de R$ ${valor} indisponivel de ser sacado`);

    }
}
deposito(valor: number){
    if(valor > 0){
       this.saldo += valor
    
       
       console.log(`deposito de R$ ${valor} deposito realizado com sucesso`);
}else{
    console.log(`deposito de R$ ${valor} impossivel realizar deposito`);
}

}
}