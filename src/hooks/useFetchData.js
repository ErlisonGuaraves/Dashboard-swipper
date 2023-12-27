import { useState } from "react";

// firestore database instance
import {db} from "../connection/firebase"

// firestore
import { collection, query, getDocs, doc, deleteDoc, getDoc } from "firebase/firestore";


const useFetchData = () => {
    const [dashs, setDashs] = useState([]);

    async function getAllDashs() {
      try {
        const q = query(collection(db, "dashboards"));
        const querySnapshot = await getDocs(q);
        let dados = [];

        querySnapshot.forEach((doc) => {
          dados.push({
            id: doc.id,
            dados: doc.data()
          });
        });

        setDashs(dados);
      } catch (err) {
        console.log(err);
      }

      return dashs
    } 


    async function getDashById(id){

        const docRef = doc(db, "dashboards", id);
        const docSnap = await getDoc(docRef);

        return docSnap.data()
    }

    async function deleteDashById(id){
        try{
            const dashRef = await doc(db, "dashboards", id)
            await deleteDoc(dashRef)
            setDashs(dashs.filter((dash) => dash.id !== id))
          }catch(err){
            console.log(err)
        } 
    }

    return {setDashs, getAllDashs, deleteDashById, getDashById, dashs}
}


export { useFetchData }