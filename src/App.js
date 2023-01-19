import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ExcludeCard from './components/ExcludeCard';
// import Filter from './components/Filter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    hasTrunfo: false,
    setFilter: [],
  };

  trunfo = () => {
    this.setState(({
      cardTrunfo,
    }) => {
      if (cardTrunfo) { this.setState({ hasTrunfo: true }); }
    });
  };

  saveCard = (event) => {
    this.trunfo();
    this.setState((pState) => ({
      cards: [...pState.cards, pState],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      setFilter: [...pState.cards, pState],
    }));
    event.preventDefault();
    this.validForm();
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.validForm({ target });
  };

  validForm = () => {
    this.setState(({
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    }) => {
      const attr1 = parseInt(cardAttr1, 10);
      const attr2 = parseInt(cardAttr2, 10);
      const attr3 = parseInt(cardAttr3, 10);
      const limit = 210;
      const limit2 = 90;
      const vali1 = attr1 >= 0 && attr1 <= limit2;
      const vali2 = attr2 >= 0 && attr2 <= limit2;
      const vali3 = attr3 >= 0 && attr3 <= limit2;
      const valiSum = (attr1 + attr2 + attr3) <= limit;
      if (vali1
        && vali2
        && vali3
        && valiSum
        && cardName
        && cardDescription
        && cardImage) {
        return { isSaveButtonDisabled: false };
      } return { isSaveButtonDisabled: true };
    });
  };

  cardExclude = (cardName, cardTrunfo) => {
    const { cards } = this.state;
    const newdeck = cards.filter((card) => card.cardName !== cardName);
    if (cardTrunfo) { this.setState({ hasTrunfo: false }); }
    this.setState({
      cards: newdeck,
      setFilter: newdeck,
    });
  };

  filterCards = ({ target }) => {
    const { value } = target;
    const { cards } = this.state;
    const filterON = cards
      .filter((card) => card.cardName.includes(value));
    this.setState({
      setFilter: filterON,
    });
  };

  filterRarity = ({ target }) => {
    const { value } = target;
    console.log(value);
    const { cards } = this.state;
    if (value !== 'todas') {
      const filterON = cards
        .filter((card) => card.cardRare === value);
      this.setState({
        setFilter: filterON,
      });
    } else {
      this.setState({
        setFilter: cards,
      });
    }
  };

  filterTrunfo = ({ target }) => {
    const { checked } = target;
    console.log(checked);
    const { cards } = this.state;
    const filterON = cards
      .filter((card) => card.cardTrunfo === true);
    if (checked) {
      this.setState({
        setFilter: filterON,
      });
    } else {
      this.setState({
        setFilter: cards,
      });
    }
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      setFilter,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.saveCard }
          hasTrunfo={ hasTrunfo }
        />
        <br />
        <p>preview</p>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h2>SEU DECK</h2>
        <input
          type="text"
          onChange={ this.filterCards }
          data-testid="name-filter"
        />

        <select
          name="select"
          data-testid="rare-filter"
          defaultValue="todas"
          onClick={ this.filterRarity }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="checktrunfo">
          <input
            id="checktrunfo"
            type="checkbox"
            onChange={ this.filterTrunfo }
            data-testid="trunfo-filter"
          />
          checando Trunfo
        </label>

        {
          setFilter
            .map((card) => (
              <section key={ card.name }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <ExcludeCard
                  cardExclude={ () => this.cardExclude(
                    card.cardName,
                    card.cardTrunfo,
                  ) }
                />
              </section>
            ))
        }
      </div>
    );
  }
}

export default App;
