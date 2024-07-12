const {TweetRepository, HashtagRepository} = require('../repository/index')

class TweetService {
    constructor () {
        this.tweetRepository = new TweetRepository(); 
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map(tag => tag.substring(1));// this regex extracts hashtags
        console.log("tags", tags)
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags)
        alreadyPresentTags = alreadyPresentTags.map(tag => tag.title);

        let newTags = tags.filter(tag => !alreadyPresentTags.includes(tag));

        newTags = newTags.map(tag => {
            return {
                title: tag,
                tweets: [tweet.id]
            }
        })
        const response = await this.hashtagRepository.bulkCreate(newTags);
        console.log(response)

        return tweet;
    }
}

module.exports = TweetService;