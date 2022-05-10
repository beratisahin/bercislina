import "./Navbar.css";
import React, { Component } from "react";

import { Menubar } from 'primereact/menubar';

import BusinessIcon from '@material-ui/icons/Business';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ContactlessIcon from '@material-ui/icons/Contactless';
import Logo from "./BlueLivaMenuLogo.PNG";



export default class Navbar extends Component {
  componentDidMount () {
    const script = document.createElement("script");

  
      const hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", function () {
      this.classList.toggle("close");
    });
  

    document.body.appendChild(script);
}
  render() {
    
    return (
    
         <header>
          <nav class="navbar">
            <div class="branding">
              <a href="/">
                <img  className="BlueLivaLogo" title="Erzurum Blue Liva Güzellik Salonu" src={Logo}></img>
              </a>
                
            </div>
            <label for="input-hamburger" class="hamburger "></label>
            <input type="checkbox" id="input-hamburger" hidden></input>
        <ul class="menu">
          <li><a href="/" class="menu-link" style={{fontSize:"medium"}}><HomeIcon style={{fontSize:"medium"}}/>&nbsp;Ana Sayfa</a></li>
          <li><a href="/hakkimizda" class="menu-link" style={{fontSize:"medium"}}><BusinessIcon style={{fontSize:"medium"}}/>&nbsp;Hakkımızda</a></li>
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}><CastForEducationIcon style={{fontSize:"medium"}}/>&nbsp;Hizmetlerimiz &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">

              <li><a href="/medikal-cilt-bakimi" class="menu-link">Medikal Cilt Bakımı</a></li>
              <li><a href="/tum-vucut-lazer-epilasyon" class="menu-link">Tüm Vücut Lazer Epilasyon</a></li>
              <li><a href="/hydrafacial-cilt-bakimi" class="menu-link">Hydrafacial Cilt Bakımı</a></li>
              <li><a href="/g5-masajı-selulit-sikilastirma" class="menu-link">G5 Masajı - Selülit Sıkılaştırma</a></li>
              <li><a href="/ense-boyun-yanak-epilasyon" class="menu-link">Ense - Yanak - Boyun Epilasyon</a></li>
              <li><a href="/bikini-bolgesi" class="menu-link">Bikini Bölgesi</a></li>

            
              
            </ul>
          </li>
          <li><a href="/urunlerimiz" class="menu-link" style={{fontSize:"medium"}}><ContactlessIcon style={{fontSize:"medium"}}/>&nbsp;Ürünlerimiz</a></li>
          <li class="has-dropdown" >
            <a href="#" class="menu-link" style={{fontSize:"medium"}}><CameraAltIcon style={{fontSize:"medium"}}/>&nbsp;Galeri &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">
            
            <li><a href="/fotograflar" class="menu-link">Fotoğraf</a></li>
            <li><a href="/videolar" class="menu-link">Video</a></li>
      
              
            </ul>
          </li>
         
          <li><a href="/blog" class="menu-link" style={{fontSize:"medium"}}><ContactlessIcon style={{fontSize:"medium"}}/>&nbsp;Blog</a></li>
          <li><a href="/iletisim" class="menu-link" style={{fontSize:"medium"}}><ContactMailIcon style={{fontSize:"medium"}}/>&nbsp;İletişim</a></li>
        </ul>



          </nav>
        </header>

          
   
      
     
    );
  }
}
