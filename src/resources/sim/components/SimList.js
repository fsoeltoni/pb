import React, { Component } from "react";
import { SIM } from "../consts";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton
} from "react-admin";
import { PENGGUNA } from "../../pengguna/consts";
import { PANGKAT } from "../../pangkat/consts";

const REC = SIM;
const FIELD = REC.field;

class SimList extends Component {
  renderComponent = props => (
    <List
      {...props}
      title={REC.lab}
      sort={{ field: FIELD.id.res, order: "ASC" }}
      filter={{
        satuan_pomad_daerah_id:
          props.permissions[PENGGUNA.field.satuan_pomad_daerah.res]
      }}
    >
      <Datagrid>
        <TextField source={FIELD.id.res} label={FIELD.id.lab} />
        <TextField source={FIELD.nrp.res} label={FIELD.nrp.lab} />
        <TextField source={FIELD.nama.res} label={FIELD.nama.lab} />
        <ReferenceField
          source={FIELD.pangkat.res}
          label={FIELD.pangkat.lab}
          reference={PANGKAT.res}
        >
          <TextField source={PANGKAT.field.nama.res} />
        </ReferenceField>
        <EditButton />
      </Datagrid>
    </List>
  );

  render() {
    const { permissions } = this.props;

    return permissions ? this.renderComponent(this.props) : null;
  }
}

export default SimList;
