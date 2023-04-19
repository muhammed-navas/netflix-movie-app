import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Banner.css'
function Banner() {
const [moviePic,setMoviePic]=useState([])
    useEffect(()=>{
axios.get(`trending/all/week?api_key=5dce4f423fdfef2ea3c3688ff7fb627b&language=en-US`).then((Response)=>{
    setMoviePic(Response.data.results.sort((a,b)=>0.5-Math.random())[9])
    console.log(Response.data.results);
})
    },[])
let URL='https://image.tmdb.org/t/p/original'

  return (
    <>
    <div style={{backgroundImage:`url(${moviePic? URL+moviePic.backdrop_path:''})`}}
    className='banner' >
       <div className='content'>
        <h1 className='title'>{moviePic.title}{moviePic.name}</h1>
        <div className='banner-button'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='discription'>{moviePic.overview}</h1>
       </div>
      
      <div className="fade-bottom"></div>
    </div>
    </>
  )
}
export default Banner
