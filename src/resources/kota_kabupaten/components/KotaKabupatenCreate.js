import React, { Component } from "react";
import { KOTA_KABUPATEN } from "../consts";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from "react-admin";
import { required } from "ra-core";
import { PROVINSI } from "../../provinsi/consts";
import { TIPE_KOTA_KABUPATEN } from "../../tipe_kota_kabupaten/consts";

const REC = KOTA_KABUPATEN;
const FIELD = REC.field;

class KotaKabupatenCreate extends Component {
  renderComponent = props => (
    <Create {...props} title={REC.lab}>
      <SimpleForm>
        <ReferenceInput
          source={FIELD.provinsi.res}
          label={FIELD.provinsi.lab}
          sort={{ field: PROVINSI.field.id.res, order: "ASC" }}
          reference={PROVINSI.res}
          validate={required()}
        >
          <SelectInput optionText={PROVINSI.field.nama.res} />
        </ReferenceInput>
        <ReferenceInput
          source={FIELD.tipe_kota_kabupaten.res}
          label={FIELD.tipe_kota_kabupaten.lab}
          sort={{ field: TIPE_KOTA_KABUPATEN.field.id.res, order: "ASC" }}
          reference={TIPE_KOTA_KABUPATEN.res}
          validate={required()}
        >
          <SelectInput optionText={TIPE_KOTA_KABUPATEN.field.nama.res} />
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
