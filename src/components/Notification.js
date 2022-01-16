import propTypes from "prop-types";
import styles from "./Styled.module.css";

const Notification = ({ message }) => {
  return <p className={styles.notification}>{message}</p>;
};
export default Notification;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
