import Person from "./Person";
import { useState } from 'react';

const Persons = (props) => {

    return(
       
        <div>
            <ul>
                {props.persons.map(person => 
                <Person key={person.id} person={person} />
                )}
            </ul>
        </div>

    )

}

export default Persons;