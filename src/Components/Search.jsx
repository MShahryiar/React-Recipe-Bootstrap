import { useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';

export default function Search(){
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Form Submitted')
        navigate('/searched/'+search)

    }

    return(
        <>
        <StyledForm className="my-4" onSubmit={handleSubmit}>
            <div>
            <input className="bg-dark w-50 text-white"
                value={search}
                placeholder="Search Recipes"
                onChange={(e)=>setSearch(e.target.value)}
            />
            <BsSearch />
            </div>
        </StyledForm>
        </>
    )
}


const StyledForm = styled.form`
    
    div{
        width:100%;
        position : relative;
        display:flex;
        align-item:center;
        justify-content:center;
    }

    input{
        border:none; 
        font-size:1em;
        padding:1em 3em;
        outline:none;
        border-radius:1em;
        width:100%;
    }
    svg{
        position:absolute;
        top:50%;
        left:25%;
        color:white;
        transform:translate(100%,-50%);
    }

`