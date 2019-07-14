import React, { Component } from "react";
import { SIM } from "../consts";
import {
  Create,
  TabbedForm,
  FormTab,
  ReferenceInput,
  SelectInput,
  NumberInput,
  FormDataConsumer,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField
} from "react-admin";
import { PENGGUNA } from "../../pengguna/consts";
import { TIPE_SIM } from "../../tipe_sim/consts";
import { JENJANG_KEPANGKATAN } from "../../jenjang_kepangkatan/consts";
import { PANGKAT } from "../../pangkat/consts";
import { JENIS_KELAMIN } from "../../jenis_kelamin/consts";
import { GOLONGAN_DARAH } from "../../golongan_darah/consts";
import { PROVINSI } from "../../provinsi/consts";
import { TIPE_KOTA_KABUPATEN } from "../../tipe_kota_kabupaten/consts";
import { KOTA_KABUPATEN } from "../../kota_kabupaten/consts";
import { KECAMATAN } from "../../kecamatan/consts";
import { TIPE_KELURAHAN_DESA } from "../../tipe_kelurahan_desa/consts";
import { KELURAHAN_DESA } from "../../kelurahan_desa/consts";
import { TIPE_JALAN_KAMPUNG } from "../../tipe_jalan_kampung/consts";

const REC = SIM;
const FIELD = REC.field;

