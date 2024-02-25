import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Booking() {
     const [name, setName] =useState('');
     const [email ,setEmail] =useState('');
     const [price,setPrice] =useState('')
     const [service_name,setService_name] = useState('');
     const [scheme, setScheme] =useState('')
    // const [image,setImage] =useState('')
     const memberToken =localStorage.getItem("token")
     console.log(memberToken);
  const handleSubmit = (event) => {
    event.preventDefault();
   
     axios.post('https://corefitserver.onrender.com/booking',{
       name,
       email,
       price,
       scheme,
       service_name
     },
      {
        headers: {
            "x-access-token": `Bearer ${memberToken}`
      }
    }
      )

      // axios.interceptors.request.use(
      //     (config) => {
      //       const token = localStorage.getItem('token');
      //       console.log("token",token)
      //       if (token) {
      //         config.headers["x-access-token"]= ` ${token}`;
      //       }
      //       return config;
      //     },
      //     (error) => {
      //       return Promise.reject(error);
      //     }
      //   );

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
           user/member booking
          </Typography>
          <Box
            component="form"
            noValidate
            
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  type="text"
                  onChange={(e)=>setName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="price"
                  name="price"
                  type="text"
                  onChange={(e)=>setPrice(e.target.value)}
                  autoComplete="price-number"
                />
              </Grid>
        
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>

            

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="scheme"
                  label="scheme"
                  type="scheme"
                  id="scheme"
                  onChange={(e)=>setScheme(e.target.value)}
                  autoComplete="new-scheme"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="service_name"
                  label="service_name"
                  name="service_name"
                  type="text"
                  onChange={(e)=>setService_name(e.target.value)}
                  autoComplete="service_name"
                />
              </Grid>

              

              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="image"
                //   label="image"
                  type="file"
                  id="image"
                  onChange={(e)=>setImage(e.target.files[0])}
                  autoComplete="new-image"
                />
              </Grid> */}

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label=" verification successfully open email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
            Booking  
            </Button>
            <Grid container justifyContent="flex-end">
              {/* <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}