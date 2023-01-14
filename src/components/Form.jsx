import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form action="">

          <label htmlFor="name">
            {' '}
            Nome:
            <input type="text" id="name" name="name" data-testid="name-input" />
          </label>
          <br />
          <label htmlFor="description">
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              data-testid="description-input"
            />

          </label>
          <br />
          <label htmlFor="atr1">
            <input
              type="number"
              id="atr1"
              name="atr1"
              data-testid="attr1-input"
            />
          </label>
          <br />
          <label htmlFor="atr2">
            <input
              type="number"
              id="atr2"
              name="atr2"
              data-testid="attr2-input"
            />
          </label>
          <br />
          <label htmlFor="atr3">
            <input
              type="number"
              id="atr3"
              name="atr3"
              data-testid="attr3-input"
            />
          </label>
          <br />
          <label htmlFor="image">
            <input
              type="text"
              id="image"
              name="name"
              data-testid="image-input"
            />
          </label>
          <br />
          <label htmlFor="rarity">
            Raridade:
            <select name="Raridade" id="rarity" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito-raro">muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="b">
            <input type="checkbox" name="trunfo-input" id="" data-testid="trunfo-input" />
          </label>
          <br />
          <button type="submit" data-testid="save-button">
            Salvar
          </button>

        </form>
      </div>
    );
  }
}
