import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [profileData, setProfileData] = useState({
    name: 'Gimhani',
    email: 'gimhani@gmail.com',
    phone: '+94 77 123 4567',
    bio: 'Robot enthusiast and STEM educator. Love teaching kids about technology!',
    location: 'Colombo',
    joinDate: '2025-01-15',
  });

  const updateProfileImage = (imageUri) => {
    setProfileImage(imageUri);
  };

  const updateProfileData = (newData) => {
    setProfileData(newData);
  };

  return (
    <ProfileContext.Provider 
      value={{
        profileImage,
        profileData,
        updateProfileImage,
        updateProfileData,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
