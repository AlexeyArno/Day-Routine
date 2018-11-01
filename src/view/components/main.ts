import Vue from 'vue'
import Component from 'vue-class-component'
import {State} from 'vuex-class'


import HeaderComponent from "./header/header";
import NowComponent from "./now/now";
import RoutinesComponent from "./routines/routines";
import DeadZonesComponent from "./dead_zones/dead_zones"
import ModalsComponent from './modals/modals'

import * as WithRender from './main.html';

const namespace:string = 'app'

@WithRender 
@Component({
  components:{
    HeaderComponent,
    NowComponent,
    RoutinesComponent,
    ModalsComponent,
    DeadZonesComponent
  }
})
export default class MainComponent extends Vue {
  @State('menu_active_item', {namespace}) menuActiveItem: any;
  @State('popup_open', {namespace}) popup_open: any;

  style = {
    filter: "blur(5px)"
  }
  // @Action('newRoutineWindow', { namespace }) newRoutineWindow: any;
  // @Action('routineSettingsWindow', { namespace }) routineSettingsWindow: any;



}