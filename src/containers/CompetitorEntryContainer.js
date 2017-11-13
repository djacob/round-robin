import React, {Component} from 'react';
import CompetitorEntry from '../components/CompetitorEntry';

class CompetitorEntryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            __id_ptr: 5,
            competitors: [
                {firstName: 'steve', lastName: 'stever', id: '1'},
                {firstName: 'steve2', lastName: 'stever2', id: '2'},
                {firstName: 'steve3', lastName: 'stever3', id: '3'},
                {firstName: 'steve4', lastName: 'stever4', id: '4'},
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
            competitors: [...this.state.competitors, {...competitor, id: this.state.__id_ptr}]
        });
    }
}

export default CompetitorEntryContainer;