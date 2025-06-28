import styles from "./loader.module.scss";

const Loader = ({visible}: {visible:boolean}) => {
  return (
    <div
      className={`${styles.spinnerOverlay} ${
        !visible ? `${styles.hidden}` : ""
      }`}
    >
     <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
