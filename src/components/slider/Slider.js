import './Slider.css';
import s1 from '../medya/slider1.jpg';
import s2 from '../medya/slider2.jpg';
import s3 from '../medya/slider3.jpg';
import s4 from '../medya/slider4.jpg';
import s5 from '../medya/slider5.jpeg';




import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (

        <div style={{display:"flex", justifyContent:"center"}}>
            <div id="slide" >
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="3000">
                            <img src={s5} className="d-block img-responsive w-100 slidephoto" title="Cilt Bakımı" alt="logo" style={{height:"40rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center",color:"#C92798"}}>Profesyonellik</h4>
                         </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={s4} className="d-block img-responsive w-100 slidephoto" title="Epilasyon" alt="logo" style={{height:"40rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center",color:"#C92798"}}>Kurumsallık</h4>
                        </div>
                        <div className="carousel-item">
                            <img src={s3} className="d-block img-responsive w-100 slidephoto" title="Kaş Kontür" alt="logo" style={{height:"40rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center",color:"#C92798"}}>Mükemmellik</h4>
                        </div>
                        <div className="carousel-item">
                            <img src={s2} className="d-block img-responsive w-100 slidephoto" title="Kalıcı Makyaj" alt="logo" style={{height:"40rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center",color:"#C92798"}}>Güvenilirlik</h4>
                        </div>
                        <div className="carousel-item">
                            <img src={s1} className="d-block img-responsive w-100 slidephoto" title="Kalıcı Fondoten" alt="logo" style={{height:"40rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center",color:"#C92798"}}>Hijyen</h4>
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
