import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import Employees from "../common/ProjectCard";
import {useState} from 'react';
import Card4 from "./Card4";

function Card() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  const [employees, setEmployees] = useState([
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
  ]);
  return (
    <section id="Card" className={styles.container}>
      {employees.map((employees) => {
        console.log(employees);
        return (
        <div className={styles.cardscontainer}> 
          <Employees
            id={employees.id}
            email={employees.email}
            first_name={employees.first_name}
            last_name={employees.last_name}
            avatar={employees.avatar}
          />
        </div>
        );
      })}
      <div className={styles.extra}>
      {isToggled && <Card4 />}
      <button
        className={isToggled ? styles.No2 : styles.Yes2}
        onClick={() => setIsToggled(!isToggled)}
      >
        {isToggled ? "NO DATA" : "LOAD MORE"}
      </button>
      </div>
      
    </section>
  );
}

export default Card;
