import React from "react";
import { Admin } from "react-admin";
import attrs from "./consts/attrs";
import data from "./providers/data";
import { Resource } from "ra-core";
import { PENGGUNA } from "./resources/pengguna/consts";
import pengguna from "./resources/pengguna";

function App() {
  return (
    <Admin title={attrs.title} dataProvider={data}>
      <Resource
        name={PENGGUNA.res}
        options={{ label: PENGGUNA.lab }}
        {...pengguna}
      />
    </Admin>
  );
}

export default App;
