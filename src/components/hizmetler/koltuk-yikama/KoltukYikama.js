import kasKontur from "../../medya/kasKontur.PNG";
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function KoltukYikama() {
    useDocumentTitle('Kaş Kontür - Bercislina Epilasyon ve Güzellik Merkezi');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={kasKontur} class="hizmet-photo" title="Yerinde Koltuk Yıkama" alt="Yerinde Koltuk Yıkama" ></img>
                <div className="card-body col-12">
                    <br/>
                    <p class="hizmet-title" >Kaş Kontür</p>
                    <p class="hizmet-text" >Estetik ve güzellik anlayışının sağlıkla ön planda tutulduğu güzellik merkezimde, koşulsuz müşteri memnuniyeti sunma amaçlı konusunda deneyimli ve profesyonel bir ekip tarafından hizmet vermektedir.

Günümüz koşullarında her gün yenilenen teknolojinin birebir takipçisi olan merkezimiz de FDA ( Dünya Sağlık Örgütü ) onayı almış teknolojik sağlık, zayıflama ve güzellik ekipmanları kullanmaktadır.

Bercislina güzellik merkezinde tüm işlemler öncesi, konunun uzmanları tarafından doğru hizmet kalitesini sunabilmek amacı müşterinin gereksinim analiz yapılarak, ihtiyaca yönelik bakım ve uygulamalar gerçekleşmektedir.

Vizyon ve misyon çerçevesinde, ana ilkemiz olan bizim emeğimiz, sizin mutluluğunuz ve ortak başarımızdır sözünü ‘’ Güzellik Herkesin Hakkıdır ‘’ sloganı ile taçlandıran Bercislina Güzellik Merkezi, yıllardır bize duyulan güven ve yaklaşımlara layık olmanın mutluluğunu yaşamaktadır.</p> 
                </div>
            </div>
        </div>
    )
}

export default KoltukYikama
