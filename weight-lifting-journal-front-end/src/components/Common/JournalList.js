import React, { useEffect, useState} from 'react';
import axios from 'axios';

import Loading from './Loading';
import JournalCard from './JournalCard';

const JournalList = () => {
    // Set state for api data
    const [journals, setJournals] = useState([]);
    // Set state for loading
    const [loading, setLoading] = useState(true)

    // axios call
    useEffect(() => {
        setLoading(true)
        axios
        .get()
        .then(response => {
            setLoading(false);
            console.log(response)
        })
        .catch(error => console.log(error))
    }, [])

    if (loading) return <Loading />

    return (
        
        <div>
            // CreateJournal form to create a new workout
            <h1>Journal list</h1>
            {journals.map(journal => (
                <JournalCard />
            ))}
            // map over data and return a JournalCard
        </div>
    )
}

export default JournalList;