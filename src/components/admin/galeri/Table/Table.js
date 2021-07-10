import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSnackbar } from 'notistack';
import {db} from "../../../../firebase";
import firebase from "firebase";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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

function Table({foto,index,getGaleri}) {

  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = useState(foto.url);
  const [name, setName] = useState(foto.name);

  const classes = useStyles();

  

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const guncelle = (e) => {
    e.preventDefault();

    db.collection("galeri").doc(foto.id).set(
        {
          url:url,
          name: name,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      ).then((data)=>{
        getGaleri()
       
      }).catch((err) => {
      
      });


    setOpen(false);
  };
  return (
    <tbody>
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
            <h3 style={{ marginLeft: "5%" }}>Galeri Sayfasini Guncelle</h3>
          </Toolbar>
        </AppBar>
        <div className="col-12 blog-pop bg-dark">
          <div className="container mx-auto mt-5">
            <form>
              <div className="form-group text-white">
              <label style={{fontSize:'x-large'}} for="exampleFormControlInput1">Foto Url</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Foto Url"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </div>
              <div className="form-group text-white">
                <label style={{fontSize:'x-large'}} for="exampleFormControlInput1">Foto isim Ekle</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Sayfa Basligi"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              
              <button
                className="btn btn-lg btn-success"
                type="submit"
                onClick={guncelle}
              >
                Guncelle
              </button>
            </form>
          </div>
        </div>
      </Dialog>
      <tr>
                <th scope="row">{index+1}</th>
        <td>{foto.name}</td>
        <td>{foto.url}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(event) =>
              {
                db.collection("galeri").doc(foto.id).delete()
                .then((data) => {
                  getGaleri()
                  
                })
                .catch((err) => {
                
                })
              }
            }
          >
            X
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={handleClickOpen}>
            Guncelle
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Table;
