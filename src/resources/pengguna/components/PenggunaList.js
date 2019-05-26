import React, { Component } from "react";
import { PENGGUNA } from "../consts";
import { List, Datagrid, TextField } from "react-admin";

const REC = PENGGUNA;
const FIELD = REC.field;

class PenggunaList extends Component {
  renderComponent = props => (
    <List
      {...props}
      title={REC.lab}
      sort={{ field: FIELD.id.res, order: "ASC" }}
    >
      <Datagrid>
        <TextField source={FIELD.id.res} label={FIELD.id.lab} />
        <TextField source={FIELD.nrp.res} label={FIELD.nrp.lab} />
      </Datagrid>
    </List>
  );

  render() {
    return this.renderComponent(this.props);
  }
}

export default PenggunaList;
