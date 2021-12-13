import React from 'react';
import ProfileImage from './Khanda_emblem.png';
import './AboutMe.css'
export const AboutMe = () =>{
    return(
        <div className="container">
            <img src={ProfileImage} className="ProfileImg"/>
            <div className="textSection">
                <span className="Name">Gagandeep Singh</span><br/>  
                <p className="Desc">I am an international student at SMU currently pursuing MCDA programme. I have total work experience of around 12 years as an ETL/Data Engineer. My home city is New Delhi, India and I like everything about that place.I like watching spy thriller movies and travelling with my family. </p>
            </div>
            <div className="mcdaSection">
                <span className="course">Why MCDA Course?</span><br/>
                <p className='Desc'>The primary reason for me to join MCDA program is the right mix of class study and opportunity to gain Canadian work experience. It also offers flavors of various latest programming languages .</p>
            </div>
        </div>
    )
}