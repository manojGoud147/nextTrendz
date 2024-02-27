import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {removeCartItem} = value
      const {incrementCartItemQuantity} = value
      const {decrementCartItemQuantity} = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item
      const onIncrementCartItemQuantity = () => {
        incrementCartItemQuantity(id)
      }

      const onDecrementCartItemQuantity = () => {
        decrementCartItemQuantity(id)
      }
      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <label htmlFor={id} className="visually-hidden">
                Decrease Quantity
              </label>
              <button
                data-testid="minus"
                type="button"
                className="quantity-controller-button"
                onClick={onDecrementCartItemQuantity}
                aria-labelledby={id}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <label htmlFor={id} className="visually-hidden">
                Increase Quantity
              </label>
              <button
                data-testid="plus"
                type="button"
                className="quantity-controller-button"
                onClick={onIncrementCartItemQuantity}
                aria-labelledby={id}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                data-testid="remove"
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} aria-label="close" />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
