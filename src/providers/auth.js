import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_GET_PERMISSIONS
} from "react-admin";
import { AUTH_CHECK, GET_LIST } from "ra-core";
import data from "./data";
import { PENGGUNA } from "../resources/pengguna/consts";
import storage from "../helpers/storage";

export default async (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;

    await data(GET_LIST, PENGGUNA.res, {
      pagination: { page: 1, perPage: 1 },
      sort: { field: PENGGUNA.field.id.res, order: "ASC" },
      filter: { nrp: username, kata_sandi: password }
    }).then(res => {
      const pengguna = res.data[0];

      if (pengguna) {
        storage.set(pengguna);
      } else {
        Promise.reject();
      }
    });

    return Promise.resolve();
  }

  if (type === AUTH_LOGOUT) {
    storage.clear();
    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    const status = params.status;
    if (status === 401 || status === 403) {
      storage.clear();
      return Promise.reject();
    }
    return Promise.resolve();
  }

  if (type === AUTH_CHECK) {
    return storage.get() ? Promise.resolve() : Promise.reject();
  }

  if (type === AUTH_GET_PERMISSIONS) {
    const pengguna = storage.get();
    return pengguna ? Promise.resolve(pengguna) : Promise.reject();
  }

  return Promise.reject("Unknown method");
};
