// use local storage to manage break time data
const addToDb = b_time => {
    let breakTime = {};
    //get the time from local storage
    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        breakTime = JSON.parse(storedTime);
    }
    // add time
    const time = breakTime[b_time];
    if (time) {
        const newTime = time + 1;
        breakTime[b_time] = newTime;
    }
    else {
        breakTime[b_time] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breakTime));
}

const getStoredTime = () => {
    let breakTime = {};
    //get the time from local storage
    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        breakTime = JSON.parse(storedTime);
    }
    return breakTime;
}

const deleteBreakTime = () => {
    localStorage.removeItem('break-time');
}

export {
    addToDb,
    getStoredTime,
    deleteBreakTime
}