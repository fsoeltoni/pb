import React from "react";
import { Admin } from "react-admin";
import attrs from "./consts/attrs";
import data from "./providers/data";
import { Resource } from "ra-core";
import { PENGGUNA } from "./resources/pengguna/consts";
import pengguna from "./resources/pengguna";
import { LINGKUP } from "./resources/lingkup/consts";
import lingkup from "./resources/lingkup";
import { PERAN } from "./resources/peran/consts";
import peran from "./resources/peran";
import { SATUAN_POMAD_DAERAH } from "./resources/satuan_pomad_daerah/consts";
import satuan_pomad_daerah from "./resources/satuan_pomad_daerah";

function App() {
  return (
    <Admin title={attrs.title} dataProvider={data}>
      <Resource
        name={PENGGUNA.res}
        options={{ label: PENGGUNA.lab }}
        {...pengguna}
      />
      <Resource name={PERAN.res} options={{ label: PERAN.lab }} {...peran} />
      <Resource
        name={LINGKUP.res}
        options={{ label: LINGKUP.lab }}
        {...lingkup}
      />
      <Resource
        name={SATUAN_POMAD_DAERAH.res}
        options={{ label: SATUAN_POMAD_DAERAH.lab }}
        {...satuan_pomad_daerah}
      />
    </Admin>
  );
}

export default App;
