import React, { Component } from "react";
import { TIPE_KELURAHAN_DESA } from "../consts";
import { Create, SimpleForm, TextInput } from "react-admin";
import { required } from "ra-core";

const REC = TIPE_KELURAHAN_DESA;
const FIELD = REC.field;

class TipeKelurahanDesaCreate extends Component {
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

export default TipeKelurahanDesaCreate;
