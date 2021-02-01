const mongoose = require('mongoose')

mongoose.Promise = global.Promise // nao aparecer uns warnings
const dev_db_url = 'mongodb+srv://du:misha2018@cluster0.mof3f.mongodb.net/local_library?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true})

