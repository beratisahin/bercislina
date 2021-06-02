import "./CalismaPrensibimiz.css";


import ciltBakim from "../medya/ciltBakim.PNG";
import epilasyon from "../medya/epilasyon.PNG";
import kaliciFondoten from "../medya/kaliciFondoten.PNG";
import kasKontur from "../medya/kasKontur.PNG";
import dermaterapi from "../medya/dermaterapi.jpg";
import kaliciMakyaj from "../medya/kaliciMakyaj.jpg";

import React from 'react';
import useDocumentTitle from '../../useDocumentTitle';

function CalismaPrensibimiz() {
    useDocumentTitle('Çalışma Prensibimiz - Bercislina Epilasyon ve Güzellik Merkezi');
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"#C92798"}}><b>Çalışma Prensibimiz</b></h3>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 pretemp" >
                <img src={ciltBakim} className="d-block img-responsive w-100 prepho" title="temizlik" alt="temizlik" ></img>
                <p class="prensip-text">1- Elemanlarımızın Tamamı Hijyen Şartlarına Uygun Kıyafet ve Ekipmanlar ile Çalıştırılmaktadır.</p>
           
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 pretemp" >
                <img src={epilasyon} className="d-block img-responsive w-100 prepho" title="ilaçlama" alt="koltuk-yıkama" ></img>
                <p class="prensip-text">2- Bütün İşlerinizde Kullanılan Temizlik, İlaçlama Araçlar Piyasadaki Kaliteli Ürünlerdir.  </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 pretemp" >
                <img src={kaliciFondoten} className="d-block img-responsive w-100 prepho" title="merdiven" alt="merdiven"></img>
                <p class="prensip-text">3- İş Öncesi ve Sonrası Firmamız Tarafından Müşteri Memnuniyeti için Geri Bildirim Alınır..</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 pretemp" >
                <img src={kasKontur} className="d-block img-responsive w-100 prepho" title="araç-yıkama" alt="araç yıkama"></img>
                <p class="prensip-text" >4- Yapılan Bütün İşleriniz Anlaşmalı Sigorta Şirketimiz Tarafından Garantiye Alınmıştır. </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 pretemp" >
                <img src={dermaterapi} className="d-block img-responsive w-100 prepho" title="halı yıkama" alt="halı" ></img>
                <p class="prensip-text">5- Lazer Epilasyon İşlemlerinde Periyodik Olarak Ekibimiz Ücretsiz Olarak Destek Vermektedir.</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 pretemp" >
                <img src={kaliciMakyaj} className="d-block img-responsive w-100 prepho" title="yurt temizlik" alt="yurt" ></img>
                <p class="prensip-text">6- Uygulama ve Kontrol personellerimiz Ayrı Ekipler ve Kişilerle Periyodik Takip Edilmektedir.</p>
            </div>
            


        </div>
        </div>
    )
}

export default CalismaPrensibimiz
