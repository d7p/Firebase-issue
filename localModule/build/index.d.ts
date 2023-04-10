import { Firestore } from "firebase/firestore";
export declare function getUser(userName: string, db: Firestore): Promise<User>;
export interface User {
    userName: string;
}
//# sourceMappingURL=index.d.ts.map