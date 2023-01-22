import React from 'react'
import "./My.css";

function My() {
    return (
        <div className='my'>
            <img className='my-avatar' src="../../../images/Mohammadjt2.png" alt="avatar" />
            <input className='my-input' type="text" placeholder='Start a discussion' />
        </div>
    )
}

export default My