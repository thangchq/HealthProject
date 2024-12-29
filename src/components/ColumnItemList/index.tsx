
import styles from './styles.module.less';


type Item = {
  title: string
  content: string
  index: number
  image: string
  time: string
}

const ColumnItem: React.FC<Item> = ({ title, content, index, image, time }) => {

  return (
    <div key={index} className={styles.container}>
      <div className={styles.containerBody}>
        <div className={styles.containerImage}>
          <img src={image} className={styles.image}></img>
          <div className={styles.dateLayout}>{time}</div>
        </div>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.textContent}>{content}</div>
      </div>
    </div>
  );
}

export default ColumnItem;
