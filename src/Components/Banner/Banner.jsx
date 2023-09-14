
import { useEffect } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
import { useState } from 'react'


function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=97f8da9a819fb0a77145d10270f1a65e&language=en-US`).then((response)=>{
      console.log("qwe====",response.data.results[2]);
      setMovie(response.data.results[2])
    })
  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :"" })`}}
     className='Banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title:""} </h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview :""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner