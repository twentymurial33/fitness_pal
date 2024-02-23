'use client'
import { StyledButton, StyledForm, StyledInput,StyledLabel} from "./style";
import { FormEvent } from "react";

export default function Form(){
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
            <StyledLabel><b>Email</b></StyledLabel>
             <StyledInput name="email" type="email"/> 
             <br></br>
              <StyledLabel><b>Password</b></StyledLabel>
            <StyledInput name="password" type="password"/>
            <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
  )
}