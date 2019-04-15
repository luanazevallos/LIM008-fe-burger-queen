import React, { Component } from 'react';
import { menu } from '../menu.json';

class MenuList extends Component {
  constructor () {
    super();
    this.state = {
      menu,
      options: "desayuno"
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: ''
    });
  }

  handleInputChange = (e) => {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      title: value,
      quantity: 1
    });
  }

  mostrarMenuElegido = (e) => {
    const {value} = e.target;
    console.log(value, );
    this.setState({
      options: value
    });
  }

  render() {
    const menu = this.state.menu.filter(item => item.category === this.state.options).map((menuIndividual, i)=>{
      return(
        <div className="col-md-8" key={i}>
            <div className="card-title text-center">
              <button
              className = "btn boton"
              value = {menuIndividual.title}
              onClick={this.handleInputChange}
              >
              {menuIndividual.title}
              </button>
            </div>
          
        </div>
      )
    })
    return (
      <div className="card">
      {console.log(this.state)}
        <div>
          <button
              className = "btn btn-primary"
              value = "desayuno"
              onClick={this.mostrarMenuElegido}
              >
              Desayuno
          </button>
          <button
              className = "btn btn-primary"
              value = "resto del dia"
              onClick={this.mostrarMenuElegido}
              >
              Resto del dia
          </button>
        </div>
        <form onSubmit={this.handleSubmit} className="card-body mt-10">
         
          <div className="form-group mt-4">
            {menu}
          </div>
          {/* <button type="submit" className="btn btn-primary">
            Save
          </button> */}
        </form>
      </div>
    )
  }

}

export default MenuList;