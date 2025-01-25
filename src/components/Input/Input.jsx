import styles from './input.module.css';

// eslint-disable-next-line react/prop-types
export default function Input({type, onChange, value, name = null, id = null}) {
    return <input type={type} name={name} id={id} className={styles.input} value={value} onChange={onChange}/>
}