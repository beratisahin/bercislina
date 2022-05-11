import React from 'react';
import Taslak from "../taslakhizmet/Taslak.js";
import "./TopluHizmet.css";


import m1 from "./hizmetFotolar/bl1.jpg";
import m2 from "./hizmetFotolar/bl2.webp";
import m3 from "./hizmetFotolar/bl3.jpg";
import m4 from "./hizmetFotolar/bl4.jpg";
import m5 from "./hizmetFotolar/bl5.jpg";
import m6 from "./hizmetFotolar/bl6.jpg";




export default function TopluHizmet() {
    return (
        
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:"-2rem"}}>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Medikal Cilt Bakımı"
                    taslakphoto={m2}
                    taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/medikal-cilt-bakimi"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Tüm Vücut Lazer Epilasyon"
                    taslakphoto={m5}
                    taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/tum-vucut-lazer-epilasyon"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Hydrafacial Cilt Bakımı"
                    taslakphoto={m3}
                    taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/hydrafacial-cilt-bakimi"
                />      
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="G5 Masajı - Selülit Sıkılaştırma"
                    taslakphoto={m4}
                    taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/g5-masaji-selulit-sikilastirma"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Ense - Boyun - Yanak"
                    taslakphoto={m1}
                    taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/ense-yanak-boyun-epilasyon"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Bikini Bölgesi "
                    taslakphoto={m6}
                    taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/bikini-bolgesi"
                />
            </div>
            

        </div>
        

    

    )
}
