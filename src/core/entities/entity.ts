
import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<Props> {
  private _id: UniqueEntityID
  protected props: Props

  get id() {
    return this._id
  }

  constructor(props: Props, id?: string | UniqueEntityID) {
    this.props = props
    this._id = id instanceof UniqueEntityID ? id : new UniqueEntityID(id)
  }

  public equals(entity: Entity<unknown>){
    if(entity === this){
      return true
    }

    if(entity.id === this._id){
      return true
    }

    return false
  }
}
