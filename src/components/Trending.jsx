import useFetch from "../hooks/UseFetch";
import { useEffect, useState } from "react";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const { data, isLoading, isError } = useFetch(
    ["movies"],
    "https://api.themoviedb.org/3/trending/all/day?api_key=dd90dd41203fce3517619be87037fc63"
  );

  useEffect(() => {
    setTrending(data && data);
    console.log("Trending", trending);
  }, [data, trending]);

  if (isLoading) {
    return <h1 className="text-white">Loading..</h1>;
  }

  if (isError) {
    return <h1>Error fetching data..</h1>;
  }

  return (
    <>
      <div className="mt-[25px]">
        <h1 className="text-white text-2xl">Trending</h1>
      </div>
      <div className="flex flex-row items-center gap-[30px] mt-[30px] max-w-full h-fit overflow-hidden border border-red-500">
        {trending &&
          trending.results.map((trendData) => {
            return (
              <div
                key={trendData.id}
                className="w-[450px] h-[220px] rounded-xl  border border-black"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://image.tmdb.org/t/p/w500/${trendData.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-gray-700">
                  {trendData.title ? trendData.title : trendData.name}
                </h1>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Trending;
