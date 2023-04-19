import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Popup from '../popup/Popup'
import './MvCart.css'
function MvCart() {
    const [title, setTitle] = useState([])
    const [popup,setPopup]=useState(false)
    const [urlId,setUrlId]=useState([])
    useEffect(() => {
        axios.get(`trending/all/week?api_key=5dce4f423fdfef2ea3c3688ff7fb627b&language=en-US`).then((Response) => {
            setTitle(Response.data.results)
// d03799692be1c26faf0ade18a4205f9f
// real 5dce4f423fdfef2ea3c3688ff7fb627b
        })
    }, [])
   
    let URL = 'https://image.tmdb.org/t/p/original'

function clickEvent(){
   setPopup(true)
//    axios.get('/movie/460465/videos?api_key=5dce4f423fdfef2ea3c3688ff7fb627b&language=en-us').then((Response)=>{
//     console.log(Response.data.results);
//     if(Response.data.results.legnth !==0){
//         setUrlId(Response.data.results)
//     }
//    })
}

    return (
        
        
        <div className='row'>
            {popup && <Popup setPopup={setPopup} urlId={urlId} />}
                        <h2>Release Movies
                             <h4 > more </h4>
                             </h2>
                        
                            <div className="posters"> 
                            {/* backdrop_path */}
                            {/* poster_path */}
                        {title.map((item) =><img onClick={clickEvent} src={URL+item.backdrop_path} alt="" />
                        )}
                       
                        </div>
                        
                    </div>
           
    
    )
}

export default MvCart
