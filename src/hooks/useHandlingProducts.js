import { useState, useEffect } from "react";
import axios from "axios";

function useHandlingProducts({ route = "trending/all/day", query }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const trend = "trending/all/day";
  const search = "search/multi";
  // const movie=`${media_type}/${item_id}`;

  const api_key = "14bdd69ce887376edfafb09f23f78fe9";
  const baseURL = "https://api.themoviedb.org/3/";

  const URL = `${baseURL}${route}?api_key=${api_key}&${
    query ? `query=${query}` : ""
  }`;

  useEffect(() => {
    async function getAllProducts() {
      try {
        setIsLoading(true);
        const res = await axios.get(URL);
        setProducts(res.data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    getAllProducts();
  }, [URL]);
  return { products, isLoading, isError };
}

export default useHandlingProducts;
