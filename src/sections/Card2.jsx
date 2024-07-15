import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import ProjectCard from "../common/ProjectCard";
import { useState } from "react";
import Card from "../sections/Card.jsx";

function Card2() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <section id="Card" className={styles.container}>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#4"}
          src={"https://reqres.in/img/faces/4-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Holt"}
          alt2={"Eve"}
          p={"eve.holt@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#5"}
          src={"https://reqres.in/img/faces/5-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Morris"}
          alt2={"Charles"}
          p={"charles.morris@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#6"}
          src={"https://reqres.in/img/faces/6-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Ramos"}
          alt2={"Tracey"}
          p={"tracey.ramos@reqres.in"}
        />
      </div>
      {isToggled && <Card />}
      <button
        className={isToggled ? styles.No2 : styles.Yes2}
        onClick={() => setIsToggled(!isToggled)}
      >
        {isToggled ? "NO DATA" : "LOAD MORE"}
      </button>
    </section>
  );
}

export default Card2;
