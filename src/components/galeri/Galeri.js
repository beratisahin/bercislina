
import "./Galeri.css";
import ciltBakim from "../medya/ciltBakim.PNG";
import epilasyon from "../medya/epilasyon.PNG";
import kaliciFondoten from "../medya/kaliciFondoten.PNG";
import kasKontur from "../medya/kasKontur.PNG";
import dermaterapi from "../medya/dermaterapi.jpg";
import kaliciMakyaj from "../medya/kaliciMakyaj.jpg";

import bv5 from "../medya/bV5.PNG";
import bv6 from "../medya/bV6.jpg";
import bv7 from "../medya/bV7.png";
import bv8 from "../medya/bV8.jpg";

import React from 'react';
import useDocumentTitle from '../../useDocumentTitle';

function Galeri() {
        useDocumentTitle('Galeri - Bercislina Epilasyon ve Güzellik Merkezi');
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"#C92798"}}><b>Galeri</b></h3>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12" >
                <img src={ciltBakim} className="d-block img-responsive w-100 galpho" title="temizlik" alt="temizlik" ></img>
                
           
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 " >
                <img src={epilasyon} className="d-block img-responsive w-100 galpho" title="ilaçlama" alt="koltuk-yıkama" ></img>
               
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 " >
                <img src={kaliciFondoten} className="d-block img-responsive w-100 galpho" title="merdiven" alt="merdiven"></img>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 " >
                <img src={kasKontur} className="d-block img-responsive w-100 galpho" title="araç-yıkama" alt="araç yıkama"></img>
               
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 " >
                <img src={dermaterapi} className="d-block img-responsive w-100 galpho" title="halı yıkama" alt="halı" ></img>
               
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 " >
                <img src={kaliciMakyaj} className="d-block img-responsive w-100 galpho" title="yurt temizlik" alt="yurt" ></img>
                
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12 " >
                <img src={bv5} className="d-block img-responsive w-100 galpho" title="halı yıkama" alt="halı" ></img>
               
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 " >
                <img src={bv6} className="d-block img-responsive w-100 galpho" title="yurt temizlik" alt="yurt" ></img>
                
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12 " >
                <img src={bv7} className="d-block img-responsive w-100 galpho" title="halı yıkama" alt="halı" ></img>
               
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 " >
                <img src={bv8} className="d-block img-responsive w-100 galpho" title="yurt temizlik" alt="yurt" ></img>
                
            </div>
            


        </div>
        </div>
    )
}

export default Galeri

