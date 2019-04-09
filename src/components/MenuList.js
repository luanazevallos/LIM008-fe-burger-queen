import React, { Component } from 'react';
import { menu } from '../menu.json';

class MenuList extends Component {
  constructor () {
    super();
    this.state = {
      menu
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
      title: value
    });
  }

  render() {
    const menu = this.state.menu.map((menuIndividual, i)=>{
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