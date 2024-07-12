const express = require('express');
const connect = require('./config/database')
const {HashtagRepository}= require('./repository/index')

const app = express();
const PORT = 3000

app.listen(PORT, async () => {
    console.log(`Server is up at port ${PORT}`);
    await connect();
    console.log('DB is connected');

    const tagRepo = new HashtagRepository();
    const tags = tagRepo.bulkCreate([
        {
            title: 'Trend',
            tweets: []
        },
        {
            title: 'fun',
            tweets: []
        },
        {
            title: 'Coding',
            tweets: []
        },
        {
            title: 'Growth',
            tweets: []
        },
        {
            title: 'Life',
            tweets: []
        },
    ]) 

})