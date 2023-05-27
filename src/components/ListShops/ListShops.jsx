import { Link, useLocation } from "react-router-dom";

const ListShops = ({ products }) => {
  const location = useLocation();
  const { pathname } = useLocation();
  console.log(pathname);
  return products.map(({ name, id }) => {
    return (
      <Link state={{ from: location }} to={products.name}>
        <li key={id}>{name}</li>
      </Link>
    );
  });
};
export default ListShops;
