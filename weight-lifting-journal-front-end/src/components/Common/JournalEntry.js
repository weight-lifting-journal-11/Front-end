import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import JournalEntryCard from './JournalEntryCard';
import Loading from './Loading';
import CreateExercise from '../Forms/CreateExercise';

const JournalEntry = () => {
    const [loading, setLoading] = useState(true);
    const [exercises, setExercises] = useState([]);

    const { id } = useParams();

    const addNewExercise = (exercise) => {
        const newExercise = {
            id: exercise.id,
            name: exercise.name,
            reps: exercise.reps,
            sets: exercise.sets,
            weight: exercise.weight
        }
        setExercises([...exercises, newExercise])
    }
    
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
            <CreateExercise 
            addNewExercise={addNewExercise}
            />
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