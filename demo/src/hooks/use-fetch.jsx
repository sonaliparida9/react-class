import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setdata] = useState([]);

    useEffect(()=>{
        axios.get(url).then(Response=>{
            setdata(Response.data);
        })
    },[url])
    return data;
}