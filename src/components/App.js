import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import {Loader} from './Loader';
import {PhotoFrame}  from './PhotoFrame';
const App = () => {

    const [id,setId] = useState(0);
    const [url,setUrl] = useState("");
    const [title,setTitle] = useState(""); 
    const [loader,setLoader] = useState(false);
    const [showData,setshowData] = useState(false);

    useEffect(()=>{
        setLoader(false);
       fetch("https://jsonplaceholder.typicode.com/photos/"+id)
       .then((res) => res.json())
       .then((data) => {
        setUrl(data.url);
        setTitle(data.title);
        setLoader(true);
       });
    },[id])

    return(
        <div>
            <input type="number" min="1" max="5000" onChange={(e) => {
                setId(e.target.value);
                setshowData(true);
                }}/>
            {showData ? (loader ? <PhotoFrame url={url} title={title}/> : <Loader />) : ""}
        </div>
    )
}


export default App;