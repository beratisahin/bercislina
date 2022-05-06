import React, { Component } from 'react'
import "./Title.css";
import YL from "./ilgiHeader.png"

export default class Title extends Component {
    render() {
        //Destructing
        const {page_title} = this.props;
        return (
            <div className="page_header" style={{borderRadius:"5px",height:"9rem"}}>
                    <img src={YL} className="page_header_icon" style={{width:"9rem",height:"9rem",float:"left"}}></img>
                    <a className="page_header_home" href="/">Ana Sayfa <i class="fas fa-long-arrow-alt-right" style={{color:"#E1DFDF"}}></i></a>
                    
                    <p className="page_header_title">{page_title}</p>
              
                
            </div>
        );
      }
}

