import s from "./ListShops.module.css";

const ListShops = ({ products, onHandler, idTarget, filterById, addBacket }) => {
    return (
        <div>
            <ul className={s.box}>
                {products.map(({ name, id }) => {
                    return (
                        <li key={id} className={s.box_list} >
                            <h2>{name}</h2>

                            <button
                                id={id}
                                className={s.box_btn}
                                onClick={onHandler}
                            >
                                View Products
                            </button>
                        </li>
                    );
                })}
            </ul>

            <ul className={s.box}>
                {idTarget &&
                    filterById.map((item) => {
                        return (
                            <li className={`${s.box_list} ${s.box_list__util}`} key={item.id}>

                                <h3>{item.name}</h3>

                                <img
                                    className={s.box.img}
                                    src={item.imageUrl}
                                    alt={item.name}
                                    loading="lazy"
                                />

                                <div className={s.box_add}>
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
