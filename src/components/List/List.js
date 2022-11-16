import React, { useState } from 'react';
import './List.css';
import person from '../../images/person.jpg'

const List = (props) => {
    const [breakTime,setBreakTime] = useState(0)
    const {list} = props;
    let totalTime = 0;
    for(const info of list){
        totalTime = totalTime + info.time;
    }

    const setBreak = (time) => {
        setBreakTime(time);
    }

    return (
        <div className='list'>
            <div className='personal-info'>
                <img src={person} alt="" />
                <div>
                    <h3>Mark Taylor</h3>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='physical-info'>
                <div>
                    <h2>75kg</h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>6.5</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>25yrs</h2>
                    <p>Age</p>
                </div>
            </div>
            <h2>Add A Break</h2>
            <div className='break-info'>
                <h3 onClick={() => setBreak(10)}>10</h3>
                <h3 onClick={() => setBreak(20)}>20</h3>
                <h3 onClick={() => setBreak(30)}>30</h3>
                <h3 onClick={() => setBreak(40)}>40</h3>
            </div>
            <h2>Exercise Details</h2>
            <div className="exercise-time">
                <h3>Exercise Time</h3>
                <p>{totalTime} seconds</p>
            </div>
            <div className="break-time">
                <h3>Break Time</h3>
                <p>{breakTime}</p>
            </div>
        </div>
    );
};

export default List;