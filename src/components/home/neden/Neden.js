import "./Neden.css";

import SecurityIcon from '@material-ui/icons/Security';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import EcoIcon from '@material-ui/icons/Eco';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import React, { Component } from 'react'

export default class Neden extends Component {
    render() {
        
        return (
            <div className="row" style={{margin:"0%",padding:"1%",backgroundColor:"#EFEFEF",borderRadius:"1rem"}}>
                    <div className="col-12">
                    <p style={{color:"#C92798",textAlign:"center",fontSize:"large"}}>Neden Bercislina Epilasyon ve Güzellik Merkezi</p>
                    <br/>
                    </div>
                   
                   
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-baslik"><InsertEmoticonIcon style={{color:"#C92798",fontSize:"larger"}}/>&nbsp; Müşteri Memnuniyeti</p>
                        <p class="card-neden"> 
                        Temel önceliğimiz misafirlerimizin memnuniyetidir.</p>
                        <br/>
                   </div>
                
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><PeopleIcon style={{color:"#C92798",fontSize:"larger"}}/>&nbsp; Uzman Kadro</p>
                        <p class="card-neden"> Alanında uzman profesyonel bir kadro yapısıyla hizmet sunar.</p>
                        <br/>
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><AssignmentTurnedInIcon style={{color:"#C92798",fontSize:"larger"}}/>&nbsp; Kaliteli Hizmet</p>
                        <p class="card-neden"> Hizmette kalite en önemli özelliklerimizin başında gelmektedir.</p>
                        <br/>
                   </div>

                  
                
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><EcoIcon style={{color:"#C92798",fontSize:"larger"}}/>&nbsp; Hijyenik Ortam</p>
                        <p class="card-neden"> En önemli temel taşımız hijyenik koşullarda sağlıklı bir bakım hizmetidir.</p>
                        <br/>
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><HowToRegIcon style={{color:"#C92798",fontSize:"larger"}}/>&nbsp; Yılların Tecrübesi</p>
                        <p class="card-neden"> Yılların tecrübesini sizlere sıcak ve ferah bir ortamda sunar.</p>
                        <br/>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-baslik"><SecurityIcon style={{color:"#C92798",fontSize:"larger"}}/>&nbsp; Güvenilirlik</p>
                        <p class="card-neden"> 
                        Karşılıklı güven içerisinde hizmet vermeye önem veririz.</p>
                        <br/>
                   </div>
                   
             
                   
            </div>
            
               
            
                
           
        )
    }
}
