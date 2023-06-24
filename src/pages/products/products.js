import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { Item } from "../../components/item"
import { useCart } from "../../context/cart"
import Home from "../home/Home"

const Products = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { addToCart, addToFav} = useCart()
   
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products =  await FakeStoreApi.fetchAllProducts();
            setProducts(products.products);
            setLoading(false)
        }
        fetchProducts().catch(console.error)
    }, [])

    return (
        <>
           <Home/>
            <div className="container">
                <div className="products my-5">
                    <div className="grid">
                        {loading ? (
                            <div className="loader" />
                        ) : (
                            products.map((product) => (
                                <Item key={product.id} data={product} addToCart={() => addToCart(product)} addToFav={() => addToFav(product)}/>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export { Products }
