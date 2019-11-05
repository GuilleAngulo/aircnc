const mongoose = require("mongoose");

const Spotchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    },
});

//Mongo "virtual" allows to create a new entity field only in javascript (not into database)
Spotchema.virtual('thumbnail_url').get(function() {
    return `http://192.168.15.22:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', Spotchema);