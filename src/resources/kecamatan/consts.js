import { KOTA_KABUPATEN } from "../kota_kabupaten/consts";

export const KECAMATAN = {
  res: "kecamatan",
  lab: "Kecamatan",
  field: {
    id: {
      res: "id",
      lab: "Id"
    },
    kota_kabupaten: {
      res: KOTA_KABUPATEN.res + "_id",
      lab: KOTA_KABUPATEN.lab
    },
    nama: {
      res: "nama",
      lab: "Nama"
    }
  }
};
