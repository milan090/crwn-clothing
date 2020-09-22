import React from 'react'

import CustomButton from '../custom-button/custom-buttton.component';

import './cart-dropdown.styles.scss';


const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-item">
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown;