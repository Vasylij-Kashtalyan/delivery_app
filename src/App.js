import { useState, useEffect, Suspense } from "react";
import { fetchProduct, fetchProductById } from "./api/api";
import AppBar from "./components/AppBar/AppBar";
import ListShops from "./components/ListShops/ListShops";
import { Route, Routes, Link, useParams } from "react-router-dom";
import Basket from "../src/components/Basket/Basket";
import { Container } from "./components/Container/Container";
import {Loader} from "./components/Loader/Loader"

const LOCALSTORAGE_KEY_TYPE = "choseProducts";


function App() {
  const [products, setProducts] = useState([]);
  const [local, setLocal] = useState([]);

  useEffect(() => {
    try {
      const getAllProduct = async () => {
        const data = await fetchProduct();
        console.log(data);

        setProducts(data);
        
      };

      getAllProduct();
    } catch (error) {
      console.log(error);
    }
  },[]);

  

  return (
    <>
      <AppBar />
      <Container>
        {products.length === 0 && <Loader/>}
        <Suspense>
          <Routes>
            <Route
              exact="true"
              path="/"
              element={<ListShops LOCALSTORAGE_KEY_TYPE={LOCALSTORAGE_KEY_TYPE} products={products} />}
            />
            <Route exact="true" path="/basket" element={<Basket LOCALSTORAGE_KEY_TYPE={LOCALSTORAGE_KEY_TYPE} />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
