import styles from './button.module.css';

// eslint-disable-next-line react/prop-types
export default function Button({children, type = null, onClick = null}) {
    return <button className={styles.btn} type={type} onClick={onClick}>{children}</button>
}