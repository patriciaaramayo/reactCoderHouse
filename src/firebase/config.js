import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBD5yhikRNF3t3SGOfP3fqIetvAGsMuvs0",
    authDomain: "ecommerce-aramayo.firebaseapp.com",
    projectId: "ecommerce-aramayo",
    storageBucket: "ecommerce-aramayo.appspot.com",
    messagingSenderId: "220552570469",
    appId: "1:220552570469:web:5958ca40605de74456488c"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}