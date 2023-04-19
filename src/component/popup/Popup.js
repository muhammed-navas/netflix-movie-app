import React from 'react'
import YouTube from 'react-youtube'
import './Popup.css'
function Popup({setPopup,urlId}) {
// /movie/460465/videos?api_key=5dce4f423fdfef2ea3c3688ff7fb627b&language=en-us
function close(){
 setPopup(false)
}
console.log('url', urlId);
// let one= urlId.map((some)=>{
//     return some
//     // console.log('some', some.key);
// })
// console.log('one',one);
const opts = {
    height: '480',
    width: '100%',
    borderRadius: '35px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className='popup'>
      <div className="popup-content">
        {urlId.map((obj)=><YouTube videoId={obj.key} opts={opts}  /> )}
      <h1>not found</h1>
      
      <button onClick={close} className='close'> close</button>
      </div>
    </div>
  )
}
export default Popup