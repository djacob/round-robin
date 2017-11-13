import React, {Component} from 'react';
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
            <form onSubmit={this.submitForm}>
                <input type="input" name="firstName" value={this.state.firstName} onChange={this.setField}/>
                <input type="input" name="lastName" value={this.state.lastName} onChange={this.setField}/>
                <button type="submit">Create Competitor</button>
            </form>
        );
    };

    setField = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    };

    submitForm = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        this.props.submitCompetitor(this.state);
    };
}

CompetitorForm.propTypes = {
    submitCompetitor: PropTypes.func.isRequired
};

export default CompetitorForm;