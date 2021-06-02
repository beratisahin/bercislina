import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import logo from "./bV9.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';




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
      <div>
        <div class="row p-4" style={{ backgroundColor: "white", height:"auto" }}>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <a href="/" title="Samsun Profesyonel Sağlam Temizlik">
              <img
                src={logo}
                alt="logo"
                style={{ width: "25rem", height: "12rem",display:"block",align:"center",margin:"auto" }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                color: "black",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Estetik ve güzellik anlayışının sağlıkla ön planda tutulduğu güzellik merkezimde, koşulsuz müşteri memnuniyeti sunma amaçlı konusunda deneyimli ve profesyonel bir ekip tarafından hizmet vermektedir.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <b style={{ color: "black", fontSize: "18px" }}>Hizmetlerimiz</b>
            <ul className="bottomlist">
              <li onClick={() => this.scrollToTop()}>
                <Link to="/cilt-bakim">Cilt Bakım</Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/epilasyon">
                  Epilasyon
                </Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/kalici-fondoten">Kalıcı Fondoten</Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/kas-kontur">Kaş Kontür</Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/dermaterapi">
                  Dermaterapi
                </Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/kalici-makyaj">Kalıcı Makyaj</Link>
              </li>
              
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <b style={{ color: "black", fontSize: "18px" }}>Kurumsal</b>
            <ul className="bottomlist">
              <li onClick={() => this.scrollToTop()} style={{ color: "black" }}>
                <Link to="/hakkimizda">Hakkımızda</Link>
              </li>
              <li onClick={() => this.scrollToTop()} style={{ color: "black" }}>
                <Link to="/belgelerimiz">Belgelerimiz</Link>
              </li>
              <li onClick={() => this.scrollToTop()} style={{ color: "black" }}>
                <Link to="/referanslarimiz">Referanslarımız</Link>
              </li>
              <li onClick={() => this.scrollToTop()} style={{ color: "black" }}>
                <Link to="/ekibimiz">Ekibimiz</Link>
              </li>
              <li onClick={() => this.scrollToTop()} style={{ color: "black" }}>
                <Link to="/iletisim">İletişim</Link>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12"
            style={{ fontSize: "15px" }}
          >
            <p style={{ color: "black", fontWeight: "bold", fontSize: "18px" }}>
              Sosyal Medya
            </p>
            <a
              href="https://www.facebook.com/bercislinakahramanmaras/"
              target="_blank"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://www.instagram.com/bercislinavipadiyaman/"
              target="_blank"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://wa.me/+905435390177"
              target="_blank"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="tel: +905435390177"
              target="_blank"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon className="icon" style={{fontSize:"24px"}} />
            </a>

            <br />
            <br/>
            <p style={{ color:"#4682B4", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <EmailIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              bercislina_erzurum@gmail.com  
            </p>
            <p style={{ color:"#4682B4", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <SettingsPhoneIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0543 539 01 77  <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{ color:"#4682B4", fontSize: "14px", textAlign: "left" }}>
              
              <a>
                <HomeIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              Atatürk Mahallesi Cumhuriyet Caddesi <br/> Yakutiye / Erzurum{" "}

             
            </p>
          </div>
          <div className="col-12">
            
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",color:"black",paddingLeft:"1rem",float:"left"}}> ©2020 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <p style={{fontSize:"12px",color:"black",paddingRight:"1rem",float:"right",textAlign:"right"}}> ®Se<b>B</b>er Tech</p>
                    </div>
          </div>

          <div className="roof-phone">
                <a
                    href="tel: +905435390177"
                    className="phone_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                    
                    <PhoneIcon className="phone-icon"/>
                  
                </a>
            </div>

            

            <div className="roof-whatsapp">
                <a
                    href="https://wa.me/+905435390177"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                    <WhatsAppIcon className="whatsapp-icon"/>
                  
                </a>
            </div>

        </div>

        
      </div>
    );
  }
}
