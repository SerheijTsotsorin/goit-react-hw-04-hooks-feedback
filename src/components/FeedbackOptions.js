import PropTypes from "prop-types";
import styles from "./Styled.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
     {options.map((option) => (
      <button
        className={styles.button}
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </>
);


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
