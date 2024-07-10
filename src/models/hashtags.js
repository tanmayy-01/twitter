const mongoose  = require('mongoose');

const hashtagSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be exceed more than 250 characters ']
    },
   
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
},{timestamps:true})

const Hashtag = mongoose.model('Hashtag', hashtagSchema);
module.exports = Hashtag;