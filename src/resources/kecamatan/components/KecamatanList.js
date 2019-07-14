import React, { Component } from "react";
import { KECAMATAN } from "../consts";
import { List, Datagrid, TextField } from "react-admin";

const REC = KECAMATAN;
const FIELD = REC.field;

class KecamatanList extends Component {
  renderComponent = props => (
    <List
      {...props}
      title={REC.lab}
      sort={{ field: FIELD.id.res, order: "ASC" }}
    >
      <Datagrid>
        <TextField source={FIELD.id.res} label={FIELD.id.lab} />
        <TextField source={FIELD.nama.res} label={FIELD.nama.lab} />
      </Datagrid>
    </List>
  );

  render() {
    return this.renderComponent(this.props);
  }
}

export default KecamatanList;
