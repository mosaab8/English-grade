import React, { useState } from "react";
import Module from "./module";
import  "./styles.css";

const modules = [   
  { name: "Written Expression", coefficient: 2 },
  { name: "Oral Expression ", coefficient: 2 },
  { name: "Grammar ", coefficient: 2 },  
  { name: "Phonetics and linguistics", coefficient: 1 }, 
  { name: "Study Skills", coefficient: 1 }, 
  { name: "French", coefficient: 1 }, 
  { name: "Civilization", coefficient: 1 }, 
  { name: "Reading", coefficient: 1 }, 
  { name: "E-learning", coefficient: 1 }, 
  { name: "Literature", coefficient: 1 }, 


];   

const GradeCalculator = () => {
  const [grades, setGrades] = useState({});
  const [showGrade, setshowGrade] = useState(false)


  const updateGrade = (name, finalMark, coefficient) => {
    setGrades(prev => ({ ...prev, [name]: { finalMark, coefficient } }));
  };

  
  const calculateAverage = () => {
    let totalWeightedMarks = 0;
    let totalCoefficients = 0;

    Object.values(grades).forEach(({ finalMark, coefficient }) => {
      totalWeightedMarks += finalMark * coefficient;
      totalCoefficients += coefficient;
    });


    return totalCoefficients > 0 ? (totalWeightedMarks / totalCoefficients).toFixed(2) : "N/A";
  };

  return (
    <div  className="container" >
      <h2 id="mainHeader" >Grade Calculator</h2>
      {modules.map((mod, index) => (
        <Module key={index} name={mod.name} coefficient={mod.coefficient} onChange={updateGrade} />
      ))}
      
      <button id="btn" onClick={() => {
           setshowGrade(!showGrade)
      }}> Calculate Grade </button> 
       {showGrade ? (
       <h3>
       Average Grade:{" "}
       <span style={{ color: calculateAverage() >= 10 ? "green" : "red" }}>
         {calculateAverage()}
       </span>
     </h3>
       ) : <></>
       
      }  
      
       
        
    </div>
  );
};



export default GradeCalculator;
