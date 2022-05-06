import { Link } from "react-router-dom";
import React, { Component } from 'react';
import "./Taslak.css";


export default class Taslak extends Component { 
render() {
     //Destructing
     const {taslakphoto,taslaktitle,taslaktext,taslaklink}=this.props;
     return (
        <div class="image">
                <img src={taslakphoto} title="Tokat İlgi Kurs Merkezi" style={{width:"100%",height:"30rem"}}></img>
                <div class="details">
                      
                        <h2 className="serviceTitle">{taslaktitle}</h2>
                        <p style={{color:"#6ba3d7"}}>{taslaktext}</p>
                </div>

                <div class="more">
        
                        <a href={taslaklink} class="read-more">Daha Fazla Bilgi</a>
                        <div class="icon-links"> 
                                <a href="#"><i class="fa-solid fa-leaf"></i></a>  
                                <a href="#"><i class="fa-solid fa-crown"></i></a>
                                <a href="#"><i class="fas fa-heart"></i></a>
                                
                             
                        </div>
                </div>

        </div>

     )
}
}