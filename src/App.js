import React, { Component } from 'react';
import './App.css';

// subcomponents
import MenuList from './components/MenuList.js';
import Navbar from './components/Navbar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // menu: [],
      pedidos:[],
      // options: ''
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/luanazevallos/LIM008-fe-burger-queen/develop/src/menu.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          menu: json,
        });
      });
  }

  removeTodo = (index) => {
    this.setState({
      pedidos: this.state.pedidos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo = (todo) => {
    console.log(todo)
    this.setState({
      pedidos: [...this.state.pedidos, todo],
    })
  }

  render() {
    const pedidos = this.state.pedidos.map((pedido, i) => {
      console.log(pedidos)
      return (
          <tbody key={i}>
            <tr>
              <th scope="row">{pedido.title}</th>
              <td>{pedido.quantity}
              <button 
              onClick={() => {
                pedido.quantity += 1;
                this.setState({
                  pedidos: [...this.state.pedidos],
                })
              }}>
              +
              </button>
              <button 
              onClick={() => {
                pedido.quantity -= 1;
                this.setState({
                  pedidos: [...this.state.pedidos],
                })
              }}>
              -
              </button>
              </td>
              <td  onClick={this.removeTodo.bind(this, i)}>Eliminar</td>
              <td>{pedido.quantity*pedido.price}</td>
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


