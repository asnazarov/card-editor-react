import {EDIT_USER} from "../constants";
import {CreateUserType} from "../../constants/types";

export type patchEditUserType = {
  type: typeof EDIT_USER,
  payload: CreateUserType
}

export const patchEditUser = (data : patchEditUserType) : patchEditUserType => ({
  type: EDIT_USER,
  payload: data.payload
})