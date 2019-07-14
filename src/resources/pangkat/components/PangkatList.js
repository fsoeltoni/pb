import React, { Component } from "react";
import { PANGKAT } from "../consts";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";
import { JENJANG_KEPANGKATAN } from "../../jenjang_kepangkatan/consts";

const REC = PANGKAT;
const FIELD = REC.field;

class PangkatList extends Component {
  renderComponent = props => (
    <List
      {...props}
      title={REC.lab}
      sort={{ field: FIELD.id.res, order: "ASC" }}
    >
      <Datagrid>
        <TextField source={FIELD.id.res} label={FIELD.id.lab} />
        <ReferenceField
          source={FIELD.jenjang_kepangkatan.res}
          label={FIELD.jenjang_kepangkatan.lab}
          reference={JENJANG_KEPANGKATAN.res}
        >
          <TextField source={JENJANG_KEPANGKATAN.field.nama.res} />
        </ReferenceField>
        <TextField source={FIELD.nama.res} label={FIELD.nama.lab} />
      </Datagrid>
    </List>
  );

  render() {
    return this.renderComponent(this.props);
  }
}

export default PangkatList;
