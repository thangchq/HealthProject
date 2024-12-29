
import React from 'react';
import styles from './styles.module.less';
import useHome from '@/hooks/useHome';
import ChartData from '@/components/ChartData'
import MealHistory from '@/components/MealHistory'
import MenuItem from '@/components/MenuItem'
import MainPhoto from "@/assets/main_photo.jpg";
import CircleIcon from "@/assets/circle.svg";

import SrollIcon from "@/assets/component_scroll.svg";

const ColumnPage = () => {
  const { dataMeal, dataMenu } = useHome()
  const onScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className={styles.container}>

      <div className={styles.containerTop}>
        <div className={styles.left}>
        <div className={styles.percent}>
          <div className={styles.textPercent}>05/21<span className={styles.textLeft}>75%</span></div>
        <img className={styles.circleIcon} src={CircleIcon}></img>

        </div>
        <img className={styles.mainPhoto} src={MainPhoto}></img>

  
        </div>
        <div className={styles.containerChart}>
          <ChartData />
        </div>
      </div>

      <div className={styles.containerBody}>
        <div className={styles.containerScrollMenu}>
          {dataMenu.map((item, index) => (
            <MenuItem index={index} {...item} />
          ))}
        </div>

        <div className={styles.containerScrollContent}>
          {dataMeal.map((item, index) => (
            <MealHistory index={index} {...item} />
          ))}
        </div>
        <div className={styles.button}>記録をもっと見る</div>
      </div>


    </div>
  );
};

export default ColumnPage;
