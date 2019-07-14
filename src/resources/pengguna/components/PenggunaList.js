import React, { Component } from "react";
import { PENGGUNA } from "../consts";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton
} from "react-admin";
import { PERAN } from "../../peran/consts";
import { LINGKUP } from "../../lingkup/consts";
import { SATUAN_POMAD_DAERAH } from "../../satuan_pomad_daerah/consts";
import SatuanPomadDaerahField from "../../satuan_pomad_daerah/helpers/SatuanPomadDaerahField";

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
        <ReferenceField
          source={FIELD.peran.res}
          label={FIELD.peran.lab}
          reference={PERAN.res}
        >
          <TextField source={PERAN.field.nama.res} />
        </ReferenceField>
        <ReferenceField
          source={FIELD.lingkup.res}
          label={FIELD.lingkup.lab}
          reference={LINGKUP.res}
        >
          <TextField source={LINGKUP.field.nama.res} />
        </ReferenceField>

        <SatuanPomadDaerahField
          source={FIELD.satuan_pomad_daerah.res}
          label={FIELD.satuan_pomad_daerah.lab}
          reference={SATUAN_POMAD_DAERAH.res}
        />
        <TextField source={FIELD.nrp.res} label={FIELD.nrp.lab} />
        <EditButton />
      </Datagrid>
    </List>
  );

  render() {
    console.log(this.props.permissions);
    return this.renderComponent(this.props);
  }
}

export default PenggunaList;
