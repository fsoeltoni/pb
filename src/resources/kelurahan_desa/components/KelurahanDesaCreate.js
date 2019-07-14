import React, { Component } from "react";
import { KELURAHAN_DESA } from "../consts";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from "react-admin";
import { required } from "ra-core";
import { KECAMATAN } from "../../kecamatan/consts";
import { TIPE_KELURAHAN_DESA } from "../../tipe_kelurahan_desa/consts";

const REC = KELURAHAN_DESA;
const FIELD = REC.field;

class KotaKabupatenCreate extends Component {
  renderComponent = props => (
    <Create {...props} title={REC.lab}>
      <SimpleForm>
        <ReferenceInput
          source={FIELD.kecamatan.res}
          label={FIELD.kecamatan.lab}
          sort={{ field: KECAMATAN.field.id.res, order: "ASC" }}
          reference={KECAMATAN.res}
          validate={required()}
        >
          <SelectInput optionText={KECAMATAN.field.nama.res} />
        </ReferenceInput>
        <ReferenceInput
          source={FIELD.tipe_kelurahan_desa.res}
          label={FIELD.tipe_kelurahan_desa.lab}
          sort={{ field: TIPE_KELURAHAN_DESA.field.id.res, order: "ASC" }}
          reference={TIPE_KELURAHAN_DESA.res}
          validate={required()}
        >
          <SelectInput optionText={TIPE_KELURAHAN_DESA.field.nama.res} />
        </ReferenceInput>
        <TextInput
          source={FIELD.nama.res}
          label={FIELD.nama.lab}
          validate={required()}
        />
      </SimpleForm>
    </Create>
  );

  render() {
    return this.renderComponent(this.props);
  }
}

export default KotaKabupatenCreate;
