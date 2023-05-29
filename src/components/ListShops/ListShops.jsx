import { Link, useLocation } from "react-router-dom";

const ListShops = ({ products }) => {
  const location = useLocation();
  const { pathname } = useLocation();

  console.log(products);

  return products.map(({ name, id }) => {
    return (
      <Link state={{ from: location }}>
        {/* <button value={name} onClick={() => "hello"}> */}
        <li key={id}>{name}</li>
        {/* </button> */}
      </Link>
    );
  });
};
export default ListShops;
