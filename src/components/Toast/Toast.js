import React from 'react';
import './Toast.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const notify = () => toast.success('Wow, Congratulations!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    return (
        <div className='activity-btn-container'>
            <button className='activity-btn' onClick={notify}><p>Activity Completed!</p></button>
            <ToastContainer />
        </div>
    );
};

export default Toast;