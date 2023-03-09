import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext, UserObjectType } from "../context/UserProvider";

const API_URL = "http://localhost:3500/users"

const Login = () => {
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const userContext = useContext(UserContext)
    const redirect = useNavigate();

    const tryToLogin = async () => {
        setErrorMsg(null)

        const response = await fetch(API_URL);
        const listItems: UserObjectType[]  = await response.json();
        const userFound: UserObjectType | undefined = listItems.find(item => item.email === email)
        
        if (!userFound) 
            {setErrorMsg("Incorrect email"); return} 
        else if (userFound?.pw !== password) 
            {setErrorMsg("Incorrect password"); return}
        else {
            userContext?.setUser(userFound)
            redirect('/');
        }

    }

  return (
    <div className="Home">
        <div className="form__login">
            <h1>Sign In</h1><br />
            {errorMsg ? <span>{errorMsg}</span> : null} 
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                tryToLogin()
            }}>

                <label htmlFor="Email">Email</label><br />
                <input 
                    type="email" 
                    id="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <label htmlFor="Password">Password</label><br />
                <input 
                    type="password" 
                    id="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />

                <button type="submit">Login</button><br /><br />

            </form>
            
        </div>
    </div>
  )
}

export default Login