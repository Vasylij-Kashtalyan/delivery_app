import s from "./ListShops.module.css";

const ListShops = ({ products, onHandler, idTarget, filterById, addBacket }) => {
    return (
        <div className={s.container}>
            <ul className={s.list}>
                {products.map(({ name, id }) => {
                    return (
                        <li key={id} className={s.list_item} >
                            <h2 className={s.item_name}>{name}</h2>

                            <button
                                id={id}
                                className={s.item_btn}
                                onClick={onHandler}
                            >
                                View Products
                            </button>
                        </li>
                    );
                })}
            </ul>

            <ul className={s.list}>
                {idTarget &&
                    filterById.map((item) => {
                        return (
                            <li className={`${s.list_item} ${s.list_item__util}`} key={item.id}>

                                <h3 className={s.item_name}>{item.name}</h3>

                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    loading="lazy"
                                />

                                <div className={s.item_box}>
                                    <span className={s.box_price}>{item.price}</span>

                                    <button
                                        className={s.box_btn}
                                        onClick={() => addBacket(item)}
                                    >
                                        Add
                                    </button>
                                </div>

                                <p className={s.box_description}>
                                    {item.description}
                                </p>

                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
export default ListShops;
