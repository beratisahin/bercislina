import erkek from "./erkekDoktor.png";
import bayan from "./bayanDoktor.png";
import './ekibimiz.css';
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function Ekibimiz() {
    useDocumentTitle('Ekibimiz - Bercislina Epilasyon ve Güzellik Merkezi');
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"#C92798"}}><b>Ekibimiz</b></h3>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={erkek} className="d-block img-responsive w-100 ekippho" title="temizlik" alt="temizlik" ></img>
                <p class="ekip-text">1- Mehmet Bilgili </p>
           
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={bayan} className="d-block img-responsive w-100 ekippho" title="ilaçlama" alt="koltuk-yıkama" ></img>
                <p class="ekip-text">2- Serap Bilgili  </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={erkek} className="d-block img-responsive w-100 ekippho" title="merdiven" alt="merdiven"></img>
                <p class="ekip-text">3- Ahmet Bilgili</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={bayan} className="d-block img-responsive w-100 ekippho" title="araç-yıkama" alt="araç yıkama"></img>
                <p class="ekip-text" >4- Ayşe Bilgili</p>
            </div>
            
           


        </div>
        </div>
    )
}

export default Ekibimiz
