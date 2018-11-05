import {IRoutinesStorage} from '../../interfaces/storage'
import {IStorageKernel} from '../../interfaces/storageKernel'

import {Routine} from 'src/models/routines.routine'

import StorageModule from './module'

export class Routines extends StorageModule implements IRoutinesStorage {

  private addToStatics:Function;
  private deleteFromStatics:Function;

  constructor(kernel:IStorageKernel, schema:StorageSchema.ISchema,
      addToStatics:Function,
      deleteFromStatics:Function,
      changeCallback:Function){
    super(kernel,schema, changeCallback)
    this.addToStatics = addToStatics
    this.deleteFromStatics = deleteFromStatics
  }

  async Get(){
    let rows:{[key:number]:any} = await this.kernel.Table().GetByName(this.schema.name).Get()
    if(Object.keys(rows).length==0) return [];
    let crows:Array<any> = Object.keys(rows).map((v,i) => rows[i]);
    let units:Array<Routine> = crows.map((el:Routines)=>this.schema.Deserialization(el))
    return units
  }

  async Create(unit:Routine){
    let dunit = this.schema.Serialization(unit)
    let id:number = await this.kernel.Table().GetByName(this.schema.name).Insert(dunit)
    await this.addToStatics({routineID:id, hours:0})
    this.changeCallback()
  }

  async Delete(unit:any){
    // let rows:{[key:number]:any} = await this.kernel.Table().GetByName(this.schema.name).Get(unit)
    // if(Object.keys(rows).length==0) return;
    // console.log(rows)
    // We don't use serialization cause serialization
    // doesn't process ID , but we need ID for delete
    // certain row
    this.deleteFromStatics(unit)
    this.kernel.Table().GetByName(this.schema.name).Delete(unit)
    this.changeCallback()
  }

  Update(unit:Routine){
    this.kernel.Table().GetByName(this.schema.name).Update(unit)
    this.changeCallback()
  }
}