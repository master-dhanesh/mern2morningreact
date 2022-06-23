import Gallery from "./Components/Gallery";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>

        // https://picsum.photos/id/34/info
    );
};

export default App;
