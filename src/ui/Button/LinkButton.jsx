import { NavLink } from 'react-router-dom';
import styles from './Button.module.css';

export default function LinkButton({ path, btnName, className }) {
  return (
    <>
      <div className={`${styles.btnContainer} ${className}`}>
        <NavLink to={path}>{btnName}</NavLink>
      </div>
    </>
  );
}
