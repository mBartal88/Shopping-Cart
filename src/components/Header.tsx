import Switch from "./Switch"
import useCart from "../hooks/useCart"
import { useContext } from "react"
import { UserContext } from "../context/UserProvider";
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type PropsType = {
    viewCart: boolean
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({viewCart, setViewCart}: PropsType) => {
    const { totalItems, totalPrice} = useCart()
    const userContext = useContext(UserContext)
    const { dispatch, REDUCER_ACTIONS } = useCart()

    const logoutButton = 
        <button onClick={() => {
            dispatch({ type: REDUCER_ACTIONS.SUBMIT})
            userContext?.setUser(null)}}>
            Log Out
        </button>

    const content = (
        <header className="header">

            <div className="header__title-bar">
            <h1 className="header__title">Sunland Ltd.</h1>
            
                {userContext?.user
                ? <div className="header__price-box">
                    <div className="header__user-box">
                        <p><FaUser style={{fontSize: "17px", marginRight: "8px"}}/>{userContext?.user?.email}</p>
                        </div>
                    <p >Total Items: {totalItems}</p>
                    <p >Total Price: {totalPrice}</p>
                    </div>
                : null}
                </div>

            {/* <button><Link className="nav2" to="/">Home</Link></button> */}

            {userContext?.user
            ? <>
            
                <Switch viewCart={viewCart} setViewCart={setViewCart} logoutButton={logoutButton}/>
            </>
            : <>
                <button><Link className="link" to="login">Login</Link></button>
                <button><Link className="link" to="register">Register</Link></button>
            </>
            }    
            
        </header>
    )

  return content
}

export default Header