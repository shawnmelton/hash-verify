import React from 'react';
import Tweet from '../../components/shared/tweet';

const template = (component) => {
    return (
        <div className="pt50 pb50">
            <a className="clearFix mb15 block cursor txtWhite" onClick={(e) => {
                component.onReturnClick(e);
            }}>
                <span className="material-icons left mr5 block">keyboard_backspace</span>
                <strong className="left block">Back</strong>
            </a>
            <h3 className="mb25">#{component.hashTag} Conversation</h3>
            {
                component.state.tweets.map((tweet, index) => {
                    return <Tweet key={index} data={tweet} />
                })
            }
        </div>
    )
};
module.exports = template;