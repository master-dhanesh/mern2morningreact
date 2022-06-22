import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./App.css";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [images, setImages] = useState([]);

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
        <div className="container mt-5">
            <div className="images">
                {images.map((image) => (
                    <div className="image" key={image.id}>
                        <div
                            style={{
                                backgroundImage: `url(${image.download_url})`,
                            }}
                        ></div>
                        <p>{image.author}</p>
                    </div>
                ))}
            </div>
            <hr />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={10}
                previousLabel="<<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default App;
