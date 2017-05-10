import React from 'react';
import template from '../../templates/components/shared/tweet';

class Tweet extends React.Component {
    cardClick(e) {
        e.preventDefault();
        this.props.selectionCallback(this.props.selected ? null : this.props.data);
    }

    render() {
        return template(this);
    }
}

module.exports = Tweet;