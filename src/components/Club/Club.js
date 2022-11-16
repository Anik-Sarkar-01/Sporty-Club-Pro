import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import List from '../List/List';
import './Club.css';

const Club = () => {
    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handleAddToList = (exercise) => {
        const newList = [...list, exercise];
        setList(newList);
    }

    return (
        <div className='club-container'>

            <div className="exercises-container">
                <Header></Header>
                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        handleAddToList={handleAddToList}
                        exercise={exercise}
                    ></Exercise>)
                }
            </div>
            <div className="info-container">
                    <List list={list}></List>
            </div>
        </div>
    );
};

export default Club;