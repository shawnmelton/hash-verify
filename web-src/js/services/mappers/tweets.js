import Tweet from '../../models/tweet';
import Author from '../../models/author';

class TweetsMapper {
    map(data) {
        const tweets = [];

        data.forEach((item) => {
            const author = new Author();
            author.setAvatar(item.user.profile_image_url_https.replace('_normal', '_200x200'));
            author.setBannerImage(item.user.profile_banner_url);
            author.setCreatedDate(item.user.created_at);
            author.setDescription(item.user.description);
            author.setFavoritesCount(item.user.favourites_count);
            author.setFollowersCount(item.user.followers_count);
            author.setFriendsCount(item.user.friends_count);
            author.setUserName(item.user.name);
            author.setUserScreenName(item.user.screen_name);

            const tweet = new Tweet();
            tweet.setAuthor(author);
            tweet.setCreatedDate(item.created_at);
            tweet.setFavoritesCount(item.favorite_count);
            tweet.setMedia(item.entities);
            tweet.setRetweetsCount(item.retweet_count);
            tweet.setText(item.text);

            tweets.push(tweet);
        });

        return tweets;
    }
}

const mapper = new TweetsMapper();
module.exports = mapper;