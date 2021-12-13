import React, { useEffect, useState } from 'react';
import img from "./i-love-Delhi.jpg";
import cold from "./cold.png";
import mild from "./mild.png";
import sunny from "./sunny.png";
import "./myTown.css";
export const MyTown = () =>{
    const [temp,setTemp]=useState();
    const [imgSrc,setSrc]=useState("");
    useEffect(()=>{
       fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=155e236acd1fca03c8e571d76b22cc56&units=metric")
        .then(res=>{
            return res.json();
        })
        .then(text=>{
            setTemp(text.main.temp)

        })
        .catch(err=>{
            console.log(err)
        })
        if(temp<10.00)
        {
            setSrc(cold);
        }
        else if(temp>10 && temp<20)
        {
            setSrc(mild);
        }
        else
        {
            setSrc(sunny);
        }
        
    },[temp])
   
    return(
        <div className="Section">
            <h1 className="chdText">Delhi</h1>
            <img src={img} className="townImg"/>
            <div className="text">
            <p>Delhi is the second-wealthiest city in India (after Mumbai), and is home to 18 billionaires and 23,000 millionaires.
                Delhi ranks fifth among the Indian states and union 
                territories in human development index.Delhi has the second-highest GDP per capita in India (after Goa).</p>
                <img className="tempImg" src={imgSrc}/>
                <span className="temp"> {temp} C</span>
                </div>
        </div>
    )
}