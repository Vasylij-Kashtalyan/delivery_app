import s from "./Basket.module.css"
import { useEffect, useState } from "react";

const Basket = ({LOCALSTORAGE_KEY_TYPE}) => {
const [local,setLocal] = useState()

  useEffect(() => {
    let getProduct = localStorage.getItem(LOCALSTORAGE_KEY_TYPE);
    getProduct = JSON.parse(getProduct);

    if (getProduct) setLocal(getProduct);
  }, []);
 
  console.log("local", local)

  return (
    <div>
      <h1>it`s your products</h1>
      <ul className={s.box}>
        {local &&
          local.map(({ id, name,  }) => {
            return (
              <li className={s.box_list} key={id}>
                <h3>{name}</h3>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Basket;
