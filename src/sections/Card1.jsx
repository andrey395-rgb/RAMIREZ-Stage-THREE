import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import avatar from "../assets/Pokes/charmander.png";
import avatar1 from "../assets/Pokes/bulbasaur.png";
import avatar2 from "../assets/Pokes/squirtle.png";
import ProjectCard from "../common/ProjectCard";
import {useState} from 'react';

function Card1() {
  const [show, setShow] = useState(true)
  return (
    <section id="Card" className={styles.container}>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#1"}
          src={avatar}
          link={"https://mail.google.com/"}
          alt={"CHARMANDER"}
          p={"charmander1@gmail.com"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#2"}
          src={avatar1}
          link={"https://mail.google.com/"}
          alt={"BULBASAUR"}
          p={"bulbasaur2@gmail.com"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#3"}
          src={avatar2}
          link={"https://mail.google.com/"}
          alt={"SQUIRTLE"}
          p={"squirtle3@gmail.com"}
        />
      </div>
    </section>
  );
}

export default Card1;
