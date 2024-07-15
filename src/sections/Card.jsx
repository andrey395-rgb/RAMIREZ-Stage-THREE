import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import avatar from "../assets/Pokes/charmeleon.png";
import avatar1 from "../assets/Pokes/ivysaur.png";
import avatar2 from "../assets/Pokes/wartortle.png";
import avatar3 from "../assets/Pokes/charizard.png";
import avatar4 from "../assets/Pokes/venusaur-f.png";
import avatar5 from "../assets/Pokes/blastoise.png";
import ProjectCard from "../common/ProjectCard";
import {useState} from 'react';

function Card() {
  const [show, setShow] = useState(true)
  return (
    <section id="Card" className={styles.container}>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#4"}
          src={avatar}
          link={"https://mail.google.com/"}
          alt={"CHARMELEON"}
          p={"charmeleon4@gmail.com"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#5"}
          src={avatar1}
          link={"https://mail.google.com/"}
          alt={"IVYSAUR"}
          p={"ivysaur5@gmail.com"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#6"}
          src={avatar2}
          link={"https://mail.google.com/"}
          alt={"WARTORTLE"}
          p={"wartortle6@gmail.com"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#7"}
          src={avatar3}
          link={"https://mail.google.com/"}
          alt={"CHARIZARD"}
          p={"charizard7@gmail.com"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#8"}
          src={avatar4}
          link={"https://mail.google.com/"}
          alt={"VENUSAUR"}
          p={"venusaur8@gmail.com"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#9"}
          src={avatar5}
          link={"https://mail.google.com/"}
          alt={"BLASTOISE"}
          p={"blastoise9@gmail.com"}
        />
      </div>
    </section>
  );
}

export default Card;
