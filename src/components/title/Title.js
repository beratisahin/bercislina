import React, { Component } from 'react'
import "./Title.css";
import YL from "./BS_gold.png"

export default class Title extends Component {
    render() {
        //Destructing
        const {page_title} = this.props;
        return (
            <div className="page_header" style={{borderRadius:"5px",height:"9rem"}}>
                    <img src={YL} className="page_header_icon" style={{width:"20rem",height:"15rem",float:"left",marginTop:"-2rem"}}></img>
                    <a className="page_header_home" href="/">Ana Sayfa <i class="fas fa-long-arrow-alt-right" style={{color:"#E1DFDF"}}></i></a>
                    
                    <p className="page_header_title">{page_title}</p>
              
                
            </div>
        );
      }
}

