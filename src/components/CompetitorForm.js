import React, {Component} from 'react';
import './CompetitorForm.css';
import PropTypes from 'prop-types';

class CompetitorForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    render() {
        return (
            <form className="competitorForm" onSubmit={this.submitForm}>
                <div className="fields">
                    <div className="field">
                        <label>First Name</label>
                        <input type="input" name="firstName" placeholder="e.g. Jane"
                               value={this.state.firstName} onChange={this.setField}/>
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="input" name="lastName" placeholder="e.g. Doe"
                               value={this.state.lastName} onChange={this.setField}/>
                    </div>
                </div>
                <div>
                    <button type="submit">Create Competitor</button>
                </div>

            </form>
        );
    };

    setField = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    };

    submitForm = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        this.props.onSubmit(this.state);
    };
}

CompetitorForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default CompetitorForm;