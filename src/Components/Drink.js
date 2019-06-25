import React, { Component } from 'react';
import ApiService from '../ApiServices/Services';

class Drink extends Component {
  state = {
    drink: ''
  };

  componentDidMount() {
    let drinkId = this.props.match.params.drinkId;
    ApiService.getDrinkDetails(drinkId).then(data =>
      this.setState({
        drink: data.drinks[0]
      })
    );
  }

  handleBack = () => {
    this.props.history.goBack()
  }

  drinkData = () => {
    let drinkInfo = this.state.drink;
    console.log(drinkInfo);
    return (
      <>
        <div className="heading-ctr">
          <h3 className="drink-name">{drinkInfo.strDrink}</h3>
          <p className="drink-type">
            Type: {drinkInfo.strAlcoholic} / {drinkInfo.strCategory}
          </p>
          <img src={drinkInfo.strDrinkThumb} alt={drinkInfo.strDrink} />
        </div>
        <p>Serve in: {drinkInfo.strGlass}</p>
        <p />
        <h4>Ingredients/Measurements:</h4>
        <p className="ingList">
          {drinkInfo.strMeasure1} {drinkInfo.strIngredient1}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure2} {drinkInfo.strIngredient2}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure3} {drinkInfo.strIngredient3}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure4} {drinkInfo.strIngredient4}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure5} {drinkInfo.strIngredient5}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure6} {drinkInfo.strIngredient6}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure7} {drinkInfo.strIngredient7}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure8} {drinkInfo.strIngredient8}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure9} {drinkInfo.strIngredient9}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure10} {drinkInfo.strIngredient10}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure11} {drinkInfo.strIngredient11}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure12} {drinkInfo.strIngredient12}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure13} {drinkInfo.strIngredient13}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure14} {drinkInfo.strIngredient14}
        </p>
        <p className="ingList">
          {drinkInfo.strMeasure15} {drinkInfo.strIngredient15}
        </p>
        <p />
        <h4>Directions:</h4>
        <p>{drinkInfo.strInstructions}</p>
        <button type='button' onClick={e => this.handleBack(e)}>Back</button>
      </>
    );
  };

  render() {
    console.log(this.props.match.params.drinkId);
    return (
      <div className="">
        {!this.state.drink ? 'Loading...' : this.drinkData()}
      </div>
    );
  }
}

export default Drink;
