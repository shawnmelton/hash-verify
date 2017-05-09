import React from 'react';
import HashTagSearch from '../../components/shared/hashTagSearch';

const template = (component) => {
    return (
        <div className="pt50 pb50">
            <h3 className="mb15">Join the Conversation</h3>
            <p className="mb50 lineHeight18">
                To get started, use the form field below to enter a trending hashtag and click on a tweet to research it.  We will pull up tweets for that hashtag 
                so you can join in on the conversation as its happening. Also, you can <a className="fw800 cursor txtWhite" onClick={(e) => { component.navigateToAbout(e); }}>click here</a> to learn more about this application.
            </p>
            <HashTagSearch history={component.props.history} />
        </div>
    )
};
module.exports = template;