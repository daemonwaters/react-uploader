import React from "react";
import { Global } from "./components/Global";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Grid from "./components/Grid";
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { collection } from "@firebase/firestore";
import { db } from "./config";

function App() {

  const [values] = useCollectionData(collection(db,"pics"));  

  return (
    <React.Fragment>
      <Global />
      <Header />
      <Upload urls={values ? values : []} />
      <Grid urls={values ? values :[]} />
    </React.Fragment>
  );
}

export default App;
