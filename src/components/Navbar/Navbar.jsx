import CartWidget from "../CartWidget/CartWidget";
import Itemlistcontainer from "../ItemListContainer/ItemListContainer";
import "./styles.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div>Logo</div>
            <div>Item list container</div>
            <Itemlistcontainer/>
            <CartWidget/>
        </div>
    );
};

export default Navbar;