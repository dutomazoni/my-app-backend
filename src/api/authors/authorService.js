const Author = require ('./author')

// criação webservices
Author.methods(['get','post','put','delete']) //métodos que serão usados na db
Author.updateOptions({new: true, runValidators: true}) //quando atualiza, mostrar dado novo e faz validações (se dado é válido ou não)

module.exports = Author