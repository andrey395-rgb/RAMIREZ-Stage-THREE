import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import ProjectCard from "../common/ProjectCard";
import {useState} from 'react';
import Card4 from "./Card4";

function Card() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };
    return (
    <section id="Card" className={styles.container}>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#7"}
          src={"https://reqres.in/img/faces/7-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Lawson"}
          alt2={"Michael"}
          p={"michael.lawson@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#8"}
          src={"https://reqres.in/img/faces/8-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Ferguson"}
          alt2={"Lindsay"}
          p={"lindsay.ferguson@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#9"}
          src={"https://reqres.in/img/faces/9-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Funke"}
          alt2={"Tobias"}
          p={"tobias.funke@reqres.in"}
        />
      </div>
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
