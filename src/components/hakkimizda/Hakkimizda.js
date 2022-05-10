
import './hakkımızda.css';
import React from 'react';
import useDocumentTitle from '../../useDocumentTitle.js';
import Title from "../title/Title";

function Hakkimizda() {
    useDocumentTitle('Hakkımızda - Bercislina Epilasyon ve Güzellik Merkezi');
    return (

        <div className="col-12">
        <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
           <Title 
                page_title="Hakkımızda"
           />
            
            <div className="card-body col-12" style={{padding:"3rem"}}>
                <br/>
               
                <p class="hizmetyazi">Huzurlu atmosferi, güvenliği, teknolojik donanımı, deneyimli güler yüzlü ekibi ile estetik ve güzellik sektöründe Serdivan’da merkezi konumuyla siz değerli müşterilerimizin hizmetinizdedir.
                    Lazer Epilasyon, Dermatolojik ürünlerle Cilt Bakımı, Kalıcı Makyaj, Göz Bakımı, Bölgesel Zayıflama, Saç Kesimi, Saç Boyası (Röfle, Ombre), Profesyonel Makyaj, Kaş Tasarımı, Manikür, Pedikür, Keratin Saç Bakımı, Bitkisel Saç Bakımı, Kaynak, Çıtçıt ve Sir Ağda hizmetlerimiz profosyenel ürünlerle kaliteden ödün vermeden uygulanmaktadır. Ayrıca en son teknoloji Lazer Epilasyon Cihazı ile istenmeyen tüylerden en kısa sürede kurtularak, pürüzsüz bir cilde kavuşuyorsunuz.
                    Ailenizden biri olmayı amaçlayan Erzurum Blue Liva Güzellik Salonu; son derece güvenli, hijyenik ve modern olan ve aynı zamanda zevkli bir tasarıma sahip olan salonu ile değerli müşterilerine kendilerini evlerinde hissedecekleri sıcak, samimi ve konforlu bir ortam sunmaya devam ediyor.
                </p>     
            </div>
        </div>
        
    </div>
        
      
    )
}

export default Hakkimizda
