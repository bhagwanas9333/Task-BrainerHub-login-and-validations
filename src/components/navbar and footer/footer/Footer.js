// import React from 'react';
// import {
//   Container,
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
// } from '@mui/material';

// const categories = [
//   {
//     title: 'Project',
//     items: ['Houses', 'Rooms', 'Flats', 'Apartments'],
//   },
//   {
//     title: 'Company',
//     items: ['Objective', 'Capital', 'Security', 'Selling'],
//   },
//   {
//     title: 'Movement',
//     items: ['Movement', 'Support us', 'Pricing', 'Renting'],
//   },
//   {
//     title: 'Help',
//     items: ['Privacy', 'Contact', 'FAQs', 'Blog'],
//   },
// ];

// const rootStyle = {
//   '--primary': 'rgba(255,255,255,0.85)',
//   '--light': 'rgba(255,255,255,0.5)',
//   '--accent': 'rgb(86, 177, 187)',
// };

// const navStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   padding: '1rem',
//   backgroundColor: 'var(--accent)',
// };

// const logoStyle = {
//   fontSize: '1.25rem',
// };

// const menuStyle = {
//   fontSize: '1.5rem',
// };

// const headerStyle = {
//   height: '70vh',
//   display: 'grid',
//   alignContent: 'center',
//   textAlign: 'center',
//   gap: '0.5rem',
//   fontFamily: 'helvetica, sans-serif',
// };

// const headerTextStyle = {
//   fontSize: '0.8rem',
//   fontStyle: 'italic',
// };

// const bubbleStyle = {
//   position: 'absolute',
//   bottom: '2rem',
//   left: '50%',
//   transform: 'translateY(-50%)',
//   width: '13px',
//   height: '13px',
//   backgroundColor: 'black',
//   borderRadius: '50%',
// };

// const bubbleDotStyle = {
//   position: 'absolute',
//   width: '11px',
//   height: '11px',
//   border: '1px solid black',
//   borderRadius: '50%',
//   cursor: 'pointer',
// };

// const bubbleDotBeforeStyle = {
//   left: '-18px',
// };

// const bubbleDotAfterStyle = {
//   left: '18px',
// };

// const footerStyle = {
//   zIndex: 0,
//   backgroundColor: 'black',
//   fontFamily: 'helvetica, sans-serif',
//   color: 'var(--light)',
//   display: 'flex',
//   justifyContent: 'center',
//   padding: '3rem 8%',
// };

// const footerHeaderStyle = {
//   position: 'relative',
//   textTransform: 'uppercase',
// };

// const footerAccentStyle = {
//   position: 'absolute',
//   transform: 'translate(-0.5rem,-0.25rem)',
//   width: '1rem',
//   height: '1rem',
//   backgroundColor: 'var(--accent)',
//   zIndex: -1,
// };

// const iconStyle = {
//   fontSize: '1.1rem',
//   padding: '0.25rem 0.5rem 0.25rem 0',
//   cursor: 'pointer',
//   color: 'var(--accent)',
// };

// function Footer() {
//   return (
//     <div style={rootStyle}>
//       <AppBar position="fixed">
//         <Toolbar style={navStyle}>
//           <Typography variant="h6" style={logoStyle}>Your Logo</Typography>
//           <Typography variant="h6" style={menuStyle}>Menu</Typography>
//         </Toolbar>
//       </AppBar>
//       <Container>
//         <Paper elevation={3} style={headerStyle}>
//           <Typography variant="h4">Topper Farm</Typography>
//           <Typography variant="body2" style={headerTextStyle}>- est. 2023 -</Typography>
//           <Box style={bubbleStyle}>
//             <Box style={bubbleDotStyle}></Box>
//             <Box style={bubbleDotBeforeStyle}></Box>
//             <Box style={bubbleDotAfterStyle}></Box>
//           </Box>
//         </Paper>
//       </Container>
//       <footer style={footerStyle}>
//         <Box style={footerAccentStyle}></Box>
//         <Container>
//           <header style={footerHeaderStyle}>
//             <Typography variant="h6">Topper Farm</Typography>
//             <Typography style={footerHeaderStyle}>
//               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, accusantium?"
//             </Typography>
//             <List className="icons">
//               <ListItem button style={iconStyle}>
//                 <ListItemText primary="Facebook" />
//               </ListItem>
//               <ListItem button style={iconStyle}>
//                 <ListItemText primary="Instagram" />
//               </ListItem>
//               <ListItem button style={iconStyle}>
//                 <ListItemText primary="Twitter" />
//               </ListItem>
//               <ListItem button style={iconStyle}>
//                 <ListItemText primary="Youtube" />
//               </ListItem>
//             </List>
//           </header>
//           <aside>
//             {categories.map((category) => (
//               <List key={category.title} className="category">
//                 <ListItem>
//                   <ListItemText primary={category.title} />
//                 </ListItem>
//                 {category.items.map((item) => (
//                   <ListItem button key={item} style={iconStyle}>
//                     <ListItemText primary={item} />
//                   </ListItem>
//                 ))}
//               </List>
//             ))}
//           </aside>
//         </Container>
//       </footer>
//     </div>
//   );
// }

