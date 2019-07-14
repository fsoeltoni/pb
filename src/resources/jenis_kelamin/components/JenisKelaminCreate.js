import React, { Component } from "react";
import { JENIS_KELAMIN } from "../consts";
import { Create, SimpleForm, TextInput } from "react-admin";
import { required } from "ra-core";

const REC = JENIS_KELAMIN;
const FIELD = REC.field;

class JenisKelaminCreate extends Component {
  renderComponent = props => (
    <Create {...props} title={REC.lab}>
      <SimpleForm>
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

export default JenisKelaminCreate;
