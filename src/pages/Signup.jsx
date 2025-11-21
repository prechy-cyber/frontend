
import React, { useState } from "react";
import styled from "styled-components";
import API from "../api"; 
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
console.log("🌐 Using API URL:", API.defaults.baseURL);

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/user/register", {
        firstName,
        lastName,
        email,
        password
      });

      console.log("Signup response:", response.data);

      alert("Signup successful! Please login.");
      navigate("/signin");

    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSignup}>
        <h1>Sign Up</h1>

        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </StyledWrapper>
  );
};


// Styled-components
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8f9fa;
  font-family: "Poppins", sans-serif;
  padding: 20px;

  form {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  input {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  button {
    background: #007bff;
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #0056b3;
  }

  button:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

export default Signup;