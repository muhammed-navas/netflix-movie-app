import React from 'react'
import './About.css'
function About() {
  return (
    <div>
       <div class="container">
            <div class="card">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png" alt="" class="card__img" /> 

                {/* <!-- <div class="card__content">  --> */}
                     <div class="card__data">
                         <h1 class="card__title">story of netflix</h1>
                         {/* <span class="card__preci">NETFLIX ALL DETAILS</span> */}
                         <p class="card__description">At Netflix, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and mobile games. Our members control what they want to watch, when they want it, in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you find your next favorite story.</p>
                         {/* <a href="#" class="card__button">Buy Now</a> */}
                     </div>
                {/* <!-- </div> --> */}
            </div>
        </div>
    </div>
  )
}

export default About
