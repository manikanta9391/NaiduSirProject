import AuthHooks from "../../Hooks/StateHooks/AuthHooks"
const SignUp=()=>{

    const {email,password,username,confirmPassword,getEmail,getPassword,getUsername,getConfirmPassword}=AuthHooks()


   const SubmitButton=(e)=>{
    e.preventDefault()
    console.log(email,password,confirmPassword,username)
   }

    return (
        <div>
            <div>
                <form onSubmit={SubmitButton}>
                    <div>
                        <input type="email"  placeholder="Enter email"  value={email} onChange={(e)=>getEmail(e)} />
                    </div>
                    <div>
                        <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>getUsername(e)} />
                    </div>
                    <div>
                        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>getPassword(e)}  />
                    </div>
                    <div>
                        <input type="password" placeholder="Enter Confirm Password"  value={confirmPassword} onChange={(e)=>getConfirmPassword(e)}  />
                    </div>
                    <div>
                        <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
    
    }
    export default SignUp 