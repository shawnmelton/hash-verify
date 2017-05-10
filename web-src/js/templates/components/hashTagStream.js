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
            <div className="clearFix">
                <div className="left">
                    {
                        component.state.tweets.map((tweet, index) => {
                            return <Tweet key={index} data={tweet} selectionCallback={(tweet) => {
                                component.onTweetSelection(tweet);
                            }} />
                        })
                    }
                </div>
                {
                    component.state.selectedTweet !== null ?
                        <div className="right tweetAuthor bgTransBlack txtWhite borderBox p20-25 relative">
                            <img src={component.state.selectedTweet.getAuthor().getBannerImage()} className="absolute top0 left0 widthFull" />
                            <img src={component.state.selectedTweet.getAuthor().getAvatar()} className="center mt100 mb50 border borderWidth3 borderRadius3 relative boxShadow tweetAuthorAvatar" />
                            <h4 className="mb5 fw800 fs150 txtCenter">{component.state.selectedTweet.getAuthor().getName()}</h4>
                            <h5 className="mb5 fs110 txtCenter">@{component.state.selectedTweet.getAuthor().getScreenName()}</h5>
                            <p className="mb15 lineHeight18">{component.state.selectedTweet.getAuthor().getDescription()}</p>
                        </div>
                        : ''
                }
            </div>
        </div>
    )
};
module.exports = template;