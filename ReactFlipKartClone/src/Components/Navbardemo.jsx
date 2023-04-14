import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
    <nav>
        <div id="logo">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
            <Link to="/">Explore plus </Link>
        </div>

        <div id="searchbar">
            <input type="search" placeholder="Search for products, brands and more"/>
            <button> <i className='bx bx-search'></i> </button>
        </div>

        <div id="navlinks">
            <Link to="/user">Home</Link>
            <Link to="/admin">Become a seller</Link>
            <Link to="/cart"><i className='bx bxs-cart-alt'></i> cart </Link>
        </div>

        <Link to="/"><button id="logout">Log out</button></Link>

    </nav>
     );
}
 
export default Navbar;