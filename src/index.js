const express = require('express')
const app = express ()

//*ENDPOINT - GET => CLIENTES
app.get ('/clientes/:id', function(resquest, response){ //REQUEST VAI TRAZER TODAS AS INFORMAÇÕES QUE ESTÃO SENDO ENVIADAS PELA APLICAÇÃO CLIENTE
    return response.json({
        message:'Olá... deu tudo certo... !!! agora em JSON' // RESPONSE usado para formatar tudo que será devolvido a aplicação cliente
    })
})

//*ENDPOINT - POST => CADASTRO DE PRODUTOS
app.post('/cadastro-produtos',function(request,response) {
    return response.json({
        message: 'Produto cadastrado com sucesso!!!'
    })
})

//*ENDPOINT - PUT => ATUALIZAR PRODUTO
//*PUT ATUALIZA TODAS AS INFORMAÇÕES DO PRODUTO
app.put('/atualizar-produto',function(request,response) {
    return response.json({
        message: 'Produto cadastrado com sucesso!!!'
    })
})

//*ENDPOINT - PATCH => ATUALIZAR PRODUTO
//* PATCH ATUALIZA UMA DETERMINADA INFORMAÇÃO DO PRODUTO
app.patch('/atualizar-produto',function(request,response) {
    return response.json({
        message: 'Produto cadastrado com sucesso!!!'
    })
})

//*ENDPOINT - DELETE => APAGAR OU DELETAR PRODUTO
//* DELETA UM PRODUTO
app.delete('/deletar-produto',function(request,response) {
    return response.json({
        message: 'Produto apagado com sucesso!!!'
    })
})


app.listen(3000, () =>{ // ESTA RETORNANDO A FUNÇÃO NO TERMINAL PARA VER SE ELA ESTA FUNCIONANDO CORRETAMENTE
    console.log('Server started on port 3000') // EXIBE A MSG NO TERMINAL QUANDO A FUNÇÃO FUNCIONA CORRETAMENTE
})


