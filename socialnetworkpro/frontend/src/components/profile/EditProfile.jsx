import React, { useState } from 'react';

const EditProfile = ({ user, onProfileUpdate }) => {
    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleArrayChange = (e, key) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            [key]: value.split(',')
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onProfileUpdate(formData);
    };

    return (
        <form className="edit-profile" onSubmit={handleSubmit}>
            <div>
                <label>Nom :</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Poste :</label>
                <input 
                    type="text" 
                    name="jobTitle" 
                    value={formData.jobTitle} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Compétences :</label>
                <input 
                    type="text" 
                    name="skills" 
                    value={formData.skills.join(',')} 
                    onChange={(e) => handleArrayChange(e, 'skills')} 
                />
            </div>
            <div>
                <label>Projets en cours :</label>
                <input 
                    type="text" 
                    name="projects" 
                    value={formData.projects.join(',')} 
                    onChange={(e) => handleArrayChange(e, 'projects')} 
                />
            </div>
            <div>
                <label>Intérêts professionnels :</label>
                <input 
                    type="text" 
                    name="interests" 
                    value={formData.interests.join(',')} 
                    onChange={(e) => handleArrayChange(e, 'interests')} 
                />
            </div>
            <button type="submit">Sauvegarder les modifications</button>
        </form>
    );
};

export default EditProfile;
