import React from 'react';
import TwitterSearch from '../services/vendor/twitter/search';
import template from '../templates/components/hashTagStream';
import storage from '../services/data/localStorage';

class HashTagStream extends React.Component {
    constructor(props) {
        super(props);

        this.hashTag = storage.getItem('hashtag');

        this.state = {
            tweets: [],
            error: this.hashTag === null
        };
    }

    async _loadTweets() {
        const request = new TwitterSearch();
        this._updateState(await request.byHashTag(this.hashTag), false);
    }

    _updateState(tweets, error) {
        this.setState({
            tweets: tweets,
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

    render() {
        return template(this);
    }
}

module.exports = HashTagStream;