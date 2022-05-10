import React, { useState, useEffect } from "react";
import "./Blog.css";

import tfoto from "../medya/bg7.jpg";

import useDocumentTitle from '../../useDocumentTitle';
import {db} from "../../firebase";
import html from 'react-inner-html';

 import Title from "../title/Title";       

export default function Blog() {
    

    const [blogs, setBlogs] = useState([]);
    
    const getBlogs = () => {
        db.collection("blogs")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setBlogs(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              url: doc.data().url.substring(doc.data().url.lastIndexOf('file')+7, doc.data().url.lastIndexOf('/')),
              heading: doc.data().heading,
              blogContent: doc.data().blog_content,
            }))
          );
        });
      }

      useEffect(() => {
        // fires once when the app loads
        getBlogs();
      }, []);

    useDocumentTitle('Blog - Erzurum Blue Liva Güzellik Salonu');
    return (
      <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",justifyContent:"flex-end !important"}}>
        <Title 
                page_title="Blog"
           />
            <h3 style={{textAlign:"center",color:"#FFFFFF"}}><b>Blog</b></h3>
            

            {blogs.map((blog, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"45rem",marginBottom:"3rem"}}>
                <img src={"https://drive.google.com/uc?export=view&id="+blog.url} className="d-block img-responsive blogPhoto" title={blog.heading} alt={blog.heading} ></img>
                <h4 className="blogTitle">{blog.heading}</h4>
                <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent" {...html(blog.blogContent)}></p></div>
                
            </div>
            ))}
            
          

            
        </div>
        </div>
    )
}
