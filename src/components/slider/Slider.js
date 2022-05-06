import './Slider.css';


import is1 from "./bls5.webp";
import is2 from "./bls2.jpg";
import is3 from "./bls3.webp";
import is4 from "./bls4.jpg";


import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (

        <div style={{display:"flex", justifyContent:"center"}}>
           
            <div id="slide" >
               
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    
                        <div className="carousel-item active" data-interval="3000">
                            <img src={is1} className="d-block img-responsive w-100 slidephoto" title="Cilt Bakımı" alt="logo"></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Kayıtlarımız başlamıştır</h3>
                                <p className="sliderText"></p>
                                
                            </div>

                           
                         </div>
                         <div className="carousel-item" data-interval="3000">
                            <img src={is2} className="d-block img-responsive w-100 slidephoto" title="Cilt Bakımı" alt="logo"></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Kayıtlarımız başlamıştır</h3>
                                <p className="sliderText"></p>
                                
                            </div>

                           
                         </div>
                         <div className="carousel-item" data-interval="2000">
                            <img src={is3} className="d-block img-responsive w-100 slidephoto" title="Epilasyon" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-sm-block">
                                <h3 className="sliderHeader">Kayıtlarımız başlamıştır</h3>
                                <p className="sliderText"></p>
                               
                            </div>
                            
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={is4} className="d-block img-responsive w-100 slidephoto" title="Epilasyon" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-sm-block">
                                <h3 className="sliderHeader">Kayıtlarımız başlamıştır</h3>
                                <p className="sliderText"></p>
                               
                            </div>
                            
                        </div>
                    </div>

                    
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                   
                </div>
            </div>
        </div>
           
        )
    }
}
