import { Link } from "react-router-dom"
const NavBar = ({cartItemCount }) => {
    return (
        <>
            <div className="wrapper">
                <header className="container">
                    <div className="header" style={{paddingTop:"0.5rem",paddingBottom:"0.5rem"}}>
                        <div className="grid">
                            <Link to="/" className="link">
                            <i class="fa fa-home" style={{fontSize:"45px",color:"white"}}></i>
                            </Link>
                            <Link to="/cart" className="link headerCart">
                                <img className="cartImg" src="/cart.svg" alt="cart" />
                                {cartItemCount > 0 && (
                                    <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                                )}
                            </Link>
                            <Link to="/favorite" className="link headerCart"><i class="fa fa-heart" style={{fontSize:"30px",color:"white"}}> </i>
                            </Link>
                            <Link to="/login" className="link headerCart"><i class="fa fa-sign-in" style={{fontSize:"30px",color:"white"}}></i>
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
            
        </>
    )
}

export { NavBar }