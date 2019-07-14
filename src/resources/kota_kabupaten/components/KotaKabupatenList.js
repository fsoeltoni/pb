import React, { Component } from "react";
import { KOTA_KABUPATEN } from "../consts";
import { List, Datagrid, ReferenceField, TextField } from "react-admin";
import { PROVINSI } from "../../provinsi/consts";
import { TIPE_KOTA_KABUPATEN } from "../../tipe_kota_kabupaten/consts";

const REC = KOTA_KABUPATEN;
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
          source={FIELD.provinsi.res}
          label={FIELD.provinsi.lab}
          reference={PROVINSI.res}
        >
          <TextField source={PROVINSI.field.nama.res} />
        </ReferenceField>
        <ReferenceField
          source={FIELD.tipe_kota_kabupaten.res}
          label={FIELD.tipe_kota_kabupaten.lab}
          reference={TIPE_KOTA_KABUPATEN.res}
        >
          <TextField source={TIPE_KOTA_KABUPATEN.field.nama.res} />
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
