import s from "./AppBar.module.css";
import { Link } from "react-router-dom";

function AppBar() {
  return (
    <header className={s.header}>
      <Link to="/" className={s.link}>
        <h1>Products</h1>
      </Link>

      <Link to="/basket" className={s.link}>
        <h1>Basket</h1>
      </Link>
    </header>
  );
}

export default AppBar;
