const mongoose = require('mongoose');

const feedSourceSchema = mongoose.Schema({
    name: String,
    type: {
        type: String,
        enum: ['rss-like' , 'third-party-api'],
        lowercase : true,
        trim: true
    },
    category: String,
    url: String
}, {
    timestamps : true
})

module.exports = mongoose.model('FeedSource', feedSourceSchema)