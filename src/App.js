import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Single from "./Components/Single";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import axios from "axios";

export const ImagesContext = createContext();

const App = () => {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchImages();
    }, [currentPage]);

    const fetchImages = async () => {
        const { data } = await axios.get(
            `https://picsum.photos/v2/list?page=${currentPage}&limit=12`
        );
        setImages(data);
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };

    return (
        <>
            <Navigation />
            <ImagesContext.Provider value={{ images, setImages }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/:id" element={<Single />} /> */}
                    <Route
                        path="/gallery"
                        element={<Gallery handlePageClick={handlePageClick} />}
                    >
                        <Route path="/gallery/:id" element={<Single />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </ImagesContext.Provider>
        </>
    );
};

export default App;
