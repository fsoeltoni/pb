import React from "react";
import { Admin, Login } from "react-admin";
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
import auth from "./providers/auth";
import { SIM } from "./resources/sim/consts";
import sim from "./resources/sim";
import { JENJANG_KEPANGKATAN } from "./resources/jenjang_kepangkatan/consts";
import jenjang_kepangkatan from "./resources/jenjang_kepangkatan";
import { PANGKAT } from "./resources/pangkat/consts";
import pangkat from "./resources/pangkat";
import { TIPE_SIM } from "./resources/tipe_sim/consts";
import tipe_sim from "./resources/tipe_sim";
import { JENIS_KELAMIN } from "./resources/jenis_kelamin/consts";
import jenis_kelamin from "./resources/jenis_kelamin";
import { GOLONGAN_DARAH } from "./resources/golongan_darah/consts";
import golongan_darah from "./resources/golongan_darah";
import { PROVINSI } from "./resources/provinsi/consts";
import provinsi from "./resources/provinsi";
import { TIPE_KOTA_KABUPATEN } from "./resources/tipe_kota_kabupaten/consts";
import tipe_kota_kabupaten from "./resources/tipe_kota_kabupaten";
import { KOTA_KABUPATEN } from "./resources/kota_kabupaten/consts";
import kota_kabupaten from "./resources/kota_kabupaten";
import { KECAMATAN } from "./resources/kecamatan/consts";
import kecamatan from "./resources/kecamatan";
import { TIPE_KELURAHAN_DESA } from "./resources/tipe_kelurahan_desa/consts";
import tipe_kelurahan_desa from "./resources/tipe_kelurahan_desa";
import { KELURAHAN_DESA } from "./resources/kelurahan_desa/consts";
import kelurahan_desa from "./resources/kelurahan_desa";
import { TIPE_JALAN_KAMPUNG } from "./resources/tipe_jalan_kampung/consts";
import tipe_jalan_kampung from "./resources/tipe_jalan_kampung";

const LoginPage = () => (
  <Login backgroundImage={require("./images/pom_tni_ad.jpg")} />
);

function App() {
  return (
    <Admin
      title={attrs.title}
      dataProvider={data}
      authProvider={auth}
      loginPage={LoginPage}
    >
      <Resource name={SIM.res} options={{ label: SIM.lab }} {...sim} />
      <Resource
        name={TIPE_SIM.res}
        options={{ label: TIPE_SIM.lab }}
        {...tipe_sim}
      />
      <Resource
        name={TIPE_JALAN_KAMPUNG.res}
        options={{ label: TIPE_JALAN_KAMPUNG.lab }}
        {...tipe_jalan_kampung}
      />
      <Resource
        name={KELURAHAN_DESA.res}
        options={{ label: KELURAHAN_DESA.lab }}
        {...kelurahan_desa}
      />
      <Resource
        name={TIPE_KELURAHAN_DESA.res}
        options={{ label: TIPE_KELURAHAN_DESA.lab }}
        {...tipe_kelurahan_desa}
      />
      <Resource
        name={KECAMATAN.res}
        options={{ label: KECAMATAN.lab }}
        {...kecamatan}
      />
      <Resource
        name={KOTA_KABUPATEN.res}
        options={{ label: KOTA_KABUPATEN.lab }}
        {...kota_kabupaten}
      />
      <Resource
        name={TIPE_KOTA_KABUPATEN.res}
        options={{ label: TIPE_KOTA_KABUPATEN.lab }}
        {...tipe_kota_kabupaten}
      />
      <Resource
        name={PROVINSI.res}
        options={{ label: PROVINSI.lab }}
        {...provinsi}
      />
      <Resource
        name={GOLONGAN_DARAH.res}
        options={{ label: GOLONGAN_DARAH.lab }}
        {...golongan_darah}
      />
      <Resource
        name={JENIS_KELAMIN.res}
        options={{ label: JENIS_KELAMIN.lab }}
        {...jenis_kelamin}
      />
      <Resource
        name={PANGKAT.res}
        options={{ label: PANGKAT.lab }}
        {...pangkat}
      />
      <Resource
        name={JENJANG_KEPANGKATAN.res}
        options={{ label: JENJANG_KEPANGKATAN.lab }}
        {...jenjang_kepangkatan}
      />
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
