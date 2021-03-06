import { Module } from "vuex";
import { IRoutinesState } from "./types";
import { IRootState } from "../../types";

import {actions} from "./actions";
import {mutations} from "./mutations";
import {getters} from "./getters";

export const state: IRoutinesState = {
  current_routine: -1,
  routine_settings_open: false,
  new_routine_open: false,
  routineGraph: -1,
  loaded: false,
  items: [],
};

const namespaced: boolean = true;

export const routines: Module<IRoutinesState, IRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
