const BookInstance = require ('./bookInstance')

// criação webservices
BookInstance.methods(['get','post','put','delete']) //métodos que serão usados na db
BookInstance.updateOptions({new: true, runValidators: true}) //quando atualiza, mostrar dado novo e faz validações (se dado é válido ou não)

BookInstance.route('list', (req, res, next) => {
    // Book.find({},'title author genre', function(err, books){
    BookInstance.find({},'book')
        .populate('book')
        .exec(function(err,books){
            res.json(books)
        })
});


module.exports = BookInstance