// use local storage to manage break time data
const addToDb = id =>{
    let breakTime = {};

    //get the time from local storage
    const storedTime = localStorage.getItem('break-time');
    if(storedTime){
        breakTime = JSON.parse(storedTime);
    }

    // add time
    const time = breakTime[id];
    if(time){
        const newTime = time + 1;
        breakTime[id] = newTime;
    }
    else{
        breakTime[id] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breakTime));
}

const removeFromDb = id =>{
    const storedTime = localStorage.getItem('break-time');
    if(storedTime){
        const breakTime = JSON.parse(storedTime);
        if(id in breakTime){
            delete breakTime[id];
            localStorage.setItem('break-time', JSON.stringify(breakTime));
        }
    }
}

const deleteBreakTime = () =>{
    localStorage.removeItem('break-time');
}

export {
    addToDb, 
    removeFromDb,
    deleteBreakTime
}