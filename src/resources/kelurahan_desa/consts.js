import { TIPE_KELURAHAN_DESA } from "../tipe_kelurahan_desa/consts";
import { KECAMATAN } from "../kecamatan/consts";

export const KELURAHAN_DESA = {
  res: "kelurahan_desa",
  lab: "Kelurahan/Desa",
  field: {
    id: {
      res: "id",
      lab: "Id"
    },
    kecamatan: {
      res: KECAMATAN.res + "_id",
      lab: KECAMATAN.lab
    },
    tipe_kelurahan_desa: {
      res: TIPE_KELURAHAN_DESA.res + "_id",
      lab: TIPE_KELURAHAN_DESA.lab
    },
    nama: {
      res: "nama",
      lab: "Nama"
    }
  }
};
