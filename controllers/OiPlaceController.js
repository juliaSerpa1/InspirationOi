module.exports = {
    index(req,res,next){
        res.render('oiplace',{
            title: 'Oi Place'
        })
    },
    comprar(req,res,next){
        res.send({message:'adicionado no carrinho com sucesso!'})
    }
} 