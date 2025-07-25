
export default function Header({FontAwesomeIcon, faFolder, darkModeToggle, darkMode}) {
    console.log("Header Gets:",darkMode);
    return (
        <>
            <nav className={darkMode ? "darkBackGround" : ""}>
                <FontAwesomeIcon icon={faFolder} className="fa-regular"/>
                <h1>Kouki Check</h1>
                <button className={`modeButton wi ${darkMode ? "wi-moon-waning-crescent-5": "wi-day-sunny"}`}
                onClick={() => darkModeToggle()}>
                    
                </button>
            </nav>
        </>
    )
}