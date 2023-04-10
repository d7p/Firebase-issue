"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const firestore_1 = require("firebase/firestore");
function getUser(userName, db) {
    const userQuery = (0, firestore_1.query)((0, firestore_1.collection)(db, "users"), (0, firestore_1.where)("username", "==", userName));
    return (0, firestore_1.getDocs)(userQuery).then(docs => {
        return docs.docs[0].data();
    });
}
exports.getUser = getUser;
