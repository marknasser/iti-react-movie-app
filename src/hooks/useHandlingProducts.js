import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialValue = {
  route: "trending/all/day",
  searchTerm: "",
  filterTerm: "all",
};
const reducerFn = (state, action) => {
  if (action.type === "SEARCH") {
    return {
      route: "search/multi",
      searchTerm: action.value,
      filterTerm: "all",
    };
  }
  if (action.type === "FILTER") {
    return {
      route: `trending/${action.value}/day`,
      searchTerm: "",
      filterTerm: action.value,
    };
  }
  return initialValue;
};

function useHandlingProducts() {
  const [state, dispatch] = useReducer(reducerFn, initialValue);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const trend = "trending/all/day";
  // const search = "search/multi";
  // const movie=`${media_type}/${item_id}`;

  const api_key = "14bdd69ce887376edfafb09f23f78fe9";
  const baseURL = "https://api.themoviedb.org/3/";

  const REQUEST = axios.create({
    baseURL: baseURL,
    params: { api_key: api_key },
  });

  useEffect(() => {
    const URL = `${baseURL}${state.route}${
      state.searchTerm ? `?query=${state.searchTerm}` : ""
    }`;
    async function getAllProducts() {
      try {
        setIsLoading(true);
        const res = await REQUEST.get(URL);
        setProducts(res.data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    getAllProducts();
  }, [state]);
  return { products, isLoading, isError, dispatch, state };
}

export default useHandlingProducts;
