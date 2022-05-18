
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';

export default function Cuisine(){

    const [cuisine, setCuisine] = useState('');
    let params = useParams();

    useEffect(()=>{
        setCuisine(params.name)
    },[])
    return(
        <>
            <h1>Cuisine Searched  : {cuisine} </h1>
        </>
    );
}