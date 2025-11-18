import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get logged-in user from navigation state
  const location = useLocation();
  const loggedInUser = location.state?.user || { firstName: "User" };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/user/all-students");
        setStudents(response.data.data); // assuming backend returns { success:true, data: [...] }
      } catch (error) {
        console.error("Error fetching students:", error.response || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <StyledWrapper>
      <h1>Welcome, {loggedInUser.firstName}!</h1>
      <h2> this is the dashboard page</h2>

      {loading ? (
        <p>would you like to eat some apples...</p>
      ) : students.length === 0 ? (
        <p>oh no apples for you.</p>
      ) : (
        <div className="cards-container">
          {students.map((student, index) => (
            <div className="card" key={index}>
              <h3>{student.name}</h3>
              <p><strong>fruits:</strong> {student.class}</p>
              <p><strong>quantity:</strong> {student.occupation}</p>
              <p><strong>quality:</strong> {student.age}</p>
            </div>
          ))}
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 40px 20px;
  font-family: "Poppins", sans-serif;
  background: #f8f9fa;
  min-height: 100vh;

  h1 {
    color: #007bff;
    text-align: center;
    margin-bottom: 10px;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }

  .cards-container {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    max-width: 900px;
    margin: auto;
  }

  .card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card h3 {
    margin-bottom: 5px;
    color: #333;
  }

  .card p {
    margin: 5px 0;
    color: #555;
  }
`;

export default Dashboard;


// import styled from "styled-components";
// import axios from "axios";

// const Dashboard = () => {
//   const [allStudents, setAllStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {
//     firstName: "User",
//   };

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/user/all-students");
//         setAllStudents(response.data.data || []);
//       } catch (err) {
//         console.error("Error fetching students:", err.response?.data || err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudents();
//   }, []);

//   return (
//     <StyledWrapper>
//       <h1>Welcome, {loggedInUser.firstName}!</h1>
//       <h2>All Students</h2>

//       {loading ? (
//         <p>Loading students...</p>
//       ) : allStudents.length === 0 ? (
//         <p>No students found.</p>
//       ) : (
//         <div className="cards-container">
//           {allStudents.map((student, idx) => (
//             <div className="card" key={idx}>
//               <h3>{student.name}</h3>
//               <p><strong>Class:</strong> {student.class}</p>
//               <p><strong>Occupation:</strong> {student.occupation}</p>
//               <p><strong>Age:</strong> {student.age}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </StyledWrapper>
//   );
// };

// export default Dashboard;

// const StyledWrapper = styled.div`
//   padding: 40px 20px;
//   font-family: "Poppins", sans-serif;
//   background: #f8f9fa;
//   min-height: 100vh;

//   h1 {
//     color: #007bff;
//     text-align: center;
//     margin-bottom: 10px;
//   }

//   h2 {
//     text-align: center;
//     margin-bottom: 30px;
//     color: #333;
//   }

//   .cards-container {
//     display: grid;
//     gap: 20px;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     max-width: 900px;
//     margin: auto;
//   }

//   .card {
//     background: white;
//     padding: 20px;
//     border-radius: 12px;
//     box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//   }

//   .card h3 {
//     margin-bottom: 5px;
//     color: #333;
//   }

//   .card p {
//     margin: 5px 0;
//     color: #555;
//   }
// `;





// import styled from "styled-components";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const [allStudents, setAllStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
  
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get logged-in user from navigation state
//   const [loggedInUser, setLoggedInUser] = useState(location.state?.user || null);

//   // Redirect if user is not logged in
//   useEffect(() => {
//     if (!loggedInUser) {
//       alert("You must log in first!");
//       navigate("/signin");
//     }
//   }, [loggedInUser, navigate]);

//   // Fetch all students from backend
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/user/all-students"
//         );
//         setAllStudents(response.data);
//       } catch (err) {
//         console.error("Error fetching students:", err.response?.data || err.message);
//         setError("Failed to load students. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   // Handle sign out
//   const handleSignOut = () => {
//     setLoggedInUser(null);
//     navigate("/signin");
//   };

//   return (
//     <StyledWrapper>
//       {loggedInUser && (
//         <div className="header">
//           <h1>Welcome, {loggedInUser.firstName}!</h1>
//           <button className="signout-btn" onClick={handleSignOut}>
//             Sign Out
//           </button>
//         </div>
//       )}
//       <h2>All Students</h2>

//       {loading ? (
//         <p>Loading students...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : allStudents.length === 0 ? (
//         <p>No students found.</p>
//       ) : (
//         <div className="cards-container">
//           {allStudents.map((student, index) => (
//             <div className="card" key={index}>
//               <h3>{student.name}</h3>
//               <p>
//                 <strong>Class:</strong> {student.class}
//               </p>
//               <p>
//                 <strong>Occupation:</strong> {student.occupation}
//               </p>
//               <p>
//                 <strong>Age:</strong> {student.age}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </StyledWrapper>
//   );
// };

// export default Dashboard;

// // Styled Components
// const StyledWrapper = styled.div`
//   padding: 40px 20px;
//   font-family: "Poppins", sans-serif;
//   background: #f8f9fa;
//   min-height: 100vh;

//   .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     max-width: 900px;
//     margin: 0 auto 20px auto;
//   }

//   h1 {
//     color: #007bff;
//   }

//   h2 {
//     text-align: center;
//     margin-bottom: 30px;
//     color: #333;
//   }

//   .error {
//     color: red;
//     text-align: center;
//     margin-bottom: 20px;
//   }

//   .cards-container {
//     display: grid;
//     gap: 20px;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     max-width: 900px;
//     margin: auto;
//   }

//   .card {
//     background: white;
//     padding: 20px;
//     border-radius: 12px;
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   }

//   .card h3 {
//     margin-bottom: 5px;
//     color: #333;
//   }

//   .card p {
//     margin: 5px 0;
//     color: #555;
//   }

//   .signout-btn {
//     background: #dc3545;
//     color: white;
//     border: none;
//     padding: 8px 15px;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: 0.3s;
//   }

//   .signout-btn:hover {
//     opacity: 0.85;
//   }
// `;


// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const [allStudents, setAllStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
  
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get logged-in user from navigation state
//   const loggedInUser = location.state?.user;

//   // Redirect if user is not logged in
//   useEffect(() => {
//     if (!loggedInUser) {
//       alert("You must log in first!");
//       navigate("/signin");
//     }
//   }, [loggedInUser, navigate]);

//   // Fetch all students from backend
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/user/all-students"
//         );
//         setAllStudents(response.data);
//       } catch (err) {
//         console.error("Error fetching students:", err.response?.data || err.message);
//         setError("Failed to load students. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <StyledWrapper>
//       {loggedInUser && <h1>Welcome, {loggedInUser.firstName}!</h1>}
//       <h2>All Students</h2>

//       {loading ? (
//         <p>Loading students...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : allStudents.length === 0 ? (
//         <p>No students found.</p>
//       ) : (
//         <div className="cards-container">
//           {allStudents.map((student, index) => (
//             <div className="card" key={index}>
//               <h3>{student.name}</h3>
//               <p>
//                 <strong>Class:</strong> {student.class}
//               </p>
//               <p>
//                 <strong>Occupation:</strong> {student.occupation}
//               </p>
//               <p>
//                 <strong>Age:</strong> {student.age}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </StyledWrapper>
//   );
// };

// export default Dashboard;

// // Styled Components
// const StyledWrapper = styled.div`
//   padding: 40px 20px;
//   font-family: "Poppins", sans-serif;
//   background: #f8f9fa;
//   min-height: 100vh;

//   h1 {
//     color: #007bff;
//     text-align: center;
//     margin-bottom: 10px;
//   }

//   h2 {
//     text-align: center;
//     margin-bottom: 30px;
//     color: #333;
//   }

//   .error {
//     color: red;
//     text-align: center;
//     margin-bottom: 20px;
//   }

//   .cards-container {
//     display: grid;
//     gap: 20px;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     max-width: 900px;
//     margin: auto;
//   }

//   .card {
//     background: white;
//     padding: 20px;
//     border-radius: 12px;
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   }

//   .card h3 {
//     margin-bottom: 5px;
//     color: #333;
//   }

//   .card p {
//     margin: 5px 0;
//     color: #555;
//   }
// `;






// import React, { useEffect, useState } from "react";

// import styled from "styled-components";
// import axios from "axios";

// const Dashboard = () => {
//   const [allStudents, setAllStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Example: Logged-in user name
//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {
//     firstName: "User",
//   };

//   // Fetch all students from backend
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/user/all-students");
//         setAllStudents(response.data);
//       } catch (error) {
//         console.error(
//           "Error fetching students:",
//           error.response ? error.response.data : error.message
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <StyledWrapper>
//       <h1>Welcome, {loggedInUser.firstName}!</h1>
//       <h2>All Students</h2>

//       {loading ? (
//         <p>Loading students...</p>
//       ) : allStudents.length === 0 ? (
//         <p>No students found.</p>
//       ) : (
//         <div className="cards-container">
//           {allStudents.map((student, index) => (
//             <div className="card" key={index}>
//               <h3>{student.name}</h3>
//               <p>
//                 <strong>Class:</strong> {student.class}
//               </p>
//               <p>
//                 <strong>Occupation:</strong> {student.occupation}
//               </p>
//               <p>
//                 <strong>Age:</strong> {student.age}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </StyledWrapper>
//   );
// };



// // Styled Components
// const StyledWrapper = styled.div`
//   padding: 40px 20px;
//   font-family: "Poppins", sans-serif;
//   background: #f8f9fa;
//   min-height: 100vh;

//   h1 {
//     color: #007bff;
//     text-align: center;
//     margin-bottom: 10px;
//   }

//   h2 {
//     text-align: center;
//     margin-bottom: 30px;
//     color: #333;
//   }

//   .cards-container {
//     display: grid;
//     gap: 20px;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     max-width: 900px;
//     margin: auto;
//   }

//   .card {
//     background: white;
//     padding: 20px;
//     border-radius: 12px;
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   }

//   .card h3 {
//     margin-bottom: 5px;
//     color: #333;
//   }

//   .card p {
//     margin: 5px 0;
//     color: #555;
//   }
// `;


// export default Dashboard;