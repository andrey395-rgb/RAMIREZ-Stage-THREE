import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import Employees from "../common/ProjectCard";
import {useState} from 'react';

function Card4() {
  const [show, setShow] = useState(true)
  const [employees, setEmployees] = useState([
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
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
    </section>
  );
}

export default Card4;
