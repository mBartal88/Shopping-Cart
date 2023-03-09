import { Link } from 'react-router-dom';

type PropsType = {
    viewCart: boolean
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
    logoutButton: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const Switch = ({viewCart, setViewCart, logoutButton}: PropsType) => {

    const button = viewCart
        ? <button className='asd' onClick={() => setViewCart(false)}>View Products</button>
        : <button className='asd' onClick={() => setViewCart(true)}>View Cart</button>

    const content = (
        <>
        {/* <nav className="nav2">
            <>
            <button><Link className="nav2" to="/">Home</Link></button>
            </>
        </nav> */}
        {logoutButton}
        <nav className="nav">
            <>
                
                {button}
            </>
        </nav>
        </>
    )

  return content
}

export default Switch