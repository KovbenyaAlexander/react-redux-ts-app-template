import { Actions, IStore, IUser, IPerson } from '../types';
import { initialStore } from './initialStore';

export type AllActions =
  { type: typeof Actions.INC } |
  { type: typeof Actions.DEC } |
  { type: typeof Actions.SET_DATA, payload: IUser[] } | 
  { type: typeof Actions.SWITCH_MODAL, payload: boolean } | 
  { type: typeof Actions.SET_PERSON, payload: IPerson } |
  { type: typeof Actions.SET_PEOPLE, payload: IPerson[] };

export default function reducer(state: IStore = initialStore, action: AllActions): IStore {

  // console.log(action)

  switch (action.type) {
    case Actions.INC:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case Actions.DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case Actions.SET_DATA:
      return {
        ...state,
        dataFromApi: action.payload,
      };
    case Actions.SWITCH_MODAL:
      return {
        ...state,
        shouldShowModal: action.payload
      };
    case Actions.SET_PERSON:
      return {
        ...state,
        people: [...state.people, action.payload]
      };

    case Actions.SET_PEOPLE:
      return {
        ...state,
        people: action.payload
      };

    default:
      return state;
  }
}
