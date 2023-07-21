import './App.css';
import {useState, useEffect} from "react";
import {storage} from "./firebase";
import {list, listAll, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";

function App() {

  const [imageUpload, setImageUpload] =  useState(null);
  const [imagesList, setImagesList] = useState([]); 

  const imagesListRef = ref(storage, "images/");

  const uploadImage = () => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) =>{
      getDownloadURL(snapshot.ref).then((url) => {
        setImagesList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() =>{
    listAll(imagesListRef).then((response) =>{
      response.items.forEach((item) =>{
        getDownloadURL(item).then((url) =>{
          setImagesList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
      <button onClick={uploadImage}>uploadImage</button>
      {imagesList.map((url) =>{
        return <img src={url} />;
      })}
    </div>
  );
}

export default App;
