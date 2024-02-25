import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
   const navigate =useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
     axios.post('https://corefitserver.onrender.com/login',{
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
       navigate('/blog');
      // console.log(res.data);
      console.log(res.data.token);
      
        localStorage.setItem("token",res.data.token);       // syntax----- localStorage.setItem(key, value) 
        toast.success(res.data.message);
    }).catch((err) => {
      //alert('Login failed: Member is not verified!');
      toast.success("Login failed: Member is not verified!");
      
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
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



          {/* <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete="current-password"
          /> */}



<TextField
      label="Password"
      id="password"
      name="password"
      margin="normal"
            required
            fullWidth
      onChange={(e)=>setPassword(e.target.value)}
      type={showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
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
