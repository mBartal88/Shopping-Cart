import useCart from "../hooks/useCart"
import { useContext } from "react"
import { UserContext } from "../context/UserProvider";

type PropsType = {
    viewCart: boolean
}

const Footer = ({viewCart}: PropsType) => {
    const userContext = useContext(UserContext)
    const {totalItems, totalPrice} = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = viewCart
        ? <p>Shopping Cart &copy; {year}</p>
        : (
            <>
                {userContext?.user 
                ? <>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <p>Shopping Cart &copy; {year}</p>
                </> 
                : <p>Shopping Cart &copy; {year}</p>}
            </>
        )

    const content = (
        <footer className="footer">
            {pageContent}
        </footer>
    )
        
  return content
}

export default Footer