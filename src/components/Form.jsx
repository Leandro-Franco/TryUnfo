import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form action="">
          <label htmlFor="name">
            {' '}
            Nome:
            <input
              type="text"
              id="name"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <br />

          <label htmlFor="description">
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <br />

          <label htmlFor="atr1">
            <input
              type="number"
              id="atr1"
              name="atr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
          <br />

          <label htmlFor="atr2">
            <input
              type="number"
              id="atr2"
              name="atr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
          <br />

          <label htmlFor="atr3">
            <input
              type="number"
              id="atr3"
              name="atr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
          <br />

          <label htmlFor="image">
            <input
              type="text"
              id="image"
              name="name"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <br />

          <label htmlFor="rarity">
            Raridade:
            <select
              name="Raridade"
              id="rarity"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />

          <label htmlFor="b">
            <input
              type="checkbox"
              name="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              id="b"
              data-testid="trunfo-input"
            />
          </label>
          <br />

          <button
            type="submit"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  // hasTrunfo: PropTypes.boolean.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
