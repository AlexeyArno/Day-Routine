import { ActionTree } from "vuex";
import { RootState } from "../../types";
import { IScheduleState } from "./types";
import { GetAPI } from 'src/view/external.api';

export const actions:ActionTree<IScheduleState, RootState> = {
  async loadSchedule({commit}){
    let schedule = await GetAPI().Schedule().Get()
    console.log(schedule)
    commit('loadedSchedule', {schedule})

  },
}