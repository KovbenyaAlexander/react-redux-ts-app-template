import React, {useState} from 'react';
import Counter from './components/Counter';
import Async from './components/Async';
import './style.scss';
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { switchModal } from './store/actions';
import { IPerson, IStore } from './types';

const App = (): JSX.Element => {

  const people = useSelector((store: IStore)=> store.people)
  const [modalStatus, setModalStatus] = useState(false)
  const [personIdToEdit, setPersonIdToEdit] = useState<null | string>(null)
  const dispatch = useDispatch()

  const onClickHandler=()=>{
    setPersonIdToEdit(null)
    setModalStatus(true)
  }

  const onEditButtonHandler=(id: string)=>{
    setPersonIdToEdit(id)
    setModalStatus(true)
    
  }

  return (
    <div className="app">
      {/* <Counter />
      <hr />
      <Async /> */}
  
      <button type="button" onClick={onClickHandler}>add</button>


      <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} personIdToEdit={personIdToEdit}/>


      {people.map((person: IPerson)=> {
        return (
          <div key={person.id}>
          <span>{person.name}</span>
          {' '}
          <span>{person.age}</span>
          <button type="button" onClick={()=>onEditButtonHandler(person.id)}>Edit</button>
          <hr />
        </div>
        )
      })}
    </div>
  )
}

export default App;
