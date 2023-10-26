import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

// pages
import Products from "./pages/Products";
import Product from "./pages/Product";

// layoouts - components - hooks
import Wraper from "./layouts/Wraper";
import Header from "./components/Header";
import useHandlingProducts from "./hooks/useHandlingProducts";

function App() {
  const { products, isLoading, isError, dispatch, state } =
    useHandlingProducts();

  function getProduct(id) {
    return products?.results?.find((el) => el.id === id);
  }

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center">
        <Routes>
          <Route
            path="/"
            element={
              <Products
                data={products.results}
                dispatch={dispatch}
                isLoading={isLoading}
                isError={isError}
                state={state}
              />
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
        </Routes>
      </div>
    </>
  );
}

export default App;
