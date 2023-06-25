import s from "./Basket.module.css"

const Basket = ({ orders, onDelete }) => {
  // function onHandleQuantity() {
  // setValue(value + 1)
  // }
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
              orders.map(({ id, name, imageUrl, description, price }) => {
                return (
                  <li className={s.list_item} key={id}>

                    <div className={s.item_box}>

                      <img
                        className={s.box_img}
                        src={imageUrl}
                        alt={name}
                        loading="lazy"
                      />


                      <p className={s.box_description}>
                        {description}
                      </p>


                      <div className={s.item_box_btn}>
                        <button type="button" onClick={() =>
                          onDelete(id)}>Delete</button>
                      </div>
                    </div>

                    <div className={s.item_price}>
                      {/* <div> */}
                      {/* <button type="button" onClick={() => onHandleQuantity()} >-</button> */}
                      {/* <input type="number" min={0} value={1} max={99} step={1} /> */}
                      {/* <button type="button" onClick={onHandleQuantity}>+</button> */}
                      {/* </div> */}
                      <p className={s.price}>{price}</p>
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
