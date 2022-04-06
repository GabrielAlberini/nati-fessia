// import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

function addWork(infoProducto) {
  const collectionRef = collection(db, "portfolio");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

function addExperiment(infoProducto) {
  const collectionRef = collection(db, "experimentos");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

function addFotografico(infoProducto) {
  const collectionRef = collection(db, "fotograficos");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

export { addWork, addExperiment, addFotografico };
