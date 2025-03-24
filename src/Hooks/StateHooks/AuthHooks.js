import {  useState } from "react";


const AuthHooks=()=>{
   
   
    const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [username,setUsername]=useState("")
   const [confirmPassword,setConfirmPassword]=useState("")

   
   const getEmail=(e)=>setEmail(e.target.value)
   const getPassword=(e)=>setPassword(e.target.value)
   const getUsername=(e)=>setUsername(e.target.value)
   const getConfirmPassword=(e)=>setConfirmPassword(e.target.value)


  return {email,password,username,confirmPassword,getEmail,getPassword,getUsername,getConfirmPassword}

}
export default AuthHooks