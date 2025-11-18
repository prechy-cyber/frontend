// src/components/Card.jsx
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="card" style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      width: "250px",
      padding: "15px",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "10px", height: "150px", objectFit: "cover" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
