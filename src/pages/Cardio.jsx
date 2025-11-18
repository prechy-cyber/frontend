// src/pages/Cardio.jsx
import React from "react";
import Cadd from "../components/Cadd";

const Cardio = () => {
  const workouts = [
    {
      title: "Running",
      description: "Boost stamina and burn calories fast.",
      image: "https://th.bing.com/th/id/OIP.yQU_e6fmUOHYrOLu_aQHdgHaH_?w=176&h=190&c=7&r=0&o=7&cb=ucfimgc2&pid=1.7&rm=3"
    },
    {
      title: "Cycling",
      description: "Low impact, high results for your legs and lungs.",
      image: "https://thumbs.dreamstime.com/z/cyclist-pictogram-human-figure-stick-man-riding-bike-healthy-lifestyle-sports-cycling-341961076.jpg"
    },
    {
      title: "Jump Rope",
      description: "Fun, effective cardio for coordination and endurance.",
      image: "https://tse1.mm.bing.net/th/id/OIP.hcrDAfmxQ79QoLW3qbdhbAHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
     {
      title: "Jump Rope",
      description: "Fun, effective cardio for coordination and endurance.",
      image: "https://tse1.mm.bing.net/th/id/OIP.hcrDAfmxQ79QoLW3qbdhbAHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
     {
      title: "Jump Rope",
      description: "Fun, effective cardio for coordination and endurance.",
      image: "https://tse1.mm.bing.net/th/id/OIP.hcrDAfmxQ79QoLW3qbdhbAHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
     {
      title: "Jump Rope",
      description: "Fun, effective cardio for coordination and endurance.",
      image: "https://tse1.mm.bing.net/th/id/OIP.hcrDAfmxQ79QoLW3qbdhbAHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <div style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "20px"
    }}>
      {workouts.map((item, index) => (
        <Cadd
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Cardio;
