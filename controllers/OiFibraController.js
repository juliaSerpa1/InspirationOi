module.exports = {
    index(req,res,next){
        res.render('oifibra',{
            title: 'Oi Fibra'
        })
    },
    contratar(req,res,next){
        res.send('Plano contratado com sucesso!')
    }
}