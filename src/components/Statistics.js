import PropTypes from "prop-types";
import Notification from "./Notification";
import styles from "./Styled.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total > 0) {
    return (
      <div className={styles.statistics}>
        <p className={styles.statistics_item}>Good: {good}</p>
        <p className={styles.statistics_item}>Neutral: {neutral}</p>
        <p className={styles.statistics_item}>Bad: {bad}</p>
        <p className={styles.statistics_item}>Total: {total}</p>
        <p className={styles.statistics_item}>
          Positive feedback: {positivePercentage}%
        </p>
      </div>
    );
  }
  return <Notification message="There is no feedback" />;
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
