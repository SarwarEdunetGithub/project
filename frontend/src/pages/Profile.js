import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../api";

function Profile({ user, setUser }) {
  const [phone, setPhone] = useState(user?.phone || "");
  const [image, setImage] = useState(user?.profileImage || "");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await getProfile(token);
        setUser(res.data);
        setPhone(res.data.phone);
        setImage(res.data.profileImage);
      }
    };
    fetchProfile();
  }, [setUser]);

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("phone", phone);
    if (selectedImage) {
      formData.append("profileImage", selectedImage);
    }

    try {
      const token = localStorage.getItem("token");
      const res = await updateProfile(token, formData);
      setUser(res.data);
      alert("Profile updated successfully!");  // ✅ Show success message
      navigate("/");  // ✅ Redirect to Home Page
    } catch (error) {
      alert("Failed to update profile. Please try again.");  // ❌ Show error message
    }
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      {image && <img src={`https://project-l5p8.onrender.com/${image}`} alt="Profile" className="img-thumbnail" width="150" />}
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <input type="file" className="form-control" onChange={handleImageUpload} />
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
