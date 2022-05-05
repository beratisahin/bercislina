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
              <a href="/anasayfa">
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

              <li><a href="tecrubeli-ogretmen-kadrosu" class="menu-link">Tecrübeli Öğretmen Kadrosu</a></li>
              <li><a href="/profesyonel-ogrenci-koclugu" class="menu-link">Profesyonel Öğrenci Koçluğu</a></li>
              <li><a href="/soru-cozum-ve-etut-saatleri" class="menu-link">Soru Çözüm ve Etüt Saatleri</a></li>
              <li><a href="/turkiye-geneli-deneme-sinavi" class="menu-link">Türkiye Geneli Deneme Sınavı</a></li>
              <li><a href="/okul-ve-odev-takip-sistemi" class="menu-link">Okul ve Ödev Takip Sistemi</a></li>
              <li><a href="/kaliteli-yayinlar" class="menu-link">Kaliteli Yayınlar</a></li>

            
              
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
         
          <li><a href="/duyurular" class="menu-link" style={{fontSize:"medium"}}><ContactlessIcon style={{fontSize:"medium"}}/>&nbsp;Duyurular</a></li>
          <li><a href="/iletisim" class="menu-link" style={{fontSize:"medium"}}><ContactMailIcon style={{fontSize:"medium"}}/>&nbsp;İletişim</a></li>
        </ul>



          </nav>
        </header>

          
   
      
     
    );
  }
}
