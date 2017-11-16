import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import CompetitorSeeding from './CompetitorSeeding';
import CompetitorForm from './CompetitorForm';

const CompetitorEntry = (props) => {
    return (
        <div>
            <h1>Competitor Entry</h1>
            <hr/>
            <div>
                <CompetitorSeeding competitors={props.competitors}/>
            </div>
            <hr/>
            <CompetitorForm onSubmit={props.addCompetitor}/>
            <hr/>
            <Link to={{
                pathname: '/pool',
                search: '?sort=name',
                hash: '#the-hash',
                state: { fromDashboard: true }
            }}>
                Start Pool
            </Link>
        </div>
    );
};

CompetitorEntry.propTypes = {
    competitors: PropTypes.array.isRequired,
    addCompetitor: PropTypes.func.isRequired
};

export default CompetitorEntry;