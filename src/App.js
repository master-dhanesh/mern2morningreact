import app from "./firebase";
import {
    addDoc,
    collection,
    deleteDoc,
    getDocs,
    getFirestore,
    doc,
    setDoc,
} from "firebase/firestore";

const App = () => {
    const db = getFirestore(app);
    const schema = collection(db, "user");

    const CreateUser = async () => {
        try {
            const docref = await addDoc(schema, {
                username: "Smith",
                city: "UAE",
            });
            console.log("User Created.", docref.id);
        } catch (error) {
            console.log(error.message);
        }
    };

    const ReadUsers = async () => {
        try {
            const docs = await getDocs(schema);
            const allusers = [];
            docs.forEach((doc) => {
                allusers.push({ id: doc.id, ...doc.data() });
            });
            console.log(allusers);
        } catch (error) {
            console.log(error.message);
        }
    };

    const DeleteUser = async () => {
        try {
            await deleteDoc(doc(schema, "nOUAKJGWFq9b7937Z6lt"));
            console.log("User Deleted");
        } catch (error) {
            console.log(error.message);
        }
    };

    const UpdateUser = async () => {
        await setDoc(doc(schema, "sjFBIFEkXwLFzwKhxXvZ"), {
            username: "Jenney json",
            city: "UAE",
        });
        console.log("User Updated");
    };

    return (
        <div className="container mt-5 alert">
            <button onClick={CreateUser} className="btn btn-primary me-3">
                Create User
            </button>
            <button onClick={ReadUsers} className="btn btn-primary me-3">
                Read Users
            </button>
            <button onClick={DeleteUser} className="btn btn-primary me-3">
                Delete User
            </button>
            <button onClick={UpdateUser} className="btn btn-primary me-3">
                Update User
            </button>
        </div>
    );
};

export default App;
