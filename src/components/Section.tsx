import React from 'react'
import styles from "../sytles/Section.module.scss";

export default function Section({color}:{color:string}) {
  return (
    <div className={styles.box}>
      <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, nam
      maxime pariatur ducimus alias eveniet officiis quia quidem atque ullam
      et id laudantium obcaecati itaque sequi perferendis labore adipisci
      minima.
      </p>
      <button className={styles[color]}>버튼</button>
    </div>
  );
}

