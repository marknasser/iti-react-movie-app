import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

// pages
import Products from "./pages/Products";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// layoouts - components - hooks
import Wraper from "./layouts/Wraper";
import Header from "./components/Header";
import useHandlingProducts from "./hooks/useHandlingProducts";
import { useState } from "react";

function App() {
  const [call, setCall] = useState({ route: "trending/all/day", query: "tv" });

  const { products, isLoading, isError } = useHandlingProducts(call);

  const handelSearch = () => {};

  function getProduct(id) {
    return products.results.find((el) => el.id === id);
  }

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center">
        <Routes>
          <Route
            path="/"
            element={
              <Wraper isLoading={isLoading} isError={isError}>
                <Products data={products.results} />
              </Wraper>
            }
          />

          <Route
            path="/product/:id"
            element={
              <Wraper isLoading={isLoading} isError={isError}>
                <Product getProduct={getProduct} />
              </Wraper>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
