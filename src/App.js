import Gallery from "./Components/Gallery";
import Single from "./Components/Single";
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
                {/* <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/:id" element={<Single />} /> */}
                <Route path="/gallery" element={<Gallery />}>
                    <Route path="/gallery/:id" element={<Single />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
