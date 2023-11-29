import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Organizer.css";
import Button from '@mui/material/Button'; 

const OrganizerForm = () => {
  const initialOrganizerData = {
    name: "",
    description: "",
    category: "Select Category",
    address: "",
    email: "",
    contactNumber: "",
    website: "",
  };

  const resetFormData = () => {
    setOrganizerData({ ...initialOrganizerData });
    setErrorMessage("");
  };

  const [organizerData, setOrganizerData] = useState({
    ...initialOrganizerData,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [organizers, setOrganizers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setOrganizerData({ ...organizerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !organizerData.name ||
      !organizerData.description ||
      organizerData.category === "Select Category" ||
      !organizerData.address ||
      !organizerData.email ||
      !organizerData.contactNumber ||
      !organizerData.website
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (!isValidEmail(organizerData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!isValidPhoneNumber(organizerData.contactNumber)) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    try {
      if (editMode) {
        if (editIndex !== null) {
          await axios.put(
            `/api/organizers/${organizers[editIndex]._id}`,
            organizerData
          );
          setSuccessMessage("Organizer data updated successfully!");
          setEditMode(false);
          setEditIndex(null);
          resetFormData();
        }
      } else {
        await axios.post("/api/organizers", organizerData);
        setSuccessMessage("Organizer data saved successfully!");
        resetFormData();
      }

      fetchOrganizers();
    } catch (error) {
      setErrorMessage("Failed to save organizer data");
      console.error("Error saving organizer:", error);
    }
  };

  const removeOrganizer = async (index) => {
    try {
      await axios.delete(`/api/organizers/${organizers[index]._id}`);
      fetchOrganizers();
    } catch (error) {
      setErrorMessage("Failed to remove organizer");
      console.error("Error while removing the organizer:", error);
    }
  };

  const editOrganizer = (index) => {
    setOrganizerData(organizers[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const cancelEdit = () => {
    setEditMode(false);
    setEditIndex(null);
    setOrganizerData({
      name: "",
      description: "",
      category: "Select Category",
      address: "",
      email: "",
      contactNumber: "",
      website: "",
    });
    setSuccessMessage("");
  };

  const fetchOrganizers = async () => {
    try {
      const response = await axios.get("/api/organizers");
      setOrganizers(response.data);
    } catch (error) {
      console.error("Error fetching organizers:", error);
    }
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Basic phone number format validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  useEffect(() => {
    fetchOrganizers();
  }, []);

  return (
    <div>
      <h1>Organizer Information</h1>
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: "black" }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Organizer Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={organizerData.name}
          onChange={handleChange}
          placeholder="Organizer Name"
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={organizerData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={organizerData.category}
          onChange={handleChange}
          required
        >
          <option value="Select Category" disabled>
            Select Category
          </option>
          <option value="Category 1">Corporate</option>
          <option value="Category 2">Casual</option>
          <option value="Category 3">Institutional</option>
        </select>

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={organizerData.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={organizerData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <label htmlFor="contactNumber">Contact Number</label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={organizerData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
        />

        <label htmlFor="website">Official Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={organizerData.website}
          onChange={handleChange}
          placeholder="Official Website"
        />

        <button type="submit" className="button">{editMode ? "Update" : "Submit"}</button>
        {editMode && (
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>
      <br />

      <h2>Organizers</h2>
      <table className="organizer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Address</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {organizers.map((organizer, index) => (
            <tr key={index}>
              <td>{organizer.name}</td>
              <td>{organizer.description}</td>
              <td>{organizer.category}</td>
              <td>{organizer.address}</td>
              <td>{organizer.email}</td>
              <td>{organizer.contactNumber}</td>
              <td>
              <Button variant="contained" color="success" onClick={() => editOrganizer(index)} > Edit</Button>
              <Button variant="contained" color="error" onClick={() => removeOrganizer(index)} > Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganizerForm;
