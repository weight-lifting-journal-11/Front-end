import React, { useEffect, useState} from 'react';
import axios from 'axios';

import Loading from './Loading';
import JournalCard from './JournalCard';

const JournalList = () => {
    // Set state for api data
    const [journals, setJournals] = useState([]);
    // Set state for loading
    const [loading, setLoading] = useState(true)

    // Get todays date in mm/dd/yyyy format
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    today = `${month}/${day}/${year}`;

    // State for form
    const [journal, setJournal] = useState({
        id: '',
        userId: '',
        date: today,
        region: ''
    })
    // Handle input change
    const handleChange = event => {
        setJournal({
            ...journal,
            [event.target.name]: event.target.value
        })
        console.log(journal)
    }
    // Handle form submit
    const handleSubmit = event => {
        event.preventDefault();
        addNewJournal(journal)
        setJournal({
            id: '',
            userId: '',
            date: today,
            region: ''
        })
    }
    // Add new journal to state
    const addNewJournal = journal => {
        const newJournal = {
            id: journal.id,
            userId: journal.userId,
            date: today,
            region: journal.region
        }
        setJournals([...journals, newJournal]);
    }
    // axios call
    useEffect(() => {
        setLoading(true)
        axios
        .get('https://weight-lifting-journal-11.herokuapp.com/api/journals/users/7')
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
            <h1>Journal list</h1>
            <h2>Add Journal Entry</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                onChange={handleChange}
                name="region"
                type="text"
                value={journal.region}
                />
                <button type="submit">Submit</button>
            </form>
            {journals.map(journal => (
                <JournalCard 
                key={journal.id} 
                date={journal.date} 
                region={journal.region}
                id={journal.id}
                />
            ))}
        </div>
    )
}

export default JournalList;