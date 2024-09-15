// src/pages/ResumeBuilder.js
import React, { useState } from 'react';

const ResumeBuilder = () => {
    const [resumeData, setResumeData] = useState({
        fullName: '',
        email: '',
        phone: '',
        education: [],
        workExperience: [],
        skills: [],
    });

    const handleInputChange = (e) => {
        setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    };

    const handleAddSkill = () => {
        setResumeData({ ...resumeData, skills: [...resumeData.skills, ''] });
    };

    const handleSubmit = async () => {
        // Submit the resume data to backend
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={resumeData.fullName}
                onChange={handleInputChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={resumeData.email}
                onChange={handleInputChange}
            />
            {/* More fields for education, experience, etc. */}
            <button onClick={handleSubmit}>Save Resume</button>
        </div>
    );
};

export default ResumeBuilder;
