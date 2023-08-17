/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

export const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "cart_items",
      JSON.stringify({ total: state.total, products: state.products })
    );
  }, [state]);

  //   addTocart

  const calculateTotalPrice = (products) => {
    let total = 0;

    products.forEach((pro) => {
      total += pro.price * pro.quantity;
    });

    dispatch({
      type: "CALCULATE_TOTAL_PRICE",
      payload: { total },
    });
  };

  const addToCart = (product) => {
    let updatedProduct = [...state.products];

    const productIndex = state.products.findIndex(
      (pro) => pro.id === product.id
    );

    // if exists
    if (productIndex !== -1) {
      updatedProduct[productIndex] = {
        ...updatedProduct[productIndex],
        quantity: updatedProduct[productIndex].quantity + 1,
      };
    } else {
      updatedProduct = [
        ...updatedProduct,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    calculateTotalPrice(updatedProduct);

    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatedProduct },
    });
  };

  const updatedProductQuantity = (product, newQuantity) => {
    const productIndex = state.products.findIndex(
      (pro) => pro.id === product.id
    );
    let updatedProduct = [...state.products];

    if (newQuantity <= 0) {
      updatedProduct = updatedProduct.filter((pro) => pro.id !== product.id);
    } else {
      updatedProduct[productIndex] = {
        ...updatedProduct[productIndex],
        quantity: newQuantity,
      };
    }

    calculateTotalPrice(updatedProduct);
    dispatch({
      type: "UPDATE_QUANTITY_CART",
      payload: { products: updatedProduct },
    });
  };

  const removeFromCart = (product) => {
    let updatedProduct = [...state.products];

    updatedProduct = updatedProduct.filter((pro) => pro.id !== product.id);

    calculateTotalPrice(updatedProduct);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { products: updatedProduct },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
      payload: {},
    });
  };

  const values = {
    products: state.products,
    total: state.total,
    addToCart,
    updatedProductQuantity,
    removeFromCart,
    clearCart,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }

  return context;
};

export default useShop;
