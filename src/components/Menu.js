import "./Menu.css";

function Menu({ href, className, name, onClick }) {
  const classNames = `Menu ${className}`;

  return (
    <div className="Menu-wrapper">
      <a className={classNames} href={href} onClick={onClick}>
        {name}
      </a>
    </div>
  );
}

export default Menu;
