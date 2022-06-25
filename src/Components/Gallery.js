import { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../App.css";
import { ImagesContext } from "../Context";

const Gallery = ({ handlePageClick }) => {
    const { images, setImages } = useContext(ImagesContext);
    return (
        <div className="container mt-5">
            <Outlet />
            <hr />
            <div className="images">
                {images &&
                    images.map((image) => (
                        <Link
                            to={`/gallery/${image.id}`}
                            className="image"
                            key={image.id}
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${image.download_url})`,
                                }}
                            ></div>
                            <p>{image.author}</p>
                        </Link>
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

export default Gallery;
