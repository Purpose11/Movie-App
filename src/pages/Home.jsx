// import useFetch from "../hooks/UseFetch";
// import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

const Home = () => {
  // const { data, isLoading, isError } = useFetch(
  //   ["movies"],
  //   "https://api.themoviedb.org/3/trending/all/week?api_key=dd90dd41203fce3517619be87037fc63"
  // );

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // if (isLoading) {
  //   return <h1 className="text-white">Loading..</h1>;
  // }

  // if (isError) {
  //   return <h1>Error fetching data..</h1>;
  // }

  return (
    <div className="ml-[20px]">
      <SearchBar />
      <Trending />
    </div>
  );
};

export default Home;
