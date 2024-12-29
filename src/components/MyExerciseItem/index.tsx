
import styles from './styles.module.less';
type Item = {
  title: string
  content: string
  index: number
  time: string
}

const MyExerciseItem: React.FC<Item> = ({ title, content, index, time }) => {
  return (
    <div key={index} className={styles.container}>
      <div className={styles.containerBody}>
        <div className={styles.rowSpace}>
          <div className={styles.row}>
            <div className={styles.dotLine}></div>
            <div className={styles.column}>
              <div className={styles.textTitle}>{title}</div>
              <div className={styles.textContent}>{content}</div>
            </div>
          </div>
          <div className={styles.textTime}>{time}</div>
        </div>
        <div className={styles.line} />

      </div>
    </div>
  );
}

export default MyExerciseItem;
