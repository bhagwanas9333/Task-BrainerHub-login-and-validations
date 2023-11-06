import { Box, Card, Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PokemonTask = () => {
  const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);

  console.log("data:", data);
  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards?page=1&pageSize=10")
      .then((response) => {
        setData(response?.data?.data);
      })
      .catch((error) => { 
        console.error(error);
        // setLoading(false)
      });
  }, []);
  console.log(data);

  //   if (loading) {
  //     return <Card> Loading</Card>;
  //   } else {
  //     console.log("API not available");
  //   }

  return (
    <Container>
      <Grid container spacing={2}>
        {Array.isArray(data) &&
          data?.map((poke, i) => (
            <Grid item xs={4}>
              <Card key={i} sx={{ padding: 2 }}>
                <img
                  style={{ width: "100%" }}
                  src={poke.images.small}
                  alt={poke.images.small}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <h2 style={{ display: "inline-block" }}>{poke.name}</h2>
                  <h4 style={{ display: "inline-block", flex: "end" }}>
                    HP:{poke.hp}
                  </h4>
                </Box>
               

                {poke?.attacks.map((product, i) => (
                  <Box key={i}>
                    <p style={{ lineHeight: ".9px" }}>Attacks :{product.name}</p>
                  </Box>
                ))}
                
                {poke.abilities&&
                poke.abilities.map((ability,i)=>(
                  <ul>
                    <li>Abilities: {ability.name}</li>
                  </ul>
                ))
                }
                
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
    // <div>
    //     {Array.isArray(data) && data.map((data, i)=>{
    //     return    <ul>
    //             <li>name: {data.name}</li>

    //             <ul>
    //                 <li>
    //                     {data.attacks.map((attacks, i)=> {
    //                         return <li>Attacks{attacks.name}</li>
    //                     })}
    //                 </li>
    //             </ul>
    //         </ul>
    //     })

    //     }

    // </div>
  );
};

export default PokemonTask;
