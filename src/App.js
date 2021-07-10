import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Foooter from "./components/footer/Foooter";
import TopMenu from "./components/header/TopMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home";
import Hakkimizda from "./components/kurumsal/hakkimizda/Hakkimizda";
import Belgerimiz from "./components/kurumsal/belgelerimiz/Belgelerimiz";
import Referanslarimiz from "./components/kurumsal/referanslarimiz/Referanslarimiz";
import Ekibimiz from "./components/kurumsal/ekibimiz/Ekibimiz";
import IsBasvurusu from "./components/kurumsal/is-basvurusu/IsBasvurusu";
import SSS from "./components/kurumsal/s.s.s/Sss";
import EvTemizligi from "./components/hizmetler/ev-temizligi/EvTemizligi";
import OfisTemizligi from "./components/hizmetler/ofis-temizligi/OfisTemizligi";
import KoltukYikama from "./components/hizmetler/koltuk-yikama/KoltukYikama";
import Dezenfektan from "./components/hizmetler/dezenfektan/Dezenfektan";
import HaliYikama from "./components/hizmetler/hali-yikama/HaliYikama";
import HamaliyeTemini from "./components/hizmetler/hamaliye-temini/HamaliyeTemini";
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
          <div className="col-12 m-0 p-0">
            <TopMenu />
          </div>
          <div className="col-12 m-0 p-0">
            <Navbar />
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hakkimizda" component={Hakkimizda} />
            <Route path="/belgelerimiz" component={Belgerimiz} />
            <Route path="/referanslarimiz" component={Referanslarimiz} />
            <Route path="/ekibimiz" component={Ekibimiz} />
            <Route path="/is-basvurusu" component={IsBasvurusu} />
            <Route path="/sss" component={SSS} />

            <Route path="/cilt-bakim" component={EvTemizligi} />
            <Route path="/kalici-fondoten" component={OfisTemizligi} />
            <Route path="/kas-kontur" component={KoltukYikama} />
            <Route path="/dermaterapi" component={Dezenfektan} />
            <Route path="/kalici-makyaj" component={HaliYikama} />
            <Route path="/epilasyon" component={HamaliyeTemini} />

            <Route path="/calisma-prensibimiz" component={CalismaPrensibimiz} />
            <Route path="/galeri" component={Galeri} />
            <Route path="/blog" component={Blog} />
            <Route path="/iletisim" component={Iletisim} />

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
