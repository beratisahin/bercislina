import React from 'react'
import "./Blog.css";

import tfoto from "../medya/bg7.jpg";

import useDocumentTitle from '../../useDocumentTitle';


        

export default function Blog() {
    useDocumentTitle('Blog - Bercislina Epilasyon ve Güzellik Merkezi');
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"#C92798"}}><b>Blog</b></h3>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12" >
                <img src={tfoto} className="d-block img-responsive w-100 galpho" title="temizlik" alt="temizlik" ></img>
                <h4 className="blogTitle">Doğru Tercihler Hayat Kurtarır</h4>
                <p className="blogContent">Sağlıklı tercihler yapmak ve beslenme alışkanlıklarını iyileştirmek her zaman kolay değildir. Bu, zaman ve motivasyon gerektiren bir süreçtir. Tam da bu noktada, Herbalife Nutrition koçunuz gerçek anlamda fark yaratmanıza yardımcı olacak. Koçunuz kişiye özel rehberlik, tavsiye ve destek sunarak, hedeflerinizi gerçeğe dönüştürebilmeniz için sizinle omuz omuza çalışacak.</p>
            </div> 

            <div className="col-lg-3 col-md-6 col-sm-12 col-12" >
                <img src={tfoto} className="d-block img-responsive w-100 galpho" title="temizlik" alt="temizlik" ></img>
                <h4 className="blogTitle">Doğru Tercihler Hayat Kurtarır</h4>
                <p className="blogContent">Sağlıklı tercihler yapmak ve beslenme alışkanlıklarını iyileştirmek her zaman kolay değildir. Bu, zaman ve motivasyon gerektiren bir süreçtir. Tam da bu noktada, Herbalife Nutrition koçunuz gerçek anlamda fark yaratmanıza yardımcı olacak. Koçunuz kişiye özel rehberlik, tavsiye ve destek sunarak, hedeflerinizi gerçeğe dönüştürebilmeniz için sizinle omuz omuza çalışacak.</p>
            </div> 

            <div className="col-lg-3 col-md-6 col-sm-12 col-12" >
                <img src={tfoto} className="d-block img-responsive w-100 galpho" title="temizlik" alt="temizlik" ></img>
                <h4 className="blogTitle">Doğru Tercihler Hayat Kurtarır</h4>
                <p className="blogContent">Sağlıklı tercihler yapmak ve beslenme alışkanlıklarını iyileştirmek her zaman kolay değildir. Bu, zaman ve motivasyon gerektiren bir süreçtir. Tam da bu noktada, Herbalife Nutrition koçunuz gerçek anlamda fark yaratmanıza yardımcı olacak. Koçunuz kişiye özel rehberlik, tavsiye ve destek sunarak, hedeflerinizi gerçeğe dönüştürebilmeniz için sizinle omuz omuza çalışacak.</p>
            </div> 

            <div className="col-lg-3 col-md-6 col-sm-12 col-12" >
                <img src={tfoto} className="d-block img-responsive w-100 galpho" title="temizlik" alt="temizlik" ></img>
                <h4 className="blogTitle">Doğru Tercihler Hayat Kurtarır</h4>
                <p className="blogContent">Sağlıklı tercihler yapmak ve beslenme alışkanlıklarını iyileştirmek her zaman kolay değildir. Bu, zaman ve motivasyon gerektiren bir süreçtir. Tam da bu noktada, Herbalife Nutrition koçunuz gerçek anlamda fark yaratmanıza yardımcı olacak. Koçunuz kişiye özel rehberlik, tavsiye ve destek sunarak, hedeflerinizi gerçeğe dönüştürebilmeniz için sizinle omuz omuza çalışacak.</p>
            </div> 

        </div>
        </div>
    )
}
