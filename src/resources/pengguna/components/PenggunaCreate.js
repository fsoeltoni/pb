import React, { Component } from "react";
import { PENGGUNA } from "../consts";
import { Create, SimpleForm, NumberInput, TextInput } from "react-admin";
import { required } from "ra-core";

const REC = PENGGUNA;
const FIELD = REC.field;

class PenggunaCreate extends Component {
  renderComponent = props => (
    <Create
      {...props}
      title={REC.lab}
      sort={{ field: FIELD.id.res, order: "ASC" }}
    >
      <SimpleForm>
        <NumberInput
          source={FIELD.nrp.res}
          label={FIELD.nrp.lab}
          validate={required()}
        />
        <TextInput
          source={FIELD.kata_sandi.res}
          label={FIELD.kata_sandi.lab}
          validate={required()}
        />
      </SimpleForm>
    </Create>
  );

  render() {
    return this.renderComponent(this.props);
  }
}

export default PenggunaCreate;
