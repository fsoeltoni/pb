import React, { Component } from "react";
import { PENGGUNA } from "../consts";
import {
  Edit,
  SimpleForm,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  FormDataConsumer,
  NumberInput,
  TextInput
} from "react-admin";
import { required } from "ra-core";
import { PERAN } from "../../peran/consts";
import { LINGKUP } from "../../lingkup/consts";
import { SATUAN_POMAD_DAERAH } from "../../satuan_pomad_daerah/consts";

const REC = PENGGUNA;
const FIELD = REC.field;
const Title = ({ record }) => <span>{record[FIELD.nrp.res]}</span>;

class PenggunaEdit extends Component {
  renderComponent = props => (
    <Edit {...props} title={<Title />}>
      <SimpleForm>
        <DisabledInput source={FIELD.id.res} label={FIELD.id.lab} />
        <ReferenceInput
          source={FIELD.peran.res}
          label={FIELD.peran.lab}
          sort={{ field: PERAN.field.id.res, order: "ASC" }}
          reference={PERAN.res}
          validate={required()}
        >
          <SelectInput optionText={PERAN.field.nama.res} />
        </ReferenceInput>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData[FIELD.peran.res] && (
              <ReferenceInput
                source={FIELD.lingkup.res}
                label={FIELD.lingkup.lab}
                sort={{ field: LINGKUP.field.id.res, order: "ASC" }}
                reference={LINGKUP.res}
                validate={required()}
                {...rest}
              >
                <SelectInput optionText={LINGKUP.field.nama.res} />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData[FIELD.lingkup.res] &&
            formData[FIELD.lingkup.res] === 2 && (
              <ReferenceInput
                source={FIELD.satuan_pomad_daerah.res}
                label={FIELD.satuan_pomad_daerah.lab}
                sort={{ field: SATUAN_POMAD_DAERAH.field.id.res, order: "ASC" }}
                reference={SATUAN_POMAD_DAERAH.res}
                validate={required()}
                {...rest}
              >
                <SelectInput optionText={SATUAN_POMAD_DAERAH.field.nama.res} />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>

        <NumberInput
          source={FIELD.nrp.res}
          label={FIELD.nrp.lab}
          validate={required()}
        />
        <TextInput
          source={FIELD.kata_sandi.res}
          label={FIELD.kata_sandi.lab}
          validate={required()}
        />
      </SimpleForm>
    </Edit>
  );

  render() {
    return this.renderComponent(this.props);
  }
}

export default PenggunaEdit;
