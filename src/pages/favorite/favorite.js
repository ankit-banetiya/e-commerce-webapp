import { Link } from "react-router-dom"
import { useCart } from "../../context/cart"
import React from 'react'


export default function Favorite(){
    const { fav, removeFromFav} = useCart()
    return (
        <div className="cartWrapper">
            <div className="container">
                {fav.length >= 1 ? (
                    <div className="grid my-5">
                        <div className="cartItem p-3">
                            <h2>Order Summary</h2>
                            {fav.map((item) => (
                                <div className="item" key={item.product.id}>
                                    <div className="grid py-3">
                                        <div className="itemImage">
                                            <img src={item.product.thumbnail} alt="" />
                                        </div>
                                        <div className="itemDesc">
                                            <div className="title">
                                                <Link to={"/product/" + item.product.id} className="titleLink">
                                                    {item.product.title}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="itemControl flex">
                                                <div
                                                    className="remove my-1"
                                                    onClick={() => removeFromFav(item.product.id)}
                                                >
                                                    Remove
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="error">
                        <p>&#9432; Favorite is empty</p>
                    </div>
                )}
            </div>
        </div>
    )
}


