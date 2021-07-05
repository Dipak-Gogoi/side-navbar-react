import React from 'react';
import './LessonPlan.css';

const LessonPlan = () => {
    return (
        <div>
            <div className='top-header'>
            </div>
            <div className='section'>
                <div className='section-header'>
                    <div className='video-icon'>
                        <i className="bi bi-play-fill"></i>
                    </div>
                    <span>Videos</span>
                </div>
                <div className='section-input'>
                    <div className='input-text'>
                        <input type='text' placeholder='Insert URL here' />
                    </div>
                    <h1>or</h1>
                    <div className='upload-div'>
                        upload
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LessonPlan
