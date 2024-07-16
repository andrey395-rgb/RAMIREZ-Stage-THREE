import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import Employees from "../common/ProjectCard";
import { useState } from "react";
import Card2 from "./Card2";

function Card1() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  const [employees, setEmployees] = useState([
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
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
        {isToggled && <Card2 />}
        <button
          className={isToggled ? styles.No1 : styles.Yes1}
          onClick={() => setIsToggled(!isToggled)}
        >
          {isToggled ? "CLOSE" : "LOAD MORE"}
        </button>
      </div>
    </section>
  );
}

export default Card1;
