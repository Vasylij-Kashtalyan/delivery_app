import s from "./Basket.module.css"

const Basket = ({ orders, onDelete, setOrders }) => {

  const onIncrement = (id) => {
    setOrders(orders => {
      return orders.map(product => {
        if (product.id === id) {
          return {
            ...product,
            counter: product.counter + 1,
          }
        }
        return product;
      })
    })
  }

  const onDecrement = (id) => {
    setOrders(orders => {
      return orders.map(product => {
        if (product.id === id) {

          if (product.counter < 1) onDelete(product.id);

          return {
            ...product,
            counter: product.counter - 1,
          }
        }

        return product;
      })
    })
  }


  return (
    <div className={s.container}>

      {orders.length === 0
        ?
        <div className={s.container_title}>
          <h1>Кошик порожній</h1>
          <p>Але це можливо виправити :)</p>
        </div>

        : <div>

          <ul className={s.list}>
            {orders &&
              orders.map(order => {
                return (
                  <li className={s.list_item} key={order.id}>

                    <div className={s.item_box}>

                      <img
                        className={s.box_img}
                        src={order.imageUrl}
                        alt={order.name}
                        loading="lazy"
                      />


                      <p className={s.box_description}>
                        {order.description}
                      </p>


                      <div className={s.item_box_btn}>
                        <button type="button" onClick={() =>
                          onDelete(order.id)}>Delete</button>
                      </div>
                    </div>

                    <div className={s.item_price}>

                      <div>
                        <button onClick={() => onDecrement(order.id)} type="button">-</button>

                        <span className={s.item_counter}>{order.counter}</span>

                        <button onClick={() => onIncrement(order.id)} type="button">+</button>
                      </div>

                      <p className={s.price}>{(order.price * order.counter).toFixed(2)}</p>

                    </div>

                  </li>
                );
              })}
          </ul>

        </div>}


    </div>
  );
};

export default Basket;
