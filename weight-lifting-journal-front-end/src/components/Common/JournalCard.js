import React from 'react';

const JournalCard = ({date, region}) => {

    return (
        <div>
        // CreateExercise form to create new exercise to card

            <h1>Workout: {region}</h1>
            <h2>Date: {date}</h2>
            
        </div>
    )
}

export default JournalCard