import { createContext, ReactElement, useState, useEffect } from "react"

export type ProductType = {
    id: string,
    name: string,
    price: number,
    description: string
}

const initState: ProductType[] = []

// const initState: ProductType[] = [
// {
//     "id": "item0001",
//     "name": "Xiaomi Redmi Note 11",
//     "price": 80,
//     "description": "Android 11 - MIUI 13 | Qualcomm Snapdragon 680 Processor | 6.43” FHD+ AMOLED Display | 50MP Quad Camera | 13MP Selfie Camera | 64/128GB Internal Storage | 4GB RAM"
// },
// {
//     "id": "item0002",
//     "name": "Xiaomi Redmi Note 11 Pro",
//     "price": 120,
//     "description": "Android 11 - MIUI 13 | 108MP Triple Camera System | 6.67” Super AMOLED Display | 120Hz Refresh | Qualcomm Snapdragon 695 5G | 128GB Internal Storage | 6GB RAM"
// },
// {
//     "id": "item0003",
//     "name": "Xiaomi 12",
//     "price": 320,
//     "description": "Android 12 - MIUI 13 | 50MP Triple Camera System |6.28” | AMOLED Dot Display - 120Hz Refresh | Qualcomm Snapdragon 8 Gen 1 | 256GB Internal Storage | 8GB RAM"
// }
// ]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: []}

const ProductContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3501/products')
            .then(res => {
                return res.json()
            }).catch(err => {
                if (err instanceof Error) console.log(err.message)
            })
            return data
        }

        fetchProducts().then(products => setProducts(products))
    }, [])

    return (
        <ProductContext.Provider value={{ products}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext