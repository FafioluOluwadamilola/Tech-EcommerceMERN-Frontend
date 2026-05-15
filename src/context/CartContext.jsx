import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // 🛒 Cart array
  const [cart, setCart] = useState([]);



  // 💾 Save cart whenever it changes
  useEffect(() => {

    const fetchCart = async () => {

      // 🔐 Get saved token
      const token = localStorage.getItem("token");

      // ❌ No token = guest user
      if (!token) return;

      try {

        // 📡 Request user's cart
        const res = await fetch(
          "http://localhost:5000/api/cart",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        // 🛒 Save backend cart into React state
        setCart(data.items);

      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCart();

  }, []);



  // ➕ Add item
  const addToCart = async (product) => {

    const token = localStorage.getItem("token");

    // ❌ If not logged in
    if (!token) {
      alert("Please login first");
      return;
    }

    try {

      // 📡 Send product to backend
      const res = await fetch(
        "http://localhost:5000/api/cart",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            productId: product.productId || product.id,
            name: product.name,
            image: product.image,
            price: product.price
          })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      // 🔥 Update frontend cart using DB response
      setCart(data.items);

    } catch (error) {
      console.error(error.message);
    }
  };



  //Increase quantity
  const increaseQty = async (product) => {
    await addToCart(product);
  };



  //Decrease quantity
const decreaseQty = async (productId) => {

  const token = localStorage.getItem("token");

  try {

    const res = await fetch(
      `http://localhost:5000/api/cart/decrease/${productId}`,
      {
        method: "PATCH",

        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    setCart(data.items);

  } catch (error) {

    console.error(error.message);

  }
};




  // ❌ Remove item
  const removeFromCart = async (productId) => {

    const token = localStorage.getItem("token");

    try {

      const res = await fetch(
        `http://localhost:5000/api/cart/${productId}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      // 🔥 Sync frontend with backend
      setCart(data.items);

    } catch (error) {

      console.error(error.message);

    }
  };




  // 🧹 Clear entire cart
const clearCart = async () => {

  const token = localStorage.getItem("token");

  try {

    const res = await fetch(
      "http://localhost:5000/api/cart/clear",
      {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    // 🔥 sync frontend with backend
    setCart(data.items);

  } catch (error) {

    console.error(error.message);

  }
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