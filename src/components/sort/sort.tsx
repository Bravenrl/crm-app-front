import styles from './sort.module.scss';

type SortProps = {};

function Sort({}: SortProps): JSX.Element {
  return (
    <div className={styles.sort}>
      <button className={`${styles.button} ${styles.buttonUp}`}></button>
      <button
        className={`${styles.button} ${styles.buttonActive} ${styles.buttonDown}`}
      ></button>
    </div>
  );
}

export default Sort;
