import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';

import r1 from "./1.png";
import r2 from "./2.png";
import r3 from "./3.png";
import r4 from "./4.png";
import r5 from "./5.png";
import r6 from "./6.png";
import r7 from "./7.png";
import r8 from "./8.png";
import r9 from "./9.png";
import r10 from "./10.png";
import r11 from "./11.png";





//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    autoplayHoverPause:false,
    dots:2,
    autoplay: true,
    loop:true,
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
            items: 4,
        }
    },
  };


export default function Klinik() {
    return (
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
            <OwlCarousel className="owl-theme owl-roof" {...options}>
                 <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r1} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r2} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r3} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r4} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r5} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r6} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r7} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r8} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r9} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r10} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r11} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Blue Liva Güzellik Salonu" title="Erzurum Blue Liva Güzellik Salonu"></img>
                    </div>
                </div>
              
             
                
            </OwlCarousel>
        </div>

            
        
    )
}

