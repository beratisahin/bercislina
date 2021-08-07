import React from "react";
import "./Home.css";
import Services from "../services/Services";
import Slider from "../slider/Slider";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";
import OwlCarousel from "../owlcarousel/Owl";

import ciltBakim from "../medya/ciltBakim.PNG";
import epilasyon from "../medya/epilasyon.PNG";
import kaliciFondoten from "../medya/kaliciFondoten.PNG";
import kasKontur from "../medya/kasKontur.PNG";
import dermaterapi from "../medya/dermaterapi.jpg";
import kaliciMakyaj from "../medya/kaliciMakyaj.jpg";






function Home() {
  return (
    <div>
      <div className="sliderBg">

        <div className="col-12 mt-4 p-0" style={{borderRadius: "1rem" ,width:"80%",display:"block",align:"center",margin:"auto"}}>
          <Slider />
        </div>
      </div>
      

      <div className="row mr-4 servicebox">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={ciltBakim}
            title="Cilt Bakım"
            text="Göz çevresini düzenlemek,koyu halkaları azaltmak ve sıkılaştırmak için uygulanan bakımdır. İnce çizgileri hafifletir ve çizgileri azaltır yorgun gözleri rahatlatır..."
            divert="/cilt-bakim"


          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={epilasyon}
            title="Epilasyon"
            text="Göz çevresini düzenlemek,koyu halkaları azaltmak ve sıkılaştırmak için uygulanan bakımdır. İnce çizgileri hafifletir ve çizgileri azaltır yorgun gözleri rahatlatır..."
            divert="/epilasyon"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={kaliciFondoten}
            title="Kalıcı Fondoten"
            text="Göz çevresini düzenlemek,koyu halkaları azaltmak ve sıkılaştırmak için uygulanan bakımdır. İnce çizgileri hafifletir ve çizgileri azaltır yorgun gözleri rahatlatır..."
            divert="/kalici-fondoten"
          />
        </div>

       

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={kasKontur}
            title="Kaş Kontür"
            text="Göz çevresini düzenlemek,koyu halkaları azaltmak ve sıkılaştırmak için uygulanan bakımdır. İnce çizgileri hafifletir ve çizgileri azaltır yorgun gözleri rahatlatır..."
            divert="/kas-kontur"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={dermaterapi}
            title="Dermaterapi"
            text="Göz çevresini düzenlemek,koyu halkaları azaltmak ve sıkılaştırmak için uygulanan bakımdır. İnce çizgileri hafifletir ve çizgileri azaltır yorgun gözleri rahatlatır..."
            divert="/dermaterapi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={kaliciMakyaj}
            title="Kalıcı Makyaj"
            text="Göz çevresini düzenlemek,koyu halkaları azaltmak ve sıkılaştırmak için uygulanan bakımdır. İnce çizgileri hafifletir ve çizgileri azaltır yorgun gözleri rahatlatır..."
            divert="/kalici-makyaj"
          />
        </div>
       
      </div>

      <div className="col-12">
            <OwlCarousel/>
      </div>
      <br/>
      <div className="col-12">
            
            <NedenBercislina/>
      </div>
      <br/>
      <p style={{textAlign:"center",color:"#e10487",fontSize:"large"}}>Bizimle İletişime Geçebilirsiniz</p>
      <div className="col-12">
            <Mail/>
      </div>
      

      <div className="col-12 harita" style={{}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.3008749694877!2d41.23791151524074!3d39.88989547942979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5eed98de988d%3A0xa214df6214c40241!2sErzurum%20B%C3%B6lge%20E%C4%9Fitim%20Ve%20Ara%C5%9Ft%C4%B1rma%20Hastanesi%20Helikopter%20Pisti!5e0!3m2!1str!2str!4v1622621117465!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #C92798 solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
            </div> 

            

    </div>
  );
}

export default Home;
