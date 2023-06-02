import { useState, useEffect, Suspense } from "react";
import { fetchProduct, fetchProductById } from "./api/api";
import AppBar from "./components/AppBar/AppBar";
import ListShops from "./components/ListShops/ListShops";
import { Route, Routes, Link, useParams } from "react-router-dom";
import Basket from "../src/components/Basket/Basket";
import { Container } from "./components/Container/Container";

const LOCALSTORAGE_KEY_TYPE = "products";

function App() {
  const [products, setProducts] = useState([]);
  const [local, setLocal] = useState([]);

  useEffect(() => {
    try {
      const getAllProduct = async () => {
        const data = await fetchProduct();
        console.log(data);

        setProducts(data);
        localStorage.setItem(LOCALSTORAGE_KEY_TYPE, JSON.stringify(data));
      };

      getAllProduct();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    let getPokemonType = localStorage.getItem(LOCALSTORAGE_KEY_TYPE);
    getPokemonType = JSON.parse(getPokemonType);

    if (getPokemonType) setLocal(getPokemonType);
  }, []);

  return (
    <>
      <AppBar />
      <Container>
        <Suspense>
          <Routes>
            <Route
              exact="true"
              path="/"
              element={<ListShops products={products} />}
            />
            <Route exact="true" path="/basket" element={<Basket />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
