import React, { Component } from "react";
import { TIPE_JALAN_KAMPUNG } from "../consts";
import { List, Datagrid, TextField } from "react-admin";

const REC = TIPE_JALAN_KAMPUNG;
const FIELD = REC.field;

class TipeJalanKampungList extends Component {
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

export default TipeJalanKampungList;
