import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import ProjectCard from "../common/ProjectCard";
import {useState} from 'react';

function Card4() {
  const [show, setShow] = useState(true)
  return (
    <section id="Card" className={styles.container}>
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

export default Card4;
