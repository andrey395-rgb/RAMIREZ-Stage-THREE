import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import ProjectCard from "../common/ProjectCard";
import {useState} from 'react';

function Card() {
  const [show, setShow] = useState(true)
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
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#10"}
          src={"https://reqres.in/img/faces/10-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Fields"}
          alt2={"Byron"}
          p={"byron.fields@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#11"}
          src={"https://reqres.in/img/faces/11-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Edwards"}
          alt2={"George"}
          p={"george.edwards@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#12"}
          src={"https://reqres.in/img/faces/12-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Howell"}
          alt2={"Rachel"}
          p={"rachel.howell@reqres.in"}
        />
      </div>
     
    </section>
  );
}

export default Card;
