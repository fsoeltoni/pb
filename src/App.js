import React from "react";
import { Admin } from "react-admin";
import attrs from "./consts/attrs";
import data from "./providers/data";
import { Resource } from "ra-core";
import { PENGGUNA } from "./resources/pengguna/consts";

function App() {
  return (
    <Admin title={attrs.title} dataProvider={data}>
      <Resource name={PENGGUNA.res} options={{ label: PENGGUNA.lab }} />
    </Admin>
  );
}

export default App;
