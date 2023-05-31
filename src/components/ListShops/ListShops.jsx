import { useState } from "react";
import { Link } from "react-router-dom";

const ListShops = ({ products }) => {
  const [idTarget, setIdTarget] = useState("");

  function onHahdler(evt) {
    const idTarget = evt.currentTarget.id;
    setIdTarget(idTarget);
  }
  const filterById = products
    .filter((pokemon) => pokemon.id === Number(idTarget))
    .map((item) => item.products);

  return (
    <>
      {products.map(({ name, id }) => {
        return (
          <Link>
            <button id={id} onClick={onHahdler}>
              <li key={id}>{name}</li>
            </button>
          </Link>
        );
      })}

      {idTarget &&
        filterById[0].map(({ id, name }) => {
          console.log("filterById", id, name);
          return <li key={id}>{name}</li>;
        })}
    </>
  );
};
export default ListShops;
