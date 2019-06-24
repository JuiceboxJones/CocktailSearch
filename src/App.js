import React from 'react';
import './App.css';
import Header from './Components/Header';
import SearchForm from './Components/Search';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <header className='titlePage'>
          <Header/>
        </header>
        <main className='search-container'>
          <SearchForm/>
        </main>
      </div>
    </div>
  );
}

export default App;
