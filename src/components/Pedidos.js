import React, { Component } from 'react';
import '../App.css';
import { pedidos } from '../pedidos.json';


// class Pedidos extends Component {
//     constructor() {
//         super();
//         this.state = {
//           pedidos
//         }
    
//     }
//     // removeTodo = (index) => {
//     //     this.setState({
//     //       pedidos: this.state.pedidos.filter((e, i) => {
//     //         return i !== index
//     //       })
//     //     });
//     // }
    
//     // handleAddTodo = (todo) => {
//     //     this.setState({
//     //       pedidos: [...this.state.pedidos, todo],
//     //     })
//     // }
  
//     render() {
//         const pedidos = this.state.pedidos.map((pedido, i) => {
//             return (
//               <div className="col-md-12" key={i}>
//                 <div className="card mt-3">
//                   <div className="card-title text-center">
//                     <h3>{pedido.title}</h3>
//                   </div>
//                   <div className="card-body">
//                     {pedido.description}
//                   </div>
//                   <div className="card-footer">
//                     <button
//                       className="btn btn-danger"
//                       onClick={this.removeTodo.bind(this, i)}>
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )
//         });
//       return (
//         <div className="row">
//              {pedidos}
//          </div>
//       )
//     }
  
//   }
  
//   export default Pedidos;