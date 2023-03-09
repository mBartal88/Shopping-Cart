import useCart from "../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"
import sendConfirmationEmail from "./SendEmail";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

  const createCartContentString = () => {
    let messageString = "SUMMARY\n-------------------------------------------------------------------------------\n"
    
    cart.map(item => {
        messageString += `${item.name} | ${item.price} €/pc | x${item.qty}  | Subtotal: ${(item.qty * item.price)}€ \n\n`
    })
    messageString += `-------------------------------------------------------------------------------\nTotal Price: ${totalPrice}`

    return messageString
}

  const onSubmitOrder = () => {
    const cartContent = createCartContentString()
    dispatch({ type: REDUCER_ACTIONS.SUBMIT})
    setConfirm(true)
    sendConfirmationEmail(cartContent)
  }

  const pageContent = confirm
    ? <h2>Thank your for your order! A confirmation email was sent to your address!</h2>
    : <>
        <h2 className="offscreen"></h2>
        <ul className="cart">
            {cart.map(item => {
                return (
                    <CartLineItem
                        key={item.id}
                        item={item}
                        dispatch={dispatch}
                        REDUCER_ACTIONS={REDUCER_ACTIONS}
                    />
                )
            })}          
        </ul>
        <div className="cart__totals">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
            <button 
                className="cart__submit" 
                disabled={!totalItems} 
                onClick={onSubmitOrder}>
                Place Order
            </button>
        </div>  
    </>

    const content = (
        <main className="main main--cart">
            {pageContent}
        </main>
    )

  return content

}

export default Cart