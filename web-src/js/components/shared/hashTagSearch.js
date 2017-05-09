import React from 'react';
import formValidator from '../../services/validators/hashTagForm';
import template from '../../templates/components/shared/hashTagSearch';
import storage from '../../services/data/localStorage';

class HashTagSearch extends React.Component {
    constructor(props) {
        super(props);

        this.hashTagEntry = null;
        this.state = {
            form: {
                error: false,
                button: {
                    text: 'Go',
                    disabled: false
                }
            }
        };
    }

    _updateState(buttonText, formError) {
        this.setState({
            form: {
                error: formError,
                button: {
                    text: buttonText,
                    disabled: (buttonText === '...')
                }
            }
        });
    }

    processSubmit(e) {
        e.preventDefault();
        this._updateState('...', false);
        if (this.hashTagEntry !== null && this.hashTagEntry.length > 2 && formValidator.submissionIsValid(this.hashTagEntry)) {
            storage.setItem('hashtag', this.hashTagEntry);
            this.props.history.push('/stream/'+ this.hashTagEntry);
        } else {
            this._updateState('Go', true);
        }
    }

    render() {
        return template(this);
    }

    textFieldChange(e) {
        if (this.state.form.error === true) {
            this._updateState('Go', false);
        }

        this.hashTagEntry = e.target.value;
    }
}

module.exports = HashTagSearch;