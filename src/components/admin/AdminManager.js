import React, { useEffect } from "react";
import "./AdminManager.css";
import Galeri from "../galeri/Galeri";



function AdminManager(props) {
  const { handleLogout } = props;

  

  const galeri = () => {
    document.getElementById("galeri").style.display = "block";
    
  
  };


  return (
    <div className="row">
      <div className="container-fluid">
        <div className="row d-lg-none d-xl-none d-md-block d-sm-block d-xs-block ">
          <div className="col-12 text-center">
            <h3>Admin Panel</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-xs-12 px-1 vh-lg-100 overflow-scroll" style={{backgroundColor:"#E2C3DD"}}>
            <div className="col-12 mt-lg-5">
             

              <button
                className="btn btn-outline text-white m-3"
                onClick={galeri}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Galeri İşlemleri
              </button>

        

              <button onClick={handleLogout} className="btn btn-danger text-white m-3">
                Çıkış
              </button>

            </div>
          </div>

          <div style={{minHeight:"100vh",}} className="col-lg-10 col-xs-12  mvh-100 bg-dark">
            <div className="row d-none d-lg-block d-md-none d-xl-block">
              <div className="col-12 text-center text-white mt-3">
                <h3>Admin Panel</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Galeri></Galeri>
               
 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminManager;
