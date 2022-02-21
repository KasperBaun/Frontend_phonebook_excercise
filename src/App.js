import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import { useState } from 'react';

const App = ( props  ) => {
const [persons, setPersons] = useState(props.persons)
const [personsToShow, setPersonsToShow] = useState(props.persons)


  return (
    <div>
      <h2>Phonebook</h2>

      <h3>Add a person</h3>
      <PersonForm persons = { persons} setPersons={ setPersons } /> 

      <Filter persons = { persons } setPersons = { setPersonsToShow} />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} />
    </div>
  )
}

export default App