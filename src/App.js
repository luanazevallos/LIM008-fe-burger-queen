import React, { Component } from 'react';
import './App.css';
import { pedidos } from './pedidos.json';

// subcomponents
import MenuList from './components/MenuList.js';
import Navbar from './components/Navbar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pedidos
    }
  }

  removeTodo = (index) => {
    this.setState({
      pedidos: this.state.pedidos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo = (todo) => {
    this.setState({
      pedidos: [...this.state.pedidos, todo],
    })
  }

  render() {
    const pedidos = this.state.pedidos.map((pedido, i) => {
      return (
        <div className="col-md-12" key={i}>
          <div className="card mt-3">
            <div className="card-title text-center">
              <h3>{pedido.title}</h3>
            </div>
            <div className="">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    });

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

            <div className="col-md-4">
              <div className="row">
                {pedidos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;