import React from 'react';

const template = (component) => {
    return (
        <div className="bgWhite boxShadow borderBox borderDkGrey p20-25 tweet clearFix mb15 cursor relative" onClick={(e) => {
            component.cardClick(e);
        }}>
            <div className="left tweetAvatar mr15">
                <img src={component.props.data.getAuthor().getAvatar()} className="widthFull borderRadius3" />
            </div>
            <div className="left tweetBody fs90">
                <p className="clearFix mb5 txtDkGrey">
                    <span className="block right txtGrey">{component.props.data.getFormattedCreatedDate()}</span>
                    <strong className="block left mr15">{component.props.data.getAuthor().getName()}</strong>
                    <span className="block left txtGrey">@{component.props.data.getAuthor().getScreenName()}</span>
                </p>
                <p className="lineHeight18 mb10">
                    {component.props.data.getText()}
                </p>
                {
                    component.props.data.hasMedia() && component.props.data.getImage() !== null ?
                        <img src={component.props.data.getImage()} className="widthFull mb15" />
                        : ''
                }
            </div>
            {
                component.props.selected ?
                    <div className="absolute top0 left0 right0 bottom0 txtCenter bgTransGreen txtWhite fw800 txtUpperCase animateOpacityIn borderBox p20-25 shadow">
                        <p className="clearFix tweetMask absolute height40">
                            <span className="material-icons left mr5 block fs200">check</span>
                            <strong className="block left fs150">Selected Tweet</strong>
                        </p>
                    </div>
                    : ''
            }
        </div>
    )
};
module.exports = template;