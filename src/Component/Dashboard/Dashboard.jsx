import {
    Container,
    Grid,
    Box,
    Avatar,
    Typography,
    Button,
  } from "@mui/material";
  import { ArrowForward } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { image } from '../Image/carousel-1.jpg'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  
  export default function Dashboard() {
    const [blog,setBlog]=useState([])
    const navigate= useNavigate()
 const getData  =()=>{
    axios.get('https://corefitserver.onrender.com/getblog')
    .then((res)=>{
        console.log(res.data);
        setBlog(res.data.data)
        toast.success(res.data.message)
    })
 }

 useEffect(()=>{
    getData();
 if(!localStorage.getItem('token')){
   navigate('/login');
   }
 },[navigate])

 const logoutData=()=>{
  const token=localStorage.removeItem('token');
   if(!token){
navigate('/login')
toast.success("Logout successfully Done!")

   }
 }

    return (




            

      <Container sx={{ py: { xs: 8, lg: 16 } }}>
        <Box
          sx={{
            mx: "auto",
            mb: { lg: 16, sm: 8 },
            maxWidth: "sm",
            textAlign: "center",
           
          }}
        >

  <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

            onClick={logoutData}
          >
            Logout
          </Button>
          <Typography
            variant="h2"
            component="h2"
            mb={4}
            sx={{ fontWeight: "extrabold" }}
          >
            Our Blog
          </Typography>
          {/* <Typography variant="body1" color="text.secondary">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </Typography> */}
        </Box>
        <Grid container spacing={8}>
          {blog && blog.map((data) => (
            //    <Link to={`/getblogdetails/${data._id}`} sx={{textDecoration:'none'}}>
                //  <Link to={`/getblogdetails/${data._id}`} >


            <Grid item lg={6} key={data._id}>
              <Box
                sx={{
                  p: 6,
                  border: 1,
                  borderColor: "green.200",
                  borderRadius: 1,
                  boxShadow: 2,
              
                  
                }}
              >

       {/* <Typography>
      <img src={Image} style={{ maxWidth: '100%', height: 'auto' }} />
      </Typography> */}

                <Typography
                  variant="h4"
                  component="h2"
                  mb={2}
                  sx={{ fontWeight: "bold" }}
                >
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={5}>
                  {data.subtitle}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                       src={data.image}
                    //  src={"https://corefitserver.onrender.com/banner/uploads/carousel-1.jpg-1701939652922.jpeg"}
                    // src={image}
                      sx={{ width: 28, height: 28, mr: 1 }}
                    />
                    {/* <Typography variant="subtitle1">{data.content}</Typography> */}
                  </Box>
                  <Link to={`/getblogdetails/${data._id}`} >
                  <Button endIcon={<ArrowForward />} color="warning" size="small">
                    Read more
                  </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>

            // {/* </Link> */}

          ))}
        </Grid>
            
      </Container>



    );
  }