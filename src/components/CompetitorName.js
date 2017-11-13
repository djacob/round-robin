import React from 'react';
import PropTypes from 'prop-types';

const CompetitorName = (props) => {
  return (
      <div>
          {props.competitor.firstName} {props.competitor.lastName}
      </div>
  );
};

CompetitorName.propTypes = {
    competitor: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }).isRequired
};

export default CompetitorName;