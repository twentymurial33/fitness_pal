'use client'
import { StyledButton, StyledForm, StyledInput,StyledLabel} from "../register/style";
import {signIn} from "next-auth/react"
import { FormEvent } from "react";

export default function Form(){
  const handleSubmit= (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
   signIn('credentials',{
    email:formData.get('email'),
    password:formData.get('password'),
    redirect:false,
   })
}
  return(
       <StyledForm onSubmit={handleSubmit}>
            <StyledLabel><b>Email</b></StyledLabel>
             <StyledInput name="email" type="email"/> 
             <br></br>
              <StyledLabel><b>Password</b></StyledLabel>
            <StyledInput name="password" type="password"/>
            <StyledButton type="submit">LogIn</StyledButton>
        </StyledForm>
  )
}