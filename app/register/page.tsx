'use client'

import { FormEvent } from "react";
import { StyledForm } from "./style";
export default async function RegisterPage(){
const handleSubmit= (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const response =  fetch(`api/auth/register`,{
    method:"POST",
    body:JSON.stringify({
        email:formData.get('email'),
        password:formData.get('password')
    })  
    }
    )
    console.log({response})
}
    return(
        <StyledForm onSubmit={handleSubmit}>
            <input type="email"/>
            <input type="password"/>
            <button type="submit">Register</button>
        </StyledForm>
    )
}