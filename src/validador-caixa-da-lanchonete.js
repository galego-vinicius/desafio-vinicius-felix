class ValidadorCaixaDaLanchonete{
    
    analisarTamanhoCaixa(itens){
        if(itens.length <= 0){
            throw new Error("Não há itens no carrinho de compra!")
        }
    }

    analisarQtdPedido(pedidoQtd){
        if(pedidoQtd <= 0){
            throw new Error("Quantidade inválida!")
        }
    }

    analisarIntegridadeDoPedido(pedido, compra){
        
        if(pedido === "chantily" && !compra.find(item => item.includes("cafe"))){
            throw new Error("Item extra não pode ser pedido sem o principal") 
        }  
        
        if(pedido === "queijo" && !compra.find(item => item.includes("sanduiche"))){
            throw new Error("Item extra não pode ser pedido sem o principal") 
        }   
    }
}

export { ValidadorCaixaDaLanchonete }