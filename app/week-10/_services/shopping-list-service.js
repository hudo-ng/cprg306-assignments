import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

async function getItems(userId) {
  const items = [];
  const itemsRef = collection(db, "users", userId, "items");
  try {
    const itemsSnapshot = await getDocs(itemsRef);
    itemsSnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return items;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

async function getItem(userId, itemId) {
  const itemRef = doc(db, "users", userId, "items", itemId);
  try {
    const docSnap = await getDoc(itemRef);
    return { id: (await docSnap).id, ...(await docSnap).data() };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function addItem(userId, item) {
  const itemRef = collection(db, "users", userId, "items");
  try {
    const docRef = await addDoc(itemRef, item);
    return docRef.id;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function deleteItem(userId, itemId) {
  const itemRef = doc(db, "users", userId, "items", itemId);
  try {
    await deleteDoc(itemRef);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export { getItem, getItems, addItem, deleteItem };
