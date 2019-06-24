import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Results extends Component {
  state = {};


  handleData = () => {
    let props = this.props;
    return !props.ingredient && !props.drinks.length > 0
      ? console.log('do nothing')
      : !props.ingredient
      ? this.displayDrinks(props.drinks)
      : this.displayIngredientInfo(props.ingredient, props.description);
  };

  displayIngredientInfo = (ing1, ing2) => {
    return (
      <>
        <h2>{ing1}</h2>
        <div className="ing-desc">{ing2}</div>
      </>
    );
  };

  displayDrinks = drinkArr => {
    return drinkArr.map((drink, index) => {
      return (
        <li className="drink-display" key={index}>
          <Link to={`/drinks/${drink.idDrink}`}>
          <h3 className="drink-name">{drink.strDrink}</h3>
          <img src={drink.strDrinkThumb} alt="drink-thumb" />
          </Link>
        </li>
      );
    });
  };

  handleDrinkNav = (drinkId) => {
    return <Link to={`/drinks/${drinkId}`}/>
  }

  render() {
    console.log(this.props);
    return <div className="">{this.handleData()}</div>;
  }
}

export default Results;
