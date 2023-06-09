import { useState } from "react";
import s from "./Basket.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Basket = ({ orders, onDelete, setOrders }) => {
  const [allTotal, setAllTotal] = useState(0)

  useEffect(() => {
    setAllTotal({
      price: orders.reduce((prev, curr) => prev + curr.totalPrice, 0)
    })
  }, [orders])


  const onIncrement = (id) => {
    setOrders(orders => {
      return orders.map(product => {
        if (product.id === id) {

          return {
            ...product,
            counter: product.counter + 1,
            totalPrice: (product.counter + 1) * product.price,
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

          return {
            ...product,
            counter: product.counter - 1 > 1 ? product.counter - 1 : 1,
            totalPrice: (product.counter - 1 > 1 ? product.counter - 1 : 1) * product.price,
          }
        }

        return product;
      })
    })
  }

  const { price } = allTotal

  return (
    <div className={s.container}>

      {orders.length === 0
        ?
        <div className={s.container_title}>
          <h1>The basket is empty</h1>
          <p>But it can be fixed :)</p>
        </div>

        : <div className={s.container_box}>

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
                        <button className={s.btn_delete} type="button" onClick={() => onDelete(order.id)}>
                          <svg className={s.iconDelete} viewBox="0 0 32 32">
                            <path d="M21 28c0.553 0 1-0.447 1-1v-14c0-0.553-0.447-1-1-1s-1 0.447-1 1v14c0 0.553 0.447 1 1 
                            1zM11 28c0.552 0 1-0.447 1-1v-14c0-0.553-0.448-1-1-1s-1 0.447-1 1v14c0 0.553 0.448 1 1 1zM29 
                            6h-4v-2c0-2.209-1.791-4-4-4h-10c-2.209 0-4 1.791-4 4v2h-4l-3 3c0 0.553 0.448 1 1 1h3v20c0 1.104 
                            0.896 2 2 2h20c1.104 0 2-0.896 2-2v-20h3c0.553 0 1-0.447 1-1l-3-3zM10 4c0-1.104 0.896-2 2-2h8c1.
                            104 0 2 0.896 2 2v2h-12v-2zM26 29c0 0.553-0.447 1-1 1h-18c-0.552 0-1-0.447-1-1v-19h20v19zM16 
                            28c0.553 0 1-0.447 1-1v-14c0-0.553-0.447-1-1-1s-1 0.447-1 1v14c0 0.553 0.447 1 1 1z"></path>
                          </svg>
                        </button>
                      </div>

                    </div>

                    <div className={s.item_price}>

                      <div className={s.item_box_counter}>
                        <button className={s.btn_delete} onClick={() => onDecrement(order.id)} type="button">-</button>

                        <span className={s.item_counter}>{order.counter}</span>

                        <button className={s.btn_delete} onClick={() => onIncrement(order.id)} type="button">+</button>
                      </div>

                      <span className={s.price}>{(order.totalPrice).toFixed(2)}</span>

                    </div>


                  </li>
                );
              })}
          </ul>



          <div className={s.container_box_order}>
            <div className={s.box_order_allTotal}>{price}</div >
            <Link to="/order">
              <button className={s.box_order_btn}>To order </button>
            </Link>
          </div>

        </div>}
    </div >
  );
};

export default Basket;
