import './sss.css';
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function Sss() {
    useDocumentTitle('Sıkça Sorulan Sorular - Bercislina Epilasyon ve Güzellik Merkezi');
    return (
        
        <div class="row" style={{border:"2px dotted white",justify: "center",margin:"20px",minHeight:"30rem"}}>
            
           
            
        <div className="hakkımızda" style={{minHeight:"40rem"}}>
            <h3 style={{textAlign:"center",color:"#C92798"}}><b>Sıkça Sorulan Sorular</b></h3>
            <h4 className="hed">1- Lazer Epilasyonda Başarıyı etkileyen faktörler nelerdir?</h4>
            <p className="kurumsal_text" >Uygulama yapılan bölgedeki Kıl koyu ve kalınsa sonuç daha iyidir.Çünkü kalın kıl yeterli enerjiyi tutabilir.Bu sayede kıl köküne iletilen yüksek ısı kökü daha kuvvetli tahrip eder.
İyi sonuç için yeterli derecede enerji kullanılmalıdır.Enerji cildi yakmayacak ama kıl kökünü de tahrip edecek düzeyde olmalıdır.
Atım süresi cilde ve kıla göre ayarlanmalıdır.Long pulsed lazerler bu nedenle avantajlıdır.
Kıl rengi siyah ise sonuç en iyidir. Beyaz tüylere lazer etkisizdir.
İyi ve etkin bir soğutma sistemi etkin dozları kullanmaya imkan verir ve başarıyı arttırır.Komplikasyon oranını düşürür.
            </p>
            <br/>
            <h4 className="hed">2- Seans aralıkları nasıl olmalıdır?</h4>
            <p className="kurumsal_text">
            Çoğu zaman ortalama 5-6 seans sonuç almak için yeterlidir.Seans aralıkları yüz için ortalama 4-5 hafta, vücut için 8-10 hafta kadardır ve gittikçe seans aralıkları açılır. Kişinin cilt yapısı ve kıl tipine göre değişiklikler gösterebilir.
            </p>
            <br/>
            <h4 className="hed">3- Leke ve yanık riski var mı ?</h4>
            <p className="kurumsal_text">
            Deriye rengini veren melanin pigmenti fazla ise yani,cilt esmer veya bronzsa etkilenme riski vardır. Bu nedenle koyu renkli ciltlerde ve güneş banyosundan sonra yapılan uygulamalarda, lazer öncesinde test atışı yapılır. Test atışında komplikasyon görülmesse lazer geçilebilir.
            </p>
           
        </div>
        
      
    </div>
            


    )
}

export default Sss
