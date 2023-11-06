import { Box, Button, Card, Container, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogged }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const newErrors = {};
    if (email !== "admin@gamil.com") {
      newErrors.email = "Email is Incorrect";
    }
    if (password !== "Abcd@1234") {
      newErrors.password = "Password is Incorrect";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      //SuccessFully login
      console.log("login SuccessFul");

      alert("login SuccessFul");
      setLogged(true);
      navigate("/secured/dashboard");
    }
  };
  return (
    <Container>
      <h2>Login</h2>
      <Card component="form" onSubmit={handleSubmit}>
        <Box>
          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                // value="email"
                onChange={handleChange}
              />

              {errors.email && <Box color="red">{errors.email} </Box>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                name="password"
                label="Password"
                // value="password"
                onChange={handleChange}
              />
              {errors.password && <Box color="red">{errors.password}</Box>}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
};

export default Login;
