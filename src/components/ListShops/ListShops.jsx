import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./ListShops.module.css";

const ListShops = ({ products, LOCALSTORAGE_KEY_TYPE }) => {
    const [orders, setOrders] = useState([]);
    const [idTarget, setIdTarget] = useState("");

    console.log("orders", orders);

    function onHahdler(evt) {
        const idTarget = evt.currentTarget.id;
        setIdTarget(idTarget);
    }

    const filterById = products
        .filter((pokemon) => pokemon.id === Number(idTarget))
        .map((item) => item.products)
        .flat();

    const [items, setItems] = useState(filterById);
    console.log("items", items);
    console.log("filterById", filterById);

    function addBacket(item) {
        setOrders([...orders, item]);
    }

    localStorage.setItem(LOCALSTORAGE_KEY_TYPE, JSON.stringify(orders));

    return (
        <div>
            <ul className={s.box}>
                {products.map(({ name, id }) => {
                    return (
                        <li className={s.box_list} >
                            <h2>{name}</h2>

                            <button
                                id={id}
                                className={s.box_btn}
                                onClick={onHahdler}
                            >
                                View Products
                            </button>
                        </li>
                    );
                })}
            </ul>

            <ul className={s.box}>
                {idTarget &&
                    filterById.map((item) => {
                        return (
                            <li className={`${s.box_list} ${s.box_list__util}`} key={item.id}>
                                <h3>{item.name}</h3>
                                <img
                                    className={s.box.img}
                                    src={item.imageUrl}
                                    alt={item.name}
                                    loading="lazy"
                                />
                                <div>
                                    <p className={s.box_description}>
                                        {item.description}
                                    </p>

                                    <p className={s.box_price}>{item.price}</p>
                                </div>

                                <button
                                    className={s.box_btn}
                                    onClick={() => addBacket(item)}
                                >
                                    Add to Basket
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
export default ListShops;
