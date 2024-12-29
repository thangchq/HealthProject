
import styles from './styles.module.less';
type Item = {
  title: string
  content: string
  index: number
  day: string
  hour: string
}

const DiaryItem: React.FC<Item> = ({ title, content, index, day, hour }) => {
  return (
    <div key={index} className={styles.container}>
      <div className={styles.containerBody}>
        <div className={styles.textTime}>{day}</div>
        <div className={styles.textTime}>{hour}</div>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.textContent}>{content}</div>
      </div>
    </div>
  );
}

export default DiaryItem;
