const express = require('express');
const connect = require('./config/database')
const Tweet = require('./models/tweet')

const app = express();
const PORT = 3000

app.listen(PORT, async () => {
    console.log(`Server is up at port ${PORT}`);
    await connect();
    console.log('DB is connected');
    // const tweet = await Tweet.create({
    //     content: 'Second tweet',
    //     userEmail: 'example@123'
    // })

    // const tweet = await Tweet.find({ content: 'First tweet'});

    const tweet = await Tweet.findById('668d2e9c63517f1c6fa4b430');
    tweet.userEmail = 'test@123';
    tweet.save();

    console.log(tweet);
})