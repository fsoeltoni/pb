import React, { Component } from "react";
import { TIPE_SIM } from "../consts";
import { List, Datagrid, TextField } from "react-admin";

const REC = TIPE_SIM;
const FIELD = REC.field;

class TipeSimList extends Component {
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

export default TipeSimList;
