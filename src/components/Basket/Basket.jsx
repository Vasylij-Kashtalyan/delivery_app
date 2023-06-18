import s from "./Basket.module.css"
import { useEffect, useState } from "react";

const Basket = ({ LOCALSTORAGE_KEY_TYPE }) => {
  const [local, setLocal] = useState([])

  useEffect(() => {
    let getProduct = localStorage.getItem(LOCALSTORAGE_KEY_TYPE);
    getProduct = JSON.parse(getProduct);

    if (getProduct) setLocal(getProduct);
  }, []);

  console.log("local", local)

  return (
    <div>
      {local.length === 0
        ?
        <div>

          <h1>Кошик порожній</h1>
          <p>Але це можливо виправити :)</p>
        </div>

        : <ul className={s.box}>
          {local &&
            local.map(item => {
              return (
                <li className={s.box_list} key={item.id}>
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
                </li>
              );
            })}
        </ul>}





























    </div>
  );
};

export default Basket;
