import React, { Component } from 'react';
import ApiService from '../ApiServices/Services';

class Drink extends Component {
  state = { 
    drink:''
   }

 componentDidMount(){
    let drinkId = this.props.match.params.drinkId;
    ApiService.getDrinkDetails(drinkId)
    .then(data => 
      this.setState({
        drink:(data.drinks[0])
      })
      )
  }

  drinkData = () => {
    let drinkInfo = this.state.drink
    console.log(drinkInfo)
    return (
      <>
      <div className='heading-ctr'>
      <h3 className='drink-name'>
        {drinkInfo.strDrink}
      </h3>
      <p className='drink-type'>
        Type: {drinkInfo.strAlcoholic} / {drinkInfo.strCategory}
      </p>
      <img src={drinkInfo.strDrinkThumb} alt={drinkInfo.strDrink}/>
      </div>
      <p>Serve in: {drinkInfo.strGlass}</p>
      <p>{this.ingredientData(drinkInfo)}</p>
      </>
      //work on displaying ingredients next
    )
  }

//   strIBA: null
// strIngredient1: "Dark rum"
// strIngredient2: "Light rum"
// strIngredient3: "Vodka"
// strIngredient4: "Orange juice"
// strIngredient5: ""
// strIngredient6: ""
// strIngredient7: ""
// strIngredient8: ""
// strIngredient9: ""
// strIngredient10: ""
// strIngredient11: ""
// strIngredient12: ""
// strIngredient13: ""
// strIngredient14: ""
// strIngredient15: ""
// strInstructions: "Blend with ice. Serve in a wine glass. Garnish with carrot."
// strInstructionsDE: null
// strInstructionsES: null
// strInstructionsFR: null
// strInstructionsZH-HANS: null
// strInstructionsZH-HANT: null
// strMeasure1: "1 shot "
// strMeasure2: "2 shots "
// strMeasure3: "1 shot "
// strMeasure4: "1 shot "
// strMeasure5: " "
// strMeasure6: " "
// strMeasure7: " "
// strMeasure8: " "
// strMeasure9: " "
// strMeasure10: ""
// strMeasure11: ""
// strMeasure12: ""
// strMeasure13: ""
// strMeasure14: ""
// strMeasure15: ""
// strTags: null
// strVideo: null

  ingredientData = drink =>{
    for(let i = 1; i<16; i++){
      console.log(i)
      }
  }


  render() { 
    console.log(this.props.match.params.drinkId)
    return ( 
      <div className=''>
        {!this.state.drink ? console.log('no drink', this.state.drink) : this.drinkData()}
      </div>
     );
  }
}
 
export default Drink;