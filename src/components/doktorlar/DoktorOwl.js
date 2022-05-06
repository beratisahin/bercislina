import React from 'react'
import ReactPlayer from "react-player";
import './DoktorOwl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import V1 from "./ilgiVideo1.mp4";
import V2 from "./ilgiVideo2.mp4";





//Owl Carousel Settings
const options = {
    margin: 5,
    autoplayHoverPause:true,
    responsiveClass: true,
    dots:2,
    autoplay: false,
    loop:false,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2,
        }
    },
  };


export default function DoktorOwl() {
    return (
       <div class="col-12" style={{justifyContent:"center"}}>
            <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                <ReactPlayer
                    className="react-player"
                    style={{ margin: "auto", overFlow: "hidden",border:"2px inset #cf482c",borderRadius:"5px",padding:"2px"}}
                    url={V1}
                    controls={true}
                    playing={false} 
                    loop={false} 
                    volume={0.5}
                    width="95%"
                    height="auto"
                    
                    config={{
                        file: {
                        attributes: {
                            controlsList: "nofullscreen",
                            muted:"true"
                        },
                        },
                    }}
                />
                </div>

                <div className="item owl-slider">
                <ReactPlayer
                    className="react-player"
                    style={{ margin: "auto", overFlow: "hidden",border:"2px inset #cf482c",borderRadius:"5px",padding:"2px"}}
                    url={V2}
                    controls={true}
                    playing={false} 
                    loop={false} 
                    volume={0.5}
                    width="95%"
                    height="auto"
                    
                    config={{
                        file: {
                        attributes: {
                            controlsList: "nofullscreen",
                            muted:"true"
                        },
                        },
                    }}
                />
                </div>

                
            </OwlCarousel>

        </div>
            
        
    )
}
