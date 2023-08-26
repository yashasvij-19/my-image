import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import {Loader} from './Loader';
import {PhotoFrame}  from './PhotoFrame';
const App = () => {

    const [id,setId] = useState(1);
    const [url,setUrl] = useState("");
    const [title,setTitle] = useState(""); 
    const [loader,setLoader] = useState(true);
    const [showData,setshowData] = useState(false);

    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/photos/"+id)
       .then((res) => res.json())
       .then((data) => {
        setUrl(data.url);
        setTitle(data.title);
        setLoader(false);
       });
    },[id])

    return(
        <div>
            <input type="number" min="1" max="5000" onChange={(e) => {
                setId(e.target.value);
                setshowData(true);
                setLoader(true)
                }}/>
            {showData ? (loader ? <Loader /> : url && title && (loader ? <Loader /> : <PhotoFrame url={url} title={title} />)) : ""}
        </div>
    )
}


export default App;