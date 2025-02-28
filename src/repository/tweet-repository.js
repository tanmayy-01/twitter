import Tweet from "../models/tweet.js";

class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path : 'comments'});
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async update(id, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(id, data,{new: true});
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
}

export default TweetRepository;