import React, { Component } from 'react';
import '../App.css';

class Pedidos extends Component {
  constructor() {
    super();
    this.state = {
      pedidos:[],
    }
  }

  removeTodo = (index) => {
    this.setState({
      pedidos: this.state.pedidos.filter((e, i) => {
        return i !== index
      })
    });
  }

  
  
    render() {
      let pedidosProps = this.props.coleccionPedidos;
       console.log(pedidosProps)
       const pedidos = pedidosProps.map((pedido, i) => {
       
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
      return (
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
      )
    }
  
  }
  
  export default Pedidos;