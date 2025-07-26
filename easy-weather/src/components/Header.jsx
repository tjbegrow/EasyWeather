
export default function Header({FontAwesomeIcon, faGears, darkModeToggle, darkMode}) {
    console.log("Header Gets:",darkMode);
    return (
        <>
            <nav className={darkMode ? "darkBackGround" : ""}>
                <FontAwesomeIcon icon={faGears} className="fa-regular fa-2x"/>
                <h1>Kouki Check</h1>
                <button className={`modeButton wi ${darkMode ? "wi-moon-waning-crescent-5": "wi-day-sunny"}`}
                onClick={() => darkModeToggle()}>
                    
                </button>
            </nav>
        </>
    )
}