import React, { createContext, useState, useEffect } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // cart state
  const [cart, setCart] = useState([]);

  // total price state
  const [total, setTotal] = useState(0);

  // total price calculator
  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.amount;
    }, 0);
    setTotal(total);
  });

  // get item amount in the cart
  const getItemAmountInCart = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    return cartItem ? cartItem.amount : 0;
  };

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, curr) => {
        return acc + curr.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // add to the cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {

    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  // add to the cart with specific mount
  const addSpecificQuantityToCart = (product, id ,quantity) => {
    const newItem = { ...product, amount: quantity };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + quantity };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };






  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
        addSpecificQuantityToCart,

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
