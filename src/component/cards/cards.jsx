import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import "./cards.css"
import axios from '../../Axios'
import {API_KEY, imageUrl} from '../Constant/Constant'


function cards(props) {
  const[Movies,setMovies]=useState([])
  const[urlid,setUrlid]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)

    }).catch(err=>{
      alert('network error')
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(respones=>{
     if(respones.data.results.length!==0){
      setUrlid(respones.data.results[0])
     }
    })
  }
  
  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="poster">
      { Movies.map((item)=>
         <img id="image" onClick={()=>handleMovie(item.id)} className = {props.isSmall ?'smallPoster':'posters'} src={`${imageUrl+item.backdrop_path}`} alt="poster"  />

       )}
    
      </div>
    { urlid && <YouTube opts={opts} videoId= {urlid.key}/>}  
    </div>
  )
}

export default cards
