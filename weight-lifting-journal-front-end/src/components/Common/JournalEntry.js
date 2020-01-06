import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import JournalEntryCard from './JournalEntryCard';

const JournalEntry = () => {
    const [loading, setLoading] = useState(true);
    const [exercises, setExercises] = useState([]);

    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);

        axios
        .get(`https://weight-lifting-journal-11.herokuapp.com/api/exercises/journals/${id}`)
        .then(response => {
            console.log(response);
            setExercises(response.data);
        })
        .catch(error => console.log(error))

    }, [id])

    return (
        <div>
            {exercises.map(exercise => (
                <JournalEntryCard
                key={exercise.id}
                name={exercise.name}
                reps={exercise.reps}
                sets={exercise.sets}
                weight={exercise.weight}
                />
            ))}
        </div>
    )
}

export default JournalEntry;