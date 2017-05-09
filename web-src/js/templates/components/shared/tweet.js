import React from 'react';
import dateFormatter from 'dateformat';

const parseDate = (datetime) => {
    const now = new Date();
    if (dateFormatter(now, 'm/d/yyyy') === dateFormatter(datetime, 'm/d/yyyy')) {
        return dateFormatter(datetime, 'h:MM TT');
    }

    if (dateFormatter(now, 'yyyy') === dateFormatter(datetime, 'yyyy')) {
        return dateFormatter(datetime, 'mmm d');
    }

    return dateFormatter(datetime, 'mmm d, yyyy');
}

const template = (component) => {
    return (
        <div className="bgWhite boxShadow borderBox borderDkGrey p20-25 tweet clearFix mb15 cursor relative" onClick={(e) => {
            component.cardClick(e);
        }}>
            <div className="left tweetAvatar mr15">
                <img src={component.props.data.user.profile_image_url_https} className="widthFull borderRadius3" />
            </div>
            <div className="left tweetBody fs90">
                <p className="clearFix mb5 txtDkGrey">
                    <span className="block right txtGrey">{parseDate(component.props.data.created_at)}</span>
                    <strong className="block left mr15">{component.props.data.user.name}</strong>
                    <span className="block left txtGrey">@{component.props.data.user.screen_name}</span>
                </p>
                <p className="lineHeight18">
                    {component.props.data.text}
                </p>
            </div>
            {
                component.state.selected ?
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