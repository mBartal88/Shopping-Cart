import apiRequest from "./apiRequest";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3500/users'

type UserType = {
    id: string
    email: string
    pw: string
}

const Register = () => {
    const [newEmail, setNewEmail] = useState<string | null>(null)
    const [newPassword, setNewPassword] = useState<string | null>(null)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const redirect = useNavigate();

    const getUsers = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) setErrorMsg("Server is down!")
            const data: UserType[] = await response.json()
            return data
        } catch (error) {
            if (error instanceof Error) console.log(error.message)
        }
        return []
    }

    const addNewUser = async () => {
        setErrorMsg(null)

        const listItems = await getUsers()

        const user: UserType | undefined = listItems.find(item => item.email === newEmail)

        if (user) {
            setErrorMsg("Email already exists")
            return
        }

        const id: number = listItems.length ? parseInt(listItems[listItems.length - 1].id) + 1 : 1

        const newUser = { 
            id: id.toString().padStart(4, '0'),
            email: newEmail,
            pw: newPassword
        };

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        const result = await apiRequest(API_URL, postOptions);

        if (result) {
            setErrorMsg(result)
        } else {
            redirect('/login');
        }
        
    }

    return (
        <div className="Home">
            <div className="form__login">
                <h1>Sign Up</h1><br />
                {errorMsg ? <span>{errorMsg}</span> : null} 
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    addNewUser()
                }}>

                    <label htmlFor="newEmail">New Email</label><br />
                    <input 
                        type="text" 
                        id="newEmail" 
                        onChange={(e) => setNewEmail(e.target.value)}
                    /><br />

                    <label htmlFor="newPassword">New Password</label><br />
                    <input 
                        type="text" 
                        id="newPassword"
                        onChange={(e) => setNewPassword(e.target.value)}
                    /><br /><br />

                    <button type="submit">Register</button><br /><br />
                    
                </form>
                
            </div>
        </div>
    )
}

export default Register