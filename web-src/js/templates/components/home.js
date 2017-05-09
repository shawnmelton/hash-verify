import React from 'react';
import HashTagSearch from '../../components/shared/hashTagSearch';

const template = () => {
    return (
        <div className="pt50 pb50">
            <h3 className="mb15">Join the Conversation</h3>
            <p className="mb25 lineHeight18">
                To get started, use the form field below to enter a trending hashtag and drag a tweet right to research it.  We will pull up tweets for that hashtag 
                so you can join in on the conversation as its happening. 
            </p>
            <HashTagSearch />
        </div>
    )
};
module.exports = template;