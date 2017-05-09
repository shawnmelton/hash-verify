import React from 'react';
import template from '../templates/components/about';

class About extends React.Component {

    onReturnClick(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return template(this);
    }
}

module.exports = About;