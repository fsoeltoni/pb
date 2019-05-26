import React from "react";
import { Admin } from "react-admin";
import attrs from "./consts/attrs";
import data from "./providers/data";

function App() {
  return <Admin title={attrs.title} dataProvider={data} />;
}

export default App;
