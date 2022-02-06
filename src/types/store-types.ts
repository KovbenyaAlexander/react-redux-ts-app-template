
export interface IStore {
  counter: number
  dataFromApi: IUser[]
  shouldShowModal: boolean
  people: IPerson[]
}

export interface IPerson{
  name: string
  age: string
  id: string
}

export interface IUser{
  title: string
  id: number
}
