import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from './firebaseconfig.jsx'

const firestore = getFirestore(app)

export async function createOrder(order) {
    const docRef = await addDoc(collection(firestore, "orders"), order);
    return docRef.id;
}