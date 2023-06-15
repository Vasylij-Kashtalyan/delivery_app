import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./ListShops.module.css";



const ListShops = ({ products , LOCALSTORAGE_KEY_TYPE }) => {
  const [idTarget, setIdTarget] = useState("");

  function onHahdler(evt) {
    const idTarget = evt.currentTarget.id;
    setIdTarget(idTarget);
  }

  

  const filterById = products
    .filter((pokemon) => pokemon.id === Number(idTarget))
    .map((item) => item.products);


    function addBacket(evt){
      let params = []

      const id = evt.currentTarget.id
      const name = evt.currentTarget.name
      


      
      const newArrey = {
        id: id,
        name: name,
      }
      
      params.push(newArrey)

      console.log( name)
      console.log("params",params)


      localStorage.setItem(LOCALSTORAGE_KEY_TYPE, JSON.stringify(params));
    }

  return (
    <div>
      <ul className={s.box}>
        {products.map(({ name, id }) => {
          return (
            <li className={s.box_list}>
              <h2>{name}</h2>

              <button id={id} className={s.box_btn} onClick={onHahdler}>
                View Products
              </button>
            </li>
          );
        })}
      </ul>

      <ul className={s.box}>
        {idTarget &&
          filterById[0].map(({ id, name, description, imageUrl, price }) => {
            return (
              <li className={s.box_list} key={id}>
                <h3>{name}</h3>
                <img
                  className={s.box.img}
                  src={imageUrl}
                  alt={name}
                  loading="lazy"
                />
                <div>
                  <p className={s.box_description}>{description}</p>

                  <p className={s.box_price}>{price}</p>
                </div>

                <button id={id} name={name}  className={s.box_btn} onClick={addBacket}>Add to Basket</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default ListShops;
