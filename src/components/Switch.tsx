type PropsType = {
    viewCart: boolean
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
    logoutButton: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const Switch = ({viewCart, setViewCart, logoutButton}: PropsType) => {

    const button = viewCart
        ? <button onClick={() => setViewCart(false)}>View Products</button>
        : <button onClick={() => setViewCart(true)}>View Cart</button>

    const content = (
        <>
        {logoutButton}
        <nav className="nav">{button}</nav>
        </>
    )

  return content
}

export default Switch