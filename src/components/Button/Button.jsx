import './button.css';

// eslint-disable-next-line react/prop-types
export default function Button({children, onClick, type = 'button'}) {
    return <button className="btn" type={type} onClick={onClick}>{children}</button>
}