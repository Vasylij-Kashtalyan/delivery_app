import s from "./AppBar.module.css";
import { Link } from "react-router-dom";
import imgShop from "../../img/cart.svg"


function AppBar({ counterOrder }) {
  return (
    <header className={s.header}>
      <Link to="/" className={s.link}>
        <h1>Products</h1>
      </Link>

      <Link to="/basket" className={s.link}>
        <div className={s.header_basket}>
          <img src={imgShop} alt="shopping-cart" />
          {counterOrder > 0 &&
            <span>{counterOrder}</span>}
        </div>
      </Link>
    </header>
  );
}

export default AppBar;
