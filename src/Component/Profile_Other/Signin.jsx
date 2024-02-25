import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');
   const navigate =useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
     axios.post('https://wtsacademy.dedicateddevelopers.us/api/user/signin',{
        email:email,
        password:password 
     },


    //  {
    //     headers:{
    //         // 'Authorization':`${localStorage.getItem("token",)}`
    //        Authorization: localStorage.getItem(res.data.token)
    //     }
    //  }
    )
    .then((res)=>{
      
      // console.log(res.data);
      console.log(res.data.token);
      
        localStorage.setItem("token",res.data.token);
        navigate('/user');
    }).catch((err) => {
    //   alert('Login failed: Member is not verified!');
       console.log(err)
      });

  };


  // axios.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       config.headers["x-access-token"]= `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  //);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
