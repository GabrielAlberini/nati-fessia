import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function getAllWorks() {
  const productos = [];
  const collectionRef = collection(db, "portfolio");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    productos.push(doc.data());
  });
  return productos;
}

async function getAllExperiment() {
  const productos = [];
  const collectionRef = collection(db, "experimentos");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    productos.push(doc.data());
  });
  return productos;
}

async function getAllFotografico() {
  const productos = [];
  const collectionRef = collection(db, "fotograficos");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    productos.push(doc.data());
  });
  return productos;
}

async function getAllGrupalWork() {
  const productos = [];
  const collectionRef = collection(db, "trabajoGrupal");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    productos.push(doc.data());
  });
  return productos;
}

export { getAllWorks, getAllExperiment, getAllFotografico, getAllGrupalWork };
