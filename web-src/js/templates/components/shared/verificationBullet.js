import React from 'react';

const template = (component) => {
    console.log(component.props.valid);
    return (
        <li className="clearFix mb5">
            <span className="left mr5 material-icons">{ component.props.isValid ? 'check' : 'highlight_off' }</span>
            <strong className="left">{ component.props.isValid ? component.props.validMessage : component.props.invalidMessage }</strong>
        </li>
    )
};
module.exports = template;