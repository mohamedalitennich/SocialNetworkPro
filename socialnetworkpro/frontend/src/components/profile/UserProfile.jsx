import React, { useState } from 'react';
import EditProfile from './EditProfile';
import ProfilePictureUpload from './ProfilePictureUpload';

const UserProfile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        jobTitle: "Software Engineer",
        skills: ["JavaScript", "React", "Node.js"],
        projects: ["Project A", "Project B"],
        interests: ["Web Development", "Machine Learning"],
        profilePicture: "/path/to/default/profile/picture.jpg"
    });

    const handleProfileUpdate = (updatedUser) => {
        setUser(updatedUser);
    };

    return (
        <div className="user-profile">
            <div className="profile-header">
                <ProfilePictureUpload 
                    profilePicture={user.profilePicture}
                    onProfilePictureChange={(newProfilePicture) => setUser({...user, profilePicture: newProfilePicture})}
                />
                <h1>{user.name}</h1>
                <h2>{user.jobTitle}</h2>
            </div>
            
            <div className="profile-details">
                <h3>Compétences</h3>
                <ul>
                    {user.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>

                <h3>Projets en cours</h3>
                <ul>
                    {user.projects.map((project, index) => <li key={index}>{project}</li>)}
                </ul>

                <h3>Intérêts professionnels</h3>
                <ul>
                    {user.interests.map((interest, index) => <li key={index}>{interest}</li>)}
                </ul>
            </div>
            
            <EditProfile user={user} onProfileUpdate={handleProfileUpdate} />
        </div>
    );
};

export default UserProfile;
