import React from 'react';
import PropTypes from 'prop-types';
import CompetitorName from './CompetitorName';

const CompetitorSeeding = (props) => {
    const competitors = props.competitors.map(
        (competitor, index) => (
            <div key={competitor.id}>
                <span>
                    {index + 1}.&nbsp;
                    <CompetitorName key={competitor.id} competitor={competitor}/>
                </span>
            </div>
        )
    );

    return (
        <div>
            {competitors}
        </div>
    );
};

CompetitorSeeding.propTypes = {
    competitors: PropTypes.array.isRequired
};

export default CompetitorSeeding;