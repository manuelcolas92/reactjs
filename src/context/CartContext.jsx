import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  console.log(cart)

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }])
    } else {
      console.log('El producto ya fue agregado')
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total: getTotal(), totalQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}