import React, { useState } from 'react';

const ProfilePictureUpload = ({ profilePicture, onProfilePictureChange }) => {
    const [preview, setPreview] = useState(profilePicture);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                onProfilePictureChange(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-picture-upload">
            <img src={preview} alt="Profile" className="profile-picture" />
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
            />
        </div>
    );
};

export default ProfilePictureUpload;
