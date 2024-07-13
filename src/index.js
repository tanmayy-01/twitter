const express = require('express');
const connect = require('./config/database');
const {TweetService} = require('./services')

const app = express();
const PORT = 3000

app.listen(PORT, async () => {
    console.log(`Server is up at port ${PORT}`);
    await connect();
    console.log('DB is connected');

    const service = new TweetService();
    const tweet = service.create({
        content: 'Join good #Organisation bor better #Growth'
    })

    console.log(tweet);
    
})