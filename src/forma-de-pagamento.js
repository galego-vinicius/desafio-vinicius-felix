class FormaDePagamento{
    constructor(metodoDePagamento){
        this.metodoDePagamento = metodoDePagamento;
    }

    calcularValorFinal(valorBruto){
        if(this.metodoDePagamento === "dinheiro"){
            const taxa = 0.95 
            return valorBruto * taxa

        } else if(this.metodoDePagamento === "debito"){
            return valorBruto

        } else if(this.metodoDePagamento === "credito" ){
            return valorBruto * 1.03
            
        } else {
            throw new Error("Forma de pagamento inválida!")
        }
    }   
}

export { FormaDePagamento }