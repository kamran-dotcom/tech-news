import React, { useEffect } from 'react'
import { useGlobalHook } from '../context';

const Stories = () => {

    let data = useGlobalHook();
    let API = "https://hn.algolia.com/api/v1/search?query=html";

    const fetchApiData = async(apiUrl)=>{
        try {
            const res = await fetch(apiUrl);
    
            const data = await res.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchApiData(API);
    },[])
  return (
    <div>Stories</div>
  )
}

export default Stories