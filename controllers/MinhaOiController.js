module.exports = {
    index(req,res,next){
        res.render('minhaoi',{
            title: 'Minha Oi'
        })
    },
    pagar(req,res,next){
        res.send({message:'paga com sucesso!'})
    }
} 