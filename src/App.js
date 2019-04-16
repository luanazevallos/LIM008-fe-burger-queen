import React, { Component } from 'react';
import './App.css';

// subcomponents
import MenuList from './components/MenuList.js';
import Navbar from './components/Navbar.js';
import Pedidos from './components/Pedidos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pedidos:[],
    }
  }

  handleAddTodo = (todo) => {
    this.setState({
      pedidos: [...this.state.pedidos, todo],
    })
  }

  render() {
    // RETURN THE COMPONENT
    return (
      <div className="App">
        <div>
          <Navbar/>
        </div>
        <div className="container">
          <div className="row mt-8">

            <div className="col-md-8 text-center">
              <MenuList onAddTodo={this.handleAddTodo}></MenuList>
            </div>

            <div className="col-md-4" >
              <Pedidos coleccionPedidos={this.state.pedidos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


