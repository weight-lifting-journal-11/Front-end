import React, { useState } from 'react';

const EditExercise = () => {
    const [exercise, setExercise] = useState()

    const handleInputChange = event => {
        const { name, value } = event.target;

        setExercise({...exercise, [name]: value })
    }
    return (
        <div>
            <form>

            </form>

        </div>
    )
}

export default EditExercise;