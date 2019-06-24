import React, { Component } from 'react';

class Results extends Component {
  state = {  }



  handleData = () => {
    let props = this.props
    return(
    !props.ingredient && !props.drinks.length>0 ? 
    console.log('do nothing') : !props.ingredient ? console.log('run mapping function') : this.displayIngredientInfo(props.ingredient, props.description)
    )
  }

  displayIngredientInfo = (ing1, ing2) =>{
    return (
      <>
        <h2>{ing1}</h2>
        <div className='ing-desc'>
          {ing2}
        </div>
      </>
    )
  }

  displayDrinks = (drinkArr) => {

  }

  render() { 
    console.log(this.props)
    return ( 
      <div className=''>
        {this.handleData()}
      </div>
     );
  }
}
 
export default Results;