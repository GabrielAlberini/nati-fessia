import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, doc, collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function deleteProduct(producto) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "productos");
    const docuRef = doc(coleccionRef, producto.sku);
    console.log(producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

export { deleteProduct };
