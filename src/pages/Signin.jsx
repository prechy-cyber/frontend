import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://backenddeplytest.onrender.com/user/signin",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Signin response:", response.data);
      // Send user ID or token as query param or context
      navigate("/dashboard", { state: { user: response.data.user } });
    } catch (error) {
      console.error(
        "Signin error:",
        error.response ? error.response.data : error.message
      );
      alert(
        `Login failed: ${
          error.response?.data?.message || "Invalid email or password."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSignin}>
        <h1>Sign In</h1>

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
          {loading ? "Signing in..." : "Sign In"}
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

export default Signin;


// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSignin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please enter both email and password!");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await axios.post(
//         "http://localhost:3000/user/signin",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("Signin response:", response.data);

//       // Store user info locally for dashboard
//       localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));

//       alert("✅ Login successful!");
//       navigate("/dashboard");
//     } catch (error) {
//       console.error(
//         "Signin error:",
//         error.response ? error.response.data : error.message
//       );
//       alert(
//         `Login failed: ${
//           error.response?.data?.message || "Invalid email or password."
//         }`
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StyledWrapper>
//       <form onSubmit={handleSignin}>
//         <h1>Sign In</h1>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Signing in..." : "Sign In"}
//         </button>
//       </form>
//     </StyledWrapper>
//   );
// };



// const StyledWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: #f8f9fa;
//   font-family: "Poppins", sans-serif;
//   padding: 20px;

//   form {
//     background: white;
//     padding: 30px;
//     border-radius: 12px;
//     box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//     width: 100%;
//     max-width: 400px;
//     display: flex;
//     flex-direction: column;
//   }

//   h1 {
//     text-align: center;
//     margin-bottom: 20px;
//     color: #333;
//   }

//   input {
//     padding: 10px;
//     margin-bottom: 15px;
//     border-radius: 8px;
//     border: 1px solid #ccc;
//     font-size: 16px;
//   }

//   button {
//     background: #007bff;
//     color: white;
//     padding: 10px;
//     font-size: 16px;
//     border: none;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: 0.3s;
//   }

//   button:hover {
//     background: #0056b3;
//   }

//   button:disabled {
//     background: #6c757d;
//     cursor: not-allowed;
//   }
// `;

// export default Signin;

// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SignUpp = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (!firstName || !lastName || !email || !password) {
//       alert("Please fill all fields!");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await axios.post(
//         "http://localhost:3000/user/register",
//         { firstName, lastName, email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("Signup response:", response.data);
//       alert("✅ Signup successful! Please log in.");
//       navigate("/signin");
//     } catch (err) {
//       console.error("Signup error:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "Signup failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StyledWrapper>
//       <form onSubmit={handleSignup}>
//         <h1>Sign Up</h1>

//         <input
//           type="text"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>
//       </form>
//     </StyledWrapper>
//   );
// };



// const StyledWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: #f8f9fa;
//   font-family: "Poppins", sans-serif;
//   padding: 20px;

//   form {
//     background: white;
//     padding: 30px;
//     border-radius: 12px;
//     box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//     width: 100%;
//     max-width: 400px;
//     display: flex;
//     flex-direction: column;
//   }

//   h1 {
//     text-align: center;
//     margin-bottom: 20px;
//     color: #333;
//   }

//   input {
//     padding: 10px;
//     margin-bottom: 15px;
//     border-radius: 8px;
//     border: 1px solid #ccc;
//     font-size: 16px;
//   }

//   button {
//     background: #007bff;
//     color: white;
//     padding: 10px;
//     font-size: 16px;
//     border: none;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: 0.3s;
//   }

//   button:hover {
//     background: #0056b3;
//   }

//   button:disabled {
//     background: #6c757d;
//     cursor: not-allowed;
//   }
// `;
// export default SignUpp;

// // import React, { useState } from "react";
// // import styled from "styled-components";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const Signin = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const navigate = useNavigate();

// //   const handleSignin = async (e) => {
// //     e.preventDefault();

// //     if (!email || !password) {
// //       setErrorMessage("Please enter both email and password!");
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       setErrorMessage("");

// //       // Call backend signin route
// //       const response = await axios.post(
// //         "http://localhost:3000/user/signin",
// //         { email, password },
// //         { headers: { "Content-Type": "application/json" } }
// //       );

// //       const loggedInUser = response.data.user; // user info from backend
// //       console.log("Logged in user:", loggedInUser);

// //       alert(`✅ Welcome ${loggedInUser.firstName}!`);
      
// //       // Navigate to dashboard with user info
// //       navigate("/dashboard", { state: { user: loggedInUser } });

// //     } catch (error) {
// //       console.error("Signin error:", error.response?.data || error.message);
// //       setErrorMessage(error.response?.data?.message || "Login failed. Try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <StyledWrapper>
// //       <form onSubmit={handleSignin}>
// //         <h1>Sign In</h1>

// //         {errorMessage && <p className="error">{errorMessage}</p>}

// //         <input
// //           type="email"
// //           placeholder="Enter your email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />

// //         <input
// //           type="password"
// //           placeholder="Enter your password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />

// //         <button type="submit" disabled={loading}>
// //           {loading ? "Signing in..." : "Sign In"}
// //         </button>
// //       </form>
// //     </StyledWrapper>
// //   );
// // };

// // export default Signin;

// // // Styled-components
// // const StyledWrapper = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   min-height: 100vh;
// //   background: #f8f9fa;
// //   font-family: "Poppins", sans-serif;
// //   padding: 20px;

// //   form {
// //     background: white;
// //     padding: 30px;
// //     border-radius: 12px;
// //     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
// //     width: 100%;
// //     max-width: 400px;
// //     display: flex;
// //     flex-direction: column;
// //   }

// //   h1 {
// //     text-align: center;
// //     margin-bottom: 20px;
// //     color: #333;
// //   }

// //   .error {
// //     color: red;
// //     margin-bottom: 15px;
// //     text-align: center;
// //   }

// //   input {
// //     padding: 10px;
// //     margin-bottom: 15px;
// //     border-radius: 8px;
// //     border: 1px solid #ccc;
// //     font-size: 16px;
// //   }

// //   button {
// //     background: #007bff;
// //     color: white;
// //     padding: 10px;
// //     font-size: 16px;
// //     border: none;
// //     border-radius: 8px;
// //     cursor: pointer;
// //     transition: 0.3s;
// //   }

// //   button:hover {
// //     background: #0056b3;
// //   }

// //   button:disabled {
// //     background: #6c757d;
// //     cursor: not-allowed;
// //   }
// // `;
