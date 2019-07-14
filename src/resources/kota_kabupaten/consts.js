import { PROVINSI } from "../provinsi/consts";
import { TIPE_KOTA_KABUPATEN } from "../tipe_kota_kabupaten/consts";

export const KOTA_KABUPATEN = {
  res: "kota_kabupaten",
  lab: "Kota/Kabupaten",
  field: {
    id: {
      res: "id",
      lab: "Id"
    },
    provinsi: {
      res: PROVINSI.res + "_id",
      lab: PROVINSI.lab
    },
    tipe_kota_kabupaten: {
      res: TIPE_KOTA_KABUPATEN.res + "_id",
      lab: TIPE_KOTA_KABUPATEN.lab
    },
    nama: {
      res: "nama",
      lab: "Nama"
    }
  }
};
