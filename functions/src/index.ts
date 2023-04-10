import * as functions from "firebase-functions";
import {initializeApp} from "firebase-admin";
//import { getFirestore } from "firebase-admin/firestore";
import  {getFirestore} from "firebase/firestore";
import {getUser} from "firebase-reuse-issue";

export const users = functions.https.onCall((data)=>{
    const app = initializeApp()
    const db = getFirestore(app);

    return getUser(data.userName, db);

});