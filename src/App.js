import app from "./firebase";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
    deleteObject,
    listAll,
} from "firebase/storage";
const App = () => {
    const storage = getStorage(app);

    const UploadFile = async (e) => {
        const imagenewname =
            "FS-" + Date.now() + "." + e.target.files[0].name.split(".").at(-1);
        const storageref = await ref(storage, imagenewname);
        await uploadBytes(storageref, e.target.files[0]);
        const download_url = await getDownloadURL(storageref);
        console.log(download_url);
    };

    const DeleteImage = async () => {
        const imageref = ref(storage, "FS-1656756783787.jpg");
        await deleteObject(imageref);
        console.log("Image Deleted");
    };

    const ListAllImages = async () => {
        const allImageRef = ref(storage);
        const images = await listAll(allImageRef);
        images.items.forEach((item) => {
            getDownloadURL(item).then((url) => console.log(url));
        });
    };

    return (
        <div className="container mt-5 alert">
            <input
                className="w-25 form-control me-3 "
                type="file"
                onChange={UploadFile}
            />
            <br />
            <button onClick={DeleteImage} className="btn btn-primary me-3">
                Delete Image
            </button>
            <br /> <br />
            <button onClick={ListAllImages} className="btn btn-primary me-3">
                List Images
            </button>
        </div>
    );
};

export default App;
