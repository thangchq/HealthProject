
import styles from './styles.module.less';


type Item = {
  index: number
  image: string
  time: string
}

const MealHistory: React.FC<Item> = ({ index, image, time }) => {

  return (
    <div key={index} className={styles.container}>
      <div className={styles.containerBody}>
        <div className={styles.containerImage}>
          <img src={image} className={styles.image}></img>
          <div className={styles.dateLayout}>{time}</div>
        </div>
      </div>
    </div>
  );
}

export default MealHistory;
