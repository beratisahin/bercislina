import React, { useState, useEffect } from "react";
import "./Blog.css";

import tfoto from "../medya/bg7.jpg";

import useDocumentTitle from '../../useDocumentTitle';
import {db} from "../../firebase";
import html from 'react-inner-html';

        

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

    useDocumentTitle('Blog - Bercislina Epilasyon ve Güzellik Merkezi');
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"#C92798"}}><b>Blog</b></h3>
            {blogs.map((blog, index) => (
                 <div className="col-lg-4 col-md-6 col-sm-12 col-12" >
                 <img src={"https://drive.google.com/uc?export=view&id="+blog.url} className="d-block img-responsive w-100 galpho" title="temizlik" alt="temizlik" ></img>
                 <h4 className="blogTitle">{blog.heading}</h4>
                 <p className="blogContent"  {...html(blog.blogContent)}></p>
             </div> 
           
          ))}

           

          

        </div>
        </div>
    )
}
