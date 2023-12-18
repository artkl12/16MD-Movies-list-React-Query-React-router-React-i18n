import "./App.css";
import Movies from "./Movies.tsx";
import { Route, Routes } from "react-router-dom";
import MoviePage from "./MoviePage.tsx";
import NotFound from "./NotFound.tsx";
import Navbar from "./Navbar.tsx";
import About from "./About.tsx";
import Project from "./Project.tsx";


const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>  
    </>   
  )
}

export default App;
