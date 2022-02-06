import { Actions, IPerson, IUser } from '../types';
import { AllActions } from './reducers';

export function increment(): AllActions {
  return {
    type: Actions.INC,
  };
}

export function decrement(): AllActions {
  return {
    type: Actions.DEC,
  };
}

export function setData(payload: IUser[]): AllActions {
  return {
    type: Actions.SET_DATA,
    payload,
  };
}

export function switchModal(payload: boolean): AllActions {
  return {
    type: Actions.SWITCH_MODAL,
    payload,
  };
}

export function setPerson(payload: IPerson): AllActions {
  return {
    type: Actions.SET_PERSON,
    payload,
  };
}

export function setPeople(payload: IPerson[]): AllActions {
  return {
    type: Actions.SET_PEOPLE,
    payload,
  };
}
