import "./Hizmet.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function BikiniBolgesi() {
    useDocumentTitle('Bikini Bölgesi- Erzurum Blue Liva Güzellik Salonu');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Bikini Bölgesi"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>
                    <h4><strong>Bikini Bölgesi Lazer Nedir?&nbsp;</strong></h4>
                    <p class="hizmetyazi">Genital bölge lazer, ışın teknolojisini kullanarak kıl köklerinin tahrip edilmesinin amaçlandığı epilasyon uygulamasıdır. Lazer epilasyon cihazı, kıl köklerine yüksek yoğunlukta ışın gönderir. Kıl köklerinde bulunan melaninle etkileşime geçerek kıl kökünü tahrip ederek tüylerin dökülmesini amaçlanırlar. Kıllar ne kadar kalın ve yoğunluklu olursa lazer epilasyon cihazı o kadar iyi etki gösterebilir. Hormonal değişimlerden etkilenen ve kalın kıl yapısına sahip olan bikini bölgesi için lazer epilasyon kesin bir çözüm sunabilir.</p>   

                    <h4><strong>Bikini Bölgesi Lazer Nasıl Yapılır?&nbsp;</strong></h4>
                    <p class="hizmetyazi">Bikini bölgesi lazer epilasyon öncesi uzman doktor tarafından muayene yapılır. Kıl yapısı ve yoğunluğu, ten rengi gibi etkenler göz önünde bulundurularak lazer epilasyon planı yapılır. Seans sayısı, kullanılacak lazer epilasyon cihazı modeli ve seans aralıkları planlanır. Bu plan doğrultusunda genital bölge lazer epilasyon işlemi uygulanmaya başlanır. Gerek duyulursa lokal anestezik kremler kullanılır ve kıl köklerine yüksek yoğunluklu ışık dalgası verilerek kontrollü tahribat sağlanması amaçlanır.</p>   

                    <h4><strong>Genital Bölge Lazer Epilasyon Kaç Seansta Biter?&nbsp;</strong></h4>
                    <p class="hizmetyazi">Genital bölge lazer seans sayısı, doktor muayenesinden sonra belirlenir. Kıl yapısı ve yoğunluğu, kişinin ten rengi ve yapısı gibi etkenler seans sayısını etkiler. Genital bölge lazer epilasyon için uygulanan seans sayısı genellikle 5 veya 6’dır. Seans araları 2 ay sürebilir.</p>

                    <h4><strong>Genital Bölge Lazer Epilasyon Ne Kadar Sürer?&nbsp;</strong></h4>
                    <p class="hizmetyazi">Lazer epilasyon öncesi hasta uygulama için hazırlanır. Lokal anestezik kremler sürülerek etkisini göstermesi beklenir. Ardından lazer işlemine başlanır. Seans süreleri kişiden kişiye değişebilir fakat genital bölge için lazer atış işlemi genellikle 15-20 dakika kadar sürebilir. Lazer epilasyon sonrası doktor gerekli kontrolleri yaparak hastayı taburcu eder ve kişi günlük hayatına devam edebilir.</p>

                    <h4><strong>Lazer Epilasyon Acıtır mı?&nbsp;</strong></h4>
                    <p class="hizmetyazi">Bikini bölgesi lazer epilasyon yaptıranlar, işlem sırasında ufak yanmalar hissettiğini ifade etmektedir. Lazer cihazı sağladığı yüksek yoğunluklu ışın, kıl köklerinde yüksek sıcaklık oluşmasını sağlar. Bu sıcaklık ufak yanmalar ve hafif bir ağrı şeklinde hissedilebilir. Hastanın talebi yada doktorun kararı ile lokal anestezik kremler ile ağrı hissi hafifletilebilir. Lazer epilasyon sonrası kalıcı bir ağrı yada acı yaşanmaz.</p>

                    <h4><strong>Lazer Epilasyona Gitmeden Önce Yapılması Gerekenler&nbsp;</strong></h4>
                    <p class="hizmetyazi">Erzurum Blue Liva Güzellik Salonu lazer epilasyon seansına gitmeden önce uyulması gereken bazı kurallar vardır;
                            <ul>
                                <li> Uygulamadan 1 ay önce kesinlikle ağda işlemi uygulanmamalı, kıl kökleri yerinde olmalıdır.</li>
                                <li>İşlemden birkaç gün önce jilet ile kıllar kısaltılabilir.</li>
                                <li> Kıl köklerini tahrip edecek uygulamalardan kaçınılmalıdır.</li>
                                <li>Bölgenin temizliğine ve hijyenine dikkat edilmelidir.</li>
                            </ul>
                    </p>

                    

                </div>
            </div>
            
        </div>
    )
}



