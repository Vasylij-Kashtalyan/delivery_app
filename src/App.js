import { useState, useEffect, Suspense } from "react";
import {
  fetchProduct,
} from "./api/api";
import AppBar from "./components/AppBar/AppBar";
import ListShops from "./components/ListShops/ListShops";
import {
  Route,
  Routes,
} from "react-router-dom";
import Basket from "../src/components/Basket/Basket";
import { Container } from "./components/Container/Container";
import {Loader} from "./components/Loader/Loader"

const LOCALSTORAGE_KEY_TYPE = "choseProducts";


function App() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [idTarget, setIdTarget] = useState("");

  const counterOrder = orders.length

  useEffect(() => {
    try {
      const getAllProduct = async () => {
        const data = await fetchProduct();

        setProducts(data);
      };

      getAllProduct();
    } catch (error) {
      console.log(error);
    }
  },[]);

  function onHandler(evt) {
    const idTarget = evt.currentTarget.id;
    setIdTarget(idTarget);
  }

  const filterById = products
    .filter((pokemon) => pokemon.id === Number(idTarget))
    .map((item) => item.products)
    .flat();

  function addBacket(item) {
    setOrders([...orders, item]);
  }

  localStorage.setItem(LOCALSTORAGE_KEY_TYPE, JSON.stringify(orders));

  return (
    <>
      < AppBar counterOrder = {
        counterOrder
      }
      />
      <Container>
        {products.length === 0 && <Loader/>}
        <Suspense>
          <Routes>
            <Route
              exact="true"
              path="/"
              element = {
                  <
                  ListShops

                  onHandler = {
                    onHandler
                  }
                  idTarget = {
                    idTarget
                  }
                  products = {
                    products
                  }
                  filterById = {
                    filterById
                  }
                  addBacket = {
                    addBacket
                  }
                  />}
            />
            <Route exact="true" path="/basket" element={<Basket LOCALSTORAGE_KEY_TYPE={LOCALSTORAGE_KEY_TYPE} />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
