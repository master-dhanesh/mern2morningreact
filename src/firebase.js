import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC171txBdvqM60P71HO-5-YEDXnFvLfNmY",
    authDomain: "mernmorning.firebaseapp.com",
    projectId: "mernmorning",
    storageBucket: "mernmorning.appspot.com",
    messagingSenderId: "558343372951",
    appId: "1:558343372951:web:d3da235f06621d923729d2",
    measurementId: "G-2RJTH8SK8M",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
