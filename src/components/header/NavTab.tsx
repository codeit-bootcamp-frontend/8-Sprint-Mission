import './NavTab.css'

function NavTab({ text = "DUMB", active = "deactive"}) {
    
    const classNames = `${active} tab`;
    
    return (
        <div className={classNames}>
            {text}
        </div>
    )
}

export default NavTab;