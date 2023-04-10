import {collection, Firestore, getDocs, query, where} from "firebase/firestore";

export function getUser(userName:string, db:Firestore): Promise<User> {
    const userQuery = query(
        collection(db,"users"),
        where("username", "==", userName)
        );
    return getDocs(userQuery).then(docs => {
        return docs.docs[0].data() as User;
    });
}

export interface User  {
    userName: string;
}