// export default Footer;
import React from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Grid, // Import Grid from Material-UI
} from '@mui/material';

const categories = [
    {
      title: 'Project',
      items: ['Houses', 'Rooms', 'Flats', 'Apartments'],
    },
    {
      title: 'Company',
      items: ['Objective', 'Capital', 'Security', 'Selling'],
    },
    {
      title: 'Movement',
      items: ['Movement', 'Support us', 'Pricing', 'Renting'],
    },
    {
      title: 'Help',
      items: ['Privacy', 'Contact', 'FAQs', 'Blog'],
    },
  ];
  
  const rootStyle = {
    '--primary': 'rgba(255,255,255,0.85)',
    '--light': 'rgba(255,255,255,0.5)',
    '--accent': 'rgb(86, 177, 187)',
  };
  
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: 'var(--accent)',
  };
  
  const logoStyle = {
    fontSize: '1.25rem',
  };
  
  const menuStyle = {
    fontSize: '1.5rem',
  };
  
  const headerStyle = {
    height: '70vh',
    display: 'grid',
    alignContent: 'center',
    textAlign: 'center',
    gap: '0.5rem',
    fontFamily: 'helvetica, sans-serif',
  };
  
  const headerTextStyle = {
    fontSize: '0.8rem',
    fontStyle: 'italic',
  };
  
  const bubbleStyle = {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateY(-50%)',
    width: '13px',
    height: '13px',
    backgroundColor: 'black',
    borderRadius: '50%',
  };
  
  const bubbleDotStyle = {
    position: 'absolute',
    width: '11px',
    height: '11px',
    border: '1px solid black',
    borderRadius: '50%',
    cursor: 'pointer',
  };
  
  const bubbleDotBeforeStyle = {
    left: '-18px',
  };
  
  const bubbleDotAfterStyle = {
    left: '18px',
  };
  
  const footerStyle = {
    zIndex: 0,
    backgroundColor: 'black',
    fontFamily: 'helvetica, sans-serif',
    color: 'var(--light)',
    display: 'flex',
    justifyContent: 'center',
    padding: '3rem 8%',
  };
  
  const footerHeaderStyle = {
    position: 'relative',
    textTransform: 'uppercase',
  };
  
  const footerAccentStyle = {
    position: 'absolute',
    transform: 'translate(-0.5rem,-0.25rem)',
    width: '1rem',
    height: '1rem',
    backgroundColor: 'var(--accent)',
    zIndex: -1,
  };
  
  const iconStyle = {
    fontSize: '1.1rem',
    padding: '0.25rem 0.5rem 0.25rem 0',
    cursor: 'pointer',
    color: 'var(--accent)',
  };

function Footer() {
  return (
    <div style={rootStyle}>
      <AppBar position="fixed">
        <Toolbar style={navStyle}>
          <Typography variant="h6" style={logoStyle}>Your Logo</Typography>
          <Typography variant="h6" style={menuStyle}>Menu</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Paper elevation={3} style={headerStyle}>
          <Typography variant="h4">Topper Farm</Typography>
          <Typography variant="body2" style={headerTextStyle}>- est. 2023 -</Typography>
          <Box style={bubbleStyle}>
            <Box style={bubbleDotStyle}></Box>
            <Box style={bubbleDotBeforeStyle}></Box>
            <Box style={bubbleDotAfterStyle}></Box>
          </Box>
        </Paper>
      </Container>
      <footer style={footerStyle}>
        <Box style={footerAccentStyle}></Box>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <header style={footerHeaderStyle}>
                <Typography variant="h6">Topper Farm</Typography>
                <Typography style={footerHeaderStyle}>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, accusantium?"
                </Typography>
                <List className="icons">
                  <ListItem button style={iconStyle}>
                    <ListItemText primary="Facebook" />
                  </ListItem>
                  <ListItem button style={iconStyle}>
                    <ListItemText primary="Instagram" />
                  </ListItem>
                  <ListItem button style={iconStyle}>
                    <ListItemText primary="Twitter" />
                  </ListItem>
                  <ListItem button style={iconStyle}>
                    <ListItemText primary="Youtube" />
                  </ListItem>
                </List>
              </header>
            </Grid>
            {categories.map((category) => (
              <Grid item xs={6} sm={3} md={2} key={category.title}>
                <List className="category">
                  <ListItem>
                    <ListItemText primary={category.title} />
                  </ListItem>
                  {category.items.map((item) => (
                    <ListItem button key={item} style={iconStyle}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
