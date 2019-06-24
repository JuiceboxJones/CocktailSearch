import React, { Component } from 'react';
import ApiService from '../ApiServices/Services';
import Results from './Results';


class SearchForm extends Component {
  state = {
    drinkArray: [],
    strIngredient:null,
    strDescription:null

  };

  
  handleSubmit = e => {
    e.preventDefault()
    let searchParams ={
      category: e.target.searchCategory.value,
      term: e.target.searchInput.value
    }
    ApiService.getSearchResults(searchParams).then(data => {
      this.handleData(data)
    }).then(    
      this.setState({
      drinkArray: [],
      strIngredient:null,
      strDescription:null
    }))
    
  }

  handleData = data => {
    return !data.drinks ? 
    this.displayIngredients(data.ingredients[0]) : this.setState({drinkArray:data.drinks})
  }

  displayIngredients = item => {
    item.strDescription != null ?
    this.setState({
      strIngredient: item.strIngredient,
      strDescription: item.strDescription
    }) : 
    this.setState({
      strIngredient: item.strIngredient,
      strDescription: 'Sorry, no description is available for this ingredient'
    })

  }


  render() {
    return (
      <div className='search-form-container'>
        <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
          <div className="category">
            <label htmlFor="searchCategory">Search By:</label>
            <select 
              id="searchCategory"
              className="searchCategory"
              name="searchCategory"
              defaultValue='filter'
            >
              <option value="filter">Alcohol</option>
              <option value="search">Ingredient Information</option>
            </select>
          </div>
          <div className="search-term">
            <label htmlFor="searchInput" />
            <input type="text" id="searchInput" className="searchInput" name='searchInput' />
            <button type='submit'>Search</button>
          </div>
        </form>
        <Results ingredient={this.state.strIngredient} description={this.state.strDescription} drinks={this.state.drinkArray}/>
      </div>

    );
  }
}

export default SearchForm;
