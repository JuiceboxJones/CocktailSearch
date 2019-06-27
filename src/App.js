import React from 'react';
import './App.css';
import Header from './Components/Header';
import SearchForm from './Components/Search';
import {Route, Switch} from 'react-router-dom';
import Drink from './Components/Drink';
import Slides from './Components/Slides';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <header className='titlePage'>
          <Header/>
        </header>
        <main className='search-container'>
          <Switch className='application'>
            <Route exact path={'/'} component={SearchForm}/>
            <Route path={'/drinks/:drinkId'} component={Drink}/>
          </Switch>
          <Slides/>
        </main>
      </div>
    </div>
  );
}

export default App;
