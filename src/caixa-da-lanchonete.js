// import { ValidadorCaixaDaLanchonete } from "./validador-caixa-da-lanchonete"; 
import { ValidadorCaixaDaLanchonete } from "./validador-caixa-da-lanchonete";
import { FormaDePagamento } from "./forma-de-pagamento";

class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        const validador = new ValidadorCaixaDaLanchonete()
        

        try {
            const pagador = new FormaDePagamento(metodoDePagamento) 

            validador.analisarTamanhoCaixa(itens)

                let valorBruto = 0; 
                itens.map((item) => {
                    const [pedido, quantity]= item.split(",")
                    
                    validador.analisarQtdPedido(quantity)

                    const valor = this.calcularValorDoProduto(pedido, itens)
                         
                
                    valorBruto += valor * quantity
                })

            const valorFinal = String(pagador.calcularValorFinal(valorBruto).toFixed(2))
            
            const valorDaCompra = valorFinal.replace(".", ",")

            return `R$ ${valorDaCompra}`;
        
        } catch (error) {

            return error.message
        }
        
    }

    calcularValorDoProduto(pedido, itens){
        let value;

        const validador = new ValidadorCaixaDaLanchonete()

        switch(pedido){
            case "cafe":
                value = 3
                break;

            case "chantily":
                validador.analisarIntegridadeDoPedido("chantily", itens)
                value = 1.50                   
                break;

            case "suco":
                value = 6.20
                break;

            case "sanduiche":
                value = 6.50
                break;

            case "queijo":
                validador.analisarIntegridadeDoPedido("queijo", itens)
                value = 2
                break;

            case "salgado":
                value =  7.25
                break;

            case "combo1":
                value = 9.50
                break;

            case "combo2":
                value = 7.50
                break;

            default: 
                throw new Error("Item inválido!")
        } 

        return value
    }
}

export { CaixaDaLanchonete };


