const Book = require ('./book')


// criação webservices
Book.methods(['get','post','put','delete']) //métodos que serão usados na db
Book.updateOptions({new: true, runValidators: true}) //quando atualiza, mostrar dado novo e faz validações (se dado é válido ou não)

Book.route('list', (req, res, next) => {
    Book.find({},'title author genre')
        .populate('author genre')
        .exec(function(err,books){
                res.json(books)
    })
});

Book.route('genres', (req, res, next) => { // número de livros por genero
    Book.aggregate([
        {$group: {_id: "$genre",
                  count: {$sum : 1}
            }}, {$sort: {count: 1}}
        // {$group: {_id:
        //             { "Genre" : "$genre",
        //                "Title": "$title",
        //                 count: { $sum: 1}
        //             }
        // }},

        ], (err, books) => {
            if(err) {
                res.status(500).json({errors: [err]})
            } else {
                res.json(books)
            }
    })

});


module.exports = Book