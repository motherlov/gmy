import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
// import Comments from './Comments';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogDetails = () => {
    const {id}=useParams()
    const [data,setData]=useState();
 
    const navigate =useNavigate();

    useEffect(()=>{
        blogDetails();
        if(!localStorage.getItem('token')){
          navigate('/login')
        }
    },[])
    const blogDetails=()=>{
      console.log(id)
        axios.get(`https://corefitserver.onrender.com/getblogdetails/${id}`)
        .then((res)=>{

          setData(res.data.data)
          toast.success(res.data.message)
          // console.log(data && data)
        })
    }
    console.log(data);
    
  return (
    <>
    <div>
        {data && 
        <ul key ={data._id} >
          <h1 >Title:{data.title}</h1>
          <img src={data.image} style={{width:'80%',height:'300%',borderRadius:'2rem 0rem 2rem 0rem'}} />
          <h3>Title:{data.title}</h3> 
           <h3 >{data.price}  </h3>
          <h5>SubTitle:{data.subtitle}</h5>

          <h5>Content: {data.content}</h5>
           
          
          
          {/* images */}
          {/* {data.images.map((item)=>{
            <img src={item} style={{width:'70%',borderRadius:'2rem 0rem 2rem 0rem'}} />
          })} */}

          {/* <div style={{width:'70%',marginInline:'auto',display:'flex',flexDirection:'column'}}>
          <img src={data.images[0]} style={{width:'40%',borderRadius:'2rem 0rem 0rem 2rem',border:'2px solid black',marginInline:'auto'}} />
          <img src={data.images[1]} style={{width:'40%',borderRadius:'0rem 2rem 2rem 0rem',border:'2px solid black',marginInline:'auto'}} />
          <img src={data.images[2]} style={{width:'40%',borderRadius:'2rem 0rem 0rem 2rem',border:'2px solid black',marginInline:'auto'}} />
          <img src={data.images[3]} style={{width:'40%',borderRadius:'0rem 2rem 2rem 0rem',border:'2px solid black',marginInline:'auto'}} />
          </div> */}
          
        </ul>
        
        }
        
    </div>
    {/* <Comments/> */}
    </>

  )
}

export default BlogDetails;