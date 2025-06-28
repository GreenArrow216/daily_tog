import styles from "./pageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFoundContainer}>
      <h1>OOPS! Page not found</h1> <p>Please check the url again</p>
    </div>
  );
};

export default PageNotFound;
