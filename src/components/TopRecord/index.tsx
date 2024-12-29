
import styles from './styles.module.less';

type Item = {
  title: string
  content: string
  index: number
  image: string
}

const TopRecord: React.FC<Item> = ({ title, content, index, image }) => {

  return (
    <div key={index} className={styles.container}>
      <div className={styles.containerBody}>
        
          <img src={image} className={styles.image}></img>
          <div className={styles.dateLayout}>
          </div>
          <div className={styles.textLayout}>
            <div className={styles.textTitle}>{title}</div>
            <div className={styles.textContent}>{content}</div>
          </div>

      </div>
    </div>
  );
}

export default TopRecord;
