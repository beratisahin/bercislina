import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Foooter from "./components/footer/Foooter";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home.js";
import Hakkimizda from "./components/hakkimizda/Hakkimizda.js";
import CalismaPrensibimiz from "./components/calisma-prensibimiz/CalismaPrensibimiz";
import Galeri from "./components/galeri/Galeri";
import Blog from "./components/blog/Blog";
import Iletisim from "./components/iletisim/ContactForm";
import Admin from "./components/admin/Admin";




function App() {
  return (
    <Router>
      <div className="App">
        
       
          
          <div className="col-12 m-0 p-0">
            <Navbar />
          

          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/hakkimizda" component={Hakkimizda} />
            <Route exact path="/calisma-prensibimiz" component={CalismaPrensibimiz} />
            <Route exact path="/galeri" component={Galeri} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/iletisim" component={Iletisim} />

            <Route exact path="/admin" component={Admin} />
           
          </Switch>
          
         
          <hr className="footerHr"/>
          <div className="col-12">
            <Foooter />
          </div>
          
          </div> 
        </div>
      
    </Router>
  );
}

export default App;
