import React, { Component } from 'react';
import { postOrder } from '../../apiCalls';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      disabled: true
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    postOrder(this.state.name, this.state.ingredients)
      .catch(err => console.log('Error posting:', err));
    this.props.updateOrders()
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', ingredients: []} );
  }

  handleIngredientChange = (e) => {
    e.preventDefault()
    this.setState({ ingredients: [...this.state.ingredients, e.target.name] })
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  checkFormValidity = () => {
    if(this.state.name.length > 0 && this.state.ingredients.length > 0) {
      return false
    } else {
      return true
    }
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={
          (e) => {this.handleIngredientChange(e)}}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        {ingredientButtons}

        <p>Order: {this.state.ingredients.join(', ') || 'Nothing selected'}</p>

        <button disabled={this.checkFormValidity()} onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
