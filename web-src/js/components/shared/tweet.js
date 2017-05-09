import React from 'react';
import template from '../../templates/components/shared/tweet';

class Tweet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    }

    cardClick(e) {
        e.preventDefault();

        this.setState({
            selected: !this.state.selected
        });
    }

    render() {
        return template(this);
    }
}

module.exports = Tweet;