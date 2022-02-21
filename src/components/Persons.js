import Person from "./Person";
import { useState } from 'react';

const Persons = (props) => {

    const [showAll, setShowAll] = useState(true)

    const personsToShow = showAll
    ? props.persons
    : props.persons.filter(person => person.show)

    return(
       
        <div>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all' }
            </button>
        
            <ul>
                {personsToShow.map(person => 
                <Person key={person.id} person={person} />
                )}
            </ul>
        </div>

    )

}

export default Persons;