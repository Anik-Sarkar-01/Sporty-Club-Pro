import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { img, name, time, age } = props.exercise;
    return (
        <div className='exercise-container'>
            <img src={img} alt="Exercise img" />
            <div className='exercise-info'>
                <p>{name}</p>
                <p>For Age : {age}</p>
                <p>Time required : {time}s</p>
            </div>
            <button onClick={ () => props.handleAddToList(props.exercise)} className='btn-list'>
                <p>Add To List </p>
            </button>
        </div>
        
    );
};

export default Exercise;