import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import JournalEntryCard from './JournalEntryCard';
import Loading from './Loading';
import CreateExercise from '../Forms/CreateExercise';
import EditExercise from '../Forms/EditExercise';

const JournalEntry = () => {
    const [loading, setLoading] = useState(true);
    const [exercises, setExercises] = useState([]);

    const [editing, setEditing] = useState(false);
    const initialExerciseState = useState({id: '', name: '', reps: '', sets: '', weight: ''});
    const [currentExercise, setCurrentExercise] = useState(initialExerciseState);

    const { id } = useParams();

    // Edit exercise
    const editExercise = exercise => {
        setEditing(true);
        setCurrentExercise({id: exercise.id, name: exercise.name, reps: exercise.reps, sets: exercise.sets, weight: exercise.weight})
    }
    // Update exercise
    const updatedExercise = (id, updatedExercise) => {
        setEditing(false);
        setExercises(exercises.map(exercise => (exercise.id === id ? updatedExercise : exercise)))
    }

    // Add new exercise
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
    // Remove Exercise
    const removeExercise = id => {
        setExercises(exercises.filter(exercise => exercise.id !== id))
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
            {editing ? (
                <EditExercise 
                editing={editing}
                setEditing={setEditing}
                currentExercise={currentExercise}
                updatedExercise={updatedExercise}
                />
            ) : (
                <CreateExercise 
                addNewExercise={addNewExercise}
                />
            )}
            {exercises.map(exercise => (
                <JournalEntryCard
                key={exercise.id}
                id={exercise.id}
                name={exercise.name}
                reps={exercise.reps}
                sets={exercise.sets}
                weight={exercise.weight}
                exercise={exercise}
                removeExercise={removeExercise}
                editExercise={editExercise}
                />
            ))}
        </div>
    )
}

export default JournalEntry;