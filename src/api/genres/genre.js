const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
    {
        name: { type: String, required: true } //reference to the associated book
    }
);

module.exports = restful.model('Genre', GenreSchema);