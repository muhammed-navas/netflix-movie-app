import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import './Poster.css'
function Poseter(props) {
  const [title, setTitle] = useState([])
  const [popup,setPopup]=useState(false)
  const [urlId,setUrlId]=useState([])
  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((Response) => {
          setTitle(Response.data.results)
          console.log('new', Response.data.results);
      })
  }, [])
  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((Response) => {
          setTitle(Response.data.results)
          console.log('new2', Response.data.results);
      })
  }, [])
  // d03799692be1c26faf0ade18a4205f9f
  // www.themoviedb.org/talk/5955219ec3a3680d73048c7e
  // trending/all/week?api_key=5dce4f423fdfef2ea3c3688ff7fb627b&language=en-US
  // https://api.themoviedb.org/3/trending/all/day?api_key=5dce4f423fdfef2ea3c3688ff7fb627b&language=en-US
let oen = 'https://api.themoviedb.org/3/movie/popular?api_kdy=4e44d9029b1270a757cddc766a1bcb63&language=en-US'
  let URL = 'https://image.tmdb.org/t/p/original'

function clickEvent(){
 setPopup(true)
}
// vote_average
// : 
// 7.904
// vote_count
// :
// popular?api_kdy=4e44d9029b1270a757cddc766a1bcb63
const opts = {
  height: '390',
  width: '100%',
  borderRadius: '35px',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
  return (
    <>
    <div className='roww'>
            {/* {popup && <Popup setPopup={setPopup} urlId={urlId} />} */}
                        <h2> 
                        {props.names}
                       
                             <h4 > more </h4>
                             </h2>
                        
                            <div className="posterss"> 
                        {title.map((item) =>{
                          return(
<>

<img onClick={clickEvent} src={URL+item.poster_path} alt="" />

<YouTube videoId="2g811Eo7K8U"  opts={opts}  />
</>
                          )
                        })}
                        </div>
                        
                    </div>
    </>
  )
}

export default Poseter
