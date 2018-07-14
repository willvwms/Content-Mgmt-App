import React, { Component } from 'react';
import './App.css';
import ListProducts from './ListProducts.js';
import { jsonResponse } from './data.js';

const { items } = jsonResponse;
// console.log(typeof(added))
// console.log(JSON.stringify(added,null,2))

const added = items.filter(item => item.action == 'add');
const deactivated = items.filter(item => item.action == 'deactivate');

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Item Change Log</h1>
        </header>

        <div className='section-grid-container'>

          <div className="added-items-container">
            <strong className='section-titles'>Added ({added.length}):</strong>
            <ListProducts items={added} editlink={"EDIT"} color="added" />
          </div>

          <div className="deactivated-items-container">
              <strong className='section-titles'>Deactivated ({deactivated.length}):</strong>
              <ListProducts items={deactivated} editlink={"REACTIVATE"} color="deactivated" />
          </div>

        </div>

      </div>
    );
  }
}

export default App;

