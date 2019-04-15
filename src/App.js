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
          <tbody key={i}>
            <tr>
              <th scope="row">{pedido.title}</th>
              <td>{pedido.quantity}
              {/* <button >
              +
              </button>
              <button >
              -
              </button> */}
              </td>
              <td  onClick={this.removeTodo.bind(this, i)}>Eliminar</td>
              <td>@mdo</td>
            </tr>
          </tbody>

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

            <div className="col-md-4" >
              <div className="row col-md-12">
                 <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Eliminar</th>
                      <th scope="col">Subtotal</th>
                    </tr>
                  </thead>
                  {pedidos}
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;