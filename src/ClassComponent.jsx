import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor (props){
        super(props);
        this.state = {cart: 0};
    }
    addtoCart=()=>{
        this.setState({cart: this.state.cart + 1})
    }
    removefromCart=()=>{
        this.setState({cart: this.state.cart - 1})
    };
  render() {
    return (
      <div>
        <h1>SHOP WITH US</h1>
        <h1>Add to Cart {this.state.cart}</h1>
        <button onClick={this.addtoCart}>ADD</button>
        <button onClick={this.removefromCart}>REMOVE</button>
      </div>
    )
  }
}

export default ClassComponent