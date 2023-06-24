import { Link } from "react-router-dom"

const Item = ({ data, addToFav}) => {
    const { id, thumbnail, title, price, discountPercentage } = data
    return (
        <div className="card">
            <div className="grid">
                <div className="image">
                    <img src={thumbnail} alt="" />
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="discount-title">
                    <p >Up to {discountPercentage}% off</p>
                </div>
                <div className="btn-card">
                    <div>
                        <Link to={`/product/${id}`} className="link titleLink">
                            <button className="btn btn-info">View</button>
                        </Link>
                    </div>
                    <div>
                        <button className="btn btn-info" onClick={addToFav}><i class="fa fa-heart" style={{fontSize:"13px",color:"white"}}></i> Favorite</button>
                    </div>
                </div>
                <div className="flex">
                    <span className="price" style={{ marginRight: 15 }}>
                        Price {price}
                    </span>
                </div>
            </div>
        </div>
    )
}

export { Item }