
"use client"
import React, { useState } from "react";

function FormEvent() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleFormSubmit = () => {
    
    setPopupVisible(false);
  };

  return (
    <div 
    style={{
      display: "flex",
      justifyContent: "flex-end", // Aligns the button to the right
      paddingTop: "30px",

    }}
  >
    <button
      style={{
        padding: "10px 20px", // Adds padding inside the button
        backgroundColor: "#3498db", // Optional: Adds styling for the button
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      onClick={handleButtonClick}
    >
      Create Event
    </button>
  
      {isPopupVisible && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px",
            backgroundColor: "#fff",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch", // Make children expand horizontally
            justifyContent: "center", // Center the form
            width: "70%",
            maxWidth: "300px", // Max width for responsive form
            borderRadius: "12px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional box shadow for depth
          }}
        >
          <form onSubmit={handleFormSubmit} style={{ padding: "20px" }}>
            <div style={{ paddingBottom: "16px" }}>
              <label>
                Event Name:
                <input
                  type="text"
                  required
                  style={{ marginLeft: "8px", padding: "8px", width: "100%" }}
                />
              </label>
            </div>
  
            <div style={{ paddingBottom: "16px" }}>
              <label>
                Description:
                <input
                  type="text"
                  required
                  style={{ marginLeft: "8px", padding: "8px", width: "100%" }}
                />
              </label>
            </div>
  
            <div style={{ paddingBottom: "16px" }}>
              <label>
                Duration (in minutes):
                <input
                  type="number"
                  min="1"
                  step="1"
                  required
                  placeholder="Enter duration in minutes"
                  style={{ marginLeft: "8px", padding: "8px", width: "100%" }}
                />
              </label>
            </div>
  
            <div style={{ paddingBottom: "16px" }}>
              <label>
                Start Time:
                <input
                  type="time"
                  required
                  style={{ marginLeft: "8px", padding: "8px", width: "100%" }}
                />
              </label>
            </div>
  
            <div style={{ paddingBottom: "16px" }}>
              <label>
                Image URL:
                <input
                  type="url"
                  required
                  placeholder="Enter a valid URL"
                  style={{ marginLeft: "8px", padding: "8px", width: "100%" }}
                />
              </label>
            </div>
  
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#3498db",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  width: "48%",
                  marginRight: "4%",
                }}
              >
                Submit
              </button>
  
              <button
                type="button"
                onClick={() => setPopupVisible(false)}
                style={{
                  backgroundColor: "#e74c3c",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  width: "48%",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
  
      {/* Optional overlay for aesthetics */}
      {isPopupVisible && (
        <div
          onClick={() => setPopupVisible(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        ></div>
      )}
    </div>
  );
}  
export default FormEvent