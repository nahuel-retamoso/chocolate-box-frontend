import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import { app } from './firebaseconfig.jsx'

const firestore = getFirestore(app)

export async function createOrder(order, orderId) {
    const ordersCollection = collection(firestore, "orders");
    const orderRef = doc(ordersCollection, orderId);
    await setDoc(orderRef, order);
    return orderRef.id;
}