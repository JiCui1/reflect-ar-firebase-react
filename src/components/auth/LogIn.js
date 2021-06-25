import React, {useState} from 'react' 
import {Link} from 'react-router-dom'

const Login = () =>{

    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)


    const handlecChange = (e) => {
 
        if(e.target.id == "email"){
            setEmail(e.target.value)
        } else if(e.target.id == "password"){
            setPassword(e.target.value)
        }

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({email,password})
    }

    return(
        <div className="login_container">
            <form className="login_form" onSubmit={handleSubmit}>
                <h1>Login</h1><br></br>
                <label htmlFor="email">Email</label><br></br>
                <input type='text' htmlFor="email" id="email" onChange={handlecChange}></input><br></br><br></br><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type='text' htmlFor="password" id="password" onChange={handlecChange}></input><br></br>
                <div className ="login_form_btns">
                    <button className="login_btn">Login</button>
                    <Link to='/signup'><h6>click here to sign up if you don't have an account</h6></Link>
                </div>
            </form>
        </div>
    )
}

export default Login