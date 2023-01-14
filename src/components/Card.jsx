import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section>
        <h2 data-testid="name-card">{cardName}</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <article data-testid="description-card">{cardDescription}</article>
        <ol>
          <li data-testid="attr1-card">{cardAttr1}</li>
          <li data-testid="attr2-card">{cardAttr2}</li>
          <li data-testid="attr3-card">{cardAttr3}</li>
        </ol>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo
          ? <h2 data-testid="trunfo-card">Super Trunfo</h2>
          : null }
      </section>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
