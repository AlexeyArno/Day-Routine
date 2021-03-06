import { Module } from "vuex";
import {IDeadZone} from "src/models/dead_zone";
import { IDeadZoneState } from "./types";

import {getters} from "./getters";
import {actions} from "./actions";
import {mutations} from "./mutations";
import { IRootState } from "../../types";

// const dz: IDeadZone[] = [
//   {
//     ID: 0,
//     start: 0,
//     done: 10,
//     enable: true,
//     name: "Sleep",
//     disabled_days: [0, 3],
//   },
//   {
//     ID: 1,
//     start: 13,
//     done: 14,
//     enable: false,
//     name: "Deener",
//     disabled_days: [],
//   },
// ];

export const state: IDeadZoneState = {
    currentItem: -1,
    items: [],
};

const namespaced: boolean = true;

export const deadZones: Module<IDeadZoneState, IRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

// interface IDeadZoneModule{
//   currentItem:number,
//   items:Array<DeadZone>
// }

// const DeadZonesModule:Module<any,IDeadZoneModule> = {
//   state: {
//     currentItem: -1,
//     items: deadZones,

//    },
//   actions:{
//     SetCurrentItem({commit}, number:number) {
//       commit('SET_ACTIVE_ITEM', number)
//     },
//     NewDeadZone({commit}) {
//       // HERE
//       commit('CREATE_NEW_DEAD_ZONE')
//     },

//   },
//   mutations: {
//     SET_ACTIVE_ITEM:(state, {number}) => {
//       state.currentItem = number
//     },
//     CREATE_NEW_DEAD_ZONE:(state)=>{

//     }
//   },

// }

// export default DeadZonesModule
