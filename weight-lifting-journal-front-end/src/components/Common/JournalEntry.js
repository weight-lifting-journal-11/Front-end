import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JournalEntry = () => {
    const [loading, setLoading] = useState(true);
    const [exercises, setExercises] = useState([]);

    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);

        axios
        .get()
        .then(response => {
            console.log(response);

        })
        .catch(error => console.log(error))

    }, [id])

    return (
        <div>Journal Entry</div>
    )
}

export default JournalEntry;