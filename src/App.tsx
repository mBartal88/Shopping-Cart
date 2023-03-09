import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register"
import Layout from "./components/Layout";
import Home from './components/Home';
import { useState } from "react"

function App() {
    const [viewCart, setViewCart] = useState<boolean>(false)

    return (
        <Routes>
            <Route path="/" element={<Layout viewCart={viewCart} setViewCart={setViewCart} />}>
                <Route index element={<Home viewCart={viewCart} />}/>
                <Route path='login' element={<Login />}/>
                <Route path='register' element={<Register />}/>
            </Route>
        </Routes>
    )
}

export default App

// const [isLogged, setIsLogged] = useState<boolean>(true)
// const [viewRegister, setViewRegister] = useState<boolean>(false)

// const pageContent = 
// isLogged 
// ? 
// <Index 
//     setIsLogged={setIsLogged } 
// /> 
// : <Home 
//     setIsLogged={setIsLogged} 
//     viewRegister={viewRegister}
//     setViewRegister = {setViewRegister} 
// />

// return pageContent