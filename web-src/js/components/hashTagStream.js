import React from 'react';
import TwitterSearch from '../services/vendor/twitter/search';
import template from '../templates/components/hashTagStream';
import storage from '../services/data/localStorage';
import mapper from '../services/mappers/tweets';

class HashTagStream extends React.Component {
    constructor(props) {
        super(props);

        this.hashTag = storage.getItem('hashtag');

        this.state = {
            tweets: [],
            selectedTweet: null,
            error: this.hashTag === null
        };
    }

    async _loadTweets() {
        const request = new TwitterSearch();
        const tweets = await request.byHashTag(this.hashTag);
        this._updateState(mapper.map(tweets), null, false);
    }

    _updateState(tweets, selectedTweet, error) {
        this.setState({
            tweets: tweets,
            selectedTweet: selectedTweet,
            error: error
        });
    }

    componentDidMount() {
        if (this.hashTag !== null) {
            this._loadTweets();
        }
    }

    onReturnClick(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    onTweetSelection(tweet) {
        this._updateState(this.state.tweets, tweet, false);
    }

    render() {
        return template(this);
    }
}

module.exports = HashTagStream;