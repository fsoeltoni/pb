import { TIPE_SIM } from "../tipe_sim/consts";
import { JENJANG_KEPANGKATAN } from "../jenjang_kepangkatan/consts";
import { PANGKAT } from "../pangkat/consts";
import { JENIS_KELAMIN } from "../jenis_kelamin/consts";
import { GOLONGAN_DARAH } from "../golongan_darah/consts";
import { PROVINSI } from "../provinsi/consts";
import { TIPE_KOTA_KABUPATEN } from "../tipe_kota_kabupaten/consts";
import { KOTA_KABUPATEN } from "../kota_kabupaten/consts";
import { KECAMATAN } from "../kecamatan/consts";
import { TIPE_KELURAHAN_DESA } from "../tipe_kelurahan_desa/consts";
import { KELURAHAN_DESA } from "../kelurahan_desa/consts";
import { TIPE_JALAN_KAMPUNG } from "../tipe_jalan_kampung/consts";

export const SIM = {
  res: "sim",
  lab: "SIM",
  field: {
    id: {
      res: "id",
      lab: "Id"
    },
    tipe_sim: {
      res: TIPE_SIM.res + "_id",
      lab: TIPE_SIM.lab
    },
    nrp: {
      res: "nrp",
      lab: "NRP"
    },
    nik: {
      res: "nik",
      lab: "NIK"
    },
    jenjang_kepangkatan: {
      res: JENJANG_KEPANGKATAN.res + "_id",
      lab: JENJANG_KEPANGKATAN.lab
    },
    pangkat: {
      res: PANGKAT.res + "_id",
      lab: PANGKAT.lab
    },
    nama: {
      res: "nama",
      lab: "Nama"
    },
    jenis_kelamin: {
      res: JENIS_KELAMIN.res + "_id",
      lab: JENIS_KELAMIN.lab
    },
    golongan_darah: {
      res: GOLONGAN_DARAH.res + "_id",
      lab: GOLONGAN_DARAH.lab
    },
    provinsi: {
      res: PROVINSI.res + "_id",
      lab: PROVINSI.lab
    },
    tipe_kota_kabupaten: {
      res: TIPE_KOTA_KABUPATEN.res + "_id",
      lab: TIPE_KOTA_KABUPATEN.lab
    },
    kota_kabupaten: {
      res: KOTA_KABUPATEN.res + "_id",
      lab: KOTA_KABUPATEN.lab
    },
    kecamatan: {
      res: KECAMATAN.res + "_id",
      lab: KECAMATAN.lab
    },
    tipe_kelurahan_desa: {
      res: TIPE_KELURAHAN_DESA.res + "_id",
      lab: TIPE_KELURAHAN_DESA.lab
    },
    kelurahan_desa: {
      res: KELURAHAN_DESA.res + "_id",
      lab: KELURAHAN_DESA.lab
    },
    rw: {
      res: "rw",
      lab: "RW"
    },
    rt: {
      res: "rt",
      lab: "RT"
    },
    tipe_jalan_kampung: {
      res: TIPE_JALAN_KAMPUNG.res + "_id",
      lab: TIPE_JALAN_KAMPUNG.lab
    },
    jalan_kampung: {
      res: "jalan_kampung",
      lab: "Jalan/Kampung"
    },
    punya_blok: {
      res: "punya_blok",
      lab: "Punya Blok"
    },
    blok: {
      res: "blok",
      lab: "Blok"
    },
    no_rumah: {
      res: "no_rumah",
      lab: "No. Rumah"
    },
    foto: {
      res: "foto",
      lab: "Foto"
    },
    tanda_tangan: {
      res: "tanda_tangan",
      lab: "Tanda Tangan"
    },
    sidik_jari: {
      res: "sidik_jari",
      lab: "Sidik Jari"
    }
  }
};
