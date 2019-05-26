import React, { Component } from "react";
import { LINGKUP } from "../consts";
import { Create, SimpleForm, TextInput } from "react-admin";
import { required } from "ra-core";

const REC = LINGKUP;
const FIELD = REC.field;

class LingkupCreate extends Component {
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

export default LingkupCreate;
