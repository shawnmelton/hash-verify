import React from 'react';
import Tweet from '../../components/shared/tweet';
import Author from '../../components/shared/author';

const template = (component) => {
    return (
        <div className="pt50">
            <a className="clearFix mb15 block cursor txtWhite" onClick={(e) => {
                component.onReturnClick(e);
            }}>
                <span className="material-icons left mr5 block">keyboard_backspace</span>
                <strong className="left block">Back</strong>
            </a>
            <h3 className="mb25">
                #{component.hashTag} Conversation
            </h3>
            <div className="clearFix">
                <div>
                    {
                        component.state.tweets.map((tweet, index) => {
                            return <Tweet 
                                        key={index}
                                        data={tweet}
                                        selected={component.state.selectedTweet !== null && component.state.selectedTweet.getId() === tweet.getId()}
                                        selectionCallback={(tweet) => {
                                            component.onTweetSelection(tweet);
                                        }} />
                        })
                    }
                </div>
                {
                    component.state.selectedTweet !== null ? <Author data={component.state.selectedTweet.getAuthor()} tweetId={component.state.selectedTweet.getId()} /> : ''
                }
            </div>
        </div>
    )
};
module.exports = template;