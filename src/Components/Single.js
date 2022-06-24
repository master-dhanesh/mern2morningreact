import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../assets/loader.gif";

const Single = () => {
    const [Image, setImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // if (!Image) {
        fetchImage();
        // }
    }, [id]);

    const fetchImage = async () => {
        const { data } = await axios.get(`https://picsum.photos/id/${id}/info`);
        setImage(data);
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
