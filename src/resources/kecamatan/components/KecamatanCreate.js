import React, { Component } from "react";
import { KECAMATAN } from "../consts";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from "react-admin";
import { required } from "ra-core";
import { KOTA_KABUPATEN } from "../../kota_kabupaten/consts";

const REC = KECAMATAN;
const FIELD = REC.field;

class KecamatanCreate extends Component {
  renderComponent = props => (
    <Create {...props} title={REC.lab}>
      <SimpleForm>
        <ReferenceInput
          source={FIELD.kota_kabupaten.res}
          label={FIELD.kota_kabupaten.lab}
          sort={{ field: KOTA_KABUPATEN.field.id.res, order: "ASC" }}
          reference={KOTA_KABUPATEN.res}
          validate={required()}
        >
          <SelectInput optionText={KOTA_KABUPATEN.field.nama.res} />
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

export default KecamatanCreate;
