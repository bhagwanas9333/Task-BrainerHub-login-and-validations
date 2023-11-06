import { Card, Grid } from "@mui/material";
import React, { useState } from "react";

const Cart = ({ setCount, setLogged }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (prod) => {
    setCartItem([...cartItem, prod]);
    // if (cartItem.length !== 0) {
    setCount(cartItem.length);
    setLogged(true);
    // }
  };

  const removeFormCart = (id) => {
    const updateCart = cartItem?.filter((p) => p?.id !== id);
    setCartItem(updateCart);
  };
  return (
    <>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            khcxvb
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Cart;
