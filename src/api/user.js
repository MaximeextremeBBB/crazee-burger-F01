import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
    const cachette = doc(db, "users", idUser);
    const docSnapshot = await getDoc(cachette);
    // console.log("docSnapshot : ", docSnapshot);
    // console.log("docSnapshot.exists() : ", docSnapshot.exists());

    if (docSnapshot.exists()) {
        const { menu } = await docSnapshot.data();
        console.log("menu : ", menu);
        return menu;
    }
};

export const createUser = (userId) => {
    // CACHETTE
    const cachette = doc(db, "users", userId);

    // NOURRITURE
    const nourriture = {
        username: userId,
        menu: fakeMenu.LARGE,
    };
    setDoc(cachette, nourriture);
};
