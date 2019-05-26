import { PERAN } from "../peran/consts";
import { LINGKUP } from "../lingkup/consts";
import { SATUAN_POMAD_DAERAH } from "../satuan_pomad_daerah/consts";

export const PENGGUNA = {
  res: "pengguna",
  lab: "Pengguna",
  field: {
    id: {
      res: "id",
      lab: "Id"
    },
    peran: {
      res: PERAN.res + "_id",
      lab: PERAN.lab
    },
    lingkup: {
      res: LINGKUP.res + "_id",
      lab: LINGKUP.lab
    },
    satuan_pomad_daerah: {
      res: SATUAN_POMAD_DAERAH.res + "_id",
      lab: SATUAN_POMAD_DAERAH.lab
    },
    nrp: {
      res: "nrp",
      lab: "NRP"
    },
    kata_sandi: {
      res: "kata_sandi",
      lab: "Kata Sandi"
    }
  }
};
