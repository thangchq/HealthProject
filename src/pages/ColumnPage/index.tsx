
import React from 'react';
import styles from './styles.module.less';
import useColumn from '@/hooks/useColumn';
import ColumnTopItem from '@/components/ColumnTopItem'
import ColumnItemList from '@/components/ColumnItemList'
import SrollIcon from "@/assets/component_scroll.svg";


const ColumnPage = () => {
  const { dataTop, dataColumn } = useColumn()
  const onScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.containerScroll}>
        {dataTop.map((item, index) => (
          <ColumnTopItem index={index} {...item} />
        ))}
      </div>

      <div className={styles.containerScrollContent}>
        {dataColumn.map((item, index) => (
          <ColumnItemList index={index} {...item} />
        ))}
      </div>
      <div onClick={onScroll} className={styles.buttonTop}>
        <img src={SrollIcon}></img>
      </div>
      <div className={styles.button} >コラムをもっと見る</div>
    </div>
  );
};

export default ColumnPage;
