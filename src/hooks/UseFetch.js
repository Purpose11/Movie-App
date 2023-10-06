import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = (queryKey, url) => {
  return useQuery(queryKey, async () => {
    const response = await axios.get(url);
    return response.data;
  });
};

export default useFetch;
