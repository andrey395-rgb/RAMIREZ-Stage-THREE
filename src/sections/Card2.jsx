import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import Employees from "../common/ProjectCard";
import { useState } from "react";
import Card from "../sections/Card.jsx";

function Card2() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  const [employees, setEmployees] = useState([
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ]);
  return (
    <section id="Card" className={styles.container}>
      {employees.map((employees) => {
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
      {isToggled && <Card />}
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

export default Card2;
