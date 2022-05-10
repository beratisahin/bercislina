import "./Hizmet.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function G5Masajı() {
    useDocumentTitle('G5 Masajı - Selülit Sıkılaştırma - Erzurum Blue Liva Güzellik Salonu');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="G5 Masajı - Selülit Sıkılaştırma"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>
                    <h4><strong>G5 Masajı - Selülit Sıkılaştırma&nbsp;</strong></h4>
                    <p class="hizmetyazi">Erzurum Blue Liva Güzellik Salonu</p>     
                </div>
            </div>
            
        </div>
    )
}



