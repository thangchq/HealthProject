
import React from 'react';
import styles from './styles.module.less';
import useRecord from '@/hooks/useRecord';
import MyExerciseItem from '@/components/MyExerciseItem'
import TopRecord from '@/components/TopRecord'
import DiaryItem from '@/components/DiaryItem'
import ChartData from '@/components/ChartData'

import SrollIcon from "@/assets/component_scroll.svg";

const ColumnPage = () => {
  const { dataDiary, dataExercise, dataList } = useRecord()
  const onScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className={styles.container}>

      <div className={styles.containerScrollContent}>
        {dataList.map((item, index) => (
          <TopRecord index={index} {...item} />
        ))}
      </div>

      <div className={styles.containerChart}>
        <div className={styles.row}>
          <div className={styles.textTitle}>BODY RECORD</div>
          <div style={{ marginLeft: 20 }} className={styles.textTitle}>2021.05.21</div>
        </div>
        <div className={styles.chart}>
         <ChartData />
        </div>
        <div className={styles.row}>
          <div className={styles.btn}>日</div>
          <div className={styles.btn}>週</div>
          <div className={styles.btn}>月</div>
          <div style={{ backgroundColor: '#FFCC21' }} className={styles.btn}>年</div>
        </div>
      </div>

      <div className={styles.containerParentExercise}>
        <div className={styles.row}>
          <div className={styles.textTitle}>MY EXERCISE</div>
          <div style={{ marginLeft: 20 }} className={styles.textTitle}>2021.05.21</div>
        </div>
        <div className={styles.containerScrollExercise}>
          {dataExercise.map((item, index) => (
            <MyExerciseItem index={index} {...item} />
          ))}
        </div>
      </div>

      <div className={styles.textDark}>MY DIARY</div>
      <div className={styles.containerScrollDiary}>
        {dataDiary.map((item, index) => (
          <DiaryItem index={index} {...item} />
        ))}
      </div>


      <div onClick={onScroll} className={styles.buttonTop}>
        <img src={SrollIcon}></img>
      </div>
      <div className={styles.button} >自分の日記をもっと見る</div>
    </div>
  );
};

export default ColumnPage;
