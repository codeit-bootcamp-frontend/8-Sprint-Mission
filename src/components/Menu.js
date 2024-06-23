import "./Menu.css";

function Menu({ className, name, href }) {
  const classNames = `Menu ${className}`;
  return (
    <div className="Menu-wrapper">
      <a className={classNames} href={href}>
        {name}
      </a>
    </div>
  );
}

export default Menu;
