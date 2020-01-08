import React from 'react';
import { Link } from 'react-router-dom';

const JournalCard = ({date, region, id, removeJournal, editJournal, journal}) => {

    return (
        <div>
            <Link to={`/dashboard`}>
                <h1>Workout: {region}</h1>
            </Link>
            <h2>Date: {date}</h2>
            <button onClick={() => removeJournal(id)}>Delete</button>
            <button onClick={() => editJournal(journal)}>Edit</button>
        </div>
    )
}

export default JournalCard