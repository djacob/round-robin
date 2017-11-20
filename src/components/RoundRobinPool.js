import React from 'react';
import PropTypes from 'prop-types';

const RoundRobinPool = (props) => {

    if (!props.pool) {
        return (
            <div>
                Pool does not exist
            </div>
        );
    }

    const competitors = props.pool.competitors.map(competitor => (
        <div key={competitor.id}>
            {competitor.firstName} {competitor.lastName}
        </div>)
    );

    return (
        <div>
            {competitors}
        </div>
    );
};

RoundRobinPool.propTypes = {
    pool: PropTypes.shape({
        competitors: PropTypes.array.isRequired
    }).isRequired
};

export default RoundRobinPool;