import React from 'react';
import VerificationBullet from '../../../components/shared/verificationBullet';

const template = (component) => {
    return (
        <div className="fixed tweetAuthor bgTransBlack txtWhite borderBox p20-25 relative">
            <img src={component.props.data.getBannerImage()} className="absolute top0 left0 widthFull" />
            <img src={component.props.data.getAvatar()} className="center mt100 mb50 border borderWidth3 borderRadius3 relative boxShadow tweetAuthorAvatar" />
            <h4 className="fw800 fs150 txtCenter">{component.props.data.getName()}</h4>
            <h5 className="mb5 fs110 txtCenter">@{component.props.data.getScreenName()}</h5>
            <p className="mb15 lineHeight18 txtCenter">{component.props.data.getDescription()}</p>
            <ul className="noStyle p10-15 mb35 ml15">
                <VerificationBullet isValid={component.props.data.isValidAccount()} validMessage="Account appears to be real." invalidMessage="Account appears to be fake." />
            </ul>
            <div className="mb15 clearFix">
                <a className="block left mr15 bgBlue txtWhite txtCenter p20-25 boxShadow clearFix border shadow" href={component.props.data.getProfileUrl()} target="_blank">
                    <strong className="block left mr5">Twitter Profile</strong>
                    <span className="material-icons block left">keyboard_arrow_right</span>
                </a>
                <a className="block right bgGreen txtWhite txtCenter p20-25 boxShadow clearFix border shadow" href={component.props.data.getProfileUrl() +'/status/'+ component.props.tweetId} target="_blank">
                    <strong className="block left mr5">View Tweet</strong>
                    <span className="material-icons block left">keyboard_arrow_right</span>
                </a>
            </div>
        </div>
    )
};
module.exports = template;