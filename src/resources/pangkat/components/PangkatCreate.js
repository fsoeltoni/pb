import React, { Component } from "react";
import { PANGKAT } from "../consts";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from "react-admin";
import { required } from "ra-core";
import { JENJANG_KEPANGKATAN } from "../../jenjang_kepangkatan/consts";

const REC = PANGKAT;
const FIELD = REC.field;

class PangkatCreate extends Component {
  renderComponent = props => (
    <Create {...props} title={REC.lab}>
      <SimpleForm>
        <ReferenceInput
          source={FIELD.jenjang_kepangkatan.res}
          label={FIELD.jenjang_kepangkatan.lab}
          sort={{ field: JENJANG_KEPANGKATAN.field.id.res, order: "ASC" }}
          reference={JENJANG_KEPANGKATAN.res}
          validate={required()}
        >
          <SelectInput optionText={JENJANG_KEPANGKATAN.field.nama.res} />
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

export default PangkatCreate;
