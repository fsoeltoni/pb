import { JENJANG_KEPANGKATAN } from "../jenjang_kepangkatan/consts";

export const PANGKAT = {
  res: "pangkat",
  lab: "Pangkat",
  field: {
    id: {
      res: "id",
      lab: "Id"
    },
    jenjang_kepangkatan: {
      res: JENJANG_KEPANGKATAN.res + "_id",
      lab: JENJANG_KEPANGKATAN.lab
    },
    nama: {
      res: "nama",
      lab: "Nama"
    }
  }
};
