import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";

const putToDataBase = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "pics"), {
      url: data,
      uploadTime: new Date().getTime(),
      //returns the number of milliseconds , we use this number later to sort
      //our pics in the most recent order
    });
  } catch (err) {
    console.log(err);
  }
};

export default putToDataBase;
