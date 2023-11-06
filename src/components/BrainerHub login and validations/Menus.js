import { Box, Button, Card, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CountContext from "./CountContext";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./app/slice/cartSlice";

const productData = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image:
      "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?cs=srgb&dl=pexels-alex-azabache-3907507.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image:
      "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-quiz.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image:
      "https://images-us.nivea.com/-/media/nivea/local/in/product-banners/nivea-men-products_banner_revised.png?rx=1454&ry=0&rw=1452&rh=806",
  },
  // Add more products as needed
];
const Menus = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ product: { ...product, status: 0, qty: 1 } }));
  };

  const removeFormCart = (id) => {
    const updateCart = cartItem?.filter((p) => p?.id !== id);
    setCartItem(updateCart);
  };

  useEffect(() => {
    // handleAddToCart
  }, []);
  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <Grid container spacing={2}>
        {Array.isArray(productData) &&
          productData?.map((prod, i) => (
            <Grid item xs={12} md={4} key={prod?.id}>
              <Card sx={{ p: 2 }}>
                <img
                  style={{ width: "100%", height: "400px", objectFit: "fill" }}
                  src={prod?.image}
                  alt="product images"
                />
                <Box sx={{ p: 2 }}>
                  <span>Sr.No:{prod?.id}</span>
                  <h2>Product Name: {prod?.name}</h2>
                  <p>Price: {prod?.price}</p>
                </Box>
                <Box>
                  <Button type="submit" onClick={() => handleAddToCart(prod)}>
                    Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Menus;
