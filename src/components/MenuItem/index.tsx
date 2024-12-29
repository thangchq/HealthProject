
import styles from './styles.module.less';

type Item = {
  title: string
  logo: string
  index: number
  image: string
}

const MenuItem: React.FC<Item> = ({ title, logo, index, image }) => {

  return (
    <div key={index} className={styles.container}>
      <div className={styles.containerBody}>
          <img src={image} className={styles.image}></img>
          <div className={styles.textLayout}>
          <img src={logo} className={styles.logo}></img>
          <div className={styles.textTitle}>{title}</div>
          </div>

      </div>
    </div>
  );
}

export default MenuItem;
