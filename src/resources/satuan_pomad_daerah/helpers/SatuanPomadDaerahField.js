import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReferenceField, TextField } from "react-admin";
import { SATUAN_POMAD_DAERAH } from "../consts";

class SatuanPomadDaerahField extends Component {
  render() {
    const { record, ...props } = this.props;

    return record && record[props.source] ? (
      <ReferenceField record={record} {...props}>
        <TextField source={SATUAN_POMAD_DAERAH.field.nama.res} />
      </ReferenceField>
    ) : (
      "-"
    );
  }
}

SatuanPomadDaerahField.propTypes = {
  record: PropTypes.object
};

SatuanPomadDaerahField.defaultProps = {
  addLabel: true
};

export default SatuanPomadDaerahField;
