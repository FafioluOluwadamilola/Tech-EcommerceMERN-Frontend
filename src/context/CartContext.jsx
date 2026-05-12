import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // 🛒 Cart array
  const [cart, setCart] = useState(() => {
    // 🔥 Load cart from localStorage on startup
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 💾 Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ Add item
  const addToCart = (product) => {

    // 🔍 Check if product already exists
    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      // 🔥 Increase quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      setCart(updatedCart);

    } else {

      // 🆕 Add new item
      setCart([
        ...cart,
        {
          ...product,
          qty: 1
        }
      ]);
    }
  };

  //Increase quantity
  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
    setCart(updatedCart);
  }


  //Decrease quantity
  const decreaseQty = (id) => {

    const existingItem = cart.find((item) => item.id === id);

    //If quantity is 0 remove item from cart
    if (existingItem.qty === 1) {
      removeFromCart(id);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      setCart(updatedCart);
    }
  }

  // ❌ Remove item
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  // 🧹 Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 🔥 Custom hook
export const useCart = () => useContext(CartContext);