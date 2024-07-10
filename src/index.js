const express = require('express');
const connect = require('./config/database')
const Tweet = require('./models/tweet')
const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comment')

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

    // const tweet = await Tweet.findById('668d2e9c63517f1c6fa4b430');
    // tweet.userEmail = 'test@123';
    // tweet.save();

    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content:'First tweet with comment'});
    // tweet.comments.push({content: 'first comment is created'});
    // await tweet.save();

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content:'Latest tweet is here'});
    // const comment = await Comment.create({content: 'latest comment is here'})
    // tweet.comments.push(comment);
    // // await tweet.save();
    // const tweet = await tweetRepo.getWithComments('668d5ff03753fbdaa83ff78d');

    const tweet = await tweetRepo.create({content: 'with hooks 1'})
    console.log(tweet);
})