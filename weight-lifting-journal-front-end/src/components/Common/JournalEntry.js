import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import JournalEntryCard from './JournalEntryCard';
import Loading from './Loading';

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
            setLoading(false)
            setExercises(response.data);
        })
        .catch(error => console.log(error))

    }, [id])

    if (loading) return <Loading />

    return (
        <div>
            <h1>Add exercise</h1>
            <form>
                <label>Name:</label>
                <input />
                <label>Reps:</label>
                <input />
                <label>Sets:</label>
                <input />
                <label>Weight:</label>
                <input />
            </form>
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