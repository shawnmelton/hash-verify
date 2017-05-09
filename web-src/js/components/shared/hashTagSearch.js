import React from 'react';

import formValidator from '../../services/validators/hashTagForm';

import template from '../../templates/components/shared/hashTagSearch';

class HashTagSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                error: false,
                button: {
                    text: 'Go'
                }
            }
        };
    }

    processSubmit(e) {
        e.preventDefault();
        this.updateButtonText('...');
        if (formValidator.submissionIsValid()) {
            
        } else {
            this.updateButtonText('Go');
        }
    }

    render() {
        return template(this);
    }

    textFieldChange(e) {
        e.preventDefault();
        console.log(text);
    }

    _updateButtonText(text) {
        this.setState({
            form: {
                button: {
                    text: text
                }
            }
        });
    }
}

module.exports = HashTagSearch;