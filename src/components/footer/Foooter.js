import Logo from "../header/BlueLivaMenuLogo.PNG";
import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsCell from "@material-ui/icons/SettingsCell";





import React, { Component } from "react";

export default class Foooter extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="footer">
        <div class="row p-4" style={{ backgroundColor: "#eeeeee", height:"auto" }}>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <a href="/" title="Blue Liva Güzellik Salonu" alt="Blue Liva Güzellik Salonu">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "30rem", height: "12rem",display:"block",align:"center",margin:"auto" }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                fontFamily:"sans-serif",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Erzurum Blue Liva Güzellik Salonu olarak şehrin merkezinde bulunan salonumuzda siz değerli müşterilerimize hizmet vermekteyiz. Bayanlar ve baylar için epilasyon ve cilt bakım hizmetlerimiz bulunmaktadır. Erkekler için ense, boyun, yanak, göbek, göğüs, sırt, bacak ve kol bölgeleri epilasyon hizmetimiz vardır. Ayrıca medikal ve hydrafacial cilt bakımlarımız da bulunmaktadır. Bayanlar için tüm vücut, bikini bölgesi için epilasyon hizmetlerimiz mevcuttur. Hydrafacial ve medikal cilt bakımlarımız bulunmaktadır. G5 masajı, selülit sıkılaştırma, bölgesel inceltme hizmetlerimiz mevcuttur. RobotX marka epilasyon cihazlarımızla 6 odalı salonumuzda aynı anda birkaç müşterimize hizmet verebilmekteyiz.
            </p>
          </div>


          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "12px",marginBottom:"2rem"  }}>
            <b style={{ color: "#daac1d", fontSize: "18px" }}>Çalışma Takvimi</b>
            <hr/>
            <table class="table table-striped" >
                    
                    <tbody>
                        <tr style={{height:"2px"}}>
                            <td>Pazartesi</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Salı</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Çarşamba</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Perşembe</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Cuma</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Cumartesi</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Pazar</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                      
                    </tbody>
                    
                    </table>
                   
                        <p style={{color:"red",fontSize:"13px"}}></p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <p style={{ color: "#daac1d", fontWeight: "bold", fontSize: "18px" }}>
              Erzurum Blue Liva Güzellik Salonu
            </p>
            <hr/>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://www.instagram.com/blue_liva/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://wa.me/+905072132725"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="tel: +905072132725"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon className="icon" style={{fontSize:"24px"}} />
            </a>

            <br />
            <br/>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a href="mailto:blueliva25@gmail.com">
                <EmailIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              blueliva25@gmail.com  
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +905072132725"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsCell style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0507 213 27 25  <FontAwesomeIcon icon="coffee" size="lg" />
              <br />
            <br/>
              <p style={{  fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +905526350125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsPhoneIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0552 635 01 25  <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              
              <a 
                href="https://www.google.com/maps?q=Alt%C4%B1y%C3%BCzevler+Mah.+%C4%B0maml%C4%B1k+Cad.+No:4+Merkez+/+Tokat&rlz=1C1GCEU_enTR867TR868&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi9uYK325H3AhVxS_EDHbHkA3AQ_AUoAXoECAEQAw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              Muratpaşa Mah. Erzincan Kapı Cad. No:99 Kapı No:13 <br/> Yakutiye / Erzurum{" "}

             
            </p>
          </div>

          <div className="col-12">
            
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",paddingLeft:"1rem",float:"left"}}> ©2022 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <a className="sebertech" href="tel: +905449125561"
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{fontSize:"12px",paddingRight:"1rem",float:"right",textAlign:"right",color:"black"}}> ®Se<b>B</b>er Tech</a>
                    </div>
          </div>


          <div className="roof-location">
              <a href="https://goo.gl/maps/7ryRSpGz7PPH1rZW9" className="location_float" target="_blank" rel="noopener noreferrer">
                  <LocationOnIcon className="location-icon"/>
              </a>
          </div>

          <div className="roof-phone">
              <a href="tel: +905072132725" className="phone_float" target="_blank" rel="noopener noreferrer">
                  <PhoneIcon className="phone-icon"/>  
              </a>
          </div>

          <div className="roof-whatsapp">
              <a href="https://wa.me/+905072132725" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="whatsapp-icon"/>
              </a>
          </div>

        </div>

        
      </div>
    );
  }
}