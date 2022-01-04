import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getCurrentUserInfo } from "./auth";

const firestore = firebase.firestore()

export const useData = (path, orderBy) => {
    const ref = firestore.collection(path)
    const query = ref.orderBy(orderBy)
    const [collection] = useCollectionData(query, { idField: 'id' });
    return collection
}

export const createNewChat = (chatName) => {
    const chatsRef = firestore.collection('chats')
    chatsRef.add({
        name: chatName,
        createdBy: getCurrentUserInfo().uid
    })

}

export const sendMessage = (text, chatId) => {
    const { displayName, photoURL, uid } = getCurrentUserInfo()
    const currentChatRef = firestore.collection(`chats/${chatId}/messages`)

    currentChatRef.add({
        userName: displayName,
        text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL: (photoURL || "")
    })
}