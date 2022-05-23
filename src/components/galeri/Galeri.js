
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

import React, { useState, useEffect } from "react";
import useDocumentTitle from '../../useDocumentTitle';
import {db} from "../../firebase";

function Galeri() {
    const [galeri, setGaleri] = useState([]);
    useEffect(() => {
        // fires once when the app loads
        getGaleri();
      }, []);

    const getGaleri = () => {

        db.collection("galeri")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setGaleri(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              url: doc.data().url.substring(doc.data().url.lastIndexOf('file')+7, doc.data().url.lastIndexOf('/')),
              name: doc.data().name,
              
            }))
          );
        });

        setTimeout(() => {
            console.log(galeri);
        }, 500);
        
      }

      

        useDocumentTitle('Galeri - Erzurum Blue Liva Güzellik Salonu');
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"#C92798"}}><b>Galeri</b></h3>

            {galeri.map((foto, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 col-12" >
                <img src={"https://drive.google.com/uc?export=view&id="+foto.url} class="lazy" className="d-block img-responsive w-100 galpho" title={foto.name} alt={foto.name} ></img>
                
                </div>
          ))}

        </div>
        </div>
    )
}

export default Galeri

