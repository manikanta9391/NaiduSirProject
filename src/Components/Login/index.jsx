import AuthHooks from "../../Hooks/StateHooks/AuthHooks"
const Login=()=>{
  
    const {email,password,getEmail,getPassword}=AuthHooks()

    const SubmitForm=(e)=>{
        e.preventDefault()
        console.log(email,password)
    }

    return (
        <div>
            <div>
                <form onSubmit={SubmitForm}>
                   <div>
                     <input type="email" placeholder="Enter email"   value={email} onChange={(e)=>getEmail(e)} />
                   </div>
                <div>
                <input type="password" placeholder="Enter password"   value={password} onChange={(e)=>getPassword(e)}  />
                </div>
                <div>
                <button type="submit">Login</button>
                </div>
                </form>
            </div>
        </div>
    )
    
    }
    export default Login 