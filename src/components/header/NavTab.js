import './NavTab.css'

function NavTab({ text = "DUMB", active = "deactive", className = "", link = "/"}) {
    
    const classNames = `${active} tab ${className}`;
    
    return (
        <a className={classNames} href={link}>
            {text}
        </a>
    )
}

export default NavTab;