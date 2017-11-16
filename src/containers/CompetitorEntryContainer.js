import React, {Component} from 'react';
import CompetitorEntry from '../components/CompetitorEntry';

class CompetitorEntryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            __id_ptr: 1,
            competitors: [
                {firstName: 'steve', lastName: 'harrington', id: '0'},
            ]
        };
    }

    render() {
        return (
            <CompetitorEntry competitors={this.state.competitors} addCompetitor={this.addCompetitor}/>
        );
    }

    addCompetitor = (competitor) => {
        this.setState({
            __id_ptr: this.state.__id_ptr + 1,
            competitors: [
                ...this.state.competitors,
                {
                    ...competitor,
                    id: this.state.__id_ptr
                }
            ]
        });
    }
}

export default CompetitorEntryContainer;