import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../assets/loader.gif";
import { ImagesContext } from "../Context";

const Single = () => {
    const { images, setImages } = useContext(ImagesContext);
    const [Image, setImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchImage();
    }, [id]);

    const fetchImage = async () => {
        if (images) {
            let currentImage = images.filter((img) => img.id == id)[0];
            setImage(currentImage);
        }
    };

    return Image ? (
        <div className="card m-auto mt-5" style={{ width: "80vmin" }}>
            <img
                src={Image && Image.download_url}
                alt={Image && Image.author}
            />
            <div className="card-body">
                <h5 className="card-title">{Image && Image.author}</h5>
                <p className="card-text">
                    <a target="_blank" href={Image && Image.download_url}>
                        download image
                    </a>
                    <br />
                    <a target="_blank" href={Image && Image.url}>
                        view image
                    </a>{" "}
                    <br />
                    resolution {Image && Image.width}x{Image && Image.height}
                </p>
                <Link to="/gallery" className="btn btn-primary">
                    Go Back
                </Link>
            </div>
        </div>
    ) : (
        <img src={Loading} />
    );
};

export default Single;
