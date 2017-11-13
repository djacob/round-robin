import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CompetitorName from './CompetitorName';
import CompetitorForm from './CompetitorForm';

class CompetitorEntry extends Component {
    render() {

        const competitors = this.props.competitors.map(
            competitor => <CompetitorName key={competitor.id} competitor={competitor}/>
        );

        return (
            <div>
                <h1>Competitors</h1>
                <hr/>
                <div>
                    {competitors}
                </div>
                <hr/>
                <CompetitorForm submitCompetitor={this.props.addCompetitor}/>
            </div>
        );
    }
}

CompetitorEntry.propTypes = {
    competitors: PropTypes.array.isRequired,
    addCompetitor: PropTypes.func.isRequired
};

export default CompetitorEntry;