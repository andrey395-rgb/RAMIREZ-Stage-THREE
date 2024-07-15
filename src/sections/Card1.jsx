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
          src={"https://reqres.in/img/faces/1-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Bluth"}
          alt2={"George"}
          p={"george.bluth@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#2"}
          src={"https://reqres.in/img/faces/2-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Weaver"}
          alt2={"Janet"}
          p={"janet.weaver@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#3"}
          src={"https://reqres.in/img/faces/3-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Wong"}
          alt2={"Emma"}
          p={"emma.wong@reqres.in"}
        />
      </div>
      
    </section>
  );
}

export default Card1;
