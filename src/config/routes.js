
const express = require('express')

// recebe o parametro server de server.js
module.exports = function(server) {

    // definir url base para as rotas
    const router = express.Router()
    server.use('/api', router)

    // rotas books
    const Book = require('../api/books/bookService')
    Book.register(router, '/books') // registrar no router todos os webservices

    // rotas genres
    const Genre = require('../api/genres/genreService')
    Genre.register(router, '/genres')

    // rotas authors
    const Author = require('../api/authors/authorService')
    Author.register(router, '/authors')

    // rotas instances
    const BookInstance = require('../api/bookInstances/bookInstanceService')
    BookInstance.register(router, '/bookInstances')

}