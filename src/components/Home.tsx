import Cart from "./Cart"
import ProductList from "./ProductList"

type PropsType = {
    viewCart: boolean
}

const Home = ({viewCart}: PropsType) => {
    
    const pageContent = viewCart ? <Cart /> : <ProductList />

    return pageContent
}

export default Home