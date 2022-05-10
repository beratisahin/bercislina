import "./Hizmet.css";import "./Hizmet.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function EnseYanakBoyun() {
    useDocumentTitle('Ense-Yanak-Boyun- Erzurum Blue Liva Güzellik Salonu');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Ense-Yanak-Boyun"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>
                    <h4><strong>Ense-Yanak-Boyun&nbsp;</strong></h4>
                    <p class="hizmetyazi">Erzurum Blue Liva Güzellik Salonu</p>     
                </div>
            </div>
            
        </div>
    )
}



