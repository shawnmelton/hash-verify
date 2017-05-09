import React from 'react';

import TwitterSearch from '../services/vendor/twitter/search';

import template from '../templates/components/home';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hashTag: ''
        };
    }

    async _loadTweets() {
        const request = new TwitterSearch();
        const tweets = await request.byHashTag(this.state.hashTag);
    }

    render() {
        return template();
    }
}

module.exports = Home;