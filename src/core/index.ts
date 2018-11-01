import {IStorage} from "src/interfaces/storage"

import {
  ICore,
  IScheduleCore,
  ISettingsCore,
  IRoutinesCore,
  IDeadZonesCore
} from 'src/interfaces/core'

import {ICash} from 'src/interfaces/cash'

import {ScheduleCore} from './modules/schedule'
import {SettingsCore} from "./modules/settings";
import { IOS } from "src/interfaces/os";
import { OS } from "src/os";

export class Core implements ICore{
  private Storage:IStorage
  private Cash:ICash

  private ScheduleModule:IScheduleCore
  private SettingsModule:ISettingsCore
  private os:IOS

  constructor(storage: IStorage, cash:ICash) {
    this.Storage = storage;
    this.Cash = cash

    this.ScheduleModule = new ScheduleCore(this.Storage)
    this.SettingsModule = new SettingsCore(this.Storage)
    this.os = new OS(this)
  }

  public Routines():IRoutinesCore{
    return this.Storage.Routines()
  }

  public DeadZones():IDeadZonesCore{
    return this.Storage.DeadZones()
  }

  public Schedule():IScheduleCore{
    return this.ScheduleModule
  }

  public Settings():ISettingsCore{
    return this.SettingsModule
  }
}