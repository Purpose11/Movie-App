import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Bookmarks from "./pages/Bookmarks";
import Tv from "./pages/Tv-series";
import Movie from "./pages/Movie";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex">
      <Nav />
      <div className="ml-[90px] flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/tv-series" element={<Tv />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
