const Shops = ({ products }) => {
  return products.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });
};

export default Shops;
