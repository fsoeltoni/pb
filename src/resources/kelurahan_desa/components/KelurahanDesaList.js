import React, { Component } from "react";
import { KELURAHAN_DESA } from "../consts";
import { List, Datagrid, ReferenceField, TextField } from "react-admin";
import { KECAMATAN } from "../../kecamatan/consts";
import { TIPE_KELURAHAN_DESA } from "../../tipe_kelurahan_desa/consts";

const REC = KELURAHAN_DESA;
const FIELD = REC.field;

class KotaKabupatenList extends Component {
  renderComponent = props => (
    <List
      {...props}
      title={REC.lab}
      sort={{ field: FIELD.id.res, order: "ASC" }}
    >
      <Datagrid>
        <TextField source={FIELD.id.res} label={FIELD.id.lab} />
        <ReferenceField
          source={FIELD.kecamatan.res}
          label={FIELD.kecamatan.lab}
          reference={KECAMATAN.res}
        >
          <TextField source={KECAMATAN.field.nama.res} />
        </ReferenceField>
        <ReferenceField
          source={FIELD.tipe_kelurahan_desa.res}
          label={FIELD.tipe_kelurahan_desa.lab}
          reference={TIPE_KELURAHAN_DESA.res}
        >
          <TextField source={TIPE_KELURAHAN_DESA.field.nama.res} />
        </ReferenceField>
        <TextField source={FIELD.nama.res} label={FIELD.nama.lab} />
      </Datagrid>
    </List>
  );

  render() {
    return this.renderComponent(this.props);
  }
}

export default KotaKabupatenList;
