import { useState, useEffect, Suspense } from "react";
import { fetchProduct } from "./api/api";
import AppBar from "./components/AppBar/AppBar";
import ListShops from "./components/ListShops/ListShops";
import { Route, Routes } from "react-router-dom";

const LOCALSTORAGE_KEY_TYPE = "products";

function App() {
  const [products, setProducts] = useState([]);
  const [local, setLocal] = useState([]);

  console.log(products);

  useEffect(() => {
    try {
      const getAllProduct = async () => {
        const data = await fetchProduct();

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

      <Suspense>
        <Routes>
          <Route path="/" element={<ListShops products={products} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
