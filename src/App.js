import React, { useState } from "react";
import { Global } from "./components/Global";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Grid from "./components/Grid";

function App() {
  const [urls,setUrls] = useState([]);
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Upload urls={urls} setUrls={setUrls} />
      <Grid urls={urls} setUrls={setUrls} />
    </React.Fragment>
  );
}

export default App;
