import styles from "../styles/MainContainer/MainContainer.module.css"
import 'react-toastify/dist/ReactToastify.css';


export default function MainContainer({ children }) {
  return <div className={styles.mainContainer}>{children}</div>
}
