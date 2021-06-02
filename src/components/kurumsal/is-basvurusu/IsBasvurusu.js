import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function IsBasvurusu() {
    useDocumentTitle('İş Başvurusu - Bercislina Epilasyon ve Güzellik Merkezi');
    return (
        <div class="row" style={{border:"2px dotted white",justify: "center",margin:"20px"}}>
            
           
            
        <div className="is_basvuru" style={{minHeight:"40rem"}}>
            <h3 style={{textAlign:"center",color:"#C92798"}}><b>İş Başvurusu</b></h3>
            <p className="kurumsal_text">
                Ekibimize katılıp bizlerle çalışmak isteyen arkadaşlarımız iletişim bölümünde bulunan formdan ya da sosyal medya bölümünde bulunan Whatsapp veya Telefon Çağrısı üzerinden bizlerle iletişime geçebilir. Değerlendirmeler sonucunda sizinle tekrardan iletişime geçilip bir takım belgeler talep edilecektir.   
         </p>
            
        </div>
        
      
    </div>
    )
}

export default IsBasvurusu
