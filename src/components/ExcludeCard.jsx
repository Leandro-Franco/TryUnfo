import React from 'react';
import PropTypes from 'prop-types';

class ExcludeCard extends React.Component {
  render() {
    const { cardExclude } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ cardExclude }
      >
        exclude
      </button>
    );
  }
}

ExcludeCard.propTypes = {
  cardExclude: PropTypes.func,
}.isRequired;

export default ExcludeCard;
