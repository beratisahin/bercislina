
import "./Galeri.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Table from "./Table/Table";
import { Slide } from "@material-ui/core";
import {db} from "../../../firebase";
import firebase from "firebase";
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
      backgroundColor:'#27a844'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Galeri() {
    const classes = useStyles();
  
    const [open, setOpen] = React.useState(false);
  
    const [galeri, setGaleri] = useState([]);
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
  
  
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
            url:doc.data().url,
            name: doc.data().name,
            
          }))
        );
      });
    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const kaydet = (e) => {
      e.preventDefault();
      db.collection("galeri").add({
        url:url,
        name:name,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      }).then((data)=>{
        getGaleri()
        
      }).catch((err) => {
      
      });;
  
      setName("");
           setUrl("")
      setOpen(false);
    };
  return (
    <div className="container" id="admin_galeri">
      
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <h3 style={{ marginLeft: "5%" }}>Foto Ekle</h3>
            </Toolbar>
          </AppBar>

          <div className="col-12 bg-dark blog-pop">
            <div className="container mx-auto mt-5">
              <form>
                <div className="form-group text-white">
                  <label style={{fontSize:'x-large'}} htmlfor="exampleFormControlInput1">Foto Url</label>
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    id="exampleFormControlInput1"
                    placeholder="Url"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                  />
                </div>
                <div className="form-group text-white">
                  <label  style={{fontSize:'x-large'}} htmlfor="exampleFormControlInput1">Baslik Ekle</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="Sayfa Adi"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
           
                <button
                  className="btn btn-lg btn-success"
                  type="submit"
                  onClick={kaydet}
                >
                  Kaydet
                </button>
              </form>
            </div>
          </div>
        </Dialog>


        <h3 className="text-success text-center">
          Galeri Sayfasi Guncelleme
        </h3>
     
          <button className="btn btn-success" onClick={handleClickOpen}>
            Galeri Sayfasi Ekle
          </button>
          
          <h2 className="text-success mt-4">Fotolar</h2>
          <table className="table text-white mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Foto Adi</th>
                <th scope="col">Photo Url</th>
                <th scope="col">Sil</th>
                <th scope="col">Guncelle</th>
              </tr>
            </thead>
            {galeri.map((foto, index) => (
            <Table key={foto.id} foto={foto} index={index} getGaleri={getGaleri} />
          ))}
          </table>
        
    </div>
  );
}

export default Galeri;
