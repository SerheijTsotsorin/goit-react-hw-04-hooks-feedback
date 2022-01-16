import PropTypes from "prop-types";
import styles from "./Styled.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}> {title}</h1>
      {children}
    </div>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
