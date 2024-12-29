
import styles from './styles.module.less';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
      <span className={styles.textTitle}>会員登録</span>

      <span className={styles.textTitle}>運営会社</span>

      <span className={styles.textTitle}>利用規約</span>

      <span className={styles.textTitle}>個人情報の取扱について</span>

      <span className={styles.textTitle}>特定商取引法に基づく表記</span>

      <span className={styles.textTitle}>お問い合わせ</span>

      </div>
    </div>
  );
}
