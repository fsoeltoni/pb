import React, { Component } from "react";
import { JENJANG_KEPANGKATAN } from "../consts";
import { Create, SimpleForm, TextInput } from "react-admin";
import { required } from "ra-core";

const REC = JENJANG_KEPANGKATAN;
const FIELD = REC.field;

class JenjangKepangkatanCreate extends Component {
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

export default JenjangKepangkatanCreate;
