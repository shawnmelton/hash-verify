import React from 'react';
import template from '../templates/components/home';

class Home extends React.Component {
    navigateToAbout(e) {
        e.preventDefault();
        this.props.history.push('/about');
    }

    render() {
        return template(this);
    }
}

module.exports = Home;