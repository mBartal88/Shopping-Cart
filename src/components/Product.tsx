import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, useContext } from "react"
import Description from "./Description"
import { UserContext } from "../context/UserProvider";

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
    const userContext = useContext(UserContext)

    const img: string = new URL(`../images/${product.id}.png`, 
    import.meta.url).href

    const onAddToCart = () => dispatch({type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 }})

    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

    let descriptionList: string [] = []
    if(typeof product.description === 'string'){
        descriptionList = product.description.split('|')
    }  

    const content = 
        <article className="product">
            <h3 style={{paddingBottom: '20px'}}>{product.name}</h3>
            <img src={img} alt={product.name} 
            className="product__img" />
            <Description descriptionList={descriptionList} />
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR'}).format(product.price)}
            {itemInCart}</p>
            {userContext?.user ? <button onClick={onAddToCart}>Add to Cart</button> : null}
        </article>

    return content

}

export default Product