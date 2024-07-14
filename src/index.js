import express from 'express';
import connect from './config/database.js'
// import { TweetService } from './services/index.js';
import TweetService from './services/tweet-service.js';

const app = express();
const PORT = 3000

app.listen(PORT, async () => {
    console.log(`Server is up at port ${PORT}`);
    await connect();
    console.log('DB is connected');

    const service = new TweetService();
    const tweet = service.create({
        content: 'Done with #Refactor?'
    })

    console.log(tweet);
    
})