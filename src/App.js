import PersonForm from "./components/PersonForm"

const App = ( props  ) => {



  return (
    <div>
      <h2>Phonebook</h2>

      {/*<Filter />*/}

      <h3>Add a new</h3>

      <PersonForm props={props} /> 

      <h3>Numbers</h3>

      {/*<Persons />*/}
    </div>
  )
}

export default App