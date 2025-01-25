import styles from './label.module.css';

// eslint-disable-next-line react/prop-types
export default function Label({children, htmlFor = null}) {
    return <label htmlFor={htmlFor} className={styles.label}>{children}</label>
}