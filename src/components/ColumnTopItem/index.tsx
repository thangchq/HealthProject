
import styles from './styles.module.less';
type Item = {
  title: string
  content: string
  index: number
}

const ColumnItem: React.FC<Item> = ({ title, content, index }) => {
  return (
    <div key={index} style={{marginLeft: index === 0 ? 0 : 24}} className={styles.container}>
      <div className={styles.containerBody}>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.line} />
        <div className={styles.textContent}>{content}</div>
      </div>
    </div>
  );
}

export default ColumnItem;
