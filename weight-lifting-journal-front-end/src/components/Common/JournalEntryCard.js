import React from 'react';

const JournalEntryCard = ({name, reps, sets, weight}) => {

    return (
        <div>
            <h2>{name}</h2>
            <h3>Reps: {reps}</h3>
            <h3>Sets: {sets}</h3>
            <h3>Weight: {weight}</h3>
        </div>
    )
}

export default JournalEntryCard;