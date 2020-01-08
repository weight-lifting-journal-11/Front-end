import React from 'react';
import { Link } from 'react-router-dom';

const JournalCard = ({date, region, id, removeJournal, editJournal, journal}) => {

    return (
        <div>
            <Link to={`/dashboard/${id}`}>
                <h4>Workout: {region}</h4>
            </Link>
            <h5>Date: {date}</h5>
            <button onClick={() => removeJournal(id)}>Delete</button>
            {console.log('id from inside journalCard', id)}
            <button onClick={() => editJournal(journal)}>Edit</button>
        </div>
    )
}

export default JournalCard