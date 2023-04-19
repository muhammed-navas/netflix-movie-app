
import React, { useState } from 'react'
import './AboutNf.css'
import { RiAddLine } from 'react-icons/ri';

const AboutNf = () => {
    const [accActive, setAccActive] = useState()

    let accordionData = [{
        title: "What is Netflix",
        accordionContent: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        title: "What can i watch on Netflix",
        accordionContent: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        title: "How much does Netflix cost",
        accordionContent: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.."
    },
    {
        title: "is Netflix good for kids",
        accordionContent: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    },
    ]
    const handleActive = (index) => {
        if (accActive === index) {
            setAccActive()
        }
        else {
            setAccActive(index)
        }
    }




    return (
      <div className="about">
       
        <div className='accordionContainer'>
        what is netflix
            {
                accordionData.map((acc, index) => {
                    return (
                        <div className="accordion"
                            onClick={() => handleActive(index)}>
                            <div className='accordionHeading'>

                                <span className="addIcon"
                                    style={{
                                        transform: `${accActive === index ? 'rotate(45deg)' :
                                            'rotate(0deg)'}`
                                    }}>
                                    <RiAddLine size={25} />
                                </span>
                                <h3>{acc.title}</h3>
                            </div>
                            {
                                accActive === index ? <div className="accordionContent">
                                    <p>{acc.accordionContent}</p>
                                </div> : null
                            }
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default AboutNf
