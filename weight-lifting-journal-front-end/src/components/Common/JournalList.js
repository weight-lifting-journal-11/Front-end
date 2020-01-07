import React, { useEffect, useState} from 'react';
import axios from 'axios';

import Loading from './Loading';
import JournalCard from './JournalCard';
import CreateJournal from '../Forms/CreateJournal'

const JournalList = () => {
    // Set state for api data
    const [journals, setJournals] = useState([]);
    // Set state for loading
    const [loading, setLoading] = useState(true);

    // Removes Journal
    const removeJournal = id => {
        setJournals(journals.filter(journal => journal.id !== id))
    }

    // axios call
    useEffect(() => {
        setLoading(true)
        axios
        .get(`https://weight-lifting-journal-11.herokuapp.com/api/journals/users/7`, {token: localStorage.getItem('token')})
        .then(response => {
            setLoading(false);
            setJournals(response.data)
            console.log(response)
        })
        .catch(error => console.log(error))
    }, [])

    if (loading) return <Loading />

    return (
        
        <div>
            // CreateJournal form to create a new workout
            <CreateJournal />
            <h1>Journal list</h1>
            {journals.map(journal => (
                <JournalCard 
                key={journal.id} 
                date={journal.date} 
                region={journal.region}
                id={journal.id}
                removeJournal={removeJournal}
                />
            ))}
        </div>
    )
}

export default JournalList;