class SimCreate extends Component {
  renderComponent = props => (
    <Create {...props} title={REC.lab}>
      <TabbedForm
        defaultValue={{
          satuan_pomad_daerah_id:
            props.permissions[PENGGUNA.field.satuan_pomad_daerah.res]
        }}
      >
        <FormTab label="Keanggotaan">
          <ReferenceInput
            source={FIELD.tipe_sim.res}
            label={FIELD.tipe_sim.lab}
            reference={TIPE_SIM.res}
            sort={{ field: TIPE_SIM.field.id.res, order: "ASC" }}
          >
            <SelectInput optionText={TIPE_SIM.field.nama.res} />
          </ReferenceInput>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.tipe_sim.res] &&
              formData[FIELD.tipe_sim.res] === 1 && (
                <NumberInput
                  source={FIELD.nrp.res}
                  label={FIELD.nrp.lab}
                  {...rest}
                />
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.tipe_sim.res] &&
              formData[FIELD.tipe_sim.res] === 2 && (
                <NumberInput
                  source={FIELD.nik.res}
                  label={FIELD.nik.lab}
                  {...rest}
                />
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.tipe_sim.res] &&
              formData[FIELD.tipe_sim.res] === 1 && (
                <ReferenceInput
                  source={FIELD.jenjang_kepangkatan.res}
                  label={FIELD.jenjang_kepangkatan.lab}
                  reference={JENJANG_KEPANGKATAN.res}
                  sort={{
                    field: JENJANG_KEPANGKATAN.field.id.res,
                    order: "ASC"
                  }}
                  {...rest}
                >
                  <SelectInput
                    optionText={JENJANG_KEPANGKATAN.field.nama.res}
                  />
                </ReferenceInput>
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.tipe_sim.res] &&
              formData[FIELD.tipe_sim.res] === 1 &&
              formData[FIELD.jenjang_kepangkatan.res] && (
                <ReferenceInput
                  source={FIELD.pangkat.res}
                  label={FIELD.pangkat.lab}
                  reference={PANGKAT.res}
                  sort={{
                    field: PANGKAT.field.id.res,
                    order: "ASC"
                  }}
                  filter={{
                    jenjang_kepangkatan_id:
                      formData[FIELD.jenjang_kepangkatan.res]
                  }}
                  {...rest}
                >
                  <SelectInput optionText={PANGKAT.field.nama.res} />
                </ReferenceInput>
              )
            }
          </FormDataConsumer>
        </FormTab>
        <FormTab label="Data Pribadi">
          <TextInput source={FIELD.nama.res} label={FIELD.nama.lab} />
          <ReferenceInput
            source={FIELD.jenis_kelamin.res}
            label={FIELD.jenis_kelamin.lab}
            reference={JENIS_KELAMIN.res}
            sort={{ field: JENIS_KELAMIN.field.id.res, order: "ASC" }}
          >
            <SelectInput optionText={JENIS_KELAMIN.field.nama.res} />
          </ReferenceInput>
          <ReferenceInput
            source={FIELD.golongan_darah.res}
            label={FIELD.golongan_darah.lab}
            reference={GOLONGAN_DARAH.res}
            sort={{ field: GOLONGAN_DARAH.field.id.res, order: "ASC" }}
          >
            <SelectInput optionText={GOLONGAN_DARAH.field.nama.res} />
          </ReferenceInput>
        </FormTab>
        <FormTab label="Alamat">
          <ReferenceInput
            source={FIELD.provinsi.res}
            label={FIELD.provinsi.lab}
            reference={PROVINSI.res}
            sort={{ field: PROVINSI.field.id.res, order: "ASC" }}
          >
            <SelectInput optionText={PROVINSI.field.nama.res} />
          </ReferenceInput>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.provinsi.res] && (
                <ReferenceInput
                  source={FIELD.tipe_kota_kabupaten.res}
                  label={FIELD.tipe_kota_kabupaten.lab}
                  reference={TIPE_KOTA_KABUPATEN.res}
                  sort={{
                    field: TIPE_KOTA_KABUPATEN.field.id.res,
                    order: "ASC"
                  }}
                  {...rest}
                >
                  <SelectInput
                    optionText={TIPE_KOTA_KABUPATEN.field.nama.res}
                  />
                </ReferenceInput>
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.provinsi.res] &&
              formData[FIELD.tipe_kota_kabupaten.res] && (
                <ReferenceInput
                  source={FIELD.kota_kabupaten.res}
                  label={FIELD.kota_kabupaten.lab}
                  reference={KOTA_KABUPATEN.res}
                  sort={{
                    field: KOTA_KABUPATEN.field.id.res,
                    order: "ASC"
                  }}
                  filter={{
                    tipe_kota_kabupaten_id:
                      formData[FIELD.tipe_kota_kabupaten.res]
                  }}
                  {...rest}
                >
                  <SelectInput optionText={KOTA_KABUPATEN.field.nama.res} />
                </ReferenceInput>
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.kota_kabupaten.res] && (
                <ReferenceInput
                  source={FIELD.kecamatan.res}
                  label={FIELD.kecamatan.lab}
                  reference={KECAMATAN.res}
                  sort={{
                    field: KECAMATAN.field.id.res,
                    order: "ASC"
                  }}
                  filter={{
                    kota_kabupaten_id: formData[FIELD.kota_kabupaten.res]
                  }}
                  {...rest}
                >
                  <SelectInput optionText={KECAMATAN.field.nama.res} />
                </ReferenceInput>
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.kecamatan.res] && (
                <ReferenceInput
                  source={FIELD.tipe_kelurahan_desa.res}
                  label={FIELD.tipe_kelurahan_desa.lab}
                  reference={TIPE_KELURAHAN_DESA.res}
                  sort={{
                    field: TIPE_KELURAHAN_DESA.field.id.res,
                    order: "ASC"
                  }}
                  {...rest}
                >
                  <SelectInput
                    optionText={TIPE_KELURAHAN_DESA.field.nama.res}
                  />
                </ReferenceInput>
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.kecamatan.res] &&
              formData[FIELD.tipe_kelurahan_desa.res] && (
                <ReferenceInput
                  source={FIELD.kelurahan_desa.res}
                  label={FIELD.kelurahan_desa.lab}
                  reference={KELURAHAN_DESA.res}
                  sort={{
                    field: KELURAHAN_DESA.field.id.res,
                    order: "ASC"
                  }}
                  filter={{
                    tipe_kelurahan_desa_id:
                      formData[FIELD.tipe_kelurahan_desa.res]
                  }}
                  {...rest}
                >
                  <SelectInput optionText={KELURAHAN_DESA.field.nama.res} />
                </ReferenceInput>
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.kelurahan_desa.res] && (
                <NumberInput
                  source={FIELD.rw.res}
                  label={FIELD.rw.lab}
                  {...rest}
                />
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.rw.res] && (
                <NumberInput
                  source={FIELD.rt.res}
                  label={FIELD.rt.lab}
                  {...rest}
                />
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.rt.res] && (
                <ReferenceInput
                  source={FIELD.tipe_jalan_kampung.res}
                  label={FIELD.tipe_jalan_kampung.lab}
                  reference={TIPE_JALAN_KAMPUNG.res}
                  sort={{
                    field: TIPE_JALAN_KAMPUNG.field.id.res,
                    order: "ASC"
                  }}
                  {...rest}
                >
                  <SelectInput optionText={TIPE_JALAN_KAMPUNG.field.nama.res} />
                </ReferenceInput>
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.tipe_jalan_kampung.res] && (
                <TextInput
                  source={FIELD.jalan_kampung.res}
                  label={FIELD.jalan_kampung.lab}
                  {...rest}
                />
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.jalan_kampung.res] && (
                <BooleanInput
                  source={FIELD.punya_blok.res}
                  label={FIELD.punya_blok.lab}
                  {...rest}
                />
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.punya_blok.res] && (
                <TextInput
                  source={FIELD.blok.res}
                  label={FIELD.blok.lab}
                  {...rest}
                />
              )
            }
          </FormDataConsumer>
          <FormDataConsumer>
            {({ formData, ...rest }) =>
              formData[FIELD.jalan_kampung.res] && (
                <NumberInput
                  source={FIELD.no_rumah.res}
                  label={FIELD.no_rumah.lab}
                  {...rest}
                />
              )
            }
          </FormDataConsumer>
        </FormTab>
        <FormTab label="Foto">
          <ImageInput
            source={FIELD.foto.res}
            label={FIELD.foto.lab}
            accept="image/*"
            multiply={false}
          >
            <ImageField source="src" />
          </ImageInput>
        </FormTab>
        <FormTab label="Tanda Tangan">
          <ImageInput
            source={FIELD.tanda_tangan.res}
            label={FIELD.tanda_tangan.lab}
            accept="image/*"
            multiply={false}
          >
            <ImageField source="src" />
          </ImageInput>
        </FormTab>
        <FormTab label="Sidik Jari">
          <ImageInput
            source={FIELD.sidik_jari.res}
            label={FIELD.sidik_jari.lab}
            accept="image/*"
          >
            <ImageField source="src" />
          </ImageInput>
        </FormTab>
      </TabbedForm>
    </Create>
  );

  render() {
    const { permissions } = this.props;

    return permissions ? this.renderComponent(this.props) : null;
  }
}

export default SimCreate;
