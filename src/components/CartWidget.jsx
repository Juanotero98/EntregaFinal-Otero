import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({cartItemCount}) => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge badge-pill badge-secondary">{cartItemCount}</span>
    </div>
  )
}

export default CartWidget