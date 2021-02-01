const Genre = require ('./genre')

// criação webservices
Genre.methods(['get','post','put','delete']) //métodos que serão usados na db
Genre.updateOptions({new: true, runValidators: true}) //quando atualiza, mostrar dado novo e faz validações (se dado é válido ou não)

module.exports = Genre