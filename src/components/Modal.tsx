import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IPerson, IStore } from '../types';
import { setPerson, switchModal } from '../store/actions'
import { useEffect } from 'react';
import { setPeople } from '../store/actions'

type modalTypes = {
  modalStatus?: boolean,
  setModalStatus?: any,
  personIdToEdit?: null | string
}

const Modal = ({ modalStatus, setModalStatus, personIdToEdit}: modalTypes): JSX.Element => {
  const dispatch = useDispatch();

  const people = useSelector((store: IStore)=> store.people)

  const currentPerson = people.find((person: IPerson)=> String(person.id) == String(personIdToEdit))

  const [name, setName] = useState('')
  const [age, setAge] = useState<string>('')


  useEffect(()=>{
    if(personIdToEdit){
      setName(currentPerson!.name)
      setAge(currentPerson!.age)
    }
  }, [personIdToEdit])



  const onChangeNameHandler=(e: any)=>{
    setName(e.target.value)
  }

  const onChangeAgeHandler=(e: any)=>{
    setAge(e.target.value)
  }

  const onFormSubmitHandler=(e: React.FormEvent)=>{
    e.preventDefault()
    if(!personIdToEdit){
      dispatch(setPerson({name, age, id: String(Date.now())}))
    }else{
      const newPeople = people.map((person: IPerson)=>{
        if(person.id !== personIdToEdit) return person
        return { name, age, id: personIdToEdit}
      })
      dispatch(setPeople(newPeople))
    }
    setModalStatus(false)
    setName('')
    setAge('')
  }


  if(modalStatus){

    return(
      <form className='modal' onSubmit={(e)=>onFormSubmitHandler(e)}>
        name<input type="text" value ={name} onChange={(e)=>onChangeNameHandler(e)}></input>
        age<input type="text" value={age} onChange={(e)=>onChangeAgeHandler(e)}></input>
        <button type='submit'>submit</button>
     </form>
    )

  }

  return <></>


};

export default React.memo(Modal);